import { Input, Output, EventEmitter } from '@angular/core';

export class DashboardHeroComponent {
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();
    click() { this.selected.emit(this.hero); }
  }