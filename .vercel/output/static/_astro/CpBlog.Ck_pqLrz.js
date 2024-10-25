import{j as u}from"./jsx-runtime.CRkqtJS5.js";import{r as D}from"./index.B52nOzfP.js";function f(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const j=6048e5,H=864e5;let Q={};function v(){return Q}function P(t,e){const n=v(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=f(t),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function M(t){return P(t,{weekStartsOn:1})}function F(t){const e=f(t),n=e.getFullYear(),r=y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=M(r),o=y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=M(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function W(t){const e=f(t);return e.setHours(0,0,0,0),e}function S(t){const e=f(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function L(t,e){const n=W(t),r=W(e),a=+n-S(n),o=+r-S(r);return Math.round((a-o)/H)}function X(t){const e=F(t),n=y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),M(n)}function _(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function B(t){if(!_(t)&&typeof t!="number")return!1;const e=f(t);return!isNaN(Number(e))}function G(t){const e=f(t),n=y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},A=(t,e,n)=>{let r;const a=R[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function k(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},V={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},J={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$={date:k({formats:I,defaultWidth:"full"}),time:k({formats:V,defaultWidth:"full"}),dateTime:k({formats:J,defaultWidth:"full"})},U={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},z=(t,e,n,r)=>U[t];function p(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,d=n?.width?String(n.width):s;a=t.formattingValues[d]||t.formattingValues[s]}else{const s=t.defaultWidth,d=n?.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const K={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Z={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},et={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},at=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ot={ordinalNumber:at,era:p({values:K,defaultWidth:"wide"}),quarter:p({values:Z,defaultWidth:"wide",argumentCallback:t=>t-1}),month:p({values:tt,defaultWidth:"wide"}),day:p({values:et,defaultWidth:"wide"}),dayPeriod:p({values:nt,defaultWidth:"wide",formattingValues:rt,defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(d)?st(d,c=>c.test(s)):it(d,c=>c.test(s));let m;m=t.valueCallback?t.valueCallback(h):h,m=n.valueCallback?n.valueCallback(m):m;const l=e.slice(s.length);return{value:m,rest:l}}}function it(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function st(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ct(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const d=e.slice(a.length);return{value:s,rest:d}}}const ut=/^(\d+)(th|st|nd|rd)?/i,dt=/\d+/i,lt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ft={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},pt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pt={ordinalNumber:ct({matchPattern:ut,parsePattern:dt,valueCallback:t=>parseInt(t,10)}),era:x({matchPatterns:lt,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:x({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),day:x({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:pt,defaultMatchWidth:"any",parsePatterns:xt,defaultParseWidth:"any"})},Mt={code:"en-US",formatDistance:A,formatLong:$,formatRelative:z,localize:ot,match:Pt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function vt(t){const e=f(t);return L(e,G(e))+1}function Ot(t){const e=f(t),n=+M(e)-+X(e);return Math.round(n/j)+1}function C(t,e){const n=f(t),r=n.getFullYear(),a=v(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=y(t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const d=P(s,e),h=y(t,0);h.setFullYear(r,0,o),h.setHours(0,0,0,0);const m=P(h,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function kt(t,e){const n=v(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=C(t,e),o=y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),P(o,e)}function Dt(t,e){const n=f(t),r=+P(n,e)-+kt(n,e);return Math.round(r/j)+1}function i(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const g={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return i(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):i(n+1,2)},d(t,e){return i(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return i(t.getHours()%12||12,e.length)},H(t,e){return i(t.getHours(),e.length)},m(t,e){return i(t.getMinutes(),e.length)},s(t,e){return i(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return i(a,e.length)}},b={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},T={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g.y(t,e)},Y:function(t,e,n,r){const a=C(t,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return i(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):i(o,e.length)},R:function(t,e){const n=F(t);return i(n,e.length)},u:function(t,e){const n=t.getFullYear();return i(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return i(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return i(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return g.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return i(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Dt(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):i(a,e.length)},I:function(t,e,n){const r=Ot(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):i(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):g.d(t,e)},D:function(t,e,n){const r=vt(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):i(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return i(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return i(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return i(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=b.noon:r===0?a=b.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=b.evening:r>=12?a=b.afternoon:r>=4?a=b.morning:a=b.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):g.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):g.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):g.s(t,e)},S:function(t,e){return g.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return w(r);case"XXXXX":case"XXX":default:return w(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return w(r);case"xxxxx":case"xxx":default:return w(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");case"OOOO":default:return"GMT"+w(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");case"zzzz":default:return"GMT"+w(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return i(r,e.length)},T:function(t,e,n){const r=t.getTime();return i(r,e.length)}};function Y(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+i(o,2)}function N(t,e){return t%60===0?(t>0?"-":"+")+i(Math.abs(t)/60,2):w(t,e)}function w(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=i(Math.trunc(r/60),2),o=i(r%60,2);return n+a+e+o}const E=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},q=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Wt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return E(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",E(r,e)).replace("{{time}}",q(a,e))},St={p:q,P:Wt},Tt=/^D+$/,Yt=/^Y+$/,Nt=["D","DD","YY","YYYY"];function Et(t){return Tt.test(t)}function jt(t){return Yt.test(t)}function Ft(t,e,n){const r=Ct(t,e,n);if(console.warn(r),Nt.includes(t))throw new RangeError(r)}function Ct(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qt=/^'([^]*?)'?$/,Lt=/''/g,Xt=/[a-zA-Z]/;function _t(t,e,n){const r=v(),a=r.locale??Mt,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,d=f(t);if(!B(d))throw new RangeError("Invalid time value");let h=e.match(Ht).map(l=>{const c=l[0];if(c==="p"||c==="P"){const O=St[c];return O(l,a.formatLong)}return l}).join("").match(qt).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const c=l[0];if(c==="'")return{isToken:!1,value:Bt(l)};if(T[c])return{isToken:!0,value:l};if(c.match(Xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(h=a.localize.preprocessor(d,h));const m={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return h.map(l=>{if(!l.isToken)return l.value;const c=l.value;(jt(c)||Et(c))&&Ft(c,e,String(t));const O=T[c[0]];return O(d,c,a.localize,m)}).join("")}function Bt(t){const e=t.match(Qt);return e?e[1].replace(Lt,"'"):t}const Gt=`query {
      posts {
          edges {
            node {
              title
              excerpt
              date
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
              content
            }
          }
        }
      }`,Rt={"Content-Type":"application/json"};function Vt(){const t="https://blog.advogadaamandaferraz.com/graphql";console.log(t);const[e,n]=D.useState();return D.useEffect(()=>{async function r(){const o=await(await fetch(t,{headers:Rt,method:"POST",body:JSON.stringify({query:Gt})})).json();console.log(o),n(o?.data)}r()},[]),u.jsx("div",{children:e&&e.posts.edges.length>0&&u.jsx("div",{className:"bg-greenColor bg-opacity-40 py-4",children:u.jsx("div",{className:"mx-auto desktop:max-w-5xl desktop:flex gap-8 mb-10",children:e.posts.edges.slice(0,3).map((r,a)=>u.jsx("a",{href:`/blog/${r.node.slug}`,children:u.jsxs("div",{className:"mx-4 desktop:mb-0 mb-4 transition-transform transform hover:scale-105",children:[u.jsxs("div",{className:"relative desktop:w-80 h-40",children:[u.jsx("img",{src:r.node.featuredImage.node.sourceUrl,alt:r.node.title,className:"rounded-t-lg w-full h-full object-none absolute inset-0 mx-auto",style:{objectFit:"cover",objectPosition:"center"}}),u.jsx("div",{className:" absolute w-full bottom-[-38px] flex justify-center z-20 p-2",children:u.jsx("div",{className:"bg-#7f948e rounded-full p-1",children:u.jsx("img",{src:"../src/images/logo-blog.png",alt:"Logo Blog",className:"rounded-t-lg w-52px h-52px"})})})]}),u.jsxs("div",{className:"relative desktop:w-80 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg",children:[u.jsx("div",{className:"uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose",children:r.node.categories.edges.map(o=>u.jsx("span",{children:o.node.name},o.node.id))}),u.jsx("div",{className:"border-b-2 border-primary-500 w-8"}),u.jsx("div",{className:"mt-4 uppercase text-gray-600 italic font-semibold text-xs",children:_t(new Date(r.node.date),"dd/MM/yyyy")}),u.jsx("h2",{className:" mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300",children:r.node.title})]})]})},a))})})})}export{Vt as default};
