import {Component} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  username = '';


  onReset() {
    this.username = '';
  }
}
