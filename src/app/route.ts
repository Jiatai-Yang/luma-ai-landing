import { NextRequest, NextResponse } from 'next/server';
export function GET(request:NextRequest){const preferred=request.cookies.get('luma-locale')?.value;const locale=preferred==='en'?'en':'zh';return NextResponse.redirect(new URL(`/${locale}`,request.url));}
