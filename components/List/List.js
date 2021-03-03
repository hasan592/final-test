// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import {deleteTodo} from "../../action";
// import {editTodo} from "../../action";

// export const List = (props) => {
//     const todos =(t,i) => {
//         console.log("list=>",t.message);
//         // console.log("list=>",i);
//         const newTodo = prompt("Enter todo",t.message)
//         // if(newTodo !== null){
//         //     props.dispatch(editTodo(newTodo,i))  
//         // }
//     }
//     return (
//     <ul>
//         {props.todos.map((todo, index) => (
//             <li key= {index}>
//                 {todo.message} <TouchableOpacity >
//                    <Text> DELETE </Text>
//                     </TouchableOpacity>
//                 <TouchableOpacity onPress={()=> todos (todo,index)} >
//                    <Text> EDIT </Text>
//                     </TouchableOpacity>
//             </li>
        
//         ))}

//     </ul> 
//     );
//     // onClick={() => props.dispatch(editTodo(todo.id,todo.message))}   
// };

// // // const mapStateToProps = (state) => ({
// // //     todos: state.todos.data,
// // })


// export default  (List);


// // (mapStateToProps)
// // onPress={() => props.dispatch(deleteTodo(index))}