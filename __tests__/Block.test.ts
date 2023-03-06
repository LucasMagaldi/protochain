import Block from "../src/lib/Block";

describe('Block Tests', () => { 
    const block = new Block({index: 0, hash: ""})
    it("should check how Block is Initializing", () => {
        const initialize = block.initializeBlock();
        expect(initialize).toBe("rendering Block");
    });
 })