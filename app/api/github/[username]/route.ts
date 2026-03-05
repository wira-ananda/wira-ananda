import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> },
) {
  const { username } = await params;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch GitHub user");
    }
    const fullData = await res.json();

    console.log(fullData);
    return NextResponse.json({
      name: "Github User Data",
      data: {
        login: fullData.login,
        name: fullData.name,
        avatar_url: fullData.avatar_url,
        bio: fullData.bio,
        location: fullData.location,
        company: fullData.company,
        followers: fullData.followers,
        following: fullData.following,
        repoCount: fullData.repoCount,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 },
    );
  }
}
