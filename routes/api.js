/**
 * This code block sets up the required dependencies and constants for the Express.js router.
 *
 * @requires axios
 * @requires express
 * @requires dotnet
 *
 * @constant {string} API_BASE_URL - The base URL for the API. If not provided, defaults to 'http://localhost:8080'.
 */
const axios = require('axios');
var express = require('express');
var router = express.router();
require('dotnet').config();

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';

/**
 * Handles POST requests to create a new client.
 *
 * @param {object} req - The request object containing the client data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.companyName - The company name of the client.
 * @param {string} req.body.address - The address of the client.
 * @param {string} req.body.billing - The billing information of the client.
 * @param {string} req.body.password - The password for the client.
 * @returns {object} - The server's response with the status code and data.
 */
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

/**
 * Handles GET requests to retrieve a client by their ID.
 *
 * @param {object} req - The request object containing the client ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the client to retrieve.
 * @returns {object} - The server's response with the status code and data.
 */
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

/**
 * Handles POST requests to create a new contact for a client.
 *
 * @param {object} req - The request object containing the contact data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.clientId - The ID of the client for whom the contact is being created.
 * @param {string} req.body.name - The name of the contact.
 * @param {string} req.body.surname - The surname of the contact.
 * @param {string} req.body.phoneNumber - The phone number of the contact.
 * @param {string} req.body.email - The email of the contact.
 * @returns {object} - The server's response with the status code and data.
 */
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

/**
 * Handles GET requests to retrieve a contact by their ID.
 *
 * @param {object} req - The request object containing the contact ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the contact to retrieve.
 * @returns {object} - The server's response with the status code and data.
 */
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

/**
 * Handles POST requests to create a new contract for a client.
 *
 * @param {object} req - The request object containing the contract data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.clientId - The ID of the client for whom the contract is being created.
 * @param {string} req.body.until - The date until the contract is valid.
 * @param {number} req.body.priceMonthly - The monthly price of the contract.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles GET requests to retrieve a contract by its ID.
 *
 * @param {object} req - The request object containing the contract ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the contract to retrieve.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles POST requests to create a new hardware item for a contract.
 *
 * @param {object} req - The request object containing the hardware data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.contractId - The ID of the contract for which the hardware is being created.
 * @param {string} req.body.refName - The reference name of the hardware.
 * @param {number} req.body.value - The value of the hardware.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles GET requests to retrieve a hardware item by its ID.
 *
 * @param {object} req - The request object containing the hardware ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the hardware item to retrieve.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles POST requests to create a new hardware specification.
 *
 * @param {object} req - The request object containing the hardware specification data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.refName - The reference name of the hardware specification.
 * @param {string} req.body.value - The value of the hardware specification.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Retrieves a hardware specification by its ID.
 *
 * @param {object} req - The request object containing the hardware specification ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the hardware specification to retrieve.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Creates a new hardware information entry.
 *
 * @param {object} req - The request object containing the hardware information data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.hardwareId - The ID of the hardware for which the information is being created.
 * @param {string} req.body.specId - The ID of the hardware specification.
 * @param {number} req.body.count - The count of the hardware specification.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Retrieves a hardware information entry by its hardware ID and specification ID.
 *
 * @param {object} req - The request object containing the hardware ID and specification ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.hardwareId - The ID of the hardware for which the information is being retrieved.
 * @param {string} req.params.specId - The ID of the hardware specification.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles POST requests to create a new job for a client.
 *
 * @param {object} req - The request object containing the job data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.clientId - The ID of the client for whom the job is being created.
 * @param {string} req.body.technicianId - The ID of the technician assigned to the job.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles GET requests to retrieve a job by its client ID and technician ID.
 *
 * @param {object} req - The request object containing the job IDs.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.clientId - The ID of the client for whom the job is being retrieved.
 * @param {string} req.params.technicianId - The ID of the technician assigned to the job.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles POST requests to create a new technician.
 *
 * @param {object} req - The request object containing the technician data.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.body.role - The role of the technician.
 * @param {string} req.body.name - The name of the technician.
 * @param {string} req.body.surname - The surname of the technician.
 * @param {number} req.body.salary - The salary of the technician.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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

/**
 * Handles GET requests to retrieve a technician by their ID.
 *
 * @param {object} req - The request object containing the technician ID.
 * @param {object} res - The response object to send back the server's response.
 * @param {string} req.params.id - The ID of the technician to retrieve.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
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