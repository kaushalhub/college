import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Index from './Index';
import Profile from './Profile';

const MusicRoute = () => <Index/>;

const AlbumsRoute = () => <Index/>;

const RecentsRoute = () => <Index/>;

const MoreRoute = () => <Profile/>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', icon: 'home' , color:'green' },
    { key: 'albums', title: 'About', icon: 'bookmark' ,color:'green'},
    { key: 'recents', title: 'Contact', icon: 'history' , color:'green' },
      { key: 'more', title: 'Mail', icon: 'more' , color:'green' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    more:MoreRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;