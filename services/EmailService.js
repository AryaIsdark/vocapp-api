import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

const emailAPI_KEY = process.env.EMAIL_API_KEY;
sgMail.setApiKey(emailAPI_KEY);

export const sendEmail = (data) => sgMail.send(data);
