import React, { PureComponent } from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import { createGlobalStyle } from "styled-components";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import {
    RelatedArticle,
    TeaserFigure,
    TeaserFigureStyle,
    TeaserFooter,
    TeaserFooterStyle,
    TeaserRelated,
    TeaserRelatedStyle,
    Theme,
    UpdateLabel,
    UpdateLabelStyle,
    SourceSet} from "@fdmg/fd-teaser";

export interface Props {
    baseUrl: string;
    bookmarked?: boolean;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    cropRectangle?: string;
    date: string;
    description: string;
    figCaption?: string;
    hideFooter?: boolean;
    id: string;
    image?: {
        src: string,
        alt: string
    };
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    title: string;
    theme?: Theme;
    updated?: boolean;
    url: string;
}

export default class SquareTeaser extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle ? this.props.cardStyle : 'default'} id={this.props.id} className={`fd-square-teaser${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <a href={this.props.url}>
                        <TeaserFigure
                            figCaption={this.props.figCaption}
                            image={this.props.image}
                            sourceSets={this.props.sourceSets}
                            theme={this.props.theme}
                        />
                        <div className="meta">
                            {this.props.updated ? <UpdateLabel/> : <span className="prefix">{this.props.subject}</span>}
                            <time>{this.props.readableAge}</time>
                        </div>
                        <div className="text-container">
                            <TypoGraphy textStyle="square-teaser-h"><h1>{this.props.title}</h1></TypoGraphy>
                            {this.props.description ? <p className="intro">{this.props.description}</p> : null}
                        </div>
                    </a>
                    <TeaserRelated
                        items={this.props.related}
                    />
                    {this.props.hideFooter ? null : <TeaserFooter
                        baseUrl={this.props.baseUrl}
                        bookmarked={this.props.bookmarked}
                        comments={this.props.comments}
                        date={this.props.date}
                        description={this.props.description}
                        onBookmark={this.props.onBookmark}
                        shareTitle={this.props.shareTitle}
                        subject={this.props.subject}
                        teaserId={this.props.id}
                        title={this.props.title}
                        url={this.props.url}
                    />}
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-square-teaser {
    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;

    @media  only screen and (min-width: 641px) and (max-width: 861px) {
        padding-top: 45px;
    }

    .meta,
    .text-container {
        padding: 0 10px;
        @media only screen and (min-width: 641px) {
            padding: 0 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 0 15px;
        }
    }

    > a {
        width: 100%;
        color: #191919;
        display: inline-block;
        text-decoration: none;
        &:hover h1 {
            color: #49a4a2;
        }

        h1 {
            margin: 0;
        }

        figure {
            width: auto;
            margin: 0;
            margin-bottom: .625rem;
            float: none;
            @media  only screen and (min-width: 641px) and (max-width: 861px) {
                float: right;
                width: 115px;
                margin: 0 12px 12px 10px;
            }

            img {
                display: block;
                width: 100%;
            }
        }

        > .meta {
            font-family: 'ProximaNovaRegular',sans-serif;
            line-height: 1.2em;
            color: #677381;
            position: static;
            font-size: 0.8125rem;
            @media only screen and (min-width: 641px) {
                font-size: 0.875rem;
            }
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            margin: 0 0 .5rem 0;
            @media  only screen and (min-width: 641px) and (max-width: 861px) {
                position: absolute;
                top: 1rem;
                left: 0;
                right: 0;
            }
        }

        .text-container {
            margin-bottom: .5rem;
            p {
                display: none;
                margin: .2rem 0 .5rem 0;
                font-size: 1rem;
                @media only screen and (min-width: 641px) {
                    font-size: 1.0625rem;
                }
                @media  only screen and (min-width: 641px) and (max-width: 861px) {
                    display: block;
                }
            }
        }
    }
    &.longread a:hover h1 {
        color: #f05031;
    }

    @media only screen and (min-width: 861px) {
        .fd-teaser-footer {
            .icon-label {
                display: none;
            }
        }
    }

    @media only screen and (min-width: 861px) {
        .related {
            display: none;
        }
    }

    @media  only screen and (min-width: 641px) and (max-width: 861px) {
        figure {
            float: right;
        }
    }
}

.fd-teaser-figure {
    &.themed {
        @media only screen and (min-width: 641px) and (max-width: 860px) {
            &:before {
                padding-top: 100%;
            }
            &:after {
                border-bottom-color: transparent;
                border-left-color: #ffeadb;
                top: 50%;
                bottom: auto;
                left: 0;
                margin-left: 0;
            }
        }
        picture {
            @media only screen and (min-width: 641px) and (max-width: 860px) {
                top: 20px;
                margin: 0 -32%;
                width: 64%;
            }
        }

        figcaption {
            @media only screen and (min-width: 641px) and (max-width: 860px) {
                font-size: 1rem;
                bottom: 10px;
            }
        }
    }
}

.fd-square-teaser.persoonlijk {
    .fd-update-label {
        color: white;
    }
}

.fd-square-teaser.persoonlijk {
    .themed {
        figcaption {
            color: #f5f5f5;
        }
        &:after {
            border-bottom-color: #f5f5f5;
            @media only screen and (min-width: 641px) and (max-width: 860px) {
                border-bottom-color: transparent;
                border-left-color: #f5f5f5;
            }
        }
    }
}
`;

/**
 * Used for the FD Style Guide Kitchensink
 */
export const SquareTeaserStyle = createGlobalStyle`
${getAllCardStyles().globalStyle.rules}
${getAllTextStyles(['square-teaser-h']).globalStyle.rules}
${(UpdateLabelStyle as any).globalStyle.rules}
${(TeaserFigureStyle as any).globalStyle.rules}
${(TeaserRelatedStyle as any).globalStyle.rules}
${(TeaserFooterStyle as any).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
