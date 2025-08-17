/**
 * 百度统计事件跟踪工具函数
 */

// 确保 _hmt 对象存在
declare global {
  interface Window {
    _hmt: any[]
  }
}

/**
 * 跟踪页面浏览
 * @param path 页面路径
 */
export function trackPageview(path: string) {
  if (typeof window !== 'undefined' && window._hmt) {
    window._hmt.push(['_trackPageview', path])
  }
}

/**
 * 跟踪事件
 * @param category 事件类别
 * @param action 事件操作
 * @param label 事件标签（可选）
 * @param value 事件值（可选）
 */
export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window._hmt) {
    const event = ['_trackEvent', category, action]
    if (label !== undefined) event.push(label)
    if (value !== undefined) event.push(value.toString())
    window._hmt.push(event)
  }
}

/**
 * 跟踪链接点击
 * @param url 链接地址
 * @param linkType 链接类型
 */
export function trackLink(url: string, linkType: string) {
  trackEvent('Link', 'Click', `${linkType}: ${url}`)
}

/**
 * 跟踪导航项点击
 * @param category 导航分类
 * @param title 导航项标题
 * @param url 导航项链接
 */
export function trackNavigationClick(
  category: string,
  title: string,
  url: string
) {
  trackEvent('Navigation', 'Click', `${category}: ${title}`, 1)
}

/**
 * 跟踪搜索行为
 * @param query 搜索关键词
 * @param resultCount 搜索结果数量
 */
export function trackSearch(query: string, resultCount: number) {
  trackEvent('Search', 'Query', query, resultCount)
}

/**
 * 跟踪资源卡片点击
 * @param title 资源标题
 * @param url 资源链接
 */
export function trackResourceClick(title: string, url: string) {
  trackEvent('Resource', 'Click', title, 1)
}

/**
 * 跟踪按钮点击
 * @param buttonName 按钮名称
 * @param location 按钮位置
 */
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent('Button', 'Click', `${location}: ${buttonName}`)
}