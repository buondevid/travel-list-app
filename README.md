<h1 align='center'> Travel-List </h1>

<p align='center'><em>Covid gifted you a lot of time at home? Don't waste it! Start planning your journeys now... while waiting for better times.</em></p>

https://user-images.githubusercontent.com/36935593/130365474-ae7bb0d1-df1d-471b-aa0f-b8ac7aaed1ef.mov

## 🏁&nbsp; Getting Started

As soon as I'm allowed, we will have an online Demo to try without installing anything.

In the meanwhile, to run this project locally open your __terminal__, clone this repository on your computer and go into the new created folder:

```zsh
git clone git@github.com:buondevid/travel-to-app.git
cd travel-to-app
```

Then install the required dependencies with your preferred __package manager__:

```zsh
npm install

# OR

yarn install
```

Finally just run the app like so:

```zsh
npm run start
```

After a short period of time the web-app will open on _http://localhost:3000_ inside your browser (if it's available), enjoy!

## 🚀&nbsp; Description
This minimalistic web-app let you focus on and keep track of the only important thing: __travelling__!

It allows you to annotate down the countries you would like to visit and the ones you've already visited: just click on the search field at the top and start typing. A nice _autocomplete_ feature will guide you through selecting the right country with the right spelling... afterall, you don't want to take a flight ticket to the wrong place, do you?! We got you covered: use your mouse or keyboard to select the desired country.

Now, on your list you have a bunch of countries with checkboxes on the side, well done... Tick the ones you have already been to and ignore the rest: those will be the ones you're aiming for. Visit those countries and only then check them off, don't cheat.

Other features:
- __Sorting__. All the countries are splitted in _visited/unvisited_, and then ordered _alphabetically_. Use the 📍 / ✈️&nbsp; icon to put unvisited first or viceversa according to your mood. Sometimes it's nice to put your goals a bit behind and look at what you've accomplished.
- __Themes__. Not a fan of bright colors? You like darkness, moisture and possibly unlimited wi-fi? Welcome to the club: use 🌙 &nbsp;/ 🔆&nbsp; icons to select your preferred theme.
- __Storage__. Are you afraid to lose your precious list and your preferred theme? Don't be, all your data will be saved for the next time. Be sure to use always the same device though, we don't have no fancy authentication at the moment.
- __Offline__. Are you on vacation in one of the destinations on the list but you're without internet and can't check it off the list? We all have been there... The web-app stores a list of all the countries of the world just in cases like this, no internet needed. You have to have used the app at least once before for this to work.

Good luck with your journey!

## 📡&nbsp; Technicalities

This app is made with __React__ and __Styled Components__.

Some of the implementations and features are:
- Context + Local Storage
- Global Theme + Local Storage
- Custom Hook + Local Storage
- Advanced RegExp usage for querying
- Custom-built keyboard experience when looking for countries
- Cool handmade algorithms for sorting and filtering
- Horizontal scrolling with mousewheel
- Responsive and mobile-friendly
- API fetching with errors handling (in custom hook)
- PropTypes
- Simple architecture and little state used only where needed (low in the tree)
- Clear documentation, only where and when needed
