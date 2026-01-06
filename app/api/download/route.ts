import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const fileType = searchParams.get("file-type");
  const imageUrl = q as string;

  const response = await fetch(imageUrl);

  if (!response.ok) {
    return new NextResponse("Failed to fetch image", { status: 500 });
  }

  const arrayBuffer = await response.arrayBuffer();

  return new NextResponse(arrayBuffer, {
    headers: {
      "Content-Type": `${fileType}`,
      "Content-Disposition":
        `attachment; filename="untitled.${fileType?.replace("image/", '')}"`,
      "Cache-Control": "no-store"
    }
  });
}