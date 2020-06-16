import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { WtfFormsComponent } from './wtf-forms/wtf-forms.component';

@NgModule({
  declarations: [FormsComponent, WtfFormsComponent],
  imports: [CommonModule, FieldsetModule, FormsRoutingModule],
})
export class FormsModule {}
