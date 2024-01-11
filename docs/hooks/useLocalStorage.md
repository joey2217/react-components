---
sidebar_position: 1
---

# useLocalStorage

> 用于在本地存储中保存和检索数据的自定义 React Hook。

```tsx
import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    const localData = localStorage.getItem(key)
    if (localData) {
      try {
        return JSON.parse(localData) as T
      } catch (error) {
        /* empty */
      }
    }
    return defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
```