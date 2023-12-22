import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      
    }, [])
    
  return (
    <div>
        <h2>Hora actual:</h2>
        <div>{hour}</div>
    </div>
  )
}

export default ActualHour