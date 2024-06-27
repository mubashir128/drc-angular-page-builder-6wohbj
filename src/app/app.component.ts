import { Component } from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() { }

  ngOnInit() {
    const editor = grapesjs.init({
      container: '#gjs',
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          // options
        }
      }
    });
  }
}
