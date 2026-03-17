import { NextResponse } from "next/server";

const GITHUB_USERNAME = "MichaelNegrete16";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const data = await res.json();

    const repos = data
      .filter(
        (r: { name: string; fork: boolean }) =>
          !r.name.startsWith(".") &&
          r.name !== GITHUB_USERNAME &&
          !r.fork
      )
      .map(
        (r: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          homepage: string | null;
          language: string | null;
          stargazers_count: number;
          forks_count: number;
          topics: string[];
          updated_at: string;
        }) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          homepage: r.homepage,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          topics: r.topics,
          updated_at: r.updated_at,
        })
      );

    return NextResponse.json(repos);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
