import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { CreateUseUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUseController";

const postgresUserRespository = new PostgresUserRepository;
const mailTrapMailProvider = new MailTrapMailProvider;

const createUserUserCase = new CreateUseUseCase(
  postgresUserRespository,
  mailTrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUserCase
)

export { createUserUserCase, createUserController }