import { usersRepository } from "..";
import jsonwebtoken from "jsonwebtoken";

export async function authenticate(email: string, password: string) {
  const user = usersRepository.findByEmail(email.toLocaleLowerCase());

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token: jsonwebtoken.sign({ userId: user.id }, "123"),
  };
}
