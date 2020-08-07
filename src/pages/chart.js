import React, { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

import Counter from '@/components/Counter'

function Chart() {
  useEffect(() => {
    notification.info({
      message: '[Chart] mounted'
    })

    return () => {
      notification.error({
        message: '[Chart] unmounted'
      })
    }
  }, [])

  useActivate(() => {
    notification.success({
      message: '[Chart] activated'
    })
  })
  useUnactivate(() => {
    notification.warning({
      message: '[Chart] unactivated'
    })
  })

  return (
    <div>
      <h1>Chart</h1>
      <Counter />
      {Array(100)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Chart Item {idx + 1}</div>
        ))}
    </div>
  )
}

export default () => (
  <KeepAlive name="/chart" saveScrollPosition="screen">
    <Chart />
  </KeepAlive>
)
