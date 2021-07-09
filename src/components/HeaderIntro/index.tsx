import React from 'react'
import { View, Text, Platform } from 'react-native'

import { Portal } from 'react-native-portalize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { StatusBar } from 'expo-status-bar'
import { EvilIcons } from '@expo/vector-icons'

import { styles } from './styles'

export function HeaderIntro() {
  return (
    <Portal>
      <View
        style={[
          styles.container,
          {
            marginTop:
              Platform.OS === 'ios'
                ? getStatusBarHeight() + 33
                : getStatusBarHeight() + 5,
          },
        ]}
      >
        <StatusBar backgroundColor="transparent" translucent style="light" />
        <View style={[styles.wrapper, { left: 20 }]}>
          <Text style={styles.scale}>°F</Text>
        </View>

        <Text style={styles.city}>City, Country</Text>

        <View style={[styles.wrapper, { top: 5, right: 20 }]}>
          <EvilIcons name="search" size={30} color="white" />
        </View>
      </View>
    </Portal>
  )
}
