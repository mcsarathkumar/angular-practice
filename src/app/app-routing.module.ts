import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PipeExampleComponent} from './pipe-example/pipe-example.component';
import {RxjsExampleComponent} from './rxjs-example/rxjs-example.component';

const routes: Routes = [
  {path: 'pipe', component: PipeExampleComponent},
  {path: 'rxjs', component: RxjsExampleComponent},
  {path: '**', redirectTo: 'pipe'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
