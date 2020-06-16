import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './home/home.component';
import { CodeGuideComponent } from './code-guide/code-guide.component';
import { ComponentComponent } from './components/component.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { showSidebar: false } },
  {
    path: 'code-guide',
    component: CodeGuideComponent,
    data: { showSidebar: false },
  },
  {
    path: 'components',
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
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      enableTracing: !environment.production,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
