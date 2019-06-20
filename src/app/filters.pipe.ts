import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "filters",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Product[], chosenCategory) {
    console.log(chosenCategory);
    var output: Product[] = [];

    if (chosenCategory === "Accessories") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Accessories") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenCategory === "Clothing") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Clothing") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenCategory === "Music") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Music") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    }
  }
}
