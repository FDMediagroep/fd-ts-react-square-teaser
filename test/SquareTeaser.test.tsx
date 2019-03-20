import TestRenderer from 'react-test-renderer';
import SquareTeaser from '../src/SquareTeaser';
import React from 'react';

describe('SquareTeaser', () => {
    const teaserData: any = {
        bookmarked: false,
        id: "1292665",
        baseUrl: "https://fd.nl",
        url: "https://fd.nl/futures/1292665/een-muur-bouwen-is-makkelijker-dan-robots-stukslaan",
        image: {
            src: 'https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663',
            alt: 'Amsterdam doet ertoe'
        },
        sourceSets: [{
            media: "(max-width: 640px)",
            srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
        }, {
            media: "(max-width: 860px)",
            srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=.20625%2C.0%2C.66625%2C.9999999999999999`
        }, {
            media: "(min-width: 861px)",
            srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=300&h=169&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
        }],
        figCaption: "Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'",
        onBookmark: () => {},
        subject: "Samenleving",
        readableAge: "6 uur",
        date: "17 Nov 1981",
        title: "Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'",
        description: "Identiteitspolitiek leidt zowel op links als op rechts tot uitwassen zoals de muur van Trump, zegt Francis Fukuyama. We kunnen ons beter druk maken over andere kwesties, zoals robotisering.",
        related: [{
            longread: true,
            title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
            url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
            uuid: "1234"
        }, {
            title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
            url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
            uuid: "12345"
        }]
    };

    test('renders correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders bookmarked correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} bookmarked={true}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders multiple comments correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} comments={99}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden footer correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} hideFooter={true}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden meta correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} hideMeta={true}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders hidden related correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} hideRelated={true}/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders longread correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} cardStyle='longread'/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} cardStyle='persoonlijk'/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk longread correctly', () => {
        let squareTeaser = TestRenderer.create(<SquareTeaser {...teaserData} cardStyle='persoonlijk longread'/>);
        expect(squareTeaser.toJSON()).toMatchSnapshot();
    });

});
