import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const FooterLogo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Capitol Commons Reformed Church Footer Logo"
      width={136}
      height={120}
      loading={loading}
      fetchPriority={priority}
      className={clsx('w-auto transition-all duration-300', className)}
      src="/media/footer-logo2.png"
    />
  )
}
