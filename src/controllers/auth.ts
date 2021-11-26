import { Request, Response } from 'express';

import User from '../models/user';
import { hashPassword } from '../helpers/utils';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, secret } = req.body;

    if (!name) return res.status(400).send('Name is required!');

    if (!password) return res.status(400).send('Password is required!');

    if (password.length < 6 || password.length > 64)
      return res
        .status(400)
        .send(
          'Password must be between greater than 6 characters and less than 64 characters!'
        );

    if (!email) return res.status(400).send('Email is required!');

    if (!secret) return res.status(400).send('Secret is required!');

    const userExist = await User.findOne({ email });

    if (userExist) return res.status(400).send('Email is taken!');

    const hashedPassword = await hashPassword(password);

    const user = new User({ name, email, password: hashedPassword, secret });

    await user.save();

    return res.json({ ok: true });
  } catch (e) {
    console.log('Registration Failed:', e.message);
    return res.status(400).send('User registration failed!');
  }
};
