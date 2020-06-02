import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SafeHtmlPipe } from './safe-html.pipe';
@NgModule({
  declarations: [HeaderComponent, SafeHtmlPipe],

  imports: [CommonModule, RouterModule.forChild([]), MenuModule, MenubarModule],
  exports: [HeaderComponent, SafeHtmlPipe],
})
export class SharedModule {}
