import { Directive, ElementRef, Renderer } from '@angular/core'

@Directive({
    selector: '[autogrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur'
    }
})
export class AutoGrowDirective {
    _el: ElementRef;
    _ren: Renderer;
    constructor(el: ElementRef, ren: Renderer) {
        this._el = el;
        this._ren = ren;
    }
    onFocus() {
        this._ren.setElementStyle(this._el.nativeElement, 'width', '200');
    }
    onBlur() {
        this._ren.setElementStyle(this._el.nativeElement, 'width', '100');
    }
}