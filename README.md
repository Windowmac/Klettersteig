# **Klettersteig** *A Hiking App*
*Steep, narrow mountain path used for climbing...a "via ferrata"!*
![login page](public\images\KlettersteigLogIn.PNG)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# **Team Project**

Klettersteig is a hiking app which a user can search for hikes in their area, store pics of their favorite hikes, and update their best times. This app requires a log in to be created, saved, and uses cookies for each session.

# **Contributors**
This application was the result of a fully collaborative team project. Team members include Danielle T., Andy W., Erik S., Mckendree S., and Sean R. 

![3 page view](public\images\thumbnail.jpg)

# **Start**
Use this command in an integrated terminal to start the application:

```bash
npm start
```
# **Packages**
This CMS application uses the following NPM packages:
*  mysql2 (database)
*  router (routes)
*  Heroku (for app hosting)

*(Content Management System (CMS) used to interact with the user information and favorited hikes contained in the database.)*

# **Requirements**
## *User Story*

```md
As a user I want to be able to search for hikes in my area and find relevant information, such as elevation, time the hike takes, and location. Some bonuses woud be information about world famous hikes and the ability to save pictures and recall favorited hikes I've been on.
```

## *Wire Frame setup*
* `login page`
![wireframe sign-in](public\images\Klettersteig-0.PNG)
* `landing page (once login has been verified)`
![wireframe landing page](public\images\Klettersteig-1.PNG)
* `hikes page (results of the search feature)`
![wireframe hike page](public\images\Klettersteig-2.PNG)

## *Links*
* GitHub: https://github.com/Windowmac/Klettersteig.git
* Heroku: https://sheltered-badlands-95600.herokuapp.com/

## *Database Structure*
* `user`
    * `username`
    * `password`
    * `first_name`
    * `last_name`
    * `email`
    * `state`

* `user ratings`
    * `id`
    * `user_id`
    * `hike_id`
    * `hike_rating`
    * `hike_name`

* `hike`
    * `id`
    * `name`
    * `discovered_by`
    * `description`
    * `length`
    * `lattitude`
    * `longitude`

* `favorite hikes`
    * `id`
    * `user_id`
    * `hike_id`
    * `hike_name`

* `times`
    * `id`
    * `hours`
    * `minutes`
    * `seconds`
    * `user_id`
    * `hike_id`

* `images`
    * `id`
    *  `user_id`
    *  `hike_id`
    *  `data`
