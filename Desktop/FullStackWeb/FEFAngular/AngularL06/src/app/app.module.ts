import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsModule } from './modules/skills/skills.module';

import { AppComponent } from './app.component';
//import { SkillsComponent } from './modules/skills/components/skills.component';

//import { SkillsService } from './modules/skills/services/skills.service';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';

@NgModule({
    declarations: [AppComponent, 
        /* SkillsComponent, */ 
        GreetingComponent, 
        MessageFormComponent],
    imports: [BrowserModule, FormsModule, SkillsModule],
    providers: [
       // SkillsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}