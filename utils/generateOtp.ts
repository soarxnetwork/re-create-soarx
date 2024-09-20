import { v4 as uuidv4 } from "uuid";
import { addMinutes } from "date-fns";

// Function to generate an OTP and expiration time
export const generateOtp = () => {
  const otp = uuidv4().slice(0, 6); // Generate a 6-digit OTP
  const expiresAt = addMinutes(new Date(), 10); // OTP valid for 10 minutes

  return { otp, expiresAt };
};
