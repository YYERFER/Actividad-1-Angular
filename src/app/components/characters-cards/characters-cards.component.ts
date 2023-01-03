import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/characters.interface';

@Component({
  selector: 'app-characters-cards',
  templateUrl: './characters-cards.component.html',
  styleUrls: ['./characters-cards.component.css']
})
export class CharactersCardsComponent implements OnInit {

  @Input()
  public Character!: Character;

  @Output() sendCharacters: EventEmitter<Character> = new EventEmitter<Character>()
  
  constructor() { }

  ngOnInit(): void {
  }

  public selectCharacters(character: Character): void{
    this.sendCharacters.emit(character)
  }

}
