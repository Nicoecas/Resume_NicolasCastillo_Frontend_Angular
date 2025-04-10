import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
})
export class MenuLateralComponent {
  isCollapsed = true;

  constructor(private menuService: MenuService) {}

  menuItems = [
    { label: 'Inicio', icon: 'bi bi-house', href: '' },
    {
      label: 'Tecnologías',
      icon: 'bi bi-pc-display-horizontal',
      href: '/technologies',
    },
    { label: 'Experiencia', icon: 'bi bi-briefcase-fill', href: '/experience' },
    { label: 'Estudios', icon: 'bi bi-book', href: '/studies' },
    { label: 'Contacto', icon: 'bi bi-envelope', href: '/contact' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.menuService.toggleCollapse();
  }
}
