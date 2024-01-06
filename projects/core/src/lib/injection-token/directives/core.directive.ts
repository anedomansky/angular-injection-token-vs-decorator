import { Directive } from '@angular/core';

@Directive()
export class CoreDirective {
  baseLogic() {
    console.log('Here is the base logic');
  }
}
