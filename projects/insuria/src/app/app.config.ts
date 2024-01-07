import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { SPARTE_COMPONENT_TOKEN } from 'core';
import { UnfallSparteComponent } from 'sparte';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: SPARTE_COMPONENT_TOKEN,
      useClass: UnfallSparteComponent,
    },
  ],
};
