'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    _hmt: any[]
  }
}

export function BaiduAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // 确保 _hmt 变量存在
    if (typeof window !== 'undefined' && window._hmt) {
      // 记录页面浏览
      window._hmt.push(['_trackPageview', pathname])
    }
  }, [pathname])

  return null
}
