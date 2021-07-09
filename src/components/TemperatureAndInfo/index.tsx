import React from 'react'

import { Temperature } from '../../components/Temperature'
import { AdditionalInfos } from '../../components/AdditionalInfos'

import { InfoProps, ScaleProps } from '../../screens/Home'

type Props = {
  info: InfoProps
  scale: ScaleProps
  time: string
  timezone: string
}

export function TemperatureAndInfo({ info, scale, time, timezone }: Props) {
  return (
    <>
      <Temperature info={info} scale={scale} />
      <AdditionalInfos
        info={info}
        scale={scale}
        time={time}
        timezone={timezone}
      />
    </>
  )
}
