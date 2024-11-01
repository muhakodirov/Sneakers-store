// "@/utils/password.ts"

import bcrypt from 'bcrypt'

// Function to salt and hash a password
export async function saltAndHashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}
