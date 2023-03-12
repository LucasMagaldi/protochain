import Block from "../src/lib/Block";

describe('Block Tests', () => { 
    const block = new Block({index: 1, timestamp: new Date().getTime(), previousHash: "", data: "l"})
    it("should check how Block is Initializing", () => {
        block.block.timestamp = 1678560283956;
        const initialize = block.isValid();
        expect(initialize).toBe("This is the Genesis");
    });
 })