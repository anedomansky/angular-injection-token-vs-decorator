import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultSparteComponent } from '../default-sparte/default-sparte.component';

@Component({
  selector: 'lib-core',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {
  protected sparteComponent = DefaultSparteComponent;
}
