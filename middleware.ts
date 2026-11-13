import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/resources/insights" || pathname.startsWith("/resources/insights/")) {
    return new NextResponse(null, { status: 410 });
  }
}

export const config = {
  matcher: ["/resources/insights", "/resources/insights/:path*"],
};
