import { Injectable } from '@angular/core';
import { Heroe } from '../models/hero.interface';
import { HEROES } from '../models/data.mock';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor() {}

  getHeroes(): Heroe[] {
    return HEROES;
  }

  getHero(id: number): Heroe {
    return HEROES[id];
  }
}
