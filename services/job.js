const cron = require("node-cron");
const mailService = require("./mailer");

const sendEmail = async (cronParam) => {
  //   let recipient = "f17bafe2-601c-489b-868e-9ac71aa76e1f@email.webhook.site",
  let recipient = "kufre@flutterwavego.com",
    subject = "Email From Cron Job",
    message =
      "Happy birthday kufre, wish you many  more good and prosperous years ahead.";
  message += "<br/>" + JSON.stringify(cronParam);
  await mailService.send(recipient, subject, message);
};

module.exports = {
  triggerEvery10Seconds: () => {
    // execute every 10 minutes
    cron.schedule("0 11 24 12 *", function (cronParam) {
      sendEmail(cronParam);
    });
  },
};
