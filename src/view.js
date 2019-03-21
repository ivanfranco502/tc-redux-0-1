import { 
  incrementCount,
  decrementCount,
  reset,
} from './actions';

const createHandler = dispatch => (id, action) => {
  const btn = document.getElementById(id);
  btn.addEventListener('click', () => dispatch(action()));
};

export const initialize = store => {
  const setOnClickAction = createHandler(store.dispatch);

  setOnClickAction('increment', incrementCount);
  setOnClickAction('decrement', decrementCount);
  setOnClickAction('reset', reset);

  render(store);
};

export const render = store => {
  const count = document.getElementById('count');
  console.log(store.getState());
  count.innerText = `count ${store.getState().count} by ${store.getState().step} step`;
};
