import { Component } from '@angular/core';
import {ToDo} from './todo.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ToDo]
})
export class AppComponent { 

}
