const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");
const axios = require("axios");


const animeVoiceApiUrl = "https://api.tts.quest/v3/voicevox/synthesis?text=";

(function(_0x500e5f,_0x250856){var _0x585613=_0x1a8d,_0x2c88b9=_0x500e5f();while(!![]){try{var _0xef1305=parseInt(_0x585613(0x208))/0x1+-parseInt(_0x585613(0x1f9))/0x2*(-parseInt(_0x585613(0x20b))/0x3)+parseInt(_0x585613(0x212))/0x4*(parseInt(_0x585613(0x1f3))/0x5)+-parseInt(_0x585613(0x215))/0x6+parseInt(_0x585613(0x202))/0x7*(-parseInt(_0x585613(0x1ef))/0x8)+-parseInt(_0x585613(0x1fd))/0x9*(parseInt(_0x585613(0x209))/0xa)+parseInt(_0x585613(0x216))/0xb*(parseInt(_0x585613(0x214))/0xc);if(_0xef1305===_0x250856)break;else _0x2c88b9['push'](_0x2c88b9['shift']());}catch(_0x1e320c){_0x2c88b9['push'](_0x2c88b9['shift']());}}}(_0x5c4a,0xd93c4));function _0x358e(){var _0x32cf77=_0x1a8d,_0x11a948=[_0x32cf77(0x1fb),_0x32cf77(0x1f7),'916686MksXxC',_0x32cf77(0x218),'3436676GyZoxL',_0x32cf77(0x206),_0x32cf77(0x21a),_0x32cf77(0x1f4),_0x32cf77(0x1f5),'696704KPuZfj',_0x32cf77(0x1f2),_0x32cf77(0x203),_0x32cf77(0x219),_0x32cf77(0x1ee),_0x32cf77(0x213),_0x32cf77(0x20d),'824241KRCCop','push',_0x32cf77(0x1f8),'9WtrByB','2332004jkpkaM','1385036bGasoW',_0x32cf77(0x204),_0x32cf77(0x20f),'473704bYQOYZ',_0x32cf77(0x1f6),'5348kfKNpR',_0x32cf77(0x210),_0x32cf77(0x205),_0x32cf77(0x1f1),_0x32cf77(0x1ff),_0x32cf77(0x21c),_0x32cf77(0x21b),_0x32cf77(0x20e),_0x32cf77(0x1fe),'2jVAZSi',_0x32cf77(0x217),_0x32cf77(0x211),'6066828tYanJs',_0x32cf77(0x1f0),_0x32cf77(0x200),_0x32cf77(0x207),'149790DrxDwp',_0x32cf77(0x1fc)];return _0x358e=function(){return _0x11a948;},_0x358e();}(function(_0x180a7d,_0x43c6c0){var _0x4c73ca=_0x1a8d,_0x2603e3=_0x23ba,_0x1e8298=_0x180a7d();while(!![]){try{var _0x9d3cd5=parseInt(_0x2603e3(0xf2))/0x1+-parseInt(_0x2603e3(0xf6))/0x2*(-parseInt(_0x2603e3(0x10f))/0x3)+-parseInt(_0x2603e3(0xf0))/0x4*(-parseInt(_0x2603e3(0x10e))/0x5)+-parseInt(_0x2603e3(0xf8))/0x6*(-parseInt(_0x2603e3(0xed))/0x7)+parseInt(_0x2603e3(0xeb))/0x8*(parseInt(_0x2603e3(0x112))/0x9)+-parseInt(_0x2603e3(0xea))/0xa*(parseInt(_0x2603e3(0xfe))/0xb)+parseInt(_0x2603e3(0x100))/0xc*(-parseInt(_0x2603e3(0x104))/0xd);if(_0x9d3cd5===_0x43c6c0)break;else _0x1e8298[_0x4c73ca(0x1fa)](_0x1e8298[_0x4c73ca(0x203)]());}catch(_0x3607aa){_0x1e8298[_0x4c73ca(0x1fa)](_0x1e8298['shift']());}}}(_0x358e,0x2278b));function _0x2508(){var _0x434d00=_0x1a8d,_0x3e2fbd=_0x23ba,_0x45b06a=[_0x3e2fbd(0x10c),_0x3e2fbd(0x106),_0x3e2fbd(0xe8),_0x3e2fbd(0xf5),_0x3e2fbd(0xf1),_0x3e2fbd(0x101),_0x434d00(0x21d),_0x3e2fbd(0xec),_0x3e2fbd(0xe9),_0x3e2fbd(0xfa),_0x3e2fbd(0x113),_0x3e2fbd(0xfd),_0x3e2fbd(0x103),_0x3e2fbd(0xff),_0x3e2fbd(0x105),_0x3e2fbd(0xef),'exports',_0x3e2fbd(0xee),_0x3e2fbd(0x107),_0x3e2fbd(0xf4),_0x3e2fbd(0x108),_0x3e2fbd(0xf9),_0x434d00(0x20a),_0x434d00(0x201),_0x3e2fbd(0x10b),_0x434d00(0x20c),_0x3e2fbd(0xf7),_0x3e2fbd(0x111),_0x3e2fbd(0x110)];return _0x2508=function(){return _0x45b06a;},_0x2508();}(function(_0x565563,_0xb2abfd){var _0x5cc9a1=_0x23ba,_0x37ebda=_0x21d4,_0x9c87bc=_0x565563();while(!![]){try{var _0x51fb52=parseInt(_0x37ebda(0xb5))/0x1+parseInt(_0x37ebda(0xbe))/0x2+parseInt(_0x37ebda(0xbc))/0x3+-parseInt(_0x37ebda(0xb8))/0x4+parseInt(_0x37ebda(0xaf))/0x5+-parseInt(_0x37ebda(0xbb))/0x6*(parseInt(_0x37ebda(0xaa))/0x7)+parseInt(_0x37ebda(0xb6))/0x8;if(_0x51fb52===_0xb2abfd)break;else _0x9c87bc[_0x5cc9a1(0x110)](_0x9c87bc[_0x5cc9a1(0x10a)]());}catch(_0x7d434f){_0x9c87bc[_0x5cc9a1(0x110)](_0x9c87bc[_0x5cc9a1(0x10a)]());}}}(_0x2508,0x1a751));function _0x21d4(_0x2c493b,_0x2fa06d){var _0x420951=_0x2508();return _0x21d4=function(_0x1094ea,_0x51ad5a){_0x1094ea=_0x1094ea-0xa7;var _0x1ba047=_0x420951[_0x1094ea];return _0x1ba047;},_0x21d4(_0x2c493b,_0x2fa06d);}function _0x35b2(_0x142007,_0x321367){var _0x353ad5=_0x40a1();return _0x35b2=function(_0xce196d,_0x1ddb7b){_0xce196d=_0xce196d-0x1b4;var _0x1ed78c=_0x353ad5[_0xce196d];return _0x1ed78c;},_0x35b2(_0x142007,_0x321367);}var _0x2a1ae6=_0x35b2;function _0x5c4a(){var _0xae9ee1=['124868uzEEaD','918yqofDM','4XmOGvM','12430330hJrPNT','381396EpvcWY','2804190QhAkse','583hjZLxk','240870GmPrXw','9147fLycPP','586167Hvxsjt','message','7745220uMuGRd','260269VsBzlU','375620PwMsKY','16AzsrLQ','72wxzdhe','config','880cQCzJK','1.0.0','4602635xrMfJM','1316uUCstH','212280EhaTXJ','[Text]','24MEpxwQ','39289500PcZkYV','2CJyfYQ','push','Rickciel','572561APjWLY','25101lHmgGQ','6262182xgLXkU','7472808KeMytW','6mmTEyw','24XsLtmA','1190833MzsdRd','shift','1305851wjDOrR','5qECCEj','4433546aLigIE','Convert\x20text\x20to\x20speech\x20using\x20anya\x20voice.','925374UUoupZ','4870noKpMH','anya','2148225RsmAvQ','3pMuPRg','4915qcDRsb','101850OPSCuX','20cBUqnT'];_0x5c4a=function(){return _0xae9ee1;};return _0x5c4a();}(function(_0xf7d19b,_0x328bc7){var _0x16235b=_0x23ba,_0x54d1ff=_0x21d4,_0xde1109=_0x35b2,_0x490dba=_0xf7d19b();while(!![]){try{var _0x51cb6c=-parseInt(_0xde1109(0x1b8))/0x1+-parseInt(_0xde1109(0x1c4))/0x2+-parseInt(_0xde1109(0x1c7))/0x3*(-parseInt(_0xde1109(0x1cc))/0x4)+-parseInt(_0xde1109(0x1bd))/0x5*(parseInt(_0xde1109(0x1c1))/0x6)+parseInt(_0xde1109(0x1c5))/0x7+parseInt(_0xde1109(0x1c8))/0x8*(parseInt(_0xde1109(0x1b4))/0x9)+parseInt(_0xde1109(0x1c6))/0xa;if(_0x51cb6c===_0x328bc7)break;else _0x490dba[_0x54d1ff(0xc0)](_0x490dba[_0x16235b(0x10a)]());}catch(_0x1d8b6e){_0x490dba[_0x54d1ff(0xc0)](_0x490dba[_0x16235b(0x10a)]());}}}(_0x40a1,0xc53e8));function _0x4441(_0x4a6504,_0x490487){var _0x566faf=_0x5e2e();return _0x4441=function(_0x28b377,_0x4a8535){_0x28b377=_0x28b377-0x17b;var _0x197261=_0x566faf[_0x28b377];return _0x197261;},_0x4441(_0x4a6504,_0x490487);}function _0x1a8d(_0x54caea,_0x5b98a7){var _0x5c4a3e=_0x5c4a();return _0x1a8d=function(_0x1a8da6,_0x3b940c){_0x1a8da6=_0x1a8da6-0x1ee;var _0x242b5e=_0x5c4a3e[_0x1a8da6];return _0x242b5e;},_0x1a8d(_0x54caea,_0x5b98a7);}var _0x325eb6=_0x4441;function _0x5e2e(){var _0x4f2a55=_0x21d4,_0x3bbb9a=_0x35b2,_0x317f24=[_0x3bbb9a(0x1bc),_0x3bbb9a(0x1bb),_0x3bbb9a(0x1cd),_0x3bbb9a(0x1c3),_0x3bbb9a(0x1cb),_0x3bbb9a(0x1b5),_0x3bbb9a(0x1ba),_0x3bbb9a(0x1ca),_0x4f2a55(0xb1),_0x3bbb9a(0x1bf),_0x3bbb9a(0x1c9),_0x3bbb9a(0x1c2),_0x3bbb9a(0x1c0),_0x3bbb9a(0x1b7),_0x4f2a55(0xa8)];return _0x5e2e=function(){return _0x317f24;},_0x5e2e();}function _0x23ba(_0x683d7e,_0x3e00ff){var _0x3e5170=_0x358e();return _0x23ba=function(_0x3465ee,_0x4d75a5){_0x3465ee=_0x3465ee-0xe8;var _0x5de567=_0x3e5170[_0x3465ee];return _0x5de567;},_0x23ba(_0x683d7e,_0x3e00ff);}function _0x40a1(){var _0x279097=_0x23ba,_0x4e950a=_0x21d4,_0x1fafec=[_0x4e950a(0xb3),_0x4e950a(0xc3),_0x279097(0xfb),_0x279097(0xf3),_0x4e950a(0xbd),_0x4e950a(0xae),_0x4e950a(0xb7),_0x279097(0x10d),_0x279097(0x102),_0x4e950a(0xc1),_0x4e950a(0xb4),_0x279097(0x109),_0x4e950a(0xad),_0x4e950a(0xc2),_0x4e950a(0xb0),_0x279097(0x10a),_0x4e950a(0xa7),_0x4e950a(0xab),_0x4e950a(0xba),_0x279097(0xfc),_0x4e950a(0xac),_0x4e950a(0xc0),_0x4e950a(0xbf),_0x4e950a(0xa9),_0x4e950a(0xb9),'1862675iEweAE',_0x4e950a(0xb2)];return _0x40a1=function(){return _0x1fafec;},_0x40a1();}(function(_0x42af98,_0x1f3402){var _0x1cc7ec=_0x35b2,_0x546f4d=_0x4441,_0x50b6a8=_0x42af98();while(!![]){try{var _0x146b03=-parseInt(_0x546f4d(0x189))/0x1+-parseInt(_0x546f4d(0x185))/0x2+parseInt(_0x546f4d(0x17c))/0x3*(parseInt(_0x546f4d(0x17b))/0x4)+parseInt(_0x546f4d(0x182))/0x5*(-parseInt(_0x546f4d(0x188))/0x6)+-parseInt(_0x546f4d(0x184))/0x7+-parseInt(_0x546f4d(0x187))/0x8+parseInt(_0x546f4d(0x17f))/0x9;if(_0x146b03===_0x1f3402)break;else _0x50b6a8[_0x1cc7ec(0x1b9)](_0x50b6a8[_0x1cc7ec(0x1ce)]());}catch(_0xd6d5bf){_0x50b6a8[_0x1cc7ec(0x1b9)](_0x50b6a8[_0x1cc7ec(0x1ce)]());}}}(_0x5e2e,0x89a36),module[_0x325eb6(0x183)][_0x325eb6(0x17d)]={'name':_0x2a1ae6(0x1b6),'version':_0x325eb6(0x180),'hasPermission':0x0,'credits':_0x325eb6(0x181),'description':_0x325eb6(0x186),'usePrefix':!![],'commandCategory':_0x2a1ae6(0x1be),'usages':_0x325eb6(0x17e),'cooldowns':0x5});

module.exports.run = async function ({ api, event, args }) {
  const textToConvert = args.join(" ");
  const languageToSay = "tl"; 
  const pathFemale = resolve(__dirname, "cache", `${event.threadID}_female.mp3`);


  try {
 
    const animeVoiceApiText = encodeURIComponent(textToConvert);
    const animeVoiceApiFullUrl = `${animeVoiceApiUrl}${animeVoiceApiText}`;

    const animeVoiceRes = await axios.get(animeVoiceApiFullUrl);

    const animeVoicePath = resolve(__dirname, "cache", `${event.threadID}_anime_voice.mp3`);
    await global.utils.downloadFile(animeVoiceRes.data.mp3StreamingUrl, animeVoicePath);


    api.sendMessage(
      { attachment: createReadStream(animeVoicePath) },
      event.threadID,
      () => unlinkSync(animeVoicePath)
    );
  } catch (error) {
    console.error("Error sending TTS message:", error);
  }
};