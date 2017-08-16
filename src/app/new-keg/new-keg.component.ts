import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, quantity: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, 124);
    this.newKegSender.emit(newKegToAdd);
  }
  constructor() { }

  ngOnInit() {
  }

}
