import { FastifyReply, FastifyRequest } from "fastify";
import { ReplyDefault } from "fastify/types/utils";
import jsonwebtoken from "jsonwebtoken";

export function auth(req: FastifyRequest, reply: FastifyReply) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return reply.status(401).send({ message: "Unauthorized" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const decoded = jsonwebtoken.verify(token, "123");

    console.log(decoded)
    // @ts-ignore
    req.userId = decoded.userId; 
  } catch (err) {
    return reply.status(401).send({ message: "Unauthorized" });
  }
}
