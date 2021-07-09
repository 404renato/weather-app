import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, KeyboardAvoidingView } from 'react-native'

import { Host } from 'react-native-portalize'

import axios from 'axios'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'

import { Load } from '../../components/Load'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'
import { TemperatureAndInfo } from '../../components/TemperatureAndInfo'

import Morning from '../../assets/morning.png'
import Noon from '../../assets/noon.png'
import Night from '../../assets/night.png'

import { styles } from './styles'

export type VisibleProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export type ScaleProps = {
  celsius: boolean
  setCelsius: (celsius: boolean) => void
}

export type InfoProps = {
  description?: string
  temp?: number
  feels_like?: number
  temp_min?: number
  temp_max?: number
  humidity?: number
  wasCityFound: boolean
}

moment.locale('pt-br')

const { API_KEY } = process.env

export function Home() {
  const [city, setCity] = useState('')
  const [time, setTime] = useState('')
  const [timezone, setTimezone] = useState('')
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [celsius, setCelsius] = useState(true)
  const [visible, setVisible] = useState(false)
  const [info, setInfo] = useState<InfoProps>({} as InfoProps)
  var cityTimezones = require('city-timezones')

  const fetchWeather = async () => {
    try {
      const scale = celsius ? 'metric' : 'default'
      const precision = celsius ? 2 : 3

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${scale}`
      )
      response !== undefined
        ? setInfo({
            description: response.data.weather[0].description,
            temp: response.data.main.temp.toPrecision(precision),
            feels_like: response.data.main.feels_like.toPrecision(precision),
            temp_min: response.data.main.temp_min.toPrecision(precision),
            temp_max: response.data.main.temp_max.toPrecision(precision),
            humidity: response.data.main.humidity.toPrecision(2),
            wasCityFound: true,
          })
        : []
    } catch (error) {
      setInfo({ wasCityFound: false })
    }
  }

  const setPeriod = () => {
    let timeParsed = parseFloat(time)
    if (timeParsed < 5 || timeParsed > 17) {
      return Night
    } else if (timeParsed < 12) {
      return Morning
    } else {
      return Noon
    }
  }

  const getTime = async () => {
    if (city !== '') {
      var cities = cityTimezones.lookupViaCity(city.split(', ')[0])
      for (var i = 0; i < cities.length; i++) {
        if (
          cities[i].city
            .toLowerCase()
            .includes(city.split(', ')[0].toLowerCase()) &&
          cities[i].iso3
            .toLowerCase()
            .includes(city.split(', ')[1].toLowerCase())
        ) {
          setLat(cities[i].lat)
          setLng(cities[i].lng)
          setTime(moment().tz(cities[i].timezone).format('LT'))
          setTimezone(cities[i].timezone)
        }
      }
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [city, lat, lng, celsius])

  useEffect(() => {
    getTime()
  }, [city])

  return (
    <Host>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={-249}
      >
        <ImageBackground source={setPeriod()} style={styles.background}>
          <Header
            city={city !== '' ? city : 'City'}
            scale={{ celsius, setCelsius }}
            onPress={() => setVisible(true)}
          />

          {city !== '' ? (
            info.wasCityFound ? (
              <TemperatureAndInfo
                info={info}
                scale={{ celsius, setCelsius }}
                time={time}
                timezone={timezone}
              />
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>city not found.{'\n'}try again</Text>
              </View>
            )
          ) : (
            <Load />
          )}

          <SearchBar visibility={{ visible, setVisible }} setCity={setCity} />
        </ImageBackground>
      </KeyboardAvoidingView>
    </Host>
  )
}
