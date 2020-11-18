import * as EmailService from "./services/EmailService";
import schedule from "node-schedule";
import * as vocabularyActions from "./db/vocabularies/actions";

var rule = new schedule.RecurrenceRule();
rule.second = 10;

export const emailScheduleJob = schedule.scheduleJob(rule, async function () {
  try {
    const vocabularies = await vocabularyActions.getVocabuliaries();
    const emailData = {
      to: "shahali.arya@gmail.com", // Change to your recipient
      from: "arya.shaw.90@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: JSON.stringify(vocabularies),
    };
    EmailService.sendEmail(emailData).catch((err) => {
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
});
