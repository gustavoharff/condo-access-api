import { randomUUID } from "crypto";
import { accessesRepository, carsRepository } from "..";
import { Access } from "../models/access.model";
import dayjs from "dayjs";

interface CreateAccess {
  userId: string;
  date: string;
  carId: string;
}

export async function createAccess(data: CreateAccess) {
  const car = carsRepository.findById(data.carId);

  console.log(car)

  if (!car) {
    throw new Error("Car not found");
  }

  console.log(car)

  const access: Access = {
    id: randomUUID(),
    date: dayjs(data.date, "YYYY-MM-DD HH:mm:ss").toDate(),
    userId: data.userId,
    cardId: car.id,
    car: car,
  };

  accessesRepository.create(access);

  return access;
}
