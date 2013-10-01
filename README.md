# Install

## 1. Node Install & Setup

###Basic setup:

Follow the instructions on the [Node Website](http://nodejs.org/).

###Advanced setup:

If you are using Homebrew:

	$ brew install node

Then update your $PATH to include:

	/usr/local/share/npm/bin/


## 2. Install Grunt CLI & Bower

If not already installed, install the following globally.

	$ npm install grunt-cli bower -g

*Note: If you can't run npm without sudo then try changing ownership of the following directory to your user.*

	$ sudo chown -R $USER /usr/local


## 3. Install NPM & Bower Packages

Install NPM dev package dependencies for this project.

	$ npm install && bower install

-----------------

# Grunt Tasks

Grunt tasks to assist with development.

| Task              | Description
|-------------------|------------
|`$ grunt`          | Compile CSS, Lint & Unit Test
|`$ grunt server`   | Create Server + LiveReload
|`$ grunt dist`     | Create Distribution Build
|`$ grunt imgmin`   | Optimize Images
|`$ grunt iconfont` | Generate Icon Font (OSX Only)
|`$ grunt report`   | Generate Code Coverage & Complexity Reports

-----------------

# Testing

Please run `$ grunt` before contributing.

-----------------

# Contributing

- This project is managed via [Huboard](http://huboard.com/username/repo).
- Use the [EditorConfig](http://editorconfig.org/) to maintain consistent coding styles.
- Testing, Testing, Testing!

-----------------

# Want to use PhoneGap?

Follow the instructions on the [PhoneGap Website](http://phonegap.com/install/).