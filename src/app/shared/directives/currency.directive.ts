import {CurrencyPipe} from '@angular/common';
import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef,
              private currencyPipe: CurrencyPipe) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener('blur', ['$event.target.value'])
  public onBlur(value): void {
    this.el.value = this.currencyPipe.transform(value);
  }

  @HostListener('keypress', ['$event'])
  public onKeyPress(event): void {
    const key = event.which || event.keyCode || 0;
    if (key !== 46 && key > 31 && (key < 48 || key > 57)) {
      event.preventDefault();
    }
  }

}
