

export  function addProduto(objetoProduto) {
    return {
        type:"ADD_PRODUTO",
        produto_name:objetoProduto.name,
        quantidade:objetoProduto.quantidade,
        price:objetoProduto.price,
        id:objetoProduto.id
    }
  }
  export function deleteProduto(id){
      return {
          type:'DELETE_PRODUTO',
          id:id
      } 
    }