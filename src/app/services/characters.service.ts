import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Character } from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private httpClient : HttpClient
  ) { }


  public findCharacter(): Observable<{ [data: string]: any ; results: Character[] }>{
    return this.httpClient.get
    <
      {
        results: Character[];
      }
    >('https://gateway.marvel.com:443/v1/public/characters?apikey=21411d9d3a7e79e9b30520a0653dc117')
    
  }

}
