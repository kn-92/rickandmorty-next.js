import { getDataFromTree } from "@apollo/client/react/ssr";
import Apollo from "../../apollo";
import { useQuery } from "@apollo/client";
import get from "lodash";

import { CHARACTER_QUERY } from "@/graphql/queries";

const SingleCharacterPage = ({ query }) => {
  const id = get(query.id);
  const { data } = useQuery(CHARACTER_QUERY, { variables: { id } });

  return <div>{JSON.stringify(data)}</div>;
};

export default Apollo(SingleCharacterPage, { getDataFromTree });
