import { RegistryService } from '../services/registry.service';

export function SparteComponent(sparte: string) {
  return function (constructor: Function) {
    constructor.prototype.ngOnInit = function (this) {
      const registry: RegistryService = this.injector.get(RegistryService);

      // get the type? This is only the instance
      registry.register(sparte, this);
    };
  };
}
