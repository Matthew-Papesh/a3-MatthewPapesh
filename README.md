Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template
===

## Tasker: Web App to Manager Your To-Do List

**Render Website Link: https://a3-matthewpapesh-2.onrender.com**

Include a very brief summary of your project here. Images are encouraged, along with concise, high-level text. Be sure to include:

The goal of Tasker to provide a online app that allows users to create accounts where they can create and store private tasks and to-do lists. Each task can be given a description and a priority number to indicate urgency. The website has a landing home page with some content, separate sign up and sign in pages, and the user dashboard with tasks loaded in. 

I faced too many challenges. Learning and implementing express was not easy, but was the least of my worries. This project had me thinking about program design in a very different way compared to what I'm used to. The duality of front to back end, or client to server side was hard. When redirecting users to different pages, javascript on client side would end and need to be restarted if that client code was included on more than one html file. I saw the importance of module JS files for client side pages. I made a user dashboard client JS file just for that so that when it is loaded at runtime it can be assumed the user has already logged in. This makes talking back to the server easier, as this client code already knows the talk with the server has already happened for logging in; so it knows we can safely move on to asking for user data from the database. Other challenges I faced were error and status handling for responses. This is because there are many edge cases to account for, some are plain errors others are just UIUX design. An example is signing into an account. You could give the wrong email or password, both may need a prompt to tell the user about either. Or if the user should register if the email given on signin is not recognized. 

Authentication was handled by creating a unique key produced from a user's email that was also unique to their account. The key was made by stepping through the characters of the email, finding ASCII codes and dividing it by the place the character sat in the email. (like the 4th char would be divided by 4). These numbers are made for each char and then rounded to integers. The ints are stringed together to create the key. The key was used for API calls to pull data from the server database and to request making changes to the user data in the database. So if the username was needed, the client-side could request with the key from user profile and receive the user name and email back.The dashboard was found as "/dashboard-:key URL. When the user signs in, the account if flagged as signed in. When they sign out, the flag is toggled. This way, the unique URL does not grant access to the user dashboard page if the log out button is pressed. The user would need to sign back in again with their email and password. 

I used a Bootstrap CSS framework because it was easy and looked modern. It had plenty of example I could pull from and it was formatted well enough that making all of my edits and stringing many pages together was not too difficult. The biggest change I made was including a custom Tasker logo to the pages of my website. I also ensure to insert status messages below the sign up/in pages for if they were successful or not. I also inserted content into dynamically created/deleted divs on the user dashboard page for displaying, creating, and deleting tasks once logged in. 

Express Middleware Packages:
- express.static => Serves static files (HTML, CSS, JS, images) from a specified folder.
- express.json => Parses incoming JSON request bodies into req.body.

## Technical Achievements
- **Tech Achievement 1**: Used basic level "encryption" to create a unique key associated with each user account. This was done by taking each char in a user email string, converting to numerical ASCII code and then diving by the index+1 in the string the char sat. These numbers were rounded and then stringed together to make a key. Users were flagged as signed in once validated by the sign in page, and flagged as signed out once hit the log out button. 

- **Tech Achievement 2**: Used Docker to test my MongoDB database. My Ubuntu is to new of a version and does not have support for testing locally with a local database. I used Docker to get around this. 

- **Tech Achievement 3**: Created a /api path for GETing user data by key on request from the server. This way, the user dashboard would only need the key in order to get everything else from the server as needed to populate the user dashboard page. 


### Design/Evaluation Achievements
- **Design Achievement 1**: Used a CSS template and implemented by elements with the template classes and types. 
- **Design Achievement 2**: The Signin and Signup pages have links to redirect you to either from each. 
- **Design Achievement 3**: Navbar is always present so you can easily navigate the website.
- **Design Achievement 4**: Used a custom website logo for "Tasker" you can see most clearly on the signup and signin pages. 
- **Design Achievement 5**: User dashboard says "Hello, person" where person is the user full name or email if a name was not give at account registration.
- **Design Achievement 6**: User dashboard table of tasks is easy to navigate and clear to read.
