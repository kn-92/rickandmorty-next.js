import { useQuery } from "@apollo/client";

import Link from "next/link";
import Image from "next/image";

import Apollo from "../apollo";

import { CHARACTERS_QUERY } from "../graphql/queries";
import { getDataFromTree } from "@apollo/client/react/ssr";

interface DataObj {
  __typename: String;
  gender: String;
  id: String;
  image: String;
  name: String;
  species: String;
  status: String;
}

function Home() {
  const { data, loading } = useQuery(CHARACTERS_QUERY);
  const results = data?.characters?.results;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {data?.characters?.results.map((element: DataObj) => (
        <div key={element.id}>
          <Image
            width={"100px"}
            height={"100px"}
            src={element.image}
            alt={element.name}
          />
          <Link href="/characters/[id]" as={`characters/${element.id}`}>
            {element.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Apollo(Home, { getDataFromTree });
