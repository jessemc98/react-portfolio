import expect from 'expect'
import pointerEventsAvailable from './pointerEventsAvailable'

describe("pointerEventsAvailable", function () {
  it("returns true if navigator.appName !== 'Microsoft Internet Explorer'", function () {
    global.navigator.appName = 'Chrome 52'
    expect(pointerEventsAvailable()).toBeTruthy()
  });
  describe("returns false if UA string points to ie10 or below", function () {
    const uas = ["MSIE 7.0", "MSIE 8.0", "MSIE 9.0", "MSIE 10.0"]

    uas.forEach(ua => {
      it(ua, function () {
        global.navigator.appName = 'Microsoft Internet Explorer'
        global.navigator.userAgent = ua
        expect(pointerEventsAvailable()).toBeFalsy()
      });
    })
  });

  it("returns true if UA string points to ie11 or above", function () {
    global.navigator.appName = 'Chrome 52'
    global.navigator.userAgent = "MSIE 11.0"
    expect(pointerEventsAvailable()).toBeTruthy()
  });
});
