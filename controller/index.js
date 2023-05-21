const Produk = require('../models/produk');

module.exports = {
  index: async (req, res, next) => {
    try {
      const dataProduk = await Produk.findAll();

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: dataProduk
      });
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { nama, kuantitas } = req.params;

      const produk = await Produk.findOne({
        where: { nama: nama, kuantitas: kuantitas }
      });

      if (!produk) {
        return res.status(404).json({
          status: false,
          message: `tidak ada produk dengan  ${nama}`,
          data: null
        });
      }

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: produk
      });
    } catch (error) {
      next(error);
    }
  }
};
