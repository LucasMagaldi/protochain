export type BlockTypes = {
    index: number,
    hash: string,
}

export default class Block {
    public block: Required<BlockTypes>;
    constructor(props: BlockTypes) {
        this.block = {
            ...props,
        }
    }

    initializeBlock(): string {
        if(this.block.index === 0) {
          return "Create Block";
        } else {
          return "rendering Block";
        }        
    }
}