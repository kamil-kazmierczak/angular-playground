import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Kiwi', 5),
    new Ingredient('Potatoes', 4),
  ]
  clickedButtonsCounter = 0;
  lastClickedButton: string = '';

  onClickedButtons(event: { buttonType: string, buttonClicked: true }) {
    this.clickedButtonsCounter++;
    this.lastClickedButton = event.buttonType;
  }

}
