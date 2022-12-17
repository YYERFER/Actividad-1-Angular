import { Directive, ElementRef, HostListener } from '@angular/core';
import { timeStamp } from 'console';

@Directive({
  selector: '[appInputFormulario]'
})
export class InputFormularioDirective {

  constructor( 
    private elementref : ElementRef
    
  ) {}

  initValue = this.elementref.nativeElement.value;
  longitud = this.initValue.length;

  // @HostListener('mouseenter')
  public onInput(){
    
    this.elementref.nativeElement.style='yellow';

    // if(!this.initValue){

    //   this.elementref.nativeElement.style.outlineColor='red';
      
    //  }else{
      
    //   this.elementref.nativeElement.style.outlineColor='';
    // }
    
  }

  // @HostListener('mouseenter')
  // public validar(){
  //   if(this.longitud>0){
      
  //     this.elementref.nativeElement.style.outlineColor = 'blue';
  //   }
 // }

}
