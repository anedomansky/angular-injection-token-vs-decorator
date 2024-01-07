import { Injectable, Type } from '@angular/core';
import { CoreComponent } from '../core/core.component';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  private components = new Map<string, CoreComponent>();

  register(sparte: string, component: CoreComponent): void {
    // have to store component type, can only store instance here
    this.components.set(sparte, component);
  }

  getFromRegistry(sparte: string): CoreComponent | null {
    return this.components.get(sparte) ?? null;
  }
}
