const ADD_TODO = "ADD_TODO";
export const addTodo = (message) => ({
    type:ADD_TODO,
    message
    // id: Math.random(),
});

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
    type:DELETE_TODO,
    id,
});


const EDIT_TODO = "EDIT_TODO";
export const editTodo = (Todo,id) => { 
// console.log("a",id)
// console.log("a",Todo)

return {
    type: EDIT_TODO,
    message: Todo,
    id,
}

//     {
//     type:EDIT_TODO,
//     id,

// }
}