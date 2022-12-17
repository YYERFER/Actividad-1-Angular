import { Directive, ElementRef, HostListener } from '@angular/core';
import { on } from 'events';
import { listeners } from 'process';

@Directive({
  selector: '[appMenuColor]'
})
export class MenuColorDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter')
  public onMouseOver(){
  
      this.elementRef.nativeElement.style.backgroundColor = ' #8d9ead' ;
      this.elementRef.nativeElement.style.borderRadius = '5px' ;
      this.elementRef.nativeElement.style.fontSize = '23px';
      this.elementRef.nativeElement.style.color='#171e24' ;
    
  }
  @HostListener('mouseleave')
  public onMouseOut(){
    this.elementRef.nativeElement.style.backgroundColor = 'transparent' ;
    this.elementRef.nativeElement.style.fontSize = '15px';
    this.elementRef.nativeElement.style.color='gray' ;
  }
 
}
