import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
})
export class AccordionItemComponent {
  @Input() caption!: string;
  @Input() description!: string;

  public expanded = signal(false);

  public handleClick() {
    this.expanded.update((old) => !old);
  }
}
