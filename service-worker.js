if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,i,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return a;case"module":return f;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-aa60b310"],(function(e){"use strict";e.setCacheNameDetails({prefix:"calendarapp"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/10.1e22e786.css",revision:"df280636815eaaf8d76cd0f3ab967ab1"},{url:"css/11.e9d59c30.css",revision:"3989075de0a7dcd532f4a3515f842437"},{url:"css/12.532a299a.css",revision:"415ada8e6bfe1b8598d3010ae08971f6"},{url:"css/13.e8085262.css",revision:"d94d26b9ac1c345cb6cf5c9f0948e463"},{url:"css/14.bfad05a5.css",revision:"699a439b5529b13a5cfc5f8aac4d4934"},{url:"css/15.b702ecbf.css",revision:"632492ec779a465ff8b9ede25138362a"},{url:"css/16.6aabdf8c.css",revision:"bc1332ebf422b279cdac8653687cbe77"},{url:"css/2.7234aacb.css",revision:"bb557116de4a8aefe22ba853bc0dab92"},{url:"css/3.4a22a58c.css",revision:"9e01d8d91c3aeeda9394199e818d1be2"},{url:"css/4.1a0c2bd2.css",revision:"0dc8c8bf06fd53bb11eb7a104f686663"},{url:"css/5.080444ae.css",revision:"c7954c60f3c65effc7156f41cdd2661f"},{url:"css/6.e2f1bc42.css",revision:"81e8b50c2561ba1195c8b3bb6de67403"},{url:"css/7.12abd865.css",revision:"95df636810660f74f6ae4a413dd328b6"},{url:"css/8.78d49771.css",revision:"978c020037280d5552afee195d88a7ee"},{url:"css/9.e9541b52.css",revision:"bcd63a8758f6b0e91133dca035b4c735"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.1eaf9c8f.css",revision:"e4238d1047f825d38ae8af3930d64502"},{url:"favicon.ico",revision:"3e12d4a32b59239ae29615eaa28f2b8d"},{url:"firebase-messaging-sw.js",revision:"240bf79f7c9f71a5f28170f6ced31b67"},{url:"firebase.van.afuera/404.html",revision:"a4e2271d19eb1f6f93a15e1b7a4e74dd"},{url:"firebase.van.afuera/index.html",revision:"08368be023a6071e3657037d51174deb"},{url:"fonts/BebasNeue-Regular.12e3683f.ttf",revision:"b2b293064f557c41411aac04d6f6710d"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/PressStart2P-Regular.5f45b521.ttf",revision:"2c404fd06cd67770807d242b2d2e5a16"},{url:"fonts/SquarePeg-Regular.381be138.ttf",revision:"1a08d4c39018ce5a21c75b5183b6228f"},{url:"fonts/fa-brands-400.2285773e.woff",revision:"1a575a4138e5f366474f0e7c5bd614a5"},{url:"fonts/fa-brands-400.d878b0a6.woff2",revision:"ed311c7a0ade9a75bb3ebf5a7670f31d"},{url:"fonts/fa-regular-400.7a333762.woff2",revision:"b91d376b8d7646d671cd820950d5f7f1"},{url:"fonts/fa-regular-400.bb58e57c.woff",revision:"d1d7e3b4c219fde0f7376c6facfd7149"},{url:"fonts/fa-solid-900.1551f4f6.woff2",revision:"d824df7eb2e268626a2dd9a6a741ac4e"},{url:"fonts/fa-solid-900.eeccf4f6.woff",revision:"d745348d289b149026921f197929a893"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1dd1bb36.woff",revision:"49f2e1a9a8773894fe6d04032611fad6"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.f54bbe10.woff2",revision:"37ce905ae8ba1e0d17c9ba681e6a0af6"},{url:"fonts/neontubes-webfont.2f028ec5.ttf",revision:"c394bb032e5006f0b77c1bba7a2e6708"},{url:"fonts/permanentMarker.109a10dc.ttf",revision:"c863f8028c2505f92540e0ba7c379002"},{url:"icons/apple-icon-120x120.png",revision:"16afd63fcfb75504012061cc50d44bea"},{url:"icons/apple-icon-152x152.png",revision:"94fb6a91a0f8e11271827b8d76917342"},{url:"icons/apple-icon-167x167.png",revision:"e28634187a3b44b3501c7587b160e661"},{url:"icons/apple-icon-180x180.png",revision:"1bc39d17d66c23b1ec8f98b69f94ef3b"},{url:"icons/apple-launch-1080x2340.png",revision:"5f4498c74cf729006b1a8f4e033b5c8d"},{url:"icons/apple-launch-1125x2436.png",revision:"44d4f7e1efd225def06ca06c93b26335"},{url:"icons/apple-launch-1170x2532.png",revision:"affd044a6a36f0da0a643e4d50c006e4"},{url:"icons/apple-launch-1179x2556.png",revision:"8278e66fde5189d16f98199b4d84fbdc"},{url:"icons/apple-launch-1242x2208.png",revision:"f15e11625a1d86a36cd24b24b4666f46"},{url:"icons/apple-launch-1242x2688.png",revision:"ac18c18b4e1287f3771f645e16180bf6"},{url:"icons/apple-launch-1284x2778.png",revision:"a3d68ac37a203aa3f96e0f7e4d7464aa"},{url:"icons/apple-launch-1290x2796.png",revision:"fce3e5f97e3f3b5da41fff1126cd5e51"},{url:"icons/apple-launch-1536x2048.png",revision:"e988266c50555de70c3b355da48812a4"},{url:"icons/apple-launch-1620x2160.png",revision:"18cea434d6359bd1d0b338a0f7c4dd27"},{url:"icons/apple-launch-1668x2224.png",revision:"e6bbc24d76c344ee474d81770e969ca4"},{url:"icons/apple-launch-1668x2388.png",revision:"e73324df0acbe4149731b4bd404f4d7a"},{url:"icons/apple-launch-2048x2732.png",revision:"c3b53dca2f87b84ede51ae7bad4c43d2"},{url:"icons/apple-launch-750x1334.png",revision:"eaaf5931d9253f4ec8a0f91b84d09559"},{url:"icons/apple-launch-828x1792.png",revision:"c5d306054c61fd679b55abf921e33582"},{url:"icons/favicon-128x128.png",revision:"866fdccfea19f13120437cac94ab27e7"},{url:"icons/favicon-16x16.png",revision:"ae6d75307db41335570be5c40b60aaae"},{url:"icons/favicon-32x32.png",revision:"da9a5ef9b059f73929a5c02ba6c3051e"},{url:"icons/favicon-96x96.png",revision:"afca79425e6b36996105e30d533670b4"},{url:"icons/icon-128x128.png",revision:"866fdccfea19f13120437cac94ab27e7"},{url:"icons/icon-192x192.png",revision:"4549b12aa0d4293abbc11f59f5b5a63c"},{url:"icons/icon-256x256.png",revision:"2370c3593f2bb0ac13cb65d169a08fee"},{url:"icons/icon-384x384.png",revision:"17da9804d8098d3e674678f326fb0fe9"},{url:"icons/icon-512x512.png",revision:"a939c6589ca4e55f213f108462b6b899"},{url:"icons/ms-icon-144x144.png",revision:"71b5cfb454d11eea4701c21d78a10987"},{url:"icons/safari-pinned-tab.svg",revision:"34c593609ddf16e0dbe78b9b0e0a0daf"},{url:"img/7espada.9c7421c6.png",revision:"0dd0b086c959a29d7dde6e186db5a4eb"},{url:"img/7oro.cd0fbd64.png",revision:"31d13726a930d0da0727575e01396d82"},{url:"img/LogoTruco.0e2c025d.png",revision:"2b4b807458258a3501ce54f1efd0c6ac"},{url:"img/amongus.5e7a756c.jpg",revision:"7e93807fb1166c81ef436b24d0b713ed"},{url:"img/ancho.15e4c135.png",revision:"af9c1727f2e71f053cee490db6278f42"},{url:"img/aoe2.301f65b2.png",revision:"afc6612ba66f41a340b96c93a7fa21f7"},{url:"img/appStore.328e4a82.png",revision:"710b3409ddc64749207c786eed7d58c7"},{url:"img/asBasto.be5f2115.png",revision:"0a1b719898623c16dcc1f4ceb71c91d9"},{url:"img/bgBlock.c9ce5ec9.jpg",revision:"1d10b6169dfb1b945dfc27301f7749c3"},{url:"img/bgCovid.0ffed24b.jpg",revision:"d294d86698bbba55ad956f5c0341919a"},{url:"img/brawlStars.cd54c5ec.jpg",revision:"d0b254b47296ef6e63c5283482d5f9aa"},{url:"img/brawlhalla.0e1e274c.jpg",revision:"d7443720c9aeb89d3a7f045de36a2c43"},{url:"img/clashroyale.0e5d0220.jpg",revision:"24e1721f79d0530f2675b59157516cdb"},{url:"img/codWarzone.434ee1fd.jpg",revision:"a77d421227f1de6ea5e6b118c531060d"},{url:"img/dota2.13d1334d.jpg",revision:"3a3d5c30197d488b7fb7e2d59702724b"},{url:"img/fifa21.318a42bd.jpeg",revision:"6c91b8868ec3071fedddd6890f2ca44e"},{url:"img/fondoJuegos.0b7203e5.jpg",revision:"426b5a5f2edef7da5d743abfa8324b02"},{url:"img/fondoJuegosS.f69ba206.jpg",revision:"480a2cab123fecffe7a3af83eb900df6"},{url:"img/googlePlay.d6906b6c.png",revision:"09d24cb1b209b9b5970e36308f66575c"},{url:"img/logo.71a9d627.png",revision:"923d722e0aa082cfec1bb7e0a255d0fb"},{url:"img/lolWR.bc564065.jpg",revision:"ea95de1320df79f0a2346909f15b2f3f"},{url:"img/poker.2ae7b9fa.png",revision:"f4f06e4894002ef4d63540b0e080bf71"},{url:"img/repeat3.2c0d1570.jpg",revision:"b4d4b32b4b982f0a11b4080e61cac38f"},{url:"img/truco.c9e4d71d.jpg",revision:"8b684e1821a000e76322a2fa561c9346"},{url:"index.html",revision:"29a6722df215cb639f705c460f97013c"},{url:"js/10.465dd941.js",revision:"a127f57795f70d0100060f55bbfd9bfb"},{url:"js/11.d7530799.js",revision:"fac517e6626391763df9786e4e35ad61"},{url:"js/12.73e8e601.js",revision:"6af9e5cfe1d9e2f98019c03183729e8c"},{url:"js/13.b07a62e9.js",revision:"2dbdc8df54944d1a09140c010041b112"},{url:"js/14.992f68bd.js",revision:"2fee4f773efad47dd70850393286e90b"},{url:"js/15.8a1fd035.js",revision:"d20d652f5026b3d83395a720a3a10e53"},{url:"js/16.50225958.js",revision:"59b693a6ab4e229463e2da10b50524d8"},{url:"js/17.78476ccf.js",revision:"b102b97a5ed403216f83cd25c430dce7"},{url:"js/2.c4419d4c.js",revision:"2c3fe7de7ca289f080ddb3c07c21c1e1"},{url:"js/3.c1a36a78.js",revision:"2626ea278f692e633410d214d5d544ab"},{url:"js/4.c26bea7a.js",revision:"1919e4259f91bb0e4accae154bf707cf"},{url:"js/5.f4bd7f7e.js",revision:"18a3a5628b0e3b7b266aae05008fcda9"},{url:"js/6.e6a19845.js",revision:"33b64be04bfe10563a623c89d82709fc"},{url:"js/7.b626ae3c.js",revision:"3453616e6681bf72f3882f4b432504d9"},{url:"js/8.e4429c24.js",revision:"91943c98144f7313cdc35d478e78a913"},{url:"js/9.839e8a5b.js",revision:"b056ced6df5bd7efa342e7b9f01378b9"},{url:"js/app.a4f57b05.js",revision:"85a2e9b95f9f0dd4ba880589c69cdf73"},{url:"js/vendor.af90a11b.js",revision:"15a8c580a0e8828634c46dbf5da6a248"},{url:"last public/css/10.bfad05a5.css",revision:"699a439b5529b13a5cfc5f8aac4d4934"},{url:"last public/css/2.80f0e309.css",revision:"20c8a8f7434bf08650ab024307c3d70a"},{url:"last public/css/3.9254f9eb.css",revision:"a110e087fa3b52c53455c4e3d636eb15"},{url:"last public/css/4.9115134f.css",revision:"53697ca7d15c168c38f4468f519eea5c"},{url:"last public/css/5.e2f1bc42.css",revision:"81e8b50c2561ba1195c8b3bb6de67403"},{url:"last public/css/6.b959e07f.css",revision:"056d7d7e6ed093516a61fd28f1037c51"},{url:"last public/css/7.3bcbb512.css",revision:"b83bf3633f14a9079ea53c8b4fe859f9"},{url:"last public/css/8.a0fc834f.css",revision:"aa41f51bb41a8e36d180c1af7359f630"},{url:"last public/css/9.91c06b1a.css",revision:"3989075de0a7dcd532f4a3515f842437"},{url:"last public/css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"last public/css/vendor.6f28a2a5.css",revision:"cc626c735cb67ca203d6e9fc7cbbe968"},{url:"last public/favicon.ico",revision:"b99a399baa36d319ca41d0dedfaa53e8"},{url:"last public/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"last public/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"last public/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"last public/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"last public/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"last public/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"last public/fonts/PressStart2P-Regular.5f45b521.ttf",revision:"2c404fd06cd67770807d242b2d2e5a16"},{url:"last public/fonts/fa-brands-400.c967a94c.woff2",revision:"f075c50f89795e4cdb4d45b51f1a6800"},{url:"last public/fonts/fa-brands-400.dc2cbadd.woff",revision:"ad527cc5ec23d6da66e8a1d6772ea6d3"},{url:"last public/fonts/fa-regular-400.1008b522.woff2",revision:"4a74738e7728e93c4394b8604081da62"},{url:"last public/fonts/fa-regular-400.1069ea55.woff",revision:"3c6879c4f342203d099bdd66dce6d396"},{url:"last public/fonts/fa-solid-900.3ceb50e7.woff2",revision:"8e1ed89b6ccb8ce41faf5cb672677105"},{url:"last public/fonts/fa-solid-900.46fdbd2d.woff",revision:"4451e1d86df7491dd874f2c41eee1053"},{url:"last public/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1811d381.woff",revision:"84a37de85c17f186652a179b1145392f"},{url:"last public/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.fa3334fe.woff2",revision:"703cf8f274fbb265d49c6262825780e1"},{url:"last public/fonts/neontubes-webfont.2f028ec5.ttf",revision:"c394bb032e5006f0b77c1bba7a2e6708"},{url:"last public/fonts/permanentMarker.109a10dc.ttf",revision:"c863f8028c2505f92540e0ba7c379002"},{url:"last public/icons/apple-icon-120x120.png",revision:"fe09f095df9d58f5e813b52587a6ae5e"},{url:"last public/icons/apple-icon-152x152.png",revision:"a3c5850b2958d1e5c424ae355057ab7a"},{url:"last public/icons/apple-icon-167x167.png",revision:"18e892b990cfb68e60f0d14a336e8108"},{url:"last public/icons/apple-icon-180x180.png",revision:"e430ec03cf1f21d36457ad7c838467d8"},{url:"last public/icons/apple-launch-1125x2436.png",revision:"2cdbdab3c688e5406a8d4f07ffed5a78"},{url:"last public/icons/apple-launch-1242x2208.png",revision:"a0db497857a308771917ee20f51a7081"},{url:"last public/icons/apple-launch-1242x2688.png",revision:"2db535810b29b19f4e80f8cff200d5c5"},{url:"last public/icons/apple-launch-1536x2048.png",revision:"0f454942678fd8878b7249e951c09287"},{url:"last public/icons/apple-launch-1668x2224.png",revision:"fb9fb79dcd63406dc50d032bd94db2cb"},{url:"last public/icons/apple-launch-1668x2388.png",revision:"2fa3fd9c886c72a5c74de07aa3ae7ed3"},{url:"last public/icons/apple-launch-2048x2732.png",revision:"aff196e72f52560dee6bf3c9099806b0"},{url:"last public/icons/apple-launch-640x1136.png",revision:"b1f049610d4bd48ceade11df2fee25a1"},{url:"last public/icons/apple-launch-750x1334.png",revision:"3d21d9045af6d993146f8c7f0b15b72b"},{url:"last public/icons/apple-launch-828x1792.png",revision:"8ce03b4b6a6a39b3efb1aa6d6ce9d055"},{url:"last public/icons/favicon-128x128.png",revision:"fcc5a231e32ec9b2dbcdd5c0b2d58d50"},{url:"last public/icons/favicon-16x16.png",revision:"04c91c68bc517db34d34745696a440bc"},{url:"last public/icons/favicon-32x32.png",revision:"0ff4c262b291d44c76b25863223aed7f"},{url:"last public/icons/favicon-96x96.png",revision:"6948fddfad949723a8dc03f28753a68b"},{url:"last public/icons/icon-128x128.png",revision:"fcc5a231e32ec9b2dbcdd5c0b2d58d50"},{url:"last public/icons/icon-192x192.png",revision:"0e4e842d4a7850b9a63a57c1b51439b4"},{url:"last public/icons/icon-256x256.png",revision:"a18b4f17a5d7e76a2ddffba6ed1ed1b1"},{url:"last public/icons/icon-384x384.png",revision:"fc512945974213ee8399dc8f959c0c95"},{url:"last public/icons/icon-512x512.png",revision:"0295eb1c1fb2172a52b63bf37697ed94"},{url:"last public/icons/ms-icon-144x144.png",revision:"a3eefb1f99466117397cc80e97cfaec9"},{url:"last public/icons/safari-pinned-tab.svg",revision:"57a78790cc00f5aaaaf398241ce235ea"},{url:"last public/img/amongus.5e7a756c.jpg",revision:"7e93807fb1166c81ef436b24d0b713ed"},{url:"last public/img/aoe2.301f65b2.png",revision:"afc6612ba66f41a340b96c93a7fa21f7"},{url:"last public/img/bgBlock.c9ce5ec9.jpg",revision:"1d10b6169dfb1b945dfc27301f7749c3"},{url:"last public/img/bgCovid.0ffed24b.jpg",revision:"d294d86698bbba55ad956f5c0341919a"},{url:"last public/img/brawlStars.cd54c5ec.jpg",revision:"d0b254b47296ef6e63c5283482d5f9aa"},{url:"last public/img/brawlhalla.0e1e274c.jpg",revision:"d7443720c9aeb89d3a7f045de36a2c43"},{url:"last public/img/clashRoyale.0e5d0220.jpg",revision:"24e1721f79d0530f2675b59157516cdb"},{url:"last public/img/codWarzone.434ee1fd.jpg",revision:"a77d421227f1de6ea5e6b118c531060d"},{url:"last public/img/dota2.13d1334d.jpg",revision:"3a3d5c30197d488b7fb7e2d59702724b"},{url:"last public/img/fifa21.318a42bd.jpeg",revision:"6c91b8868ec3071fedddd6890f2ca44e"},{url:"last public/img/fondoJuegos.0b7203e5.jpg",revision:"426b5a5f2edef7da5d743abfa8324b02"},{url:"last public/img/fondoJuegosS.f69ba206.jpg",revision:"480a2cab123fecffe7a3af83eb900df6"},{url:"last public/img/lolWR.bc564065.jpg",revision:"ea95de1320df79f0a2346909f15b2f3f"},{url:"last public/img/poker.2ae7b9fa.png",revision:"f4f06e4894002ef4d63540b0e080bf71"},{url:"last public/img/repeat3.2c0d1570.jpg",revision:"b4d4b32b4b982f0a11b4080e61cac38f"},{url:"last public/img/truco.c9e4d71d.jpg",revision:"8b684e1821a000e76322a2fa561c9346"},{url:"last public/index.html",revision:"e81893dcedd2f9c3bb40839b53dd7589"},{url:"last public/js/10.b505585c.js",revision:"513460cb2a971d24f62d8a1c8b5cf76a"},{url:"last public/js/11.bce7e3ec.js",revision:"65f1a35458c722dfb24b3975daff29cc"},{url:"last public/js/2.7d5fbaf6.js",revision:"e95812f07fe0c66558cdd26755d5fd7a"},{url:"last public/js/3.3bf910d7.js",revision:"182aa88283431d674d9f3743db25b75c"},{url:"last public/js/4.3ce9c4c1.js",revision:"00d0fd726795cb292638ee31dc655ed2"},{url:"last public/js/4.e60718a5.js",revision:"cdb514f5b95199791a2a41ba0d47bb2d"},{url:"last public/js/5.433bd350.js",revision:"9bac7361246ebb81765b0dcdc9e1afd5"},{url:"last public/js/6.e12126a6.js",revision:"36d6cf5b2f539c21d4a13a42cbcbf92c"},{url:"last public/js/7.f05963da.js",revision:"169bf16a4fb3e0b5ddb53731cf71e802"},{url:"last public/js/8.164bd793.js",revision:"732fc99f36f59560ddc65ef0b2ea8fbc"},{url:"last public/js/9.69fc7728.js",revision:"89a37bd50d30c85dc0460d9609c12ca7"},{url:"last public/js/app.3f823870.js",revision:"6b9fb9026c05422519df9804c7e97152"},{url:"last public/js/app.9e7150e8.js",revision:"3b7b3e99b8425e09c59eb79ec73aa077"},{url:"last public/js/vendor.049ce2e0.js",revision:"8fc025c3590d67f572ebf9e681f82133"},{url:"last public/logo.png",revision:"d418d896691ec81048bea4ebe314a28d"},{url:"last public/manifest.json",revision:"9ea45e9620c9fced90e3ae6256863634"},{url:"last public/service-worker.js",revision:"e0f672ecbf00217ff4c96cbf71e23e02"},{url:"last public/statics/html2pdf.bundle.min.js",revision:"f9568fd95608e7a178ca7474be92bb42"},{url:"last public/statics/logof.png",revision:"82bc980c994e79158992b3250999b6e7"},{url:"last public/statics/oneSignal.js",revision:"ef94f81412ddc268b4591016a9da8d22"},{url:"last public/workbox-e170c028.js",revision:"34bec5bccf495483d24778329dbd0a2e"},{url:"manifest.json",revision:"d5f6c5841d1d94824b4893767a023e7f"},{url:"statics/html2pdf.bundle.min.js",revision:"f9568fd95608e7a178ca7474be92bb42"},{url:"statics/logof.png",revision:"82bc980c994e79158992b3250999b6e7"},{url:"statics/oneSignal.js",revision:"ef94f81412ddc268b4591016a9da8d22"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),e.registerRoute(/(\/|\/#|\/#\/|\/[^./]+)$/g,new e.NetworkFirst,"GET")}));
