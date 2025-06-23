import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pdf-splitter',
  imports: [RouterLink],
  templateUrl: './pdf-splitter.component.html',
  styleUrl: './pdf-splitter.component.css'
})
export class PdfSplitterComponent {
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
