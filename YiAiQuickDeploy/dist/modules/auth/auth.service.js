'use strict';const _0x36c4b4=_0x3044;(function(_0x58f02a,_0x45bcf0){const _0x1a33a6=_0x3044,_0x47d5e3=_0x58f02a();while(!![]){try{const _0x24f2c0=parseInt(_0x1a33a6(0xe3))/0x1*(-parseInt(_0x1a33a6(0xdb))/0x2)+-parseInt(_0x1a33a6(0xc8))/0x3*(-parseInt(_0x1a33a6(0x128))/0x4)+-parseInt(_0x1a33a6(0x13d))/0x5*(parseInt(_0x1a33a6(0xb8))/0x6)+parseInt(_0x1a33a6(0x131))/0x7*(parseInt(_0x1a33a6(0x111))/0x8)+parseInt(_0x1a33a6(0x135))/0x9+parseInt(_0x1a33a6(0x138))/0xa+-parseInt(_0x1a33a6(0x116))/0xb*(-parseInt(_0x1a33a6(0x12e))/0xc);if(_0x24f2c0===_0x45bcf0)break;else _0x47d5e3['push'](_0x47d5e3['shift']());}catch(_0x2510f5){_0x47d5e3['push'](_0x47d5e3['shift']());}}}(_0x59e7,0xedeee));function _0x3044(_0x9a1882,_0x1b4af5){const _0x59e7cf=_0x59e7();return _0x3044=function(_0x304424,_0x18e1d7){_0x304424=_0x304424-0xb7;let _0x3e3c07=_0x59e7cf[_0x304424];return _0x3e3c07;},_0x3044(_0x9a1882,_0x1b4af5);}var __decorate=this&&this['__decorate']||function(_0x3b94d8,_0x40252f,_0x135a53,_0x10dbe9){const _0x577b59=_0x3044;var _0x53deb3=arguments[_0x577b59(0x100)],_0x1ef654=_0x53deb3<0x3?_0x40252f:_0x10dbe9===null?_0x10dbe9=Object[_0x577b59(0xbb)](_0x40252f,_0x135a53):_0x10dbe9,_0xb1e943;if(typeof Reflect===_0x577b59(0xec)&&typeof Reflect[_0x577b59(0x134)]===_0x577b59(0x101))_0x1ef654=Reflect[_0x577b59(0x134)](_0x3b94d8,_0x40252f,_0x135a53,_0x10dbe9);else{for(var _0x27fba2=_0x3b94d8[_0x577b59(0x100)]-0x1;_0x27fba2>=0x0;_0x27fba2--)if(_0xb1e943=_0x3b94d8[_0x27fba2])_0x1ef654=(_0x53deb3<0x3?_0xb1e943(_0x1ef654):_0x53deb3>0x3?_0xb1e943(_0x40252f,_0x135a53,_0x1ef654):_0xb1e943(_0x40252f,_0x135a53))||_0x1ef654;}return _0x53deb3>0x3&&_0x1ef654&&Object['defineProperty'](_0x40252f,_0x135a53,_0x1ef654),_0x1ef654;},__metadata=this&&this['__metadata']||function(_0x4edd2b,_0x55262a){const _0x1c7158=_0x3044;if(typeof Reflect==='object'&&typeof Reflect[_0x1c7158(0xbc)]==='function')return Reflect['metadata'](_0x4edd2b,_0x55262a);},__param=this&&this[_0x36c4b4(0xf5)]||function(_0x43b6ba,_0x4bc3f8){return function(_0x1ea9cc,_0x487464){_0x4bc3f8(_0x1ea9cc,_0x487464,_0x43b6ba);};};Object[_0x36c4b4(0xbf)](exports,_0x36c4b4(0xf7),{'value':!![]}),exports[_0x36c4b4(0xba)]=void 0x0;const globalConfig_service_1=require('../globalConfig/globalConfig.service'),verification_constant_1=require(_0x36c4b4(0x124)),verification_service_1=require(_0x36c4b4(0xf9)),common_1=require('@nestjs/common'),jwt_1=require(_0x36c4b4(0xc4)),user_service_1=require(_0x36c4b4(0xd1)),mailer_service_1=require(_0x36c4b4(0xca)),user_constant_1=require('../../common/constants/user.constant'),userBalance_service_1=require('../userBalance/userBalance.service'),config_entity_1=require(_0x36c4b4(0xbe)),typeorm_1=require('typeorm'),typeorm_2=require(_0x36c4b4(0x13e)),utils_1=require(_0x36c4b4(0xc5)),os=require('os'),redisCache_service_1=require(_0x36c4b4(0x10d)),svgCaptcha=require('svg-captcha'),bcrypt=require('bcryptjs');let AuthService=class AuthService{constructor(_0x27a959,_0x1ed372,_0x18d38f,_0x3630be,_0x1b89ef,_0x492086,_0x1c6cf5,_0x210d33){const _0xf68cfe=_0x36c4b4;this[_0xf68cfe(0xfb)]=_0x27a959,this['userService']=_0x1ed372,this[_0xf68cfe(0x118)]=_0x18d38f,this[_0xf68cfe(0xd3)]=_0x3630be,this[_0xf68cfe(0xe5)]=_0x1b89ef,this[_0xf68cfe(0xe4)]=_0x492086,this[_0xf68cfe(0x10a)]=_0x1c6cf5,this['globalConfigService']=_0x210d33;}async[_0x36c4b4(0xce)](){this['getIp']();}async['register'](_0x339da4,_0xadd121){const _0x5c3e22=_0x36c4b4;await this[_0x5c3e22(0xe5)][_0x5c3e22(0x11e)](_0x339da4);const _0x4e953c=await this[_0x5c3e22(0xd7)][_0x5c3e22(0x109)](_0x339da4,_0xadd121),{username:_0x5bbcf6,email:_0x1e013e,client:_0x102f91,id:_0x36db26}=_0x4e953c,_0xf5851f={'username':_0x5bbcf6,'email':_0x1e013e,'id':_0x36db26};return _0x102f91&&(_0xf5851f[_0x5c3e22(0xd9)]=_0x102f91),_0xf5851f;}async[_0x36c4b4(0xfe)](_0x2926f0,_0xfceaab){const _0x4f53eb=_0x36c4b4,{username:_0x3f5023,password:_0x9035d6,phone:_0x38d804,phoneCode:_0x176aef,invitedBy:_0x57e297}=_0x2926f0;await this[_0x4f53eb(0xd7)][_0x4f53eb(0x137)](_0x2926f0);const _0x265078=await this[_0x4f53eb(0x112)][_0x4f53eb(0xef)](),_0xe5b281=_0x265078+_0x4f53eb(0xcb)+_0x38d804,_0x3b1980=await this[_0x4f53eb(0x10a)][_0x4f53eb(0xdf)]({'key':_0xe5b281});if(!_0x3b1980)throw new common_1[(_0x4f53eb(0xc3))](_0x4f53eb(0xe2),common_1[_0x4f53eb(0x126)]['BAD_REQUEST']);if(_0x176aef!==_0x3b1980)throw new common_1[(_0x4f53eb(0xc3))](_0x4f53eb(0x129),common_1[_0x4f53eb(0x126)][_0x4f53eb(0x13c)]);const _0x380a75=(0x0,utils_1['createRandomUid'])()+_0x4f53eb(0x102),_0x5739b4={'username':_0x3f5023,'password':_0x9035d6,'phone':_0x38d804,'invitedBy':_0x57e297,'email':_0x380a75,'status':user_constant_1[_0x4f53eb(0x103)]['ACTIVE']},_0x5b76b1=await this['globalConfigService']['getConfigs']([_0x4f53eb(0x139)]);_0x5739b4[_0x4f53eb(0x10b)]=_0x5b76b1;const _0xe1f3e0=bcrypt[_0x4f53eb(0x119)](_0x9035d6,0xa);_0x5739b4[_0x4f53eb(0xed)]=_0xe1f3e0;const _0x4773ef=await this['userService'][_0x4f53eb(0x13b)](_0x5739b4);let _0x1e691e;_0x57e297&&(_0x1e691e=await this[_0x4f53eb(0xd7)][_0x4f53eb(0x120)](_0x57e297));await this[_0x4f53eb(0xe4)]['addBalanceToNewUser'](_0x4773ef['id'],_0x1e691e===null||_0x1e691e===void 0x0?void 0x0:_0x1e691e['id']);return;}async['login'](_0x1ad04e,_0x97d124){const _0xa884af=_0x36c4b4,_0x2841b6=await this[_0xa884af(0xd7)][_0xa884af(0xf6)](_0x1ad04e),{username:_0x443f1b,id:_0x27f397,email:_0x459161,role:_0x2ddbd8,openId:_0x2696a3,client:_0x28ea5b}=_0x2841b6,_0x121626=(0x0,utils_1[_0xa884af(0x130)])(_0x97d124);await this[_0xa884af(0xd7)][_0xa884af(0x123)](_0x27f397,_0x121626);const _0x1dcbfd=await this['jwtService'][_0xa884af(0x106)]({'username':_0x443f1b,'id':_0x27f397,'email':_0x459161,'role':_0x2ddbd8,'openId':_0x2696a3,'client':_0x28ea5b});return await this[_0xa884af(0x10a)][_0xa884af(0x12b)](_0x27f397,_0x1dcbfd),_0x1dcbfd;}async[_0x36c4b4(0x108)](_0x392f75,_0x377f6c){const _0x314221=_0x36c4b4,_0x3c9a92=await this[_0x314221(0xd7)][_0x314221(0xf6)](_0x392f75),{username:_0x492e80,id:_0x389c8a,email:_0xc4d1ce,role:_0x37aec5,openId:_0x214a8b,client:_0x22fd3e}=_0x3c9a92,_0x34e3f8=(0x0,utils_1[_0x314221(0x130)])(_0x377f6c);await this[_0x314221(0xd7)][_0x314221(0x123)](_0x389c8a,_0x34e3f8);const {phone:_0x5c381a}=_0x392f75,_0xdb1e4f=await this[_0x314221(0x118)][_0x314221(0x106)]({'username':_0x492e80,'id':_0x389c8a,'email':_0xc4d1ce,'role':_0x37aec5,'openId':_0x214a8b,'client':_0x22fd3e,'phone':_0x5c381a});return await this['redisCacheService'][_0x314221(0x12b)](_0x389c8a,_0xdb1e4f),_0xdb1e4f;}async[_0x36c4b4(0xff)](_0x636f2a,_0x45355f){const _0x442fa1=_0x36c4b4,{status:_0x5bd1cf}=_0x636f2a;if(_0x5bd1cf!==user_constant_1[_0x442fa1(0x103)][_0x442fa1(0x127)])throw new common_1[(_0x442fa1(0xc3))](user_constant_1[_0x442fa1(0xb7)][_0x5bd1cf],common_1[_0x442fa1(0x126)]['BAD_REQUEST']);const {username:_0x12c861,id:_0x235c92,email:_0x3cf468,role:_0xd9d192,openId:_0x4af918,client:_0xd48690}=_0x636f2a,_0x32165f=(0x0,utils_1[_0x442fa1(0x130)])(_0x45355f);await this[_0x442fa1(0xd7)]['savaLoginIp'](_0x235c92,_0x32165f);const _0xa4e241=await this[_0x442fa1(0x118)][_0x442fa1(0x106)]({'username':_0x12c861,'id':_0x235c92,'email':_0x3cf468,'role':_0xd9d192,'openId':_0x4af918,'client':_0xd48690});return await this[_0x442fa1(0x10a)]['saveToken'](_0x235c92,_0xa4e241),_0xa4e241;}async['getInfo'](_0x3004aa){const _0x34e3bb=_0x36c4b4,{id:_0x693ab4}=_0x3004aa[_0x34e3bb(0x10f)];return await this[_0x34e3bb(0xd7)][_0x34e3bb(0xbd)](_0x693ab4);}async[_0x36c4b4(0x12c)](_0x3bbfa9,_0x1a78ce){const _0x4e726c=_0x36c4b4,_0x3c29ef=await this[_0x4e726c(0xfb)][_0x4e726c(0xf8)]({'where':{'configKey':(0x0,typeorm_1['In'])(['registerSuccessEmailTitle',_0x4e726c(0x11a),'registerSuccessEmaileAppend',_0x4e726c(0xdc),_0x4e726c(0xf1)])}}),_0x3355b9=_0x3c29ef[_0x4e726c(0xf4)]((_0x10e6be,_0x5cce7f)=>{const _0x3fb2bd=_0x4e726c;return _0x10e6be[_0x5cce7f[_0x3fb2bd(0xcc)]]=_0x5cce7f[_0x3fb2bd(0xea)],_0x10e6be;},{});try{const _0x115285=await this['verificationService'][_0x4e726c(0x10c)](_0x3bbfa9,verification_constant_1[_0x4e726c(0xdd)]['Registration']),{type:_0x3f726e,userId:_0x6470ea}=_0x115285;if(_0x3f726e!==verification_constant_1[_0x4e726c(0xdd)][_0x4e726c(0xe0)])throw new common_1[(_0x4e726c(0xc3))](_0x4e726c(0xf3),common_1[_0x4e726c(0x126)][_0x4e726c(0x13c)]);const _0x6c8c67=await this[_0x4e726c(0xd7)][_0x4e726c(0x12f)](_0x6470ea);if(_0x6c8c67===user_constant_1[_0x4e726c(0x103)]['ACTIVE'])throw new common_1[(_0x4e726c(0xc3))](_0x4e726c(0xfa),common_1[_0x4e726c(0x126)][_0x4e726c(0x13c)]);await this['userService']['updateUserStatus'](_0x115285['userId'],user_constant_1[_0x4e726c(0x103)]['ACTIVE']);const _0x3dfb7e=await this['userService'][_0x4e726c(0x10e)](_0x115285[_0x4e726c(0x105)]),{username:_0xd2be73,email:_0x567287,id:_0x30fceb,invitedBy:_0x3310d0}=_0x3dfb7e;let _0x4bf718;_0x3310d0&&(_0x4bf718=await this[_0x4e726c(0xd7)][_0x4e726c(0x120)](_0x3310d0)),await this['userBalanceService'][_0x4e726c(0x11b)](_0x30fceb,_0x4bf718===null||_0x4bf718===void 0x0?void 0x0:_0x4bf718['id']),_0x1a78ce['redirect'](_0x4e726c(0x12d)+_0x30fceb[_0x4e726c(0xd8)]()[_0x4e726c(0x114)](0x4,'0')+_0x4e726c(0x121)+_0xd2be73+'&email='+_0x567287+_0x4e726c(0x104)+_0x3355b9[_0x4e726c(0x107)]+'&registerSuccessEmailTeamName='+_0x3355b9[_0x4e726c(0x11a)]+_0x4e726c(0x133)+_0x3355b9[_0x4e726c(0x11d)]);}catch(_0x3ec187){console[_0x4e726c(0xf2)](_0x4e726c(0x110),_0x3ec187);const _0x1bd427=_0x3ec187[_0x4e726c(0xb9)];_0x1a78ce[_0x4e726c(0xde)]('/api/auth/registerError?message='+_0x1bd427+_0x4e726c(0xd4)+_0x3355b9['registerFailEmailTitle']+_0x4e726c(0x132)+_0x3355b9[_0x4e726c(0xf1)]);}}async['updatePassword'](_0x20da59,_0x83167b){const _0x34cb96=_0x36c4b4,{id:_0x6898e8,client:_0x211572,role:_0x210d3e}=_0x20da59['user'];if(_0x211572&&Number(_0x211572)>0x0)throw new common_1['HttpException']('无权此操作、请联系管理员！',common_1[_0x34cb96(0x126)][_0x34cb96(0x13c)]);if(_0x210d3e==='admin')throw new common_1['HttpException'](_0x34cb96(0xda),common_1[_0x34cb96(0x126)][_0x34cb96(0x13c)]);const _0xf3282a=await this[_0x34cb96(0xd7)]['verifyUserPassword'](_0x6898e8,_0x83167b['oldPassword']);if(!_0xf3282a)throw new common_1[(_0x34cb96(0xc3))](_0x34cb96(0xe7),common_1[_0x34cb96(0x126)][_0x34cb96(0x13c)]);return this[_0x34cb96(0xd7)][_0x34cb96(0x125)](_0x6898e8,_0x83167b['password']),_0x34cb96(0xe8);}async[_0x36c4b4(0xd2)](_0x3c2ff4,_0x12f910){const _0x38bc5a=_0x36c4b4,{id:_0x11cf5b,client:_0x2320c9}=_0x3c2ff4[_0x38bc5a(0x10f)];if(!_0x2320c9)throw new common_1[(_0x38bc5a(0xc3))](_0x38bc5a(0xc6),common_1[_0x38bc5a(0x126)][_0x38bc5a(0x13c)]);return this['userService']['updateUserPassword'](_0x11cf5b,_0x12f910[_0x38bc5a(0xed)]),_0x38bc5a(0xe8);}[_0x36c4b4(0xd5)](){const _0x130b0a=_0x36c4b4;let _0x315505;const _0x40e8c5=os['networkInterfaces']();Object[_0x130b0a(0x113)](_0x40e8c5)[_0x130b0a(0x12a)](_0x29e69e=>{const _0x2ea765=_0x130b0a,_0x553b75=_0x40e8c5[_0x29e69e];for(let _0x598ce8=0x0;_0x598ce8<_0x553b75[_0x2ea765(0x100)];_0x598ce8++){const _0x27016a=_0x553b75[_0x598ce8];if(_0x27016a[_0x2ea765(0xfc)]==='IPv4'&&_0x27016a['address']!==_0x2ea765(0xc7)&&!_0x27016a[_0x2ea765(0x117)]){_0x315505=_0x27016a[_0x2ea765(0xe1)];break;}}}),this[_0x130b0a(0xc2)]=_0x315505;}async['captcha'](_0x59e7df){const _0x1c2c9b=_0x36c4b4,_0x4c2e0f=await this[_0x1c2c9b(0x112)][_0x1c2c9b(0xef)](),{color:color=_0x1c2c9b(0xeb)}=_0x59e7df,_0x2d2165=svgCaptcha[_0x1c2c9b(0xc0)]({'background':color,'height':0x22,'width':0x78,'noise':0x3}),_0x5cdade=_0x2d2165['text'],_0x19c3db=(0x0,utils_1[_0x1c2c9b(0xd0)])(),_0x4d23e7=_0x4c2e0f+_0x1c2c9b(0xee)+_0x19c3db;return await this[_0x1c2c9b(0x10a)][_0x1c2c9b(0x11f)]({'key':_0x4d23e7,'val':_0x2d2165[_0x1c2c9b(0xf0)]},0x5*0x3c),{'svgCode':_0x2d2165[_0x1c2c9b(0x122)],'code':_0x19c3db};}async[_0x36c4b4(0xcd)](_0x44f469){const _0x396780=_0x36c4b4;await this['verificationService']['verifyCaptcha'](_0x44f469);const {phone:_0x3e975a}=_0x44f469,_0x4a2871=await this[_0x396780(0x112)][_0x396780(0xef)](),_0x558456=_0x4a2871+_0x396780(0xcb)+_0x3e975a,_0x3ed88b=await this[_0x396780(0x10a)][_0x396780(0x13a)](_0x558456);if(_0x3ed88b&&_0x3ed88b>0x0)throw new common_1['HttpException'](_0x3ed88b+'秒内不得重复发送短信！',common_1['HttpStatus']['BAD_REQUEST']);const _0x5183e3=(0x0,utils_1[_0x396780(0xc1)])(),_0x2705d3={'phone':_0x3e975a,'code':_0x5183e3};return await this['verificationService'][_0x396780(0xcd)](_0x2705d3),await this['redisCacheService'][_0x396780(0x11f)]({'key':_0x558456,'val':_0x5183e3},0x1*0x3c),_0x396780(0xfd);}[_0x36c4b4(0xe6)](_0x1ea365){const _0x520976=_0x36c4b4,_0x23a824=this[_0x520976(0x118)][_0x520976(0x106)]({'username':'游客'+_0x1ea365,'id':_0x1ea365,'email':_0x1ea365+_0x520976(0x102),'role':_0x520976(0x11c),'openId':null,'client':null});return _0x23a824;}};AuthService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_2[_0x36c4b4(0xc9)])(config_entity_1['ConfigEntity'])),__metadata(_0x36c4b4(0xcf),[typeorm_1[_0x36c4b4(0xe9)],user_service_1[_0x36c4b4(0x115)],jwt_1[_0x36c4b4(0xd6)],mailer_service_1['MailerService'],verification_service_1['VerificationService'],userBalance_service_1['UserBalanceService'],redisCache_service_1[_0x36c4b4(0x136)],globalConfig_service_1['GlobalConfigService']])],AuthService),exports[_0x36c4b4(0xba)]=AuthService;function _0x59e7(){const _0x277b12=['function','@nine.com','UserStatusEnum','&registerSuccessEmailTitle=','userId','sign','registerSuccessEmailTitle','loginByPhone','createUserAndVerifycation','redisCacheService','avatar','verifyCode','../redisCache/redisCache.service','queryUserInfoById','user','error:\x20','1288HKRrHr','globalConfigService','keys','padStart','UserService','869YLlVym','internal','jwtService','hashSync','registerSuccessEmailTeamName','addBalanceToNewUser','visitor','registerSuccessEmaileAppend','verifyCaptcha','set','qureyUserInfoByInviteCode','&username=','data','savaLoginIp','../../common/constants/verification.constant','updateUserPassword','HttpStatus','ACTIVE','244236LKxvIL','验证码填写错误、请重新输入！','forEach','saveToken','activateAccount','/api/auth/registerSuccess?id=','34416tpYVom','getUserStatus','getClientIp','46340ZWJAMh','&registerFailEmailTeamName=','&registerSuccessEmaileAppend=','decorate','13820850PhkFLe','RedisCacheService','verifyUserRegisterByPhone','7068190HzZwhj','userDefautlAvatar','ttl','createUser','BAD_REQUEST','3967750xWPkQE','@nestjs/typeorm','UserStatusErrMsg','12KjGbWR','response','AuthService','getOwnPropertyDescriptor','metadata','getUserInfo','../globalConfig/config.entity','defineProperty','createMathExpr','createRandomCode','ipAddress','HttpException','@nestjs/jwt','../../common/utils','无权此操作！','127.0.0.1','45mofrAz','InjectRepository','../mailer/mailer.service',':PHONECODE:','configKey','sendPhoneCode','onModuleInit','design:paramtypes','createRandomUid','../user/user.service','updatePassByOther','mailerService','&registerFailEmailTitle=','getIp','JwtService','userService','toString','client','非法操作、请联系管理员！','8qxJhpj','registerFailEmailTitle','VerificationEnum','redirect','get','Registration','address','验证码已过期、请重新发送！','472268jEOMVt','userBalanceService','verificationService','createTokenFromFingerprint','旧密码错误、请检查提交','密码修改成功','Repository','configVal','#fff','object','password',':CAPTCHA:','getNamespace','text','registerFailEmailTeamName','log','验证码类型错误','reduce','__param','verifyUserCredentials','__esModule','find','../verification/verification.service','账户已被激活过','configEntity','family','验证码发送成功、请填写验证码完成注册！','registerByPhone','loginByOpenId','length'];_0x59e7=function(){return _0x277b12;};return _0x59e7();}