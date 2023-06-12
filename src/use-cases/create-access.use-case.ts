import { randomUUID } from "crypto";
import { accessesRepository } from "..";
import { Access } from "../models/access.model";
import dayjs from "dayjs";

interface CreateAccess {
  userId: string;
  date: string;
}

export async function createAccess(data: CreateAccess) {
  console.log(data)

  const access: Access = {
    id: randomUUID(),
    date: dayjs(data.date, 'YYYY-MM-DD HH:mm:ss').toDate(),
    userId: data.userId,
  }

  accessesRepository.create(access);

  return access;
}
