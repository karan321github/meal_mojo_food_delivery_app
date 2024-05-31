import jwt from 'jsonwebtoken';

export const generateToken = async (id) => {
  return jwt.sign({ id }, "Singh8750", { expiresIn: "5h" });
};
