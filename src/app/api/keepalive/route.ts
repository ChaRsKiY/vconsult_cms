import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { error: "Missing Supabase environment variables" },
      { status: 500 }
    );
  }

  try {
    // Requesting the REST API root returns the OpenAPI spec and counts as an API request
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: "GET",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      // Ensure Vercel doesn't aggressively cache this fetch
      cache: "no-store",
    });

    if (response.ok) {
      return NextResponse.json({
        status: "ok",
        message: "Supabase pinged successfully",
      });
    } else {
      return NextResponse.json(
        { status: "error", message: `Supabase returned ${response.status}` },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: String(error) },
      { status: 500 }
    );
  }
}
