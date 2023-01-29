import { Inter } from "@next/font/google";
// import { Element } from "@/styles/element";
import { useQuery } from "@apollo/client";

import Apollo from "../apollo";
import Image from "next/image";
import { gql } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/queries";
import { getDataFromTree } from "@apollo/client/react/ssr";

// const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { data, loading } = useQuery(CHARACTERS_QUERY);
  // console.log(data?.characters?.results);
  const results = data?.characters?.results;
  console.log(results);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {data?.characters?.results.map((element: any) => (
        <div key={element.id}>
          <Image
            width={"100px"}
            height={"100px"}
            src={element.image}
            alt={element.name}
          />
          {element.name}
        </div>
      ))}
    </div>
  );
}

export default Apollo(Home, { getDataFromTree });
