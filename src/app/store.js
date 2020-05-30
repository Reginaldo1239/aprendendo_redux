import { createStore } from 'redux';
import listProdutos from '../reducers/list_produtos'


const store = createStore(listProdutos);
export default store;  