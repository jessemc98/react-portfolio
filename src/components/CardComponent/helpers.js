export function watchForTransitionEnd(element, fn) {
  /* returns a function which when run:
      1. watches given 'element' for transition end
      2. runs given 'fn'
      3. returns promise
      4. resolves promise on element.transitionend event */
  return () => new Promise(resolve => {
    const listener = () => {
      element.removeEventListener(
        'transitionend', listener
      )
      resolve()
    }
    element.addEventListener(
      'transitionend', listener
    )
    return fn()
  })
}

/* calculates css transforms required to get from 'target' to 'initial'
   for text elements whos:
    font-size is the same at both 'target' and 'initial' states
    is a child element whos parent is being scaled
   expects 'target' and 'initial' arguments to be:
    the return value from calling getBoundingClientRect on a DOM element
   expects 'parentScale' to be an object:
    with the same shape as the objects returned by this.getParentElementTransforms_*/
export function getTextElementTransforms(target, initial, parent) {
  const scaleX = 1 / parent.scaleX
  const scaleY = 1 / parent.scaleY
  return {
    scaleX,
    scaleY
  }
}

/* calculates css transforms required to get from 'target' to 'initial'
   for use with child elements whos:
    parent is being scaled

   expects 'target' and 'initial' arguments to be:
    the return value from calling getBoundingClientRect on a DOM element
   expects 'parentScale' to be an object:
    with the same shape as the objects returned by this.getParentElementTransforms_*/
export function getChildElementTransforms(target, initial, parentScale) {
  let scaleX = target.width / initial.width / parentScale.scaleX
  let scaleY = target.height / initial.height / parentScale.scaleY

  const offsetFromScaleX = (target.width - initial.width) / 2 / scaleX
  const offsetFromScaleY = (target.height - initial.height) / 2 / scaleY

  return {
    scaleX,
    scaleY,
    translateX: offsetFromScaleX,
    translateY: offsetFromScaleY
  }
}

/* calculates css transforms required to get from 'target' to 'initial'
   for use with elements whos parents/ancestors are not scaled using css transforms.
   expects 'target' and 'initial' to be:
    the return value from calling getBoundingClientRect on a DOM element */
export function getParentElementTransforms(target, initial) {
  const scaleX = target.width / initial.width
  const scaleY = target.height / initial.height

  /* when an element scales it stays centered in its initial position these
    offsets are added to the transform to account for the difference in
    position after scaling */
  const OffsetFromScaleX =
    (target.width - initial.width) / 2 / scaleX
  const OffsetFromScaleY =
    (target.height - initial.height) / 2 / scaleY

  const translateX = (target.left - initial.left) / scaleX + OffsetFromScaleX
  const translateY = (target.top - initial.top) / scaleY + OffsetFromScaleY

  return  {
    scaleX,
    scaleY,
    translateX,
    translateY
  }
}
