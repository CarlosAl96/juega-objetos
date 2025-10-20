import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardModule, SkeletonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: { id: number; name: string; imageUrl: string }[] = [];
  private loadedIds = new Set<number>();

  constructor() {
    const images = [
      { name: 'Cama', file: 'cama.jpeg' },
      { name: 'Mesa', file: 'mesa.jpeg' },
      { name: 'Silla', file: 'silla.jpeg' },
      { name: 'Sofá', file: 'sofa.jpeg' },
    ];

    const total = 30;
    this.items = Array.from({ length: total }, (_, i) => {
      const img = images[i % images.length];
      return {
        id: i + 1,
        name: img.name,
        imageUrl: `assets/images/${img.file}`,
      };
    });
  }

  trackById(index: number, item: { id: number }): number {
    return item.id;
  }

  isLoaded(id: number): boolean {
    return this.loadedIds.has(id);
  }

  onImgLoad(id: number) {
    this.loadedIds.add(id);
  }

  onImgError(id: number, ev: Event) {
    // Fallback to the first image if one fails, then mark as loaded
    const imgEl = ev.target as HTMLImageElement;
    if (imgEl && imgEl.src.indexOf('assets/images/cama.jpeg') === -1) {
      imgEl.src = 'assets/images/cama.jpeg';
    }
    this.loadedIds.add(id);
  }
}
