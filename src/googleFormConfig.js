// Configure your Google Form submission endpoint and field mappings here.
// Using the Google Form link provided by the user.
// The formAction should be the formResponse endpoint for direct POST submission.
// Map local EnrollForm field keys to Google Form entry names.

const googleFormConfig = {
  formAction:
    "https://docs.google.com/forms/d/e/1FAIpQLSdkHjgKqBZirKUBOzfO2rBYWYLUrpZK6KGGmlvwBdWMlKeL9A/formResponse",
  popupFormAction:
    "https://docs.google.com/forms/d/e/1FAIpQLSd5F1lm--QU-vpYjaPMtLvXca5s50U8uMQjXnccARBJhBbIiw/formResponse",
  fieldMap: {
    fullName: "entry.1223401285",
    age: "entry.358473649",
    parentName: "entry.718655853",
    phone: "entry.741811957",
    email: "entry.1136041895",
    city: "entry.249243783",
    trialDate: "entry.1799610497",
    experience: "entry.172790348",
    message: "entry.890134894",
  },
  popupFieldMap: {
    parentName: "entry.36240118",
    phone: "entry.1957650895",
    age: "entry.1815141392",
  },
};

export default googleFormConfig;
