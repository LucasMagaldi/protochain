import Block from "../src/lib/Block";
import { SHA256 } from "crypto-js";


describe('Block Tests', () => { 
    const block = new Block({index: 0, timestamp: new Date().getTime(), previousHash: SHA256("1678560283956").toString(), data: "Initiate"})
    it("should check how Block is Initializing", () => {
        //block.block.timestamp = 1678560283956;
        const initialize = block.isValid(block.block.previousHash, block.block.index);
        expect(initialize).toBe("This is the Genesis");
    });
 })