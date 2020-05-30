import React,{useState} from 'react';
import Validation from '../../../global/validation';
import Button from '../../../componentes/button';
import {addProduto} from '../../../actions/list-produtos';
import {connect} from 'react-redux';
import store from '../../../app/store';
import './style.css'
function FormNovoProduto(props){ 

    const [price,setPrice] = useState('');
    const [id,setId]= useState(0);
    const handelerValues=(event)=>{
        let name  = event.target.name;
        let value = event.target.value;
        switch(name){
            case'price':
              setPrice(Validation.formatValueMoney(value));
        }
    }

    return(
        <form className="flex novo_produto">
        <div className="form_group">
                <div className="form_single"> 
                        <label>Produto</label> 
                    </div>
                    <div className="form_single">
                        <input
                            type='text'
                            name='produto'
                            onChange={(e)=>handelerValues(e)}
                        />
                    </div>
            </div>
            <div className="form_group">
            <div className="form_single">
                    <label>quantidade</label>
                    </div>
                 <div className="form_single">
                        <input
                            type='text'
                            name='quantidade'
                            onKeyPress={(event)=>{Validation.preventString(event)}}
                            onChange={(e)=>handelerValues(e)}
                            />
                    </div>   
              </div>
            <div className="form_group">
                <div className="form_single">
                    <label>Preço</label>
                    </div>
                    <div className="form_single">
                        <input
                            type='text'
                            name='price'
                            value={price}
                     
                            onChange={(e)=>handelerValues(e)}
                        />    
                    </div>
            </div>
            <div className="form_group">
                 <div className="form_single">
                      <Button onClick ={()=>{ props.dispatch(addProduto({name:'reginaldo',quantidade:'100',price:100,id:id}));setId(id+1) }}>+</Button>
                    </div>
            </div>
        </form>
    )
}
export default connect()(FormNovoProduto); 