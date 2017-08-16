import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rudlow Brewing Co.';
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Flying V IPA', 'Rudlow Brewing', 5, 7.2, 124),
    new Keg('Stare Pivo Pilsner', 'Rudlow Brewing', 5, 4.6, 124),
    new Keg('Lemon Kiss Radler', 'Rudlow Brewing', 5, 3.2, 124),
    new Keg('New Moon Imperial Porter', 'Rudlow Brewing', 8, 10.2, 124),
    new Keg('Falling Leaves ESB', 'Rudlow Brewing', 5, 4.7, 124),
    new Keg('Breakfast Of Hefeweizen', 'Rudlow Brewing', 5, 5.1, 124)

  ];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  pourKeg(clickedKeg) {
    clickedKeg.quantity -= 1;
    console.log(clickedKeg.quantity);
  }
}
