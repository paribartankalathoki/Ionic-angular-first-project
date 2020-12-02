import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    { id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://recipes.timesofindia.com/thumb/54673639.cms?imgsize=497063&width=400&height=400',
      ingredients: ['French Fries', 'Chicken Fries', 'Salad']
    },
    { id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://recipes.timesofindia.com/thumb/54673639.cms?imgsize=497063&width=400&height=400',
      ingredients: ['Spaghetti', 'Meat', 'Tomato']
    },
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
