(this["webpackJsonpproject-28-portfolio-react"]=this["webpackJsonpproject-28-portfolio-react"]||[]).push([[0],[,,,function(e,a,t){e.exports=t.p+"static/media/hero-image.ba7ce8f0.jpg"},function(e,a,t){e.exports=t.p+"static/media/new-westminster-cropped.1f35f700.jpg"},,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),o=function(e){var a=e.linkText;return r.a.createElement("li",{className:"nav__item"},r.a.createElement("a",{className:"nav__link",href:"#".concat(a.toLowerCase())},a))},s=function(e){var a=e.navLinks;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},a.map((function(e){return r.a.createElement(o,{key:e,linkText:e})}))))},m=t(3),i=t.n(m),u=function(e){var a=e.navLinks;return r.a.createElement("header",{className:"hero"},r.a.createElement(s,{navLinks:a}),r.a.createElement("h1",{className:"hero__heading"},r.a.createElement("span",{className:"hero__heading-name"},"Andrew Shearer"),r.a.createElement("br",null),r.a.createElement("span",{className:"hero__heading-role"},"Web Developer")),r.a.createElement("img",{className:"hero__background",src:i.a,alt:"Blue jay holding a phone on Twitter"}))},p=t(5),d=function(e){var a=e.project;return r.a.createElement("li",{className:"project-card"},r.a.createElement("div",{className:"project-card__header"},r.a.createElement("img",{className:"project-card__thumbnail",src:a.thumbnail,alt:"project screenshot"}),r.a.createElement("div",{className:"project-card__header-inner"},r.a.createElement("h2",{className:"project-card__title"},a.projectTitle),r.a.createElement("p",{className:"project-card__tech"},a.techUsed&&r.a.createElement("span",null,"Tech Used: "),a.techUsed&&a.techUsed.map((function(e,a,t){return r.a.createElement("span",{key:e},e,a!==t.length-1?", ":"")}))))),r.a.createElement("p",{className:"project-card__summary"},a.summary),r.a.createElement("div",{className:"project-card__icon-row"},a.codeLink&&r.a.createElement("a",{className:"project-card__link",href:a.codeLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"project-card__icon fab fa-github"})),a.liveLink&&r.a.createElement("a",{className:"project-card__link",href:a.liveLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"project-card__icon fas fa-desktop"}))))},_=function(e){return r.a.createElement("h2",{className:"heading text-".concat(e.color),style:e.style},e.text)},f=function(e){var a=e.section,t=a.toLowerCase(),c=Object(n.useState)([]),l=Object(p.a)(c,2),o=l[0],s=l[1];return Object(n.useEffect)((function(){fetch("./assets/Projects.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),r.a.createElement("section",{className:t,id:t},r.a.createElement(_,{text:a,color:"maire"}),r.a.createElement("ul",{className:"projects__list"},o.map((function(e){return r.a.createElement(d,{key:e.projectTitle,project:e})}))))},E=function(e){var a=e.toolText;return r.a.createElement("li",{className:"tool__text"},a)},h=t(4),N=t.n(h),v=function(e){var a=e.section,t=a.toLowerCase();return r.a.createElement("section",{className:t,id:t},r.a.createElement("div",{className:"about__row"},r.a.createElement("div",{className:"about__box"},r.a.createElement("img",{className:"about__image",src:N.a,alt:"Large W made of shipping containers in New Westminster, BC"})),r.a.createElement("div",{className:"about__box"},r.a.createElement(_,{text:a,color:"white-smoke"}),r.a.createElement("p",{className:"about__copy"},"I\u2019m a web developer with a passion for learning from New Westminster, BC. I\u2019ve also built a few resources to help out fellow web developers."),r.a.createElement("p",{className:"about__copy"},"With web development, it was truly love at first site. I spend each and everyday coding and learning. In fact, I quit my job so I could focus getting into the industry full time, and it worked. If that doesn't scream passion, then I don't know what does."),r.a.createElement(_,{text:"My Tools",color:"white-smoke"}),r.a.createElement("ul",{className:"tool"},["JavaScript","React","TypeScript","CSS (Sass & Less)","HTML","Git","Adobe CC"].map((function(e){return r.a.createElement(E,{key:e,toolText:e})}))))))},b=function(){return r.a.createElement("form",{className:"form",name:"contact",method:"post"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form__input",type:"text",name:"name",id:"name",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form__input",type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form__input form__input--message",name:"message",id:"message",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{className:"form__input form__input--submit",type:"submit",value:"send"})))},g=function(e){var a=e.section.toLowerCase();return r.a.createElement("section",{className:a,id:a},r.a.createElement("div",{className:"contact__row"},r.a.createElement("div",{className:"contact__box"},r.a.createElement(_,{text:"Get In Touch",color:"maire"}),r.a.createElement("p",{className:"contact__copy"},"If you think I\u2019d make a great fit for your team, feel free to send me a message, or reach out to me on LinkedIn!"),r.a.createElement("div",{className:"contact__icon-row"},[{type:"Resume",icon:"fas fa-file-pdf",url:"./assets/resume.pdf"},{type:"GitHub",icon:"fab fa-github",url:"https://github.com/andrews1022"},{type:"LinkedIn",icon:"fab fa-linkedin",url:"https://www.linkedin.com/in/andrew-shearer-webdev/"}].map((function(e){return r.a.createElement("a",{className:"contact__icon-link",href:e.url,key:e.type,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"contact__icon ".concat(e.icon)}))})))),r.a.createElement("div",{className:"contact__box"},r.a.createElement(b,null))))},k=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 ",(new Date).getFullYear()," all rights reserved",r.a.createElement("span",{className:"footer__divider"}," | "),"designed and built and andrew shearer"))},w=(t(11),function(){var e=["Projects","About","Contact"];return r.a.createElement("div",{id:"app"},r.a.createElement(u,{navLinks:e}),r.a.createElement(f,{section:e[0]}),r.a.createElement(v,{section:e[1]}),r.a.createElement(g,{section:e[2]}),r.a.createElement(k,null))});console.log("Oh hi, Mark."),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.639c7d3e.chunk.js.map