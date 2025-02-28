import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container">
      <h1>API<br>Pokemon</h1>
      <button (click)="fetchPokemon()">Get pokemon dex</button>
      <div *ngFor="let pokemon of pokemons" class="card">
        <div class="image-container">
          <img [src]="pokemon.image" alt="{{ pokemon.name }}" />
          <img *ngIf="pokemon.imageBack" [src]="pokemon.imageBack" alt="{{ pokemon.name }} back" />
        </div>
        <p><strong>Name:</strong> {{ pokemon.name | uppercase }}</p>
        <p><strong>Type 1:</strong> {{ pokemon.types[0] }}</p>
        <p *ngIf="pokemon.types[1]"><strong>Type 2:</strong> {{ pokemon.types[1] }}</p>
        <p><strong>Base stats:</strong></p>
        <ul>
          <li *ngFor="let stat of pokemon.stats">{{ stat.name }}= {{ stat.value }}</li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'front02';
  pokemons: any[] = [];

  async fetchPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const data = await response.json();
      this.pokemons = await Promise.all(
        data.results.map(async (p: any) => {
          const res = await fetch(p.url);
          const pokeData = await res.json();
          return {
            name: pokeData.name,
            image: pokeData.sprites.front_default,
            imageBack: pokeData.sprites.back_default,
            types: pokeData.types.map((t: any) => t.type.name),
            stats: pokeData.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat }))
          };
        })
      );
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }
}
