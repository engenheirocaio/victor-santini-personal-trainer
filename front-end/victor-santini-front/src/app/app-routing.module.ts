import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  children: [
    {path: 'home', data:{}, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }