import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: { showSidebar: true },
      },
      { path: 'forms', component: FormsComponent, data: { showSidebar: true } },
      { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
