import { Button } from 'antd'
import React, { useState } from 'react'

export default function Testbutton() {
    const {loading, setLoading} = useState(false);
    const onButtonClick=(e)=>{
        console.log("button click")
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
    }
  return (
    <>
    <Button type='primary'>Click Me!</Button>
    <Button type='default' block onClick={onButtonClick}>Click Me!</Button>
    </>
  )
}
