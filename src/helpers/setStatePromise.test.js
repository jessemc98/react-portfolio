import expect, { createSpy } from 'expect'
import setStatePromise from './setStatePromise'

describe("setStatePromise", function () {
  let mockComponent = {};
  beforeEach(function () {
    mockComponent = {
      setState: createSpy()
    }
  });
  it("calls setState method on the passed component with the passed state", function () {
    // arrange
    const spy = mockComponent.setState
    const newState = {test: 'test'}
    // act
    setStatePromise(mockComponent, newState)
    // assert setState was called on mockComponent
    expect(spy.calls[0].arguments[0]).toEqual(newState)
  });
  it("returns a promise", function () {
    expect(setStatePromise(mockComponent, {test: 'test'})).toBeA(Promise)
  });
});
