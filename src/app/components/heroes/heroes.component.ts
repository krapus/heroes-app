import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroService.getHeroes();
  }

  viewHero(index: number): void {
    this.router.navigate(['/heroe', index]);
  }
}
