"use strict";
var Rate = require("../models/RateSchema");

function saveRate(req, res) {
  console.log(req.body);
  let rate = new Rate(req.body);
  rate.save((err, savedRate) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar el documento: ${err}` });
    else {
        res.status(200).send({ message: `Documento guardado con éxito` });
        updateRate(savedRate);
    }
  });
}

function updateRate(req, res) {
  Rate.findById(req.params.rate_id, function(err, rate) {
    if (err) return handleError(err);

    rate.accepted = true;
    rate.save(function(err, updatedRate) {
      if (err) return handleError(err);
      res.send(updatedRate);
    });
  });
}

function sendApprovalEmail(data) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(
    process.env.SENDGRID_API_KEY ||
      "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"
  );
  const msg = {
    to: "justincastillovalladares@gmail.com",
    from: data.email,
    templateId: "d-3ef8c31f48fd40b6a26c6954007b65dd",
    dynamic_template_data: {
      fullname: data.fullname,
      comment: data.comment,
      rate_id: data.id
    }
  };
  sgMail.send(msg);

}

module.exports = {
  saveRate: saveRate,
  sendApprovalEmail: sendApprovalEmail,
  updatedRate: updateRate
};
