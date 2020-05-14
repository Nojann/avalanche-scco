import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { VideoPrimingComponent } from './components/video-priming/video-priming.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { EndComponent } from './components/game/end/end.component';
import { ConsentFormComponent } from './components/consent-form/consent-form.component';


const routes: Routes = [
  { path: 'auth/signup', canActivate: [AuthGuardService], component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'editor', component: EditorComponent },
  // { path: 'priming', component: VideoPrimingComponent },
  // { path: 'game', component: GameComponent},*/
  { path: 'end', component: EndComponent},
  // { path: 'notice', component: ConsentFormComponent},
  { path: '', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
