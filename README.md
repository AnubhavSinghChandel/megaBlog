Readme.md file for a blog creating and posting website made with react and appwrite as backend

## How to run the project

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` as this is a vite project
4. Go to specified `localhost` to see the project running

## How to use the project

- Create an account on Appwrite
- Create a new project on Appwrite
- Create a new collection in the project
- Create a new document in the collection
- Add the following fields in the document

```
    1. UserId (string, required)
    2. title (string, required)
    3. content (string, required)
    4. status (boolean, required)
    5. featuredImage (string, required)
```

- Create a new platform in the project to integrate to web
- Create a .env file in the root directory
- Copy the ProjectID, API endpoint, bucket ID and the collection ID from the Appwrite dashboard and paste it in the .env file as follows

```
    VITE_APPWRITE_URL= "Your appwrite API endpoint"
    VITE_APPWRITE_PROJECT_ID= "Your appwrite project ID"
    VITE_APPWRITE_DATABASE_ID= "Your appwrite database ID"
    VITE_APPWRITE_COLLECTION_ID= "Your appwrite collection ID"
    VITE_APPWRITE_BUCKET_ID= "Your appwrite bucket ID"
```

- Run project with `npm run dev` to see working

## Features

### View all blog posts

![alt](./project_screenshots/all_post.png)

### Create a new blog post

Click on the `Create New` button on the Home screen to create a new blog post

![alt](./project_screenshots/new_post.png)

### View Edit and Delete a blog post

- Click on the `Update Post` button on the Post page to edit a blog post.
- Click on the `Delete Post` button on the Post page to delete a blog post

#### View Post

![alt](./project_screenshots/delete_post.png)

#### Update Post

![alt](./project_screenshots/update_post.png)
