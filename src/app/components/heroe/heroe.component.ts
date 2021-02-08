import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/hero.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = heroeService.getHero(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {}
}
