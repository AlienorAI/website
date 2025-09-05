import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { unauthorized } from "next/navigation";
import { captureServer } from "@/lib/analytics-server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  const isProd = process.env.NODE_ENV === "production";
  const authorized =
    !isProd || authHeader === `Bearer ${process.env.CRON_SECRET}`;

  if (!authorized) {
    try {
      await captureServer("blog_revalidate_denied", { reason: "unauthorized" }, "cron");
    } catch {}
    return unauthorized();
  }

  try {
    revalidatePath("/blog");
    try {
      await captureServer("blog_revalidate", { status: "ok" }, "cron");
    } catch {}
    return NextResponse.json({ revalidated: "true" }, { status: 200 });
  } catch (error) {
    console.error(error);
    console.info("Blog revalidation failed.");
    try {
      await captureServer(
        "blog_revalidate",
        {
          status: "error",
          message:
            error instanceof Error ? error.message : String(error),
        },
        "cron",
      );
    } catch {}
    return NextResponse.json({ revalidated: "false" }, { status: 500 });
  }
}
