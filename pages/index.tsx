import { useQuery } from "@apollo/client";

import Link from "next/link";
import Image from "next/image";

import Apollo from "../apollo";

import { CHARACTERS_QUERY } from "../graphql/queries";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useState } from "react";

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
  const [inputValue, setInputValue] = useState({ name: "" });
  const [page, setPage] = useState(2);
  const { data, loading, fetchMore } = useQuery(CHARACTERS_QUERY);
  console.log(data);
  const results = data?.characters?.results;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      name: e.target.value,
    });
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchMore({ variables: { page: page } });
    setPage(page + 1);
  };

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page === 2) return;
    setPage(page - 1);
    fetchMore({ variables: { page: page - 2 } });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMore({ variables: { filter: inputValue } });
    setInputValue({ name: "" });
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for character"
        />
        <button>submit</button>
      </form>

      {results.map((element: DataObj) => (
        <div key={element.id}>
          <Image
            width={100}
            height={100}
            src={element.image}
            alt={element.name}
          />
          <Link href="/characters/[id]" as={`characters/${element.id}`}>
            {element.name}
          </Link>
        </div>
      ))}
      <button onClick={handleNext}>Next Page</button>
      <div>{page - 1}</div>
      <button onClick={handlePrevious}>Previous Page</button>
    </div>
  );
}

export default Apollo(Home, { getDataFromTree });
