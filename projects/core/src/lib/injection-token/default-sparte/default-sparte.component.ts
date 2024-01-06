import { Component } from '@angular/core';

@Component({
  selector: 'lib-default-sparte',
  standalone: true,
  imports: [],
  templateUrl: './default-sparte.component.html',
  styleUrl: './default-sparte.component.css',
})
export class DefaultSparteComponent {
  baseLogic() {
    console.log('Here is the base logic');
  }
}
