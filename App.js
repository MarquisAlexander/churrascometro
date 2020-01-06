import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#8B10AE"/>
    <Routes />
    </>
  );
}