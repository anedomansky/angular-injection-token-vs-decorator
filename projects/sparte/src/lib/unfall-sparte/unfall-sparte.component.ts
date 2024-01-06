import { Component } from '@angular/core';
import { DefaultSparteComponent } from 'core';

@Component({
  selector: 'lib-unfall-sparte',
  standalone: true,
  imports: [],
  templateUrl: './unfall-sparte.component.html',
  styleUrl: './unfall-sparte.component.css',
})
export class UnfallSparteComponent extends DefaultSparteComponent {
  unfallLogic() {
    console.log('Unfall logic');
    this.baseLogic();
  }
}
