import Blockchain from "../src/lib/Blockchain";

describe("Blockchain", () => {
    it("Should has Genesis block", () => {
        const blockchain = new Blockchain();
        expect(blockchain.blocks.length).toEqual(1);
    });
});