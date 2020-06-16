import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
    children: [
      {
        path: 'buttons',
        loadChildren: () =>
          import('./buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.module').then((m) => m.FormsModule),
      },
      { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
