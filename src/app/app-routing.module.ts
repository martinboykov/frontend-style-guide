import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { showSidebar: false } },
  {
    path: 'code-guide',
    loadChildren: () => import('./code-guide/code-guide.module').then(m => m.CodeGuideModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
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
