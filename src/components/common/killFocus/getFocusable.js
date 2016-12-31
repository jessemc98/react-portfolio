export default function getFocusable(elem) {
  const isTabbable = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]'
  ]

  return elem.querySelectorAll(isTabbable)
}
