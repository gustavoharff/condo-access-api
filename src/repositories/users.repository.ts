import { randomUUID } from "node:crypto";

import { User } from "../models/user.model";

export class UsersRepository {
  private users: User[] = [
    {
      id: randomUUID(),
      name: "Gustavo",
      email: "gustavo.harff@gmail.com",
      password: "123",
    },
  ];

  constructor() {
    this.create = this.create.bind(this);
    this.findByEmail = this.findByEmail.bind(this);
    this.findById = this.findById.bind(this);
  }

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  public findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
