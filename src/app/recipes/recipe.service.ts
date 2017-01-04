import { Injectable } from '@angular/core';
import {Ingredient} from "./ingredient";
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Cake1', 'Me', [new Ingredient('eggs', 5), new Ingredient('flour', 1)], 120, 'bake it on 200 degrees'),
    new Recipe('Cake2', 'Mom', [new Ingredient('eggs', 5), new Ingredient('flour', 1),new Ingredient('sugar', 5)], 120, 'bake it on 200 degrees'),
    new Recipe('Cake3', 'Internet', [new Ingredient('eggs', 5), new Ingredient('flour', 1), new Ingredient('sugar', 5), new Ingredient('chocolate', 1)], 120, 'bake it on 200 degrees')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
