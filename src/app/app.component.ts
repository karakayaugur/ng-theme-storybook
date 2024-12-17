import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GtmService } from '@shared/services/gtm.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private gtmService: GtmService, private router: Router) {
    const navigationEnd = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navigationEnd.subscribe((event) => {
      this.gtmService.pushTag({
        event: 'page_view',
        pageName: event.url,
      });
      console.log('event.urlAfterRedirects', event);
    });
  }

  ngOnInit(): void {
    this.gtmService.addGtmToDom();
  }
}
