/**
 * @Thor Xiong
 * Item class that holds information for to do items.
 */
export class Item {
    /**
     * The to do item.
     */
    item: string;

    /**
     * Indicator to tell if item is complete.
     */
    done: boolean;

    /**
     * Initialize the Item.
     * @param item The string that describes what needs to be done.
     */
    constructor(item: string) {
        this.item = item;
        this.done = false;
    }
}