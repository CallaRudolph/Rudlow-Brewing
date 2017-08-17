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
  filterByAlcohol: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourButtonHasBeenClicked(kegToPour: Keg) {
    this.clickPour.emit(kegToPour);
  }

  kegStyle(currentKeg) {
    if (currentKeg.price > 5) {
      return "expensive";
    } else if (currentKeg.price === 0) {
      return "bg-danger";
    } else {
      return "cheap";
    }
  }

  kegStrength(currentKeg) {
    if (currentKeg.alcoholContent > 7) {
      return "hi-abv";
    } else {
      return "";
    }
  }

  onChange(optionFromMenu) {
    this.filterByAlcohol = optionFromMenu;
  }

  toggleDone(clickedKeg: Keg, setAlcohol: number) {
    clickedKeg.alcoholContent = setAlcohol;
  }

  constructor() { }

  ngOnInit() {
  }

}
