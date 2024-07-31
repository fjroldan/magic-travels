// File: user.js
// Description: This file contains the code for the User DTO.

// User DTO class
export default class User {
    constructor(id, firstName, lastName, email, phone, username) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.username = username;
    }
}