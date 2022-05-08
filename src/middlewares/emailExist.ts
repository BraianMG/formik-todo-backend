import { User } from "../models";

export const emailExist = async (email = "") => {
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`The Email ${email} is already registered in the database`);
  }
};
