const express = require('express');
const mongoose = require('mongoose');
const UserSchama = require('../models/UserRegSchama')

exports.VerifyEmail = (req, res) => {
    

    const {_id, otp} = req.body;

    UserSchama.find(({_id}), (err, val) => {
        if(err){
            res.status(404).json({
                Message : 'Something went wrong.',
            })
            console.log(err);
        }
        else{
            const dOTP = val[0].otp;

            if(otp == dOTP){
                res.status(200).json({
                    Message : 'Email verified.'
                })
            }
            else{
                res.status(200).json({
                    Message : 'Email not verified.'
                })

            } 
        }
        
    })


}


