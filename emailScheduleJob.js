import * as EmailService from "./services/EmailService";
import schedule from "node-schedule";
import * as vocabularyActions from "./db/vocabularies/actions";

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 1;

const formatEmailHTML = (data) =>
  `<div>${data.map(
    (item) => `<b>${item.wordId}</b>: ${item.definition}<br/>`
  )}</div>`;

export const emailScheduleJob = schedule.scheduleJob(rule, async function () {
  try {
    await vocabularyActions
      .getVocabuliaries()
      .toArray(function (err, response) {
        if (err) {
          console.error(err);
        } else {
          const emailData = {
            to: "shahali.arya@gmail.com",
            from: "arya.shaw.90@gmail.com",
            subject: "VOCAPP",
            text: "Remember to practice these words daily 🔔",
            html: `<div>${formatEmailHTML(response)}</div>`,
          };
          EmailService.sendEmail(emailData).catch((err) => {
            console.error(err);
          });
        }
      });
  } catch (err) {
    console.error(err);
  }
});
