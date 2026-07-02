const AWS = require("aws-sdk");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION || "ap-south-1";

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

const s3 = new AWS.S3();

const S3_BUCKET = process.env.S3_BUCKET || "samplemyapnabucket";

module.exports = {
  s3,
  S3_BUCKET,
};