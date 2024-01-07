import { Component, Injector, inject } from '@angular/core';
import { SparteComponent } from '../decorators/sparte-component.decorator';

@SparteComponent('default')
@Component({
  selector: 'lib-default-sparte',
  standalone: true,
  imports: [],
  templateUrl: './default-sparte.component.html',
  styleUrl: './default-sparte.component.css',
})
export class DefaultSparteComponent {
  readonly injector = inject(Injector);
  baseLogic() {
    console.log('Here is the base logic');
  }
}
