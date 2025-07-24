import assert from 'assert'; 
import { add } from '../calculations.js'; 



describe('Calculator Test',  () => {
    it('should add 2 positive numbers correctly', () => {
        const result = add(2, 3);
        assert.strictEqual(result, 5); 
    })

    it('should add 2 negative numbers correctly', () => {
        const result = add(-2, -3);
        assert.strictEqual(result, -5); 
    })

    it('should add 1 positive and 1 negative correctly', () => {
        const result = add(2, -3);
        assert.strictEqual(result, -1); 
    })
})