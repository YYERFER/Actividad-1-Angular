import { Component } from '@angular/core';

interface interfaceFormulario{
  name: string;
  surname: string;
  password: string;
  email: string;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    public name:any='';
    public surname:any='';
    public email:any='';
    public validateButton:boolean=false;


    object: interfaceFormulario ={
      name:'',
      surname:'',
      password:'',
      email:'',
    }

    
    
    public EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   

    public show(): void{
      if(this.object.name.trim().length===0 || this.object.surname.trim().length===0 || this.object.email.trim().length===0 || this.object.password.length < 9){
      
        return;
      }else if(!this.object.email.match(this.EMAIL)){
        return;
      }

      this.name = this.object.name.toUpperCase();
      this.surname = this.object.surname.toUpperCase();
      this.email = this.object.email;
      

      this.object={
        name:'',
        surname:'',  
        email:'',
        password:'',
      }


    }

    public visibilityButton(){
  
      if(!this.validateButton){
        if(this.object.name.trim().length===0 || this.object.surname.trim().length===0 || this.object.email.trim().length===0 || this.object.password.length < 9){
      
          return;
        }else if(!this.object.email.match(this.EMAIL)){
          return;
        }
      this.validateButton = !this.validateButton
     }
     else{
        this.validateButton = !this.validateButton
      }

    }

}
