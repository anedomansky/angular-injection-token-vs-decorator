import { InjectionToken } from '@angular/core';
import { DefaultSparteComponent } from '../default-sparte/default-sparte.component';

export const SPARTE_COMPONENT_TOKEN =
  new InjectionToken<DefaultSparteComponent>('sparte.component.token');

export abstract class SparteComponentToken {
  baseLogic() {
    console.log('Here is the base logic');
  }
}
