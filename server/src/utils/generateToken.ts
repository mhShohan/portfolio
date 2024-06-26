import config from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.JWT_ACCESS_SECRET!, { expiresIn: '1d' });
};

export default generateToken;
