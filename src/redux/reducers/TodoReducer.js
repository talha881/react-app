const initaliseState = []
// {
//     id: 1, 
//     Title: 'Some text tilte 1',
//     Description: 'test description 1'
// },
// {
//     id: 2, 
//     Title: 'Some text tilte 2',
//     Description: 'test description 2'
// }





export const TodoReducer = (state =initaliseState , action)=>{
    switch (action.type){
        case 'Add_TODO' : 
        return [...state , action.payload]; 
        case 'DELETE_TODO':
        const newState = state.filter((todo)=>todo.id != action.payload)
        return  newState; 

        case 'UPDATE_TODO':
        const updateState = state.filter((todo)=>todo.id != action.payload.id)
        return  [...updateState ,action.payload]
        
        default :
        return state;
    }


}