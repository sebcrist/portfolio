import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-bom',
  imports: [RouterLink],
  templateUrl: './gestion-bom.component.html',
  styleUrl: './gestion-bom.component.css'
})
export class GestionBOMComponent {
projectLink = 'https://github.com/sebcrist/Systeme-Gestion-de-BOM';

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
