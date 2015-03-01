# meteor-boilerplate

###Introduction
Meteor is a web application framework written on top of Node.js for building real-time web apps. Meteor lies somewhere between your app’s database and its user interface and makes sure that both are kept in sync. Meteor uses JavaScript on both the client and on the server.

######Why Meteor ?
Meteor as a framework is very easy to learn. With Meteor you can have a real-time web app up and running on the web in a few hours. If you are already familiar with JavaScript then you won’t even need to learn a new language. Meteor also helps you to build prototypes for cross-platforms in no time.

In this post I’m going to show you how to create a basic app using TDD (test-driven development) in Meteor. The app will consist of a single HTML page that displays “Hello World”. We will use Jasmine framework to write unit tests. The app will use Velocity to setup and execute the unit tests and generate a report.

I have already created a simple project in which I have referenced essential packages and created a scaffolding so that you spend more time on learning Meteor’s approach to Test Driven Development.
######List of added packages
- Iron Router for configuring routes in your Meteor app
- Jasmine framework for unit testing
- Velocity HTML Reporter for showing test summary visually
- manuelschoebel:ms-seo for SEO
- Bootstrap for making UI components

####Server-side Installation
Currently Meteor supports only Ubuntu, so we’ll set everything up on a Ubuntu OS.

######Install NodeJS:
    $ curl -sL https://deb.nodesource.com/setup | sudo bash -
    $ sudo apt-get install -y nodejs
    $ sudo ln -s /usr/bin/nodejs /usr/bin/node

######Install Meteor
`$ curl https://install.meteor.com/ | sh`

######Install Orion Scaffolding cmd tool for meteor
We’ll use the Orion scaffolding cmd tool for creating views, layouts and routes. This will make your life a lot easier and will also speed up your development. For installation, run the following command on your terminal screen.

`$ npm install -g orion-cli`
 
####Client-side Installation
######Chrome Browser
In order to run unit tests for client side, you must have Chrome installed on your system.
[Download Chrome](https://www.google.com/intl/en-US/chrome/browser/desktop/index.html)

####Running Project
You’ll need to clone the following repo from github into your working space and cd into that folder (“meteor-TDD”). Now enter the following commands on your terminal screen and hit Enter.

    $ git clone https://github.com/redbricksystems/meteor-boilerplate.git
    $ cd meteor-TDD
    $ meteor

As you run the server, Meteor will launch your browser with a KARMA server running on it. Now open another tab in Chrome and enter the URL 'localhost:3000'. You should see the running app now.

#####Unit Tests
On top right corner you’ll see velocity-html-reporter icon.
Click on it, and it will show you all the information about the unit tests, such as whether they were successful or failed, if failed then what was the reason etc. It will also give a mini summary of every test written in your project. For the current project you can find tests in the “tests/jasmine/client/unit/” directory. Right now you have only one simple test written in Jasmine but you can add more here.

#####Add more Layouts/Views/Routes
Right now I have only one layout and one view. You can find views and layouts in the “client/views” folder. It is very simple to add more views and layouts. As a matter of fact, layouts and views are the same entity but layouts are higher up in the hierarchy i.e. one layout can contain multiple views . For example, consider a room as layout and its furniture as views. There can be one or more views in one layout depending on how you structure your app.

For adding more views using Orion just type the command below. After you press Enter you’ll be asked to name the view. Give the view a name name and the view will be generated in the directory “client/view/”. 

`$ orion generate view`

For adding layouts using Orion, just type the following command on your terminal screen and give the name of the layout the same way you did for creating views:

`$ orion generate layout`

For creating routes using Orion, type the following command on your terminal:

`$ orion generate routes`

After pressing Enter it will ask you to give route name and path. It will then create a route for you. Pretty simple, right? There is lot more you can learn about Orion. [Click Here](http://matteodem.github.io/meteor-boilerplate/)
