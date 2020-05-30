import React,{useState} from 'react';
import style from './style.css' 
import Header from '../../componentes/header';
import Validation  from '../../global/validation';
import FormNovoProduto from '../../containers/screen-home/form-novo-produto';
import ListProdutos from '../../containers/screen-home/list-produtos';
import {connect} from 'react-redux' 
export default function Home(){
    const [price,setPrice] = useState('');
    const handelerValues=(event)=>{
        let name  = event.target.name;
        let value = event.target.value;
        switch(name){
            case'price':
              setPrice(Validation.formatValueMoney(value));
        }
    }


return(
<div className='flex center home' >
        <Header></Header>
<section className="novo_produto">
        <FormNovoProduto></FormNovoProduto>
        <ListProdutos></ListProdutos>
            </section>     
</div>
    ) 
}  