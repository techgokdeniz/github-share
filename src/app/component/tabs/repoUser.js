import React from "react";
import useSWR from "swr";
import UserComponent from "../usercomponent";
import Link from "next/link";

const RepoUser = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/getmostrepo", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ooops... {error.message}</div>;

  return (
    <div className="flex flex-col gap-4">
      {data.data.map((user) => (
        <Link
          target="_blank"
          key={user.id}
          href={`https://github.com/${user.username}`}
        >
          <UserComponent
            followers={user.followers}
            following={user.following}
            favoriteLanguage={user.favProgLang}
            avatarUrl={user.avatarUrl}
            name={user.name}
            bio={user.bio}
          />
        </Link>
      ))}
    </div>
  );
};

export default RepoUser;
