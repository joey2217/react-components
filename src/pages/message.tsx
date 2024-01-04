import React from 'react'
import { MessageProvider, useMessage } from '../context/MessageContext'

const message: React.FC = () => {
  return (
    <MessageProvider>
      <div>message</div>
      <Child />
    </MessageProvider>
  )
}

const Child: React.FC = () => {
  const message = useMessage()
  return (
    <div>
      <button onClick={() => message.success('success message')}>show</button>
    </div>
  )
}

export default message
