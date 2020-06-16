import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeGuideComponent } from './code-guide.component';
import { CodeGuideRoutingModule } from './code-guide-routing.module';

@NgModule({
  declarations: [CodeGuideComponent],
  imports: [CommonModule, CodeGuideRoutingModule],
})
export class CodeGuideModule {}
