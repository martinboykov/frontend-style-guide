import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [HeaderComponent, SafeHtmlPipe],

  imports: [
    CommonModule,
    RouterModule.forChild([]),

    ButtonModule,
    InputSwitchModule,
    FormsModule,
    MenuModule,
    MenubarModule
  ],
  exports: [HeaderComponent, SafeHtmlPipe],
})
export class SharedModule {}
