import { NgComponentOutlet } from '@angular/common';
import { Component, Type, inject } from '@angular/core';
import { DefaultSparteComponent } from '../default-sparte/default-sparte.component';
import { SPARTE_COMPONENT_TOKEN } from '../injection-tokens/sparte-component.injection-token';

@Component({
  selector: 'lib-core',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {
  protected sparteComponent = inject(SPARTE_COMPONENT_TOKEN)
    .constructor as Type<DefaultSparteComponent>;
}
