import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
  ],
  exports: [
    MenuModule,
    MenubarModule,
    HeaderComponent
  ]
})
export class CoreModule { }
