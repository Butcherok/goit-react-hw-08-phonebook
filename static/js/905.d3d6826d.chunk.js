"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[905],{4905:function(n,o,r){r.r(o),r.d(o,{default:function(){return R}});var t,e,i,a,s,l,p,d,x,c,u,g,h=r(9439),b=r(9434),f=r(2195),m=r(2791),w=r(5705),Z=r(168),v=r(225),j=r(9135),k=(0,v.Z)(w.l0)(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=v.Z.h2(e||(e=(0,Z.Z)(["\n  margin-bottom: 5px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),z=v.Z.div(i||(i=(0,Z.Z)(["\n  position: relative;\n\n  margin-bottom: 40px;\n  max-width: 100%;\n  width: 450px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n"]))),_=v.Z.label(a||(a=(0,Z.Z)(["\n  font-size: 22px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),S=(0,v.Z)(w.gN)(s||(s=(0,Z.Z)(["\n  padding: 15px;\n  width: 100%;\n\n  font-size: 24px;\n  color: rgba(255, 255, 255, 0.7);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  background-color: white;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n\n  transition: all 300ms ease-in-out;\n\n  outline: none;\n\n  &:not(:placeholder-shown)[data-error='false'] {\n    color: #282828;\n    border: 2px solid lightblue;\n  }\n\n  &[data-error='true'] {\n    color: #282828;\n    border: 1px solid rgba(227, 67, 67, 0.7);\n  }\n\n  &[type='password'] {\n    color: #282828;\n    padding-right: 65px;\n  }\n\n  &:hover,\n  &:focus {\n    color: #282828;\n    border: 2px solid lightblue;\n  }\n"]))),C=v.Z.button(l||(l=(0,Z.Z)(["\n  padding: 16px 32px;\n\n  font-weight: 700;\n  font-size: 24px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  background-color: lightblue;\n\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  border-radius: 10px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  transition: all 250ms ease-in-out;\n\n  cursor: pointer;\n\n  :hover {\n    scale: 1.05;\n\n    border: 1px solid rgba(255, 255, 255, 1);\n  }\n  &:active {\n    background-color: lightgreen;\n    transform: scale(0.95);\n    transition: all 0.1s ease-in-out;\n    border: 2px solid lightgreen;\n  }\n"]))),Y=(0,v.Z)(w.Bc)(p||(p=(0,Z.Z)(["\n  position: absolute;\n  bottom: -10%;\n  left: 0;\n\n  transform: translateY(100%);\n\n  font-size: 14px;\n  color: #e34343;\n"]))),I=(v.Z.p(d||(d=(0,Z.Z)(["\n  margin-bottom: 25px;\n\n  font-style: italic;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),v.Z.div(x||(x=(0,Z.Z)(["\n  position: relative;\n  width: 100%;\n"])))),F=v.Z.button(c||(c=(0,Z.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 15px;\n\n  transform: translateY(-50%);\n\n  padding: 5px;\n  width: 33px;\n  height: 33px;\n\n  background-color: transparent;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 7px;\n\n  transition: border 250ms ease-in-out;\n\n  cursor: pointer;\n\n  &:hover {\n    border: 1px solid rgba(255, 255, 255, 1);\n  }\n\n  &:hover > svg {\n    fill: #fff;\n  }\n"]))),N=(0,v.Z)(j.tgn)(u||(u=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: rgba(255, 255, 255, 0.7);\n\n  transition: fill 250ms ease-in-out;\n"]))),P=(0,v.Z)(j.dSq)(g||(g=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: rgba(255, 255, 255, 0.7);\n\n  transition: fill 250ms ease-in-out;\n"]))),V=r(3182),q=r(184),B={email:"user-mail@domain.com",password:"User-pass-123"},G=function(){var n=(0,b.I0)(),o=(0,m.useState)(!1),r=(0,h.Z)(o,2),t=r[0],e=r[1],i=function(){return e(!t)};return(0,q.jsx)(w.J9,{initialValues:B,onSubmit:function(o,r){var t=r.resetForm;n((0,f.Ib)({email:o.email,password:o.password})),t()},children:function(n){var o=n.errors,r=n.touched;return(0,q.jsxs)(k,{children:[(0,q.jsx)(y,{children:"Sign in to continue"}),(0,q.jsxs)(z,{children:[(0,q.jsx)(_,{htmlFor:"email",children:"Email:"}),(0,q.jsx)(S,{type:"email",name:"email",id:"email",autoComplete:"off",placeholder:" ","data-error":!(!o.email||!r.email)}),(0,q.jsx)(Y,{name:"email",component:"span"})]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(_,{htmlFor:"password",children:"Password:"}),(0,q.jsxs)(I,{children:[(0,q.jsx)(S,{type:t?"text":"password",name:"password",id:"password",autoComplete:"off",placeholder:" ","data-error":!(!o.password||!r.password)}),(0,q.jsx)(F,{type:"button",onClick:i,"data-shown":t,children:t?(0,q.jsx)(P,{}):(0,q.jsx)(N,{})})]}),(0,q.jsx)(Y,{name:"password",component:"span"})]}),(0,q.jsx)(C,{type:"submit",children:"Sign in"}),(0,q.jsxs)(V.G0,{children:["No account?",(0,q.jsx)(V._1,{to:"/Register",children:" Register "})]})]})}})},R=function(){return(0,q.jsx)(G,{})}},3182:function(n,o,r){r.d(o,{Ay:function(){return P},CV:function(){return Y},Dx:function(){return j},G0:function(){return S},II:function(){return z},K2:function(){return N},PV:function(){return F},SP:function(){return k},Wo:function(){return I},Yb:function(){return v},_1:function(){return C},__:function(){return y},un:function(){return _}});var t,e,i,a,s,l,p,d,x,c,u,g,h,b=r(168),f=r(225),m=r(5705),w=r(9135),Z=r(1087),v=(0,f.Z)(m.l0)(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),j=f.Z.h2(e||(e=(0,b.Z)(["\n  margin-bottom: 25px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),k=f.Z.div(i||(i=(0,b.Z)(["\n  position: relative;\n\n  margin-bottom: 40px;\n  max-width: 100%;\n  width: 450px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 5px;\n"]))),y=f.Z.label(a||(a=(0,b.Z)(["\n  font-size: 22px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n"]))),z=(0,f.Z)(m.gN)(s||(s=(0,b.Z)(["\n  padding: 15px;\n  width: 100%;\n\n  font-size: 24px;\n  color: rgba(255, 255, 255, 0.7);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  background-color: white;\n  border: 2px solid lightblue;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n\n  transition: all 300ms ease-in-out;\n\n  outline: none;\n\n  &:not(:placeholder-shown)[data-error='false'] {\n    color: #282828;\n    border: 2px solid lightblue;\n  }\n\n  &[data-error='true'] {\n    color: #282828;\n    border: 1px solid rgba(227, 67, 67, 0.7);\n  }\n\n  &[type='password'] {\n    color: #282828;\n    padding-right: 65px;\n  }\n\n  &:hover,\n  &:focus {\n    color: #282828;\n    border: 2px solid lightblue;\n  }\n"]))),_=f.Z.button(l||(l=(0,b.Z)(["\n  padding: 16px 32px;\n\n  font-weight: 700;\n  font-size: 24px;\n  color: #282828;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  background-color: lightblue;\n\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  border-radius: 10px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  transition: all 250ms ease-in-out;\n\n  cursor: pointer;\n\n  :hover {\n    scale: 1.05;\n    border: 2px solid rgba(255, 255, 255, 1);\n  }\n  &:active {\n    background-color: lightgreen;\n    transform: scale(0.95);\n    transition: all 0.1s ease-in-out;\n    border: 2px solid lightgreen;\n  }\n"]))),S=f.Z.span(p||(p=(0,b.Z)(["\n  display: flex;\n  margin-top: 15px;\n  gap: 10px;\n\n  font-size: 18px;\n  color: #282828;\n"]))),C=(0,f.Z)(Z.rU)(d||(d=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  color: #282828;\n  text-decoration: none;\n  text-shadow: 0px 1px 1px hsl(195, 53%, 79%);\n\n  transition: all 250ms ease-in-out;\n\n  :hover,\n  :focus {\n    color: lightgreen;\n  }\n\n  &.active {\n    color: lightgreen;\n  }\n"]))),Y=(0,f.Z)(m.Bc)(x||(x=(0,b.Z)(["\n  position: absolute;\n  bottom: -10%;\n  left: 0;\n\n  transform: translateY(100%);\n\n  font-size: 14px;\n  color: #e34343;\n"]))),I=f.Z.div(c||(c=(0,b.Z)(["\n  position: relative;\n  width: 100%;\n"]))),F=f.Z.button(u||(u=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 15px;\n\n  transform: translateY(-50%);\n\n  padding: 5px;\n  width: 33px;\n  height: 33px;\n\n  background-color: transparent;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);\n\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 7px;\n\n  transition: border 250ms ease-in-out;\n\n  cursor: pointer;\n\n  &:hover {\n    border: 1px solid rgba(255, 255, 255, 1);\n  }\n\n  &:hover > svg {\n    fill: #fff;\n  }\n"]))),N=(0,f.Z)(w.tgn)(g||(g=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: rgba(255, 255, 255, 0.7);\n\n  transition: fill 250ms ease-in-out;\n"]))),P=(0,f.Z)(w.dSq)(h||(h=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n\n  fill: rgba(255, 255, 255, 0.7);\n\n  transition: fill 250ms ease-in-out;\n"])))}}]);
//# sourceMappingURL=905.d3d6826d.chunk.js.map