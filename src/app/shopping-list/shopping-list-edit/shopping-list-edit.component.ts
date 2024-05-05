import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {

  @Output()
  buttonClickEvent = new EventEmitter<{buttonClicked: boolean, buttonType: string}>();

  onButtonClicked(type: string) {
    this.buttonClickEvent.emit({buttonClicked: true, buttonType: type});
  }
}
