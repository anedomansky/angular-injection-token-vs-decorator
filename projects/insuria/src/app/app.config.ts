import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DefaultSparteComponent } from 'core';
import { UnfallSparteComponent } from 'sparte';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: DefaultSparteComponent,
      useClass: UnfallSparteComponent,
    },
  ],
};
