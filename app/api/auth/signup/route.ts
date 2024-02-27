import { UserService } from "../../_services/users.service";
const userService = new UserService();

export const POST = async (req: Request) => {
  const { firstName, lastName, email, password } = await req.json();
  const response: any = await userService.signup(
    firstName,
    lastName,
    email,
    password
  );
  return Response.json(response, { status: response.code });
};
