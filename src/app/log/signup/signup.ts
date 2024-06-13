import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[signpop]",
    standalone: true
})
export class SignpopDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.color = "red";
    }




}



