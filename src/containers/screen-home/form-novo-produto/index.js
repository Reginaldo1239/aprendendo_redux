import React,{useState} from 'react';
import Validation from '../../../global/validation';
import Button from '../../../componentes/button';
import {addProduto} from '../../../actions/list-produtos';
import {connect} from 'react-redux';
import store from '../../../app/store';
import './style.css'
function FormNovoProduto(props){ 

    const [price,setPrice] = useState('');
    const [produto,setProduto] =useState('');
    const [quantidade,setQuantidade] = useState('');
    const [id,setId]= useState(0);
    const handelerValues=(event)=>{
        let name  = event.target.name;
        let value = event.target.value;
        switch(name){
            case'price':
              setPrice(Validation.formatValueMoney(value));
              break;
            case 'produto':
                setProduto(value);
                break;
              case 'quantidade':
                  setQuantidade(value)
                  break;     
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
                      <Button onClick ={()=>{ props.dispatch(addProduto({name:produto,quantidade:quantidade,price:price.replace(/[.,]/,''),id:id}));setId(id+1) ;console.log(price.replace(/[,]/,'.'))}}>+</Button>
                    </div>
            </div>
        </form>
    )
}
export default connect()(FormNovoProduto); 