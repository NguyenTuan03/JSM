// store.js
export function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Khởi tạo state ban đầu bằng cách dispatch một action mặc định
    dispatch({});

    return { getState, dispatch, subscribe };
}
