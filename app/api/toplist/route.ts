import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";
  const res = await fetch(
    `https://wallhaven.cc/api/v1/search?page=${page}&sorting=toplist&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}