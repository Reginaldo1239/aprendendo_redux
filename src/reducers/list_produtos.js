

function listProdutos(state = {produtos:[]},action){
   // console.log(action)
   switch(action.type){
        case 'ADD_PRODUTO' :
return{
    ...state,
    produtos:[
        ...state.produtos,{ 
    produto_name : action.produto_name,
    quantidade:action.quantidade,
    price:action.price *action.quantidade,
    id:action.id }]

   }
        break;
      case 'DELETE_PRODUTO':
          return{
              ...state,
              produtos:[
                  ...state.produtos.slice(0,action.id ), ...state.produtos.slice(action.id+1)
                      
                  
              ]
          }
}}

export default listProdutos; 