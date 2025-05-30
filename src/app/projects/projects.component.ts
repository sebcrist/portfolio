import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'ASP.Net app - Wirewerks (2025)',
      description: 'This project is a web application developed using ASP.Net Core, and Entity Framework. More details will be available when the project is done ;)',
      image: 'assets/webAppBase.png',
      // route: '/projects/DB-WebApp',
      // link: 'https://github.com/sebcrist/Coming Soon :)'
    },
    {
      title: 'Integrative Project 2 - Polytechnique Montréal (2025)',
      description: 'This project is a tactical RPG web platform developed using TypeScript, Angular, and NestJS, enabling players to engage in turn-based combat on customizable grid maps. The platform supports multiplayer sessions, includes an Algorithm-driven virtual player system, features real-time chat, and game state management for an immersive gameplay experience.',
      image: 'assets/homeFantasyRPG.png',
      route: '/projects/fantasyRPG',
      link: 'https://github.com/sebcrist/FantasyRPG'
    },
    {
      title: 'Bom Management Project - Société Technique Formule SAE (2023-2024)',
      description: 'Project for the Formule SAE team at Polytechnique Montréal. The goal of this project is to create a BOM management system for the team. It includes a desktop and mobile application.',
      image: 'assets/mainDesktop.png',
      route: '/projects/gestionBOM',
      link: 'https://github.com/sebcrist/Systeme-Gestion-de-BOM'
    },
    {
      title: 'Integrative Project 1 - Polytechnique Montréal (2024)',
      description: 'This project involved collaborative robotics, where we programmed school-built robots to work together, map out a predefined route, and communicate using infrared (IR) signals.',
      image: 'assets/imageRobotLigne.jpg',
      route: '/projects/robot',
      link: 'https://github.com/sebcrist/RobotsCollaboratifs_H2024'
    },
    {
      title: 'Chess Game - Polytechnique Montréal (2024)',
      description: 'Chess game developed in C++ using the Qt framework, following the MVC (Model-View-Controller) design pattern. It was completed as part of the INF1015 course.',
      image: 'assets/echec.png',
      route: '/projects/echec',
      link: 'https://github.com/sebcrist/Jeu_Echecs_MVC'
    },
  ];


}
