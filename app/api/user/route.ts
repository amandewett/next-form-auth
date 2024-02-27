import { getAppSession } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

export const GET = async (req: Request, res: Response) => {
  const session: any = await getAppSession();

  if (session) {
    return Response.json({
      status: true,
      message: `Success`,
      result: session.user,
    });
  } else {
    return Response.json(
      {
        status: false,
        message: "Not Authorized",
      },
      { status: 401 }
    );
  }
};
