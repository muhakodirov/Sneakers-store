// "@/utils/db.ts"
import connectToDatabase from "@/lib/mongo"; // Assuming you have a MongoDB connection utility
import bcrypt from 'bcrypt'
const Users = require('../../../../UsersAdmin/users') //


export async function getUserFromDb(email: string, password: string) {
  await connectToDatabase()
  const user = await Users.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }

  throw new Error("Invalid email or password");
}
