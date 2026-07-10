import{G as e,S as t,h as n,n as r,nt as i,w as a}from"./vue.runtime.esm-bundler-CWe61849.js";import{$ as o,N as s,P as c,X as l,Y as u,i as d,n as f,q as p,t as m,tt as h}from"./light-eJmADXoO.js";import{n as g}from"./useLocaleRouter-BriKNsSF.js";import{L as _,R as v}from"./index-CUlrXAeG.js";function y(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var b={name:`Spin`,common:m,self:y},x=u([u(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l(`spin-container`,`
 position: relative;
 `,[l(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[f()])]),l(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[o(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),l(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[o(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),S={small:20,medium:18,large:16},C=t({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},d.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),v),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=c(t),o=d(`Spin`,`-spin`,x,b,t,r),l=n(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{opacitySpinning:i,color:a,textColor:s}=r;return{"--n-bezier":n,"--n-opacity-spinning":i,"--n-size":typeof e==`number`?p(e):r[h(`size`,e)],"--n-color":a,"--n-text-color":s}}),u=a?s(`spin`,n(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),l,t):void 0,f=g(t,[`spinning`,`show`]),m=i(!1);return e(e=>{let n;if(f.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{m.value=!0},r),e(()=>{clearTimeout(n)});return}}m.value=f.value}),{mergedClsPrefix:r,active:m,mergedStrokeWidth:n(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return S[typeof n==`number`?`medium`:n]}),cssVars:a?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:i}=this,o=t.icon&&this.rotate,s=(i||t.description)&&a(`div`,{class:`${n}-spin-description`},i||t.description?.call(t)),c=t.icon?a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(`div`,{class:[`${n}-spin`,o&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(_,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?a(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},a(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),a(r,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{y as n,C as t};