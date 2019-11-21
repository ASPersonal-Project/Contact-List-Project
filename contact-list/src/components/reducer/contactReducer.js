import _ from 'loadsh';
export default ( state = {},action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;
        default:
            return state;
    }
}
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