import { Directive, ElementRef, Renderer2, HostListener, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInputValidar]',
  // host:{"(input)": 'onInputChange($event)'}
})
export class InputValidarDirective {

  constructor(
    private elementref:ElementRef, private renderer:Renderer2
  ) { }
  // onInputChange(event:Event)

@HostListener('input')
  onInputChange(){
    const initValue = this.elementref.nativeElement.value;

    if(!initValue){

        this.elementref.nativeElement.style.outlineColor='red';
        
       }else{
        
        this.elementref.nativeElement.style.outlineColor='';
      }

    }

}

