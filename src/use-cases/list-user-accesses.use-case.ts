import { accessesRepository } from "..";

export function listUserAccesses(userId: string) {
  const accessses = accessesRepository.findAllByUserId(userId);

  return accessses;
}
