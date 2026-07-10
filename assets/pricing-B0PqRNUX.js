import{S as e,h as t,w as n}from"./vue.runtime.esm-bundler-CWe61849.js";import{N as r,P as i,Q as a,X as o,Y as s,i as c,tt as l}from"./light-eJmADXoO.js";import{r as u,t as d}from"./light-Cg_SXWCF.js";import{H as f}from"./index-VINTkwcX.js";var p=e({name:`Empty`,render(){return n(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},n(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),n(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),m=o(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[a(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[s(`+`,[a(`description`,`
 margin-top: 8px;
 `)])]),a(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),h=e({name:`Empty`,props:Object.assign(Object.assign({},c.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s}=i(e),f=c(`Empty`,`-empty`,m,d,e,a),{localeRef:h}=u(`Empty`),g=t(()=>e.description??s?.value?.Empty?.description),_=t(()=>s?.value?.Empty?.renderIcon||(()=>n(p,null))),v=t(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[l(`iconSize`,t)]:r,[l(`fontSize`,t)]:i,textColor:a,iconColor:o,extraTextColor:s}}=f.value;return{"--n-icon-size":r,"--n-font-size":i,"--n-bezier":n,"--n-text-color":a,"--n-icon-color":o,"--n-extra-text-color":s}}),y=o?r(`empty`,t(()=>{let t=``,{size:n}=e;return t+=n[0],t}),v,e):void 0;return{mergedClsPrefix:a,mergedRenderIcon:_,localizedDescription:t(()=>g.value||h.value.description),cssVars:o?void 0:v,themeClass:y?.themeClass,onRender:y?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r?.(),n(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?n(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():n(f,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?n(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?n(`div`,{class:`${t}-empty__extra`},e.extra()):null)}});function g(e){return e===`per_million_tokens`}function _(e,t){return t===`per_million_tokens`?`$${e.toFixed(2).replace(/(\.\d*?)0+$/,`$1`).replace(/\.$/,``)}`:`$${e.toFixed(3).replace(/(\.\d*?)0+$/,`$1`).replace(/\.$/,``)}`}function v(e){return`pages.pricing.priceUnits.${e}`}function y(e){return g(e)?`inputPrice`:`startFrom`}export{h as i,y as n,v as r,_ as t};