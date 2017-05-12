import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test', 'Lorem ipsum',
      'https://cdna.artstation.com/p/assets/images/images/005/781/826/large/barry-hall-spider-man-sample-page-1-by-mattjamescomicarts-d7b0sox.jpg?1493737694',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]),
    new Recipe('Test2', 'MJ Rocks',
      'https://cdnb.artstation.com/p/assets/images/images/005/781/893/large/barry-hall-spider-man-sample-page-2-by-mattjamescomicarts-d7c0utf.jpg?1493738013',
      [
        new Ingredient('buns', 8),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
