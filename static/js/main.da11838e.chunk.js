(this.webpackJsonphookproject=this.webpackJsonphookproject||[]).push([[0],{28:function(n,e,t){n.exports=t(57)},33:function(n,e,t){},34:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(22),o=t.n(i),c=(t(33),t(1)),l=(t(34),t(2)),m=t(4),u=t(23),d=t.n(u),s=Object(a.createContext)(),p=function(n){var e=Object(a.useState)([]),t=Object(m.a)(e,2),i=t[0],o=t[1],c=Object(a.useState)(!0),l=Object(m.a)(c,2),u=l[0],p=l[1],x=Object(a.useCallback)((function(n,e){d.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=",n),{headers:{Authorization:"Bearer ".concat("6sPARDxWYMNezLcGXFC0q05C-V7DHH7fSZXxqWhcE5HJXn_EleVMRmV2Yj5iZeSxypZzILfwKpgzFN7IfTFYe8b9DbAb5SrKgkcuaD2ZV7An4B8rqKqA8k4x3ULKXnYx")},params:{categories:e,limit:1,open_now:!0}}).then((function(n){console.log(n.data.businesses[0]),o(n.data.businesses[0]),p(!1)})).catch((function(n){console.log("error")}))}),[]);return Object(a.useEffect)((function(){x("US","Breakfast")}),[x]),r.a.createElement(s.Provider,{value:{recommendations:i,loading:u,runSearch:x}},n.children)};function x(){var n=Object(c.a)(["\n    display: block;\n    font-size: 1em;\n    margin: 15px 15px 15px 15px; \n    padding: 10px;\n    background-color: #E34B44;\n    border: none;\n    color: #FFFFFF;\n    font-weight: bold;\n    text-shadow: none;\n\n    &:hover {\n        background: #F22613;\n        color: #fafafa;\n        cursor: pointer;\n        border: none;\n    }\n"]);return x=function(){return n},n}function f(){var n=Object(c.a)(["\n    flex-grow: 1;\n    border-width: 0 0 1px 0;\n    margin: 15px 10px 15px 15px;\n    padding: 10px;\n    background-color: #F8F8F8;\n    border-style: none;\n    text-shadow: none;\n    color: #5f6368;\n    outline: none;\n\n    &:focus {\n        background-color:#FFFFFF;\n    }\n"]);return f=function(){return n},n}function g(){var n=Object(c.a)(["\n    flex-grow: 1;\n    border-width: 0 0 1px 0;\n    margin: 15px 10px 15px 15px;\n    padding: 10px;\n    background-color: #F8F8F8;\n    border-style: none;\n    text-shadow: none;\n    color: #5f6368;\n    outline: none;\n\n    &:focus {\n        background-color: #FFFFFF;\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(c.a)(["\n    display: flex;\n    background-color: #19B5FE;\n"]);return h=function(){return n},n}var b=l.a.form(h()),w=l.a.input(g()),v=l.a.input(f()),E=l.a.input(x()),k=function(){var n=Object(a.useContext)(s).runSearch,e=Object(a.useState)(""),t=Object(m.a)(e,2),i=t[0],o=t[1],c=Object(a.useState)(""),l=Object(m.a)(c,2),u=l[0],d=l[1];return r.a.createElement(b,{onSubmit:function(e){e.preventDefault(),i&&u&&(n(i,u),o(""),d(""))}},r.a.createElement(w,{type:"text",value:i,onChange:function(n){return o(n.target.value)},placeholder:"Location (Melbourne)"}),r.a.createElement(v,{type:"text",value:u,onChange:function(n){return d(n.target.value)},placeholder:"Type (Breakfast)"}),r.a.createElement(E,{type:"submit",value:"Search"}))};function j(){var n=Object(c.a)(["\n    display: flex;\n    height: auto;\n    width: 355px;\n    margin: auto;\n    margin-top: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    border: 0.75px solid #e5e5e5;\n    border-radius: 7px;\n    background-color: #fcfcfc;\n    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);\n    @media (max-width: 1000px){\n        width: 275px;\n    }\n    @media (max-width: 769px){\n        min-width: 400px;\n        width: 70%;\n        flex: 1 1 50%;\n    }\n    @media (max-width: 415px){\n        min-width: 330px;\n        width: 70%;\n    }\n    @media (max-width: 360px){\n        min-width: 275px;\n        width: 70%;\n    }\n\n"]);return j=function(){return n},n}var y=l.a.div(j()),O=function(){return r.a.createElement(y,null," Loading... ")};function F(){var n=Object(c.a)(["\n    align-self: flex-end;\n    \n"]);return F=function(){return n},n}function N(){var n=Object(c.a)(["\n    font-weight: 500;\n    margin-bottom: 4em;\n    color: #FF69B4;\n"]);return N=function(){return n},n}function z(){var n=Object(c.a)(["\n    margin: 1em 1.5em;\n    font-family: Inter, sans-serif;\n    font-size: 18px;\n    font-weight: 400;\n    height: 18rem;\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n    margin: 0em auto 1em;\n    font-family: Inter, sans-serif;\n    font-size: 18px;\n    font-weight: 350;\n    color: #FFFFFF;\n"]);return C=function(){return n},n}function I(){var n=Object(c.a)(["\n    margin: 1px auto;\n    font-family: Inter, sans-serif;\n    font-size: 22px;\n    font-weight: 500;\n    color: #FFFFFF;\n"]);return I=function(){return n},n}function S(){var n=Object(c.a)(['\n    display: flex;\n    height: 18rem;\n    width: 34rem;\n    margin: 1rem 2rem 1.5rem 2rem;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border: 0.75px solid #e5e5e5;\n    background-image: url("/images/back.jpg");\n    background-position: center;\n    background-size: cover;\n    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);\n    &:hover {\n        cursor: pointer;\n    }\n    @media (max-width: 415px){\n        width: 30rem;\n    }\n\n']);return S=function(){return n},n}function _(){var n=Object(c.a)(['\n    display: flex;\n    height: 18rem;\n    width: 34rem;\n    margin: 1rem 2rem 1.5rem 2rem;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n    border: 0.75px solid #e5e5e5;\n    background-image: url("/images/front.jpg");\n    background-position: center;\n    background-size: cover;\n    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);\n    &:hover {\n        cursor: pointer;\n    }\n    @media (max-width: 415px){\n        width: 30rem;\n    }\n\n']);return _=function(){return n},n}var B=l.a.div(_()),L=l.a.div(S()),A=l.a.div(I()),Y=l.a.div(C()),q=l.a.div(z()),D=l.a.div(N()),M=l.a.div(F()),R=function(){var n=Object(a.useContext)(s),e=n.recommendations,t=n.loading,i=Object(a.useState)(!0),o=Object(m.a)(i,2),c=o[0],l=o[1],u=function(){l(!c)};return t?r.a.createElement(O,null):c?r.a.createElement(B,{onClick:u},r.a.createElement(A,null,e.name),r.a.createElement(Y,null,e.categories[0].title)):r.a.createElement(L,{onClick:u},r.a.createElement(q,null,r.a.createElement(D,null,r.a.createElement("div",null,"Rating: ",e.rating),r.a.createElement("div",null,"Price: ",e.price),r.a.createElement("div",null,"Review counts: ",e.review_count)),r.a.createElement(M,null,r.a.createElement("div",null,"Phone: ",e.phone),r.a.createElement("div",null,"Address: ",e.location.address1))))};function V(){var n=Object(c.a)(["\n    flex-grow: 1.5;\n    font-family: 'Inter', sans-serif;\n    color: #5f6368;\n    // margin: 0em 1em 0em 1em;\n    font-weight: 300;\n    font-size: 1.5em;\n    line-height: 1.6em;\n    @media (max-width: 769px){\n        margin-top: 32px;\n        text-align: center;\n    }\n    @media (max-width: 360px){\n        font-size: 0.8em; \n    }\n"]);return V=function(){return n},n}function W(){var n=Object(c.a)(["\n    flex-grow: 1;\n    width: 34rem;\n    margin: 2rem 2rem 2rem 2rem;\n    font-size: 24px;\n    line-height: 1.3;\n    font-family: Inter, sans-serif;\n    font-weight: 500;\n    text-align: center;\n    letter-spacing: -1px;\n    @media (max-width: 1000px){\n        font-size: 28px;\n        line-height: 1.3;\n        margin-bottom: 10px;\n        margin-top: 0px;\n    }\n    @media (max-width: 769px){\n        font-size: 38px;\n        line-height: 1.3;\n        margin-bottom: 20px;\n        margin-top: 50px;\n        text-align: center;\n    }\n    @media (max-width: 415px){\n        font-size: 24px;\n        line-height: 1.3;\n        width: 30em;\n        padding: 0em 2em;\n        margin: 1em;\n    }\n"]);return W=function(){return n},n}function H(){var n=Object(c.a)(["\n    flex-grow: 0.5;\n    margin-bottom: auto;\n    padding-top: 3%; \n    margin: 1rem 2rem 0rem 2rem;\n    width: 34rem;\n    @media (max-width: 1000px){\n        flex-grow: 0.5;\n    }\n    @media (max-width: 769px){\n        flex-grow: 1;\n        margin-bottom: auto;\n        padding-top: 20%;\n        margin: auto;\n    }\n    @media (max-width: 415px){\n        width: 30em;\n    }\n"]);return H=function(){return n},n}function K(){var n=Object(c.a)(["\n    display: flex; \n    margin-top: 20px;\n    height: auto;\n    flex-direction: column;\n    align-items: flex-start;\n    @media (max-width: 1000px){\n        display: flex; \n        margin-top: 20px;\n        flex-direction: column;\n        align-items: flex-start;\n    }\n    @media (max-width: 769px){\n        height: auto;\n    }\n"]);return K=function(){return n},n}var P=l.a.div(K()),T=l.a.div(H()),X=l.a.div(W()),Z=l.a.div(V()),J=function(){var n=Object(a.useContext)(s),e=n.recommendations;return n.loading?r.a.createElement(O,null):r.a.createElement(P,null,r.a.createElement(T,null,r.a.createElement(k,null)),r.a.createElement(X,null,"You're searching for a ",e.categories[0].title," restaurant in ",e.location.city," !!! Click the card below for more details!"),r.a.createElement(Z,null,r.a.createElement(R,null)))},U=t(27),G=t.n(U);function $(){var n=Object(c.a)(["\n    width: 353.5px;\n    height: 353.5px;\n    margin-top: auto; \n    background-size: cover;\n    background-position: center;\n    border-bottom-left-radius: 7px;\n    border-bottom-right-radius: 7px;\n    background-image: url(",");\n\n"]);return $=function(){return n},n}function Q(){var n=Object(c.a)(["\n    -webkit-box-orient: vertical;\n    margin-top: 15px;\n    margin-right: 15px;\n    margin-bottom: 15px;\n    margin-left: 15px;\n    font-family: 'Inter beta', sans-serif;\n    font-weight: 300;\n    font-size: 14px;\n    display: -webkit-box;\n    max-width: 400px;\n    height: 5em;\n    @media (max-width: 769px){\n        margin-right: 25px;\n        margin-bottom: 25px;\n        margin-left: 25px;\n        font-size: 16px;\n        font-weight: 300;\n    }\n    @media (max-width: 360px){\n        margin-right: 10px;\n        margin-left: 10px;\n    }\n\n"]);return Q=function(){return n},n}function nn(){var n=Object(c.a)(["\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 0px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    font-family: 'Inter beta', sans-serif;\n    font-weight: 300;\n    @media (max-width: 769px){\n        margin-top: 10px;\n    }\n\n"]);return nn=function(){return n},n}function en(){var n=Object(c.a)(["\n    font-family: Inter, sans-serif;\n    font-weight: 600;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n    margin-bottom: 5px;\n    font-family: Inter, sans-serif;\n    font-size: 18px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    @media (max-width: 769px){\n        font-size: 24px;\n        font-weight: 500;\n    }\n"]);return tn=function(){return n},n}function an(){var n=Object(c.a)(["\n    margin-left: 20px;\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    white-space: nowrap; \n    overflow: hidden;\n    text-overflow: ellipsis; \n    max-width: 250px;\n    @media (max-width: 769px){\n        margin-left: 25px;\n        max-width: 250px;\n    }\n    @media (max-width: 415px){\n        margin-left: 10px;\n        max-width: 200px;\n    }\n    @media (max-width: 360px){\n        margin-left: 10px;\n        max-width: 150px;\n    }\n\n"]);return an=function(){return n},n}function rn(){var n=Object(c.a)(['\n    border-radius: 100%;\n    width: 75px;\n    height: 75px;\n    background-size: cover;\n    background-position: center;\n    background-image: url("/images/child.svg");\n    @media (max-width: 769px){\n        width: 100px;\n        height: 100px;\n    }\n']);return rn=function(){return n},n}function on(){var n=Object(c.a)(["\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px;\n    padding-top: 15px;\n    padding-right: 15px;\n    padding-left: 15px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    @media (max-width: 769px){\n        margin-bottom: 15px;\n        padding-top: 25px;\n        padding-right: 25px;\n        padding-left: 25px;\n    }\n    @media (max-width: 415px){\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n    @media (max-width: 360px){\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n    display: flex;\n    height: auto;\n    width: 355px;\n    margin: auto;\n    margin-top: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    border: 0.75px solid #e5e5e5;\n    border-radius: 7px;\n    background-color: #fcfcfc;\n    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);\n    @media (max-width: 769px){\n        margin-top: 5em;\n        min-width: 353.5px;\n    }\n"]);return cn=function(){return n},n}var ln=l.a.div(cn()),mn=l.a.div(on()),un=l.a.div(rn()),dn=l.a.div(an()),sn=l.a.div(tn()),pn=l.a.span(en()),xn=l.a.div(nn()),fn=l.a.div(Q()),gn=l.a.div($(),(function(n){return n.url})),hn=function(){var n=Object(a.useContext)(s),e=n.recommendations;return n.loading?r.a.createElement(O,null):r.a.createElement(ln,null,r.a.createElement(mn,null,r.a.createElement(un,{profileUrl:e.image_url}),r.a.createElement(dn,null,r.a.createElement(sn,null,e.name),r.a.createElement(xn,null,r.a.createElement("div",null,"Food expert of"),r.a.createElement(pn,null," ",e.categories[0].title," ")))),r.a.createElement(fn,null,r.a.createElement(G.a,{text:"This fantastic restaurant is a "+e.categories[0].title+" restaurant! It received "+e.review_count+" reviews and got a rating of "+e.rating+". Come and try it!",maxLine:"3",ellipsis:"...",trimRight:!0})),r.a.createElement(gn,{url:e.image_url}))},bn=t(5),wn=t(6),vn=t(8),En=t(7),kn=function(n){Object(vn.a)(t,n);var e=Object(En.a)(t);function t(){return Object(bn.a)(this,t),e.apply(this,arguments)}return Object(wn.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{"data-collapse":"none","data-animation":"default","data-duration":"400",className:"navbar w-nav"},r.a.createElement("div",{className:"w-container"},r.a.createElement("img",{src:"/images/mini-donut.svg",alt:"alt_image",className:" w-nav-brand  h-logo"}),r.a.createElement("nav",{role:"navigation",className:"w-nav-menu"},r.a.createElement("a",{href:"https://www.yelp.com/",className:"nav-link w-nav-link",style:{maxWidth:"940px"}},"Yelp"),r.a.createElement("a",{href:"https://www.instagram.com/yelp/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"Home__InstagramLink-sc-1sbsg8u-0 kCEMFk"},r.a.createElement("img",{src:"/images/instagram.svg",alt:"instagram"}))),r.a.createElement("div",{className:"w-nav-button"},r.a.createElement("div",{className:"w-icon-nav-menu"}))),r.a.createElement("div",{className:"w-nav-overlay","data-wf-ignore":""}))}}]),t}(a.Component);function jn(){var n=Object(c.a)(["\n    cursor: pointer;\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 30px;\n"]);return jn=function(){return n},n}var yn=l.a.form(jn()),On=function(n){Object(vn.a)(t,n);var e=Object(En.a)(t);function t(){return Object(bn.a)(this,t),e.apply(this,arguments)}return Object(wn.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"download-container w-container"},r.a.createElement("div",{className:"download-wrapper"},r.a.createElement("h3",{className:"h3"},"Tell me what's in your mind?"),r.a.createElement(yn,null,r.a.createElement("input",{type:"hidden",name:"u",value:"996c443c67aecf27290a79302"}),r.a.createElement("input",{type:"hidden",name:"id",value:"413478499d"}),r.a.createElement("input",{type:"text",required:"",className:"prelist-word",id:"word",name:"word",placeholder:"Your words..."}),r.a.createElement("button",{type:"submit",className:"prelist-submit"},"Share"))))}}]),t}(a.Component),Fn=function(n){Object(vn.a)(t,n);var e=Object(En.a)(t);function t(){return Object(bn.a)(this,t),e.apply(this,arguments)}return Object(wn.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Footer",className:"footer"},r.a.createElement("div",{className:"footer-container w-container"},r.a.createElement("div",{className:"footer-wrapper-top"},r.a.createElement("a",{href:"/",className:"w-inline-block w--current"},r.a.createElement("img",{src:"/images/cupcake.svg",width:"160",height:"44",alt:"",className:"cake-logo"})),r.a.createElement("a",{href:"mailto:hic.ch.ntu@gmail.com",className:"link"},"Contact"),r.a.createElement("a",{href:"https://www.instagram.com/yelp/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"Footer__InstagramLink-sc-1mb098p-0 bBdLAF"},r.a.createElement("img",{src:"/images/instagram.svg"})),r.a.createElement("div",{className:"text-block"},"\xa9 2020 Vickey Lee"))))}}]),t}(a.Component);function Nn(){var n=Object(c.a)(["\n    height: auto;\n    padding: 80px 0px;\n    background-color: #19B5FE;\n    @media (max-width: 769px){\n        margin-top: 30px;\n        padding: 60px 0px;\n    }\n    \n"]);return Nn=function(){return n},n}function zn(){var n=Object(c.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    margin: 5% auto 3%;\n    max-width: 1000px;\n    @media (max-width: 1000px){\n        margin: 4% 3% -20px;   \n    }\n    @media (max-width: 769px){\n        margin: auto;\n        justify-content: center;\n    }\n    \n"]);return zn=function(){return n},n}var Cn=l.a.div(zn()),In=l.a.div(Nn()),Sn=function(){return r.a.createElement("div",null,r.a.createElement(kn,null),r.a.createElement(Cn,null,r.a.createElement(p,null,r.a.createElement(hn,null),r.a.createElement(J,null))),r.a.createElement(In,null,r.a.createElement(On,null)),r.a.createElement(Fn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(54).config(),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Sn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.da11838e.chunk.js.map