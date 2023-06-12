import { randomUUID } from "node:crypto";

import { Access } from "../models/access.model";

export class AccessesRepository {
  private accesses: Access[] = [];

  constructor() {
    this.create = this.create.bind(this);
    this.findAllByUserId = this.findAllByUserId.bind(this);
    this.findById = this.findById.bind(this);
  }

  public create(access: Access): Access {
    this.accesses.push(access);

    return access;
  }

  public findAllByUserId(userId: string): Access[] {
    return this.accesses.filter((access) => access.userId === userId);
  }

  public findById(id: string): Access | undefined {
    return this.accesses.find((access) => access.id === id);
  }
}
