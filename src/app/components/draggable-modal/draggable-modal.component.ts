import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { $ComponentEventType } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-draggable-modal',
  templateUrl: './draggable-modal.component.html',
  styleUrls: ['./draggable-modal.component.scss']
})
export class DraggableModalComponent implements OnInit {
  public data: { isDivHold: boolean; offsetX: number; offsetY: number } = {
    isDivHold: false,
    offsetX: null,
    offsetY: null,
  };
  public isCollapsed: boolean = false;
  private _size: { width: number, height: number } = { width: null, height: null };
  @Input('title') public title: string = "";
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  @ViewChild('floatingWrapper') private _floatingWrapper: ElementRef;
  @ViewChild('floatingContent') private _floatingContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    if (this.data.isDivHold) {
      var xRight = Math.round((window.innerWidth - e.clientX) - this.data.offsetX + (this._size.width / 2));
      var yBottom = Math.round((window.innerHeight - e.clientY) - this.data.offsetY + (this._size.height / 2));
      this._makeComponentInsideBox(xRight, yBottom);
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e) {
    if (this.data.isDivHold) {
      this.removeHoldingDiv();
    }
  }

  private _sizeParser() {
    const rect = this._floatingWrapper?.nativeElement?.getBoundingClientRect();
    if (this._size.width !== rect.width) {
      this._size.width = rect.width;
    }
    if (this._size.height !== rect.height) {
      this._size.height = rect.height;
    }
  }

  public setHoldingDiv(e): void {
    this._sizeParser();
    this.data.isDivHold = true;
    const rect = this._floatingWrapper?.nativeElement?.getBoundingClientRect();
    this.data.offsetX = rect.right - e.clientX;
    this.data.offsetY = rect.bottom - e.clientY;
  }
  private _makeComponentInsideBox(ADR: number, yBottom: number) {
    var xLeft = null;
    var xRight = null;
    if (ADR > (window.innerWidth / 2)) {
      xLeft = Math.round(window.innerWidth - ADR - this._size.width);
    } else {
      xRight = Math.round(ADR);
    }

    if (!!xLeft && (xLeft + this._size.width / 2) < 1) xLeft = 1 - (this._size.width / 2);
    if (!!xRight && (xRight - this._size.width / 2) < 1) xRight = 1 + (this._size.width / 2);

    if ((yBottom - this._size.height / 2) < 24) {
      yBottom = 24 + (this._size.height / 2);
    } else if ((yBottom + this._size.height / 2) > window.innerHeight - 68) {
      yBottom = window.innerHeight - 68 - (this._size?.height) + (this._size.height / 2)
    }
    if (xRight) {
      this._floatingWrapper.nativeElement.style.removeProperty("left");
      this._floatingWrapper.nativeElement.style.right = `${xRight}px`
    } else if (xLeft) {
      this._floatingWrapper.nativeElement.style.removeProperty("right");
      this._floatingWrapper.nativeElement.style.left = `${xLeft}px`;
    }

    this._floatingWrapper.nativeElement.style.bottom = `${yBottom}px`;
  }
  public removeHoldingDiv(): void {
    this.data.isDivHold = false;
  }
  public onCollapseClick() {
    this._floatingContent.nativeElement.style.overflow = "hidden";
    this.isCollapsed = true;
    this._sizeParser();
  }

  public onExpandClick() {
    this.isCollapsed = false;
    this.awaitToOverFlowVisibleContent().then(data => {
      this._sizeParser();
      this._floatingContent.nativeElement.style.overflow = "visible";

    })
  }
  public async awaitToOverFlowVisibleContent(): Promise<boolean> {
    return new Promise(res => {
      setTimeout(() => {
        res(true)
      }, 500);
    })
  }
  public onCloseModal(): void {
    this.emitComponentEvent("onCloseDraggableModal")
  }
  public emitComponentEvent(eventName: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: null })
  }
}
