import multiply from './multiply'; 

describe('multiply function', () => {
  // buat param number 
  it('Harus mengembalikan x * y parameter', () => {
    for (let i = 5; i >= 1; i--) {
      expect(multiply(i, i)).toBe(i * i);
    }
  });

  /* buat param not number 
    it('Harus mengembalikan 0, jika a atau b diberi nilai yang bukan angka', () => {
    expect(multiply('1', '2')).toBe(0); 
  });*/
});
