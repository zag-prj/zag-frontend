const axios = require('axios');
var express = require('express');
var router = express.router();
require('dotnet').config();

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';

router.post('/client',
  async (req, res) => {
    const { companyName, address, billing, password } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/client`,
        {
          companyName,
          address,
          billing,
          password
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/client/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/client/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/contact',
  async (req, res) => {
    const { clientId, name, surname, phoneNumber, email } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        {
          clientId,
          name,
          surname,
          phoneNumber,
          email
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/contact/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/contact/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/contract',
  async (req, res) => {
    const { clientId, until, priceMonthly } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contract`,
        {
          clientId,
          until,
          priceMonthly
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/contract/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/contract/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/hardware',
  async (req, res) => {
    const { contractId, refName, value } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/hardware`,
        {
          contractId,
          refName,
          value
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/hardware/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/hardware/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/hardware/spec',
  async (req, res) => {
    const { refName, value } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/hardware/spec`,
        {
          refName,
          value
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/hardware/spec/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/hardware/spec/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/hardware/info',
  async (req, res) => {
    const { hardwareId, specId, count } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/hardware/info`,
        {
          hardwareId,
          specId,
          count
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/hardware/info/:hardwareId/:specId',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/hardware/info/${req.params.hardwareId}/${req.params.specId}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/job',
  async (req, res) => {
    const { clientId, technicianId } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/job`,
        {
          clientId,
          technicianId
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/job/:clientId/:technicianId',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/job/${req.params.clientId}/${req.params.technicianId}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.post('/technician',
  async (req, res) => {
    const { role, name, surname, salary } = req.body;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/technician`,
        {
          role,
          name,
          surname,
          salary
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);

router.get('/technician/:id',
  async (req, res) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/technician/${req.params.id}`
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      }
      else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
);
module.exports = router;