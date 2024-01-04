import React, {
  useMemo,
  useState,
  useCallback,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

type MessageType = 'success' | 'error' | 'info' | 'warning' // 可以根据需要添加其他类型

type MessageProps = {
  [t in MessageType]: (content: ReactNode) => void
}

const MessageContext = React.createContext<MessageProps>({
  success: () => {},
  error: () => {},
  info: () => {},
  warning: () => {},
})

export function useMessage() {
  return React.useContext(MessageContext)
}

export function MessageProvider({ children }: PropsWithChildren) {
  const [msg, setMsg] = useState<ReactNode>()
  const [type, setType] = useState<MessageType>()

  const setContent = useCallback(
    (type: MessageType) => (content: ReactNode) => {
      setType(type)
      setMsg(content)
      setTimeout(() => {
        setMsg(null)
        setType(null)
      }, 3000)
    },
    []
  )

  const msgContent = useMemo(
    () =>
      msg ? (
        <div className="message">
          <div>[{type}]</div>
          <div>{msg}</div>
        </div>
      ) : null,
    [msg, type]
  )

  return (
    <MessageContext.Provider
      value={{
        success: setContent('success'),
        error: setContent('error'),
        info: setContent('success'),
        warning: setContent('warning'),
      }}
    >
      {children}
      {msgContent && createPortal(msgContent, document.body)}
    </MessageContext.Provider>
  )
}
