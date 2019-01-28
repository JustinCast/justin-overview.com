"use strict";
var Rate = require("../models/RateSchema");

function getReviews(req, res) {
  Rate.find({})
    .then(reviews => {
      res.status(200).send(reviews);
    })
    .catch(err => {
      handleError(err, res);
    });
}

function saveReview(req, res) {
  let rate = new Rate(req.body);
  rate.save((err, savedRate) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar el documento: ${err}` });
    else {
      res.status(200).send({ message: `Documento guardado con éxito` });
      sendApprovalEmail(savedRate);
    }
  });
}

function updateReview(req, res) {
  Rate.findById(req.params.rate_id, function(err, rate) {
    if (err) return handleError(err, res);

    rate.accepted = true;
    rate.save(function(err, updatedRate) {
      if (err) return handleError(err, res);
      res.send(updatedRate);
    });
  });
}

function sendApprovalEmail(data) {
  console.log(data);
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
      rate_id: data._id
    }
  };
  sgMail.send(msg);
}

function handleError(err, res) {
  res.status(500).send(err);
}

module.exports = {
  saveReview: saveReview,
  sendApprovalEmail: sendApprovalEmail,
  updateReview: updateReview,
  getReviews: getReviews
};
