import type { APIRoute } from "astro";
import * as SibApiV3Sdk from "@sendinblue/client";

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  BREVO_API_KEY
);

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

export const post: APIRoute = async function get({ params, request }) {
  const { to, subject, text } = params;

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = "Hi Nico2";
  sendSmtpEmail.htmlContent =
    "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
  sendSmtpEmail.sender = { name: "John Doe", email: "example@example.com" };
  sendSmtpEmail.to = [{ email: "nicozessoules@gmail.com", name: "Jane Doe" }];
  // sendSmtpEmail.cc = [{ email: "example2@example2.com", name: "Janice Doe" }];
  // sendSmtpEmail.bcc = [{ email: "John Doe", name: "example@example.com" }];
  // sendSmtpEmail.replyTo = { email: "replyto@domain.com", name: "John Doe" };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "New Subject",
  };

  let hasError = false;

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      hasError = true;
      console.error(error);
    }
  );

  if (hasError)
    return {
      body: JSON.stringify({
        name: "error",
      }),
    };

  return {
    body: JSON.stringify({
      name: "all good",
    }),
  };
};
