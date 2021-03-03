// import React from "react";
// import { StyleSheet, Text, View ,TextInput, ImageBackground ,Button, ScrollView ,TouchableOpacity} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { FontAwesome5 } from '@expo/vector-icons';

// const remove = (itemkey)=>{
//     let list=alltodo.filter(item=>item.key != itemkey)
//     setallTodo(list)
//   firebase.database().ref("todos/"+ itemkey.key).remove()
    
//  }


//  const editTodo = () => {
     
  
  
// }

// return (
//     <View>
//     <TouchableOpacity style={styles.crossText}>
//     <Text onPress={()=>remove(item.key)}  key={item.key}  TouchableOpacity={0.7} style={styles.delBtn}> <MaterialCommunityIcons name="delete-variant" size={24} color="blue"  />
// </Text> 
// </TouchableOpacity>

// <TouchableOpacity>   
//                       <Text  onPress={()=>editTodo(item.key)} style={styles.editBtn}> <FontAwesome5 name="user-edit" size={24} color="blue" /> </Text> 

//                   </TouchableOpacity>
//                   </View>
// )
// export default;























// const initialState = {
//     data: [],
// };

// const todos = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return {
//                 ...state,
//                 data: [
//                     ...state.data,
//                     {
//                        message: action.message,
//                     //    id: action.id, 
//                     },
//                 ],
//             };
//         case "DELETE_TODO":
//             // console.log("del id a",action.id);
//             state.data.splice(action.id,1);
//             // const todos = state.data.filter((todo) => todo.id !== action.id);
//             return {
//                 ...state,
//                 data:[...state.data]
//             }
           
            
//         case "EDIT_TODO" :
//             // console.log("red",action.message);
//             // console.log("red",action.id);
//         state.data[action.id] = {message:action.message};
//         return {
//             ...state,
//             data:[...state.data]
//         };
            
//         default:
//             return state;
//     }
// };

// export default todos;