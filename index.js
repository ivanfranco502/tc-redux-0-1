
/*

1. El count no puede ir por debajo de 0.

2. Manteniendo la funcionalidad como está: convertir el state del store a un objeto manteniendo el count como una property y agregando un step el cual es de a cuanto suma el count (inicial en 1)

3. Mostrar el valor "step" junto con el count: ej "count 3 by 1 step".

4. Cuando una accion increment implica que el nuevo valor de count en el store es igual o mayor a 10 se debe incrementar cambiar el step a 10 (sumar de a 10 en vez de 1 con cada siguiente increment)

5. Agregar un boton que al clickear dispare una nueva accion "RESTART" la cual pone el store en su estado inicial

*/

import './style.css';
import { createStore } from 'redux';

import reducer from './src/reducer';
import { initialize, render } from './src/view';

const store = createStore(reducer);

store.subscribe(() => {
  render(store);
});

initialize(store);
