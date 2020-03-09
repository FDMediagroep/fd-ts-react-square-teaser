[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-square-teaser.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-square-teaser)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-square-teaser/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-square-teaser?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-square-teaser.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-square-teaser)


# fd-square-teaser
FD-themed square teaser.

# Installation
* Run `npm i -D @fdmg/fd-square-teaser`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/square-teaser/demo.html)

# Usage
```
import SquareTeaser from '@fdmg/fd-square-teaser';
...
<SquareTeaser
    id="1292665"
    baseUrl="https://fd.nl"
    url="https://fd.nl/futures/1292665/een-muur-bouwen-is-makkelijker-dan-robots-stukslaan"
    image={{
        src: 'https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663',
        alt: 'Amsterdam doet ertoe'
    }}
    sourceSets={[{
        media: "(max-width:640px)",
        srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
    }, {
        media: "(max-width:860px)",
        srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=.20625%2C.0%2C.66625%2C.9999999999999999`
    }, {
        media: "(min-width:861px)",
        srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=300&h=169&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
    }]}
    figCaption="Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'"
    subject="Samenleving"
    readableAge="6 uur"
    date="17 Nov 1981"
    title="Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'"
    description="Identiteitspolitiek leidt zowel op links als op rechts tot uitwassen zoals de muur van Trump, zegt Francis Fukuyama. We kunnen ons beter druk maken over andere kwesties, zoals robotisering."
    related={[{
        longread: true,
        title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
        url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
        uuid: 12345
    }, {
        title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
        url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
        uuid: 123456
    }]}
/>
```
