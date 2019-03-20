import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import uniqid from 'uniqid';
import SquareTeaser from '../src/SquareTeaser';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #f1ded0;
        margin-top: 1rem;
        aside {
            > * {
                margin-bottom: 1rem;
            }
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        teaser: {
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
            subject: "Samenleving",
            readableAge: "6 uur",
            date: "17 Nov 1981",
            title: "Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'",
            description: "Identiteitspolitiek leidt zowel op links als op rechts tot uitwassen zoals de muur van Trump, zegt Francis Fukuyama. We kunnen ons beter druk maken over andere kwesties, zoals robotisering.",
            related: [{
                longread: true,
                title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
                url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                uuid: uniqid()
            }, {
                title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                uuid: uniqid()
            }]
        }
    };
    private themedImage = {
        src: 'https://images.fd.nl/25073a23c20a9c3ee07257ac31c2cf7de5c16792.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&h=640',
        alt: 'Maartje Laterveer'
    };
    private themedSourceSets = [{
        media: "(max-width:640px)",
        srcSet: `https://images.fd.nl/25073a23c20a9c3ee07257ac31c2cf7de5c16792.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&h=640`
    }, {
        media: "(max-width:860px)",
        srcSet: `https://images.fd.nl/25073a23c20a9c3ee07257ac31c2cf7de5c16792.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&h=230`
    }, {
        media: "(min-width:861px)",
        srcSet: `https://images.fd.nl/25073a23c20a9c3ee07257ac31c2cf7de5c16792.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&h=230`
    }];


    onBookmark = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget.classList.contains('selected')) {
            this.setState({teaser: {...this.state.teaser, bookmarked: false}});
        } else {
            this.setState({teaser: {...this.state.teaser, bookmarked: true}});
        }
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <SquareTeaser
                    {...this.state.teaser}
                    id={uniqid()}
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    comments={2}
                    updated={true}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    related={[]}
                    hideFooter={true}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    cardStyle="longread"
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme1"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme2"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme3"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme4"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme5"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme6"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme7"
                    comments={1}
                    onBookmark={this.onBookmark}
                />

                <SquareTeaser
                    {...this.state.teaser}
                    image={this.themedImage}
                    sourceSets={this.themedSourceSets}
                    figCaption="Maartje Laterveer"
                    theme="theme8"
                    comments={1}
                    onBookmark={this.onBookmark}
                />
            </>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
