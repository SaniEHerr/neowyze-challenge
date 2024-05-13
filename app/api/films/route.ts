import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json("FilmsGetWorks!");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}