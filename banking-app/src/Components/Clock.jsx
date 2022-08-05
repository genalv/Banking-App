import React, { useState, useEffect } from 'react'

export default function Clock() {
  const time = new Date()
  const [clock, setClock] = useState()

  useEffect(() => {
    setInterval(() => {
      setClock(time.toLocaleTimeString())
    }, 1001)
  }, [clock])
  return (
    <div className='container'>
      <div>{time.toLocaleDateString()}</div>
      <div>{clock}</div>
    </div>
  )
}