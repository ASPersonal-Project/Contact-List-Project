import _ from 'loadsh';

export default ( state ={},action) => {
    switch (action.type) {
        
        case 'Add_DATA':
                const newConta = action.payload
                // console.log(typeof action.payload);
            return { ...state,newConta}
        case 'FETCH_DATA':
            return action.payload;
        case 'DELETE_CONTACT':
            
            const newData = Array.from(state).filter(conatct=> conatct.id !== action.payload);
            return newData;
            
           
            // return _.omit(state,action.payload);
        default:
            return state;
    }
}

// _.omit(state,action.payload);
// export default (state,action) =>{
//     switch (action.type) {
//         case 'DELETE_CONTACT':
//             return {
//                 ...state, contacts:state.contacts.filter(contact => contact.id !== action.payload)
//             }
    
//         default:
//            return state;
//     }
//}