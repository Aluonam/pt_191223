import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      
      const interval = setInterval(()=>{
        const date = new Date();
        const onlyHour = date.toLocaleString().split(",")[1]
        setHour(onlyHour)
      },1000)
      return () => clearInterval(interval);
      
    }, [])
    
  return (
    <div style={{
        width:"300px",
        height:"20vh",
        gap:"20px",
        backgroundColor:"#f5ebe0",
        border:"1px solid #d6ccc2",
        borderRadius: "20px",
        display:"flex",
        alignItems:"center",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h2>Hora actual:</h2>
        <div>{hour}</div>
    </div>
  )
}

export default ActualHour