import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent,
        ContactComponent,
        HomeComponent,
        CurriculumComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class AppModule { }
