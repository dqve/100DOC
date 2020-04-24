function createStore() {


    let state

    let listeners = []

    const subscribe = (listeners) => {
        listeners.push()
    }

    const getState = () => state

    return {
        getState,
        subscribe
    }
}

const store = createStore()

store.subscribe(() => {
    console.log('The new state is:', store.getState())
})

store.subscribe(() => {
    console.log('The store changed')
})