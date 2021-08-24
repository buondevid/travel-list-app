<h1 align='center'> Travel-List </h1>

<p align='center'><em>Covid gifted you a lot of time at home? Don't waste it! Start planning your journeys now... while waiting for better times.</em></p>

https://user-images.githubusercontent.com/36935593/130372453-61b8a949-b0a6-431b-a0cc-3d969b795485.mov



## 🏁&nbsp; Getting Started

If you don't need to run it locally, you can [see it LIVE 🔗](https://buondevid.github.io/travel-list-app/).

Otherwise, to run this project locally open your __terminal__, clone this repository on your computer and go into the new folder just created:

```zsh
git clone git@github.com:buondevid/travel-list-app.git
cd travel-list-app
```

Then install the required dependencies with your preferred __package manager__:

```zsh
npm install

# OR

yarn install
```

Finally, just run the app like so:

```zsh
npm run start
```

After a short period of time, the web-app will launch on _http://localhost:3000_ inside your browser (if the port's available), enjoy!

## 🚀&nbsp; Description
This minimalistic web-app lets you focus on and keep track of the only important thing: __travelling__!

It allows you to annotate down the countries you would like to visit and the ones you've already visited: just click on the search field at the top and start typing. A nice _autocomplete_ feature will guide you through selecting the right country with the right spelling... Afterall, you don't want to take a flight ticket to the wrong place, do you?! We got you covered: use your mouse or keyboard to select the desired country.

Now, on your list, you have a bunch of countries with checkboxes on the side, well done... Tick the ones you have already been to and ignore the rest: those will be the ones you're aiming for. Visit those countries and only then check them off, don't cheat.

Other features:
- __Sorting__. All the countries are split in _visited/unvisited_ and then ordered _alphabetically_. Use the 📍 / ✈️&nbsp; icon to put unvisited first or vice versa according to your mood. Sometimes it's nice to put your goals a bit behind and look at what you've accomplished.

- __Themes__. Not a fan of bright colours? Do you fancy darkness, moisture and relaxing? Welcome to the club: use 🌙 &nbsp;/ 🔆&nbsp; icons to select your preferred theme.

- __Progress Tracking__. Whether you are competitive or not, seeing your adventurer percentage skyrocket will boost your dopamine and push you to the gates of the Milky Way, if that means you can achieve 100%.

- __Storage__. Are you afraid to lose your precious list and your preferred theme? Don't be, all your data will be saved for the next time. Be sure to use always the same device though, we have no fancy authentication at the moment.

- __Offline__. Are you on vacation in one of the destinations on the list but you're without internet and can't check it off the list? We all have been there... The web-app stores a list of all the countries of the world just in cases like this, no internet needed. You have to have used the app at least once before for this to work.

Good luck with your journey!

## 📡&nbsp; Technicalities

This app is made with __React__ and __Styled Components__.

Some of the implementations and features are:
- Context + Local Storage
- Global Theme + Local Storage
- Custom Hook + Local Storage
- Advanced **RegExp** usage for querying
- Custom-built **keyboard experience** when looking for countries
- Cool handmade algorithms for sorting and filtering
- **Horizontal scrolling** with mouse wheel on autocompletion
- **Debounced** search to improve performance
- Progress Circle updating in real-time
- Responsive and mobile-friendly
- **API fetching** with errors handling (in custom hook)
- **PropTypes**
- Simple architecture and little state used only where really needed (down in the tree)
- Clear documentation, only where and when needed
