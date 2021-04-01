import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2Component } from './ng2container/ng2/ng2.component';
import { NgxComponent } from './ngxchartscontainer/ngx/ngx.component';


const routes: Routes = [
  { path: 'ng2charts', component: Ng2Component },
  { path: 'ngxcharts', component: NgxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
