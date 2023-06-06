import fastify from "fastify";
import { UsersRepository } from "./repositories/users.repository";
import { authenticate } from "./use-cases/auth.use-case";

const app = fastify({ logger: true });

export const usersRepository = new UsersRepository();

app.post("/auth", async (request, reply) => {

  const { email, password } = request.body as any;

  const data = authenticate(email, password);

  return data
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
