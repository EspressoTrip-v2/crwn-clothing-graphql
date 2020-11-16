import React from 'react';

/* REACT COMPONENTS*/
import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

/* APOLLO MODULES*/
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

/* GQL QUERY */
const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({ match }) => {
  const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });

  if (loading) return <Spinner />;
  return <CollectionPage collection={data.getCollectionsByTitle} />;
};

export default CollectionPageContainer;
