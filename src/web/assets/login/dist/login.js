!function(){var t={881:function(){},84:function(t,e,i){var n=i(881);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,i(673).Z)("81d37080",n,!0,{})},673:function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],a=s[0],o={id:t+":"+r,css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(o):i.push(n[a]={id:a,parts:[o]})}return i}i.d(e,{Z:function(){return m}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,h=!1,u=function(){},c=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,e,i,r){h=i,c=r||{};var a=n(t,e);return g(a),function(e){for(var i=[],r=0;r<a.length;r++){var o=a[r];(l=s[o.id]).refs--,i.push(l)}for(e?g(a=n(t,e)):a=[],r=0;r<i.length;r++){var l;if(0===(l=i[r]).refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete s[l.id]}}}}function g(t){for(var e=0;e<t.length;e++){var i=t[e],n=s[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(v(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(v(i.parts[r]));s[i.id]={id:i.id,refs:1,parts:a}}}}function f(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function v(t){var e,i,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(h)return u;n.parentNode.removeChild(n)}if(p){var r=l++;n=o||(o=f()),e=b.bind(null,n,r,!1),i=b.bind(null,n,r,!0)}else n=f(),e=y.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var C,$=(C=[],function(t,e){return C[t]=e,C.filter(Boolean).join("\n")});function b(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=$(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function y(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),c.ssrId&&t.setAttribute(d,e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,i),s.exports}i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};!function(){"use strict";i.r(n),i.d(n,{AuthenticationChainHandler:function(){return e},AuthenticationStep:function(){return r},AuthenticatorCodeStep:function(){return l},EmailCodeStep:function(){return a},LoginForm:function(){return t},PasswordStep:function(){return o},VerificationCode:function(){return s},WebAuthnStep:function(){return h}}),i(84);class t{constructor(){this.disabled=!1,Craft.AuthenticationChainHandler=new e(this,(()=>({rememberMe:this.$rememberMe.find("input").prop("checked")}))),this.prepareForm(),this.$pendingSpinner.length&&this.$loginForm.trigger("submit")}get $loginForm(){return $("#login-form")}get $errors(){return $("#login-errors")}get $messages(){return $("#login-messages")}get $pendingSpinner(){return $("#spinner-pending")}get $submit(){return $("#submit")}get $rememberMe(){return $("#remember-me-container")}get $username(){return $("#username-field input")}get $cancelRecover(){return $("#cancel-recover")}get $recoverAccount(){return $("#recover-account")}get $alternatives(){return $("#alternative-types")}get $restartAuthentication(){return $("#restart-authentication")}get $usernameField(){return $("#username-field")}get $recoveryButtons(){return $("#recover-account, #cancel-recover")}get $authenticationGreeting(){return $("#authentication-greeting")}get $recoveryMessage(){return $("#recovery-message")}get canRememberUser(){return this.$loginForm.data("can-remember")}prepareForm(){this.$alternatives.on("click","li",(t=>{Craft.AuthenticationChainHandler.switchStep($(t.target).attr("rel"))})),this.canRememberUser&&(Craft.AuthenticationChainHandler.isExistingChain()?this.hideRememberMe():this.showRememberMe()),this.$restartAuthentication.on("click",Craft.AuthenticationChainHandler.restartAuthentication.bind(Craft.AuthenticationChainHandler)),this.$recoveryButtons.on("click",(()=>{Craft.AuthenticationChainHandler.toggleRecoverAccount(),this.toggleRecoverAccountForm()}))}resetLoginForm(){this.$authenticationGreeting.remove(),this.$usernameField.removeClass("hidden"),this.$recoveryMessage.addClass("hidden"),this.showSubmitButton(),this.showRememberMe(),this.hideAlternatives(),this.clearErrors(),Craft.AuthenticationChainHandler.isRecoveringAccount()&&this.$recoveryButtons.toggleClass("hidden")}hideAlternatives(){this.$alternatives.addClass("hidden"),this.$alternatives.find("ul").empty()}showAlternatives(t){this.$alternatives.removeClass("hidden").find("ul").empty().append($(t))}toggleRecoverAccountForm(){const t=Craft.AuthenticationChainHandler.isRecoveringAccount();this.$recoveryButtons.toggleClass("hidden"),t?this.$recoveryMessage.removeClass("hidden"):this.$recoveryMessage.addClass("hidden"),Craft.AuthenticationChainHandler.isExistingChain()&&(t?(this.$usernameField.removeClass("hidden"),this.$alternatives.addClass("hidden")):(this.$usernameField.addClass("hidden"),this.$alternatives.removeClass("hidden")))}showError(t){this.clearErrors(),$('<p style="display: none;">'+t+"</p>").appendTo(this.$errors).velocity("fadeIn")}showMessage(t){this.clearMessages(),$('<p style="display: none;">'+t+"</p>").appendTo(this.$messages).velocity("fadeIn")}clearErrors(){this.$errors.empty()}clearMessages(){this.$messages.empty()}enableForm(){this.$submit.addClass("active"),this.$submit.removeClass("loading"),this.$loginForm.fadeTo(100,1),this.disabled=!1}disableForm(){this.$submit.removeClass("active"),this.$loginForm.fadeTo(100,.2,(()=>this.$submit.addClass("loading"))),this.disabled=!0}isDisabled(){return this.disabled}showRememberMe(){this.canRememberUser&&(this.$loginForm.addClass("remember-me"),this.$rememberMe.removeClass("hidden"))}hideRememberMe(){this.$loginForm.removeClass("remember-me"),this.$rememberMe.addClass("hidden")}showSubmitButton(){this.$submit.removeClass("hidden")}hideSubmitButton(){this.$submit.addClass("hidden")}}class e{constructor(t,e){this.performAuthenticationEndpoint="authentication/perform-authentication",this.startAuthenticationEndpoint="authentication/start-authentication",this.recoverAccountEndpoint="users/send-password-reset-email",this.recoverAccount=!1,this.authenticationSteps={},this.loginForm=t,this.loginForm.$loginForm.on("submit",(i=>{let n=e?e():{};this.isExistingChain()||(n.loginName=t.$username.val()),this.clearErrors(),this.handleFormSubmit(i,n),i.preventDefault()}))}get $authenticationStep(){return $("#authentication-step")}isRecoveringAccount(){return this.recoverAccount}resetAuthenticationControls(){this.$authenticationStep.empty().attr("rel",""),this.recoverAccount=!1}registerAuthenticationStep(t,e){this.authenticationSteps[t]=e}restartAuthentication(t){this.resetAuthenticationControls(),this.loginForm.resetLoginForm(),Craft.sendActionRequest("POST",this.startAuthenticationEndpoint),t&&t.preventDefault()}toggleRecoverAccount(){if(this.recoverAccount=!this.recoverAccount,!this.isExistingChain())return;let t;this.$authenticationStep.attr("rel").length>0&&(t=this.authenticationSteps[this.$authenticationStep.attr("rel")]),this.recoverAccount?(this.$authenticationStep.addClass("hidden"),null==t||t.cleanup()):(this.$authenticationStep.removeClass("hidden"),this.$authenticationStep.attr("rel"),null==t||t.init())}switchStep(t){if(this.loginForm.isDisabled())return;this.loginForm.disableForm(),this.clearErrors(),this.updateCurrentStepType();const e={alternateStep:t};this.performStep(this.performAuthenticationEndpoint,{data:e})}updateCurrentStepType(){this.currentStep=this.authenticationSteps[this.$authenticationStep.attr("rel")]}performStep(t,e){return Craft.sendActionRequest("POST",t,{data:e}).then((t=>{var e,i,n;const r=null==t?void 0:t.data;if(null===(e=null==r?void 0:r.returnUrl)||void 0===e?void 0:e.length)return void(window.location.href=r.returnUrl);(null==r?void 0:r.message)&&this.loginForm.showMessage(r.message),(null==r?void 0:r.passwordReset)&&(this.loginForm.toggleRecoverAccountForm(),this.restartAuthentication()),(null==r?void 0:r.alternatives)&&Object.keys(r.alternatives).length>0?this.showAlternatives(r.alternatives):this.loginForm.hideAlternatives(),(null==r?void 0:r.stepType)&&this.$authenticationStep.attr("rel",r.stepType),(null==r?void 0:r.footHtml)&&function(t){const e=t.match(/([^"']+\.js)/gm),i=Array.from(document.scripts).map((t=>t.getAttribute("src"))).filter((t=>t&&t.length>0));if(e){for(const t of e)if(!i.includes(t)){let e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)}}else Craft.appendBodyHtml(t)}(r.footHtml);const s=t=>{this.authenticationSteps[t]&&this.authenticationSteps[t].init()};(null==r?void 0:r.html)&&(null===(i=this.currentStep)||void 0===i||i.cleanup(),this.$authenticationStep.html(null==r?void 0:r.html),s(null==r?void 0:r.stepType)),(null==r?void 0:r.loginFormHtml)&&(null===(n=this.currentStep)||void 0===n||n.cleanup(),this.loginForm.$loginForm.html(null==r?void 0:r.loginFormHtml),this.loginForm.prepareForm(),s(null==r?void 0:r.stepType)),(null==r?void 0:r.stepComplete)&&this.loginForm.hideRememberMe()})).catch((({response:t})=>{const e=null==t?void 0:t.data;(null==e?void 0:e.message)&&(this.loginForm.showError(t.data.message),Garnish.shake(this.loginForm.$loginForm))})).finally((()=>this.loginForm.enableForm()))}showAlternatives(t){let e="";for(const[i,n]of Object.entries(t))e+=`<li rel="${i}">${n}</li>`;this.loginForm.showAlternatives(e)}handleFormSubmit(t,e){this.invokeStepHandler(t,e)}triggerLoginFormSubmit(){this.loginForm.$loginForm.trigger("submit")}hideSubmitButton(){this.loginForm.$submit.removeClass("hidden")}showSubmitButton(){this.loginForm.$submit.addClass("hidden")}async invokeStepHandler(t,e){try{let t;if(this.isExistingChain()?(this.updateCurrentStepType(),t=Object.assign(Object.assign({},await this.currentStep.prepareData()),e)):t=e,this.loginForm.isDisabled())return;this.loginForm.disableForm();const i=this.recoverAccount?this.recoverAccountEndpoint:this.isExistingChain()?this.performAuthenticationEndpoint:this.startAuthenticationEndpoint;this.performStep(i,t)}catch(t){this.loginForm.showError(t),this.loginForm.enableForm()}}isExistingChain(){return this.$authenticationStep.attr("rel").length>0}clearErrors(){this.loginForm.clearErrors()}}class r{constructor(t){this.validateOnInput=!1,this.stepType=t,Craft.AuthenticationChainHandler.registerAuthenticationStep(t,this),this.doInit()}doInit(){this.cleanup(),this.init()}onInput(t){this.validateOnInput&&!0===this.validate()&&Craft.AuthenticationChainHandler.clearErrors()}async prepareData(){const t=this.validate();if(!0!==t)throw this.validateOnInput=!0,t;this.validateOnInput=!1;let e=await this.returnFormData();return e.stepType=this.stepType,e}}class s extends r{constructor(t){super(t)}get $verificationCode(){return $("#verificationCode")}init(){this.$verificationCode.on("input",this.onInput.bind(this))}cleanup(){this.$verificationCode.off("input",this.onInput.bind(this))}validate(){return 0!==this.$verificationCode.val().length||Craft.t("app","Please enter a verification code")}returnFormData(){return{"verification-code":this.$verificationCode.val()}}}class a extends s{constructor(){super("craft\\authentication\\type\\EmailCode")}}class o extends r{constructor(){super("craft\\authentication\\type\\Password"),this.passwordSelector="#password"}get $passwordField(){return $(this.passwordSelector)}init(){this.passwordInput=new Craft.PasswordInput(this.passwordSelector,{onToggleInput:t=>{this.$passwordField.off("input"),this.$passwordField.replaceWith(t),this.$passwordField.on("input",this.onInput.bind(this))}}),this.$passwordField.on("input",this.onInput.bind(this))}cleanup(){delete this.passwordInput,delete this.passwordInput,this.$passwordField.off("input",this.onInput.bind(this))}validate(){const t=this.$passwordField.val().length;return t<window.minPasswordLength?Craft.t("yii","{attribute} should contain at least {min, number} {min, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),min:window.minPasswordLength}):!(t>window.maxPasswordLength)||Craft.t("yii","{attribute} should contain at most {max, number} {max, plural, one{character} other{characters}}.",{attribute:Craft.t("app","Password"),max:window.maxPasswordLength})}returnFormData(){return{password:this.$passwordField.val()}}}class l extends s{constructor(){super("craft\\authentication\\type\\AuthenticatorCode")}}class h extends r{constructor(){super("craft\\authentication\\type\\WebAuthn")}get $button(){return $("#verify-webauthn")}validate(){return this.$button.addClass("hidden"),!0}init(){this.$button.on("click",this.onButtonClick.bind(this)),Craft.AuthenticationChainHandler.hideSubmitButton()}cleanup(){this.$button.off("click",this.onButtonClick.bind(this)),Craft.AuthenticationChainHandler.showSubmitButton()}onButtonClick(){Craft.AuthenticationChainHandler.triggerLoginFormSubmit()}async returnFormData(){const t=this.$button.data("request-options"),e=Object.assign({},t);if(!t)return{};t.allowCredentials&&(e.allowCredentials=[...t.allowCredentials]),e.challenge=atob(e.challenge.replace(/-/g,"+").replace(/_/g,"/")),e.challenge=Uint8Array.from(e.challenge,(t=>t.charCodeAt(0)));for(const t in e.allowCredentials){let i=e.allowCredentials[t];e.allowCredentials[t]={id:Uint8Array.from(atob(i.id.replace(/-/g,"+").replace(/_/g,"/")),(t=>t.charCodeAt(0))),type:i.type}}let i;try{i=await navigator.credentials.get({publicKey:e})}catch(t){throw this.$button.removeClass("hidden"),Craft.t("app","Failed to authenticate")}const n=i.response;return{credentialResponse:{id:i.id,rawId:i.id,response:{authenticatorData:btoa(String.fromCharCode(...new Uint8Array(n.authenticatorData))),clientDataJSON:btoa(String.fromCharCode(...new Uint8Array(n.clientDataJSON))),signature:btoa(String.fromCharCode(...new Uint8Array(n.signature))),userHandle:n.userHandle?btoa(String.fromCharCode(...new Uint8Array(n.userHandle))):null},type:i.type}}}}}();var r=Craft="undefined"==typeof Craft?{}:Craft;for(var s in n)r[s]=n[s];n.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();
//# sourceMappingURL=Login.js.map