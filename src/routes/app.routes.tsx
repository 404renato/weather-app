import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Intro } from '../screens/Intro'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Intro">
      <Screen name="Intro" component={Intro} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
