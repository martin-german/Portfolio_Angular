import { Component } from '@angular/core';
import { type Link } from '../../types/shared-types';

@Component({
  selector: 'shared-buttons',
  templateUrl: './buttons.component.html',
  styles: [],
})
export class ButtonsComponent {
  public links: Link[] = [
    {
      alt: 'logo CV',
      href: 'https://drive.google.com/file/d/1EurREyxrktwtOGOtfhy7N597YfdVbM1z/view?usp=sharing',
      img: './assets/logotypes/link.svg',
      styles: 'bg-custom-200 hover:bg-custom-700',
      text: 'CV',
    },
    {
      alt: 'logo LinkedIn',
      href: 'https://www.linkedin.com/in/martingerman99',
      img: './assets/logotypes/linkedin.svg',
      styles: 'bg-custom-300 hover:bg-custom-600',
      text: 'LinkedIn',
    },
    {
      alt: 'logo GitHub',
      href: 'https://github.com/martin-german',
      img: './assets/logotypes/github.svg',
      styles: 'bg-gray-700 [&>img]:invert hover:bg-gray-800',
      text: 'GitHub',
    },
  ];
}
