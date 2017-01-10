import expect from 'expect'

import toggleElementOutlines from './toggleElementOutlines'

function mockKeyDown(){
  const keyboardEvent = document.createEvent("KeyboardEvent");
  const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


  keyboardEvent[initMethod](
                 "keydown", // event type : keydown, keyup, keypress
                  true, // bubbles
                  true, // cancelable
                  global.window, // viewArg: should be window
                  false, // ctrlKeyArg
                  false, // altKeyArg
                  false, // shiftKeyArg
                  false, // metaKeyArg
                  40, // keyCodeArg : unsigned long the virtual key code, else 0
                  0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
                );
  document.body.dispatchEvent(keyboardEvent);
}

describe("toggleElementOutlines", function () {
  let cancel;

  beforeEach(function () {
    cancel = toggleElementOutlines()
  });

  afterEach(function () {
    cancel()
  });

  it("adds style tag with class of toggleElementOutlines to head", function () {
    const query = document.head.getElementsByClassName('toggleElementOutlines')

    expect(query.length).toBeGreaterThan(0)
  });
  it("adds outline:none to certain* elements when body is clicked", function () {
    const elements = ['a', 'input', 'select', 'a[href]', 'textarea', 'button']
    const style = document.head.getElementsByClassName('toggleElementOutlines')[0]

    document.body.click()

    const { cssRules } = style.sheet
    expect(cssRules[0].style.outline).toEqual('none')

    elements.forEach(element => {
      expect(cssRules[0].selectorText.indexOf(element)).toNotEqual(-1)
    })
  });
  it("removes style declarations from style tag on keydown", function () {
    const style = document.head.getElementsByClassName('toggleElementOutlines')[0]
    let test = false

    mockKeyDown()

    expect(style.innerHTML).toEqual('')
  });

});
