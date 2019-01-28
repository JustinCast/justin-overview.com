"use strict";
var Rate = require("../models/RateSchema");

function saveRate(req, res) {
  console.log(req.body);
  let rate = new Rate(req.body);
  rate.save((err, _) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar el documento: ${err}` });
    else res.status(200).send({ message: `Documento guardado con éxito` });
  });
}

function sendApprovalEmail(req, res, next) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    process.env.SENDGRID_API_KEY ||
      "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"
  );
  const msg = {
    to: "justincastillovalladares@gmail.com",
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.text
  };
  sgMail.send(msg);
  res.status(201).send(true);
}

module.exports = {
  saveRate: saveRate,
  sendApprovalEmail: sendApprovalEmail
};
