import { Component, Input } from '@angular/core';
import { ScreenEngineProductsService } from '../screen-engine-services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  category: any;
  displayedColumns: string[] = ['productName', 'clientsServed', 'productSummary'];
  constructor(
    private sepService: ScreenEngineProductsService
  ) { }
}
