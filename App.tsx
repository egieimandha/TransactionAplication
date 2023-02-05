import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

import {RootNavigator} from '@navigation';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
