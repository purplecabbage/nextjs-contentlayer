import { NextResponse, NextRequest } from 'next/server'

export function GET(req: NextRequest, res:NextResponse) {
  return NextResponse.json({name: 'John', age: 30})
}