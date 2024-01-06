import { Injectable, Type } from '@angular/core';
import { CoreComponent } from '../core/core.component';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  private components: Record<string, Type<CoreComponent>> = {};

  register(sparte: string, component: CoreComponent): void {
    // have to store component type, can only store instance here
    this.components[sparte] = component;
  }

  getFromRegistry(sparte: string): Type<CoreComponent> | null {
    return this.components[sparte] ?? null;
  }
}
