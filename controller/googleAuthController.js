const googleSchama = require('../models/googleAuthSchama');
const speakeasy = require('speakeasy');
const { default: mongoose } = require('mongoose');

exports.gAuth = async(req, res) => {
    const email = req.body.email;
    const temp_Secret = speakeasy.generateSecret()
    const secretkey = temp_Secret.base32;
    console.log(temp_Secret);

    try {
        
        const GoogleAuth = new googleSchama({
            _id: new mongoose.Types.ObjectId,
            email: email,
            secretkey:secretkey
        })
        await GoogleAuth
        .save()
        .then((result) => {
            res.status(200).json({
                Message: 'Secrate Key generated and save',
                Details: result
            })
        })

    } catch (error) {
        console.log(error);
    }

}

exports.verifyGoogleAuth = (req, res) => {
    const { token, _id} = req.body;
     
        googleSchama.find(({_id}), (err, val) => {
        if(err){
            res.status(404).json({
                Message : 'Something went wrong.',
            })
            console.log(err);
        }
        else{
            const secret = val.secretkey;

            const verified = speakeasy.totp.verify({ secret: secret,
                encoding: 'base32',
                token: token

            })


            if(verified){
                res.send("Verified")

            }else{
                res.send("Not Verified")
            }

            res.status(200).json({
                Details : val[0].secretkey
            })
        }
        
    })

    // const ss = sDetails
    // console.log(ss);

}