---
sidebar_position: 1
---

# LazyLoadImage

一个使用 React Hooks 实现的图片懒加载组件。

[Demo](/lazy)


```tsx
import React, { useEffect, useRef } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholderSrc?: string
}

export default function LazyImage({
  placeholderSrc = '/loading.svg',
  src,
  ...props
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null!)

  useEffect(() => {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement
          lazyImage.src = src
          observer.unobserve(lazyImage) // 观察一次后停止观察
          observer.disconnect() // 停止观察
        }
      })
    })
    const imgEl = imgRef.current
    lazyImageObserver.observe(imgEl)
    return () => {
      lazyImageObserver.disconnect()
    }
  }, [src])

  return <img {...props} ref={imgRef} src={placeholderSrc} />
}
```
