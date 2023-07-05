<!DOCTYPE html>
<html>

<body>
  <h1>MailS - Online Mass Mail Dispatcher Service</h1>

  <h2>Features</h2>
  <ul>
    <li>Upload CSV file: Users can upload a CSV file containing a bulk of email addresses.</li>
    <li>Email Validation: The service separates valid and invalid email addresses and displays them in a pop-up modal.</li>
    <li>Email Composition: Users can compose the content of the email, including sender's email ID, subject, and
      message body.</li>
    <li>Email Dispatching: Once the user submits the form, the service sends emails to all the valid email addresses.</li>
    <li>Integration with SMTP.js and ElasticEmail: MailS utilizes the SMTP.js library and ElasticEmail API for email
      dispatching.</li>
  </ul>

  <h2>Prerequisites</h2>
  <p>Before running MailS, ensure that you have the following:</p>
  <ul>
    <li><a href="https://smtpjs.com/" target="_blank">SMTP.js library</a></li>
    <li><a href="https://elasticemail.com/" target="_blank">ElasticEmail API key</a></li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/hasan-code/MailS.git</code></li>
    <li>Navigate to the project directory: <code>cd MailS</code></li>
    <li>Configure SMTP.js and ElasticEmail:
      <ul>
        <li>Replace the placeholder API key in <code>app.js</code> with your ElasticEmail API key.</li>
        <li>Update other configuration settings if necessary.</li>
      </ul>
    </li>
    <li>Open the website on the browser.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Access the application through the browser.</li>
    <li>Upload a CSV file containing email addresses.</li>
    <li>Review the pop-up modal that displays the valid and invalid email addresses.</li>
    <li>Fill in the email composition form with the sender's email ID, subject, and message body.</li>
    <li>Click the "Send Mail" button to send the email to the valid email addresses.</li>
  </ol>

  <h2>Contributing</h2>
  <p>Contributions to MailS are welcome! If you encounter any issues or have suggestions for improvements, please feel
    free to submit a pull request or open an issue on the GitHub repository.</p>

  <h2>License</h2>
  <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. You are free to
    use, modify, and distribute this software.</p>

  <h2>Contact</h2>
  <p>For any inquiries or further information, please contact <strong>Hasan Al Saeed</strong> or <a href="https://github.com/hasan-code">hasan-code</a> at
    <a href="mailto:heyy.hxn@gmail.com">heyy.hxn@gmail.com</a>.</p>
</body>

</html>
