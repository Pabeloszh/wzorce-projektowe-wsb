class Email {
    constructor(title, message, footer) {
      this.title = title;
      this.message = message;
      this.footer = footer;
    }
  
    clone() {
      return new Email(this.title, this.message, this.footer);
    }
}
  
const originalEmail = new Email(
    "Hello",
    "This is a test email message.",
    "Best regards, John Smith"
);
  
const clonedEmail = originalEmail.clone();
  
console.log(originalEmail === clonedEmail); // Output: false
  
console.log(originalEmail.title === clonedEmail.title); // Output: true
console.log(originalEmail.message === clonedEmail.message); // Output: true
console.log(originalEmail.footer === clonedEmail.footer); // Output: true