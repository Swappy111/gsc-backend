const mongoose = require("mongoose");

const websiteClickSchema = new mongoose.Schema({
  month: { type: String, required: true },
  clicks: { type: Number, required: true },
});

// const WebsiteClick = mongoose.model("WebsiteClick", websiteClickSchema);
// const WebsiteClick = mongoose.model("websiteClick", websiteClickSchema, "websiteClicks");
const WebsiteClick = mongoose.model("websiteclick", websiteClickSchema, "websiteclicks");


module.exports = WebsiteClick;
