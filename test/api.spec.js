const request = require('supertest');
const app = require('../app');
const { Produk } = require('../controller/index');

const user = {
  produk: "gelas",
  kuantitas: "5"
};

describe('Produk API', () => {
  
  describe('GET /produk', () => {
    test('should return a specific produk', async () => {
      const response = await request(app).get('/produk');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe(true);
      expect(response.body.message).toBe('berhasil');
      expect(response.body.data).toEqual(expect.any(Array));
      expect(response.body.data[0]).toHaveProperty('nama');
      expect(response.body.data[0]).toHaveProperty('kuantitas');
    });
  });

  
  describe('GET /produk/:nama/:kuantitas', () => {
    test('should return a specific produk', async () => {
      const getProduk = await Produk.get({
        nama: 'Produk 1',
        kuantitas: 5
      });

      const response = await request(app).get(`/produk/${user.produk}/${getProduk.kuantitas}`);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe(true);
      expect(response.body.message).toBe('berhasil');
      expect(response.body.data).toEqual(expect.any(Array));
      expect(response.body.data[0]).toHaveProperty('nama');
      expect(response.body.data[0]).toHaveProperty('kuantitas');
    });

    test('should return a specific produk', async () => {
      const response = await request(app).get(`/produk/${user.produk}/${user.kuantitas}`);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe(true);
      expect(response.body.message).toBe('berhasil');
      expect(response.body.data).toEqual(expect.any(Array));
      expect(response.body.data[0]).toHaveProperty('nama');
      expect(response.body.data[0]).toHaveProperty('kuantitas');
    });
  });
});
