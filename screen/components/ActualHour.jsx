import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      
      const interval = setInterval(()=>{
        const date = new Date();
        const onlyHour = date.toLocaleString().split(",")[1]
        console.log(onlyHour)
      },1000)
      return () => clearInterval(interval);
      
    }, [])
    
  return (
    <div>
        <h2>Hora actual:</h2>
        <div>{hour}</div>
    </div>
  )
}

export default ActualHour