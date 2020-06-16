import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    ComponentComponent,


  ],
  imports: [CommonModule, ComponentsRoutingModule, FieldsetModule],
})
export class ComponentsModule {}
