import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../core/services/layout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
