/**
 * @author Thor
 * The ToDo component.
 */
import {Component, Input} from '@angular/core';
import {ToDoService} from './todo.service';
import {Item} from './item';
import {Color} from './color.directive';

@Component({
    selector: 'to-do',
    templateUrl: 'app/todo.component.html',
    styleUrls: ['app/todo.component.css'],
    directives: [Color],
    providers: [ToDoService]
})
export class ToDo {
    /**
     * Count of the number of un-completed items.
     */
    totalItems: number;

    /**
     * Title of the To-Do component.
     */
    @Input('title')
    title: string;

    /**
     * To do list of items.
     */
    toDoList: [Item];

    /**
     * Initialize component with list of to dos.
     */
    constructor(toDoService: ToDoService) {
        this.toDoList = toDoService.getToDos();
        this.totalItems = this.toDoList.length;
    }
    
    /**
     * When a item is checked/un-checked, we need update
     * the count of the remaining items that need to be completed.
     * 
     * @param item The item which was toggled.
     * @param event The checked event.
     */
    toggleClick(item: Item, event: Event) {
        item.done = event.target.checked;
        
        if (item.done) {
            this.totalItems--;
        } else {
            this.totalItems++;
        }
    }
}
