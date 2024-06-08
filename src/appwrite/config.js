import { Client, Account, Databases } from "appwrite";
import conf from "../../conf/conf";

const client = new Client();



client
    .setEndpoint(conf.appwriteURL) // Your API Endpoint
    .setProject(conf.appwriteProjectId) // Your project ID
;

export const account = new Account(client);
export const databases = new Databases(client);