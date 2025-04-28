import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'my-portfolio';
  testImage = "assets/homeFantasyRPG.png";
  images: string[] = [
    'assets/3robots.jpg',
    'assets/homeFantasyRPG.png',
    'assets/echecJeu.png',
    'assets/mainDesktop.png',
    'assets/gameRPG.png',
    'assets/imageRobotLigne.jpg',
    'assets/echec.png',
  ];
  currentImageIndex: number = 0;
  currentImage: string = this.images[0];
  slideshowInterval: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.startSlideshow();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.slideshowInterval);
  }

  startSlideshow(): void {
    this.slideshowInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 2000);
  }
}
