import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  public characterList !: Character[];
  public error:string='';
  public selectPerson!: Character;

  myImgFondo:string='./assets/img/fondo_Marvel_4.jpg'

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }


  private getCharacter(): void {
   
    this.charactersService.findCharacter()
  .subscribe({
      
      next:(resp)=>{
        
        this.characterList = resp['data'].results;

      }, error: (err)=>{
        
        this.error = 'Lo siento ha fallado la conexión', err;
      
      }
    })
  }

  public receiveCharacters(character: Character):void{
    this.selectPerson=character
  }

}
