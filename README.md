# **ORM for E-Commerce** [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h2>By Sally Alvarenga</h2>

---

## Description

In this application I created a the back end for an e-commerce site by modifying starter code. I accomplished this by configuring a working Express.js API to use Sequelize to interact with a MySQL database. This type of Object-Relational Mapping (ORM) is essential to any e-commerce and is now generating an estimated $29 trillion in 2019.

This application takes advantage of an added database, MySQL username and password inside of an environment variable file. I also connected to the created database through Sequelize that allowed me to enter schema and seed commands.

The following video shows an example of my application being used from the command line:

[![A video thumbnail shows the command-line e-commerce with a play button overlaying the view.](./assets/videoThumbnail.png)](https://drive.google.com/file/d/1KhMQyNSBvJSzy8oume-1VNLFRL-G9T4K/view?usp=sharing)

<summary>Table of Contents</summary>
  <ol>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>

---

## Installation

Run and install the database in the schema by running the following in the terminal:

```md
mysql -u root -p
password:
source schema.sql
```

Run and install npm packages and seeds by running the following in the terminal:

```md
npm install
npm run seed
```

## Usage

Type into the terminal:

```
To start application: node server.js
Open server in browser or Insomnia to see the end points of the routes being hit
To exit the application: control + C
```

## License

Distributed under the MIT License

    Copyright (c) 2021 Sally Alvarenga

## Tests

Testing and Debugging has already been done by the developer and but feedback will be appreciated for further development.

---

## Questions

For further questions and inquiries please feel free send me an email or a direct message on GitHub

Sally Alvarenga - sallyalvarenga35@gmail.com

GitHub Profile: [https://github.com/salvarenga74/](https://github.com/salvarenga74)
