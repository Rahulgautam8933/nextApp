import { NextResponse } from 'next/server'

export const config = {
    matcher: "/studentlist/:path*"
}

const middleware = (request) => {
    return NextResponse.redirect(new URL('/profile', request.url))
}

export default middleware