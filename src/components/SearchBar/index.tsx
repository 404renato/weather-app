import React from 'react'
import { View } from 'react-native'

import { Portal } from 'react-native-portalize'

import { Search } from '../Search'

import { VisibleProps } from '../../screens/Home'

import { styles } from './styles'

type Props = {
  visibility: VisibleProps
  setCity: (city: string) => void
}

export function SearchBar({ visibility, setCity }: Props) {
  const visible = visibility.visible

  return (
    <>
      {visible ? (
        <Portal>
          <View style={styles.overlay} />
          <Portal>
            <Search visibility={visibility} setCity={setCity} />
          </Portal>
        </Portal>
      ) : null}
    </>
  )
}
