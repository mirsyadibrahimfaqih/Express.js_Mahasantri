const db = require("../models");
const Presensi = db.presensis;

exports.index = (req, res) => {
  Presensi.findAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditemukan",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Presensi.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      if (data[0] === 1) {
        res.status(200).json({
          success: true,
          message: "Data presensi berhasil diperbarui",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Data presensi tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal diperbarui",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Presensi.destroy({
    where: { id: id },
  })
    .then((data) => {
      if (data === 1) {
        res.status(200).json({
          success: true,
          message: "Data presensi berhasil dihapus",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Data presensi tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal dihapus",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Presensi.findByPk(id)
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditemukan",
      });
    });
}

exports.create = (req, res) => {
  if (!req.body.nama || !req.body.status) {
    return res.status(400).json({
      success: false,
      message: "Nama dan status harus diisi",
    });
  }

  const presensi = {
    nama: req.body.nama,
    status: req.body.status,
  };

  Presensi.create(presensi)
    .then((data) => {
      res.status(201).json({
        success: true,
        message: "Data presensi berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditambahkan",
      });
    });
};
