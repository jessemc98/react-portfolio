// expects:
// component: toBe an instance of a react component (this)
// newState: toBe
export default function setStatePromise(component, newState) {
    return new Promise((resolve) => {
        component.setState(newState, () => {
            resolve();
        });
    });
}
