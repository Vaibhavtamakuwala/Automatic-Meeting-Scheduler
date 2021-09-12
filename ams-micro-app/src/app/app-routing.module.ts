import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ZoomIntegrationComponent } from './zoom-integration/zoom-integration.component';
import { ZoomComponent } from './zoom/zoom.component';

const routes: Routes = [
  // { path: 'zoom', component: ZoomIntegrationComponent },
  { path: '', redirectTo:'logo',pathMatch:'full' },
  { path: 'logo', component: SplashScreenComponent },
  { path: 'signup', component: UserSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
