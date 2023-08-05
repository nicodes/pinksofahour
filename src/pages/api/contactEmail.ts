import type { APIRoute } from "astro";
import * as SibApiV3Sdk from "@sendinblue/client";

const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  BREVO_API_KEY
);

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

export const post: APIRoute = async function get({ request, redirect }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");

    if (!name) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    sendSmtpEmail.sender = {
      name: "Pink Sofa Hour",
      email: "pinksofahour@gmail.com",
    };
    sendSmtpEmail.to = [
      { email: "nicozessoules@gmail.com", name: "Pink Sofa Hour" },
    ];

    // sendSmtpEmail.subject = "PSH Contact: ";
    sendSmtpEmail.subject = "PSH Contact: " + name;

    sendSmtpEmail.htmlContent = "<html><body><p>test</p></body></html>";
    // sendSmtpEmail.htmlContent = `<html><body>
    // <p>New PSH Contact</p>
    // <ul>
    // <li><strong>Name:</strong> ${formData.get("name")}</li>
    // <li><strong>Previous Interviews:</strong> ${formData.get(
    //   "previous-interviews"
    // )}</li>
    // <li><strong>Additional Links:</strong> ${formData.get(
    //   "additional-links"
    // )}</li>
    // <li><strong>How did you hear about PSH:</strong> ${formData.get(
    //   "how-did-you-hear"
    // )}</li>
    // <li><strong>Favorite thing about your local music scene:</strong> ${formData.get(
    //   "favorite-thing"
    // )}</li>
    // </ul>
    // </body></html>`;

    let hasError = false;
    const res = await apiInstance.sendTransacEmail(sendSmtpEmail);

    // .then(
    //   function (data) {
    //     console.log(
    //       "API called successfully. Returned data: " + JSON.stringify(data)
    //     );
    //   },
    //   function (error) {
    //     hasError = true;
    //     console.error(error);
    //   }
    // );

    return {
      body: JSON.stringify({
        name: "all good",
      }),
    };
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields 404",
      }),
      { status: 400 }
    );
  }
};
