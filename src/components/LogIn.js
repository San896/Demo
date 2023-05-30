import axios from "axios";
import React, { useState, useEffect } from "react";

import validator  from 'validator'


function LogIn() {

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({})



  function validate(input) {
      
      let error = {};
      if(input.password) {
          if(!validator.isAlphanumeric(input.password)){
              error.password = "Password inválida, solo puede contener letras y/o numeros"
            }
            else if (input.password.length > 8) {
                error.password = "Password demasiado larga, max 8 caracteres";
            } 
        }                                  
        if(input.email) {
            if(!validator.isEmail(input.email)){
                error.email = "El email ingresado no es válido"
            }
            else if (input.email.length < 11) {
                error.email = "El mail ingresado es demasiado corto";
      } 
    }
               
    
    return error;

  }

  function handleChange(e) {
    const {name, value }= e.target;
    const newData = {...input, [name]: value}
    setInput(newData);
    setError(validate(newData));
  }

   function handleSubmit(e) {
    e.preventDefault();
    if ( !input.email || !input.password ) {
      alert("Por favor completa todos los campos");
    } 
    if(error.email || error.password){
        console.log('error error', error.message)
        alert("Error, revisar datos")
    }
    else  return async function(dispatch) {
        await axios.post(
         'http://demotest.silicon-access.com/fapi/auth/login/',
        {
          username:"noreply+challenge@silicon-access.com",
          password:"bienvenido123"
        })
        .then((res) => setUser(res)).catch((error) => console.log('err:', error));
        console.log('estadooo' , user)
    }
  }




  return (
    <>
      <div >
        <form     
          onSubmit={handleSubmit}

        >
          <h1 > Log In Demoo </h1>

        
          <div >
            <label>
              Email
            </label>
            <div>
        
            </div>
            <input
              type="email"
              placeholder="Email..."
              onChange={handleChange}
              name="email"
              value={input.email}
             className={error.email && "danger"}
            ></input> 

            {error.email && <p className="danger">{error.email}</p>}
            

          </div>
        
          <div >
            <label  >
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña..."
              onChange={handleChange}
              name="password"
              value={input.password}
              className={error.password && "danger"}
            ></input> 

          {error.password && <p className="danger">{error.password}</p>}
    
          </div>
          
          <div >
            <button type="submit">
              Registrarse
            </button>
          </div>

        </form>

      </div>
    </>
  );
}



export default LogIn;
