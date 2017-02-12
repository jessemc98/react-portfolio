export default function scrollBodyToTop() {
  if (window.scrollTo) {
    return window.scrollTo(0, 0)
  }
  global.document.body.scrollTop = 0
  global.document.scrollTop = 0
}
