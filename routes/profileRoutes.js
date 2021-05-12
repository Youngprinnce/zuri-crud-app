const express = require('express');
const router = express.Router();

const {createProfile, getProfiles, updateProfile, deleteProfile} = require('../controller/profileController')

router.post('/create', createProfile);

router.get('/', getProfiles);

router.put('/:id', updateProfile);

router.delete('/:id', deleteProfile);

module.exports = router;