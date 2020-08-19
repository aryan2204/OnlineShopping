export class Wishlist {
    id: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: object= {}) {
        Object.assign(this, values);
    }
}
