System.register(["./index-legacy.693adf92.js","./useVisualData-legacy.0966a363.js","./index-legacy.74c78e75.js","./preload-helper-legacy.c72b98d1.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./useAnimate-legacy.c3743aea.js","./editorWorker-legacy.d4892705.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.m},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e({setupMode:function(e){const t=[],n=[],r=new ne(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;It(n),r.completionItems&&n.push(a.languages.registerCompletionItemProvider(t,new Et(i))),r.hovers&&n.push(a.languages.registerHoverProvider(t,new dt(i))),r.documentHighlights&&n.push(a.languages.registerDocumentHighlightProvider(t,new ft(i))),r.links&&n.push(a.languages.registerLinkProvider(t,new wt(i))),r.documentSymbols&&n.push(a.languages.registerDocumentSymbolProvider(t,new vt(i))),r.rename&&n.push(a.languages.registerRenameProvider(t,new pt(i))),r.foldingRanges&&n.push(a.languages.registerFoldingRangeProvider(t,new kt(i))),r.selectionRanges&&n.push(a.languages.registerSelectionRangeProvider(t,new xt(i))),r.documentFormattingEdits&&n.push(a.languages.registerDocumentFormattingEditProvider(t,new _t(i))),r.documentRangeFormattingEdits&&n.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new bt(i)))}(),t.push(Ct(n)),Ct(t)},setupMode1:function(e){const t=new ne(e),n=(...e)=>t.getLanguageServiceWorker(...e);let r=e.languageId;a.languages.registerCompletionItemProvider(r,new Et(n)),a.languages.registerHoverProvider(r,new dt(n)),a.languages.registerDocumentHighlightProvider(r,new ft(n)),a.languages.registerLinkProvider(r,new wt(n)),a.languages.registerFoldingRangeProvider(r,new kt(n)),a.languages.registerDocumentSymbolProvider(r,new vt(n)),a.languages.registerSelectionRangeProvider(r,new xt(n)),a.languages.registerRenameProvider(r,new pt(n)),"html"===r&&(a.languages.registerDocumentFormattingEditProvider(r,new _t(n)),a.languages.registerDocumentRangeFormattingEditProvider(r,new bt(n)))}});
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,a={};n(a,"__esModule",{value:!0}),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))o.call(e,s)||"default"===s||n(e,s,{get:()=>t[s],enumerable:!(a=r(t,s))||a.enumerable})})(a,t);var s,u,c,d,g,l,f,h,p,v,m,w,_,b,y,k,x,E,C,I,A,S,R,P,T,j,F,D,L,M,O,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=a.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(u=s||(s={})).MIN_VALUE=-2147483648,u.MAX_VALUE=2147483647,(d=c||(c={})).MIN_VALUE=0,d.MAX_VALUE=2147483647,(l=g||(g={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=c.MAX_VALUE),t===Number.MAX_VALUE&&(t=c.MAX_VALUE),{line:e,character:t}},l.is=function(e){var t=e;return nt.objectLiteral(t)&&nt.uinteger(t.line)&&nt.uinteger(t.character)},(h=f||(f={})).create=function(e,t,n,r){if(nt.uinteger(e)&&nt.uinteger(t)&&nt.uinteger(n)&&nt.uinteger(r))return{start:g.create(e,t),end:g.create(n,r)};if(g.is(e)&&g.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},h.is=function(e){var t=e;return nt.objectLiteral(t)&&g.is(t.start)&&g.is(t.end)},(v=p||(p={})).create=function(e,t){return{uri:e,range:t}},v.is=function(e){var t=e;return nt.defined(t)&&f.is(t.range)&&(nt.string(t.uri)||nt.undefined(t.uri))},(w=m||(m={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},w.is=function(e){var t=e;return nt.defined(t)&&f.is(t.targetRange)&&nt.string(t.targetUri)&&(f.is(t.targetSelectionRange)||nt.undefined(t.targetSelectionRange))&&(f.is(t.originSelectionRange)||nt.undefined(t.originSelectionRange))},(b=_||(_={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},b.is=function(e){var t=e;return nt.numberRange(t.red,0,1)&&nt.numberRange(t.green,0,1)&&nt.numberRange(t.blue,0,1)&&nt.numberRange(t.alpha,0,1)},(k=y||(y={})).create=function(e,t){return{range:e,color:t}},k.is=function(e){var t=e;return f.is(t.range)&&_.is(t.color)},(E=x||(x={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},E.is=function(e){var t=e;return nt.string(t.label)&&(nt.undefined(t.textEdit)||W.is(t))&&(nt.undefined(t.additionalTextEdits)||nt.typedArray(t.additionalTextEdits,W.is))},(I=C||(C={})).Comment="comment",I.Imports="imports",I.Region="region",(S=A||(A={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return nt.defined(n)&&(o.startCharacter=n),nt.defined(r)&&(o.endCharacter=r),nt.defined(i)&&(o.kind=i),o},S.is=function(e){var t=e;return nt.uinteger(t.startLine)&&nt.uinteger(t.startLine)&&(nt.undefined(t.startCharacter)||nt.uinteger(t.startCharacter))&&(nt.undefined(t.endCharacter)||nt.uinteger(t.endCharacter))&&(nt.undefined(t.kind)||nt.string(t.kind))},(P=R||(R={})).create=function(e,t){return{location:e,message:t}},P.is=function(e){var t=e;return nt.defined(t)&&p.is(t.location)&&nt.string(t.message)},(j=T||(T={})).Error=1,j.Warning=2,j.Information=3,j.Hint=4,(D=F||(F={})).Unnecessary=1,D.Deprecated=2,(L||(L={})).is=function(e){var t=e;return null!=t&&nt.string(t.href)},(O=M||(M={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return nt.defined(n)&&(a.severity=n),nt.defined(r)&&(a.code=r),nt.defined(i)&&(a.source=i),nt.defined(o)&&(a.relatedInformation=o),a},O.is=function(e){var t,n=e;return nt.defined(n)&&f.is(n.range)&&nt.string(n.message)&&(nt.number(n.severity)||nt.undefined(n.severity))&&(nt.integer(n.code)||nt.string(n.code)||nt.undefined(n.code))&&(nt.undefined(n.codeDescription)||nt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(nt.string(n.source)||nt.undefined(n.source))&&(nt.undefined(n.relatedInformation)||nt.typedArray(n.relatedInformation,R.is))},(U=N||(N={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return nt.defined(n)&&n.length>0&&(i.arguments=n),i},U.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.title)&&nt.string(t.command)},(V=W||(W={})).replace=function(e,t){return{range:e,newText:t}},V.insert=function(e,t){return{range:{start:e,end:e},newText:t}},V.del=function(e){return{range:e,newText:""}},V.is=function(e){var t=e;return nt.objectLiteral(t)&&nt.string(t.newText)&&f.is(t.range)},(K=H||(H={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},K.is=function(e){var t=e;return void 0!==t&&nt.objectLiteral(t)&&nt.string(t.label)&&(nt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(nt.string(t.description)||void 0===t.description)},(z||(z={})).is=function(e){return"string"==typeof e},(B=X||(X={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},B.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},B.del=function(e,t){return{range:e,newText:"",annotationId:t}},B.is=function(e){var t=e;return W.is(t)&&(H.is(t.annotationId)||z.is(t.annotationId))},(q=$||($={})).create=function(e,t){return{textDocument:e,edits:t}},q.is=function(e){var t=e;return nt.defined(t)&&se.is(t.textDocument)&&Array.isArray(t.edits)},(G=Q||(Q={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},G.is=function(e){var t=e;return t&&"create"===t.kind&&nt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||nt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||nt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(Y=J||(J={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},Y.is=function(e){var t=e;return t&&"rename"===t.kind&&nt.string(t.oldUri)&&nt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||nt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||nt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ee.is=function(e){var t=e;return t&&"delete"===t.kind&&nt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||nt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||nt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(te||(te={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return nt.string(e.kind)?Q.is(e)||J.is(e)||Z.is(e):$.is(e)})))};var re,ie,oe,ae,se,ue,ce,de,ge,le,fe,he,pe,ve,me,we,_e,be,ye,ke,xe,Ee,Ce,Ie,Ae,Se,Re,Pe,Te,je,Fe,De,Le,Me,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=W.insert(e,t):z.is(n)?(i=n,r=X.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=W.replace(e,t):z.is(n)?(i=n,r=X.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=W.del(e):z.is(t)?(r=t,n=X.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=X.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),tt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(z.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new tt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if($.is(e)){var n=new et(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new et(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(se.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new et(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new et(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Q.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Q.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(H.is(n)||z.is(n)?i=n:r=n,void 0===i?o=J.create(e,t,r):(a=z.is(i)?i:this._changeAnnotations.manage(i),o=J.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Z.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Z.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(ie=re||(re={})).create=function(e){return{uri:e}},ie.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)},(ae=oe||(oe={})).create=function(e,t){return{uri:e,version:t}},ae.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&nt.integer(t.version)},(ue=se||(se={})).create=function(e,t){return{uri:e,version:t}},ue.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&(null===t.version||nt.integer(t.version))},(de=ce||(ce={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},de.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&nt.string(t.languageId)&&nt.integer(t.version)&&nt.string(t.text)},(le=ge||(ge={})).PlainText="plaintext",le.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(ge||(ge={})),(fe||(fe={})).is=function(e){var t=e;return nt.objectLiteral(e)&&ge.is(t.kind)&&nt.string(t.value)},(pe=he||(he={})).Text=1,pe.Method=2,pe.Function=3,pe.Constructor=4,pe.Field=5,pe.Variable=6,pe.Class=7,pe.Interface=8,pe.Module=9,pe.Property=10,pe.Unit=11,pe.Value=12,pe.Enum=13,pe.Keyword=14,pe.Snippet=15,pe.Color=16,pe.File=17,pe.Reference=18,pe.Folder=19,pe.EnumMember=20,pe.Constant=21,pe.Struct=22,pe.Event=23,pe.Operator=24,pe.TypeParameter=25,(me=ve||(ve={})).PlainText=1,me.Snippet=2,(we||(we={})).Deprecated=1,(be=_e||(_e={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},be.is=function(e){var t=e;return t&&nt.string(t.newText)&&f.is(t.insert)&&f.is(t.replace)},(ke=ye||(ye={})).asIs=1,ke.adjustIndentation=2,(xe||(xe={})).create=function(e){return{label:e}},(Ee||(Ee={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ie=Ce||(Ce={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ie.is=function(e){var t=e;return nt.string(t)||nt.objectLiteral(t)&&nt.string(t.language)&&nt.string(t.value)},(Ae||(Ae={})).is=function(e){var t=e;return!!t&&nt.objectLiteral(t)&&(fe.is(t.contents)||Ce.is(t.contents)||nt.typedArray(t.contents,Ce.is))&&(void 0===e.range||f.is(e.range))},(Se||(Se={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Re||(Re={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return nt.defined(t)&&(i.documentation=t),nt.defined(n)?i.parameters=n:i.parameters=[],i},(Te=Pe||(Pe={})).Text=1,Te.Read=2,Te.Write=3,(je||(je={})).create=function(e,t){var n={range:e};return nt.number(t)&&(n.kind=t),n},(De=Fe||(Fe={})).File=1,De.Module=2,De.Namespace=3,De.Package=4,De.Class=5,De.Method=6,De.Property=7,De.Field=8,De.Constructor=9,De.Enum=10,De.Interface=11,De.Function=12,De.Variable=13,De.Constant=14,De.String=15,De.Number=16,De.Boolean=17,De.Array=18,De.Object=19,De.Key=20,De.Null=21,De.EnumMember=22,De.Struct=23,De.Event=24,De.Operator=25,De.TypeParameter=26,(Le||(Le={})).Deprecated=1,(Me||(Me={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ne=Oe||(Oe={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ne.is=function(e){var t=e;return t&&nt.string(t.name)&&nt.number(t.kind)&&f.is(t.range)&&f.is(t.selectionRange)&&(void 0===t.detail||nt.string(t.detail))&&(void 0===t.deprecated||nt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(We=Ue||(Ue={})).Empty="",We.QuickFix="quickfix",We.Refactor="refactor",We.RefactorExtract="refactor.extract",We.RefactorInline="refactor.inline",We.RefactorRewrite="refactor.rewrite",We.Source="source",We.SourceOrganizeImports="source.organizeImports",We.SourceFixAll="source.fixAll",(He=Ve||(Ve={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},He.is=function(e){var t=e;return nt.defined(t)&&nt.typedArray(t.diagnostics,M.is)&&(void 0===t.only||nt.typedArray(t.only,nt.string))},(ze=Ke||(Ke={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):N.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},ze.is=function(e){var t=e;return t&&nt.string(t.title)&&(void 0===t.diagnostics||nt.typedArray(t.diagnostics,M.is))&&(void 0===t.kind||nt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||N.is(t.command))&&(void 0===t.isPreferred||nt.boolean(t.isPreferred))&&(void 0===t.edit||te.is(t.edit))},(Be=Xe||(Xe={})).create=function(e,t){var n={range:e};return nt.defined(t)&&(n.data=t),n},Be.is=function(e){var t=e;return nt.defined(t)&&f.is(t.range)&&(nt.undefined(t.command)||N.is(t.command))},(qe=$e||($e={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},qe.is=function(e){var t=e;return nt.defined(t)&&nt.uinteger(t.tabSize)&&nt.boolean(t.insertSpaces)},(Ge=Qe||(Qe={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ge.is=function(e){var t=e;return nt.defined(t)&&f.is(t.range)&&(nt.undefined(t.target)||nt.string(t.target))},(Ye=Je||(Je={})).create=function(e,t){return{range:e,parent:t}},Ye.is=function(e){var t=e;return void 0!==t&&f.is(t.range)&&(void 0===t.parent||Ye.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new ot(e,t,n,r)},e.is=function(e){var t=e;return!!(nt.defined(t)&&nt.string(t.uri)&&(nt.undefined(t.languageId)||nt.string(t.languageId))&&nt.uinteger(t.lineCount)&&nt.func(t.getText)&&nt.func(t.positionAt)&&nt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(Ze||(Ze={}));var nt,rt,it,ot=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return g.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return g.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();function at(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function st(e){if(e)return new a.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ut(e){const t=a.languages.CompletionItemKind;switch(e){case he.Text:return t.Text;case he.Method:return t.Method;case he.Function:return t.Function;case he.Constructor:return t.Constructor;case he.Field:return t.Field;case he.Variable:return t.Variable;case he.Class:return t.Class;case he.Interface:return t.Interface;case he.Module:return t.Module;case he.Property:return t.Property;case he.Unit:return t.Unit;case he.Value:return t.Value;case he.Enum:return t.Enum;case he.Keyword:return t.Keyword;case he.Snippet:return t.Snippet;case he.Color:return t.Color;case he.File:return t.File;case he.Reference:return t.Reference}return t.Property}function ct(e){if(e)return{range:st(e.range),text:e.newText}}rt=nt||(nt={}),it=Object.prototype.toString,rt.defined=function(e){return void 0!==e},rt.undefined=function(e){return void 0===e},rt.boolean=function(e){return!0===e||!1===e},rt.string=function(e){return"[object String]"===it.call(e)},rt.number=function(e){return"[object Number]"===it.call(e)},rt.numberRange=function(e,t,n){return"[object Number]"===it.call(e)&&t<=e&&e<=n},rt.integer=function(e){return"[object Number]"===it.call(e)&&-2147483648<=e&&e<=2147483647},rt.uinteger=function(e){return"[object Number]"===it.call(e)&&0<=e&&e<=2147483647},rt.func=function(e){return"[object Function]"===it.call(e)},rt.objectLiteral=function(e){return null!==e&&"object"==typeof e},rt.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var dt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),at(t)))).then((e=>{if(e)return{range:st(e.range),contents:lt(e.contents)}}))}};function gt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function lt(e){if(e)return Array.isArray(e)?e.map(gt):[gt(e)]}var ft=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),at(t)))).then((e=>{if(e)return e.map((e=>({range:st(e.range),kind:ht(e.kind)})))}))}};function ht(e){switch(e){case Pe.Read:return a.languages.DocumentHighlightKind.Read;case Pe.Write:return a.languages.DocumentHighlightKind.Write;case Pe.Text:return a.languages.DocumentHighlightKind.Text}return a.languages.DocumentHighlightKind.Text}var pt=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),at(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=a.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:st(i.range),text:i.newText}})}return{edits:t}}(e)))}},vt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:mt(e.kind),range:st(e.location.range),selectionRange:st(e.location.range),tags:[]})))}))}};function mt(e){let t=a.languages.SymbolKind;switch(e){case Fe.File:return t.Array;case Fe.Module:return t.Module;case Fe.Namespace:return t.Namespace;case Fe.Package:return t.Package;case Fe.Class:return t.Class;case Fe.Method:return t.Method;case Fe.Property:return t.Property;case Fe.Field:return t.Field;case Fe.Constructor:return t.Constructor;case Fe.Enum:return t.Enum;case Fe.Interface:return t.Interface;case Fe.Function:return t.Function;case Fe.Variable:return t.Variable;case Fe.Constant:return t.Constant;case Fe.String:return t.String;case Fe.Number:return t.Number;case Fe.Boolean:return t.Boolean;case Fe.Array:return t.Array}return t.Function}var wt=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:st(e.range),url:e.target})))}}))}},_t=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,yt(t)).then((e=>{if(e&&0!==e.length)return e.map(ct)}))))}},bt=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t),yt(n)).then((e=>{if(e&&0!==e.length)return e.map(ct)}))))}};function yt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var kt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case C.Comment:return a.languages.FoldingRangeKind.Comment;case C.Imports:return a.languages.FoldingRangeKind.Imports;case C.Region:return a.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},xt=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(at)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:st(e.range)}),e=e.parent;return t}))}))}},Et=class extends class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),at(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new a.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:ut(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:st(e.textEdit.insert),replace:st(e.textEdit.replace)}:t.range=st(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ct)),e.insertTextFormat===ve.Snippet&&(t.insertTextRules=a.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}}{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Ct(e){return{dispose:()=>It(e)}}function It(e){for(;e.length;)e.pop().dispose()}}}}));
