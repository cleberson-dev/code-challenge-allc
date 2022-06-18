import React from 'react';
import {useQuery, gql} from '@apollo/client';
import GlobalHeader from '../components/GlobalHeader';
import LeftNav from '../components/LeftNav';
import ScreenContent from '../components/ScreenContent';
import {UserGQLResponse} from '../models/User';
import LoadingOverlay from '../components/LoadingOverlay';
import ErrorOverlay from '../components/ErrorOverlay';

interface UserOneData {
  userOne: UserGQLResponse;
}

const GET_USER = gql`
  query GetUser {
    userOne {
      _id
      firstName
      lastName
      email
    }
  }
`;

const styles: {[key: string]: React.CSSProperties} = {
  leftNavAndScreenContent: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 80px)',
  },
};

const HomeScreen = () => {
  const {loading, error, data} = useQuery<UserOneData, {}>(GET_USER);

  if (loading) return <LoadingOverlay />;
  if (error || data === undefined) return <ErrorOverlay />;

  return (
    <div>
      <GlobalHeader />
      <div style={styles.leftNavAndScreenContent}>
        <LeftNav />
        <ScreenContent />
      </div>
    </div>
  );
};

export default HomeScreen;
