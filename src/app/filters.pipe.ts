import {Pipe, PipeTransform} from '@angular/core';
import {Product} from './product.model';

@Pipe({
    name: "filters",
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(input: Product[]){
        var output: Product[] = [];
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Clothing") {
            output.push(input[i]);
          }
          else if (input[i].category === "Album") {
            output.push(input[i]);
          }
          else if (input[i].category === "Accessories") {
            output.push(input[i]);
          }
        }
        return output;
      }
}