import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceneryComponent } from './scenery/scenery.component';
import { CharactersComponent } from './characters/characters.component';
import { SceneryEditorComponent } from './scenery-editor/scenery-editor.component';
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
    FormsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
