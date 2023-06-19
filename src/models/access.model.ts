import { Car } from "./car.model";

export type Access = {
  id: string;
  date: Date;
  cardId: string;
  car: Car;
  userId: string;
};
