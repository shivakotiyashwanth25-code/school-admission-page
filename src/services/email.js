import emailjs from "@emailjs/browser";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_386nfm2",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_926278c",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "GkaMGJxfRUx4f-s3-"
};

export const isEmailConfigured = Object.values(emailConfig).every(Boolean);

export function sendVisitConfirmation(form) {
  if (!isEmailConfigured) {
    return Promise.reject(new Error("Email service is not configured."));
  }

  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      parent_name: form.parent,
      child_name: form.child,
      child_age: form.age,
      parent_phone: form.phone,
      parent_email: form.email,
      preferred_date: form.date,
      selected_program: form.program,
      school_name: "Little Scholars Academy"
    },
    {
      publicKey: emailConfig.publicKey
    }
  );
}
