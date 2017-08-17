import { Component, OnInit } from '@angular/core';
import { Keg } from './keg.model';
import { Revenue } from './revenue.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Rudlow Brewing Co.';
  currentTime = new Date();
  hour: number = this.currentTime.getHours();
  minute: number = this.currentTime.getMinutes();
  // console.log(this.currentTime);

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Flying V IPA', 'Rudlow Brewing', 5, 7.2, 124),
    new Keg('Stare Pivo Pilsner', 'Rudlow Brewing', 5, 4.6, 124),
    new Keg('Lemon Kiss Radler', 'Rudlow Brewing', 5, 3.2, 124),
    new Keg('New Moon Imperial Porter', 'Rudlow Brewing', 8, 10.2, 124),
    new Keg('Falling Leaves ESB', 'Rudlow Brewing', 5, 4.7, 124),
    new Keg('Breakfast Of Hefeweizen', 'Rudlow Brewing', 5, 5.1, 124)

  ];

  masterRevenue: Revenue[] = [
    new Revenue(0)
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
    if (clickedKeg.quantity < 10) {
      alert(clickedKeg.name + " is almost sold out! Change the keg!")
    } if (clickedKeg.quantity === 0) {
      clickedKeg.name = clickedKeg.name + " is SOLD OUT";
      clickedKeg.price = 0;
    } if (clickedKeg.quantity === -1) {
      clickedKeg.quantity += 1
    }

    this.masterRevenue[0].total += parseInt(clickedKeg.price);
  }

  ngOnInit() : void {
    console.log("here we are");
    console.log(this.hour);
    if (this.hour >= 14 && this.hour <= 16) {
      this.masterKegList[0].price -= 1;
    }
  }
  // happyHour() {
  //
  // }
  // setInterval(this.hour {
  //
  // }, 1000);

}
