import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { WtfFormsComponent } from './wtf-forms/wtf-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormsComponent, WtfFormsComponent],
  imports: [SharedModule, FormsRoutingModule],
})
export class FormsModule {}
