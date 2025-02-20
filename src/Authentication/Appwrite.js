import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Appwrite API endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT); // Your project ID

const account = new Account(client);

export { client, account };
