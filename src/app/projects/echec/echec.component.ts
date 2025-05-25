import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-echec',
  imports: [RouterLink],
  templateUrl: './echec.component.html',
  styleUrl: './echec.component.css'
})
export class EchecComponent {

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
