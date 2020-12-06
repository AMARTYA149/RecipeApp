import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Paneer Chilly',
      'Spicy Paneer Dish',
      'https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Chilli-Paneer-Thumbnail.jpg',
      [new Ingredient('Paneer', 1), new Ingredient('Onion', 2)]
    ),
    new Recipe(
      'Burger',
      'Veg Burger',
      'https://i.insider.com/5d8ca1222e22af53447766c2?width=1100&format=jpeg&auto=webp',
      [new Ingredient('Bun', 2), new Ingredient('Potato', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
