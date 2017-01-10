// add event listeners to body which enable or disable the outline of
// focused elements depending on wether mouse or keyboard is being used
const style = document.createElement('style')
style.className = 'toggleElementOutlines'

function removeOutline(){
  style.innerHTML = 'a, input, select, a[href], textarea, button {outline:none}';
  global.document.body.removeEventListener('click', removeOutline)
  global.document.body.addEventListener('keydown', addOutline)
}
function addOutline(){
  style.innerHTML = ''
  global.document.body.removeEventListener('keydown', addOutline)
  global.document.body.addEventListener('click', removeOutline)
}
function removeFromDom(){
  global.document.head.removeChild(style)
  global.document.body.removeEventListener('keydown', addOutline)
  global.document.body.removeEventListener('click', removeOutline)
}

export default function init() {
  removeOutline()
  global.document.head.appendChild(style)

  global.document.body.addEventListener('keydown', addOutline)
  return removeFromDom
}
