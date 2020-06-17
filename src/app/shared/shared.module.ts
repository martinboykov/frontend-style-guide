import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FieldsetModule } from 'primeng/fieldset';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    MenuModule,
    MenubarModule,
    FieldsetModule,
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    MenuModule,
    MenubarModule,
    FieldsetModule,
    HeaderComponent,
    SafeHtmlPipe,
  ],
})
export class SharedModule {}
