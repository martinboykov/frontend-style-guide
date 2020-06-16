import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeGuideComponent } from './code-guide.component';


const routes: Routes = [
  {
    path: '',
    component: CodeGuideComponent,
    data: { showSidebar: false },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeGuideRoutingModule {}
