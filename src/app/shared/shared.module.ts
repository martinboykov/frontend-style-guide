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

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    FieldsetModule,
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    FieldsetModule,
    SafeHtmlPipe,
  ],
})
export class SharedModule {}
