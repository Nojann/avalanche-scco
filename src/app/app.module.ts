import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SceneryComponent } from './components/scenery/scenery.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SceneryEditorComponent } from './components/scenery-editor/scenery-editor.component';
import { CharacterService } from './services/character.service';




@NgModule({
  declarations: [
    AppComponent,
    SceneryComponent,
    CharactersComponent,
    SceneryEditorComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
