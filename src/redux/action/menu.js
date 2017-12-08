/**
 * 控制菜单显隐
 */

export const SHOW_MENU = 'SHOW_MENU'

export function showMenu(isMenuShow) {
  return { type: SHOW_MENU, isMenuShow }
}
