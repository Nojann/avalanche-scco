import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SceneryComponent } from './components/scenery/scenery.component';
import { CharactersComponent } from './components/scenery/characters/characters.component';
import { SceneryEditorComponent } from './components/editor/scenery-editor/scenery-editor.component';
import { CharacterService } from './services/character.service';
import { VideoPrimingComponent } from './components/video-priming/video-priming.component';
import { EditorComponent } from './components/editor/editor.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GameComponent } from './components/game/game.component';
import { CharacterFeaturesComponent } from './components/game/character-features/character-features.component';
import { RiskPerceptionComponent } from './components/game/risk-perception/risk-perception.component';
import { DialogComponent } from './components/game/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneryComponent,
    CharactersComponent,
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
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
