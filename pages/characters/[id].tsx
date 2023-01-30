import Apollo from "../../apollo";
import { useQuery } from "@apollo/client";
import get from "lodash";

import Image from "next/image";
import Link from "next/link";

import { SingleCharacter } from "@/styles/SingleCharacter/SingleCharacter";
import { AppWrapper } from "@/styles/Home_index";

import { CHARACTER_QUERY } from "@/graphql/queries";

const SingleCharacterPage = ({ query }) => {
  const id = get(query.id);
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!!!</div>;
  return (
    <AppWrapper>
      <button>
        <Link href="/">Back to homepage</Link>
      </button>
      <SingleCharacter>
        <Image
          src={data?.character?.image}
          alt={data?.character?.name}
          width={100}
          height={100}
        />
        <p>Name: {data?.character?.name}</p>
        <p>Gender: {data?.character?.gender}</p>
        <p>Species: {data?.character?.species}</p>
      </SingleCharacter>
    </AppWrapper>
  );
};

export default Apollo(SingleCharacterPage);
