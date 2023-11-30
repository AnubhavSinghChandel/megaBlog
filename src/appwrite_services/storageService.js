import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

class StorageService {

    client = new Client();
    storage;

    constructor() {
        this.storage = Storage(this.client);

        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
    }

    uploadFile = async (file) => {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
        }
    }

    deleteFile = async (id) => {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                id
            )
        } catch (error) {
            console.log(error);
        }
    }

    getFilePreview = (id) => {
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId,
                id
            )
        } catch (error) {
            console.log(error);
        }
    }
}

const storageService = new StorageService()

export default storageService