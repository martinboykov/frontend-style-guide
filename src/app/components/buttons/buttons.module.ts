import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { CodeForAmericaComponent } from './code-for-america/code-for-america.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ButtonsComponent, CodeForAmericaComponent, BootstrapComponent],
  imports: [SharedModule, ButtonsRoutingModule],
})
export class ButtonsModule {}
