import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { Object } from '../../../core/models/object';
import { ObjectsService } from '@app/core/services/objects.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardModule, SkeletonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public items: Object[] = [];
  private loadedIds = new Set<number>();

  constructor(private readonly objectsService: ObjectsService) {}

  trackById(index: number, item: { id: number }): number {
    return item.id;
  }

  isLoaded(id: number): boolean {
    return this.loadedIds.has(id);
  }

  private getObjects(): void {
    this.objectsService.getObjects().subscribe({
      next: (response) => {
        this.items = response.response.data;
      },
      error: (error) => {
        console.error('Error fetching objects:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getObjects();
  }

  public onImgLoad(id: number): void {
    this.loadedIds.add(id);
  }

  public onImgError(id: number, ev: Event): void {
    const imgEl = ev.target as HTMLImageElement;
    if (imgEl && imgEl.src.indexOf('assets/images/cama.jpeg') === -1) {
      imgEl.src = 'assets/images/logo.jpeg';
    }
    this.loadedIds.add(id);
  }
}
