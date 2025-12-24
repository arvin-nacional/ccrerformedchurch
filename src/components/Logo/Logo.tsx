import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const isPriority = priorityFromProps === 'high'

  return (
    <Image
      alt="Capitol Commons Reformed Church Logo"
      width={244}
      height={53}
      priority={isPriority}
      quality={85}
      className={clsx('w-auto transition-all duration-300', className)}
      src="/main-logo5.png"
      sizes="(max-width: 768px) 150px, 244px"
    />
  )
}
