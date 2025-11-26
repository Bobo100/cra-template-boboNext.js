/**
 * 根據主題取得對應的 className
 * @param className - 基礎 class 名稱
 * @param styles - SCSS module styles 物件
 * @param theme - 主題名稱 ('light' | 'dark')
 */
export const getThemeClassName = (
  className: string,
  styles: Record<string, string>,
  theme?: string
): string => {
  const themeSuffix = theme === 'light' ? '_light' : '_dark'
  return styles[className + themeSuffix]
}

/**
 * 平滑滾動到指定錨點
 * @param id - 目標元素的 ID
 * @param offset - 偏移量（通常是 NavBar 高度）
 */
export function scrollToAnchor(id: string, offset: number): void {
  const element = document.getElementById(id)
  if (element) {
    const offsetPosition = element.offsetTop - offset - 20
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}