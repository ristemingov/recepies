/**
 * Created by riste on 4.1.17.
 */
import {Ingredient} from "./ingredient";

export class Recipe {

  constructor(public name: string,
              public source: string,
              public ingredients: Ingredient[],
              public time: number,
              public instructions: string) {}
}
