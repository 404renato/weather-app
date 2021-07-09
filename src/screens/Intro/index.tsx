import React, { useState, useEffect } from 'react'

import { View, Text, Image } from 'react-native'

import { Host } from 'react-native-portalize'
import { useNavigation } from '@react-navigation/native'
import AppIntroSlider from 'react-native-app-intro-slider'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Home } from '../Home'
import { HeaderIntro } from '../../components/HeaderIntro'

import Intro1 from '../../assets/intro1.png'
import Intro2 from '../../assets/intro2.png'
import Intro3 from '../../assets/intro3.png'
import Undraw1 from '../../assets/undraw1.png'
import Undraw2 from '../../assets/undraw2.png'
import Undraw3 from '../../assets/undraw3.png'

import { styles } from './styles'

const slides = [
  {
    key: '1',
    title: 'Search a city to see\nthe weather',
    image: Undraw1,
    background: Intro1,
    backgroundColor: '#8EC9FF',
  },

  {
    key: '2',
    title: 'The info about the\nchosen city will appear\ndown below',
    image: Undraw2,
    background: Intro2,
    backgroundColor: '#FFB26A',
  },

  {
    key: '3',
    title: 'Change between\nfahrenheit and celsius',
    image: Undraw3,
    background: Intro3,
    backgroundColor: '#8D8ADC',
  },
]

type SlideProps = {
  key: string
  title: string
  image: any
  background: any
  backgroundColor: string
}

export function Intro() {
  const navigation = useNavigation()
  const [showIntro, setShowIntro] = useState('true')

  const onDone = async () => {
    try {
      await AsyncStorage.setItem('showIntro', 'false')
    } catch (error) {
    } finally {
      navigation.navigate('Home')
    }
  }

  const getIntro = async () => {
    try {
      const response = await AsyncStorage.getItem('showIntro')
      if (response !== null) setShowIntro(response)
    } catch (error) {}
  }

  useEffect(() => {
    getIntro()
  }, [])

  function IntroSlide(item: SlideProps) {
    return (
      <View
        style={[styles.container, { backgroundColor: item.backgroundColor }]}
      >
        {item.key !== '2' ? (
          <>
            <Text style={[styles.text, { marginBottom: 49 }]}>
              {item.title}
            </Text>
            <Image source={item.image} resizeMode="stretch" />
          </>
        ) : (
          <View style={{ position: 'absolute', top: 130 }}>
            <Image source={item.image} resizeMode="stretch" />
            <Text style={[styles.text, { marginTop: 13 }]}>{item.title}</Text>
          </View>
        )}
      </View>
    )
  }

  return (
    <Host>
      {showIntro === 'true' ? (
        <AppIntroSlider
          data={slides}
          keyExtractor={(item) => item.key}
          activeDotStyle={{ backgroundColor: 'white', width: 10 }}
          showPrevButton={true}
          showSkipButton={true}
          ListHeaderComponent={<HeaderIntro />}
          renderItem={({ item }) => IntroSlide(item)}
          onDone={onDone}
        />
      ) : (
        <Home />
      )}
    </Host>
  )
}
