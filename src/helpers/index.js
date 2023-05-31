// case 'ORDER_BY_NAME':
//             const allR = state.filtRecipes
//          const sortAll = payload === 'asc' ? allR.sort(function(a,b) {
//         if (a.name.toLowerCase() > b.name.toLowerCase()) {
//           return 1
//         }
//         if (a.name.toLowerCase() < b.name.toLowerCase()) {
//           return -1
//         }
//         return 0      
//       }) : 
//          allR.sort(function(a,b) {
//            if (a.name.toLowerCase() < b.name.toLowerCase()) {
//               return 1
//            }
//            if (a.name.toLowerCase() > b.name.toLowerCase()) {
//            return -1
//            }
//             return 0      
//   })
//             return{
//                 //...state,
//                 ...JSON.parse(JSON.stringify(state)),
//                 recipes: sortAll
//             }
//         case 'ORDER_BY_HS':
//             const allHs = state.recipes
//             const sortHs = payload === 'High'? allHs.sort(function(a,b){
//                 if(a.healthScore > b.healthScore){
//                     return 1
//                 }
//                 if(a.healthScore < b.healthScore){
//                     return -1
//                 }
//                 return 0
//             }) :
//             allHs.sort(function(a,b){
//                 if(a.healthScore < b.healthScore){
//                     return 1
//                 }
//                 if(a.healthScore > b.healthScore){
//                     return -1
//                 }
//                 return 0
//             }) 
//             return{
//                 ...JSON.parse(JSON.stringify(state)),
//                 recipes: sortHs
//             }    