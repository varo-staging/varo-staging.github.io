import{G as e,S as t,h as n,n as r,nt as i,w as a}from"./vue.runtime.esm-bundler-CWe61849.js";import{$ as o,L as s,R as c,Z as l,at as u,c as d,et as f,i as p,n as m,r as h,rt as g,t as _}from"./light-2-GrHaWd.js";function v(e,t){return n(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}function y(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var b={name:`Spin`,common:_,self:y},x=o([o(`@keyframes spin-rotate`,`
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
 `)])]),S={small:20,medium:18,large:16},C=t({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},d.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),p),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=c(t),o=d(`Spin`,`-spin`,x,b,t,r),f=n(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{opacitySpinning:i,color:a,textColor:s}=r;return{"--n-bezier":n,"--n-opacity-spinning":i,"--n-size":typeof e==`number`?l(e):r[u(`size`,e)],"--n-color":a,"--n-text-color":s}}),p=a?s(`spin`,n(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),f,t):void 0,m=v(t,[`spinning`,`show`]),h=i(!1);return e(e=>{let n;if(m.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:r,active:h,mergedStrokeWidth:n(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return S[typeof n==`number`?`medium`:n]}),cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:n,description:i}=this,o=t.icon&&this.rotate,s=(i||t.description)&&a(`div`,{class:`${n}-spin-description`},i||t.description?.call(t)),c=t.icon?a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(`div`,{class:[`${n}-spin`,o&&`${n}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),s):a(`div`,{class:[`${n}-spin-body`,this.themeClass]},a(h,{clsPrefix:n,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${n}-spin`}),s);return(e=this.onRender)==null||e.call(this),t.default?a(`div`,{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},a(`div`,{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),a(r,{name:`fade-in-transition`},{default:()=>this.active?c:null})):c}});export{y as n,v as r,C as t};