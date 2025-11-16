const express = require('express');
const axios = require('axios');
const Route = require('../models/Route');

const router = express.Router();
const ORS_API_KEY = process.env.ORS_API_KEY;

router.post('/route', async (req, res) => {
  const { start, end, profile = 'driving-car' } = req.body;

  if (!start || !end) {
    return res.status(400).json({ error: 'Start and end coordinates are required' });
  }

  try {
    const response = await axios.post(
      `https://api.openrouteservice.org/v2/directions/${profile}/geojson`,
      { coordinates: [start, end] },
      {
        headers: {
          Authorization: ORS_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    // Save to MongoDB
    await Route.create({ start, end, profile });

    res.json(response.data);
  } catch (err) {
    console.error('ORS API Error:', err.message);
    res.status(500).json({ error: 'Failed to get route from ORS' });
  }
});

module.exports = router;
