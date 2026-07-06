import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; 

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Ensure the secret is always available
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) throw new Error("JWT_SECRET not defined");

    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(token, secret);
    
    const userRole = (payload as any).role?.toLowerCase(); // Ensure consistent comparison
    const { pathname } = request.nextUrl;

    // Protection Logic
    if (pathname.startsWith("/dashboard/vendor") && userRole !== "vendor") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/dashboard/rider") && userRole !== "rider") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Adjusting dashboard logic: if user is logged in but tries to go to plain /dashboard,
    // they should be routed to their specific role dashboard
    if (pathname === "/dashboard") {
       return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Proxy Auth Error:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};