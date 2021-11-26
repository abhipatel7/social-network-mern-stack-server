import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, bcrypt.genSaltSync(+process.env.SALT));

export const comparePassword = (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);
