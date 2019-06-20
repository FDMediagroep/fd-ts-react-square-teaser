module.exports=function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";var a=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},i=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t(2)),d=i(t(3)),l=t(4),m=i(t(5)),s=t(6);e.default=function(n){return o.default.createElement(o.default.Fragment,null,o.default.createElement(x,null),o.default.createElement(d.default,{cardStyle:n.cardStyle?n.cardStyle:"default",id:n.id,className:"fd-square-teaser"+(n.className?" "+n.className:"")},o.default.createElement("a",{href:n.url},o.default.createElement(s.TeaserFigure,{figCaption:n.figCaption,image:n.image,sourceSets:n.sourceSets,theme:n.theme}),o.default.createElement("div",{className:"meta"},n.updated?o.default.createElement(s.UpdateLabel,null):o.default.createElement("span",{className:"prefix"},n.subject),o.default.createElement("time",null,n.readableAge)),o.default.createElement("div",{className:"text-container"},o.default.createElement(m.default,{textStyle:"square-teaser-h"},o.default.createElement("h1",null,n.title)),n.description?o.default.createElement("p",{className:"intro"},n.description):null)),o.default.createElement(s.TeaserRelated,{items:n.related}),n.hideFooter?null:o.default.createElement(s.TeaserFooter,{baseUrl:n.baseUrl,bookmarked:n.bookmarked,comments:n.comments,date:n.date,description:n.description,onBookmark:n.onBookmark,shareTitle:n.shareTitle,subject:n.subject,teaserId:n.id,title:n.title,url:n.url})))};var f,p,c,u=l.css(f||(f=a(["\n.fd-square-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    @media  only screen and (min-width: 641px) and (max-width: 861px) {\n        padding-top: 45px;\n    }\n\n    .meta,\n    .text-container {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    > a {\n        width: 100%;\n        color: #191919;\n        display: inline-block;\n        text-decoration: none;\n        &:hover h1 {\n            color: #49a4a2;\n        }\n\n        h1 {\n            margin: 0;\n        }\n\n        figure {\n            width: auto;\n            margin: 0;\n            margin-bottom: .625rem;\n            float: none;\n            @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                float: right;\n                width: 115px;\n                margin: 0 12px 12px 10px;\n            }\n\n            img {\n                display: block;\n                width: 100%;\n            }\n        }\n\n        > .meta {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            line-height: 1.2em;\n            color: #677381;\n            position: static;\n            font-size: 0.8125rem;\n            @media only screen and (min-width: 641px) {\n                font-size: 0.875rem;\n            }\n            display: flex;\n            justify-content: space-between;\n            overflow: hidden;\n            margin: 0 0 .5rem 0;\n            @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                position: absolute;\n                top: 1rem;\n                left: 0;\n                right: 0;\n            }\n        }\n\n        .text-container {\n            margin-bottom: .5rem;\n            p {\n                display: none;\n                margin: .2rem 0 .5rem 0;\n                font-size: 1rem;\n                @media only screen and (min-width: 641px) {\n                    font-size: 1.0625rem;\n                }\n                @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                    display: block;\n                }\n            }\n        }\n    }\n    &.longread a:hover h1 {\n        color: #f05031;\n    }\n\n    @media only screen and (min-width: 861px) {\n        .fd-teaser-footer {\n            .icon-label {\n                display: none;\n            }\n        }\n    }\n\n    @media only screen and (min-width: 861px) {\n        .related {\n            display: none;\n        }\n    }\n\n    @media  only screen and (min-width: 641px) and (max-width: 861px) {\n        figure {\n            float: right;\n        }\n    }\n}\n\n.fd-teaser-figure {\n    &.themed {\n        @media only screen and (min-width: 641px) and (max-width: 860px) {\n            &:before {\n                padding-top: 100%;\n            }\n            &:after {\n                border-bottom-color: transparent;\n                border-left-color: #ffeadb;\n                top: 50%;\n                bottom: auto;\n                left: 0;\n                margin-left: 0;\n            }\n        }\n        picture {\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                top: 20px;\n                margin: 0 -32%;\n                width: 64%;\n            }\n        }\n\n        figcaption {\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                font-size: 1rem;\n                bottom: 10px;\n            }\n        }\n    }\n}\n\n.fd-square-teaser.persoonlijk {\n    .fd-update-label {\n        color: white;\n    }\n}\n\n.fd-square-teaser.persoonlijk {\n    .themed {\n        figcaption {\n            color: #f5f5f5;\n        }\n        &:after {\n            border-bottom-color: #f5f5f5;\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                border-bottom-color: transparent;\n                border-left-color: #f5f5f5;\n            }\n        }\n    }\n}\n"],["\n.fd-square-teaser {\n    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;\n\n    @media  only screen and (min-width: 641px) and (max-width: 861px) {\n        padding-top: 45px;\n    }\n\n    .meta,\n    .text-container {\n        padding: 0 10px;\n        @media only screen and (min-width: 641px) {\n            padding: 0 12px;\n        }\n        @media only screen and (min-width: 861px) {\n            padding: 0 15px;\n        }\n    }\n\n    > a {\n        width: 100%;\n        color: #191919;\n        display: inline-block;\n        text-decoration: none;\n        &:hover h1 {\n            color: #49a4a2;\n        }\n\n        h1 {\n            margin: 0;\n        }\n\n        figure {\n            width: auto;\n            margin: 0;\n            margin-bottom: .625rem;\n            float: none;\n            @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                float: right;\n                width: 115px;\n                margin: 0 12px 12px 10px;\n            }\n\n            img {\n                display: block;\n                width: 100%;\n            }\n        }\n\n        > .meta {\n            font-family: 'ProximaNovaRegular',sans-serif;\n            line-height: 1.2em;\n            color: #677381;\n            position: static;\n            font-size: 0.8125rem;\n            @media only screen and (min-width: 641px) {\n                font-size: 0.875rem;\n            }\n            display: flex;\n            justify-content: space-between;\n            overflow: hidden;\n            margin: 0 0 .5rem 0;\n            @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                position: absolute;\n                top: 1rem;\n                left: 0;\n                right: 0;\n            }\n        }\n\n        .text-container {\n            margin-bottom: .5rem;\n            p {\n                display: none;\n                margin: .2rem 0 .5rem 0;\n                font-size: 1rem;\n                @media only screen and (min-width: 641px) {\n                    font-size: 1.0625rem;\n                }\n                @media  only screen and (min-width: 641px) and (max-width: 861px) {\n                    display: block;\n                }\n            }\n        }\n    }\n    &.longread a:hover h1 {\n        color: #f05031;\n    }\n\n    @media only screen and (min-width: 861px) {\n        .fd-teaser-footer {\n            .icon-label {\n                display: none;\n            }\n        }\n    }\n\n    @media only screen and (min-width: 861px) {\n        .related {\n            display: none;\n        }\n    }\n\n    @media  only screen and (min-width: 641px) and (max-width: 861px) {\n        figure {\n            float: right;\n        }\n    }\n}\n\n.fd-teaser-figure {\n    &.themed {\n        @media only screen and (min-width: 641px) and (max-width: 860px) {\n            &:before {\n                padding-top: 100%;\n            }\n            &:after {\n                border-bottom-color: transparent;\n                border-left-color: #ffeadb;\n                top: 50%;\n                bottom: auto;\n                left: 0;\n                margin-left: 0;\n            }\n        }\n        picture {\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                top: 20px;\n                margin: 0 -32%;\n                width: 64%;\n            }\n        }\n\n        figcaption {\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                font-size: 1rem;\n                bottom: 10px;\n            }\n        }\n    }\n}\n\n.fd-square-teaser.persoonlijk {\n    .fd-update-label {\n        color: white;\n    }\n}\n\n.fd-square-teaser.persoonlijk {\n    .themed {\n        figcaption {\n            color: #f5f5f5;\n        }\n        &:after {\n            border-bottom-color: #f5f5f5;\n            @media only screen and (min-width: 641px) and (max-width: 860px) {\n                border-bottom-color: transparent;\n                border-left-color: #f5f5f5;\n            }\n        }\n    }\n}\n"]))),x=l.createGlobalStyle(p||(p=a(["",""],["",""])),u);e.SquareTeaserStyle=l.css(c||(c=a(["\n","\n","\n","\n","\n","\n","\n","\n"],["\n","\n","\n","\n","\n","\n","\n","\n"])),d.getAllCardStyles(),m.getAllTextStyles(["square-teaser-h"]),s.UpdateLabelStyle,s.TeaserFigureStyle,s.TeaserRelatedStyle,s.TeaserFooterStyle,u)},function(n,e){n.exports=require("react")},function(n,e){n.exports=require("@fdmg/fd-card")},function(n,e){n.exports=require("styled-components")},function(n,e){n.exports=require("@fdmg/fd-typography")},function(n,e){n.exports=require("@fdmg/fd-teaser")}]);