import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../components/header/header.component';
import { LandingFooterComponent } from '../components/footer/footer.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [LandingHeaderComponent, LandingFooterComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LandingLayoutComponent {}
