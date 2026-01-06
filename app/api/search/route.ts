import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const page = searchParams.get("page") ?? "1";

  const res = await fetch(
    `https://wallhaven.cc/api/v1/search?q=${q}&page=${page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}