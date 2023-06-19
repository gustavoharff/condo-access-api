import { randomUUID } from "crypto";
import { Car } from "../models/car.model";
import { carsRepository } from "..";

interface CreateCar {
  plate: string;
  userId: string;
}

export function createCar(params: CreateCar) {
  const car: Car = {
    id: randomUUID(),
    plate: params.plate,
    userId: params.userId,
  };

  carsRepository.create(car);

  return car;
}
