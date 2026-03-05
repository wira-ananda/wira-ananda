import { NextResponse } from "next/server";

const getGithubStatsData = async (username: string) => {
  const res = await fetch(
    `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub user");
  }
  const svgText = await res.text();
  // Total contributions tahun ini
  const contribMatch = svgText.match(/(\d+)\s+Contributions/i);
  const totalContributions = contribMatch ? Number(contribMatch[1]) : null;

  // Public repos
  const reposMatch = svgText.match(/(\d+)\s+Public Repos/i);
  const totalRepos = reposMatch ? Number(reposMatch[1]) : null;

  // Joined years
  const joinedMatch = svgText.match(/Joined GitHub (\d+) years/i);
  const joinedYears = joinedMatch ? Number(joinedMatch[1]) : null;

  return {
    totalContributions,
    totalRepos,
    joinedYears,
  };
};

const getGithubStreakData = async (username: string) => {
  const res = await fetch(
    `https://github-readme-streak-stats.herokuapp.com/?user=${username}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub user");
  }
  const svgText = await res.text();

  const totalContributionsMatch = svgText.match(
    /<!-- Total Contributions big number -->[\s\S]*?<text[^>]*>\s*(\d+)\s*<\/text>/i,
  );
  const totalContributionsRangeMatch = svgText.match(
    /<!-- Total Contributions range -->[\s\S]*?<text[^>]*>\s*([^<]+)\s*<\/text>/i,
  );
  const currentStreakMatch = svgText.match(
    /<!-- Current Streak big number -->[\s\S]*?<text[^>]*>\s*(\d+)\s*<\/text>/i,
  );
  const currentStreakRangeMatch = svgText.match(
    /<!-- Current Streak range -->[\s\S]*?<text[^>]*>\s*([^<]+)\s*<\/text>/i,
  );
  const longestStreakMatch = svgText.match(
    /<!-- Longest Streak big number -->[\s\S]*?<text[^>]*>\s*(\d+)\s*<\/text>/i,
  );
  const longestStreakRangeMatch = svgText.match(
    /<!-- Longest Streak range -->[\s\S]*?<text[^>]*>\s*([^<]+)\s*<\/text>/i,
  );

  return {
    totalContributions: totalContributionsMatch
      ? Number(totalContributionsMatch[1])
      : null,
    totalContributionsRange: totalContributionsRangeMatch
      ? totalContributionsRangeMatch[1].trim()
      : null,
    currentStreak: currentStreakMatch ? Number(currentStreakMatch[1]) : null,
    currentStreakRange: currentStreakRangeMatch
      ? currentStreakRangeMatch[1].trim()
      : null,
    longestStreak: longestStreakMatch ? Number(longestStreakMatch[1]) : null,
    longestStreakRange: longestStreakRangeMatch
      ? longestStreakRangeMatch[1].trim()
      : null,
  };
};
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
    const githubStatsData = await getGithubStatsData(username);
    const githubStreakData = await getGithubStreakData(username);

    const totalContributions = githubStreakData.totalContributions;
    const joinedYears = githubStatsData.joinedYears;
    const totalRepos = githubStatsData.totalRepos;

    return NextResponse.json({
      name: "Github Stats Data",
      totalContributions,
      joinedYears,
      totalRepos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 },
    );
  }
}

const siapaTauButuh = {
  name: "Github Stats Data",
  data: {
    githubStatsData: {
      totalContributions: 633,
      totalRepos: 42,
      joinedYears: 3,
    },
    githubStreakData: {
      totalContributions: 633,
      totalContributionsRange: "Jan 7, 2023 - Present",
      currentStreak: 4,
      currentStreakRange: "Mar 2 - Mar 5",
      longestStreak: 16,
      longestStreakRange: "Jan 8, 2024 - Jan 23, 2024",
    },
  },
};
