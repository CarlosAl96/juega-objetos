import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastService } from './core/services/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuModeOptions = [
    { label: 'Static', value: 'static' },
    { label: 'Overlay', value: 'overlay' },
  ];

  constructor(
    private readonly toastService: ToastService,
    private readonly messageService: MessageService
  ) {
    this.toastService.getMessage().subscribe((message) => {
      if (message.severity != '') {
        this.messageService.add(message);
      }
    });
  }
}
