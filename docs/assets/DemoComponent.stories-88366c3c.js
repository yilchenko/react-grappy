import{a as d}from"./jsx-runtime-91a467a5.js";import{r as C}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function o({initialCount:n=0}){const[m,p]=C.useState(n);return d("button",{onClick:()=>p(l=>l+1),children:["Count: ",m]})}try{o.displayName="DemoComponent",o.__docgenInfo={description:"",displayName:"DemoComponent",props:{initialCount:{defaultValue:{value:"0"},description:"",name:"initialCount",required:!1,type:{name:"number"}}}}}catch{}const y={title:"Example/DemoComponent",component:o,tags:["autodocs"],argTypes:{initialCount:{control:"number"}}},t={args:{initialCount:0}},e={args:{initialCount:42}};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    initialCount: 0
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    initialCount: 42
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const D=["Default","WithInitialCount"];export{t as Default,e as WithInitialCount,D as __namedExportsOrder,y as default};
//# sourceMappingURL=DemoComponent.stories-88366c3c.js.map
