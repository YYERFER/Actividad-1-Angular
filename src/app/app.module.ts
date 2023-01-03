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
import { MenuColorDirective } from './directives/menu-color.directive';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InputValidarDirective } from './directives/input-validar.directive';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersCardsComponent } from './components/characters-cards/characters-cards.component';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent,
        ContactComponent,
        HomeComponent,
        CurriculumComponent,
        MenuColorDirective,
        FormularioComponent,
        InputValidarDirective,
        CharactersListComponent,
        CharactersCardsComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
