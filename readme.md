# LRDC Style Guide
   This guide is to get you up and running with the LRDC Style Guide.
   
   The [**Set-Up**](https://github.com/naoki-evan-hisamoto/lrdc-style-guide/blob/master/readme.md#set-up) section will help you install tools that streamline the process of using our style guide.
   
   The [**Installation**](https://github.com/naoki-evan-hisamoto/lrdc-style-guide/blob/master/readme.md#installation) section will help you get the style guide running locally on your computer.
   
   The [**Usage**](https://github.com/naoki-evan-hisamoto/lrdc-style-guide/blob/master/readme.md#usage) section will tell you what how to use style guide.   
   
   The [**About**](https://github.com/naoki-evan-hisamoto/lrdc-style-guide/blob/master/readme.md#about) section will tell you what your forked files do.   

</br>
</br>

## Set-Up
   The Set-Up section will ensure that all necessary software is installed for you to properly use the LRDC Style Guide.
   The following steps are listed in chronological order.
   If you already have a certain software installed, skip ahead to the next step.

</br>

### 1. Xcode [:link:](https://developer.apple.com/xcode/)   
Xcode includes everything developers need to create great applications for Mac, iPhone, iPad, Apple TV, and Apple Watch. Xcode provides developers a unified workflow for user interface design, coding, testing, and debugging. The Xcode IDE combined with the Swift programming language make developing apps easier and more fun than ever before.
  
</br>
  
  1. Download and install [XCode9](https://developer.apple.com/download/) 

</br>

> ###### Resources
> [Apple Developer Documentation](https://developer.apple.com/documentation/)  
> Description from [Apple](https://itunes.apple.com/us/app/xcode/id497799835)

## 

### 2. Git + GitHub [:link:](https://github.com/)
GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers. 

</br>

  1. [Set up Git and authenticate with GitHub](https://help.github.com/articles/set-up-git/)  

</br>

> ###### Resources
> [Getting Started - Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
> [Github Guides](https://guides.github.com/)  
> Description from [Github](https://github.com/)

##

### 3. Homebrew [:link:](http://brew.sh)
Homebrew is a great tool for web developers. First, it makes removing Node very easy (otherwise you have to crawl through your file system and delete a bunch of files manually). Second, it greatly simplfies the installation of other useful packages like Git, Ruby, or the very useful wget utility.   

</br>

  1. Paste this into a Terminal prompt:    
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```   

</br>

> ###### Resources
> [Homebrew Documentation](https://docs.brew.sh/)   
> Description from [Treehouse blog](http://blog.teamtreehouse.com/install-node-js-npm-mac)

##

### 4. Node + NPM [:link:](https://www.npmjs.com)
NPM is a package manager for JavaScript and the world's largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.

</br>

  1. Enter `brew install node` into a Terminal prompt.
  2. Enter `npm install npm@latest -g` into a Terminal prompt.
  3. To check the install, enter `node -v; npm -v`. You should see two numbers print out which are the versions for node and npm respectively.   

</br>

> ###### Resources
> [npmjs Documentation](https://docs.npmjs.com/)   
> Description from [npmjs](https://www.npmjs.com)
   
##

### 5. Gulp [:link:](https://gulpjs.com/)
gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

</br>

  1. Enter `npm install -global gulp-cli` into a Terminal prompt.
  2. To check the install, enter `gulp -v`. You should see a number print out which is the version for gulp.

</br>

> ###### Resources
> [gulpjs Documentation](https://github.com/gulpjs/gulp)   
> Description from [gulpjs](https://github.com/gulpjs/gulp)

##

</br>
</br>

## Installation
In order to contribute to the LRDC Style Guide and experiment with it locally on your computer, you will need to fork this repository.

</br>

### 1. Fork Repository

</br>

  1. [Follow Github's Fork a Repo instructions.](https://help.github.com/articles/fork-a-repo/)


Your forked file structure should look like this:

```
lrdc-style-guide/
├── .gitignore
├── docs/
|   ├── index.html
|   └── style.css
├── gulpfile.js
├── package.json
├── readme.md
└── style-guide/
    ├── css/
    |   └── style.css
    ├── fonts/
    ├── images/
    ├── index.html
    ├── js/
    └── scss/
        ├── base/
        |   ├── color.scss
        |   ├── elevation.scss
        |   └── typography.scss
        └── index.scss
```

##

### 2. NPM Install
npm install will create a `node_modules/` folder and install the dependencies listed in the `package.json` file.

</br>

  1. Open a Terminal prompt and navigate to the `lrcd-style-guide/` folder.
  2. Enter `npm install` into the Terminal prompt.
  3. Your `lrdc-style-guide/` folder should now contain the `node_modules/` folder.

##

### 3. You're ready to start styling!
You now have 2 new folders inside of the `lrdc-style-guide/` folder.  
These are the `.git/` + `node_modules/` folders.
</br>

Your forked file structure should look like this after following steps 1 + 2 of the Local section:

```
lrdc-style-guide/
├── .git/
|   └── ...
├── .gitignore
├── docs/
|   ├── index.html
|   └── style.css
├── gulpfile.js
├── node_modules/
|   └── ...
├── package.json
├── readme.md
└── style-guide/
    ├── css/
    |   └── style.css
    ├── fonts/
    ├── images/
    ├── index.html
    ├── js/
    └── scss/
        ├── base/
        |   ├── color.scss
        |   ├── elevation.scss
        |   └── typography.scss
        └── index.scss
```

##

</br>
</br>

## Usage
A lot of behind-the-scenes processing occurs when to simplify the process of using the LRDC Style Guide. You'll want to make sure you initiate the gulp tasks by following the Usage instructions.

</br>

### 1. Start-Up
Before you begin to edit your files, running the `gulp.watch` task will automatically compile your scss files into a single css file and refresh your browser upon saving any edits. You will want to follow this step everytime you use this style guide.

</br>

  1. Open a Terminal prompt and navigate to the `lrdc-style-guide/` folder.
  2. Enter `gulp watch` into the Terminal prompt.  

##

### 2. Style Away!
The `index.html` file in the `lrdc-style-guide/` folder should have automatically opened in your browser.  
As you save your changes to `*.scss` files, your browser will automatically refresh to display the changes.

</br>

* For styling, the only files you should edit are the `*.scss` files in the `/style-guide/scss/` folder.   
* For content, the only file you should edit is the `index.html` file in the `lrdc-style-guide/` folder.

##

</br>
</br>

## About
If you want to know more about what the files in your forked LRDC Style Guide repository do, you can find out below!

</br>

### `.git`

### `.gitignore`

### `docs/`

### `gulpfile.js`

### `node_modules/`

### `package.json`

### `readme.md`

### `style-guide/`
