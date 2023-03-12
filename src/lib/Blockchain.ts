import { SHA256 } from "crypto-js";

import Block from "./Block";
import { BlockTypes } from "./Block";

export default class Blockchain {
    public blocks: Block[];
    public nextIndex: number = 0;

    constructor() {
        this.blocks = [new Block({index: this.nextIndex , timestamp: new Date().getTime(), previousHash: SHA256(this.nextIndex.toString()).toString(), data: ""})];
        this.nextIndex++;
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length -1];
    }

    addBlock(params: BlockTypes): boolean {
        const getLastBlock = this.getLastBlock();
        const block = new Block(params);

        if(block.isValid(getLastBlock.block.hash, getLastBlock.block.index) !== "Validated") return false;

        this.blocks.push(block);
        return true;
    }
}