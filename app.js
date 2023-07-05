var validEmails = [];
var invalidEmails = [];
var validEmailsCount = 0;
var invalidEmailsCount = 0;

function processCSVFile() {
  const inputFile = document.getElementById("file");
  const file = inputFile.files[0];

  const fr = new FileReader();

  fr.onload = function (e) {
    let fileContents = e.target.result;
    let rows = fileContents.split("\n");

    for (let i = 0; i < rows.length; i++) {
      let email = rows[i].trim();
      if (validateEmail(email)) {
        validEmails.push(email);
        validEmailsCount += 1;
      } else {
        invalidEmails.push(email);
        invalidEmailsCount += 1;
      }
    }

    displayEmails(validEmails, "valid-emails");
    displayEmails(invalidEmails, "invalid-emails");

    showModal(validEmailsCount, invalidEmailsCount);
  };

  fr.readAsText(file);
}

function validateEmail(email) {
  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (
    atIndex < 1 ||
    dotIndex < atIndex + 2 ||
    dotIndex + 2 >= email.length ||
    email.length - dotIndex === 5
  ) {
    return false;
  }

  return true;
}

function displayEmails(emails, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (let i = 0; i < emails.length; i++) {
    let p = document.createElement("p");
    p.textContent = emails[i];
    container.appendChild(p);
  }
}

function showModal(validEmailsCount, invalidEmailsCount) {
  const modal = document.getElementById("modal");
  const validEmailsCountSpan = document.getElementById("valid-emails-count");
  const invalidEmailsCountSpan = document.getElementById(
    "invalid-emails-count"
  );

  validEmailsCountSpan.innerHTML = validEmailsCount;
  invalidEmailsCountSpan.innerHTML = invalidEmailsCount;

  modal.style.display = "flex";

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}


// Sending emails

function sendEmails() {
  // const emails = validEmails.join(",");
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  var promise = new Promise(function (resolve, reject) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "hasan09122000howly@gmail.com",
      Password: "F11BF9E13BCC032945E63F066C7E4E26A661",
      To: "hasan.iitism@gmail.com", // For sending email to all the valid email IDs, just change this default email to variable 'email' and de-comment it above.
      From: "hasan09122000howly@gmail.com",
      Subject: subject,
      Body: message,
    }).then(
      function (message) {
        resolve(message);
      },
      function (error) {
        reject(error);
      }
    );
  });

  promise.then(
    function (message) {
      alert(
        "The mail has been sent to " +
          validEmailsCount +
          " email IDs successfully!\n" +
          message
      );
      location.reload();
    },
    function (error) {
      alert("Error sending emails: " + error);
    }
  );
}
