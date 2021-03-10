
# Eat-Da-Burger

![badge](https://img.shields.io/static/v1?label=License&message=MIT%20License&color=blue)

[burger](./public/assets/img/burger.png)
  
## Description

Eat-Da-Burger is a burger logger application that utilzes n MySQL, Node, Express, Handlebars and an ORM. This application follows design pattern. Eat-Da-Burger uses Node and MySQL to query and route data to the application, and Handlebars to generate the HTML.


## Table of Contents

* [Deployed_Application](#Deployed_Application)
* [Mockup](#Mock-Up)
* [Usage](#Usage)
* [Directory_Structure](#Directory_Structure)
* [Schema](#Schema)
* [License](#License)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Deployed_Application

To access this deployed application, visit the following link: 

## Mock-Up

[Mockup](./public/assets/img/mockup.png)

## Usage

This application uses Node and MySQL to query and route data, and Handlebars to generate the HTML. 

When a user is entering a burger, it will appear in the left hand column ‘Burgers to Eat’. If they select the button ‘DEVOURED!’ That item will move to right hand column ‘Burgers Devoured’. If the select ‘I Didn’t Finish That!’ The Burger Devoured will move back to ‘Burgers to Eat’. 

This application uses bootstrap, and is responsive

## Directory_Structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│       |   └── background.png
│       |
│       └── scripts
│           └── burger_handlebars.js
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Schema

### Database: burgers_db

```
 **burgers**:

 **id** - INT PRIMARY KEY
 **burger_name** - VARCHAR(255) to hold burger name
**devoured** - BOOLEAN DEFAULT false - this application assumes a burger added is not eaten yet. 

## License

This application has a MIT License type. Please read more about permissions at [Choose A License](https://choosealicense.com/licenses/)

## Questions

Please reach out to me with any additional questions by contacting me.

* GitHub Profile: https://github.com/ross1jk
* My Email Address: Jacqueline.ross09@gmail.com
