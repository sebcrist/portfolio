import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testSmart',
  imports: [RouterLink],
  templateUrl: './testSmart.component.html',
  styleUrl: './testSmart.component.css'
})
export class TestSmartComponent {
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
