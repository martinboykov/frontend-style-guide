import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { WtfFormsComponent } from './forms/wtf-forms/wtf-forms.component';
import { CodeForAmericaComponent } from './buttons/code-for-america/code-for-america.component';
import { BootstrapComponent } from './buttons/bootstrap/bootstrap.component';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    ComponentComponent,
    FormsComponent,
    WtfFormsComponent,
    ButtonsComponent,
    CodeForAmericaComponent,
    BootstrapComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, FieldsetModule],
})
export class ComponentsModule {}
