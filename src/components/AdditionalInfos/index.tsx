import React from 'react'
import { View, Text } from 'react-native'

import { InfoProps, ScaleProps } from '../../screens/Home'

import { styles } from './styles'

type Props = {
  info: InfoProps
  scale: ScaleProps
  time: string
  timezone: string
}

export function AdditionalInfos({ info, scale, time, timezone }: Props) {
  const celsius = scale.celsius
  const scaleText = celsius ? 'C' : 'F'
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          min: {info.temp_min}°{scaleText}
        </Text>
        <Text style={styles.info}>
          max: {info.temp_max}°{scaleText}
        </Text>
        <Text style={styles.info}>humidity: {info.humidity}</Text>
        <Text style={styles.info}>
          feels like: {info.feels_like}°{scaleText}
        </Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={[styles.current, { top: 10 }]}>current time:</Text>
        <Text style={styles.time}>{time}</Text>
        <Text
          style={[styles.current, { fontSize: 12, textTransform: 'uppercase' }]}
        >
          {timezone}
        </Text>
      </View>
    </View>
  )
}
