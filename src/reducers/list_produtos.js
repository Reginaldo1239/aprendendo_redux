

function listProdutos(state= [],action){
   // console.log(action)
   console.log(action) 
 
   switch(action.type){
        case 'ADD_PRODUTO' :
        return[
            ...state,{
                    produto_name :action.produto_name,
                    quantidade:action.quantidade,
                    price:action.price ,
                    id:action.id
             
            }                  
        ]
        break;
      
    } 
}
export default listProdutos; 