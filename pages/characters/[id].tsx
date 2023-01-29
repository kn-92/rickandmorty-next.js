import { getDataFromTree } from "@apollo/client/react/ssr";
import Apollo from "../../apollo";
import { useQuery } from "@apollo/client";
import get from "lodash";

import Image from "next/image";
import Link from "next/link";

import { SingleCharacter } from "@/styles/SingleCharacter/SingleCharacter";

import { CHARACTER_QUERY } from "@/graphql/queries";

const SingleCharacterPage = ({ query }) => {
  const id = get(query.id);
  const { data } = useQuery(CHARACTER_QUERY, { variables: { id } });

  return (
    <>
      <Link href="/">Back to homepage</Link>
      <SingleCharacter>
        <Image
          src={data?.character?.image}
          alt={data?.character?.name}
          width={100}
          height={100}
        />
        <p>{data?.character?.name}</p>
        <p>{data?.character?.gender}</p>
        <p>{data?.character?.species}</p>
      </SingleCharacter>
    </>
  );
};

export default Apollo(SingleCharacterPage, { getDataFromTree });
