import { createStore } from 'redux';
import { Reducers } from '../reducers';
export const Store = createStore(Reducers);



/*  State - Dados q são responsaveis por mostrar como o app 
estara em um determinado momento
(Array = store - guardara o nosso state)
View é a UI que irá variar */