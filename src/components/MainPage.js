import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

const renderToolbar = () => <NavBar title='track(x)' navigator={navigator} />

const MainPage = ({navigator}) => (
  <Page renderToolbar={renderToolbar}>
    <LocationList navigator={navigator} />
    <AddLocation />
  </Page>
);

export default MainPage;
