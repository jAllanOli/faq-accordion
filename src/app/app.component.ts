import { Component } from '@angular/core';

interface AccordionItem {
  caption: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      caption: 'What is Frontend Mentor, and how will it help me?',
      description:
        'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It is suitable for all levels and ideal for portfolio building.',
    },
    {
      caption: 'Is Frontend Mentor free?',
      description:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      caption: 'Can I use Frontend Mentor projects in my portfolio?',
      description:
        'Yes, you can use projects completed on Frontend Mentor in your portfolio. It is an excellent way to showcase your skills to potential employers!',
    },
    {
      caption:
        'How can I get help if I am stuck on a Frontend Mentor challenge?',
      description:
        'The best place to get help is inside Frontend Mentor`s Discord community. There is a help channel where you can ask questions and seek support from other community members.',
    },
  ];
}
