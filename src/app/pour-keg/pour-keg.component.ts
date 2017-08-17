import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';
import { Revenue } from './../revenue.model';

@Component({
  selector: 'pour-keg',
  templateUrl: './pour-keg.component.html',
  styleUrls: ['./pour-keg.component.css']
})
export class PourKegComponent implements OnInit {
  @Input() childRevenue: Revenue[];

  revenueTotal(currentRevenue) {
    if (currentRevenue.total > 100) {
      return "rich";
    } else if (currentRevenue.total < 30) {
      return "poor";
    } else if (currentRevenue.total === 0) {
      return "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
