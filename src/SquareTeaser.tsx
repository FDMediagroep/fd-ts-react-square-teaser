import React from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import { createGlobalStyle, css } from "styled-components";
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

export default function SquareTeaser(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <Card cardStyle={props.cardStyle ? props.cardStyle : 'default'} id={props.id} className={`fd-square-teaser${props.className ? ` ${props.className}` : ''}`}>
                <a href={props.url}>
                    <TeaserFigure
                        figCaption={props.figCaption}
                        image={props.image}
                        sourceSets={props.sourceSets}
                        theme={props.theme}
                    />
                    <div className="meta">
                        {props.updated ? <UpdateLabel/> : <span className="prefix">{props.subject}</span>}
                        <time>{props.readableAge}</time>
                    </div>
                    <div className="text-container">
                        <TypoGraphy textStyle="square-teaser-h"><h1>{props.title}</h1></TypoGraphy>
                        {props.description ? <p className="intro">{props.description}</p> : null}
                    </div>
                </a>
                <TeaserRelated
                    items={props.related}
                />
                {props.hideFooter ? null : <TeaserFooter
                    baseUrl={props.baseUrl}
                    bookmarked={props.bookmarked}
                    comments={props.comments}
                    date={props.date}
                    description={props.description}
                    onBookmark={props.onBookmark}
                    shareTitle={props.shareTitle}
                    subject={props.subject}
                    teaserId={props.id}
                    title={props.title}
                    url={props.url}
                />}
            </Card>
        </>
    );
}

const styles = css`
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
export const SquareTeaserStyle = css`
${getAllCardStyles()}
${getAllTextStyles(['square-teaser-h'])}
${UpdateLabelStyle}
${TeaserFigureStyle}
${TeaserRelatedStyle}
${TeaserFooterStyle}
${styles}
`;

const GlobalStyle = createGlobalStyle`${SquareTeaserStyle}`;
