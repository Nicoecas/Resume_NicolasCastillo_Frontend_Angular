import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from './core/menu-lateral/menu-lateral.component';
import { MenuService } from './services/menu.service';
import { ContactComponent } from './modules/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isCollapsed = false;

  constructor(private menuService: MenuService) {
    this.menuService.isCollapsed$.subscribe((collapsed) => {
      this.isCollapsed = collapsed;
    });
  }
}
