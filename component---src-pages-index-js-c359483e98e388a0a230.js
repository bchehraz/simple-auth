(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(193),l=t(198),c=t(195),o=t(204);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,null),r.a.createElement(c.a,{title:"Simple Authentication Example(!!!)"},r.a.createElement("p",null,"This is a simple example of creating dynamic apps with Gatsby that require user authentication. It uses concepts from the"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/docs/building-apps-with-gatsby/#client-only-routes"},"client-only routes section")," ","of the “Building Apps with Gatsby” documentation."),r.a.createElement("p",null,"For the full experience, go to"," ",r.a.createElement(i.a,{to:"/app/profile"},"your profile"),".")))}},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(66),l=t.n(i);t.d(a,"a",function(){return l.a}),t.d(a,"b",function(){return i.navigate});t(194),t(9).default.enqueue,r.a.createContext({})},194:function(e,a,t){var n;e.exports=(n=t(197))&&n.default||n},195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(203),l=t.n(i);a.a=function(e){var a=e.title,t=e.children;return r.a.createElement("section",{className:l.a.view},r.a.createElement("h1",{className:l.a.view__heading},a),t)}},196:function(e,a,t){"use strict";t.d(a,"b",function(){return l}),t.d(a,"c",function(){return c}),t.d(a,"a",function(){return o}),t.d(a,"d",function(){return s});var n="undefined"!=typeof window,r=function(){return window.localStorage.gatsbyUser?JSON.parse(window.localStorage.gatsbyUser):{}},i=function(e){return window.localStorage.gatsbyUser=JSON.stringify(e)},l=function(e){var a=e.username,t=e.password;return!!n&&("gatsby"===a&&"demo"===t&&(console.log("Credentials match! Setting the active user."),i({name:"Jim",legalName:"James K. User",email:"jim@example.org"})))},c=function(){return!!n&&!!r().email},o=function(){return n&&r()},s=function(e){n&&(console.log("Ensuring the `gatsbyUser` property exists."),i({}),e())}},197:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),i=t(92);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null}},198:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(199),l=t(193),c=t(200),o=t.n(c),s=function(){return r.a.createElement("header",{className:o.a.header},r.a.createElement("div",{className:o.a.header__wrap},r.a.createElement("h1",{className:o.a.header__heading},r.a.createElement(l.a,{to:"/",className:o.a.header__link+" "+o.a["header__link--home"]},"Gatsby Profiles")),r.a.createElement("nav",{role:"main",className:o.a.header__nav},r.a.createElement(l.a,{to:"/",className:o.a.header__link},"Home"),r.a.createElement(l.a,{to:"/app/profile",className:o.a.header__link},"Profile"),r.a.createElement(l.a,{to:"/app/details",className:o.a.header__link},"Details"))))},u=(t(201),t(202)),m=t.n(u);a.a=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(i.Helmet,{title:"Event/Booking + Email Authentication + GraphQL + MongoDB"}),r.a.createElement(s,null),r.a.createElement("main",{className:m.a.main},a))}},204:function(e,a,t){"use strict";t(38);var n=t(0),r=t.n(n),i=t(22),l=t(196),c=t(206),o=t.n(c);a.a=function(){var e;if(Object(l.c)()){var a=Object(l.a)(),t=a.name,n=a.email;e=r.a.createElement("p",{className:o.a.status__text},"Logged in as ",t," (",n,")!"," ",r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),Object(l.d)(function(){return Object(i.navigate)("/app/login")})}},"log out"))}else e=r.a.createElement("p",{className:o.a.status__text},"To get the full app experience, you’ll need to"," ",r.a.createElement(i.Link,{to:"/app/login"},"log in"),".");return r.a.createElement("div",{className:o.a.status},e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c359483e98e388a0a230.js.map