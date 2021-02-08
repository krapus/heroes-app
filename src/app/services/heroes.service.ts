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

  getHero(id: number) {
    return HEROES.find((hero) => {
      return hero.idx == id;
    });    
  }

  searchHeroes(pattern: string): Heroe[] {
    let heroes: Heroe[] = [];
    pattern = pattern.toLowerCase();

    for (const heroe of HEROES) {
      let name = heroe.nombre.toLowerCase();
      if (name.indexOf(pattern) >= 0) {
        heroes.push(heroe);
      }
    }

    return heroes;
  }
}
