const conf = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID ),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DB_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    // appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

//environment variables file always  do not get loaded quickly, which will cause the app to be crashed and difficult to find the error 
// therefore in production grade , we always create a conf.js file that exports default ocnf object which has all the values of env variables 

export default conf