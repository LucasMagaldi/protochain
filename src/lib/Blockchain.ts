import Block from "./Block";

export default class Blockchain {
    public blocks: Block[];
    constructor() {
        this.blocks = [new Block({index: 0, hash: "genesis"})];
    }
}