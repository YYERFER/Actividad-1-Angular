import { Component } from '@angular/core';


interface Formulario{
  name: string;
  surname:string;
  gender: string;
  email:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  public name:any='';
  public surname:any='';
  public gender:any='';
  public email:any='';

  public validateButton:boolean=false;

  object: Formulario={
    name: '',
    surname: '',
    gender:'',
    email:'',
  }

  public save():void{
   
    if(this.object.name.trim().length===0 || this.object.surname.trim().length===0 || this.object.email.trim().length===0 || this.object.gender.length===0){
      
      return;
    }

    
      this.name = this.object.name.toUpperCase();
      this.surname = this.object.surname.toUpperCase();
      this.gender = this.object.gender.toUpperCase();
      this.email = this.object.email.toUpperCase();

        this.object={
        name:'',
        surname:'',
        gender:'',  
        email:'',
        }

   

  }
  public visibilityButton(){
 

   if(!this.validateButton){
      if( this.object.name.trim().length===0 || this.object.surname.trim().length===0 || this.object.email.trim().length===0 || this.object.gender.length===0){
      
      return;
    }
    this.validateButton = !this.validateButton
   }
   else{
      this.validateButton = !this.validateButton
    }
  }

}


