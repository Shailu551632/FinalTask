const express = require('express');
const router = require('express').Router();
const  UserController = require('../controller/UserRegController');
const ethController = require('../controller/ethController');
const bnbController = require('../controller/bnbController');
const tronController = require('../controller/tronController');
const googleAuthController = require('../controller/googleAuthController');
const EmailVerifyController = require('../controller/activateAPIcontroller');


router.post('/Reg', UserController.UserReg);
router.post('/login', UserController.UserLogin);
router.post('/auth', UserController.Auth);

router.post('/ethBalance', ethController.ethBalance);
router.post('/sendETH', ethController.sendETH);
router.post('/ethHistory', ethController.ethHistory);

router.post('/bnbBalance', bnbController.GetBalance);
router.post('/sendBNB', bnbController.SendBal);
router.post('/bnbHistory', bnbController.bnbHistory);


router.post('/tronBalance', tronController.TronBalance);
router.post('/sendTRON', tronController.SendTron);
router.post('/tronHistory', tronController.tronHistory);

router.post('/gAuth', googleAuthController.gAuth);
router.post('/VgAuth', googleAuthController.verifyGoogleAuth);

router.post('/vEmail', EmailVerifyController.VerifyEmail);




module.exports = router;








