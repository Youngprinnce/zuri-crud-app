const Profile = require('../models/profile');
const { sendSuccess, sendError } = require("../responseHandler")

// Create and Save a new Profile
const createProfile = async (req, res) => {
    const {name, country, email} = req.body

    // Create a Profile
    const profile = new Profile({
        name,
        country,
        email,
    });

    // Save Profile in the database
    await profile.save( async (err, profile) => {
        if (err) {
            return sendError(res, err, 500)
        }

        return sendSuccess(res, profile, 201)
    })
}

// Retrieve and return all profiles from the database.
const getProfiles = async (req, res) => {
    await Profile.find((err, profile) => {
        if (err) {
            return sendError(res, err, 500)
        }
        return sendSuccess(res, profile, 200)
    })
}

// Find profile and update it with the request body
const updateProfile = async (req, res) => {
    await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, profile) => {
        if (err) {
            return sendError(res, err, 404)
        }
        return sendSuccess(res, profile, 201)
    })
}

// Delete a profile with the specified profile Id in the request
const deleteProfile = async (req, res) => {
    await Profile.findByIdAndRemove(req.params.id, (err, profile) => {
        if (err) {
            return sendError(res, err);
        }else{
            return sendSuccess(res, {})
        }
    })
}


module.exports = {
    createProfile,
    getProfiles,
    updateProfile,
    deleteProfile
};