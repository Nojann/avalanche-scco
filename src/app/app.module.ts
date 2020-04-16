import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SceneryComponent } from './components/scenery/scenery.component';
import { SceneryEditorComponent } from './components/editor/scenery-editor/scenery-editor.component';
import { CharacterService } from './services/character.service';
import { VideoPrimingComponent } from './components/video-priming/video-priming.component';
import { EditorComponent } from './components/editor/editor.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ChoiceTaskService } from './services/choice-task.service';

import { GameComponent } from './components/game/game.component';
import { CharacterFeaturesComponent } from './components/game/character-features/character-features.component';
import { RiskPerceptionComponent } from './components/game/risk-perception/risk-perception.component';
import { DialogComponent } from './components/game/dialog/dialog.component';
import { CharacterEditorComponent } from './components/editor/character-editor/character-editor.component';
import { DisplayDataComponent } from './components/editor/display-data/display-data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomeComponent } from './components/home/home.component';
import { ChoiceTaskComponent } from './components/game/choice-task/choice-task.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SurveyComponent } from './components/survey/survey.component';
import { DialogStartComponent } from './components/video-priming/dialog-start/dialog-start.component';
import { DialogEndComponent } from './components/video-priming/dialog-end/dialog-end.component';
import { EndComponent } from './components/game/end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    SceneryComponent,
    SceneryEditorComponent,
    VideoPrimingComponent,
    EditorComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    GameComponent,
    CharacterFeaturesComponent,
    RiskPerceptionComponent,
    DialogComponent,
    CharacterEditorComponent,
    DisplayDataComponent,
    HomeComponent,
    ChoiceTaskComponent,
    UserFormComponent,
    SurveyComponent,
    DialogStartComponent,
    DialogEndComponent,
    EndComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    YouTubePlayerModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
  ],
  providers: [AuthService, AuthGuardService, CharacterService, ChoiceTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
