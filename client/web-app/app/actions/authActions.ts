import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (session && session.user) {
      return session.user;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
