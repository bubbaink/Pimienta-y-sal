const express = require('express');
const router = express.Router();
const { detail, detalle} = require('../controllers/detailController');

router.get('/', detail);
router.get("/:idMenu", detalle)

module.exports = router;