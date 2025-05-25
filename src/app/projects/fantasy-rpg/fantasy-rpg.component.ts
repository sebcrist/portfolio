import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fantasy-rpg',
  imports: [RouterLink],
  templateUrl: './fantasy-rpg.component.html',
  styleUrl: './fantasy-rpg.component.css'
})
export class FantasyRPGComponent {

  lightboxImage: string | null = null;
  lightboxVisible = false;

  openLightbox(img: string): void {
    this.lightboxImage = img;
    setTimeout(() => this.lightboxVisible = true, 0);
  }

  closeLightbox(): void {
    this.lightboxVisible = false;


    setTimeout(() => {
      this.lightboxImage = null;
    }, 300); 
  }
}
