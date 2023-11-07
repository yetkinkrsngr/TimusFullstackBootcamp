# Node.js:

> Node.js is a programming language that runs on the V8 engine of JavaScript.
> After installation, you can check the version with the command `node --version`.
> npm: Node Package Manager.
> `node --help` is a command for Node.js help.

### The following commands are executed in order

1. `npm init`
   - `name` (package name):
   - `version`: This specifies the version number of your package. Typically in the format "Major.Minor.Patch."
   - `description`: It provides a brief description of your package, summarizing what it does.
   - `entry point`: This specifies the main entry point file of your package. Typically, it is `index.js` or the main file of your project.
   - `test command`: This specifies the command to run your tests. When left empty, it defaults to a standard test command.
   - `git repository`: It defines the URL of the Git repository where your package's source code is hosted.
   - `keywords`: It lists keywords that describe your package.
   - `author`: It may include the name and contact information of the package's author.
   - `license`: It specifies the license under which your package is released. ISC is a commonly used open-source license, but different licenses can be selected.

> These keys define the configuration of your Node.js project, including its dependencies, scripts, and other essential information. You can use the `package.json` file to manage your package's requirements and usage.

2. `npm install express --save`: Installs the Express package.

> Express.js is a web application framework based on Node.js. Node.js is a fast and event-driven runtime used to develop server-side applications. Express.js is designed to make Node.js more efficient and user-friendly for building web applications.

> Express.js features include:

- Speed and Minimalism: Express is a simple and lightweight framework that provides the essential functions for web applications. It can be easily customized as complexity grows.
- Routing: Express allows you to route URLs to specific functions, making it easy to organize your web application without adding a lot of functions to handle different pages and processes.
- Middleware: Express has a set of middleware functions that are used to process requests and responses. This allows you to add or modify various processes while handling requests.
- Template Engines: Express supports various template engines (e.g., EJS, Pug, Handlebars) to create HTML views.
- Serving Static Files: Express provides an easy way to serve static files (e.g., CSS, JavaScript, images).
- Database Access: Express enables access to different databases through various modules and connections for fetching or saving data.
- Security: Express offers tools to secure web applications, such as protection against CSRF attacks or session management.

> Express.js is a popular choice for developing web applications. It combines the speed and event-driven nature of Node.js to create fast and efficient web applications. Express.js also has a large community, extensive documentation, and a variety of third-party plugins to facilitate development.

3. `npm install nodemon --save-dev`: Installs the Nodemon package.

Nodemon is a tool used to make the development process more efficient when developing Node.js applications. Nodemon monitors changes in your Node.js application's source code and automatically restarts the server, eliminating the need to manually restart the server after each change.

Nodemon offers several features:

1. Automatic Restart: Nodemon watches project files and automatically restarts the application when any changes are detected. This eliminates the need to manually restart the server every time you make a change.
2. Flexibility: Nodemon allows you to configure which file types to watch and which files should respond to changes. This control allows you to watch and restart only the files you need.
3. Customization: Nodemon lets you configure the command to run and application start options. This allows you to tailor it to the specific requirements of your application.
4. Application Independence: Nodemon can be used with any Node.js application, whether it's an Express.js, Koa, Hapi, or any other Node.js-based application.

> Nodemon is a popular tool for accelerating the development process and making it more efficient. It reduces the need to manually restart the server with every change and allows developers to get quick feedback on their code changes.

But one important note is that we used `npm install express --save` for Express version and `npm install nodemon --save-dev` for Nodemon version, which results in the following in your `package.json`:

```json
   "dependencies": {
   "express": "^4.18.2"
   },
   "devDependencies": {
   "nodemon": "^3.0.1"
   }
```

This is because Nodemon restarts the server on every change and commit to the server. We, as developers, only want it to respond to changes made by developers.

```javascript
// Import the 'express' module to your project and assign it to the 'express' variable.
const express = require("express");

// Start an Express application and assign it to the 'app' variable.
const app = express();

// Handle an HTTP GET request. The first argument specifies the URL path ("/" is the home path), and the second argument is a function.
app.get("/", function (req, res) {
  // Send the "Hello World" response to the browser.
  res.send("Hello World");
});

// Start the application to listen on the specified port (e.g., 3000).
app.listen(3000);
```

Express module is imported into the project and assigned to the 'express' variable. This module is used to handle HTTP requests and create a web server.

An Express application is started and assigned to the 'app' variable, which represents your web application.

A route for the root path ("/") is defined to handle HTTP GET requests. In the callback function, we specify what should happen when a user visits the root path. In this case, we send the response "Hello World" to the client.

Finally, the application is started, and `app.listen

---

## HTTP Methods:

1. GET: Used to retrieve data from a specified resource (URL). A GET request fetches data from the server but does not make any changes on the server. Web pages are typically viewed using GET requests.

2. POST: Data is sent to the server. POST is used to create a new resource on the server or update an existing resource. Sensitive information like usernames and passwords is sent to the server using POST.

3. PUT: Creates or updates a specific resource at the specified URL. If the URL already exists, it updates the existing resource; otherwise, it creates a new resource.

4. DELETE: Used to delete a specified resource. The server removes the resource specified by the URL. A DELETE operation is permanent, meaning deleted data cannot be recovered.

---

## HTTP Status Codes:

1xx: Informational
2xx: Successful
3xx: Redirection
4xx: Client Error
5xx: Server Error

## Route Parameters:

- Route parameters are embedded in a specific section of the URL and are often used with dynamic URL paths.
- They are placed in a specific location within the URL (e.g., `/:id`), and these values can change within the URL.
- Route parameters represent a specific structure within the URL path. For example, a URL that displays a user's profile: `/users/:userId`.
- Route parameters are used to represent the value of a feature (e.g., user ID or product ID) within the URL path.
- For example, in the URL `/users/123`, `123` is a route parameter representing a user's ID.
- In web frameworks like Express.js, route parameters are accessible via the `req.params` object.

## Query Parameters:

- Query parameters start at the end of the URL with a `?` sign and are provided in key-value pairs.
- Query parameters in the URL are used to specify how a request should display a specific operation or page.
- Query parameters are used to set specific conditions or filters for a particular page or operation. For example, page number, sorting options, filtering criteria, etc.
- In a URL like `/products?category=electronics&sort=price`, `category` and `sort` are query parameters.
- In web frameworks like Express.js, query parameters are accessible via the `req.query` object.
