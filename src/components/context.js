import React, { createContext, useContext, useState } from "react";
import axios from 'axios'
const AuthContext = createContext(); // creating a context

export const AuthProvider = ({ children }) => {   //setting up a provider and handling fucntion as per requirement 
  const [user, setUser] = useState("");

  // code for global context fucntions
  const Login = async(data)=>{
  console.log(data)
    axios.post("http://localhost:8080/api/auth/login",data)
   .then(()=>{
    setUser(data.email)
    console.log(data.email)
    alert("success")
    // console.log(data.email)
    // setUser(data.email)
    // console.log(data.email)
    return user
    
   
    
   }
   )

   .catch(()=> {
    alert("error")
   })
   

   }
  
  return (
    <AuthContext.Provider value={{ user, Login }}>    
      {children}
    </AuthContext.Provider>
  );
}; //returning the provider which we created above

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};  // exporting  the context created here so that we can use the global context and its values throughout the application
