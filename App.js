import {useState} from "react"
import React from 'react';
import firebase from "./config/firebase"
import { StyleSheet, Text, View ,TextInput, ImageBackground ,Button, ScrollView ,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import todos from "./reducers/todos";
export default function App() {

  const [gettodo,setTodo]=useState("")
  const [alltodo,setallTodo]=useState([])
  




  
  let obj={
          alltodo,
  }
  
  firebase.database().ref("todos/").set(obj)
 const AddItem=()=>{
           setallTodo([...alltodo,{key:Math.random().toString(), data: gettodo}])
           setTodo("");
 }


 const remove = (itemkey)=>{
    let list=alltodo.filter(item=>item.key != itemkey)
    setallTodo(list)
  firebase.database().ref("todos/"+ itemkey.key).remove()
    
 }

 const editTodo = () => {
     
  

  
}

// const useState = () => {
//   data: [] 
// };

  return (
    
    <ImageBackground   source={require('./assets/orange.jpg')}           style={styles.container}>
        <Text style={styles.Title}> FINAL TEST </Text>
            
       <View style={styles.InputContainer}>
          <TextInput  value={gettodo}  onChangeText={(text)=>setTodo(text)}   placeholderTextColor = "black "  style={styles.input}  placeholder="Enter todo" /> 
        <Button    onPress={AddItem} title="ADD"  /> 
    </View>
      
            <ScrollView style={styles.scrollar}>
             {alltodo.map((item)=>
             
               <View style={styles.ScrollViewItem}>
             <Text style={styles.itemtext}>{item.data}</Text> 
             <View>
             </View>


             <TouchableOpacity style={styles.crossText}>
                         <Text onPress={()=>remove(item.key)}  key={item.key}  TouchableOpacity={0.7} style={styles.delBtn}> <MaterialCommunityIcons name="delete-variant" size={24} color="blue"  />
 </Text> 
                         </TouchableOpacity>
                    <TouchableOpacity>   
                      <Text  onPress={()=>editTodo(item.key)} style={styles.editBtn}> <FontAwesome5 name="user-edit" size={24} color="blue" /> </Text> 

                  </TouchableOpacity>
         
             </View> 
                    )}
               </ScrollView>
    </ImageBackground>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:35,
    marginVertical: 120,
    marginHorizontal: 5,
    marginTop: 3,
    marginBottom: 5
  },


  Title:{
            fontSize:20,
            color:"purple",
            fontFamily:"sans-serif",
            backgroundColor:"purple",
            color:"white",
            borderRadius:10,
            padding:10,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

          
          

  },

  InputContainer:{
    marginTop:20,
        flexDirection:"row",
        width:"70%",
        justifyContent:"space-between",
        alignItems:'center',
        
           

        
  },


  input:{

                    borderColor:"purple",
                    width:"90%",
                    fontSize:20,
                    padding:10,
                    borderBottomWidth:5,
                    color:'black'

             
  },
  
  scrollar:{
       
          width:"90%",
          marginTop:30,
          
  },
  ScrollViewItem:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
    alignSelf:"center",
    padding:10,
    margin:5,
    backgroundColor:"pink",
    borderRadius:35,

  },

  itemtext:{
         color:"brown",
           fontWeight:'400',
           fontSize:23,
  },
  

  crossText:{
          
          
          fontSize:18,
         
          
          
  },


  delBtn:{
            color:"red",
            marginLeft:160,

  },


  editBtn:{ 
             color:"green"  

  }


});





















// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
// import AddTodo from './components/AddTodo/AddTodo';
// import List from './components/List/List';



// export default function App() {


//   return (
//     <View style={styles.container}>
      
//               <Text> TODO APP </Text>
//               <TouchableOpacity> 
//                 <Text>ADD_TODO </Text>
//                  </TouchableOpacity>
//               <AddTodo />

//               <List />

              
//       <StatusBar style="auto" />
//     </View>
    

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// // var list=document.getElementById("list");
// // function addItem(){
// // //    input and list work
// //     var todo=document.getElementById('todo')
// //     var li=document.createElement('li')
// //     var listText=document.createTextNode(todo.value)
// //     li.setAttribute("class","left")
// //      if(todo.value === "" ){
// //          alert("please input your todo")
// //      }
// //      li.appendChild(listText)
// //      todo.value=""
     
       
    
    
// //      //delete
// // var del=document.createElement("button")
// // var delText=document.createTextNode("DELETE")
// // del.setAttribute("class","Btn")
// // del.setAttribute("onclick","del(this)")
// // del.appendChild(delText)
// // li.appendChild(del)
// // list.appendChild(li)
// // todo.value=""
  
// // //edit btn
// // var edit=document.createElement("button")
// // var eidtText=document.createTextNode("EDIT")
// // edit.setAttribute("class","Btn")
// // edit.setAttribute("onclick","edit(this)")
// // edit.appendChild(eidtText)
// // li.appendChild(edit)
// // list.appendChild(li)
 
 


// // } 


// // function del(e){
// //     e.parentNode.remove()
// // }

// // function deleteAll(){
// //     list.innerHTML=""
// //     if(todo.value === "" ){
// //         alert("please input your todo")
// //     }
// // }
// // function edit(e){
// //     var val=prompt("enter your todo",)
// //     e.parentNode.firstChild.nodeValue=val
// //     if(val === ""){
// //         alert("Please Enter your todo!")    

// //     }
// // }