/**
 * @author Thor
 * The service to retrieve to do items.
 */
import {Injectable} from '@angular/core';
import {Item} from './item';

@Injectable()
export class ToDoService {
    /**
     * Get the to do items.
     * @return Array of items.
     */
    getToDos(): [Item] {
        return [
            new Item("Make the bed"),
            new Item("Wash the car"),
            new Item("Jog 3 miles"),
            new Item("Mow the lawn")
        ]
    }
}