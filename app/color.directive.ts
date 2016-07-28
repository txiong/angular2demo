/**
 * @author Thor
 * The Color directive which will apply a specified color to the element or
 * use a color from the rainbow randomly.
 */
import {Directive, Input, HostListener, ElementRef} from '@angular/core';

@Directive({
    selector: '[color]'
})
export class Color {
    /**
     * The rainbow color list.
     */
    private _colorList: [string] = ["Red",
                                    "Orange",
                                    "Yellow",
                                    "Green",
                                    "Blue",
                                    "Indigo",
                                    "Violet"];
    /**
     * The element for which
     * the directive is applied on.
     */
    private _el: HTMLElement;

    /**
     * The default color used when "rainbow" is not enabled.
     */
    private _defaultColor: string = "Orange";

    /**
     * By enabling rainbow, this will override
     * the color value and will randomly apply a color
     * from the rainbow color list.
     */
    @Input('rainbow')
    rainbow:boolean;

    /**
     * The color to apply.
     */
    @Input('color')
    color:string;

    /**
     * Initialize the directive and set the element reference. 
     */ 
    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    /**
     * On mouse enter, if "rainbow" is enabled,
     * we randomly set the background color from the available
     * color list. If "rainbow" is not enabled, we default to 
     */
    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.rainbow) {
            this._addColor(this._colorList[Math.floor(Math.random() * 7)]);
        } else {
            this._addColor(this.color || this._defaultColor);
        }
    }

    /**
     * On mouse leave, remove the color.
     */
    @HostListener('mouseleave')
    onMouseLeave() {
        this._el.style.backgroundColor = "white";
    }

    /**
     * Helper method to apply the color to the element.
     */
    private _addColor(color: string) {
        this._el.style.backgroundColor = color;
    }
}