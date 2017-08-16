import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model'


@Pipe({
  name: "alcoholContent",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {

  transform(input: Keg[], desiredAlcohol) {
    var output: Keg[] = [];
    if (desiredAlcohol === "lowAbv") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcoholContent <= 6) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAlcohol === "highAbv") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcoholContent >= 6) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
