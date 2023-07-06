import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  let data = await prisma.user.findMany();

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function POST(request) {
  try {
    const res = await request.json();

    const { username } = res;

    if (!username) {
      return NextResponse.json({
        success: false,
        message: "Username is empty!",
      });
    }

    const userInDb = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userInDb) {
      return NextResponse.json({
        success: false,
        message: "User already exists!",
      });
    }

    const userResp = await fetch(`https://api.github.com/users/${username}`);

    if (!userResp.ok) {
      return NextResponse.json({
        success: false,
        message: "User not found!",
      });
    }

    const user = await userResp.json();

    const getRepo = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const repos = await getRepo.json();

    let starCount = 0;
    let favProgLang;

    if (repos.length > 0) {
      starCount = repos.reduce((acc, repo) => {
        if (!repo.fork) {
          return acc + repo.stargazers_count;
        } else {
          return acc;
        }
      }, 0);

      favProgLang = Object.entries(
        repos
          .map((repo) => repo.language)
          .reduce((acc, lang) => {
            if (lang) {
              if (acc[lang]) {
                acc[lang] += 1;
              } else {
                acc[lang] = 1;
              }
            }
            return acc;
          }, {})
      ).sort((a, b) => b[1] - a[1])[0][0];
    }

    await prisma.user.create({
      data: {
        username: user.login,
        name: user.name,
        avatarUrl: user.avatar_url,
        bio: user.bio,
        followers: user.followers,
        following: user.following,
        reposCount: user.public_repos,
        favProgLang: favProgLang || "",
        blogUrl: String(user.blog),
        starCount: starCount || 0,
        updatedAt: new Date().toISOString(),
        createdAt: user.created_at,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User added!",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
