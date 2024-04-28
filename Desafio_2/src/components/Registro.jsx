import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
export default function Registro() {
    return (
        <div className='contenedor'>
       <SocialButton img1="src\assets\iconmonstr-facebook-5.svg" img2="src\assets\iconmonstr-github-5.svg" img3="src\assets\iconmonstr-linkedin-5.svg"></SocialButton>
        <br></br>
       <Formulario></Formulario>
    </div>
    )
  }