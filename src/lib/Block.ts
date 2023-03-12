import { SHA256 } from "crypto-js";

export type BlockTypes = {
    index: number,
    timestamp: number,
    previousHash: string,
    data: string,
    hash?: string
}

/*

    Initiated at: 1678560283956

*/

export default class Block {
    public block: Required<BlockTypes>;
    constructor(props: BlockTypes) {
        this.block = {
            ...props,
            hash: this.getHash(props.index, props.data, props.timestamp, props.previousHash)
        }
    }

    getHash(index: number, data: string, timestamp: number, previousHash: string): string {
        return SHA256(index + data + timestamp + previousHash).toString();
    }

    isValid(previousHash: string, previousIndex: number): string {
        console.log(this.block);
        if (this.block.index === 0) {
          if(!this.block.data) return "Empty content. The transaction should contain records";
          if (this.block.timestamp <= 1678560283956) return "Broken Block, invalid chain";
          return "This is the Genesis"; 
        }
        if(this.block.index -1 !== previousIndex)
          return "Broken Block, invalid chain";
        if (this.block.previousHash !== previousHash || !this.block.hash) 
          return "Broken Block, invalid chain";
        if (!this.block.data) 
          return "Empty content. The transaction should contain records";
        if (this.block.timestamp <= 1678560283956) return "Broken Block, invalid chain";
        else {
          return "Validated";
        }
    }
}