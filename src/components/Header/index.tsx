import React from 'react'
import {
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import { Portal } from 'react-native-portalize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { StatusBar } from 'expo-status-bar'
import { EvilIcons } from '@expo/vector-icons'

import { ScaleProps } from '../../screens/Home'

import { styles } from './styles'

type Props = TouchableWithoutFeedbackProps & {
  city: string
  scale: ScaleProps
}

export function Header({ city, scale, ...rest }: Props) {
  const { celsius, setCelsius } = scale

  const scaleText = celsius ? 'F' : 'C'

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
          <TouchableWithoutFeedback
            onPress={() => {
              setCelsius(!celsius)
            }}
          >
            <Text style={styles.scale}>°{scaleText}</Text>
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.city}>{city.split(', ')[0]}, </Text>
        <Text style={[styles.city, { textTransform: 'uppercase' }]}>
          {city.split(', ')[1]}
        </Text>

        <View style={[styles.wrapper, { top: 5, right: 20 }]}>
          <TouchableWithoutFeedback {...rest}>
            <EvilIcons name="search" size={30} color="white" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Portal>
  )
}
