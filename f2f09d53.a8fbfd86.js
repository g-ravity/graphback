(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=(a(0),a(230));const i={title:"What is Graphback and how do I get started?",sidebar_label:"What is Graphback",id:"gettingstarted"},o={id:"version-0.10.x/gettingstarted",isDocsHomePage:!1,title:"What is Graphback and how do I get started?",description:"Graphback is a package and CLI tool that can help you bootstrap a GraphQL server and client for you including GraphQL schema, resolvers and generating database structure. Graphback addresses the difficulty in configuring a GraphQL server from scratch by giving developers:",source:"@site/versioned_docs/version-0.10.x/gettingstarted.md",permalink:"/docs/0.10.x/gettingstarted",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/gettingstarted.md",version:"0.10.x",sidebar_label:"What is Graphback",sidebar:"version-0.10.x/docs",next:{title:"Defining your Data Model",permalink:"/docs/0.10.x/datamodel"},latestVersionMainDocPermalink:"/docs/gettingstarted"},c=[{value:"Multiple ways of getting started",id:"multiple-ways-of-getting-started",children:[{value:"Start new project using Graphback and GraphQL CLI",id:"start-new-project-using-graphback-and-graphql-cli",children:[]}]},{value:"Adding Graphback to existing project using Graphback CLI",id:"adding-graphback-to-existing-project-using-graphback-cli",children:[]},{value:"Running Graphback in existing application without code generation",id:"running-graphback-in-existing-application-without-code-generation",children:[]},{value:"Creating and updating your database from your data model",id:"creating-and-updating-your-database-from-your-data-model",children:[]}],p={rightToc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Graphback is a package and CLI tool that can help you bootstrap a GraphQL server and client for you including GraphQL schema, resolvers and generating database structure. Graphback addresses the difficulty in configuring a GraphQL server from scratch by giving developers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Generated GraphQL Schema containing Queries and Mutations for general data access"),Object(r.b)("li",{parentName:"ul"},"Underlying resolvers to fetch data in performant way"),Object(r.b)("li",{parentName:"ul"},"Support for subscriptions and live updates on the data"),Object(r.b)("li",{parentName:"ul"},"Relational support"),Object(r.b)("li",{parentName:"ul"},"Database migrations for relational database of your choice using Knex.js framework"),Object(r.b)("li",{parentName:"ul"},"Extensible runtime layer for composing data services used in generated resolvers"),Object(r.b)("li",{parentName:"ul"},"Generated client side queries "),Object(r.b)("li",{parentName:"ul"},"Integration with other community libraries like graphql-config and graphql-code-generator"),Object(r.b)("li",{parentName:"ul"},"Component based approach allows to support different programimng languages.\nGraphback currently supports:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- Typescript\n- JavaScript\n- GQL (for Schema)\n")))),Object(r.b)("h2",{id:"multiple-ways-of-getting-started"},"Multiple ways of getting started"),Object(r.b)("p",null,"Graphback offers many ways of starting"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Using Graphback with most popular GraphQL boilerplates with GraphQL CLI"),Object(r.b)("li",{parentName:"ul"},"Adding Graphback to your existing project"),Object(r.b)("li",{parentName:"ul"},"Initializing Graphback in your code without code generation"),Object(r.b)("li",{parentName:"ul"},"Migrating your existing RESTfull api to GraphQL ")),Object(r.b)("h3",{id:"start-new-project-using-graphback-and-graphql-cli"},"Start new project using Graphback and GraphQL CLI"),Object(r.b)("p",null,"The best way to start with Graphback is to choose one of the available project boilerplates\navailable as part of official GraphQL CLI.\nGraphQL CLI integrates Graphback with other community libraries offering acomprehensive way to work with GraphQL APIs.\nYou can use any of the available GraphQL-CLI templates to bootstrap Graphback enabled project. "),Object(r.b)("p",null,"With yarn:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn global add graphql-cli@canary\n")),Object(r.b)("p",null,"With npm:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install -g graphql-cli@canary\n")),Object(r.b)("p",null,"Execute init command to create project from scratch"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"graphql init\n")),Object(r.b)("p",null,"Please answer all questions based on your preference.\nAfter project is created please follow project README file that might differ depending on\nthe template that was chosen on startup."),Object(r.b)("p",null,"GraphQL CLI offers various commands to interact with your project that work with the Graphback package.\nGraphback specific commands are available by executing ",Object(r.b)("inlineCode",{parentName:"p"},"graphql generate")," "),Object(r.b)("h2",{id:"adding-graphback-to-existing-project-using-graphback-cli"},"Adding Graphback to existing project using Graphback CLI"),Object(r.b)("p",null,"Graphback CLI can be used to add code generation capabilities to your existing applications"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g graphback-cli\ngraphback config <project-name>\n")),Object(r.b)("p",null,"Follow the onscreen instructions."),Object(r.b)("p",null,"You can use Graphback with either a SQLite (for prototyping) or PostgreSQL (for production) databases."),Object(r.b)("p",null,"If you use SQLite, you don't need to use Docker."),Object(r.b)("h2",{id:"running-graphback-in-existing-application-without-code-generation"},"Running Graphback in existing application without code generation"),Object(r.b)("p",null,"Graphback offers runtime layer that will create an in-memory implementation of the graphql services without code generation.\nDevelopers can still customize the way that data is queried and cached thanks to runtime architecture.\nFor more information about runtime layer please follow ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/runtime"}),Object(r.b)("inlineCode",{parentName:"a"},"runtime"))," documentation"),Object(r.b)("h2",{id:"creating-and-updating-your-database-from-your-data-model"},"Creating and updating your database from your data model"),Object(r.b)("p",null,"Graphback will create or update the database configured in ",Object(r.b)("inlineCode",{parentName:"p"},"graphback.json")," file, using the types defined in your data model."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),"type User {\n  id: ID!\n  name: String\n}\n")),Object(r.b)("p",null,"When ready, run ",Object(r.b)("inlineCode",{parentName:"p"},"graphback db")," in your terminal to create or update your database structure."),Object(r.b)("p",null,"This creates a ",Object(r.b)("inlineCode",{parentName:"p"},"user")," table with ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"name")," columns. Each type must have an ",Object(r.b)("inlineCode",{parentName:"p"},"id: ID!")," field which creates a primary key in the database table."),Object(r.b)("p",null,"If you want to customise your database structure, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./database-schema-migrations#defining-your-data-model"}),"Database Schema Migrations"),"."),Object(r.b)("p",null,"You can create relationships between tables directly in your model:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gql"}),"type User {\n  id: ID!\n  name: String\n  messages: [Message]\n}\n\ntype Message {\n  id: ID!\n  title: String\n  body: String\n  user: User!\n}\n")),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"graphback db")," again to update your existing database structure with the new table."),Object(r.b)("p",null,"This creates a ",Object(r.b)("inlineCode",{parentName:"p"},"message")," table with the ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"title"),", ",Object(r.b)("inlineCode",{parentName:"p"},"body")," columns and the ",Object(r.b)("inlineCode",{parentName:"p"},"userId")," foreign key column that references ",Object(r.b)("inlineCode",{parentName:"p"},"user.id"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./relationships"}),"Database Relationships")," on the different relationships kinds and how you can customise them further."))}l.isMDXComponent=!0},230:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);