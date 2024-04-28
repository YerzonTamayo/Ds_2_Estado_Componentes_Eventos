import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';
export default function Formulario() {

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")
    const [seterror, setError] = useState("")
    const [setmensaje, setMensaje] = useState("")

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
  

    const handleNombre = function(e){
        e.preventDefault()
        setNombre(e.target.value)
    }
  
    
    const handleCorreo = function(e){
        e.preventDefault()
        setCorreo(e.target.value)
    }

    
    const handlePass1 = function(e){
        e.preventDefault()
        setPass1(e.target.value)
    }

    
    const handlePass2 = function(e){
        e.preventDefault()
        setPass2(e.target.value)
    }
  
    const validarFormulario = (e) =>{
        e.preventDefault()
        let nomb = false
        let email = false
        let contrasena = false
    

        if(nombre.length > 0){
            nomb = true
        }
        
        if(correo.length > 0){
            if(validEmail.test(correo)){
                email = true
            }else{
                    setError("Alert") 
                    setMensaje("El correo no tiene el formato correcto") 
            }
        }

        if(pass1.length > 0 && pass2.length > 0){
            if(pass1 == pass2){
                contrasena = true
            }else{
                setError("Alert") 
                setMensaje("La contras no coinside") 
            }
        }

        if(nomb && email && contrasena){
            setError("AlertOk")  
            setMensaje("Has iniciado sesion")
            return true
        }else{
            setError("Alert") 
                setMensaje("Completa todos los campos!") 
        }
    }

    return (
        <Form onSubmit={validarFormulario}>

          <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Control type="text" placeholder="Nombre" onChange={(e) =>{handleNombre(e)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="tuemiail@ejemplo.com" onChange={(e) =>{handleCorreo(e)}} />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) =>{handlePass1(e)}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordConfirming">
            <Form.Control type="password" placeholder="Confirma tu contraseña" onChange={(e) =>{handlePass2(e)}} />
          </Form.Group>

          <Button variant="success" type="submit" id='btnEnvio'>
            Registrarse
          </Button>
            <Alert validado = {seterror} mensaje={setmensaje}></Alert>
        </Form>
      );
}
