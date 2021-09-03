import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sbardi-icon',
  template: `<span #sbardiIcon></span>`,
  styleUrls: ['./sbardi-icon.component.scss']
})
export class SbardiIconComponent implements OnInit {
  @Input("value") value: string;
  constructor() { }

  ngOnInit(): void {
  }

}
