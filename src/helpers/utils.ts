import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) =>
  //   return new Promise((resolve, reject) => {
  //     bcrypt.genSalt(+process.env.SALT, (err, salt) => {
  //       if (err) reject(err);
  //       bcrypt.hash(password, salt, (err, hashedPassword) => {
  //         if (err) reject(err);
  //         resolve(hashedPassword);
  //       });
  //     });
  //   });
  await bcrypt.hash(password, bcrypt.genSaltSync(+process.env.SALT));

export const comparePassword = (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);
