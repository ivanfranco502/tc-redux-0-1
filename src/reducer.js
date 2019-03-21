


const reducer = (state = { count: 0, step: 1 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const count = state.count + (1 * state.step);
      const step = state.count >= 9 ? 10 : 1;
      return {
        ...state,
        step,
        count
      };
    case 'DECREMENT':
      const step = state.count <= 10 ? 1 : 10;
      const count = state.count > 0 ? state.count - 1 : 0;
      return {
        ...state,
        step,
        count
      };
    case 'RESET':
      return {
        count:0,
        step:1
      };
    default:
      return state;
  }
};

export default reducer;