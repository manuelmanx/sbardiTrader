import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $ComboOptionsDataSource } from 'src/app/shared/interfaces/components.dto';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any = "title";
  @Input('value') public value: $ComboOptionsDataSource = { placeholder: "seleziona", options: [{ id: "a", value: "opzione 1", isDisabled: false, isSelected: false }] };
  @Input('type') public type: any;
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public selectedOption: string;
  constructor() { }

  public emitComponentEvent(): void {
    const toReturn = this.value.options.find(o => o.id === this.selectedOption)
    this.onComponentEvent.emit({ eventName: "onComboboxChange", eventData: toReturn })
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.value?.options?.length) {
        this.selectedOption = this.value?.options?.find(o => o?.isSelected === true)?.id || 'placeholder';
      }
    }, 0)
  }

}
