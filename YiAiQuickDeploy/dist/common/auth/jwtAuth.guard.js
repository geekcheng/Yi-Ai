'use strict';const _0x1494be=_0x4724;(function(_0xf82658,_0xfbb10f){const _0x6657b8=_0x4724,_0x5d3f27=_0xf82658();while(!![]){try{const _0x1ebe23=parseInt(_0x6657b8(0x1ea))/0x1+parseInt(_0x6657b8(0x1e1))/0x2+parseInt(_0x6657b8(0x1c7))/0x3+-parseInt(_0x6657b8(0x1ec))/0x4*(-parseInt(_0x6657b8(0x1fd))/0x5)+parseInt(_0x6657b8(0x1f1))/0x6*(parseInt(_0x6657b8(0x1dd))/0x7)+parseInt(_0x6657b8(0x1f2))/0x8*(-parseInt(_0x6657b8(0x1f6))/0x9)+parseInt(_0x6657b8(0x1c6))/0xa*(-parseInt(_0x6657b8(0x1d6))/0xb);if(_0x1ebe23===_0xfbb10f)break;else _0x5d3f27['push'](_0x5d3f27['shift']());}catch(_0x3ddfd8){_0x5d3f27['push'](_0x5d3f27['shift']());}}}(_0x3001,0x2058b));var __decorate=this&&this[_0x1494be(0x1eb)]||function(_0xafd758,_0x4dc6cb,_0x5946a8,_0x17bd62){const _0x3de253=_0x1494be;var _0x3fab5b=arguments['length'],_0xea7e6f=_0x3fab5b<0x3?_0x4dc6cb:_0x17bd62===null?_0x17bd62=Object['getOwnPropertyDescriptor'](_0x4dc6cb,_0x5946a8):_0x17bd62,_0x36555b;if(typeof Reflect===_0x3de253(0x1e5)&&typeof Reflect[_0x3de253(0x1d5)]===_0x3de253(0x1ee))_0xea7e6f=Reflect[_0x3de253(0x1d5)](_0xafd758,_0x4dc6cb,_0x5946a8,_0x17bd62);else{for(var _0x5db440=_0xafd758[_0x3de253(0x1e4)]-0x1;_0x5db440>=0x0;_0x5db440--)if(_0x36555b=_0xafd758[_0x5db440])_0xea7e6f=(_0x3fab5b<0x3?_0x36555b(_0xea7e6f):_0x3fab5b>0x3?_0x36555b(_0x4dc6cb,_0x5946a8,_0xea7e6f):_0x36555b(_0x4dc6cb,_0x5946a8))||_0xea7e6f;}return _0x3fab5b>0x3&&_0xea7e6f&&Object['defineProperty'](_0x4dc6cb,_0x5946a8,_0xea7e6f),_0xea7e6f;},__metadata=this&&this['__metadata']||function(_0x29b490,_0x4dfe1b){const _0x1e3e57=_0x1494be;if(typeof Reflect===_0x1e3e57(0x1e5)&&typeof Reflect[_0x1e3e57(0x1e3)]==='function')return Reflect[_0x1e3e57(0x1e3)](_0x29b490,_0x4dfe1b);};function _0x3001(){const _0x438df9=['HttpException','Injectable','3141nUlqYa','moduleRef','design:paramtypes','../../modules/globalConfig/globalConfig.service','__esModule','get','UNAUTHORIZED','22505OddXtv','redisCacheService','221870EVCmUe','322827VWVQtS','getNineAiToken','fingerprint','RedisCacheService','createTokenFromFingerprint','switchToHttp','亲爱的用户,请登录后继续操作,我们正在等您的到来！','globalConfigService','headers','JWT_SECRET','authService','defineProperty','@nestjs/core','authorization','decorate','143IuemoS','toString','JwtAuthGuard','checkTokenAuth','extractToken','canActivate','err:\x20','2261ewsLoJ','../../modules/auth/auth.service','slice','jsonwebtoken','301766HhcXiD','AuthService','metadata','length','object','verify','user','env','getRequest','116701RTkgIy','__decorate','84rcbMkq','handleRequest','function','AuthGuard','validateToken','1434oNxyyL','2888FpFvVF','jwt'];_0x3001=function(){return _0x438df9;};return _0x3001();}function _0x4724(_0x880290,_0x5b9f97){const _0x3001b5=_0x3001();return _0x4724=function(_0x47247a,_0x667325){_0x47247a=_0x47247a-0x1c6;let _0x10ca1c=_0x3001b5[_0x47247a];return _0x10ca1c;},_0x4724(_0x880290,_0x5b9f97);}Object[_0x1494be(0x1d2)](exports,_0x1494be(0x1fa),{'value':!![]}),exports[_0x1494be(0x1d8)]=void 0x0;const redisCache_service_1=require('../../modules/redisCache/redisCache.service'),common_1=require('@nestjs/common'),passport_1=require('@nestjs/passport'),jwt=require(_0x1494be(0x1e0)),core_1=require(_0x1494be(0x1d3)),globalConfig_service_1=require(_0x1494be(0x1f9)),auth_service_1=require(_0x1494be(0x1de));let JwtAuthGuard=class JwtAuthGuard extends(0x0,passport_1[_0x1494be(0x1ef)])(_0x1494be(0x1f3)){constructor(_0x1d4e14,_0x439626,_0x3f82bc,_0x1a6cc9){const _0x34930e=_0x1494be;super(),this[_0x34930e(0x1fe)]=_0x1d4e14,this[_0x34930e(0x1f7)]=_0x439626,this['globalConfigService']=_0x3f82bc,this[_0x34930e(0x1d1)]=_0x1a6cc9;}async[_0x1494be(0x1db)](_0x5a768e){const _0x25e98d=_0x1494be;!this[_0x25e98d(0x1fe)]&&(this[_0x25e98d(0x1fe)]=this[_0x25e98d(0x1f7)][_0x25e98d(0x1fb)](redisCache_service_1['RedisCacheService'],{'strict':![]}));const _0x3ad87b=_0x5a768e[_0x25e98d(0x1cc)]()[_0x25e98d(0x1e9)](),_0x53607e=_0x3ad87b[_0x25e98d(0x1cf)]['x-website-domain'],_0x311fc5=this[_0x25e98d(0x1da)](_0x3ad87b);_0x3ad87b[_0x25e98d(0x1e7)]=this[_0x25e98d(0x1f0)](_0x311fc5);const _0x2408a7=this[_0x25e98d(0x1ce)][_0x25e98d(0x1c8)]();return await this[_0x25e98d(0x1fe)][_0x25e98d(0x1d9)](_0x311fc5,_0x3ad87b),!![];}[_0x1494be(0x1da)](_0x23f09b){const _0x2fe5e4=_0x1494be;if(!_0x23f09b['headers'][_0x2fe5e4(0x1d4)]){if(_0x23f09b[_0x2fe5e4(0x1cf)][_0x2fe5e4(0x1c9)]){let _0x55273f=_0x23f09b[_0x2fe5e4(0x1cf)][_0x2fe5e4(0x1c9)];_0x55273f>0x7fffffff&&(_0x55273f=_0x55273f[_0x2fe5e4(0x1d7)]()[_0x2fe5e4(0x1df)](-0x9),_0x55273f=Number(String(Number(_0x55273f))));const _0x291c03=this[_0x2fe5e4(0x1d1)][_0x2fe5e4(0x1cb)](_0x55273f);return _0x291c03;}return null;}const _0x173f70=_0x23f09b[_0x2fe5e4(0x1cf)][_0x2fe5e4(0x1d4)]['split']('\x20');if(_0x173f70[_0x2fe5e4(0x1e4)]!==0x2||_0x173f70[0x0]!=='Bearer')return null;return _0x173f70[0x1];}[_0x1494be(0x1f0)](_0x1b0e0c){const _0x112402=_0x1494be;try{return jwt[_0x112402(0x1e6)](_0x1b0e0c,process[_0x112402(0x1e8)][_0x112402(0x1d0)]);}catch(_0x229d7d){throw new common_1[(_0x112402(0x1f4))](_0x112402(0x1cd),common_1['HttpStatus'][_0x112402(0x1fc)]);}}[_0x1494be(0x1ed)](_0x1773f3,_0x145629,_0x27c758){const _0x4e477a=_0x1494be;if(_0x1773f3||!_0x145629){console['log'](_0x4e477a(0x1dc),_0x1773f3);throw _0x1773f3||new common_1['UnauthorizedException']();}return _0x145629;}};JwtAuthGuard=__decorate([(0x0,common_1[_0x1494be(0x1f5)])(),__metadata(_0x1494be(0x1f8),[redisCache_service_1[_0x1494be(0x1ca)],core_1['ModuleRef'],globalConfig_service_1['GlobalConfigService'],auth_service_1[_0x1494be(0x1e2)]])],JwtAuthGuard),exports[_0x1494be(0x1d8)]=JwtAuthGuard;