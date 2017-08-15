import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rudlow Brewing Co.';

  masterKegList: Keg[] = [
    new Keg('Flying V IPA', 'Rudlow Brewing', 140, 7.2),
    new Keg('Stare Pivo Pilsner', 'Rudlow Brewing', 130, 4.6),
    new Keg('Lemon Kiss Radler', 'Rudlow Brewing', 120, 3.2),
    new Keg('New Moon Porter', 'Rudlow Brewing', 130, 4.2),
    new Keg('Falling Leaves ESB', 'Rudlow Brewing', 130, 4.7),
    new Keg('Breakfast Of Hefeweizen', 'Rudlow Brewing', 140, 5.1)

  ];
}
