import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'

import { VisibleProps } from '../../screens/Home'

import { styles } from './styles'

type Props = {
  visibility: VisibleProps
  setCity: (city: string) => void
}

export function Search({ visibility, setCity }: Props) {
  const setVisible = visibility.setVisible

  const [value, setValue] = useState('')

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={{ left: 15, marginRight: 10 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.input}>
          <TextInput
            value={value}
            style={styles.text}
            placeholder="eg: city, country"
            autoCorrect={false}
            returnKeyType={'search'}
            onChangeText={setValue}
          ></TextInput>

          <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.4}
            onPress={() => {
              setCity(value), setVisible(false)
            }}
          >
            <EvilIcons name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute', top: 125, left: 10 }}>
        <Text style={styles.pattern}>
          Entries must follow the pattern "city, country abbreviation".
        </Text>
        <Text style={styles.pattern}>
          Country abbreviation eg: Brazil -{'>'} BRA.
        </Text>
        <Text style={styles.pattern}>
          Countries abbreviations will always have 3 letters.
        </Text>
      </View>
    </>
  )
}
