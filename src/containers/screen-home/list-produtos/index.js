import React, { useState, useEffect } from 'react';
import './style.css' 
import store from '../../../app/store';
import {deleteProduto} from '../../../actions/list-produtos';
import Validation from '../../../global/validation'
import {connect} from 'react-redux';
function ListProdutos(props){
    const [produtos,setProdutos] = useState([]);
//store.subscribe((e) =>console.log(setProdutos(store.getState())))
  //store.subscribe(()=>{console.log(setProdutos(store.getState()));})
store.subscribe(()=>{ setProdutos(store.getState().produtos);console.log(produtos)});
store.subscribe(()=>{ console.log(store.getState())});
    return ( 
        <div className="list_produtos" onClick={()=>console.log(props.p)}>
        <div className="line_of_table flex ">
            <div className="box">
                    <span>Produtos</span>
                </div> 
             <div className="box">
                    <span>quantidade</span>
                 </div>
                 <div className="box">
                     <span>total</span>
                     </div>  
                     <div className="box">
                    
                            </div>    
                </div>     
                    {produtos.map((lista,i)=>   
                    <div key={lista,i} className="line_of_table flex">
                      {console.log(lista)}
                     <div className="box">
                    <span>{lista.produto_name} </span>
                </div>
                   <div className="box">
                         <span>{lista.quantidade}</span>
                     </div>
                        <div className="box">
                        <span>{ Validation.formatValueMoney(lista.price)}</span>
                            </div>  
                            <div className="box"onClick={()=>props.dispatch(deleteProduto(i))}>
                          <span>X</span>
                            </div>    
                     
 
                    </div>
                     )
}
               
                     
            </div>
            
    )
}
export default connect()(ListProdutos)