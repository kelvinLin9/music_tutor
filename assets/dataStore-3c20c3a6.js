import{af as ki,ag as cl,ah as ll,a3 as gr,a4 as _r,a5 as _n,a8 as Er,ai as ul,a7 as Ci,aj as dl,ac as ut,ae as j,ak as Ar,al as hl,am as fl,aa as Bt,an as G,ad as Si,a6 as Dn,ao as pl,ap as jt,aq as ml,ar as gl,as as At,at as Pt,a9 as _l,ab as yl,W as be,X as wl,a0 as vl,a1 as le,a2 as on}from"./index-d816d980.js";function Pr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function $s(n){return n!==void 0&&n.enterprise!==void 0}class Il{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}function Ri(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tl=Ri,Di=new Ar("auth","Firebase",Ri());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Si("@firebase/auth");function bl(n,...e){yn.logLevel<=Bt.WARN&&yn.warn(`Auth (${ut}): ${n}`,...e)}function dn(n,...e){yn.logLevel<=Bt.ERROR&&yn.error(`Auth (${ut}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,...e){throw kr(n,...e)}function de(n,...e){return kr(n,...e)}function Oi(n,e,t){const r=Object.assign(Object.assign({},Tl()),{[e]:t});return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function El(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&se(n,"argument-error"),Oi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Di.create(n,...e)}function y(n,e,...t){if(!n)throw kr(e,...t)}function me(n){const e="INTERNAL ASSERTION FAILED: "+n;throw dn(e),new Error(e)}function ye(n,e){n||me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Al(){return Ws()==="http:"||Ws()==="https:"}function Ws(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Al()||dl()||"connection"in navigator)?navigator.onLine:!0}function kl(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ye(t>e,"Short delay should be less than long delay!"),this.isMobile=cl()||ll()}get(){return Pl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new qt(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function De(n,e,t,r,o={}){return Vi(n,o,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const h=jt(Object.assign({key:n.config.apiKey},l)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),Ni.fetch()(Li(n,n.config.apiHost,t,h),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},a))})}async function Vi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cl),e);try{const o=new Rl(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw an(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const h=a.ok?l.errorMessage:l.error.message,[d,m]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw an(n,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw an(n,"email-already-in-use",l);if(d==="USER_DISABLED")throw an(n,"user-disabled",l);const g=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Oi(n,g,m);se(n,g)}}catch(o){if(o instanceof Dn)throw o;se(n,"network-request-failed",{message:String(o)})}}async function Ht(n,e,t,r,o={}){const a=await De(n,e,t,r,o);return"mfaPendingCredential"in a&&se(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Li(n,e,t,r){const o=`${e}${t}?${r}`;return n.config.emulator?Cr(n.config,o):`${n.config.apiScheme}://${o}`}class Rl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(de(this.auth,"network-request-failed")),Sl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function an(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=de(n,e,r);return o.customData._tokenResponse=t,o}async function Dl(n,e){return De(n,"GET","/v2/recaptchaConfig",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(n,e){return De(n,"POST","/v1/accounts:delete",e)}async function Nl(n,e){return De(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vl(n,e=!1){const t=j(n),r=await t.getIdToken(e),o=Sr(r);y(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:kt(lr(o.auth_time)),issuedAtTime:kt(lr(o.iat)),expirationTime:kt(lr(o.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function lr(n){return Number(n)*1e3}function Sr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return dn("JWT malformed, contained fewer than 3 sections"),null;try{const o=ml(t);return o?JSON.parse(o):(dn("Failed to decode base64 JWT payload"),null)}catch(o){return dn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ll(n){const e=Sr(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dn&&Ml(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ml({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n){var e;const t=n.auth,r=await n.getIdToken(),o=await Ot(n,Nl(t,{idToken:r}));y(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Bl(a.providerUserInfo):[],h=Ul(n.providerData,l),d=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),g=d?m:!1,I={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Mi(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,I)}async function xl(n){const e=j(n);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ul(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Bl(n){return n.map(e=>{var{providerId:t}=e,r=Pr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(n,e){const t=await Vi(n,{},async()=>{const r=jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,l=Li(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Ni.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ll(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await jl(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,l=new Nt;return r&&(y(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(y(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),a&&(y(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=Pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Mi(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vl(this,e)}reload(){return xl(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ot(this,Ol(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,l,h,d,m,g;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(o=t.email)!==null&&o!==void 0?o:void 0,w=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,ne=(l=t.photoURL)!==null&&l!==void 0?l:void 0,pt=(h=t.tenantId)!==null&&h!==void 0?h:void 0,f=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,Hn=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Oe=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:ze,emailVerified:Ke,isAnonymous:M,providerData:ie,stsTokenManager:mt}=t;y(ze&&mt,e,"internal-error");const $n=Nt.fromJSON(this.name,mt);y(typeof ze=="string",e,"internal-error"),Ee(I,e.name),Ee(b,e.name),y(typeof Ke=="boolean",e,"internal-error"),y(typeof M=="boolean",e,"internal-error"),Ee(w,e.name),Ee(ne,e.name),Ee(pt,e.name),Ee(f,e.name),Ee(Hn,e.name),Ee(Oe,e.name);const gt=new Ue({uid:ze,auth:e,email:b,emailVerified:Ke,displayName:I,isAnonymous:M,photoURL:ne,phoneNumber:w,tenantId:pt,stsTokenManager:$n,createdAt:Hn,lastLoginAt:Oe});return ie&&Array.isArray(ie)&&(gt.providerData=ie.map(Ge=>Object.assign({},Ge))),f&&(gt._redirectEventId=f),gt}static async _fromIdTokenResponse(e,t,r=!1){const o=new Nt;o.updateFromServerResponse(t);const a=new Ue({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await wn(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map;function ge(n){ye(n instanceof Function,"Expected a class definition");let e=zs.get(n);return e?(ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zs.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fi.type="NONE";const Ks=Fi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n,e,t){return`firebase:${n}:${e}:${t}`}class st{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=hn(this.userKey,o.apiKey,a),this.fullPersistenceKey=hn("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new st(ge(Ks),e,r);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||ge(Ks);const l=hn(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const g=await m._get(l);if(g){const I=Ue._fromJSON(e,g);m!==a&&(h=I),a=m;break}}catch{}const d=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new st(a,e,r):(a=d[0],h&&await a._set(l,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new st(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qi(e))return"Blackberry";if(Hi(e))return"Webos";if(Rr(e))return"Safari";if((e.includes("chrome/")||Ui(e))&&!e.includes("edge/"))return"Chrome";if(ji(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xi(n=G()){return/firefox\//i.test(n)}function Rr(n=G()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ui(n=G()){return/crios\//i.test(n)}function Bi(n=G()){return/iemobile/i.test(n)}function ji(n=G()){return/android/i.test(n)}function qi(n=G()){return/blackberry/i.test(n)}function Hi(n=G()){return/webos/i.test(n)}function On(n=G()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ql(n=G()){var e;return On(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hl(){return pl()&&document.documentMode===10}function $i(n=G()){return On(n)||ji(n)||Hi(n)||qi(n)||/windows phone/i.test(n)||Bi(n)}function $l(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e=[]){let t;switch(n){case"Browser":t=Gs(G());break;case"Worker":t=`${Gs(G())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ut}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,h)=>{try{const d=e(a);l(d)}catch(d){h(d)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(n,e={}){return De(n,"GET","/v2/passwordPolicy",Re(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=6;class Gl{constructor(e){var t,r,o,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:Kl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,l,h;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(o=d.containsLowercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsUppercaseLetter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(h=d.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ys(this),this.idTokenSubscription=new Ys(this),this.beforeStateQueue=new Wl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Di,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await st.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===h)&&(d!=null&&d.user)&&(o=d.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?j(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zl(this),t=new Gl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await st.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(h,this,"internal-error"),h.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,o);return()=>{l=!0,d()}}else{const d=e.addObserver(t);return()=>{l=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bl(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ve(n){return j(n)}class Ys{constructor(e){this.auth=e,this.observer=null,this.addObserver=hl(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function zi(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=de("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",Jl().appendChild(r)})}function Ql(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Xl="https://www.google.com/recaptcha/enterprise.js?render=",Zl="recaptcha-enterprise",eu="NO_RECAPTCHA";class tu{constructor(e){this.type=Zl,this.auth=ve(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,h)=>{Dl(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new Il(d);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(d=>{h(d)})})}function o(a,l,h){const d=window.grecaptcha;$s(d)?d.enterprise.ready(()=>{d.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(eu)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,l)=>{r(this.auth).then(h=>{if(!t&&$s(window.grecaptcha))o(h,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}zi(Xl+h).then(()=>{o(h,a,l)}).catch(d=>{l(d)})}}).catch(h=>{l(h)})})}}async function ot(n,e,t,r=!1){const o=new tu(n);let a;try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,e){const t=Er(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(fl(a,e??{}))return o;se(o,"already-initialized")}return t.initialize({options:e})}function ru(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function su(n,e,t){const r=ve(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),a=Ki(e),{host:l,port:h}=iu(e),d=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||ou()}function Ki(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iu(n){const e=Ki(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Js(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:Js(l)}}}function Js(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ou(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return me("not implemented")}_getIdTokenResponse(e){return me("not implemented")}_linkToIdToken(e,t){return me("not implemented")}_getReauthenticationResolver(e){return me("not implemented")}}async function au(n,e){return De(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(n,e){return Ht(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}async function cu(n,e){return De(n,"POST","/v1/accounts:sendOobCode",Re(n,e))}async function dr(n,e){return cu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(n,e){return Ht(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function uu(n,e){return Ht(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Dr{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Vt(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vt(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const o=await ot(e,r,"signInWithPassword");return ur(e,o)}else return ur(e,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await ot(e,r,"signInWithPassword");return ur(e,a)}else return Promise.reject(o)});case"emailLink":return lu(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return au(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uu(e,{idToken:t,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(n,e){return Ht(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="http://localhost";class je extends Dr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=Pr(t,["providerId","signInMethod"]);if(!r||!o)return null;const l=new je(r,o);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return it(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,it(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,it(e,t)}buildRequest(){const e={requestUri:du,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fu(n){const e=At(Pt(n)).link,t=e?At(Pt(e)).deep_link_id:null,r=At(Pt(n)).deep_link_id;return(r?At(Pt(r)).link:null)||r||t||e||n}class Or{constructor(e){var t,r,o,a,l,h;const d=At(Pt(e)),m=(t=d.apiKey)!==null&&t!==void 0?t:null,g=(r=d.oobCode)!==null&&r!==void 0?r:null,I=hu((o=d.mode)!==null&&o!==void 0?o:null);y(m&&g&&I,"argument-error"),this.apiKey=m,this.operation=I,this.code=g,this.continueUrl=(a=d.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=d.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=fu(e);try{return new Or(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Vt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Or.parseLink(t);return y(r,"argument-error"),Vt._fromEmailAndCode(e,r.code,r.tenantId)}}dt.PROVIDER_ID="password";dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends $t{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends $t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ke.credential(t,r)}catch{return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com";ke.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends $t{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends $t{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Se.credential(t,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e){return Ht(n,"POST","/v1/accounts:signUp",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Ue._fromIdTokenResponse(e,r,o),l=Qs(r);return new qe({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=Qs(r);return new qe({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function Qs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Dn{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,vn.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new vn(e,t,r,o)}}function Gi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?vn._fromErrorAndOperation(n,a,e,r):a})}async function pu(n,e,t=!1){const r=await Ot(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(n,e,t=!1){const{auth:r}=n,o="reauthenticate";try{const a=await Ot(n,Gi(r,o,e,n),t);y(a.idToken,r,"internal-error");const l=Sr(a.idToken);y(l,r,"internal-error");const{sub:h}=l;return y(n.uid===h,r,"user-mismatch"),qe._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&se(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){const r="signIn",o=await Gi(n,r,e),a=await qe._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function gu(n,e){return Yi(ve(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e,t){var r;y(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n){const e=ve(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zh(n,e,t){var r;const o=ve(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ot(o,a,"getOobCode",!0);t&&fr(o,l,t),await dr(o,l)}else t&&fr(o,a,t),await dr(o,a).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const h=await ot(o,a,"getOobCode",!0);t&&fr(o,h,t),await dr(o,h)}else return Promise.reject(l)})}async function ef(n,e,t){var r;const o=ve(n),a={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let l;if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const m=await ot(o,a,"signUpPassword");l=hr(o,m)}else l=hr(o,a).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const g=await ot(o,a,"signUpPassword");return hr(o,g)}throw m});const h=await l.catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Ji(n),m}),d=await qe._fromIdTokenResponse(o,"signIn",h);return await o._updateCurrentUser(d.user),d}function tf(n,e,t){return gu(j(n),dt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ji(n),r})}function _u(n,e,t,r){return j(n).onIdTokenChanged(e,t,r)}function yu(n,e,t){return j(n).beforeAuthStateChanged(e,t)}function Xs(n,e,t,r){return j(n).onAuthStateChanged(e,t,r)}function nf(n){return j(n).signOut()}const In="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){const n=G();return Rr(n)||On(n)}const vu=1e3,Iu=10;class Xi extends Qi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wu()&&$l(),this.fallbackToPolling=$i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,h,d)=>{this.notifyListeners(l,d)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const o=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);Hl()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Iu):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xi.type="LOCAL";const Tu=Xi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Qi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zi.type="SESSION";const eo=Zi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Nn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const h=Array.from(l).map(async m=>m(t.origin,a)),d=await bu(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,l;return new Promise((h,d)=>{const m=Vr("",20);o.port1.start();const g=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(I){const b=I;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(b.data.response);break;default:clearTimeout(g),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function Au(n){he().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function Pu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ku(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cu(){return to()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="firebaseLocalStorageDb",Su=1,Tn="firebaseLocalStorage",ro="fbase_key";class Wt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vn(n,e){return n.transaction([Tn],e?"readwrite":"readonly").objectStore(Tn)}function Ru(){const n=indexedDB.deleteDatabase(no);return new Wt(n).toPromise()}function wr(){const n=indexedDB.open(no,Su);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Tn,{keyPath:ro})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Tn)?e(r):(r.close(),await Ru(),e(await wr()))})})}async function Zs(n,e,t){const r=Vn(n,!0).put({[ro]:e,value:t});return new Wt(r).toPromise()}async function Du(n,e){const t=Vn(n,!1).get(e),r=await new Wt(t).toPromise();return r===void 0?null:r.value}function ei(n,e){const t=Vn(n,!0).delete(e);return new Wt(t).toPromise()}const Ou=800,Nu=3;class so{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Nu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return to()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nn._getInstance(Cu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Pu(),!this.activeServiceWorker)return;this.sender=new Eu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ku()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wr();return await Zs(e,In,"1"),await ei(e,In),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Du(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ei(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Vn(o,!1).getAll();return new Wt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ou)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}so.type="LOCAL";const Vu=so;new qt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n,e){return e?ge(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Dr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,t){return it(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lu(n){return Yi(n.auth,new Lr(n),n.bypassAuthState)}function Mu(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),mu(t,new Lr(n),n.bypassAuthState)}async function Fu(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),pu(t,new Lr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:l,type:h}=e;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lu;case"linkViaPopup":case"linkViaRedirect":return Fu;case"reauthViaPopup":case"reauthViaRedirect":return Mu;default:se(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new qt(2e3,1e4);async function rf(n,e,t){const r=ve(n);El(n,e,Nr);const o=io(r,t);return new xe(r,"signInViaPopup",e,o).executeNotNull()}class xe extends oo{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,xe.currentPopupAction&&xe.currentPopupAction.cancel(),xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){ye(this.filter.length===1,"Popup operations only handle one event");const e=Vr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xu.get())};e()}}xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="pendingRedirect",fn=new Map;class Bu extends oo{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const r=await ju(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ju(n,e){const t=$u(e),r=Hu(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function qu(n,e){fn.set(n._key(),e)}function Hu(n){return ge(n._redirectPersistence)}function $u(n){return hn(Uu,n.config.apiKey,n.name)}async function Wu(n,e,t=!1){const r=ve(n),o=io(r,e),l=await new Bu(r,o,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=10*60*1e3;class Ku{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ao(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(de(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zu&&this.cachedEventUids.clear(),this.cachedEventUids.has(ti(e))}saveEventToCache(e){this.cachedEventUids.add(ti(e)),this.lastProcessedEventTime=Date.now()}}function ti(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ao({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ao(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(n,e={}){return De(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qu=/^https?/;async function Xu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yu(n);for(const t of e)try{if(Zu(t))return}catch{}se(n,"unauthorized-domain")}function Zu(n){const e=yr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Qu.test(t))return!1;if(Ju.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new qt(3e4,6e4);function ni(){const n=he().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function td(n){return new Promise((e,t)=>{var r,o,a;function l(){ni(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ni(),t(de(n,"network-request-failed"))},timeout:ed.get()})}if(!((o=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=he().gapi)===null||a===void 0)&&a.load)l();else{const h=Ql("iframefcb");return he()[h]=()=>{gapi.load?l():t(de(n,"network-request-failed"))},zi(`https://apis.google.com/js/api.js?onload=${h}`).catch(d=>t(d))}}).catch(e=>{throw pn=null,e})}let pn=null;function nd(n){return pn=pn||td(n),pn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new qt(5e3,15e3),sd="__/auth/iframe",id="emulator/auth/iframe",od={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ad=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cd(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cr(e,id):`https://${n.config.authDomain}/${sd}`,r={apiKey:e.apiKey,appName:n.name,v:ut},o=ad.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${jt(r).slice(1)}`}async function ld(n){const e=await nd(n),t=he().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:cd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:od,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const l=de(n,"network-request-failed"),h=he().setTimeout(()=>{a(l)},rd.get());function d(){he().clearTimeout(h),o(r)}r.ping(d).then(d,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dd=500,hd=600,fd="_blank",pd="http://localhost";class ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function md(n,e,t,r=dd,o=hd){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const d=Object.assign(Object.assign({},ud),{width:r.toString(),height:o.toString(),top:a,left:l}),m=G().toLowerCase();t&&(h=Ui(m)?fd:t),xi(m)&&(e=e||pd,d.scrollbars="yes");const g=Object.entries(d).reduce((b,[w,ne])=>`${b}${w}=${ne},`,"");if(ql(m)&&h!=="_self")return gd(e||"",h),new ri(null);const I=window.open(e||"",h,g);y(I,n,"popup-blocked");try{I.focus()}catch{}return new ri(I)}function gd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="__/auth/handler",yd="emulator/auth/handler",wd=encodeURIComponent("fac");async function si(n,e,t,r,o,a){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ut,eventId:o};if(e instanceof Nr){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",gl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,I]of Object.entries(a||{}))l[g]=I}if(e instanceof $t){const g=e.getScopes().filter(I=>I!=="");g.length>0&&(l.scopes=g.join(","))}n.tenantId&&(l.tid=n.tenantId);const h=l;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];const d=await n._getAppCheckToken(),m=d?`#${wd}=${encodeURIComponent(d)}`:"";return`${vd(n)}?${jt(h).slice(1)}${m}`}function vd({config:n}){return n.emulator?Cr(n,yd):`https://${n.authDomain}/${_d}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="webStorageSupport";class Id{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eo,this._completeRedirectFn=Wu,this._overrideRedirectResult=qu}async _openPopup(e,t,r,o){var a;ye((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await si(e,t,r,yr(),o);return md(e,l,Vr())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await si(e,t,r,yr(),o);return Au(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(ye(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ld(e),r=new Ku(e);return t.register("authEvent",o=>(y(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pr,{type:pr},o=>{var a;const l=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[pr];l!==void 0&&t(!!l),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $i()||Rr()||On()}}const Td=Id;var ii="@firebase/auth",oi="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ad(n){gr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;y(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wi(n)},m=new Yl(r,o,a,d);return ru(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new _r("auth-internal",e=>{const t=ve(e.getProvider("auth").getImmediate());return(r=>new bd(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(ii,oi,Ed(n)),_n(ii,oi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=5*60,kd=ki("authIdTokenMaxAge")||Pd;let ai=null;const Cd=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kd)return;const o=t==null?void 0:t.token;ai!==o&&(ai=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sd(n=Ci()){const e=Er(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nu(n,{popupRedirectResolver:Td,persistence:[Vu,Tu,eo]}),r=ki("authTokenSyncURL");if(r){const a=Cd(r);yu(t,a,()=>a(t.currentUser)),_u(t,l=>a(l))}const o=ul("auth");return o&&su(t,`http://${o}`),t}Ad("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Si("@firebase/firestore");function bn(n,...e){if(at.logLevel<=Bt.DEBUG){const t=e.map(Fr);at.debug(`Firestore (${ht}): ${n}`,...t)}}function Mr(n,...e){if(at.logLevel<=Bt.ERROR){const t=e.map(Fr);at.error(`Firestore (${ht}): ${n}`,...t)}}function co(n,...e){if(at.logLevel<=Bt.WARN){const t=e.map(Fr);at.warn(`Firestore (${ht}): ${n}`,...t)}}function Fr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n="Unexpected state"){const e=`FIRESTORE (${ht}) INTERNAL ASSERTION FAILED: `+n;throw Mr(e),new Error(e)}function ee(n,e){n||C()}function zt(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="ok",Rd="cancelled",Ct="unknown",A="invalid-argument",Dd="deadline-exceeded",Od="not-found",Nd="permission-denied",vr="unauthenticated",Vd="resource-exhausted",ct="failed-precondition",Ld="aborted",Md="out-of-range",lo="unimplemented",Fd="internal",xd="unavailable";class v extends Dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(z.UNAUTHENTICATED))}shutdown(){}}class Bd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jd{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ee(typeof e.accessToken=="string"),new uo(e.accessToken,new z(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class qd{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Hd{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new qd(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $d{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wd{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(ee(typeof e.token=="string"),new $d(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r,o,a,l,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=m}}class Lt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Lt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lt&&e.projectId===this.projectId&&e.database===this.database}}class Mt{constructor(e,t,r){t===void 0?t=0:t>e.length&&C(),r===void 0?r=e.length-t:r>e.length-t&&C(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=e.get(o),l=t.get(o);if(a<l)return-1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends Mt{construct(e,t,r){return new L(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new v(A,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Kd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends Mt{construct(e,t,r){return new X(e,t,r)}static isValidIdentifier(e){return Kd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new v(A,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new v(A,"Path has trailing escape character: "+e);const d=e[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new v(A,"Path has invalid escape sequence: "+e);r+=d,o+=2}else h==="`"?(l=!l,o++):h!=="."||l?(r+=h,o++):(a(),o++)}if(a(),l)throw new v(A,"Unterminated ` in path: "+e);return new X(t)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(L.fromString(e))}static fromName(e){return new $(L.fromString(e).popFirst(5))}static empty(){return new $(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new L(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,e,t){if(!t)throw new v(A,`Function ${n}() cannot be called with an empty ${e}.`)}function li(n){if(!$.isDocumentKey(n))throw new v(A,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ui(n){if($.isDocumentKey(n))throw new v(A,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":C()}function ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new v(A,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xr(n);throw new v(A,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn=null;function Gd(){return cn===null?cn=function(){return 268435456+Math.round(2147483648*Math.random())}():cn++,"0x"+cn.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){return n==null}function En(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di,E;function hi(n){if(n===void 0)return Mr("RPC_ERROR","HTTP error has no status"),Ct;switch(n){case 200:return ci;case 400:return ct;case 401:return vr;case 403:return Nd;case 404:return Od;case 409:return Ld;case 416:return Md;case 429:return Vd;case 499:return Rd;case 500:return Ct;case 501:return lo;case 503:return xd;case 504:return Dd;default:return n>=200&&n<300?ci:n>=400&&n<500?ct:n>=500&&n<600?Fd:Ct}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(E=di||(di={}))[E.OK=0]="OK",E[E.CANCELLED=1]="CANCELLED",E[E.UNKNOWN=2]="UNKNOWN",E[E.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",E[E.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",E[E.NOT_FOUND=5]="NOT_FOUND",E[E.ALREADY_EXISTS=6]="ALREADY_EXISTS",E[E.PERMISSION_DENIED=7]="PERMISSION_DENIED",E[E.UNAUTHENTICATED=16]="UNAUTHENTICATED",E[E.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",E[E.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",E[E.ABORTED=10]="ABORTED",E[E.OUT_OF_RANGE=11]="OUT_OF_RANGE",E[E.UNIMPLEMENTED=12]="UNIMPLEMENTED",E[E.INTERNAL=13]="INTERNAL",E[E.UNAVAILABLE=14]="UNAVAILABLE",E[E.DATA_LOSS=15]="DATA_LOSS";class Qd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${o}/databases/${a}`,this.T=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}get P(){return!1}R(t,r,o,a,l){const h=Gd(),d=this.I(t,r);bn("RestConnection",`Sending RPC '${t}' ${h}:`,d,o);const m={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(m,a,l),this.p(t,d,m,o).then(g=>(bn("RestConnection",`Received RPC '${t}' ${h}: `,g),g),g=>{throw co("RestConnection",`RPC '${t}' ${h} failed with error: `,g,"url: ",d,"request:",o),g})}g(t,r,o,a,l,h){return this.R(t,r,o,a,l)}V(t,r,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ht}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,l)=>t[l]=a),o&&o.headers.forEach((a,l)=>t[l]=a)}I(t,r){const o=Jd[t];return`${this.m}/v1/${r}:${o}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,o){var a;const l=JSON.stringify(o);let h;try{h=await this.F(t,{method:"POST",headers:r,body:l})}catch(d){const m=d;throw new v(hi(m.status),"Request failed with error: "+m.statusText)}if(!h.ok){let d=await h.json();Array.isArray(d)&&(d=d[0]);const m=(a=d==null?void 0:d.error)===null||a===void 0?void 0:a.message;throw new v(hi(h.status),`Request failed with error: ${m??h.statusText}`)}return h.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=Xd(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%e.length))}return r}}function V(n,e){return n<e?-1:n>e?1:0}function po(n,e,t){return n.length===e.length&&n.every((r,o)=>t(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new eh("Invalid base64 string: "+a):a}}(e);return new we(t)}static fromUint8Array(e){const t=function(o){let a="";for(let l=0;l<o.length;++l)a+=String.fromCharCode(o[l]);return a}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const th=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function He(n){if(ee(!!n),typeof n=="string"){let e=0;const t=th.exec(n);if(ee(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:O(n.seconds),nanos:O(n.nanos)}}function O(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ft(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new v(A,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new v(A,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new v(A,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(A,"Timestamp seconds out of range: "+e)}static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new te(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function go(n){const e=n.mapValue.fields.__previous_value__;return mo(e)?go(e):e}function xt(n){const e=He(n.mapValue.fields.__local_write_time__.timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={fields:{__type__:{stringValue:"__max__"}}};function $e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mo(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:C()}function An(n,e){if(n===e)return!0;const t=$e(n);if(t!==$e(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xt(n).isEqual(xt(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const l=He(o.timestampValue),h=He(a.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Ft(o.bytesValue).isEqual(Ft(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return O(o.geoPointValue.latitude)===O(a.geoPointValue.latitude)&&O(o.geoPointValue.longitude)===O(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return O(o.integerValue)===O(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const l=O(o.doubleValue),h=O(a.doubleValue);return l===h?En(l)===En(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return po(n.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(o,a){const l=o.mapValue.fields||{},h=a.mapValue.fields||{};if(fi(l)!==fi(h))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(h[d]===void 0||!An(l[d],h[d])))return!1;return!0}(n,e);default:return C()}}function Ut(n,e){return(n.values||[]).find(t=>An(t,e))!==void 0}function Pn(n,e){if(n===e)return 0;const t=$e(n),r=$e(e);if(t!==r)return V(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(a,l){const h=O(a.integerValue||a.doubleValue),d=O(l.integerValue||l.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,e);case 3:return pi(n.timestampValue,e.timestampValue);case 4:return pi(xt(n),xt(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(a,l){const h=Ft(a),d=Ft(l);return h.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const h=a.split("/"),d=l.split("/");for(let m=0;m<h.length&&m<d.length;m++){const g=V(h[m],d[m]);if(g!==0)return g}return V(h.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const h=V(O(a.latitude),O(l.latitude));return h!==0?h:V(O(a.longitude),O(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(a,l){const h=a.values||[],d=l.values||[];for(let m=0;m<h.length&&m<d.length;++m){const g=Pn(h[m],d[m]);if(g)return g}return V(h.length,d.length)}(n.arrayValue,e.arrayValue);case 10:return function(a,l){if(a===ln&&l===ln)return 0;if(a===ln)return 1;if(l===ln)return-1;const h=a.fields||{},d=Object.keys(h),m=l.fields||{},g=Object.keys(m);d.sort(),g.sort();for(let I=0;I<d.length&&I<g.length;++I){const b=V(d[I],g[I]);if(b!==0)return b;const w=Pn(h[d[I]],m[g[I]]);if(w!==0)return w}return V(d.length,g.length)}(n.mapValue,e.mapValue);default:throw C()}}function pi(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=He(n),r=He(e),o=V(t.seconds,r.seconds);return o!==0?o:V(t.nanos,r.nanos)}function _o(n){return!!n&&"arrayValue"in n}function mi(n){return!!n&&"nullValue"in n}function gi(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mr(n){return!!n&&"mapValue"in n}function St(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=St(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=St(n.arrayValue.values[t]);return e}return Object.assign({},n)}class _i{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{}class fe extends yo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nh(e,t,r):t==="array-contains"?new ih(e,r):t==="in"?new oh(e,r):t==="not-in"?new ah(e,r):t==="array-contains-any"?new ch(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rh(e,r):new sh(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pn(t,this.value)):t!==null&&$e(this.value)===$e(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ln extends yo{constructor(e,t){super(),this.filters=e,this.op=t,this.S=null}static create(e,t){return new Ln(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.S!==null||(this.S=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.N(t=>t.isInequality());return e!==null?e.field:null}N(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class nh extends fe{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class rh extends fe{constructor(e,t){super(e,"in",t),this.keys=wo("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sh extends fe{constructor(e,t){super(e,"not-in",t),this.keys=wo("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wo(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class ih extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&Ut(t.arrayValue,this.value)}}class oh extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ut(this.value.arrayValue,t)}}class ah extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ut(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ut(this.value.arrayValue,t)}}class ch extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ut(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new te(0,0))}static max(){return new U(new te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new kn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new kn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new un(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new un(this.root,e,this.comparator,!1)}getReverseIterator(){return new un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new un(this.root,e,this.comparator,!0)}}class un{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??B.RED,this.left=o??B.EMPTY,this.right=a??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new B(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return B.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,r,o,a){return this}insert(e,t,r){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.comparator=e,this.data=new kn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yi(this.data.getIterator())}getIteratorFrom(e){return new yi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Cn(this.comparator);return t.data=e,t}}class yi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.fields=e,e.sort(X.comparator)}static empty(){return new We([])}unionWith(e){let t=new Cn(X.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.value=e}static empty(){return new Z({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=St(t)}setAll(e){let t=X.emptyPath(),r={},o=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const d=this.getFieldsMap(t);this.applyChanges(d,r,o),r={},o=[],t=h.popLast()}l?r[h.lastSegment()]=St(l):o.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());mr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];mr(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,(o,a)=>e[o]=a);for(const o of r)delete e[o]}clone(){return new Z(St(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,r,o,a,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=l,this.documentState=h}static newInvalidDocument(e){return new ue(e,0,U.min(),U.min(),U.min(),Z.empty(),0)}static newFoundDocument(e,t,r,o){return new ue(e,1,t,U.min(),r,o,0)}static newNoDocument(e,t){return new ue(e,2,t,U.min(),U.min(),Z.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,U.min(),U.min(),Z.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Z.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Z.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t=null,r=[],o=[],a=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=l,this.endAt=h,this.O=null}}function wi(n,e=null,t=[],r=[],o=null,a=null,l=null){return new lh(n,e,t,r,o,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t=null,r=[],o=[],a=null,l="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=l,this.startAt=h,this.endAt=d,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function dh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hh(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function fh(n){const e=zt(n);if(e.q===null){e.q=[];const t=hh(e),r=dh(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new mn(t)),e.q.push(new mn(X.keyField(),"asc"));else{let o=!1;for(const a of e.explicitOrderBy)e.q.push(a),a.field.isKeyField()&&(o=!0);if(!o){const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new mn(X.keyField(),a))}}}return e.q}function ph(n){const e=zt(n);return e.B||(e.B=mh(e,fh(n))),e.B}function mh(n,e){if(n.limitType==="F")return wi(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new mn(o.field,a)});const t=n.endAt?new _i(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _i(n.startAt.position,n.startAt.inclusive):null;return wi(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!En(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,o){if(r.useProto3Json){if(isNaN(o))return{doubleValue:"NaN"};if(o===1/0)return{doubleValue:"Infinity"};if(o===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:En(o)?"-0":o}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this._=void 0}}class _h extends Mn{}class yh extends Mn{constructor(e){super(),this.elements=e}}class wh extends Mn{constructor(e){super(),this.elements=e}}class vh extends Mn{constructor(e,t){super(),this.serializer=e,this.L=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Fn{}class vo extends Fn{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ur extends Fn{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}class Ih extends Fn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Th extends Fn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Eh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ah=(()=>({and:"AND",or:"OR"}))();class Ph{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ch(n,e){return Ir(n,e.toTimestamp())}function Rt(n){return ee(!!n),U.fromTimestamp(function(t){const r=He(t);return new te(r.seconds,r.nanos)}(n))}function Br(n,e){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Sn(n,e){return Br(n.databaseId,e.path)}function Tr(n,e){const t=function(o){const a=L.fromString(o);return ee(bo(a)),a}(e);if(t.get(1)!==n.databaseId.projectId)throw new v(A,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new v(A,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(function(o){return ee(o.length>4&&o.get(4)==="documents"),o.popFirst(5)}(t))}function vi(n,e){return Br(n.databaseId,e)}function Io(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ii(n,e,t){return{name:Sn(n,e),fields:t.value.mapValue.fields}}function Sh(n,e){return"found"in e?function(r,o){ee(!!o.found),o.found.name,o.found.updateTime;const a=Tr(r,o.found.name),l=Rt(o.found.updateTime),h=o.found.createTime?Rt(o.found.createTime):U.min(),d=new Z({mapValue:{fields:o.found.fields}});return ue.newFoundDocument(a,l,h,d)}(n,e):"missing"in e?function(r,o){ee(!!o.missing),ee(!!o.readTime);const a=Tr(r,o.missing),l=Rt(o.readTime);return ue.newNoDocument(a,l)}(n,e):C()}function Rh(n,e){let t;if(e instanceof vo)t={update:Ii(n,e.key,e.value)};else if(e instanceof Ih)t={delete:Sn(n,e.key)};else if(e instanceof Ur)t={update:Ii(n,e.key,e.data),updateMask:Lh(e.fieldMask)};else{if(!(e instanceof Th))return C();t={verify:Sn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const h=l.transform;if(h instanceof _h)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof yh)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof wh)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof vh)return{fieldPath:l.field.canonicalString(),increment:h.L};throw C()}(0,r))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:Ch(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:C()}(n,e.precondition)),t}function Dh(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=vi(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=vi(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(d){if(d.length!==0)return To(Ln.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:rt(I.field),direction:Oh(I.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=function(d,m){return d.useProto3Json||Yd(m)?m:{value:m}}(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),t}function Oh(n){return bh[n]}function Nh(n){return Eh[n]}function Vh(n){return Ah[n]}function rt(n){return{fieldPath:n.canonicalString()}}function To(n){return n instanceof fe?function(t){if(t.op==="=="){if(gi(t.value))return{unaryFilter:{field:rt(t.field),op:"IS_NAN"}};if(mi(t.value))return{unaryFilter:{field:rt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gi(t.value))return{unaryFilter:{field:rt(t.field),op:"IS_NOT_NAN"}};if(mi(t.value))return{unaryFilter:{field:rt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rt(t.field),op:Nh(t.op),value:t.value}}}(n):n instanceof Ln?function(t){const r=t.getFilters().map(o=>To(o));return r.length===1?r[0]:{compositeFilter:{op:Vh(t.op),filters:r}}}(n):C()}function Lh(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bo(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){return new Ph(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends class{}{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.X=!1}tt(){if(this.X)throw new v(ct,"The client has already been terminated.")}R(e,t,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.R(e,t,r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===vr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new v(Ct,o.toString())})}g(e,t,r,o){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.g(e,t,r,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===vr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new v(Ct,a.toString())})}terminate(){this.X=!0}}async function qr(n,e){const t=zt(n),r=Io(t.serializer)+"/documents",o={writes:e.map(a=>Rh(t.serializer,a))};await t.R("Commit",r,o)}async function Fh(n,e){const t=zt(n),r=Io(t.serializer)+"/documents",o={documents:e.map(d=>Sn(t.serializer,d))},a=await t.g("BatchGetDocuments",r,o,e.length),l=new Map;a.forEach(d=>{const m=Sh(t.serializer,d);l.set(m.key.toString(),m)});const h=[];return e.forEach(d=>{const m=l.get(d.toString());ee(!!m),h.push(m)}),h}async function xh(n,e){const t=zt(n),r=Dh(t.serializer,ph(e));return(await t.g("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(o=>!!o.document).map(o=>function(l,h,d){const m=Tr(l,h.name),g=Rt(h.updateTime),I=h.createTime?Rt(h.createTime):U.min(),b=new Z({mapValue:{fields:h.fields}}),w=ue.newFoundDocument(m,g,I,b);return d&&w.setHasCommittedMutations(),d?w.setHasCommittedMutations():w}(t.serializer,o.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Map;function Gt(n){if(n._terminated)throw new v(ct,"The client has already been terminated.");if(!Dt.has(n)){bn("ComponentProvider","Initializing Datastore");const e=function(a){return new Qd(a,fetch.bind(null))}(function(a,l,h,d){return new zd(a,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fo(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=jr(n._databaseId),r=function(a,l,h,d){return new Mh(a,l,h,d)}(n._authCredentials,n._appCheckCredentials,e,t);Dt.set(n,r)}return Dt.get(n)}class Ti{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new v(A,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(A,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(a,l,h,d){if(l===!0&&d===!0)throw new v(A,`${a} and ${h} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fo((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new v(A,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new v(A,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new v(A,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xn{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ti({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(ct,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(ct,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ti(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ud;switch(r.type){case"firstParty":return new Hd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(A,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Dt.get(t);r&&(bn("ComponentProvider","Removing Datastore"),Dt.delete(t),r.terminate())}(this),Promise.resolve()}}function Uh(n,e){const t=typeof n=="object"?n:Ci(),r=typeof n=="string"?n:e||"(default)",o=Er(t,"firestore/lite").getImmediate({identifier:r});if(!o._initialized){const a=_l("firestore");a&&Bh(o,...a)}return o}function Bh(n,e,t,r={}){var o;const a=(n=ft(n,xn))._getSettings(),l=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=z.MOCK_USER;else{h=yl(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new v(A,"mockUserToken must contain 'sub' or 'user_id' field!");d=new z(m)}n._authCredentials=new Bd(new uo(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Un(this.firestore,e,this._query)}}class K{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K(this.firestore,e,this._key)}}class _e extends Un{constructor(e,t,r){super(e,t,function(a){return new uh(a)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new K(this.firestore,null,new $(e))}withConverter(e){return new _e(this.firestore,e,this._path)}}function bi(n,e,...t){if(n=j(n),ho("collection","path",e),n instanceof xn){const r=L.fromString(e,...t);return ui(r),new _e(n,null,r)}{if(!(n instanceof K||n instanceof _e))throw new v(A,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return ui(r),new _e(n.firestore,null,r)}}function x(n,e,...t){if(n=j(n),arguments.length===1&&(e=Zd.C()),ho("doc","path",e),n instanceof xn){const r=L.fromString(e,...t);return li(r),new K(n,null,new $(r))}{if(!(n instanceof K||n instanceof _e))throw new v(A,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return li(r),new K(n.firestore,n instanceof _e?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(we.fromBase64String(e))}catch(t){throw new v(A,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lt(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new v(A,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new v(A,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new v(A,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=/^__.*__$/;class qh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new vo(e,this.data,t,this.fieldTransforms)}}class Eo{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ao(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Wr{constructor(e,t,r,o,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.rt(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}it(e){return new Wr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.it({path:r,ot:!1});return o.ut(e),o}_t(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.it({path:r,ot:!1});return o.rt(),o}lt(e){return this.it({path:void 0,ot:!0})}ct(e){return Rn(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(Ao(this.nt)&&jh.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class Hh{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||jr(e)}ft(e,t,r,o=!1){return new Wr({nt:e,methodName:t,dt:r,path:X.emptyPath(),ot:!1,ht:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zr(n){const e=n._freezeSettings(),t=jr(n._databaseId);return new Hh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Po(n,e,t,r,o,a={}){const l=n.ft(a.merge||a.mergeFields?2:0,e,t,o);Kr("Data must be an object, but it was:",l,r);const h=ko(r,l);let d,m;if(a.merge)d=new We(l.fieldMask),m=l.fieldTransforms;else if(a.mergeFields){const g=[];for(const I of a.mergeFields){const b=br(e,I,t);if(!l.contains(b))throw new v(A,`Field '${b}' is specified in your field mask but missing from your input data.`);So(g,b)||g.push(b)}d=new We(g),m=l.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,m=l.fieldTransforms;return new qh(new Z(h),d,m)}class jn extends Hr{_toFieldTransform(e){if(e.nt!==2)throw e.nt===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jn}}function $h(n,e,t,r){const o=n.ft(1,e,t);Kr("Data must be an object, but it was:",o,r);const a=[],l=Z.empty();Kt(r,(d,m)=>{const g=Gr(e,d,t);m=j(m);const I=o._t(g);if(m instanceof jn)a.push(g);else{const b=qn(m,I);b!=null&&(a.push(g),l.set(g,b))}});const h=new We(a);return new Eo(l,h,o.fieldTransforms)}function Wh(n,e,t,r,o,a){const l=n.ft(1,e,t),h=[br(e,r,t)],d=[o];if(a.length%2!=0)throw new v(A,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<a.length;b+=2)h.push(br(e,a[b])),d.push(a[b+1]);const m=[],g=Z.empty();for(let b=h.length-1;b>=0;--b)if(!So(m,h[b])){const w=h[b];let ne=d[b];ne=j(ne);const pt=l._t(w);if(ne instanceof jn)m.push(w);else{const f=qn(ne,pt);f!=null&&(m.push(w),g.set(w,f))}}const I=new We(m);return new Eo(g,I,l.fieldTransforms)}function qn(n,e){if(Co(n=j(n)))return Kr("Unsupported field value:",e,n),ko(n,e);if(n instanceof Hr)return function(r,o){if(!Ao(o.nt))throw o.ct(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.ct(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ot&&e.nt!==4)throw e.ct("Nested arrays are not supported");return function(r,o){const a=[];let l=0;for(const h of r){let d=qn(h,o.lt(l));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,o){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gh(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=te.fromDate(r);return{timestampValue:Ir(o.serializer,a)}}if(r instanceof te){const a=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(o.serializer,a)}}if(r instanceof $r)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lt)return{bytesValue:kh(o.serializer,r._byteString)};if(r instanceof K){const a=o.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw o.ct(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Br(r.firestore._databaseId||o.databaseId,r._key.path)}}throw o.ct(`Unsupported field value: ${xr(r)}`)}(n,e)}function ko(n,e){const t={};return function(o){for(const a in o)if(Object.prototype.hasOwnProperty.call(o,a))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,(r,o)=>{const a=qn(o,e.st(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function Co(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof $r||n instanceof lt||n instanceof K||n instanceof Hr)}function Kr(n,e,t){if(!Co(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const r=xr(t);throw r==="an object"?e.ct(n+" a custom object"):e.ct(n+" "+r)}}function br(n,e,t){if((e=j(e))instanceof Bn)return e._internalPath;if(typeof e=="string")return Gr(n,e);throw Rn("Field path arguments must be of type string or ",n,!1,void 0,t)}const zh=new RegExp("[~\\*/\\[\\]]");function Gr(n,e,t){if(e.search(zh)>=0)throw Rn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bn(...e.split("."))._internalPath}catch{throw Rn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Rn(n,e,t,r,o){const a=r&&!r.isEmpty(),l=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(a||l)&&(d+=" (found",a&&(d+=` in field ${r}`),l&&(d+=` in document ${o}`),d+=")"),new v(A,h+n+d)}function So(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new K(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Do(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Do extends Ro{data(){return super.data()}}class Kh{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Gh(n,e){return typeof e=="string"?Gr(n,e):e instanceof Bn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class No extends class{convertValue(t,r="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return O(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(Ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw C()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const o={};return Kt(t,(a,l)=>{o[a]=this.convertValue(l,r)}),o}convertGeoPoint(t){return new $r(O(t.latitude),O(t.longitude))}convertArray(t,r){return(t.values||[]).map(o=>this.convertValue(o,r))}convertServerTimestamp(t,r){switch(r){case"previous":const o=go(t);return o==null?null:this.convertValue(o,r);case"estimate":return this.convertTimestamp(xt(t));default:return null}}convertTimestamp(t){const r=He(t);return new te(r.seconds,r.nanos)}convertDocumentKey(t,r){const o=L.fromString(t);ee(bo(o));const a=new Lt(o.get(1),o.get(3)),l=new $(o.popFirst(5));return a.isEqual(r)||Mr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),l}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}function Ae(n){const e=Gt((n=ft(n,K)).firestore),t=new No(n.firestore);return Fh(e,[n._key]).then(r=>{ee(r.length===1);const o=r[0];return new Ro(n.firestore,t,n._key,o.isFoundDocument()?o:null,n.converter)})}function Yh(n){(function(o){if(o.limitType==="L"&&o.explicitOrderBy.length===0)throw new v(lo,"limitToLast() queries require specifying at least one orderBy() clause")})((n=ft(n,Un))._query);const e=Gt(n.firestore),t=new No(n.firestore);return xh(e,n._query).then(r=>{const o=r.map(a=>new Do(n.firestore,t,a.key,a,n.converter));return n._query.limitType==="L"&&o.reverse(),new Kh(n,o)})}function Ei(n,e,t){const r=Oo((n=ft(n,K)).converter,e,t),o=Po(zr(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return qr(Gt(n.firestore),[o.toMutation(n._key,Be.none())])}function nt(n,e,t,...r){const o=zr((n=ft(n,K)).firestore);let a;return a=typeof(e=j(e))=="string"||e instanceof Bn?Wh(o,"updateDoc",n._key,e,t,r):$h(o,"updateDoc",n._key,e),qr(Gt(n.firestore),[a.toMutation(n._key,Be.exists(!0))])}function Jh(n,e){const t=x(n=ft(n,_e)),r=Oo(n.converter,e),o=Po(zr(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return qr(Gt(n.firestore),[o.toMutation(t._key,Be.exists(!1))]).then(()=>t)}(function(){(function(t){ht=t})(`${ut}_lite`),gr(new _r("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const o=e.getProvider("app").getImmediate(),a=new xn(new jd(e.getProvider("auth-internal")),new Wd(e.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new v(A,'"projectId" not provided in firebase.initializeApp.');return new Lt(h.options.projectId,d)}(o,t),o);return r&&a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),_n("firestore-lite","4.1.1",""),_n("firestore-lite","4.1.1","esm2017")})();var Vo={exports:{}};/*!
* sweetalert2 v11.7.27
* Released under the MIT License.
*/(function(n,e){(function(t,r){n.exports=r()})(be,function(){function t(s,i){var c=o(s,i,"get");return a(s,c)}function r(s,i,c){var u=o(s,i,"set");return l(s,u,c),c}function o(s,i,c){if(!i.has(s))throw new TypeError("attempted to "+c+" private field on non-instance");return i.get(s)}function a(s,i){return i.get?i.get.call(s):i.value}function l(s,i,c){if(i.set)i.set.call(s,c);else{if(!i.writable)throw new TypeError("attempted to set read only private field");i.value=c}}function h(s,i){if(i.has(s))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(s,i,c){h(s,i),i.set(s,c)}const m=100,g={},I=()=>{g.previousActiveElement instanceof HTMLElement?(g.previousActiveElement.focus(),g.previousActiveElement=null):document.body&&document.body.focus()},b=s=>new Promise(i=>{if(!s)return i();const c=window.scrollX,u=window.scrollY;g.restoreFocusTimeout=setTimeout(()=>{I(),i()},m),window.scrollTo(c,u)});var w={innerParams:new WeakMap,domCache:new WeakMap};const ne="swal2-",f=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((s,i)=>(s[i]=ne+i,s),{}),Oe=["success","warning","info","question","error"].reduce((s,i)=>(s[i]=ne+i,s),{}),ze="SweetAlert2:",Ke=s=>s.charAt(0).toUpperCase()+s.slice(1),M=s=>{console.warn("".concat(ze," ").concat(typeof s=="object"?s.join(" "):s))},ie=s=>{console.error("".concat(ze," ").concat(s))},mt=[],$n=s=>{mt.includes(s)||(mt.push(s),M(s))},gt=(s,i)=>{$n('"'.concat(s,'" is deprecated and will be removed in the next major release. Please use "').concat(i,'" instead.'))},Ge=s=>typeof s=="function"?s():s,Wn=s=>s&&typeof s.toPromise=="function",_t=s=>Wn(s)?s.toPromise():Promise.resolve(s),zn=s=>s&&Promise.resolve(s)===s,H=()=>document.body.querySelector(".".concat(f.container)),yt=s=>{const i=H();return i?i.querySelector(s):null},Y=s=>yt(".".concat(s)),k=()=>Y(f.popup),wt=()=>Y(f.icon),Lo=()=>Y(f["icon-content"]),Yr=()=>Y(f.title),Kn=()=>Y(f["html-container"]),Jr=()=>Y(f.image),Gn=()=>Y(f["progress-steps"]),Yt=()=>Y(f["validation-message"]),oe=()=>yt(".".concat(f.actions," .").concat(f.confirm)),Ye=()=>yt(".".concat(f.actions," .").concat(f.cancel)),Ne=()=>yt(".".concat(f.actions," .").concat(f.deny)),Mo=()=>Y(f["input-label"]),Je=()=>yt(".".concat(f.loader)),vt=()=>Y(f.actions),Qr=()=>Y(f.footer),Jt=()=>Y(f["timer-progress-bar"]),Yn=()=>Y(f.close),Fo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Jn=()=>{const s=k();if(!s)return[];const i=s.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),c=Array.from(i).sort((_,T)=>{const D=parseInt(_.getAttribute("tabindex")||"0"),R=parseInt(T.getAttribute("tabindex")||"0");return D>R?1:D<R?-1:0}),u=s.querySelectorAll(Fo),p=Array.from(u).filter(_=>_.getAttribute("tabindex")!=="-1");return[...new Set(c.concat(p))].filter(_=>Q(_))},Qn=()=>pe(document.body,f.shown)&&!pe(document.body,f["toast-shown"])&&!pe(document.body,f["no-backdrop"]),Qt=()=>{const s=k();return s?pe(s,f.toast):!1},xo=()=>{const s=k();return s?s.hasAttribute("data-loading"):!1},J=(s,i)=>{if(s.textContent="",i){const u=new DOMParser().parseFromString(i,"text/html"),p=u.querySelector("head");p&&Array.from(p.childNodes).forEach(T=>{s.appendChild(T)});const _=u.querySelector("body");_&&Array.from(_.childNodes).forEach(T=>{T instanceof HTMLVideoElement||T instanceof HTMLAudioElement?s.appendChild(T.cloneNode(!0)):s.appendChild(T)})}},pe=(s,i)=>{if(!i)return!1;const c=i.split(/\s+/);for(let u=0;u<c.length;u++)if(!s.classList.contains(c[u]))return!1;return!0},Uo=(s,i)=>{Array.from(s.classList).forEach(c=>{!Object.values(f).includes(c)&&!Object.values(Oe).includes(c)&&!Object.values(i.showClass||{}).includes(c)&&s.classList.remove(c)})},re=(s,i,c)=>{if(Uo(s,i),i.customClass&&i.customClass[c]){if(typeof i.customClass[c]!="string"&&!i.customClass[c].forEach){M("Invalid type of customClass.".concat(c,'! Expected string or iterable object, got "').concat(typeof i.customClass[c],'"'));return}P(s,i.customClass[c])}},Xn=(s,i)=>{if(!i)return null;switch(i){case"select":case"textarea":case"file":return s.querySelector(".".concat(f.popup," > .").concat(f[i]));case"checkbox":return s.querySelector(".".concat(f.popup," > .").concat(f.checkbox," input"));case"radio":return s.querySelector(".".concat(f.popup," > .").concat(f.radio," input:checked"))||s.querySelector(".".concat(f.popup," > .").concat(f.radio," input:first-child"));case"range":return s.querySelector(".".concat(f.popup," > .").concat(f.range," input"));default:return s.querySelector(".".concat(f.popup," > .").concat(f.input))}},Xr=s=>{if(s.focus(),s.type!=="file"){const i=s.value;s.value="",s.value=i}},Zr=(s,i,c)=>{!s||!i||(typeof i=="string"&&(i=i.split(/\s+/).filter(Boolean)),i.forEach(u=>{Array.isArray(s)?s.forEach(p=>{c?p.classList.add(u):p.classList.remove(u)}):c?s.classList.add(u):s.classList.remove(u)}))},P=(s,i)=>{Zr(s,i,!0)},ae=(s,i)=>{Zr(s,i,!1)},Ie=(s,i)=>{const c=Array.from(s.children);for(let u=0;u<c.length;u++){const p=c[u];if(p instanceof HTMLElement&&pe(p,i))return p}},Ve=(s,i,c)=>{c==="".concat(parseInt(c))&&(c=parseInt(c)),c||parseInt(c)===0?s.style[i]=typeof c=="number"?"".concat(c,"px"):c:s.style.removeProperty(i)},F=function(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s&&(s.style.display=i)},q=s=>{s&&(s.style.display="none")},es=(s,i,c,u)=>{const p=s.querySelector(i);p&&(p.style[c]=u)},Xt=function(s,i){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";i?F(s,c):q(s)},Q=s=>!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length)),Bo=()=>!Q(oe())&&!Q(Ne())&&!Q(Ye()),ts=s=>s.scrollHeight>s.clientHeight,ns=s=>{const i=window.getComputedStyle(s),c=parseFloat(i.getPropertyValue("animation-duration")||"0"),u=parseFloat(i.getPropertyValue("transition-duration")||"0");return c>0||u>0},Zn=function(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const c=Jt();c&&Q(c)&&(i&&(c.style.transition="none",c.style.width="100%"),setTimeout(()=>{c.style.transition="width ".concat(s/1e3,"s linear"),c.style.width="0%"},10))},jo=()=>{const s=Jt();if(!s)return;const i=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";const c=parseInt(window.getComputedStyle(s).width),u=i/c*100;s.style.width="".concat(u,"%")},rs=()=>typeof window>"u"||typeof document>"u",qo=`
 <div aria-labelledby="`.concat(f.title,'" aria-describedby="').concat(f["html-container"],'" class="').concat(f.popup,`" tabindex="-1">
   <button type="button" class="`).concat(f.close,`"></button>
   <ul class="`).concat(f["progress-steps"],`"></ul>
   <div class="`).concat(f.icon,`"></div>
   <img class="`).concat(f.image,`" />
   <h2 class="`).concat(f.title,'" id="').concat(f.title,`"></h2>
   <div class="`).concat(f["html-container"],'" id="').concat(f["html-container"],`"></div>
   <input class="`).concat(f.input,'" id="').concat(f.input,`" />
   <input type="file" class="`).concat(f.file,`" />
   <div class="`).concat(f.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(f.select,'" id="').concat(f.select,`"></select>
   <div class="`).concat(f.radio,`"></div>
   <label class="`).concat(f.checkbox,`">
     <input type="checkbox" id="`).concat(f.checkbox,`" />
     <span class="`).concat(f.label,`"></span>
   </label>
   <textarea class="`).concat(f.textarea,'" id="').concat(f.textarea,`"></textarea>
   <div class="`).concat(f["validation-message"],'" id="').concat(f["validation-message"],`"></div>
   <div class="`).concat(f.actions,`">
     <div class="`).concat(f.loader,`"></div>
     <button type="button" class="`).concat(f.confirm,`"></button>
     <button type="button" class="`).concat(f.deny,`"></button>
     <button type="button" class="`).concat(f.cancel,`"></button>
   </div>
   <div class="`).concat(f.footer,`"></div>
   <div class="`).concat(f["timer-progress-bar-container"],`">
     <div class="`).concat(f["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Ho=()=>{const s=H();return s?(s.remove(),ae([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},Le=()=>{g.currentInstance.resetValidationMessage()},$o=()=>{const s=k(),i=Ie(s,f.input),c=Ie(s,f.file),u=s.querySelector(".".concat(f.range," input")),p=s.querySelector(".".concat(f.range," output")),_=Ie(s,f.select),T=s.querySelector(".".concat(f.checkbox," input")),D=Ie(s,f.textarea);i.oninput=Le,c.onchange=Le,_.onchange=Le,T.onchange=Le,D.oninput=Le,u.oninput=()=>{Le(),p.value=u.value},u.onchange=()=>{Le(),p.value=u.value}},Wo=s=>typeof s=="string"?document.querySelector(s):s,zo=s=>{const i=k();i.setAttribute("role",s.toast?"alert":"dialog"),i.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||i.setAttribute("aria-modal","true")},Ko=s=>{window.getComputedStyle(s).direction==="rtl"&&P(H(),f.rtl)},Go=s=>{const i=Ho();if(rs()){ie("SweetAlert2 requires document to initialize");return}const c=document.createElement("div");c.className=f.container,i&&P(c,f["no-transition"]),J(c,qo);const u=Wo(s.target);u.appendChild(c),zo(s),Ko(u),$o()},er=(s,i)=>{s instanceof HTMLElement?i.appendChild(s):typeof s=="object"?Yo(s,i):s&&J(i,s)},Yo=(s,i)=>{s.jquery?Jo(i,s):J(i,s.toString())},Jo=(s,i)=>{if(s.textContent="",0 in i)for(let c=0;c in i;c++)s.appendChild(i[c].cloneNode(!0));else s.appendChild(i.cloneNode(!0))},Me=(()=>{if(rs())return!1;const s=document.createElement("div");return typeof s.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof s.style.animation<"u"?"animationend":!1})(),Qo=(s,i)=>{const c=vt(),u=Je();!c||!u||(!i.showConfirmButton&&!i.showDenyButton&&!i.showCancelButton?q(c):F(c),re(c,i,"actions"),Xo(c,u,i),J(u,i.loaderHtml||""),re(u,i,"loader"))};function Xo(s,i,c){const u=oe(),p=Ne(),_=Ye();!u||!p||!_||(tr(u,"confirm",c),tr(p,"deny",c),tr(_,"cancel",c),Zo(u,p,_,c),c.reverseButtons&&(c.toast?(s.insertBefore(_,u),s.insertBefore(p,u)):(s.insertBefore(_,i),s.insertBefore(p,i),s.insertBefore(u,i))))}function Zo(s,i,c,u){if(!u.buttonsStyling){ae([s,i,c],f.styled);return}P([s,i,c],f.styled),u.confirmButtonColor&&(s.style.backgroundColor=u.confirmButtonColor,P(s,f["default-outline"])),u.denyButtonColor&&(i.style.backgroundColor=u.denyButtonColor,P(i,f["default-outline"])),u.cancelButtonColor&&(c.style.backgroundColor=u.cancelButtonColor,P(c,f["default-outline"]))}function tr(s,i,c){const u=Ke(i);Xt(s,c["show".concat(u,"Button")],"inline-block"),J(s,c["".concat(i,"ButtonText")]||""),s.setAttribute("aria-label",c["".concat(i,"ButtonAriaLabel")]||""),s.className=f[i],re(s,c,"".concat(i,"Button"))}const ea=(s,i)=>{const c=Yn();c&&(J(c,i.closeButtonHtml||""),re(c,i,"closeButton"),Xt(c,i.showCloseButton),c.setAttribute("aria-label",i.closeButtonAriaLabel||""))},ta=(s,i)=>{const c=H();c&&(na(c,i.backdrop),ra(c,i.position),sa(c,i.grow),re(c,i,"container"))};function na(s,i){typeof i=="string"?s.style.background=i:i||P([document.documentElement,document.body],f["no-backdrop"])}function ra(s,i){i&&(i in f?P(s,f[i]):(M('The "position" parameter is not valid, defaulting to "center"'),P(s,f.center)))}function sa(s,i){i&&P(s,f["grow-".concat(i)])}const ia=["input","file","range","select","radio","checkbox","textarea"],oa=(s,i)=>{const c=k();if(!c)return;const u=w.innerParams.get(s),p=!u||i.input!==u.input;ia.forEach(_=>{const T=Ie(c,f[_]);T&&(la(_,i.inputAttributes),T.className=f[_],p&&q(T))}),i.input&&(p&&aa(i),ua(i))},aa=s=>{if(!s.input)return;if(!W[s.input]){ie('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(s.input,'"'));return}const i=ss(s.input),c=W[s.input](i,s);F(i),s.inputAutoFocus&&setTimeout(()=>{Xr(c)})},ca=s=>{for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i].name;["id","type","value","style"].includes(c)||s.removeAttribute(c)}},la=(s,i)=>{const c=Xn(k(),s);if(c){ca(c);for(const u in i)c.setAttribute(u,i[u])}},ua=s=>{const i=ss(s.input);typeof s.customClass=="object"&&P(i,s.customClass.input)},nr=(s,i)=>{(!s.placeholder||i.inputPlaceholder)&&(s.placeholder=i.inputPlaceholder)},It=(s,i,c)=>{if(c.inputLabel){const u=document.createElement("label"),p=f["input-label"];u.setAttribute("for",s.id),u.className=p,typeof c.customClass=="object"&&P(u,c.customClass.inputLabel),u.innerText=c.inputLabel,i.insertAdjacentElement("beforebegin",u)}},ss=s=>Ie(k(),f[s]||f.input),Zt=(s,i)=>{["string","number"].includes(typeof i)?s.value="".concat(i):zn(i)||M('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof i,'"'))},W={};W.text=W.email=W.password=W.number=W.tel=W.url=(s,i)=>(Zt(s,i.inputValue),It(s,s,i),nr(s,i),s.type=i.input,s),W.file=(s,i)=>(It(s,s,i),nr(s,i),s),W.range=(s,i)=>{const c=s.querySelector("input"),u=s.querySelector("output");return Zt(c,i.inputValue),c.type=i.input,Zt(u,i.inputValue),It(c,s,i),s},W.select=(s,i)=>{if(s.textContent="",i.inputPlaceholder){const c=document.createElement("option");J(c,i.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,s.appendChild(c)}return It(s,s,i),s},W.radio=s=>(s.textContent="",s),W.checkbox=(s,i)=>{const c=Xn(k(),"checkbox");c.value="1",c.checked=!!i.inputValue;const u=s.querySelector("span");return J(u,i.inputPlaceholder),c},W.textarea=(s,i)=>{Zt(s,i.inputValue),nr(s,i),It(s,s,i);const c=u=>parseInt(window.getComputedStyle(u).marginLeft)+parseInt(window.getComputedStyle(u).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const u=parseInt(window.getComputedStyle(k()).width),p=()=>{if(!document.body.contains(s))return;const _=s.offsetWidth+c(s);_>u?k().style.width="".concat(_,"px"):Ve(k(),"width",i.width)};new MutationObserver(p).observe(s,{attributes:!0,attributeFilter:["style"]})}}),s};const da=(s,i)=>{const c=Kn();c&&(re(c,i,"htmlContainer"),i.html?(er(i.html,c),F(c,"block")):i.text?(c.textContent=i.text,F(c,"block")):q(c),oa(s,i))},ha=(s,i)=>{const c=Qr();c&&(Xt(c,i.footer,"block"),i.footer&&er(i.footer,c),re(c,i,"footer"))},fa=(s,i)=>{const c=w.innerParams.get(s),u=wt();if(u){if(c&&i.icon===c.icon){os(u,i),is(u,i);return}if(!i.icon&&!i.iconHtml){q(u);return}if(i.icon&&Object.keys(Oe).indexOf(i.icon)===-1){ie('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(i.icon,'"')),q(u);return}F(u),os(u,i),is(u,i),P(u,i.showClass&&i.showClass.icon)}},is=(s,i)=>{for(const[c,u]of Object.entries(Oe))i.icon!==c&&ae(s,u);P(s,i.icon&&Oe[i.icon]),_a(s,i),pa(),re(s,i,"icon")},pa=()=>{const s=k();if(!s)return;const i=window.getComputedStyle(s).getPropertyValue("background-color"),c=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let u=0;u<c.length;u++)c[u].style.backgroundColor=i},ma=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ga=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,os=(s,i)=>{if(!i.icon&&!i.iconHtml)return;let c=s.innerHTML,u="";i.iconHtml?u=as(i.iconHtml):i.icon==="success"?(u=ma,c=c.replace(/ style=".*?"/g,"")):i.icon==="error"?u=ga:i.icon&&(u=as({question:"?",warning:"!",info:"i"}[i.icon])),c.trim()!==u.trim()&&J(s,u)},_a=(s,i)=>{if(i.iconColor){s.style.color=i.iconColor,s.style.borderColor=i.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])es(s,c,"backgroundColor",i.iconColor);es(s,".swal2-success-ring","borderColor",i.iconColor)}},as=s=>'<div class="'.concat(f["icon-content"],'">').concat(s,"</div>"),ya=(s,i)=>{const c=Jr();if(c){if(!i.imageUrl){q(c);return}F(c,""),c.setAttribute("src",i.imageUrl),c.setAttribute("alt",i.imageAlt||""),Ve(c,"width",i.imageWidth),Ve(c,"height",i.imageHeight),c.className=f.image,re(c,i,"image")}},wa=(s,i)=>{const c=H(),u=k();if(!(!c||!u)){if(i.toast){Ve(c,"width",i.width),u.style.width="100%";const p=Je();p&&u.insertBefore(p,wt())}else Ve(u,"width",i.width);Ve(u,"padding",i.padding),i.color&&(u.style.color=i.color),i.background&&(u.style.background=i.background),q(Yt()),va(u,i)}},va=(s,i)=>{const c=i.showClass||{};s.className="".concat(f.popup," ").concat(Q(s)?c.popup:""),i.toast?(P([document.documentElement,document.body],f["toast-shown"]),P(s,f.toast)):P(s,f.modal),re(s,i,"popup"),typeof i.customClass=="string"&&P(s,i.customClass),i.icon&&P(s,f["icon-".concat(i.icon)])},Ia=(s,i)=>{const c=Gn();if(!c)return;const{progressSteps:u,currentProgressStep:p}=i;if(!u||u.length===0||p===void 0){q(c);return}F(c),c.textContent="",p>=u.length&&M("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),u.forEach((_,T)=>{const D=Ta(_);if(c.appendChild(D),T===p&&P(D,f["active-progress-step"]),T!==u.length-1){const R=ba(i);c.appendChild(R)}})},Ta=s=>{const i=document.createElement("li");return P(i,f["progress-step"]),J(i,s),i},ba=s=>{const i=document.createElement("li");return P(i,f["progress-step-line"]),s.progressStepsDistance&&Ve(i,"width",s.progressStepsDistance),i},Ea=(s,i)=>{const c=Yr();c&&(Xt(c,i.title||i.titleText,"block"),i.title&&er(i.title,c),i.titleText&&(c.innerText=i.titleText),re(c,i,"title"))},cs=(s,i)=>{wa(s,i),ta(s,i),Ia(s,i),fa(s,i),ya(s,i),Ea(s,i),ea(s,i),da(s,i),Qo(s,i),ha(s,i);const c=k();typeof i.didRender=="function"&&c&&i.didRender(c)},Aa=()=>Q(k()),ls=()=>{var s;return(s=oe())===null||s===void 0?void 0:s.click()},Pa=()=>{var s;return(s=Ne())===null||s===void 0?void 0:s.click()},ka=()=>{var s;return(s=Ye())===null||s===void 0?void 0:s.click()},Qe=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),us=s=>{s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},Ca=(s,i,c,u)=>{us(i),c.toast||(i.keydownHandler=p=>Ra(s,p,u),i.keydownTarget=c.keydownListenerCapture?window:k(),i.keydownListenerCapture=c.keydownListenerCapture,i.keydownTarget.addEventListener("keydown",i.keydownHandler,{capture:i.keydownListenerCapture}),i.keydownHandlerAdded=!0)},rr=(s,i)=>{const c=Jn();if(c.length){s=s+i,s===c.length?s=0:s===-1&&(s=c.length-1),c[s].focus();return}k().focus()},ds=["ArrowRight","ArrowDown"],Sa=["ArrowLeft","ArrowUp"],Ra=(s,i,c)=>{const u=w.innerParams.get(s);u&&(i.isComposing||i.keyCode===229||(u.stopKeydownPropagation&&i.stopPropagation(),i.key==="Enter"?Da(s,i,u):i.key==="Tab"?Oa(i):[...ds,...Sa].includes(i.key)?Na(i.key):i.key==="Escape"&&Va(i,u,c)))},Da=(s,i,c)=>{if(Ge(c.allowEnterKey)&&i.target&&s.getInput()&&i.target instanceof HTMLElement&&i.target.outerHTML===s.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;ls(),i.preventDefault()}},Oa=s=>{const i=s.target,c=Jn();let u=-1;for(let p=0;p<c.length;p++)if(i===c[p]){u=p;break}s.shiftKey?rr(u,-1):rr(u,1),s.stopPropagation(),s.preventDefault()},Na=s=>{const i=oe(),c=Ne(),u=Ye(),p=[i,c,u];if(document.activeElement instanceof HTMLElement&&!p.includes(document.activeElement))return;const _=ds.includes(s)?"nextElementSibling":"previousElementSibling";let T=document.activeElement;for(let D=0;D<vt().children.length;D++){if(T=T[_],!T)return;if(T instanceof HTMLButtonElement&&Q(T))break}T instanceof HTMLButtonElement&&T.focus()},Va=(s,i,c)=>{Ge(i.allowEscapeKey)&&(s.preventDefault(),c(Qe.esc))};var Tt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const La=()=>{Array.from(document.body.children).forEach(i=>{i===H()||i.contains(H())||(i.hasAttribute("aria-hidden")&&i.setAttribute("data-previous-aria-hidden",i.getAttribute("aria-hidden")||""),i.setAttribute("aria-hidden","true"))})},hs=()=>{Array.from(document.body.children).forEach(i=>{i.hasAttribute("data-previous-aria-hidden")?(i.setAttribute("aria-hidden",i.getAttribute("data-previous-aria-hidden")||""),i.removeAttribute("data-previous-aria-hidden")):i.removeAttribute("aria-hidden")})},fs=typeof window<"u"&&!!window.GestureEvent,Ma=()=>{if(fs&&!pe(document.body,f.iosfix)){const s=document.body.scrollTop;document.body.style.top="".concat(s*-1,"px"),P(document.body,f.iosfix),Fa()}},Fa=()=>{const s=H();if(!s)return;let i;s.ontouchstart=c=>{i=xa(c)},s.ontouchmove=c=>{i&&(c.preventDefault(),c.stopPropagation())}},xa=s=>{const i=s.target,c=H(),u=Kn();return!c||!u||Ua(s)||Ba(s)?!1:i===c||!ts(c)&&i instanceof HTMLElement&&i.tagName!=="INPUT"&&i.tagName!=="TEXTAREA"&&!(ts(u)&&u.contains(i))},Ua=s=>s.touches&&s.touches.length&&s.touches[0].touchType==="stylus",Ba=s=>s.touches&&s.touches.length>1,ja=()=>{if(pe(document.body,f.iosfix)){const s=parseInt(document.body.style.top,10);ae(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},qa=()=>{const s=document.createElement("div");s.className=f["scrollbar-measure"],document.body.appendChild(s);const i=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),i};let Xe=null;const Ha=s=>{Xe===null&&(document.body.scrollHeight>window.innerHeight||s==="scroll")&&(Xe=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Xe+qa(),"px"))},$a=()=>{Xe!==null&&(document.body.style.paddingRight="".concat(Xe,"px"),Xe=null)};function ps(s,i,c,u){Qt()?gs(s,u):(b(c).then(()=>gs(s,u)),us(g)),fs?(i.setAttribute("style","display:none !important"),i.removeAttribute("class"),i.innerHTML=""):i.remove(),Qn()&&($a(),ja(),hs()),Wa()}function Wa(){ae([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function Te(s){s=Ka(s);const i=Tt.swalPromiseResolve.get(this),c=za(this);this.isAwaitingPromise?s.isDismissed||(bt(this),i(s)):c&&i(s)}const za=s=>{const i=k();if(!i)return!1;const c=w.innerParams.get(s);if(!c||pe(i,c.hideClass.popup))return!1;ae(i,c.showClass.popup),P(i,c.hideClass.popup);const u=H();return ae(u,c.showClass.backdrop),P(u,c.hideClass.backdrop),Ga(s,i,c),!0};function ms(s){const i=Tt.swalPromiseReject.get(this);bt(this),i&&i(s)}const bt=s=>{s.isAwaitingPromise&&(delete s.isAwaitingPromise,w.innerParams.get(s)||s._destroy())},Ka=s=>typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s),Ga=(s,i,c)=>{const u=H(),p=Me&&ns(i);typeof c.willClose=="function"&&c.willClose(i),p?Ya(s,i,u,c.returnFocus,c.didClose):ps(s,u,c.returnFocus,c.didClose)},Ya=(s,i,c,u,p)=>{Me&&(g.swalCloseEventFinishedCallback=ps.bind(null,s,c,u,p),i.addEventListener(Me,function(_){_.target===i&&(g.swalCloseEventFinishedCallback(),delete g.swalCloseEventFinishedCallback)}))},gs=(s,i)=>{setTimeout(()=>{typeof i=="function"&&i.bind(s.params)(),s._destroy&&s._destroy()})},Ze=s=>{let i=k();if(i||new sn,i=k(),!i)return;const c=Je();Qt()?q(wt()):Ja(i,s),F(c),i.setAttribute("data-loading","true"),i.setAttribute("aria-busy","true"),i.focus()},Ja=(s,i)=>{const c=vt(),u=Je();!c||!u||(!i&&Q(oe())&&(i=oe()),F(c),i&&(q(i),u.setAttribute("data-button-to-replace",i.className),c.insertBefore(u,i)),P([s,c],f.loading))},Qa=(s,i)=>{i.input==="select"||i.input==="radio"?nc(s,i):["text","email","number","tel","textarea"].some(c=>c===i.input)&&(Wn(i.inputValue)||zn(i.inputValue))&&(Ze(oe()),rc(s,i))},Xa=(s,i)=>{const c=s.getInput();if(!c)return null;switch(i.input){case"checkbox":return Za(c);case"radio":return ec(c);case"file":return tc(c);default:return i.inputAutoTrim?c.value.trim():c.value}},Za=s=>s.checked?1:0,ec=s=>s.checked?s.value:null,tc=s=>s.files&&s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null,nc=(s,i)=>{const c=k();if(!c)return;const u=p=>{i.input==="select"?sc(c,en(p),i):i.input==="radio"&&ic(c,en(p),i)};Wn(i.inputOptions)||zn(i.inputOptions)?(Ze(oe()),_t(i.inputOptions).then(p=>{s.hideLoading(),u(p)})):typeof i.inputOptions=="object"?u(i.inputOptions):ie("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof i.inputOptions))},rc=(s,i)=>{const c=s.getInput();c&&(q(c),_t(i.inputValue).then(u=>{c.value=i.input==="number"?"".concat(parseFloat(u)||0):"".concat(u),F(c),c.focus(),s.hideLoading()}).catch(u=>{ie("Error in inputValue promise: ".concat(u)),c.value="",F(c),c.focus(),s.hideLoading()}))};function sc(s,i,c){const u=Ie(s,f.select);if(!u)return;const p=(_,T,D)=>{const R=document.createElement("option");R.value=D,J(R,T),R.selected=_s(D,c.inputValue),_.appendChild(R)};i.forEach(_=>{const T=_[0],D=_[1];if(Array.isArray(D)){const R=document.createElement("optgroup");R.label=T,R.disabled=!1,u.appendChild(R),D.forEach(tt=>p(R,tt[1],tt[0]))}else p(u,D,T)}),u.focus()}function ic(s,i,c){const u=Ie(s,f.radio);if(!u)return;i.forEach(_=>{const T=_[0],D=_[1],R=document.createElement("input"),tt=document.createElement("label");R.type="radio",R.name=f.radio,R.value=T,_s(T,c.inputValue)&&(R.checked=!0);const cr=document.createElement("span");J(cr,D),cr.className=f.label,tt.appendChild(R),tt.appendChild(cr),u.appendChild(tt)});const p=u.querySelectorAll("input");p.length&&p[0].focus()}const en=s=>{const i=[];return s instanceof Map?s.forEach((c,u)=>{let p=c;typeof p=="object"&&(p=en(p)),i.push([u,p])}):Object.keys(s).forEach(c=>{let u=s[c];typeof u=="object"&&(u=en(u)),i.push([c,u])}),i},_s=(s,i)=>!!i&&i.toString()===s.toString(),oc=s=>{const i=w.innerParams.get(s);s.disableButtons(),i.input?ys(s,"confirm"):ir(s,!0)},ac=s=>{const i=w.innerParams.get(s);s.disableButtons(),i.returnInputValueOnDeny?ys(s,"deny"):sr(s,!1)},cc=(s,i)=>{s.disableButtons(),i(Qe.cancel)},ys=(s,i)=>{const c=w.innerParams.get(s);if(!c.input){ie('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Ke(i)));return}const u=s.getInput(),p=Xa(s,c);c.inputValidator?lc(s,p,i):u&&!u.checkValidity()?(s.enableButtons(),s.showValidationMessage(c.validationMessage)):i==="deny"?sr(s,p):ir(s,p)},lc=(s,i,c)=>{const u=w.innerParams.get(s);s.disableInput(),Promise.resolve().then(()=>_t(u.inputValidator(i,u.validationMessage))).then(_=>{s.enableButtons(),s.enableInput(),_?s.showValidationMessage(_):c==="deny"?sr(s,i):ir(s,i)})},sr=(s,i)=>{const c=w.innerParams.get(s||void 0);c.showLoaderOnDeny&&Ze(Ne()),c.preDeny?(s.isAwaitingPromise=!0,Promise.resolve().then(()=>_t(c.preDeny(i,c.validationMessage))).then(p=>{p===!1?(s.hideLoading(),bt(s)):s.close({isDenied:!0,value:typeof p>"u"?i:p})}).catch(p=>vs(s||void 0,p))):s.close({isDenied:!0,value:i})},ws=(s,i)=>{s.close({isConfirmed:!0,value:i})},vs=(s,i)=>{s.rejectPromise(i)},ir=(s,i)=>{const c=w.innerParams.get(s||void 0);c.showLoaderOnConfirm&&Ze(),c.preConfirm?(s.resetValidationMessage(),s.isAwaitingPromise=!0,Promise.resolve().then(()=>_t(c.preConfirm(i,c.validationMessage))).then(p=>{Q(Yt())||p===!1?(s.hideLoading(),bt(s)):ws(s,typeof p>"u"?i:p)}).catch(p=>vs(s||void 0,p))):ws(s,i)};function tn(){const s=w.innerParams.get(this);if(!s)return;const i=w.domCache.get(this);q(i.loader),Qt()?s.icon&&F(wt()):uc(i),ae([i.popup,i.actions],f.loading),i.popup.removeAttribute("aria-busy"),i.popup.removeAttribute("data-loading"),i.confirmButton.disabled=!1,i.denyButton.disabled=!1,i.cancelButton.disabled=!1}const uc=s=>{const i=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));i.length?F(i[0],"inline-block"):Bo()&&q(s.actions)};function Is(){const s=w.innerParams.get(this),i=w.domCache.get(this);return i?Xn(i.popup,s.input):null}function Ts(s,i,c){const u=w.domCache.get(s);i.forEach(p=>{u[p].disabled=c})}function bs(s,i){const c=k();if(!(!c||!s))if(s.type==="radio"){const u=c.querySelectorAll('[name="'.concat(f.radio,'"]'));for(let p=0;p<u.length;p++)u[p].disabled=i}else s.disabled=i}function Es(){Ts(this,["confirmButton","denyButton","cancelButton"],!1)}function As(){Ts(this,["confirmButton","denyButton","cancelButton"],!0)}function Ps(){bs(this.getInput(),!1)}function ks(){bs(this.getInput(),!0)}function Cs(s){const i=w.domCache.get(this),c=w.innerParams.get(this);J(i.validationMessage,s),i.validationMessage.className=f["validation-message"],c.customClass&&c.customClass.validationMessage&&P(i.validationMessage,c.customClass.validationMessage),F(i.validationMessage);const u=this.getInput();u&&(u.setAttribute("aria-invalid",!0),u.setAttribute("aria-describedby",f["validation-message"]),Xr(u),P(u,f.inputerror))}function Ss(){const s=w.domCache.get(this);s.validationMessage&&q(s.validationMessage);const i=this.getInput();i&&(i.removeAttribute("aria-invalid"),i.removeAttribute("aria-describedby"),ae(i,f.inputerror))}const et={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},dc=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],hc={},fc=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Rs=s=>Object.prototype.hasOwnProperty.call(et,s),Ds=s=>dc.indexOf(s)!==-1,Os=s=>hc[s],pc=s=>{Rs(s)||M('Unknown parameter "'.concat(s,'"'))},mc=s=>{fc.includes(s)&&M('The parameter "'.concat(s,'" is incompatible with toasts'))},gc=s=>{const i=Os(s);i&&gt(s,i)},_c=s=>{s.backdrop===!1&&s.allowOutsideClick&&M('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const i in s)pc(i),s.toast&&mc(i),gc(i)};function Ns(s){const i=k(),c=w.innerParams.get(this);if(!i||pe(i,c.hideClass.popup)){M("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const u=yc(s),p=Object.assign({},c,u);cs(this,p),w.innerParams.set(this,p),Object.defineProperties(this,{params:{value:Object.assign({},this.params,s),writable:!1,enumerable:!0}})}const yc=s=>{const i={};return Object.keys(s).forEach(c=>{Ds(c)?i[c]=s[c]:M("Invalid parameter to update: ".concat(c))}),i};function Vs(){const s=w.domCache.get(this),i=w.innerParams.get(this);if(!i){Ls(this);return}s.popup&&g.swalCloseEventFinishedCallback&&(g.swalCloseEventFinishedCallback(),delete g.swalCloseEventFinishedCallback),typeof i.didDestroy=="function"&&i.didDestroy(),wc(this)}const wc=s=>{Ls(s),delete s.params,delete g.keydownHandler,delete g.keydownTarget,delete g.currentInstance},Ls=s=>{s.isAwaitingPromise?(or(w,s),s.isAwaitingPromise=!0):(or(Tt,s),or(w,s),delete s.isAwaitingPromise,delete s.disableButtons,delete s.enableButtons,delete s.getInput,delete s.disableInput,delete s.enableInput,delete s.hideLoading,delete s.disableLoading,delete s.showValidationMessage,delete s.resetValidationMessage,delete s.close,delete s.closePopup,delete s.closeModal,delete s.closeToast,delete s.rejectPromise,delete s.update,delete s._destroy)},or=(s,i)=>{for(const c in s)s[c].delete(i)};var vc=Object.freeze({__proto__:null,_destroy:Vs,close:Te,closeModal:Te,closePopup:Te,closeToast:Te,disableButtons:As,disableInput:ks,disableLoading:tn,enableButtons:Es,enableInput:Ps,getInput:Is,handleAwaitingPromise:bt,hideLoading:tn,rejectPromise:ms,resetValidationMessage:Ss,showValidationMessage:Cs,update:Ns});const Ic=(s,i,c)=>{w.innerParams.get(s).toast?Tc(s,i,c):(Ec(i),Ac(i),Pc(s,i,c))},Tc=(s,i,c)=>{i.popup.onclick=()=>{const u=w.innerParams.get(s);u&&(bc(u)||u.timer||u.input)||c(Qe.close)}},bc=s=>s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton;let nn=!1;const Ec=s=>{s.popup.onmousedown=()=>{s.container.onmouseup=function(i){s.container.onmouseup=void 0,i.target===s.container&&(nn=!0)}}},Ac=s=>{s.container.onmousedown=()=>{s.popup.onmouseup=function(i){s.popup.onmouseup=void 0,(i.target===s.popup||s.popup.contains(i.target))&&(nn=!0)}}},Pc=(s,i,c)=>{i.container.onclick=u=>{const p=w.innerParams.get(s);if(nn){nn=!1;return}u.target===i.container&&Ge(p.allowOutsideClick)&&c(Qe.backdrop)}},kc=s=>typeof s=="object"&&s.jquery,Ms=s=>s instanceof Element||kc(s),Cc=s=>{const i={};return typeof s[0]=="object"&&!Ms(s[0])?Object.assign(i,s[0]):["title","html","icon"].forEach((c,u)=>{const p=s[u];typeof p=="string"||Ms(p)?i[c]=p:p!==void 0&&ie("Unexpected type of ".concat(c,'! Expected "string" or "Element", got ').concat(typeof p))}),i};function Sc(){const s=this;for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return new s(...c)}function Rc(s){class i extends this{_main(u,p){return super._main(u,Object.assign({},s,p))}}return i}const Dc=()=>g.timeout&&g.timeout.getTimerLeft(),Fs=()=>{if(g.timeout)return jo(),g.timeout.stop()},xs=()=>{if(g.timeout){const s=g.timeout.start();return Zn(s),s}},Oc=()=>{const s=g.timeout;return s&&(s.running?Fs():xs())},Nc=s=>{if(g.timeout){const i=g.timeout.increase(s);return Zn(i,!0),i}},Vc=()=>!!(g.timeout&&g.timeout.isRunning());let Us=!1;const ar={};function Lc(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ar[s]=this,Us||(document.body.addEventListener("click",Mc),Us=!0)}const Mc=s=>{for(let i=s.target;i&&i!==document;i=i.parentNode)for(const c in ar){const u=i.getAttribute(c);if(u){ar[c].fire({template:u});return}}};var Fc=Object.freeze({__proto__:null,argsToParams:Cc,bindClickHandler:Lc,clickCancel:ka,clickConfirm:ls,clickDeny:Pa,enableLoading:Ze,fire:Sc,getActions:vt,getCancelButton:Ye,getCloseButton:Yn,getConfirmButton:oe,getContainer:H,getDenyButton:Ne,getFocusableElements:Jn,getFooter:Qr,getHtmlContainer:Kn,getIcon:wt,getIconContent:Lo,getImage:Jr,getInputLabel:Mo,getLoader:Je,getPopup:k,getProgressSteps:Gn,getTimerLeft:Dc,getTimerProgressBar:Jt,getTitle:Yr,getValidationMessage:Yt,increaseTimer:Nc,isDeprecatedParameter:Os,isLoading:xo,isTimerRunning:Vc,isUpdatableParameter:Ds,isValidParameter:Rs,isVisible:Aa,mixin:Rc,resumeTimer:xs,showLoading:Ze,stopTimer:Fs,toggleTimer:Oc});class xc{constructor(i,c){this.callback=i,this.remaining=c,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(i){const c=this.running;return c&&this.stop(),this.remaining+=i,c&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Bs=["swal-title","swal-html","swal-footer"],Uc=s=>{const i=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!i)return{};const c=i.content;return Kc(c),Object.assign(Bc(c),jc(c),qc(c),Hc(c),$c(c),Wc(c),zc(c,Bs))},Bc=s=>{const i={};return Array.from(s.querySelectorAll("swal-param")).forEach(u=>{Fe(u,["name","value"]);const p=u.getAttribute("name"),_=u.getAttribute("value");typeof et[p]=="boolean"?i[p]=_!=="false":typeof et[p]=="object"?i[p]=JSON.parse(_):i[p]=_}),i},jc=s=>{const i={};return Array.from(s.querySelectorAll("swal-function-param")).forEach(u=>{const p=u.getAttribute("name"),_=u.getAttribute("value");i[p]=new Function("return ".concat(_))()}),i},qc=s=>{const i={};return Array.from(s.querySelectorAll("swal-button")).forEach(u=>{Fe(u,["type","color","aria-label"]);const p=u.getAttribute("type");i["".concat(p,"ButtonText")]=u.innerHTML,i["show".concat(Ke(p),"Button")]=!0,u.hasAttribute("color")&&(i["".concat(p,"ButtonColor")]=u.getAttribute("color")),u.hasAttribute("aria-label")&&(i["".concat(p,"ButtonAriaLabel")]=u.getAttribute("aria-label"))}),i},Hc=s=>{const i={},c=s.querySelector("swal-image");return c&&(Fe(c,["src","width","height","alt"]),c.hasAttribute("src")&&(i.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(i.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(i.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(i.imageAlt=c.getAttribute("alt"))),i},$c=s=>{const i={},c=s.querySelector("swal-icon");return c&&(Fe(c,["type","color"]),c.hasAttribute("type")&&(i.icon=c.getAttribute("type")),c.hasAttribute("color")&&(i.iconColor=c.getAttribute("color")),i.iconHtml=c.innerHTML),i},Wc=s=>{const i={},c=s.querySelector("swal-input");c&&(Fe(c,["type","label","placeholder","value"]),i.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(i.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(i.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(i.inputValue=c.getAttribute("value")));const u=Array.from(s.querySelectorAll("swal-input-option"));return u.length&&(i.inputOptions={},u.forEach(p=>{Fe(p,["value"]);const _=p.getAttribute("value"),T=p.innerHTML;i.inputOptions[_]=T})),i},zc=(s,i)=>{const c={};for(const u in i){const p=i[u],_=s.querySelector(p);_&&(Fe(_,[]),c[p.replace(/^swal-/,"")]=_.innerHTML.trim())}return c},Kc=s=>{const i=Bs.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(c=>{const u=c.tagName.toLowerCase();i.includes(u)||M("Unrecognized element <".concat(u,">"))})},Fe=(s,i)=>{Array.from(s.attributes).forEach(c=>{i.indexOf(c.name)===-1&&M(['Unrecognized attribute "'.concat(c.name,'" on <').concat(s.tagName.toLowerCase(),">."),"".concat(i.length?"Allowed attributes are: ".concat(i.join(", ")):"To set the value, use HTML within the element.")])})},js=10,Gc=s=>{const i=H(),c=k();typeof s.willOpen=="function"&&s.willOpen(c);const p=window.getComputedStyle(document.body).overflowY;Qc(i,c,s),setTimeout(()=>{Yc(i,c)},js),Qn()&&(Jc(i,s.scrollbarPadding,p),La()),!Qt()&&!g.previousActiveElement&&(g.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(()=>s.didOpen(c)),ae(i,f["no-transition"])},qs=s=>{const i=k();if(s.target!==i||!Me)return;const c=H();i.removeEventListener(Me,qs),c.style.overflowY="auto"},Yc=(s,i)=>{Me&&ns(i)?(s.style.overflowY="hidden",i.addEventListener(Me,qs)):s.style.overflowY="auto"},Jc=(s,i,c)=>{Ma(),i&&c!=="hidden"&&Ha(c),setTimeout(()=>{s.scrollTop=0})},Qc=(s,i,c)=>{P(s,c.showClass.backdrop),i.style.setProperty("opacity","0","important"),F(i,"grid"),setTimeout(()=>{P(i,c.showClass.popup),i.style.removeProperty("opacity")},js),P([document.documentElement,document.body],f.shown),c.heightAuto&&c.backdrop&&!c.toast&&P([document.documentElement,document.body],f["height-auto"])};var Hs={email:(s,i)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(s)?Promise.resolve():Promise.resolve(i||"Invalid email address"),url:(s,i)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(i||"Invalid URL")};function Xc(s){s.inputValidator||(s.input==="email"&&(s.inputValidator=Hs.email),s.input==="url"&&(s.inputValidator=Hs.url))}function Zc(s){(!s.target||typeof s.target=="string"&&!document.querySelector(s.target)||typeof s.target!="string"&&!s.target.appendChild)&&(M('Target parameter is not valid, defaulting to "body"'),s.target="body")}function el(s){Xc(s),s.showLoaderOnConfirm&&!s.preConfirm&&M(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Zc(s),typeof s.title=="string"&&(s.title=s.title.split(`
`).join("<br />")),Go(s)}let ce;var rn=new WeakMap;class S{constructor(){if(d(this,rn,{writable:!0,value:void 0}),typeof window>"u")return;ce=this;for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];const p=Object.freeze(this.constructor.argsToParams(c));this.params=p,this.isAwaitingPromise=!1,r(this,rn,this._main(ce.params))}_main(i){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_c(Object.assign({},c,i)),g.currentInstance&&(g.currentInstance._destroy(),Qn()&&hs()),g.currentInstance=ce;const u=nl(i,c);el(u),Object.freeze(u),g.timeout&&(g.timeout.stop(),delete g.timeout),clearTimeout(g.restoreFocusTimeout);const p=rl(ce);return cs(ce,u),w.innerParams.set(ce,u),tl(ce,p,u)}then(i){return t(this,rn).then(i)}finally(i){return t(this,rn).finally(i)}}const tl=(s,i,c)=>new Promise((u,p)=>{const _=T=>{s.close({isDismissed:!0,dismiss:T})};Tt.swalPromiseResolve.set(s,u),Tt.swalPromiseReject.set(s,p),i.confirmButton.onclick=()=>{oc(s)},i.denyButton.onclick=()=>{ac(s)},i.cancelButton.onclick=()=>{cc(s,_)},i.closeButton.onclick=()=>{_(Qe.close)},Ic(s,i,_),Ca(s,g,c,_),Qa(s,c),Gc(c),sl(g,c,_),il(i,c),setTimeout(()=>{i.container.scrollTop=0})}),nl=(s,i)=>{const c=Uc(s),u=Object.assign({},et,i,c,s);return u.showClass=Object.assign({},et.showClass,u.showClass),u.hideClass=Object.assign({},et.hideClass,u.hideClass),u},rl=s=>{const i={popup:k(),container:H(),actions:vt(),confirmButton:oe(),denyButton:Ne(),cancelButton:Ye(),loader:Je(),closeButton:Yn(),validationMessage:Yt(),progressSteps:Gn()};return w.domCache.set(s,i),i},sl=(s,i,c)=>{const u=Jt();q(u),i.timer&&(s.timeout=new xc(()=>{c("timer"),delete s.timeout},i.timer),i.timerProgressBar&&(F(u),re(u,i,"timerProgressBar"),setTimeout(()=>{s.timeout&&s.timeout.running&&Zn(i.timer)})))},il=(s,i)=>{if(!i.toast){if(!Ge(i.allowEnterKey)){al();return}ol(s,i)||rr(-1,1)}},ol=(s,i)=>i.focusDeny&&Q(s.denyButton)?(s.denyButton.focus(),!0):i.focusCancel&&Q(s.cancelButton)?(s.cancelButton.focus(),!0):i.focusConfirm&&Q(s.confirmButton)?(s.confirmButton.focus(),!0):!1,al=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const s=new Date,i=localStorage.getItem("swal-initiation");i?(s.getTime()-Date.parse(i))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const c=document.createElement("audio");c.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",c.loop=!0,document.body.appendChild(c),setTimeout(()=>{c.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(s))}S.prototype.disableButtons=As,S.prototype.enableButtons=Es,S.prototype.getInput=Is,S.prototype.disableInput=ks,S.prototype.enableInput=Ps,S.prototype.hideLoading=tn,S.prototype.disableLoading=tn,S.prototype.showValidationMessage=Cs,S.prototype.resetValidationMessage=Ss,S.prototype.close=Te,S.prototype.closePopup=Te,S.prototype.closeModal=Te,S.prototype.closeToast=Te,S.prototype.rejectPromise=ms,S.prototype.update=Ns,S.prototype._destroy=Vs,Object.assign(S,Fc),Object.keys(vc).forEach(s=>{S[s]=function(){return ce&&ce[s]?ce[s](...arguments):null}}),S.DismissReason=Qe,S.version="11.7.27";const sn=S;return sn.default=sn,sn}),typeof be<"u"&&be.Sweetalert2&&(be.swal=be.sweetAlert=be.Swal=be.SweetAlert=be.Sweetalert2)})(Vo);var Qh=Vo.exports;const gn=wl(Qh),Ai=Sd(),N=Uh(),Et=gn.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",gn.stopTimer),n.addEventListener("mouseleave",gn.resumeTimer)}}),Pi=gn.mixin({confirmButtonColor:"#ff715f"}),lf=vl("dataStore",{state:()=>({loading:!0,courseData:{},myCoursesState:"student",displayState:"list",ckeditorState:!1,updateNameState:!1,updateTeacherDataState:!1,bookmarkIds:[],bookmarkNum:0,beATeacherData:{uid:"",displayName:"",gender:"",courseImg:"",courseName:"",courseIntro:"",courseCategory:"",courseMethod:[],cityName:"",time:"",price:0,whoBuy:[],onSale:!0},createCourseStep:0,AllCoursesFirebaseData:[],otherTeacherData:[],teacherData:{uid:"",accountCreateTime:"",lastLogInTime:"",email:"",displayName:"",teacherImg:"",gender:"",birthday:"",address:"",phoneNumber:"",teachArea:[],teacherIntro:"",ckeditor:"",ckeditorImg:"",instagram:"",facebook:"",discord:"",expertise:[],educationalBackground:"",myTeachCourses:[],language:[],musicStyle:[],allTeachTime:0,studentAssess:[],calenderTeacherColor:{color:"#c3dcbe",textColor:"#000000"},calenderStudentColor:{color:"#c5b2d6",textColor:"#000000"}},studentData:{myStudyCourses:[],myCart:[],payHistory:[],allStudyTime:0,myBookmarkCourses:[],myBookmarkTeacher:[]},couponData:[],user:{},isMember:!1,userTeacherCourses:[],userStudentCourses:[],userBookmarkCourses:[],userCartCourses:[],top6courses:[],youLikeCourses:[],classScheduleData:[],classScheduleStudentData:[],classScheduleId:"",classScheduleIndex:0,classScheduleTime:"",calenderDataAll:[],calenderDataNameTemp:""}),actions:{async SetFirebaseMemberData(){this.teacherData.uid=this.user.uid,this.teacherData.email=this.user.email,this.teacherData.accountCreateTime=this.user.metadata.creationTime,await Ei(x(N,this.user.uid,"teacher"),this.teacherData),await Ei(x(N,this.user.uid,"student"),this.studentData),console.log("成功建立老師端學生端物件"),le.push("/")},async SetFirebaseCourseData(){this.beATeacherData.uid=this.user.uid,this.beATeacherData.displayName=this.teacherData.displayName,this.beATeacherData.gender=this.teacherData.gender,this.beATeacherData.teacherIntro=this.teacherData.teacherIntro,this.beATeacherData.whoBuy=[];const n="MusicTutorCourses";console.log(this.beATeacherData),await Jh(bi(N,n),this.beATeacherData),le.push("/CreateCourses/BeATeacherStep4"),this.onAuthStateChanged(),this.beATeacherData.uid="",this.beATeacherData.displayName="",this.beATeacherData.gender="",this.beATeacherData.courseImg="",this.beATeacherData.teacherIntro="",this.beATeacherData.courseName="",this.beATeacherData.courseIntro="",this.beATeacherData.courseCategory="",this.beATeacherData.courseMethod=[],this.beATeacherData.cityName="",this.beATeacherData.time=0,this.beATeacherData.price=0,this.beATeacherData.whoBuy=[]},async UpdateFirebaseMemberData(){const n=x(N,this.user.uid,"teacher");await nt(n,this.teacherData),Et.fire({icon:"success",title:"老師端資料更新成功"}),this.onAuthStateChanged()},async UpdateFirebaseUserCourseData(n){this.beATeacherData.courseImg&&(this.courseData.courseImg=this.beATeacherData.courseImg),console.log(this.courseData);const e=x(N,"MusicTutorCourses",n);await nt(e,this.courseData),Et.fire({icon:"success",title:"課程資料更新成功"})},async UpdateTeacherCalender(){const n=x(N,this.user.uid,"teacher");await nt(n,this.teacherData),Et.fire({icon:"success",title:"行事曆資料更新成功"}),this.calenderDataAll=[],this.getTeachDate(),this.getStudyDate()},async updateUserName(){const n=x(N,this.user.uid,"teacher");await nt(n,{displayName:this.teacherData.displayName}),this.userTeacherCourses.forEach(async e=>{const t=x(N,"MusicTutorCourses",e.id);await nt(t,{displayName:this.teacherData.displayName})}),Et.fire({icon:"success",title:"老師端姓名更新成功"})},async getTeacherFirebaseData(){const n=x(N,this.user.uid,"teacher"),e=await Ae(n);e.exists()?(console.log("用戶老師端資料:",e.data()),this.teacherData=e.data(),le.currentRoute._value.fullPath==="/CreateCourses/BeATeacherStep1"&&(!this.teacherData.displayName||!this.teacherData.teacherIntro||!this.teacherData.teacherImg||!this.teacherData.gender)&&(console.log(this.teacherData.displayName,this.teacherData.teacherIntro,this.teacherData.gender,this.teacherData.teacherImg),Pi.fire("請先填寫老師姓名、大頭照、性別、自我介紹"),le.push("/MemberPage"))):console.log("No such teacher document!")},async getStudentFirebaseData(){const n=x(N,this.user.uid,"student"),e=await Ae(n);e.exists()?(console.log("用戶學生端資料:",e.data()),this.studentData=e.data()):console.log("No such student document!")},async getAllCoursesFirebaseData(){this.loading=!0;const n=await Yh(bi(N,"MusicTutorCourses"));this.AllCoursesFirebaseData=[],n._docs.forEach(e=>{const t={id:e.id,createdTime:e._document.createTime.timestamp.seconds,data:e.data()};this.AllCoursesFirebaseData.push(t)}),console.log("全部課程資料",this.AllCoursesFirebaseData),this.getTop6courses(),this.getSameTeacherCourses(this.courseData.uid),this.user.uid?(this.getCouponData(),await this.getUserTeacherCourses(),await this.getUserStudentCourses(),(le.currentRoute._value.fullPath==="/MyCalendar"||le.currentRoute._value.fullPath==="/MyCourses")&&(this.calenderDataAll=[],await this.getTeachDate(),await this.getStudyDate(),console.log("行事曆全部資料",this.calenderDataAll)),this.getUserCartCourses(),this.getBookmarkCoursesData(),this.loading=!1):this.loading=!1},async getCouponData(){const n=x(N,"coupon","code"),e=await Ae(n);e.exists()?(this.couponData=e.data(),console.log("後台優惠券資料:",this.couponData)):console.log("No such OneCourses document!")},async getOneCoursesFirebaseData(n){const e=x(N,"MusicTutorCourses",n),t=await Ae(e);if(t.exists()){console.log("單一課程資料",t.data()),this.courseData=t.data();const r={id:n};this.courseData=Object.assign(this.courseData,r),this.getTeacherPhoto(this.courseData.uid),le.push(`/coursePage/${n}`)}else console.log("No such OneCourses document!")},async getTeacherPhoto(n){const e=x(N,n,"teacher"),t=await Ae(e);this.courseData.teacherImg=t.data().teacherImg},async getOneTeacherFirebaseData(n){if(n===this.user.uid)le.push("/MemberPage");else{const e=x(N,n,"teacher"),t=await Ae(e);console.log("某某老師資料",t.data()),this.otherTeacherData=t.data(),le.push(`/teacherPage/${n}`)}},async getUserTeacherCourses(){this.AllCoursesFirebaseData?(this.userTeacherCourses=this.AllCoursesFirebaseData.filter(n=>n.data.uid===this.user.uid),console.log("用戶老師端課程資料",this.userTeacherCourses)):console.log("沒取得所有課程")},async getUserStudentCourses(){this.studentData.myStudyCourses?(this.userStudentCourses=[],this.studentData.myStudyCourses.forEach(n=>{let e={},t=this.AllCoursesFirebaseData.filter(o=>o.id===n.courseId);e=JSON.parse(JSON.stringify(t)),e[0].timestamp=n.timestamp;let r={};r=e[0].data.whoBuy.filter(o=>o.timestamp===n.timestamp),e[0].classSchedule=r[0].classSchedule,this.userStudentCourses.push(e[0])}),this.UserStudentCoursesMerge()):console.log("無學生端資料")},UserStudentCoursesMerge(){const n=new Set;this.userStudentCourses=this.userStudentCourses.filter(e=>n.has(e.id)?!1:n.add(e.id)),console.log("用戶學生端課程資料",this.userStudentCourses)},getUserCartCourses(){this.AllCoursesFirebaseData?(this.userCartCourses=[],this.studentData.myCart.forEach(n=>{let e={};e=this.AllCoursesFirebaseData.filter(t=>t.id===n.courseId),e.timestamp=n.timestamp,this.userCartCourses.push(e)}),console.log("用戶購物車內課程",this.userCartCourses)):console.log("完全沒有課程")},getTop6courses(){this.top6courses=[],this.AllCoursesFirebaseData.sort((n,e)=>e.data.whoBuy.length-n.data.whoBuy.length),this.top6courses=this.AllCoursesFirebaseData.slice(0,10),console.log("人氣前10",this.top6courses)},getSameTeacherCourses(n){this.youLikeCourses=[],this.AllCoursesFirebaseData?(this.youLikeCourses=this.AllCoursesFirebaseData.filter(e=>e.data.uid===n),console.log("猜你喜歡",this.youLikeCourses)):console.log("完全沒有課程")},SetUpTeacherClassSchedule(n){this.classScheduleData=n.data.whoBuy,this.classScheduleId=n.id},async UpDateClassSchedule(){this.classScheduleData[this.classScheduleIndex].classSchedule=this.classScheduleTime;const n=x(N,"MusicTutorCourses",this.classScheduleId);await nt(n,{whoBuy:this.classScheduleData}),this.classScheduleTime="",this.classScheduleId="",this.classScheduleIndex=0,Et.fire({icon:"success",title:"設定上課時間成功"})},lookStudentClassSchedule(n){this.classScheduleData=[],this.classScheduleData=n.data.whoBuy.filter(e=>e.uid===this.teacherData.uid)},async getTeachDate(){this.userTeacherCourses.forEach(n=>{n.data.whoBuy.forEach(async e=>{const t=x(N,e.uid,"teacher"),r=await Ae(t);if(e.studentName=r.data().displayName,e.classSchedule){let o={};o.title=n.data.courseName,o.color=this.teacherData.calenderTeacherColor.color,o.textColor=this.teacherData.calenderTeacherColor.textColor,o.allDay=!1,o.start=on(e.classSchedule).format("YYYY-MM-DD HH:mm"),o.end=on(e.classSchedule).add(n.data.time,"minute").format("YYYY-MM-DD HH:mm"),this.calenderDataAll.push(o)}})})},async getStudyDate(){this.userStudentCourses.forEach(n=>{n.data.whoBuy.forEach(async e=>{const t=x(N,e.uid,"teacher"),r=await Ae(t);if(e.studentName=r.data().displayName,e.classSchedule){let o={};o.title=n.data.courseName,o.color=this.teacherData.calenderStudentColor.color,o.textColor=this.teacherData.calenderStudentColor.textColor,o.allDay=!1,o.start=on(e.classSchedule).format("YYYY-MM-DD HH:mm"),o.end=on(e.classSchedule).add(n.data.time,"minute").format("YYYY-MM-DD HH:mm"),this.calenderDataAll.push(o)}})})},async onAuthStateChanged(){Xs(Ai,n=>{console.log("user端資料",n),n?(this.user=n,this.isMember=!0,this.getTeacherFirebaseData(),this.getStudentFirebaseData(),this.getAllCoursesFirebaseData()):(this.isMember=!1,this.getAllCoursesFirebaseData(),console.log("已登出"))})},async onAuthStateChangedForCreateCourse(){Xs(Ai,n=>{n?(this.user=n,this.isMember=!0,this.getTeacherFirebaseData(),console.log("開課囉")):(this.isMember=!1,le.push("/UserLogin"),console.log("已登出"))})},getBookmarkIds(){this.bookmarkIds=JSON.parse(localStorage.getItem("bookmarkIds"))||[]},getBookmarkCoursesData(){this.getBookmarkIds(),this.userBookmarkCourses=[],this.AllCoursesFirebaseData.forEach(n=>{this.bookmarkIds.indexOf(n.id)>-1&&this.userBookmarkCourses.push(n)}),this.bookmarkNum=this.userBookmarkCourses.length,console.log("用戶收藏課程資料",this.userBookmarkCourses)},toggleBookmark(n){const e=n;if(!this.bookmarkIds.some(r=>r===e))this.bookmarkIds.push(n),localStorage.setItem("bookmarkIds",JSON.stringify(this.bookmarkIds));else{const r=this.bookmarkIds.find(o=>o===e);this.bookmarkIds.splice(this.bookmarkIds.indexOf(r),1),localStorage.setItem("bookmarkIds",JSON.stringify(this.bookmarkIds))}this.getBookmarkCoursesData()},async uploadPhoto(n,e){try{const t=e.target.files[0];if(!t)return;const r=await this.beforeUpload(t);if(!r.isValid)throw r.errorMessages;this.to64(n,t)}catch(t){Pi.fire(t),console.log("Catch Error: ",t)}finally{e.target.value=""}},beforeUpload(n){return new Promise(e=>{const r=["image/jpeg","image/png"].includes(n.type),o=[];r||o.push("需上傳 JPG 或 PNG 檔!");const a=n.size/1024/1024<.15;a||o.push("圖片大小需小於0.15MB!"),e({isValid:r&&a,errorMessages:o.join(`
`)})})},to64(n,e){const t=new FormData;t.append("iFile",e);const r=t.get("iFile"),o=new FileReader,a=r.type;o.readAsDataURL(r),o.onload=l=>{/^image\/[jpeg|png|gif]/.test(a)&&(n==="teacher"?(this.teacherData.teacherImg=l.target.result,this.UpdateFirebaseMemberData()):n==="ckeditor"?(this.teacherData.ckeditorImg=l.target.result,this.UpdateFirebaseMemberData()):n==="course"&&(this.beATeacherData.courseImg=l.target.result))}}},getters:{bookmarkState(){return n=>this.bookmarkIds.indexOf(n)>-1?"bi bi bi-bookmark-fill text-white bookmark-on":"bi bi-bookmark text-white bookmark-off"}}});export{Pe as F,ke as G,gn as S,tf as a,rf as b,ef as c,lf as d,Ce as e,Zh as f,Sd as g,Xs as o,nf as s};
