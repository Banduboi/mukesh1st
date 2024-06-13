import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LogComponent } from './log/log.component';
import { HomePageComponent} from './home.page/home.page.component';

export const routes: Routes = [
  { path: '', redirectTo: './log', pathMatch: 'full' },
  { path: 'login', component: LogComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: '**', redirectTo: 'log' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
