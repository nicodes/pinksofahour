import * as SibApiV3Sdk from "@sendinblue/client";

interface sendEmailOpts {
  name: string;
  previousInterviews?: string;
  additionalLinks?: string;
  howDidYourHear?: string;
  favoriteThing?: string;
}

/** Send email for contact page */
export async function sendEmail({
  name,
  previousInterviews,
  additionalLinks,
  howDidYourHear,
  favoriteThing,
}: sendEmailOpts) {
  try {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      import.meta.env.BREVO_API_KEY
    );

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: "Pink Sofa Hour",
      email: import.meta.env.CONTACT_SENDER_EMAIL,
    };
    sendSmtpEmail.to = [
      {
        email: import.meta.env.CONTACT_RECIPIENT_EMAIL,
        name: "Pink Sofa Hour",
      },
    ];
    sendSmtpEmail.subject = "PSH Contact: " + name;
    sendSmtpEmail.htmlContent = `<html><body>
          <p>New PSH Contact</p>
          <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Previous Interviews:</strong> ${previousInterviews}</li>
          <li><strong>Additional Links:</strong> ${additionalLinks}</li>
          <li><strong>How did you hear about PSH:</strong> ${howDidYourHear}</li>
          <li><strong>Favorite thing about your local music scene:</strong> ${favoriteThing}</li>
          </ul>
          </body></html>`;

    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
