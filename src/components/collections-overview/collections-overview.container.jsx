import React from 'react';

/* APOLLO MODULES*/
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS */
import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

/* GQL QUERY */
const GET_COLLECTIONS_QUERY = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  const { loading, data } = useQuery(GET_COLLECTIONS_QUERY);
  if (loading) return <Spinner />;
  return <CollectionsOverview collections={data.collections} />;
};

export default CollectionsOverviewContainer;
