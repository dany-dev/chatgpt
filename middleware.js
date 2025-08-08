import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('x-powered-by', 'middleware');
  return response;
}

export const config = {
  matcher: ['/about'],
};
