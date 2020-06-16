import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { CodeForAmericaComponent } from './code-for-america/code-for-america.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [ButtonsComponent, CodeForAmericaComponent, BootstrapComponent],
  imports: [CommonModule, ButtonsRoutingModule, FieldsetModule],
})
export class ButtonsModule {}
