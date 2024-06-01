import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendCustomEmail = (details: any) => {
  emailjs.init(import.meta.env.VITE_ACCOUNT_KEY);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        subject_name:
          details.company_name == null || details.company_name == ""
            ? details.full_name
            : details.company_name,
        full_name: details.full_name,
        custom_request: details.custom_request,
        from_email: details.from_email,
        phone_number: details.phone_number,
      }
    )
    .then((response) => {
      console.log(response);
      Swal.fire({
        title: "Email Sent!",
        text: "Email has been sent successfully.",
        icon: "success",
        confirmButtonText: "Continue",
      });
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        title: "Email Not Sent!",
        text: "Email was not sent. Please try again later.",
        icon: "error",
        confirmButtonText: "Dismiss",
      });
    });
};

export default sendCustomEmail;
