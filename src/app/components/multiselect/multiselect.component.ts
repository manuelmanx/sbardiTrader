import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $ComboOptionsDataSource } from 'src/app/shared/interfaces/components.dto';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: string;
  @Input('value') public value: $ComboOptionsDataSource = { placeholder: "seleziona", options: [{ id: "a", value: "opzione 1", isDisabled: false, isSelected: false }] };
  @Input('type') public type: any;
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Input('isDisabled') public isDisabled: boolean = false;
  @Input('dropDirection') public dropDirection: "up" | "down" = "down";
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  @ViewChild('multiselectbox') public multiselectbox: ElementRef;
  public isExpanded: boolean = false;
  public isFirstLoading: boolean = true;
  constructor() { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.multiselectbox.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isExpanded = false;
    }
  }

  public onExpandCollapse(): void {
    if (this.isFirstLoading) {
      this._saveBoxWidth();
      this.isFirstLoading = false;
    }
    if (!this.isExpanded) {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }
  private _saveBoxWidth() {
    this.multiselectbox.nativeElement.style.width = this.multiselectbox?.nativeElement?.getBoundingClientRect()?.width + "px";
  }

  public getPlaceholder(): string {
    return !!this.value.placeholder
      ? this.value.placeholder
      : '';
  }

  public checkOption(id: string): void {
    this.value.options.find(e => e.id == id).isSelected = !this.value.options.find(e => e.id == id).isSelected;
    this.onSelectionChanges(this.value.options.find(e => e.id == id).isSelected, id);
  }

  public onSelectionChanges(event, id): void {
    this.value.options.find(e => e.id == id).isSelected = event;
    this._updatePlaceholder();
    this.emitComponentEvent();
  }

  private _getCheckedOptions(): any {
    return this.value?.options?.filter(e => e?.isSelected)
  }

  private _updatePlaceholder(): void {
    let tmpPlaceholder = "";
    const checkedOptions = this._getCheckedOptions()
    if (checkedOptions?.length == this.value?.options?.length) {
      tmpPlaceholder = "Tutte"
    } else if (checkedOptions?.length == 0) {
      tmpPlaceholder = "Nessuna"
    } else {
      tmpPlaceholder = checkedOptions.map(e => e.value).join(", ")
    }
    this.value.placeholder = tmpPlaceholder;
  }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onComboboxChange", eventData: this._getCheckedOptions() })
  }

  ngOnInit(): void {

  }



}