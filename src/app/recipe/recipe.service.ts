import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    receipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('First Test Recipe', 'This is a test description',
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
        new Recipe('Second Test Recipe', 'This is the second test description',
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}
