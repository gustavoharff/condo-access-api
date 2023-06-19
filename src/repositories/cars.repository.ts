import { Car } from "../models/car.model";

export class CarsRepository {
  private cars: Car[] = [];

  constructor() {
    this.create = this.create.bind(this);
    this.findAllByUserId = this.findAllByUserId.bind(this);
    this.findById = this.findById.bind(this);
  }

  public create(car: Car): Car {
    this.cars.push(car);

    return car;
  }

  public findAllByUserId(userId: string): Car[] {
    return this.cars.filter((car) => car.userId === userId);
  }

  public findById(id: string): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }
}
