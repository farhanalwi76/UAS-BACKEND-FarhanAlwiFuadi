// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // Menampilkan semua data patient
  async index(req, res) {
    try {
      const patients = await Patient.all();
      const data = {
        message: "Menampilkan semua patients",
        data: patients,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data patients.",
        error: err.message,
      });
    }
  }

  // Menambahkan data patient baru
  async store(req, res) {
    try {
      const { name, phone, address, status } = req.body;

      // Validasi input
      if (!name || !phone || !address || !status) {
        return res.status(400).json({
          message: "Semua field (name, phone, address, status) harus diisi.",
        });
      }

      // Create patient
      const patient = await Patient.create({
        name,
        phone,
        address,
        status,
      });

      const data = {
        message: "Menambahkan data patient",
        data: patient,
      };
      res.status(201).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data patient.",
        error: err.message,
      });
    }
  }

  // Mengupdate data patient
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, phone, address, status } = req.body;

      // Validasi input
      if (!name || !phone || !address || !status) {
        return res.status(400).json({
          message: "Semua field (name, phone, address, status) harus diisi.",
        });
      }

      // Update patient
      const updatedPatient = await Patient.update(id, { name, phone, address, status });

      if (!updatedPatient) {
        return res.status(404).json({
          message: `Patient dengan id ${id} tidak ditemukan.`,
        });
      }

      const data = {
        message: `Mengedit data patient dengan id ${id}`,
        data: updatedPatient,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengupdate data patient.",
        error: err.message,
      });
    }
  }

  // Menghapus data patient
  async destroy(req, res) {
    try {
      const { id } = req.params;

      // Delete patient
      const deleted = await Patient.delete(id);

      if (!deleted) {
        return res.status(404).json({
          message: `Patient dengan id ${id} tidak ditemukan.`,
        });
      }

      const data = {
        message: `Menghapus patient dengan id ${id}`,
        data: null,
      };
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat menghapus data patient.",
        error: err.message,
      });
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
