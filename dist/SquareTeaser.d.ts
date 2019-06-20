import React from "react";
import { CardTypes } from "@fdmg/fd-card";
import { RelatedArticle, Theme, SourceSet } from "@fdmg/fd-teaser";
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
        src: string;
        alt: string;
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
export default function SquareTeaser(props: Props): JSX.Element;
/**
 * Used for the FD Style Guide Kitchensink
 */
export declare const SquareTeaserStyle: import("styled-components").FlattenSimpleInterpolation;
