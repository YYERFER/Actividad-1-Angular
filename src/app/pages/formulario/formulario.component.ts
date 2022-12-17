import { Component } from '@angular/core';

interface interfaceFormulario{
  nombre: string;
  apellido: string;
  password: string;
  email: string;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    public nombre:any='';
    public apellido:any='';
    public email:any='';
    public botonVisible:boolean=false;


    objeto: interfaceFormulario ={
      nombre:'',
      apellido:'',
      password:'',
      email:'',
    }

    
    
    public EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    public mostrar(): void{
      if(this.objeto.nombre.trim().length===0 || this.objeto.apellido.trim().length===0 || this.objeto.email.trim().length===0 || this.objeto.password.length < 9){
      
        return;
      }else if(!this.objeto.email.match(this.EMAIL)){
        return;
      }

      this.nombre = this.objeto.nombre.toUpperCase();
      this.apellido = this.objeto.apellido.toUpperCase();
      this.email = this.objeto.email;
      

      this.objeto={
        nombre:'',
        apellido:'',  
        email:'',
        password:'',
      }


    }

    visibleBoton(){
    
      // this.botonVisible = !this.botonVisible
      if(!this.botonVisible){
        if(this.objeto.nombre.trim().length===0 || this.objeto.apellido.trim().length===0 || this.objeto.email.trim().length===0 || this.objeto.password.length < 9){
      
          return;
        }
      this.botonVisible = !this.botonVisible
     }
     else{
        this.botonVisible = !this.botonVisible
      }

    }

}
