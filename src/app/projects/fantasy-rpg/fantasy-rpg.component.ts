import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fantasy-rpg',
  imports: [RouterLink],
  templateUrl: './fantasy-rpg.component.html',
  styleUrl: './fantasy-rpg.component.css'
})
export class FantasyRPGComponent {
projectLink = 'https://github.com/sebcrist/FantasyRPG';
}
