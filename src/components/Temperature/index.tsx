import React from 'react'
import { View, Text } from 'react-native'

import { InfoProps, ScaleProps } from '../../screens/Home'

import { styles } from './styles'

type Props = {
  info: InfoProps
  scale: ScaleProps
}

export function Temperature({ info, scale }: Props) {
  const celsius = scale.celsius
  const scaleText = celsius ? 'C' : 'F'
  return (
    <View style={styles.degrees}>
      <View style={styles.degreesContainer}>
        <Text style={styles.text}>{info.temp}</Text>
        <Text
          style={[
            styles.text,
            { fontSize: 64, alignSelf: 'center', marginTop: 23 },
          ]}
        >
          °{scaleText}
        </Text>
      </View>
      <Text style={styles.description}>{info.description}</Text>
    </View>
  )
}
