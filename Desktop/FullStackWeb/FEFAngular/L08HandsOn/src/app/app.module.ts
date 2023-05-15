import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsModule } from './modules/skills/skills.module';
import { MusicModule } from './modules/music/music.module';


import { AppComponent } from './app.component';

import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';


//import { MoviesModule } from './modules/movies/movies.module';


@NgModule({
    declarations: [AppComponent, GreetingComponent,
         MessageFormComponent, DisplayMusicComponent],
    imports: [BrowserModule, FormsModule,
        SkillsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}