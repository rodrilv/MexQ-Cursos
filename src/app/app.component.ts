import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [],
})
export class AppComponent {
  @ViewChild('vite') vite;
  @Input('id') id;
  count: number = 1;

  cambiarTexto() {
    switch (this.count) {
      case 1:
        this.vite.nativeElement.innerHTML = "Yes, of course it's angular!";
        this.count += 1;
        break;
      case 2:
        this.vite.nativeElement.innerHTML = "And I'm full of surprises!";
        this.count += 1;
        break;
      case 3:
        this.vite.nativeElement.innerHTML = 'You know javascript? You know Angular!';
        this.count += 1;
        break;
      case 4:
        this.vite.nativeElement.innerHTML = "You still clickin'?";
        this.count += 1;
        break;
      case 5:
        this.vite.nativeElement.innerHTML = "Dude, this is all I got, please stop";
        this.count += 1;
        break;
    }
    console.log(this.count);
    if (this.count > 5) {
      this.count = 0;
      this.count += 1;
    }
  }
}
