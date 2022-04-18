# N/B: THIS REPO IS ARCHIVED

## Archive Notes

1. Don't judge me too harshly on this; It was my very first react project 😀
2. What I'd do differently today:
   - Typescript!
   - React Hooks
   - A tiny nodejs backend to obfuscate the stream endpoint. That or server side rendering
   - Some sort of a cache to enable a small rewind-forward capability (mp3 binary in redis? 🤷🏿‍♂️)
   - Actual sound wave bar graph (circular sound wave?) preferably in WASM. See [this](https://www.linkedin.com/posts/machariamuguku_webaudio-javascript-activity-6690955692611772416-ZGS0)
3. Might revisit this in the future

---
<br />

# Reactjs online radio player for Homeboyz Radio (hbr 103.5)

A ReactjS Online radio station for my favorite Kenyan radio station Homeboyz Radio (hbr 103.5).

## Demo Site

[homeboyz.herokuapp.com](http://homeboyz.herokuapp.com).

## N/B

0. [Linked-in post with Video Preview and Project Motivation](https://www.linkedin.com/posts/machariamuguku_reactjs-npm-100daysofcode-activity-6523852154598354944-WpOr)
1. Web Audio Api doesn't play nice with mobile browsers.
2. That being said though, i optimized the site for mobile.
3. I tested it on chrome for android and it works.
4. You can control the site with the mouse or the keyboard
5. Add a .env file in the structure of .env.sample (or rename sample and fill in the blanks).
6. Recommended places to scrap for the url: [hbr tunein site](https://tunein.com/radio/Homeboyz-Radio-1035-s78058/) or [hbr online player](http://www.hbr.co.ke)

## The technology stack

Reactjs, Heroku Cli, Sass, Web Audio API and an npm module called React Player.

## Screenshots

1. Landing Page
   ![picture alt](./src/resources/screenshots/hbr_landing_page.png "hbr_landing_page")

2. HBR Playing
   ![picture alt](./src/resources/screenshots/hbr_playing.png "hbr_playing")

3. HBR Muted
   ![picture alt](./src/resources/screenshots/hbr_muted.png "hbr_muted")

4. HBR Buffering
   ![picture alt](./src/resources/screenshots/hbr_buffering.png "hbr_buffering")

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[GNU - gpl-3.0](https://choosealicense.com/licenses/gpl-3.0/)
