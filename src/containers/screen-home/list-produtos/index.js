import React, { useState, useEffect } from 'react';
import './style.css' 
import store from '../../../app/store';
import {deleteProduto} from '../../../actions/list-produtos';
import {connect} from 'react-redux';
function ListProdutos(props){
    const [produtos,setProdutos] = useState([]);
//store.subscribe((e) =>console.log(setProdutos(store.getState())))
  //store.subscribe(()=>{console.log(setProdutos(store.getState()));})
store.subscribe(()=>{ setProdutos(store.getState());console.log(produtos)});
 
    return ( 

        <div className="list_produtos">
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
                <div className="line_of_table flex">
                     <div className="box">
                    <span>feijão </span>
                </div>
                    <div className="box">
                         <span>100</span>
                     </div>
                        <div className="box">
                          <span>150,11</span>
                            </div>  
                            <div className="box">
                          <span>X</span>
                            </div>  
                    </div>
                    {produtos.map((e,i)=>
                    <div key={e,i} className="line_of_table flex">
            
                     <div className="box">
                    <span>feijão </span>
                </div>
                   <div className="box">
                         <span>100</span>
                     </div>
                        <div className="box">
                    <span>{e.id}</span>
                            </div>  
                            <div className="box">
                          <span>X</span>
                            </div>    
                     

                    </div>
                     )
}
                    
                    
                     
            </div>
            
    )
}
export default connect()(ListProdutos)