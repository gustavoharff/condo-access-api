import { carsRepository } from "..";

export function listUserCars(userId: string) {
  const cars = carsRepository.findAllByUserId(userId);

  return cars;
}
