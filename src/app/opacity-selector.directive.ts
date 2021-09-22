import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpacitySelector]'
})
export class OpacitySelectorDirective implements AfterViewInit {

  constructor(private rend:Renderer2
    , private elem:ElementRef) {
   }
   ngAfterViewInit(): void {
    let parentElem = this.elem.nativeElement.parentElement;
    let originalColor:string = window.getComputedStyle(this.elem.nativeElement).backgroundColor;
    let colorParemeters = originalColor.replace(/[^\d,\.]/gi,'');
    let splitColors = colorParemeters.split(',');
    let opacity = '0.25';
    if(splitColors.length > 3){
      splitColors[splitColors.length-1] = opacity;
    } else{
      splitColors.push(opacity);
    }
    let newColors = 'rgba('+splitColors.join(',')+')' 

    this.rend.setStyle(this.elem.nativeElement.parentElement,'backgroundColor',newColors)
    
    }
  

}