// import { Client, Account, ID } from "appwrite";
// import conf from "../conf/conf";

// class AuthService {

//     client = new Client();
//     account;

//     constructor() {
//         this.account = new Account(this.client);

//         this.client
//             .setEndpoint(conf.appwriteURL)
//             .setProject(conf.appwriteProjectId)
//     }

//     currentUser = async () => {
//         try {
//             const userData = await this.account.get()
//             if (userData) {
//                 return userData
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     createAccount = async ({ email, password, name }) => {
//         try {
//             return await this.account.create(ID.unique(), email, password, name)
//             // if (userData)
//             //     return this.login({ email, password })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     login = async ({ email, password }) => {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     logoutCurrentSession = async () => {
//         try {
//             await this.account.deleteSession('current')
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     logoutAllSesions = async () => {
//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

// const authService = new AuthService();

// export default authService;