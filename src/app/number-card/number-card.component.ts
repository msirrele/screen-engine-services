import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent {
  @Input() faIconClass;
  @Input() number;
  @Input() bandColor;
  @Input() description;
  @Input() showSpinner = false;
  @Input() percentageSign = false;

  constructor() {}

}
