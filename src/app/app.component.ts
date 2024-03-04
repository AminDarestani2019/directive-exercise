import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,BasicHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive-exercise';
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
}
