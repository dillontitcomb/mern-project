const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/test', (req, res) => res.json({ msg: 'Test route works' }));
