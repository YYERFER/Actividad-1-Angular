import { Component } from '@angular/core';

interface Fomrulario{
  nombre: string;
  apellido:string;
  email:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  obj: Fomrulario={
    nombre: '',
    apellido: '',
    email:'',
  }
  limpiar():void{
    if(this.obj.nombre.trim().length===0 || this.obj.apellido.trim().length===0 ){
      return;
    }

      this.obj={
        nombre:'',
        apellido:'',
        email:'',
      }
    
    
  }

}
