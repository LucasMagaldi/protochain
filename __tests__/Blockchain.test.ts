import Blockchain from "../src/lib/Blockchain";

describe("Blockchain", () => {
    const blockchain = new Blockchain();
    it("Should has Genesis block", () => {
        expect(blockchain.blocks.length).toEqual(1);
       
    });
    it("Should add new Block", () => {
        const lastBlock = blockchain.getLastBlock();
        const newBlock = blockchain.addBlock({
            index: blockchain.blocks.length, 
            timestamp: new Date().getTime(), 
            previousHash: lastBlock.block.hash, 
            data: `Transaction ${blockchain.blocks.length}`
        });
        expect(newBlock).toEqual(true);
    });
    it("Should add new Block II", () => {
        const lastBlock = blockchain.getLastBlock();
        const newBlock = blockchain.addBlock({
            index: blockchain.blocks.length, 
            timestamp: new Date().getTime(), 
            previousHash: lastBlock.block.hash, 
            data: `Transaction ${blockchain.blocks.length}`
        });
        expect(newBlock).toEqual(true);
        const validatedChain = blockchain.isValid();
        expect(validatedChain).toEqual(true);
    });
    it("Shouldn't allow editing Block after create it", () => {
        const block = blockchain.blocks[1];
        console.log(block);
        block.checkChanges("update");
        console.log(block);
        const validatedChain = blockchain.isValid();

        expect(validatedChain).toEqual(false);
    });

});