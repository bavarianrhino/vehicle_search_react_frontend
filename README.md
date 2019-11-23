# Auto Pasture

> Auto Pasture is a fullstack web application that connects buyers to vehicles that are otherwise not listed on other mainstream marketplaces. Auto Pasture gives back the power to users with easy and simplified vehicle searches that connects them to sellers based on their own custom search parameters. This application includes a full gamut of features including everything from authentication, geolocation services, heavy usage of custom API queries and error handing of inconsistent data.
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

<div align="center">
  <a href="https://bavarianrhino.github.io/vehicle_search_react_frontend/"><img src="/src/Images/e34greylogoReadMe.png" title="AutoPasture" alt="AutoPasture"></a>
</div>

## 🌎 Motivation
>Full-Stack Web application that profiles advanced features of React, Redux, and Ruby on Rails API with its perspective [Github Repository](https://github.com/bavarianrhino/vehicle_search_rails_backend) if you desire to see the code. RESTfully persists user data with postgreSQL database via Active Record implementing a has-many-through model relationship along with full CRUD actions.

## 🎬 Demo
![Recordit GIF](https://recordit.co/eqfPPP3cXW.gif)
<div align="center">
    <p>Login provided using Bcrypt and JWT authentication.</p>
</div>

## 🔬 Learning Objectives
* Architectural considerations of building a full stack app
* Connect a front-end <b>Create-React-App</b> server to a <b>Ruby on Rails backend</b>
* Communicate data via <b>RESTful API</b> from the <b>PostgreSQL</b> database to the Client React Application
* Understand how to route user requests on the front end with <b>React Router</b> and on the backend with <b>Active Record</b>
* Enhance authentication flows in the app with the Ruby gems <b>Bcrypt & JWT for Authentication</b>
<!-- * Build reusable user inputs with <b>Redux Form</b>, complete with navigation -->
<!-- * Handle credit cards and receive payments from users with <b>Stripe</b> -->
<!-- * Engage users with automated <b>emails</b> -->
<!-- * Separate production and development resources with advanced <b>API key handling techniques</b> -->
<!-- * Educate users on how to use the app with custom build landing pages -->

## 🛠 Tech/Framework Stack
🌖<b>Front-End</b>
- React.js, React-Redux, React-Router-Dom
- Redux, Redux-Form, Redux-Thunk
- JavaScript, ES6
- Semantic-UI-React
- ****ADD HERE****

🌘<b>Back-End</b>
- PostgreSQL Database
- Served by Puma
- Active Record "Has-Many-Through" Schema
- Ruby, Ruby on Rails
- Rack CORS for handling Cross-Origin Resource Sharing (CORS) and AJAX
- Byebug and Pry-Rails used in Debugging Development
- Spring and Spring-Watcher-Listen used to speed-up Development

☁️<b>API</b>
- [MarketCheck Automotive API](https://www.marketcheck.com/automotive)
  
🚀<b>Deployment</b>
- Ruby on Rails API hosted on [Heroku](https://autopasture.herokuapp.com/users)
- React hosted on [Github Pages](https://bavarianrhino.github.io/vehicle_search_react_frontend/#/login)

## 💻 Local Env Installation

🔨 <b>Install</b>
```zsh
  $ git clone git@github.com:bavarianrhino/vehicle_search_rails_backend.git
  $ cd vehicle_search_rails_backend
  [server]$ bundle install
  [server]$ rails db:create
  [server]$ rails db:migrate
  [server]$ rails db:seed
  [server]$ rails s
```
```zsh
  $ git clone git@github.com:bavarianrhino/vehicle_search_react_frontend.git
  $ cd vehicle_search_react_frontend
  [server]$ yarn install
```
🔨 <b>Development Configuration</b>
- Sign up with [MarketCheck Automotive API](https://www.marketcheck.com/automotive) and save your api key in a newly created '.env' file at the root level of the client-react directory.
```javascript
  REACT_APP_MARKETCHECK_API_KEY=your_api_key_goes_here_with_no_quotes
```

🔨 <b>Run the application</b>

- To start the application run the following command.
```zsh
  $ yarn start
```

## 🚧 TODO
- Error Handling
- Vin Check
- Clear Vehicle Milage/Cost Graph


<!-- ## 🛠 Tech Stack

- [GatsbyJS](https://www.gatsbyjs.org/) - Static site generation built on React and GraphQL
- [Emotion](https://emotion.sh/docs/introduction) - CSS in JS
- [FontAwesome](https://fontawesome.com/) - Social link icons
- [Netlify](https://www.netlify.com/) - Hosting and continuous deployment

## 🗺 Site Map

    /
    /landing

1. [Home](https:///)
1. [Login](https://) -->




<!-- Search for new and used cars being sold near you! Use filters to narrow down desired vehicle by distance, year, make and model. Built with React, Redux and Semantic UI. Built on top of a Ruby on Rails back end. Go [Here](https://github.com/bavarianrhino/vehicle_search_rails_backend) if you wish to view the repository for the Rails back end.
>A large feedback-collection app. This mega app includes the full gamut of features, including everything from authentication to email handling. The app can be used to send mass emails to a big list of users for the purpose of collecting feedback. -->


<!-- <div align="center">
    <img width="640px" src="client/src/media/imgs/readme_workflow1.gif">
    <p>Add and purchase credits through secure Stripe Gateway</p>
</div>
<div align="center">
    <img width="640px" src="client/src/media/imgs/readme_workflow2.gif">
    <p>Send survey with form validation and persist response via webhooks</p>
</div> -->






<!-- # Auto Pasture React Frontend

<a href="https://www.autopasture.com"><img src="/src/Images/e34greylogoReadMe.png" title="AutoPasture" alt="AutoPasture"></a>

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

> Search for new and used cars being sold near you! Use filters to narrow down desired vehicle by distance, year, make and model. Built with React, Redux and Semantic UI. Built on top of a Ruby on Rails back end. Go [Here](https://github.com/bavarianrhino/vehicle_search_rails_backend) if you wish to view the repository for the Rails back end.

![Recordit GIF](https://recordit.co/eqfPPP3cXW)
![Recordit GIF](https://recordit.co/eqfPPP3cXW.gif) -->

<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->
<!-- ***INSERT GRAPHIC HERE (include hyperlink in image)*** -->



<!-- > include terms/tags that can be searched -->

<!-- **Badges will go here**

- build status
- issues (waffle.io maybe)
- devDependencies
- npm package
- coverage
- slack
- downloads
- gitter chat
- license
- etc. -->

<!-- [![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)  -->
<!-- [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger)  -->
<!-- [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)  -->
<!-- [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger)  -->
<!-- [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues)  -->
<!-- [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls)  -->
<!-- [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger)  -->
<!-- [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)  -->
<!-- [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger) -->

<!-- - For more on these wonderful ~~badgers~~ badges, refer to <a href="http://badges.github.io/badgerbadgerbadger/" target="_blank">`badgerbadgerbadger`</a>. -->

<!-- ***INSERT ANOTHER GRAPHIC HERE*** -->

<!-- <a href="https://www.autopasture.com"><img src="/src/Images/login_search_view.gif" title="AutoPasturLogin" alt="AutoPasturLogin"></a> -->
<!-- <a href="https://www.autopasture.com"><img src="https://recordit.co/eqfPPP3cXW" title="AutoPasturLogin" alt="AutoPasturLogin"></a> -->

<!-- [![INSERT YOUR GRAPHIC HERE](http://i.imgur.com/dt8AUb6.png)]() -->
<!-- login_search_view.gif -->

<!-- - Most people will glance at your `README`, *maybe* star it, and leave -->
<!-- - Ergo, people should understand instantly what your project is about based on your repo -->

<!-- > Tips -->

<!-- - HAVE WHITE SPACE -->
<!-- - MAKE IT PRETTY -->
<!-- - GIFS ARE REALLY COOL -->

<!-- > GIF Tools -->

<!-- - Use <a href="http://recordit.co/" target="_blank">**Recordit**</a> to create quicks screencasts of your desktop and export them as `GIF`s. -->
<!-- - For terminal sessions, there's <a href="https://github.com/chjj/ttystudio" target="_blank">**ttystudio**</a> which also supports exporting `GIF`s. -->

<!-- **Recordit** -->
<!--  -->
<!-- ![Recordit GIF](http://g.recordit.co/iLN6A0vSD8.gif) -->

<!-- **ttystudio** -->

<!-- ![ttystudio GIF](https://raw.githubusercontent.com/chjj/ttystudio/master/img/example.gif) -->

<!-- ---

## Table of Contents (Optional)

> If you're `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Example (Optional)

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```

--- -->

<!-- ## Installation

- All the `code` required to get started
- Images of what it should look like

### Clone

- Clone this repo to your local machine using `https://github.com/fvcproductions/SOMEREPO`

### Setup

- If you want more syntax highlighting, format your code like this:

> update and install this package first

```shell
$ brew update
$ brew install fvcproductions
```

> now install npm and bower packages

```shell
$ npm install
$ bower install
```

- For all the possible languages that support syntax highlithing on GitHub (which is basically all of them), refer <a href="https://github.com/github/linguist/blob/master/lib/linguist/languages.yml" target="_blank">here</a>.

---

## Features
## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/joanaz/HireDot2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/joanaz/HireDot2/compare/" target="_blank">`https://github.com/joanaz/HireDot2/compare/`</a>.

---

## Team

> Or Contributors/People

| <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
| <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://fvcproductions.com" target="_blank">`fvcproductions.com`</a>
- Twitter at <a href="http://twitter.com/fvcproductions" target="_blank">`@fvcproductions`</a>
- Insert more social links here.

---

## Donations (Optional)

- You could include a <a href="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" target="_blank">Gratipay</a> link as well.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/fvcproductions/)


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>. -->