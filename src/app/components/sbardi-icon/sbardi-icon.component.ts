import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconPackClass } from 'src/app/shared/classes/icon-pack.class';

@Component({
  selector: 'sbardi-icon',
  template: `<span #iconWrapper></span>`,
  styleUrls: ['./sbardi-icon.component.scss']
})
export class SbardiIconComponent implements OnInit, AfterViewInit {
  @Input("value") value: string;
  @ViewChild("iconWrapper") private _iconWrapper: ElementRef;
  private _iconClass: IconPackClass = new IconPackClass();
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this._iconWrapper.nativeElement.innerHTML = this._iconClass.getSVGIcon(this.value)
  }
}
