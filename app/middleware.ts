import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const currentUser = req.cookies.get(`next-auth.session-token`)?.value;

  if (currentUser) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }
  return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
  matcher: ["/login", "/signup"],
};
