import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isCollapsed!:boolean;
  @Output() collapse = new EventEmitter();
  showDropdown: boolean = false;
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
  changeCollapse(): void {
    this.collapse.emit();
  }
}
