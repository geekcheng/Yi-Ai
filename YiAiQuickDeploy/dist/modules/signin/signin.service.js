'use strict';const _0xdd4ca5=_0x5c02;(function(_0x5ce760,_0x49440e){const _0x555013=_0x5c02,_0x348c11=_0x5ce760();while(!![]){try{const _0x43fef1=parseInt(_0x555013(0x198))/0x1*(parseInt(_0x555013(0x1cf))/0x2)+parseInt(_0x555013(0x194))/0x3*(parseInt(_0x555013(0x1ba))/0x4)+-parseInt(_0x555013(0x1de))/0x5*(-parseInt(_0x555013(0x19d))/0x6)+parseInt(_0x555013(0x1c6))/0x7+parseInt(_0x555013(0x1d9))/0x8*(-parseInt(_0x555013(0x1bc))/0x9)+-parseInt(_0x555013(0x1df))/0xa*(-parseInt(_0x555013(0x1b4))/0xb)+-parseInt(_0x555013(0x1d8))/0xc*(parseInt(_0x555013(0x1b6))/0xd);if(_0x43fef1===_0x49440e)break;else _0x348c11['push'](_0x348c11['shift']());}catch(_0x2ef4bb){_0x348c11['push'](_0x348c11['shift']());}}}(_0x5cfc,0xb933c));var __decorate=this&&this[_0xdd4ca5(0x199)]||function(_0x360e92,_0x419fb0,_0xb4e225,_0x3c2f90){const _0x37257d=_0xdd4ca5;var _0x55daf1=arguments[_0x37257d(0x1d0)],_0x208cee=_0x55daf1<0x3?_0x419fb0:_0x3c2f90===null?_0x3c2f90=Object[_0x37257d(0x19b)](_0x419fb0,_0xb4e225):_0x3c2f90,_0x8c390f;if(typeof Reflect===_0x37257d(0x1ce)&&typeof Reflect[_0x37257d(0x1d1)]===_0x37257d(0x1d4))_0x208cee=Reflect['decorate'](_0x360e92,_0x419fb0,_0xb4e225,_0x3c2f90);else{for(var _0x3c9bd2=_0x360e92[_0x37257d(0x1d0)]-0x1;_0x3c9bd2>=0x0;_0x3c9bd2--)if(_0x8c390f=_0x360e92[_0x3c9bd2])_0x208cee=(_0x55daf1<0x3?_0x8c390f(_0x208cee):_0x55daf1>0x3?_0x8c390f(_0x419fb0,_0xb4e225,_0x208cee):_0x8c390f(_0x419fb0,_0xb4e225))||_0x208cee;}return _0x55daf1>0x3&&_0x208cee&&Object[_0x37257d(0x191)](_0x419fb0,_0xb4e225,_0x208cee),_0x208cee;},__metadata=this&&this[_0xdd4ca5(0x1a7)]||function(_0x4b315a,_0x436889){const _0x56403b=_0xdd4ca5;if(typeof Reflect===_0x56403b(0x1ce)&&typeof Reflect[_0x56403b(0x1b2)]===_0x56403b(0x1d4))return Reflect[_0x56403b(0x1b2)](_0x4b315a,_0x436889);},__param=this&&this[_0xdd4ca5(0x1c4)]||function(_0x301147,_0x5b77a5){return function(_0x5a034d,_0x27918b){_0x5b77a5(_0x5a034d,_0x27918b,_0x301147);};};function _0x5c02(_0x2a98d1,_0x2cf0e2){const _0x5cfc0e=_0x5cfc();return _0x5c02=function(_0x5c0240,_0x2c8e23){_0x5c0240=_0x5c0240-0x191;let _0x5cd11a=_0x5cfc0e[_0x5c0240];return _0x5cd11a;},_0x5c02(_0x2a98d1,_0x2cf0e2);}Object['defineProperty'](exports,_0xdd4ca5(0x1dc),{'value':!![]}),exports[_0xdd4ca5(0x1a1)]=void 0x0;function _0x5cfc(){const _0x2386d2=['__decorate','save','getOwnPropertyDescriptor','./signIn.entity','126nYxKHa','findOne','globalConfigService','getSignatureGiftConfig','SigninService','getSigninLog','typeorm','../globalConfig/globalConfig.service','signInDate','select','__metadata','RechargeType','saveRecordRechargeLog','log','debug','@nestjs/typeorm','setDate','Sign\x20in\x20successful.','userBalanceService','HttpStatus','GlobalConfigService','metadata','getDate','2745413pRnBmp','endOf','13pXwDSl','getRawMany','Repository','YYYY-MM-DD\x20HH:mm:ss','3927404gRfEXk','HttpException','9uVyVQU','startOf','@nestjs/common','Logger','format','addBalanceToUser','update','userEntity','__param','signinEntity','4786978hLOBPq','BAD_REQUEST','../../common/constants/balance.constant','../../common/utils/date','signin.userId\x20=\x20:userId','InjectRepository','昨天签到了、今天是连续签到！','subtract','object','1296874TvLkxE','length','decorate','push','SigninEntity','function','signin','andWhere','user','25812276wtneBG','5911624yHoTZV','UserEntity','signin.signInTime\x20<=\x20:lastDay','__esModule','month','258295hNKHmo','10AmluIu','defineProperty','SIGN_IN','YYYY-MM-DD','3KKuNta','signin.signInTime\x20>=\x20:firstDay','用户不存在','default','1QrxHTi'];_0x5cfc=function(){return _0x2386d2;};return _0x5cfc();}const globalConfig_service_1=require(_0xdd4ca5(0x1a4)),userBalance_service_1=require('../userBalance/userBalance.service'),common_1=require(_0xdd4ca5(0x1be)),signIn_entity_1=require(_0xdd4ca5(0x19c)),typeorm_1=require(_0xdd4ca5(0x1ac)),typeorm_2=require(_0xdd4ca5(0x1a3)),date_1=require(_0xdd4ca5(0x1c9)),user_entity_1=require('../user/user.entity'),balance_constant_1=require(_0xdd4ca5(0x1c8));let SigninService=class SigninService{constructor(_0x3921de,_0x48d770,_0x54b3d7,_0x138fb9){const _0x1e42b1=_0xdd4ca5;this['signinEntity']=_0x3921de,this[_0x1e42b1(0x1c3)]=_0x48d770,this[_0x1e42b1(0x1af)]=_0x54b3d7,this['globalConfigService']=_0x138fb9;}async['sign'](_0x32db84){const _0x1ccec3=_0xdd4ca5,{id:_0x22f0b9}=_0x32db84[_0x1ccec3(0x1d7)],_0x998172=(0x0,date_1[_0x1ccec3(0x197)])(new Date())['format'](_0x1ccec3(0x193)),_0x17a35b=await this[_0x1ccec3(0x1c5)][_0x1ccec3(0x19e)]({'where':{'userId':_0x22f0b9,'signInDate':_0x998172}});if(_0x17a35b)throw new common_1[(_0x1ccec3(0x1bb))]('今日已签到、改天再来吧!.',common_1[_0x1ccec3(0x1b0)][_0x1ccec3(0x1c7)]);const {model3Count:_0x5bc976,model4Count:_0x6d33b,drawMjCount:_0x2fa628}=await this[_0x1ccec3(0x19f)][_0x1ccec3(0x1a0)]();await this[_0x1ccec3(0x1c5)][_0x1ccec3(0x19a)]({'userId':_0x22f0b9,'signInTime':new Date(),'signInDate':_0x998172,'isSigned':!![]}),await this[_0x1ccec3(0x1af)][_0x1ccec3(0x1c1)](_0x22f0b9,{'model3Count':_0x5bc976,'model4Count':_0x6d33b,'drawMjCount':_0x2fa628}),await this[_0x1ccec3(0x1af)][_0x1ccec3(0x1a9)]({'userId':_0x22f0b9,'rechargeType':balance_constant_1[_0x1ccec3(0x1a8)][_0x1ccec3(0x192)],'model3Count':_0x5bc976,'model4Count':_0x6d33b,'drawMjCount':_0x2fa628});const _0x5c6fc2=(0x0,date_1['default'])(new Date())[_0x1ccec3(0x1cd)](0x1,'day')[_0x1ccec3(0x1c0)](_0x1ccec3(0x193)),_0x46c96f=await this[_0x1ccec3(0x1c5)][_0x1ccec3(0x19e)]({'where':{'userId':_0x22f0b9,'signInDate':_0x5c6fc2}});if(_0x46c96f){common_1[_0x1ccec3(0x1bf)][_0x1ccec3(0x1ab)]('用户'+_0x22f0b9+_0x1ccec3(0x1cc),'SigninService');const _0x4ba46c=await this[_0x1ccec3(0x1c3)][_0x1ccec3(0x19e)]({'where':{'id':_0x22f0b9}});if(!_0x4ba46c)throw new common_1[(_0x1ccec3(0x1bb))](_0x1ccec3(0x196),common_1['HttpStatus']['BAD_REQUEST']);const {consecutiveDays:consecutiveDays=0x0}=_0x4ba46c;await this[_0x1ccec3(0x1c3)][_0x1ccec3(0x1c2)]({'id':_0x22f0b9},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x1ccec3(0x1bf)][_0x1ccec3(0x1ab)]('用户'+_0x22f0b9+'昨天没签到、今天重置天数！','SigninService'),await this[_0x1ccec3(0x1c3)][_0x1ccec3(0x1c2)]({'id':_0x22f0b9},{'consecutiveDays':0x1});return _0x1ccec3(0x1ae);}async[_0xdd4ca5(0x1a2)](_0xb10f07){const _0x5227be=_0xdd4ca5;try{const {id:_0x625ebf}=_0xb10f07[_0x5227be(0x1d7)],_0x3760a6=(0x0,date_1[_0x5227be(0x197)])()[_0x5227be(0x1bd)](_0x5227be(0x1dd))[_0x5227be(0x1c0)](_0x5227be(0x1b9)),_0x263624=(0x0,date_1[_0x5227be(0x197)])()[_0x5227be(0x1b5)](_0x5227be(0x1dd))['format'](_0x5227be(0x1b9)),_0x460f8d=this[_0x5227be(0x1c5)]['createQueryBuilder'](_0x5227be(0x1d5)),_0x2232dc=await _0x460f8d[_0x5227be(0x1a6)]('signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned')[_0x5227be(0x1d6)](_0x5227be(0x1ca),{'userId':_0xb10f07[_0x5227be(0x1d7)]['id']})[_0x5227be(0x1d6)](_0x5227be(0x195),{'firstDay':_0x3760a6})['andWhere'](_0x5227be(0x1db),{'lastDay':_0x263624})[_0x5227be(0x1b7)](),_0x2ed195=new Date(_0x3760a6),_0x3756ed=new Date(_0x263624),_0x7d5d0d=[],_0x7a4368=new Date(_0x2ed195);while(_0x7a4368<=_0x3756ed){_0x7d5d0d[_0x5227be(0x1d2)]((0x0,date_1[_0x5227be(0x197)])(new Date(_0x7a4368))[_0x5227be(0x1c0)](_0x5227be(0x193))),_0x7a4368[_0x5227be(0x1ad)](_0x7a4368[_0x5227be(0x1b3)]()+0x1);}const _0x2c198b=[];for(const _0x1cf553 of _0x7d5d0d){const _0x48f8fb=_0x2232dc['find'](_0x480b38=>_0x480b38[_0x5227be(0x1a5)]===_0x1cf553);!_0x48f8fb?_0x2c198b[_0x5227be(0x1d2)]({'signInDate':_0x1cf553,'isSigned':![]}):(_0x48f8fb['isSigned']=!![],_0x2c198b[_0x5227be(0x1d2)](_0x48f8fb));}return _0x2c198b;}catch(_0x43e848){console[_0x5227be(0x1aa)]('error:\x20',_0x43e848);throw new common_1[(_0x5227be(0x1bb))]('获取签到数据失败！',common_1[_0x5227be(0x1b0)][_0x5227be(0x1c7)]);}}};SigninService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(signIn_entity_1[_0xdd4ca5(0x1d3)])),__param(0x1,(0x0,typeorm_1[_0xdd4ca5(0x1cb)])(user_entity_1[_0xdd4ca5(0x1da)])),__metadata('design:paramtypes',[typeorm_2[_0xdd4ca5(0x1b8)],typeorm_2['Repository'],userBalance_service_1['UserBalanceService'],globalConfig_service_1[_0xdd4ca5(0x1b1)]])],SigninService),exports[_0xdd4ca5(0x1a1)]=SigninService;