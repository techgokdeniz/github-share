import React from "react";
import useSWR from "swr";
import UserComponent from "../usercomponent";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserSketlon from "../Usersketlon";

const RandomUser = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("tr/api/getrandomuser", fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading)
    return (
      <div>
        <UserSketlon />
      </div>
    );
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
            avatarUrl={user.avatarUrl}
            favoriteLanguage={user.favProgLang}
            name={user.name}
            bio={user.bio}
          />
        </Link>
      ))}
    </div>
  );
};

export default RandomUser;
