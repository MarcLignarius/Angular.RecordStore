import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';
import { OnInit } from '@angular/core';

@Pipe({
  name: "filters",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Product[], chosenCategory) {
    var output: Product[] = [];
    if(chosenCategory != "allProducts") {
      input.forEach(eachInput => {  
        if(eachInput.category === chosenCategory) {
          output.push(eachInput);
        }
      });
      return output;
    }
    else {
    return input;
    }
  }
}
