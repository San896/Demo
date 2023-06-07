

// case 'ORDER_BY_NAME':
export  const orderName = (state, order) => {

        const allProd = state
        
        if(order === 'asc'){
             allProd.sort(function(a,b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                }
                return 0      
            })}

            else if(order === 'desc'){
                  allProd.sort(function(a,b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                       return 1
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                    }
                     return 0      
           })
            }
            
            return allProd
            
        }

//          const sortAll = 
//           order === 'asc' ?

        //   allProd.sort(function(a,b) {
        //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
        //         return 1
        //     }
        //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
        //         return -1
        //     }
        //     return 0      
        // }) : 

//         order === 'desc' ?

//           allProd.sort(function(a,b) {
//            if (a.name.toLowerCase() < b.name.toLowerCase()) {
//               return 1
//            }
//            if (a.name.toLowerCase() > b.name.toLowerCase()) {
//            return -1
//            }
//             return 0      
//   }) : allProd 
  
        // return [sortAll]
        // }





   
        export const orderPrice = (state, order) => {

            const allProducts = state

            if(order === 'asc'){
                allProducts.sort(function(a,b) {
                    if(a.price > b.price){
                        return -1
                    }
                    if(a.price < b.price){
                        return 1
                    }
                    return 0     
               })}
   
               else if(order === 'desc'){
                allProducts.sort(function(a,b) {
                    if(a.price < b.price){
                        return -1
                    }
                    if(a.price > b.price){
                        return 1
                    }
                    return 0     
              })
               }
            

            // const sortPrice = 
            // order === 'asc'? 

            // allProducts.sort(function(a,b){
            //     if(a.price > b.price){
            //         return 1
            //     }
            //     if(a.price < b.price){
            //         return -1
            //     }
            //     return 0
            // }) :

            // order === 'desc' ?
            // allProducts.sort(function(a,b){
            //     if(a.price < b.price){
            //         return 1
            //     }
            //     if(a.price > b.price){
            //         return -1
            //     }
            //     return 0
            // }) 
            // : allProducts
            
            return allProducts  
            
        }

       