const arr = [
  { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
  { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
  { userName: "Andrii", lastName: "", email: "andrii@mail.ru" },
];

const emailPattern = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)$/;

const trustedEmails = []; 

for (const user of arr) {
  const email = user.email;

  if (emailPattern.test(email)) {
    trustedEmails.push(email);
  }
}

console.log(trustedEmails);