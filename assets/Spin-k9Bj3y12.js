import{C as e,K as t,T as n,g as r,r as i,rt as a}from"./vue-i18n-d5LvKhlL.js";import{$ as o,L as s,R as c,Z as l,at as u,c as d,et as f,i as p,n as m,r as h,rt as g,t as _}from"./light-gzimO2Gr.js";function v(e,t){return r(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}function y(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var b={name:`Spin`,common:_,self:y},x=o([o(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),f(`spin-container`,`
 position: relative;
 `,[f(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[m()])]),f(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),f(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[g(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),f(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),f(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[g(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),S={small:20,medium:18,large:16},C=e({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},d.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),p),slots:Object,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:i}=c(e),o=d(`Spin`,`-spin`,x,b,e,n),f=r(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{opacitySpinning:i,color:a,textColor:s}=r;return{"--n-bezier":n,"--n-opacity-spinning":i,"--n-size":typeof t==`number`?l(t):r[u(`size`,t)],"--n-color":a,"--n-text-color":s}}),p=i?s(`spin`,r(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),f,e):void 0,m=v(e,[`spinning`,`show`]),h=a(!1);return t(t=>{let n;if(m.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{h.value=!0},r),t(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:n,active:h,mergedStrokeWidth:r(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return S[typeof n==`number`?`medium`:n]}),cssVars:i?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:r,description:a}=this,o=t.icon&&this.rotate,s=(a||t.description)&&n(`div`,{class:`${r}-spin-description`},a||t.description?.call(t)),c=t.icon?n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(`div`,{class:[`${r}-spin`,o&&`${r}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):n(`div`,{class:[`${r}-spin-body`,this.themeClass]},n(h,{clsPrefix:r,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?n(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},n(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),n(i,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{y as n,v as r,C as t};