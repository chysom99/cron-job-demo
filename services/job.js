const cron = require("node-cron");
const mailService = require("./mailer");

const sendEmail = async (cronParam) => {
  //   let recipient = "f17bafe2-601c-489b-868e-9ac71aa76e1f@email.webhook.site",
  let recipient = "ofoeduchisom99@gmail.com",
    subject = "Email From Cron Job",
    message = "happy birthday";
  message += "<br/>" + JSON.stringify(cronParam);
  await mailService.send(recipient, subject, message);
};

module.exports = {
  triggerEvery10Seconds: () => {
    // execute every 10 minutes
    cron.schedule(" 0 38 1 24 11 6 2022 ", function (cronParam) {
      sendEmail(cronParam);
    });
  },
};
