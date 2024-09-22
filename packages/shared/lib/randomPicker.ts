import { shuffleArray } from './utils.js'

export interface IRandomPicker<TItem> {
    pick(): NonNullable<TItem>
}
export class RandomPicker<TItem> implements IRandomPicker<TItem> {
    private readonly originalItems: TItem[] = []
    private items: TItem[] = []

    constructor(items: TItem[]) {
        this.originalItems = [...items]
        this.items = shuffleArray(this.items)
    }

    pick(): NonNullable<TItem> {
        if (this.items.length === 0) {
            this.items = this.shuffle(this.originalItems)
        }
        return this.items.pop()!
    }

    private shuffle(items: TItem[]): TItem[] {
        return shuffleArray(items)
    }
}
