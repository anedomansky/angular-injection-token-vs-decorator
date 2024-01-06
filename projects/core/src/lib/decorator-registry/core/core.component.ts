import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  createComponent,
  inject,
} from '@angular/core';
import { RegistryService } from '../services/registry.service';

@Component({
  selector: 'lib-core',
  standalone: true,
  imports: [],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent implements AfterViewInit {
  private readonly registry = inject(RegistryService);

  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  @Input({ required: true })
  sparte = '';

  ngAfterViewInit(): void {
    // decorator + registry approach can not work because we add concrete CoreComponent instances to the registry
    // but the createComponent function expects the type and not the concrete instance
    const componentType = this.registry.getFromRegistry(this.sparte);

    if (componentType) {
      const componentRef = this.viewContainerRef.createComponent(componentType);
    }
  }
}
