// File: user.ts
// Description: This file contains the User interface for the EditUsers microfrontend.

// User interface.
export interface User {
    id?: number|null;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}