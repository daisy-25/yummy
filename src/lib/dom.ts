/** 화면 맨 위로. 폰에선 페이지가, PC 액자에선 .scroll 칸이 스크롤돼요 */
export function scrollToTop() {
  window.scrollTo(0, 0)
  document.querySelector('.scroll')?.scrollTo(0, 0)
}
