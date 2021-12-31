System.register(["./index-legacy.693adf92.js","./useVisualData-legacy.0966a363.js","./index-legacy.74c78e75.js","./preload-helper-legacy.c72b98d1.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./useAnimate-legacy.c3743aea.js","./editorWorker-legacy.d4892705.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.m},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("setupMode",(function(e){const t=[],n=[],r=new class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>ne&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=a.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}}(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;_t(n),r.completionItems&&n.push(a.languages.registerCompletionItemProvider(t,new class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),st(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new a.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:gt(e.command),range:i,kind:ct(e.kind)};var n;return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?t.range={insert:ut(e.textEdit.insert),replace:ut(e.textEdit.replace)}:t.range=ut(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(dt)),e.insertTextFormat===ve.Snippet&&(t.insertTextRules=a.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}}(i,["/","-",":"]))),r.hovers&&n.push(a.languages.registerHoverProvider(t,new class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),st(t)))).then((e=>{if(e)return{range:ut(e.range),contents:ht(e.contents)}}))}}(i))),r.documentHighlights&&n.push(a.languages.registerDocumentHighlightProvider(t,new class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),st(t)))).then((e=>{if(e)return e.map((e=>({range:ut(e.range),kind:ft(e.kind)})))}))}}(i))),r.definitions&&n.push(a.languages.registerDefinitionProvider(t,new class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),st(t)))).then((e=>{if(e)return[pt(e)]}))}}(i))),r.references&&n.push(a.languages.registerReferenceProvider(t,new class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),st(t)))).then((e=>{if(e)return e.map(pt)}))}}(i))),r.documentSymbols&&n.push(a.languages.registerDocumentSymbolProvider(t,new class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:vt(e.kind),range:ut(e.location.range),selectionRange:ut(e.location.range),tags:[]})))}))}}(i))),r.rename&&n.push(a.languages.registerRenameProvider(t,new class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),st(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=a.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:ut(i.range),text:i.newText}})}return{edits:t}}(e)))}}(i))),r.colors&&n.push(a.languages.registerColorProvider(t,new class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:ut(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=dt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(dt)),t}))}))}}(i))),r.foldingRanges&&n.push(a.languages.registerFoldingRangeProvider(t,new class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case E.Comment:return a.languages.FoldingRangeKind.Comment;case E.Imports:return a.languages.FoldingRangeKind.Imports;case E.Region:return a.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}}(i))),r.diagnostics&&n.push(new class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{a.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(a.editor.onDidCreateModel(r)),this._disposables.push(a.editor.onWillDisposeModel(i)),this._disposables.push(a.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{a.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{a.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),a.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:at(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=a.editor.getModel(e);i&&i.getLanguageId()===t&&a.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{}))}}(t,i,e.onDidChange)),r.selectionRanges&&n.push(a.languages.registerSelectionRangeProvider(t,new class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(st)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:ut(e.range)}),e=e.parent;return t}))}))}}(i)))}(),t.push(mt(n)),mt(t)}));
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,a={};n(a,"__esModule",{value:!0}),((e,t,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))o.call(e,s)||"default"===s||n(e,s,{get:()=>t[s],enumerable:!(a=r(t,s))||a.enumerable})})(a,t);var s,u,c,d,g,l,h,f,p,v,m,_,w,b,y,k,x,C,E,I,A,S,T,R,M,j,P,D,L,O,F,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne=12e4;(u=s||(s={})).MIN_VALUE=-2147483648,u.MAX_VALUE=2147483647,(d=c||(c={})).MIN_VALUE=0,d.MAX_VALUE=2147483647,(l=g||(g={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=c.MAX_VALUE),t===Number.MAX_VALUE&&(t=c.MAX_VALUE),{line:e,character:t}},l.is=function(e){var t=e;return nt.objectLiteral(t)&&nt.uinteger(t.line)&&nt.uinteger(t.character)},(f=h||(h={})).create=function(e,t,n,r){if(nt.uinteger(e)&&nt.uinteger(t)&&nt.uinteger(n)&&nt.uinteger(r))return{start:g.create(e,t),end:g.create(n,r)};if(g.is(e)&&g.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},f.is=function(e){var t=e;return nt.objectLiteral(t)&&g.is(t.start)&&g.is(t.end)},(v=p||(p={})).create=function(e,t){return{uri:e,range:t}},v.is=function(e){var t=e;return nt.defined(t)&&h.is(t.range)&&(nt.string(t.uri)||nt.undefined(t.uri))},(_=m||(m={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},_.is=function(e){var t=e;return nt.defined(t)&&h.is(t.targetRange)&&nt.string(t.targetUri)&&(h.is(t.targetSelectionRange)||nt.undefined(t.targetSelectionRange))&&(h.is(t.originSelectionRange)||nt.undefined(t.originSelectionRange))},(b=w||(w={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},b.is=function(e){var t=e;return nt.numberRange(t.red,0,1)&&nt.numberRange(t.green,0,1)&&nt.numberRange(t.blue,0,1)&&nt.numberRange(t.alpha,0,1)},(k=y||(y={})).create=function(e,t){return{range:e,color:t}},k.is=function(e){var t=e;return h.is(t.range)&&w.is(t.color)},(C=x||(x={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},C.is=function(e){var t=e;return nt.string(t.label)&&(nt.undefined(t.textEdit)||W.is(t))&&(nt.undefined(t.additionalTextEdits)||nt.typedArray(t.additionalTextEdits,W.is))},(I=E||(E={})).Comment="comment",I.Imports="imports",I.Region="region",(S=A||(A={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return nt.defined(n)&&(o.startCharacter=n),nt.defined(r)&&(o.endCharacter=r),nt.defined(i)&&(o.kind=i),o},S.is=function(e){var t=e;return nt.uinteger(t.startLine)&&nt.uinteger(t.startLine)&&(nt.undefined(t.startCharacter)||nt.uinteger(t.startCharacter))&&(nt.undefined(t.endCharacter)||nt.uinteger(t.endCharacter))&&(nt.undefined(t.kind)||nt.string(t.kind))},(R=T||(T={})).create=function(e,t){return{location:e,message:t}},R.is=function(e){var t=e;return nt.defined(t)&&p.is(t.location)&&nt.string(t.message)},(j=M||(M={})).Error=1,j.Warning=2,j.Information=3,j.Hint=4,(D=P||(P={})).Unnecessary=1,D.Deprecated=2,(L||(L={})).is=function(e){var t=e;return null!=t&&nt.string(t.href)},(F=O||(O={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return nt.defined(n)&&(a.severity=n),nt.defined(r)&&(a.code=r),nt.defined(i)&&(a.source=i),nt.defined(o)&&(a.relatedInformation=o),a},F.is=function(e){var t,n=e;return nt.defined(n)&&h.is(n.range)&&nt.string(n.message)&&(nt.number(n.severity)||nt.undefined(n.severity))&&(nt.integer(n.code)||nt.string(n.code)||nt.undefined(n.code))&&(nt.undefined(n.codeDescription)||nt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(nt.string(n.source)||nt.undefined(n.source))&&(nt.undefined(n.relatedInformation)||nt.typedArray(n.relatedInformation,T.is))},(U=N||(N={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return nt.defined(n)&&n.length>0&&(i.arguments=n),i},U.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.title)&&nt.string(t.command)},(V=W||(W={})).replace=function(e,t){return{range:e,newText:t}},V.insert=function(e,t){return{range:{start:e,end:e},newText:t}},V.del=function(e){return{range:e,newText:""}},V.is=function(e){var t=e;return nt.objectLiteral(t)&&nt.string(t.newText)&&h.is(t.range)},(K=H||(H={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},K.is=function(e){var t=e;return void 0!==t&&nt.objectLiteral(t)&&nt.string(t.label)&&(nt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(nt.string(t.description)||void 0===t.description)},(z||(z={})).is=function(e){return"string"==typeof e},(B=X||(X={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},B.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},B.del=function(e,t){return{range:e,newText:"",annotationId:t}},B.is=function(e){var t=e;return W.is(t)&&(H.is(t.annotationId)||z.is(t.annotationId))},(q=$||($={})).create=function(e,t){return{textDocument:e,edits:t}},q.is=function(e){var t=e;return nt.defined(t)&&se.is(t.textDocument)&&Array.isArray(t.edits)},(G=Q||(Q={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},G.is=function(e){var t=e;return t&&"create"===t.kind&&nt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||nt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||nt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(Y=J||(J={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},Y.is=function(e){var t=e;return t&&"rename"===t.kind&&nt.string(t.oldUri)&&nt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||nt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||nt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ee.is=function(e){var t=e;return t&&"delete"===t.kind&&nt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||nt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||nt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(te||(te={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return nt.string(e.kind)?Q.is(e)||J.is(e)||Z.is(e):$.is(e)})))};var re,ie,oe,ae,se,ue,ce,de,ge,le,he,fe,pe,ve,me,_e,we,be,ye,ke,xe,Ce,Ee,Ie,Ae,Se,Te,Re,Me,je,Pe,De,Le,Oe,Fe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=W.insert(e,t):z.is(n)?(i=n,r=X.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=W.replace(e,t):z.is(n)?(i=n,r=X.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=W.del(e):z.is(t)?(r=t,n=X.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=X.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),tt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(z.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new tt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if($.is(e)){var n=new et(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new et(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(se.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new et(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new et(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Q.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Q.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(H.is(n)||z.is(n)?i=n:r=n,void 0===i?o=J.create(e,t,r):(a=z.is(i)?i:this._changeAnnotations.manage(i),o=J.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Z.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Z.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(ie=re||(re={})).create=function(e){return{uri:e}},ie.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)},(ae=oe||(oe={})).create=function(e,t){return{uri:e,version:t}},ae.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&nt.integer(t.version)},(ue=se||(se={})).create=function(e,t){return{uri:e,version:t}},ue.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&(null===t.version||nt.integer(t.version))},(de=ce||(ce={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},de.is=function(e){var t=e;return nt.defined(t)&&nt.string(t.uri)&&nt.string(t.languageId)&&nt.integer(t.version)&&nt.string(t.text)},(le=ge||(ge={})).PlainText="plaintext",le.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(ge||(ge={})),(he||(he={})).is=function(e){var t=e;return nt.objectLiteral(e)&&ge.is(t.kind)&&nt.string(t.value)},(pe=fe||(fe={})).Text=1,pe.Method=2,pe.Function=3,pe.Constructor=4,pe.Field=5,pe.Variable=6,pe.Class=7,pe.Interface=8,pe.Module=9,pe.Property=10,pe.Unit=11,pe.Value=12,pe.Enum=13,pe.Keyword=14,pe.Snippet=15,pe.Color=16,pe.File=17,pe.Reference=18,pe.Folder=19,pe.EnumMember=20,pe.Constant=21,pe.Struct=22,pe.Event=23,pe.Operator=24,pe.TypeParameter=25,(me=ve||(ve={})).PlainText=1,me.Snippet=2,(_e||(_e={})).Deprecated=1,(be=we||(we={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},be.is=function(e){var t=e;return t&&nt.string(t.newText)&&h.is(t.insert)&&h.is(t.replace)},(ke=ye||(ye={})).asIs=1,ke.adjustIndentation=2,(xe||(xe={})).create=function(e){return{label:e}},(Ce||(Ce={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ie=Ee||(Ee={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ie.is=function(e){var t=e;return nt.string(t)||nt.objectLiteral(t)&&nt.string(t.language)&&nt.string(t.value)},(Ae||(Ae={})).is=function(e){var t=e;return!!t&&nt.objectLiteral(t)&&(he.is(t.contents)||Ee.is(t.contents)||nt.typedArray(t.contents,Ee.is))&&(void 0===e.range||h.is(e.range))},(Se||(Se={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Te||(Te={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return nt.defined(t)&&(i.documentation=t),nt.defined(n)?i.parameters=n:i.parameters=[],i},(Me=Re||(Re={})).Text=1,Me.Read=2,Me.Write=3,(je||(je={})).create=function(e,t){var n={range:e};return nt.number(t)&&(n.kind=t),n},(De=Pe||(Pe={})).File=1,De.Module=2,De.Namespace=3,De.Package=4,De.Class=5,De.Method=6,De.Property=7,De.Field=8,De.Constructor=9,De.Enum=10,De.Interface=11,De.Function=12,De.Variable=13,De.Constant=14,De.String=15,De.Number=16,De.Boolean=17,De.Array=18,De.Object=19,De.Key=20,De.Null=21,De.EnumMember=22,De.Struct=23,De.Event=24,De.Operator=25,De.TypeParameter=26,(Le||(Le={})).Deprecated=1,(Oe||(Oe={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ne=Fe||(Fe={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ne.is=function(e){var t=e;return t&&nt.string(t.name)&&nt.number(t.kind)&&h.is(t.range)&&h.is(t.selectionRange)&&(void 0===t.detail||nt.string(t.detail))&&(void 0===t.deprecated||nt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(We=Ue||(Ue={})).Empty="",We.QuickFix="quickfix",We.Refactor="refactor",We.RefactorExtract="refactor.extract",We.RefactorInline="refactor.inline",We.RefactorRewrite="refactor.rewrite",We.Source="source",We.SourceOrganizeImports="source.organizeImports",We.SourceFixAll="source.fixAll",(He=Ve||(Ve={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},He.is=function(e){var t=e;return nt.defined(t)&&nt.typedArray(t.diagnostics,O.is)&&(void 0===t.only||nt.typedArray(t.only,nt.string))},(ze=Ke||(Ke={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):N.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},ze.is=function(e){var t=e;return t&&nt.string(t.title)&&(void 0===t.diagnostics||nt.typedArray(t.diagnostics,O.is))&&(void 0===t.kind||nt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||N.is(t.command))&&(void 0===t.isPreferred||nt.boolean(t.isPreferred))&&(void 0===t.edit||te.is(t.edit))},(Be=Xe||(Xe={})).create=function(e,t){var n={range:e};return nt.defined(t)&&(n.data=t),n},Be.is=function(e){var t=e;return nt.defined(t)&&h.is(t.range)&&(nt.undefined(t.command)||N.is(t.command))},(qe=$e||($e={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},qe.is=function(e){var t=e;return nt.defined(t)&&nt.uinteger(t.tabSize)&&nt.boolean(t.insertSpaces)},(Ge=Qe||(Qe={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ge.is=function(e){var t=e;return nt.defined(t)&&h.is(t.range)&&(nt.undefined(t.target)||nt.string(t.target))},(Ye=Je||(Je={})).create=function(e,t){return{range:e,parent:t}},Ye.is=function(e){var t=e;return void 0!==t&&h.is(t.range)&&(void 0===t.parent||Ye.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new ot(e,t,n,r)},e.is=function(e){var t=e;return!!(nt.defined(t)&&nt.string(t.uri)&&(nt.undefined(t.languageId)||nt.string(t.languageId))&&nt.uinteger(t.lineCount)&&nt.func(t.getText)&&nt.func(t.positionAt)&&nt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(Ze||(Ze={}));var nt,rt,it,ot=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return g.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return g.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();function at(e){switch(e){case M.Error:return a.MarkerSeverity.Error;case M.Warning:return a.MarkerSeverity.Warning;case M.Information:return a.MarkerSeverity.Info;case M.Hint:return a.MarkerSeverity.Hint;default:return a.MarkerSeverity.Info}}function st(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ut(e){if(e)return new a.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ct(e){const t=a.languages.CompletionItemKind;switch(e){case fe.Text:return t.Text;case fe.Method:return t.Method;case fe.Function:return t.Function;case fe.Constructor:return t.Constructor;case fe.Field:return t.Field;case fe.Variable:return t.Variable;case fe.Class:return t.Class;case fe.Interface:return t.Interface;case fe.Module:return t.Module;case fe.Property:return t.Property;case fe.Unit:return t.Unit;case fe.Value:return t.Value;case fe.Enum:return t.Enum;case fe.Keyword:return t.Keyword;case fe.Snippet:return t.Snippet;case fe.Color:return t.Color;case fe.File:return t.File;case fe.Reference:return t.Reference}return t.Property}function dt(e){if(e)return{range:ut(e.range),text:e.newText}}function gt(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}function lt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function ht(e){if(e)return Array.isArray(e)?e.map(lt):[lt(e)]}function ft(e){switch(e){case Re.Read:return a.languages.DocumentHighlightKind.Read;case Re.Write:return a.languages.DocumentHighlightKind.Write;case Re.Text:return a.languages.DocumentHighlightKind.Text}return a.languages.DocumentHighlightKind.Text}function pt(e){return{uri:a.Uri.parse(e.uri),range:ut(e.range)}}function vt(e){let t=a.languages.SymbolKind;switch(e){case Pe.File:return t.Array;case Pe.Module:return t.Module;case Pe.Namespace:return t.Namespace;case Pe.Package:return t.Package;case Pe.Class:return t.Class;case Pe.Method:return t.Method;case Pe.Property:return t.Property;case Pe.Field:return t.Field;case Pe.Constructor:return t.Constructor;case Pe.Enum:return t.Enum;case Pe.Interface:return t.Interface;case Pe.Function:return t.Function;case Pe.Variable:return t.Variable;case Pe.Constant:return t.Constant;case Pe.String:return t.String;case Pe.Number:return t.Number;case Pe.Boolean:return t.Boolean;case Pe.Array:return t.Array}return t.Function}function mt(e){return{dispose:()=>_t(e)}}function _t(e){for(;e.length;)e.pop().dispose()}rt=nt||(nt={}),it=Object.prototype.toString,rt.defined=function(e){return void 0!==e},rt.undefined=function(e){return void 0===e},rt.boolean=function(e){return!0===e||!1===e},rt.string=function(e){return"[object String]"===it.call(e)},rt.number=function(e){return"[object Number]"===it.call(e)},rt.numberRange=function(e,t,n){return"[object Number]"===it.call(e)&&t<=e&&e<=n},rt.integer=function(e){return"[object Number]"===it.call(e)&&-2147483648<=e&&e<=2147483647},rt.uinteger=function(e){return"[object Number]"===it.call(e)&&0<=e&&e<=2147483647},rt.func=function(e){return"[object Function]"===it.call(e)},rt.objectLiteral=function(e){return null!==e&&"object"==typeof e},rt.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}}}));
