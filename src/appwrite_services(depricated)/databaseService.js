// import { Client, Databases, Query } from "appwrite";
// import conf from "../conf/conf";

// class DatabaseService {

//     client = new Client();
//     database;

//     constructor() {
//         this.database = new Databases(this.client);

//         this.client
//             .setEndpoint(conf.appwriteURL)
//             .setProject(conf.appwriteProjectId)
//     }

//     getActivePosts = async () => {
//         try {
//             const posts = await this.database.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, [
//                 Query.equal('status', true)
//             ])
//             if (posts) {
//                 return posts
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     createPost = async ({ title, slug, status, content, featuredImage, userId }) => {
//         try {
//             return await this.database.createDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     status,
//                     content,
//                     featuredImage,
//                     userId
//                 }
//             )
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     getPost = async (slug) => {
//         try {
//             return await this.database.getDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     updatePost = async (slug, { title, status, content, featuredImage }) => {
//         try {
//             return await this.database.updateDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     status,
//                     content,
//                     featuredImage,
//                 }
//             )
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     deleteDocument = async (slug) => {
//         try {
//             return this.database.deleteDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

// const databaseService = new DatabaseService()

// export default databaseService