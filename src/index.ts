import fastify from "fastify";
import { UsersRepository } from "./repositories/users.repository";
import { authenticate } from "./use-cases/auth.use-case";
import { AccessesRepository } from "./repositories/accesses.repository";
import { auth } from "./middlewares/auth.middleware";
import { createAccess } from "./use-cases/create-access.use-case";
import { listUserAccesses } from "./use-cases/list-user-accesses.use-case";
import { CarsRepository } from "./repositories/cars.repository";
import { createCar } from "./use-cases/create-car.use-case";
import { listUserCars } from "./use-cases/list-user-cars.use-case";

const app = fastify({ logger: true });

export const usersRepository = new UsersRepository();
export const accessesRepository = new AccessesRepository();
export const carsRepository = new CarsRepository();

app.post("/auth", async (request, reply) => {
  const { email, password } = request.body as any;

  const data = authenticate(email, password);

  return data;
});

app.get("/accesses", async (request, reply) => {
  auth(request, reply);

  // @ts-ignore
  const data = listUserAccesses(request.userId);

  return data;
});

app.post("/accesses", async (request, reply) => {
  auth(request, reply);

  const data = createAccess({
    ...(request.body as any),
    // @ts-ignore
    userId: request.userId,
  });

  return data;
});

app.get("/cars", async (request, reply) => {
  auth(request, reply);

  // @ts-ignore
  const data = listUserCars(request.userId);

  return data;
});

app.post("/cars", async (request, reply) => {
  auth(request, reply);

  console.log(request.body)

  const data = createCar({
    ...(request.body as any),
    // @ts-ignore
    userId: request.userId,
  });

  return data;
});

async function start() {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
