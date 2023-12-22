import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      const date = new Date();
      console.log(date)
    }, [])
    
  return (
    <div>
        <h2>Hora actual:</h2>
        <div>{hour}</div>
    </div>
  )
}

export default ActualHour