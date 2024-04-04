import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
interface SignOption {
  expiresIn: string | number;
}
export const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1d",
};
export const signJwt = (
  payload: JwtPayload,
  option: SignOption = DEFAULT_SIGN_OPTION
) => {
  const secretKey = process.env.JWT_USER_ID_SECRET!;
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyJwt = (token: string) => {
  try {
    const secretKey = process.env.JWT_USER_ID_SECRET!;
    const decoded = jwt.verify(token, secretKey);
    return decoded as JwtPayload;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
