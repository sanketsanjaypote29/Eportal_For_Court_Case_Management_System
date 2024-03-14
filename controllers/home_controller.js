const path = require("path");
const ContactUs_data = require("../model/contactUs");
module.exports.home = function (req, res) {
  const filePath = path.join(__dirname, "index.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.aboutUS = function (req, res) {
  const filePath = path.join(__dirname, "aboutUs.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.services = function (req, res) {
  const filePath = path.join(__dirname, "services.html"); // Path to your index.html file
  res.sendFile(filePath);
};

module.exports.dashboard = function (req, res) {
  const filePath = path.join(__dirname, "dashboard.html"); // Path to your index.html file
  res.sendFile(filePath);
};

module.exports.contactUs = function (req, res) {
  const filePath = path.join(__dirname, "contactUs.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.siteMap = function (req, res) {
  const filePath = path.join(__dirname, "site_map.html"); // Path to your index.html file
  res.sendFile(filePath);
};
module.exports.terms = function (req, res) {
  const filePath = path.join(__dirname, "terms.html"); // Path to your index.html file
  res.sendFile(filePath);
};

module.exports.contactUs_data = function (req, res) {
  const dataToSave = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  ContactUs_data.create(dataToSave);
  return res.redirect("back");
};
