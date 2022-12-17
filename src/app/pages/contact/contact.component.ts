import { Component } from '@angular/core';


interface Fomrulario{
  nombre: string;
  apellido:string;
  sexo: string;
  email:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  palabra: string='hola';

  public nombre:any='';
  public apellido:any='';
  public sexo:any='';
  public email:any='';

  public botonVisible:boolean=false;

public noValidarInput:string='';
// public validarInput: string='';

  obj: Fomrulario={
    nombre: '',
    apellido: '',
    sexo:'',
    email:'',
  }

  

  validarInput: string = 'vacio';
 

  guardar():void{
   
    if( this.obj.apellido.trim().length===0 || this.obj.email.trim().length===0 || this.obj.sexo.length===0){
      
      return;
    }

    
      this.nombre = this.obj.nombre.toUpperCase();
      this.apellido = this.obj.apellido.toUpperCase();
      this.sexo = this.obj.sexo.toUpperCase();
      this.email = this.obj.email.toUpperCase();

        this.obj={
        nombre:'',
        apellido:'',
        sexo:'',  
        email:'',
        }

   

  }
  visibleBoton(){

   if(!this.botonVisible){
      if( this.obj.apellido.trim().length===0 || this.obj.email.trim().length===0 || this.obj.sexo.length===0){
      
      return;
    }
    this.botonVisible = !this.botonVisible
   }
   else{
      this.botonVisible = !this.botonVisible
    }
  }

}


