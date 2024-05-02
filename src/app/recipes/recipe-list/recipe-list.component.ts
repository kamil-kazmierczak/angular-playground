import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Four Cheese", "https://thornton.garlicknotpizza.com/wp-content/uploads/sites/4/2020/01/cheese.jpg"),
    new Recipe("Domestic Pizza", "Capricciosa", "https://thornton.garlicknotpizza.com/wp-content/uploads/sites/4/2020/01/cheese.jpg"),
  ];
}
