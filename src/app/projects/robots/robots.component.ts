import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-robots',
  imports: [RouterLink],
  templateUrl: './robots.component.html',
  styleUrl: './robots.component.css'
})
export class RobotsComponent {

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
