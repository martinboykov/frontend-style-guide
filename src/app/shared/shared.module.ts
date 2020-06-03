import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SafeHtmlPipe],

  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MenuModule,
    MenubarModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule
  ],
  exports: [HeaderComponent, SafeHtmlPipe],
})
export class SharedModule {}
