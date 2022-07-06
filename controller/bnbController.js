const express = require('express');
const Web3 = require('web3');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Accounts = require('web3-eth-accounts');
const TransactionScha = require('../models/bnbSchama');
const bnbBalScha = require('../models/bnbBalSchama');

require('dotenv').config();

// const accounts = new Accounts('https://data-seed-prebsc-1-s1.binance.org:8545');
const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");


exports.GetBalance = (req, res) => {

  const address = req.body.address;

   web3.eth.getBalance(address).then(Bal =>{

    const balance = web3.utils.fromWei(Bal) + ' BNB'

    const bnbBal = new bnbBalScha({
      _id: new mongoose.Types.ObjectId,
      address: address,
      balance:balance
  })
    bnbBal
        .save()
        .then((result) => {
            res.status(200).json({
                Message: 'Balance checked and save',
                Details: result
            })
        })

   }).catch(err =>{

    console.log(err)
    
   })

}


exports.SendBal =  async(req, res) => {

  try {
    
    const{email, fromAddress, toAddress, amount} = req.body

      const privKey = process.env.PRIVATE_KEY
      console.log(fromAddress, toAddress, amount, privKey);
      

      const bnbTransaction = await web3.eth.accounts.signTransaction({
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount.toString(), "ether"),
        gasLimit: 21000
      },
      privKey
      );

        const sendBNB = await web3.eth.sendSignedTransaction(bnbTransaction.rawTransaction)

        console.log("Hash :", sendBNB.transactionHash);
        const bnbTranHash = sendBNB.transactionHash;

        if(bnbTranHash){
          const transaction = new TransactionScha({
            _id: new mongoose.Types.ObjectId,
            email: email,
            fromAddress: fromAddress,
            toAddress: toAddress,
            amount: amount,
            hash: bnbTranHash
          })
          await transaction
          .save()
          .then((result) => {
            // console.log(result, "Transaction Inserted");
            res.status(200).json({
              message : 'Transaction Inserted.',
              Details : result
            })
          })
        }

        

  } catch (error) {
    console.log(error, 'oooo');
    res.status(401).json({
      message : 'Transaction Failed',
      error
    })
  }

  

}


exports.bnbHistory = (req, res) => {
  const email = req.body.email;

    TransactionScha.find(({email:email}), (err, val) => {
        if(err){
            res.status(404).json({
                Message : 'Something went wrong.',
            })
            console.log(err);
        }
        else{
            res.status(200).json({
                Details : val
            })
        }
        
    })
}