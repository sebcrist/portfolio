import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Bom Management Project - Société Technique Formule SAE (2023-2024)',
      description: 'Project for the Formule SAE team at Polytechnique Montréal. The goal of this project is to create a BOM management system for the team. It includes a desktop and mobile application.',
      image: 'assets/mainDesktop.png',
      link: 'https://github.com/sebcrist/Systeme-Gestion-de-BOM'
    },
    {
      title: 'Integrative Project 1 - Polytechnique Montréal (2024)',
      description: 'This project involved collaborative robotics, where we programmed school-built robots to work together, map out a predefined route, and communicate using infrared (IR) signals.',
      image: 'assets/imageRobotLigne.jpg',
      link: 'https://github.com/sebcrist/RobotsCollaboratifs_H2024'
    },
    {
      title: 'Chess Game - Polytechnique Montréal (2024)',
      description: 'Chess game developed in C++ using the Qt framework, following the MVC (Model-View-Controller) design pattern. It was completed as part of the INF1015 course.',
      image: 'assets/echec.png',
      link: 'https://github.com/sebcrist/Jeu_Echecs_MVC'
    },
  ];
}
