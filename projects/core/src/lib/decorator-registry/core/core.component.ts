import {
  AfterViewInit,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { RegistryService } from '../services/registry.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'lib-core',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent implements AfterViewInit {
  private readonly registry = inject(RegistryService);

  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  @Input()
  sparte = 'default';

  ngAfterViewInit(): void {
    // decorator + registry approach can not work because we add concrete CoreComponent instances to the registry
    // but the createComponent function expects the type and not the concrete instance
    const component = this.registry.getFromRegistry(this.sparte);

    if (component) {
      const componentRef = this.viewContainerRef.createComponent(
        component.constructor as Type<CoreComponent>
      );
    }
  }
}
