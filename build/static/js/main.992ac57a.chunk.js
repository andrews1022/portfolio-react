(this["webpackJsonpproject-28-portfolio-react"]=this["webpackJsonpproject-28-portfolio-react"]||[]).push([[0],[,,,function(e,a,t){e.exports=t.p+"static/media/hero-image.ba7ce8f0.jpg"},function(e,a,t){e.exports=t.p+"static/media/new-westminster-cropped.1f35f700.jpg"},,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),s=t.n(c),l=function(e){var a=e.linkText;return r.a.createElement("li",{className:"nav__item"},r.a.createElement("a",{className:"nav__link",href:"#".concat(a.toLowerCase())},a))},o=function(e){var a=e.navLinks;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},a.map((function(e){return r.a.createElement(l,{key:e,linkText:e})}))))},m=t(3),i=t.n(m),u=function(e){var a=e.navLinks;return r.a.createElement("section",{className:"hero"},r.a.createElement(o,{navLinks:a}),r.a.createElement("img",{className:"hero__background",src:i.a,alt:"Blue jay holding a phone on Twitter"}),r.a.createElement("h1",{className:"hero__heading"},r.a.createElement("span",{className:"hero__heading-name"},"Andrew Shearer"),r.a.createElement("br",null),r.a.createElement("span",{className:"hero__heading-role"},"Web Developer")),r.a.createElement("span",{className:"hero__secret"},"That's me!"))},d=t(5),p=function(e){var a=e.project;return r.a.createElement("li",{className:"project-card"},r.a.createElement("div",{className:"project-card__header"},r.a.createElement("img",{className:"project-card__thumbnail",src:a.thumbnail,alt:"project screenshot"}),r.a.createElement("div",{className:"project-card__header-inner"},r.a.createElement("h2",{className:"project-card__title"},a.projectTitle),r.a.createElement("p",{className:"project-card__tech"},a.techUsed&&a.techUsed.map((function(e){return r.a.createElement("span",{key:e},"Tech Used: ",e," ")}))))),r.a.createElement("p",{className:"project-card__summary"},a.summary),r.a.createElement("div",{className:"project-card__icon-row"},a.codeLink&&r.a.createElement("a",{className:"project-card__link",href:a.codeLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"project-card__icon fab fa-github"})),a.liveLink&&r.a.createElement("a",{className:"project-card__link",href:a.liveLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"project-card__icon fas fa-desktop"}))))},_=function(e){var a=e.section,t=a.toLowerCase(),c=Object(n.useState)([]),s=Object(d.a)(c,2),l=s[0],o=s[1];return Object(n.useEffect)((function(){fetch("./assets/Projects.json").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),r.a.createElement("section",{className:t,id:t},r.a.createElement("h2",{className:"projects__heading"},a),r.a.createElement("ul",{className:"projects__list"},l.map((function(e){return r.a.createElement(p,{key:e.projectTitle,project:e})}))))},f=function(e){var a=e.toolText;return r.a.createElement("li",{className:"tool__text"},a)},E=t(4),h=t.n(E),N=function(e){var a=e.section,t=a.toLowerCase();return r.a.createElement("section",{className:t,id:t},r.a.createElement("div",{className:"about__row"},r.a.createElement("div",{className:"about__box"},r.a.createElement("img",{className:"about__image",src:h.a,alt:"Large W made of shipping containers in New Westminster, BC"})),r.a.createElement("div",{className:"about__box"},r.a.createElement("h2",{className:"about__heading"},a),r.a.createElement("p",{className:"about__copy"},"i'm a web developer with a passion for design from new westminster, bc. i've also built a few resources to help out fellow web developers."),r.a.createElement("p",{className:"about__copy"},"with web development, it was truly love at first site. i spend each and everyday either coding or designing. in fact, i quit my job so i could focus on learning it full time. if that doesn't scream passion, then i don't know what does."),r.a.createElement("h2",{className:"about__heading"},"My Tools"),r.a.createElement("ul",{className:"tool"},["JavaScript","React","TypeScript","CSS (Sass & Less)","HTML","Git","Adobe CC"].map((function(e){return r.a.createElement(f,{key:e,toolText:e})}))))))},b=function(){return r.a.createElement("form",{className:"form",name:"contact",method:"post"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form__input",type:"text",name:"name",id:"name",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form__input",type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:"form__label",htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form__input form__input--message",name:"message",id:"message",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{className:"form__input form__input--submit",type:"submit",value:"send"})))},v=function(e){var a=e.section.toLowerCase();return r.a.createElement("section",{className:a,id:a},r.a.createElement("div",{className:"contact__row"},r.a.createElement("div",{className:"contact__box"},r.a.createElement("h2",{className:"contact__heading"},"Get In Touch"),r.a.createElement("p",{className:"contact__copy"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.a.createElement("div",{className:"contact__social-row"},[{type:"Resume",icon:"fas fa-file-pdf",url:"./assets/resume.pdf"},{type:"LinkedIn",icon:"fab fa-linkedin",url:"https://www.linkedin.com/in/andrew-shearer-webdev/"},{type:"GitHub",icon:"fab fa-github",url:"https://github.com/andrews1022"}].map((function(e){return r.a.createElement("a",{href:e.url,key:e.type,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"contact__icon ".concat(e.icon)}))})))),r.a.createElement("div",{className:"contact__box"},r.a.createElement(b,null))))},g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 ",(new Date).getFullYear()," all rights reserved",r.a.createElement("span",{className:"footer__divider"}," | "),"designed and built and andrew shearer"))},w=(t(11),function(){var e=["Projects","About","Contact"];return r.a.createElement("div",{id:"app"},r.a.createElement(u,{navLinks:e}),r.a.createElement(_,{section:e[0]}),r.a.createElement(N,{section:e[1]}),r.a.createElement(v,{section:e[2]}),r.a.createElement(g,null))});console.log("Oh hi, Mark."),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.992ac57a.chunk.js.map