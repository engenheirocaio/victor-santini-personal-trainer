import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {},
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [],
        data: {}
      },
    ]
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
