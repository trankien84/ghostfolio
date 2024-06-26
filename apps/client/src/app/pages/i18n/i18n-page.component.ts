import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  host: { class: 'page' },
  selector: 'gf-i18n-page',
  standalone: true,
  styleUrls: ['./i18n-page.scss'],
  templateUrl: './i18n-page.html'
})
export class GfI18nPageComponent implements OnInit {
  private unsubscribeSubject = new Subject<void>();

  public constructor() {}

  public ngOnInit() {}

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
