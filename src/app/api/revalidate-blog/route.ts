import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { unauthorized } from "next/navigation";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (
    process.env.NODE_ENV === "production" &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return unauthorized();
  }

  try {
    revalidatePath("/blog");
    return NextResponse.json({ revalidated: "true" }, { status: 200 });
  } catch (error) {
    console.error(error);
    console.info("Blog revalidation failed.");
    return NextResponse.json({ revalidated: "false" }, { status: 500 });
  }
}
