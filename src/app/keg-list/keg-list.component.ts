import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickPour = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourButtonHasBeenClicked(kegToPour: Keg) {
    this.clickPour.emit(kegToPour);
  }

  kegStyle(currentKeg) {
    if (currentKeg.price > 5) {
      return "bg-danger";
    } else {
      return "bg-warning";
    }
  }

  kegStrength(currentKeg) {
    if (currentKeg.alcoholContent > 7) {
      return "hi-abv";
    } else {
      return "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
