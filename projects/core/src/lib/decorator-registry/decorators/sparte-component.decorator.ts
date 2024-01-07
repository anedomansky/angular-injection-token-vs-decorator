import { RegistryService } from '../services/registry.service';

export function SparteComponent(sparte: string) {
  console.log(sparte);
  return function (constructor: Function) {
    console.log('inner');
    constructor.prototype.ngOnInit = function (this) {
      console.log('ngOnInit', this);
      // injector is not working
      const registry: RegistryService = this.injector.get(RegistryService);

      registry.register(sparte, this);
    };
    constructor.prototype.ngOnInit();
  };
}
