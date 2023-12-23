(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8_atlas_1", frames: [[0,0,840,780],[842,0,281,302]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Безымянный2 = function() {
	this.initialize(img.Безымянный2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8000,4500);


(lib.Illustration = function() {
	this.initialize(ss["8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Illustration2 = function() {
	this.initialize(ss["8_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Illustration2();
	this.instance.setTransform(-140.5,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-151,281,302);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Illustration();
	this.instance.setTransform(-111.05,-103.1,0.2644,0.2644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-103.1,222.1,206.3);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-0.15,-0.1,1.9825,2.636,29.9989,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-440.2,-483.9,880.5,968), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(111.05,103.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},13).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.1,206.3);


// stage content:
(lib._8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,51];
	this.streamSoundSymbolsList[0] = [{id:"SS",startFrame:0,endFrame:121,loop:1,offset:0}];
	this.streamSoundSymbolsList[51] = [{id:"SS2",startFrame:51,endFrame:121,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("SS",0);
		this.InsertIntoSoundStreamData(soundInstance,0,121,1);
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://phasmophobia.su/knowledge-base/ghosts", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://translated.turbopages.org/proxy_u/en-ru.ru.60575a4f-65399ef4-cee283e9-74722d776562/https/en.wikipedia.org/wiki/Ghost", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://translated.turbopages.org/proxy_u/en-ru.ru.60575a4f-65399ef4-cee283e9-74722d776562/https/en.wikipedia.org/wiki/Ghost", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_4.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://translated.turbopages.org/proxy_u/en-ru.ru.60575a4f-65399ef4-cee283e9-74722d776562/https/en.wikipedia.org/wiki/Ghost", "_blank");
		}
		
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_5.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("https://translated.turbopages.org/proxy_u/en-ru.ru.60575a4f-65399ef4-cee283e9-74722d776562/https/en.wikipedia.org/wiki/Ghost", "_blank");
		}
		
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_6.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("https://translated.turbopages.org/proxy_u/en-ru.ru.60575a4f-65399ef4-cee283e9-74722d776562/https/en.wikipedia.org/wiki/Ghost", "_blank");
		}
	}
	this.frame_51 = function() {
		var soundInstance = playSound("SS2",0);
		this.InsertIntoSoundStreamData(soundInstance,51,121,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(70));

	// Слой_7
	this.movieClip_1 = new lib.Символ3();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(33,1615.35);
	this.movieClip_1._off = true;

	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(2183.25,-542.75,1.9825,2.636,29.9989,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_1}]},51).to({state:[{t:this.instance}]},48).to({state:[]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(51).to({_off:false},0).to({_off:true,regX:-0.1,scaleX:1.9825,scaleY:2.636,rotation:29.9989,x:2183.25,y:-542.75,mode:"synched",startPosition:0},48).wait(22));

	// пр5
	this.movieClip_5 = new lib.Символ1();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.setTransform(1529.8,710.85,0.3414,0.4177,-29.997,0,0,109.5,101.7);
	this.movieClip_5.alpha = 0;
	this.movieClip_5.compositeOperation = "screen";
	this.movieClip_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(60).to({_off:false},0).wait(1).to({regX:111,regY:103.1,rotation:-26.9981,x:1519.05,y:687.6,alpha:0.1},0).wait(1).to({rotation:-23.9983,x:1507.6,y:664.2,alpha:0.2},0).wait(1).to({rotation:-20.9985,x:1496.25,y:640.7,alpha:0.3},0).wait(1).to({rotation:-17.9987,x:1484.8,y:617.25,alpha:0.4},0).wait(1).to({rotation:-14.9989,x:1473.35,y:593.8,alpha:0.5},0).wait(1).to({rotation:-11.9992,x:1461.9,y:570.3,alpha:0.6},0).wait(1).to({rotation:-8.9994,x:1450.55,y:546.9,alpha:0.7},0).wait(1).to({rotation:-5.9996,x:1439.1,y:523.45,alpha:0.8},0).wait(1).to({rotation:-2.9998,x:1427.65,y:499.95,alpha:0.9},0).wait(1).to({rotation:0,x:1416.2,y:476.5,alpha:1},0).wait(1).to({rotation:14.9996,x:1427.95,y:460.8,alpha:0.9713},0).wait(1).to({rotation:29.9992,x:1439.7,y:445.05,alpha:0.9427},0).wait(1).to({rotation:26.2493,x:1451.75,y:429.15,alpha:0.914},0).wait(1).to({rotation:22.4994,x:1463.7,y:413.35,alpha:0.8853},0).wait(1).to({rotation:18.7495,x:1475.75,y:397.5,alpha:0.8567},0).wait(1).to({rotation:14.9996,x:1487.7,y:381.6,alpha:0.828},0).wait(1).to({rotation:11.2497,x:1499.7,y:365.75,alpha:0.7993},0).wait(1).to({rotation:7.4998,x:1511.7,y:349.85,alpha:0.7707},0).wait(1).to({rotation:3.7499,x:1523.7,y:334,alpha:0.742},0).wait(1).to({rotation:0,x:1535.7,y:318.1,alpha:0.7133},0).wait(1).to({rotation:-15,x:1521.6,y:302.25,alpha:0.6847},0).wait(1).to({rotation:-30,x:1507.5,y:286.4,alpha:0.656},0).wait(1).to({rotation:-45,x:1493.3,y:270.45,alpha:0.6273},0).wait(1).to({rotation:-49.2856,x:1479.05,y:254.7,alpha:0.5987},0).wait(1).to({rotation:-53.5713,x:1464.85,y:238.9,alpha:0.57},0).wait(1).to({rotation:-57.8569,x:1440.5,y:223.1},0).wait(1).to({rotation:-62.1426,x:1416.2,y:207.3},0).wait(1).to({rotation:-66.4282,x:1391.9,y:191.45},0).wait(1).to({rotation:-70.7139,x:1367.6,y:175.65},0).wait(1).to({rotation:-74.9995,x:1343.25,y:159.85},0).wait(1).to({rotation:-71.6664,x:1334.8,y:159.45},0).wait(1).to({rotation:-68.3333,x:1326.3,y:159.1},0).wait(1).to({rotation:-65.0003,x:1317.85,y:158.7},0).wait(1).to({rotation:-61.6672,x:1309.35,y:158.3},0).wait(1).to({rotation:-58.3341,x:1300.9,y:157.9},0).wait(1).to({rotation:-55.001,x:1292.35,y:157.55},0).wait(1).to({rotation:-51.668,x:1283.9,y:157.15},0).wait(1).to({rotation:-48.3349,x:1275.4,y:156.85},0).wait(1).to({rotation:-45.0018,x:1266.9,y:156.4},0).wait(1).to({rotation:-35.0022,x:1258.4,y:156.1},0).wait(1).to({rotation:-25.0026,x:1249.85,y:155.9},0).wait(1).to({rotation:-15.003,x:1242.55,y:133.9},0).wait(1).to({x:1235.3,y:111.8},0).wait(1).to({x:1228.05,y:89.75},0).wait(1).to({x:1220.8,y:67.65},0).wait(1).to({x:1213.55,y:45.6},0).wait(1).to({x:1206.3,y:23.55},0).wait(1).to({x:1199.05,y:1.5},0).wait(1).to({x:1191.85,y:-20.6},0).wait(1).to({x:1184.6,y:-42.7},0).wait(1).to({x:1082.6,y:-114.55},0).wait(1).to({x:980.55,y:-186.45},0).wait(1).to({x:878.55,y:-258.35},0).wait(1).to({x:776.55,y:-330.2},0).wait(1).to({x:674.55,y:-402.1},0).wait(1).to({x:572.55,y:-474},0).wait(1).to({x:470.55,y:-545.85},0).wait(1).to({x:368.55,y:-617.75},0).wait(1).to({x:266.55,y:-689.65},0).wait(1).to({x:164.55,y:-761.55},0).wait(1));

	// пр4
	this.movieClip_6 = new lib.Символ1();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(497.2,776.95,0.3414,0.7967,0,0,0,111.9,77.2);
	this.movieClip_6.alpha = 0;
	this.movieClip_6.compositeOperation = "screen";
	this.movieClip_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(48).to({_off:false},0).wait(1).to({regX:111,regY:103.1,rotation:14.9981,x:496.3,y:781.25,alpha:0.0526},0).wait(1).to({rotation:13.9044,x:501.45,y:765.85,alpha:0.1053},0).wait(1).to({rotation:12.8106,x:506.6,y:750.45,alpha:0.1579},0).wait(1).to({rotation:11.7169,x:511.7,y:735.05,alpha:0.2105},0).wait(1).to({rotation:10.6231,x:516.9,y:719.6,alpha:0.2632},0).wait(1).to({rotation:9.5294,x:522.05,y:704.1,alpha:0.3158},0).wait(1).to({rotation:8.4357,x:527.2,y:688.65,alpha:0.3684},0).wait(1).to({rotation:7.3419,x:532.35,y:673.2,alpha:0.4211},0).wait(1).to({rotation:6.2482,x:537.45,y:657.75,alpha:0.4737},0).wait(1).to({rotation:5.1544,x:542.65,y:642.3,alpha:0.5263},0).wait(1).to({rotation:4.0607,x:547.8,y:626.85,alpha:0.5789},0).wait(1).to({rotation:2.967,x:552.95,y:611.35,alpha:0.6316},0).wait(1).to({rotation:1.8732,x:558.15,y:595.85,alpha:0.6842},0).wait(1).to({rotation:0.7795,x:563.3,y:580.35,alpha:0.7368},0).wait(1).to({rotation:-0.3143,x:568.45,y:564.85,alpha:0.7895},0).wait(1).to({rotation:-1.408,x:573.6,y:549.3,alpha:0.8421},0).wait(1).to({rotation:-2.5017,x:578.75,y:533.8,alpha:0.8947},0).wait(1).to({rotation:-3.5955,x:583.9,y:518.25,alpha:0.9474},0).wait(1).to({rotation:-11.0269,x:591.3,y:502.4,alpha:1},0).wait(1).to({rotation:-18.4583,x:588.15,y:490.55,alpha:0.9857},0).wait(1).to({rotation:-25.6019,x:584.8,y:478.4,alpha:0.9713},0).wait(1).to({rotation:-32.7456,x:581.35,y:465.95,alpha:0.957},0).wait(1).to({rotation:-30.0907,x:574.75,y:455.15,alpha:0.9427},0).wait(1).to({rotation:-27.4357,x:568.1,y:444.4,alpha:0.9283},0).wait(1).to({rotation:-24.7808,x:561.45,y:433.6,alpha:0.914},0).wait(1).to({rotation:-22.1258,x:554.8,y:422.75,alpha:0.8997},0).wait(1).to({rotation:-19.4709,x:548.2,y:411.8,alpha:0.8853},0).wait(1).to({rotation:-16.816,x:541.5,y:400.85,alpha:0.871},0).wait(1).to({rotation:-14.161,x:534.8,y:389.85,alpha:0.8567},0).wait(1).to({rotation:-11.5061,x:528.1,y:378.8,alpha:0.8423},0).wait(1).to({rotation:-8.8511,x:521.4,y:367.7,alpha:0.828},0).wait(1).to({rotation:-6.1962,x:514.65,y:356.55,alpha:0.8137},0).wait(1).to({rotation:-3.5412,x:507.95,y:345.45,alpha:0.7993},0).wait(1).to({rotation:-0.8863,x:501.2,y:334.2,alpha:0.785},0).wait(1).to({rotation:1.7686,x:494.5,y:322.9,alpha:0.7707},0).wait(1).to({rotation:4.4236,x:487.8,y:311.6,alpha:0.7563},0).wait(1).to({rotation:7.0785,x:481.1,y:300.25,alpha:0.742},0).wait(1).to({rotation:11.8745,x:473.6,y:288.75,alpha:0.7277},0).wait(1).to({rotation:16.6704,x:466.2,y:277.05,alpha:0.7133},0).wait(1).to({rotation:21.4664,x:484.2,y:254.5,alpha:0.699},0).wait(1).to({rotation:24.5451,x:502.8,y:232.1,alpha:0.6847},0).wait(1).to({rotation:27.6237,x:521.5,y:209.65,alpha:0.6703},0).wait(1).to({rotation:30.7024,x:540.15,y:187.15,alpha:0.656},0).wait(1).to({rotation:33.781,x:558.9,y:164.5,alpha:0.6417},0).wait(1).to({rotation:32.5745,x:578.9,y:142.8,alpha:0.6273},0).wait(1).to({rotation:31.3681,x:598.9,y:121.15,alpha:0.613},0).wait(1).to({rotation:30.1616,x:618.9,y:99.35,alpha:0.5987},0).wait(1).to({rotation:28.9551,x:638.9,y:77.65,alpha:0.5843},0).wait(1).to({rotation:27.7487,x:658.95,y:55.95,alpha:0.57},0).wait(1).to({rotation:26.5422,x:674.3,y:38.7},0).wait(1).to({rotation:25.3358,x:689.65,y:21.35},0).wait(1).to({rotation:24.1293,x:705,y:4.05},0).wait(1).to({rotation:22.9228,x:720.4,y:-13.25},0).wait(1).to({rotation:21.7164,x:735.75,y:-30.6},0).wait(1).to({rotation:20.5099,x:751.15,y:-47.85},0).wait(1).to({rotation:19.3034,x:766.5,y:-65.25},0).wait(1).to({rotation:18.097,x:781.9,y:-82.6},0).wait(1).to({rotation:16.8905,x:797.3,y:-99.95},0).wait(1).to({rotation:15.684,x:812.7,y:-117.25},0).wait(1).to({rotation:14.4776,x:828.05,y:-134.65},0).wait(1).to({rotation:13.2711,x:827.65,y:-129.75},0).wait(1).to({rotation:12.0646,x:827.2,y:-124.85},0).wait(1).to({rotation:10.8582,x:826.75,y:-120},0).wait(1).to({rotation:9.6517,x:826.35,y:-115.05},0).wait(1).to({rotation:8.4453,x:825.9,y:-110.25},0).wait(1).to({rotation:7.2388,x:825.45,y:-105.35},0).wait(1).to({rotation:6.0323,x:825,y:-100.45},0).wait(1).to({rotation:4.8259,x:824.6,y:-95.65},0).wait(1).to({rotation:3.6194,x:824.15,y:-90.8},0).wait(1).to({rotation:2.4129,x:823.75,y:-86},0).wait(1).to({rotation:1.2065,x:823.3,y:-81.2},0).wait(1).to({rotation:0,x:822.9,y:-76.35},0).wait(1));

	// пр3
	this.movieClip_3 = new lib.Символ1();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(815.55,700.15,0.3414,0.4177,0,0,0,111.9,77.4);
	this.movieClip_3.alpha = 0;
	this.movieClip_3.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1).to({regX:111,regY:103.1,x:815.45,y:704.05,alpha:0.0526},0).wait(1).to({x:815.7,y:697.3,alpha:0.1053},0).wait(1).to({x:815.95,y:690.55,alpha:0.1579},0).wait(1).to({x:816.2,y:683.8,alpha:0.2105},0).wait(1).to({x:816.45,y:677.05,alpha:0.2632},0).wait(1).to({x:816.7,y:670.3,alpha:0.3158},0).wait(1).to({x:816.95,y:663.55,alpha:0.3684},0).wait(1).to({x:817.2,y:656.8,alpha:0.4211},0).wait(1).to({x:817.45,y:650.05,alpha:0.4737},0).wait(1).to({x:817.65,y:643.3,alpha:0.5263},0).wait(1).to({x:817.9,y:636.55,alpha:0.5789},0).wait(1).to({x:818.15,y:629.8,alpha:0.6316},0).wait(1).to({x:818.4,y:623.05,alpha:0.6842},0).wait(1).to({x:818.65,y:616.3,alpha:0.7368},0).wait(1).to({x:818.9,y:609.55,alpha:0.7895},0).wait(1).to({x:819.15,y:602.8,alpha:0.8421},0).wait(1).to({x:819.4,y:596.05,alpha:0.8947},0).wait(1).to({x:819.65,y:589.3,alpha:0.9474},0).wait(1).to({x:819.85,y:582.55,alpha:1},0).wait(1).to({x:820.05,y:573.25,alpha:0.9857},0).wait(1).to({x:820.25,y:563.95,alpha:0.9713},0).wait(1).to({x:820.4,y:554.65,alpha:0.957},0).wait(1).to({x:820.6,y:545.3,alpha:0.9427},0).wait(1).to({x:820.8,y:536,alpha:0.9283},0).wait(1).to({x:820.95,y:526.7,alpha:0.914},0).wait(1).to({x:821.15,y:517.35,alpha:0.8997},0).wait(1).to({x:821.35,y:508.05,alpha:0.8853},0).wait(1).to({x:821.5,y:498.75,alpha:0.871},0).wait(1).to({x:821.7,y:489.4,alpha:0.8567},0).wait(1).to({x:821.9,y:480.1,alpha:0.8423},0).wait(1).to({x:822.05,y:470.8,alpha:0.828},0).wait(1).to({x:822.25,y:461.5,alpha:0.8137},0).wait(1).to({x:822.45,y:452.15,alpha:0.7993},0).wait(1).to({x:822.6,y:442.85,alpha:0.785},0).wait(1).to({x:822.8,y:433.55,alpha:0.7707},0).wait(1).to({x:823,y:424.2,alpha:0.7563},0).wait(1).to({x:823.15,y:414.9,alpha:0.742},0).wait(1).to({x:823.35,y:405.6,alpha:0.7277},0).wait(1).to({x:823.5,y:396.25,alpha:0.7133},0).wait(1).to({x:823.6,y:387.35,alpha:0.699},0).wait(1).to({x:823.65,y:378.45,alpha:0.6847},0).wait(1).to({x:823.7,y:369.5,alpha:0.6703},0).wait(1).to({x:823.8,y:360.6,alpha:0.656},0).wait(1).to({x:823.85,y:351.65,alpha:0.6417},0).wait(1).to({x:823.9,y:342.75,alpha:0.6273},0).wait(1).to({x:823.95,y:333.85,alpha:0.613},0).wait(1).to({x:824.05,y:324.9,alpha:0.5987},0).wait(1).to({x:824.1,y:316,alpha:0.5843},0).wait(1).to({x:824.15,y:307.05,alpha:0.57},0).wait(1).to({x:825,y:293.7},0).wait(1).to({x:825.8,y:280.35},0).wait(1).to({x:826.65,y:267},0).wait(1).to({x:827.45,y:253.65},0).wait(1).to({x:828.3,y:240.3},0).wait(1).to({x:829.1,y:226.95},0).wait(1).to({x:829.95,y:213.6},0).wait(1).to({x:830.75,y:200.25},0).wait(1).to({x:831.6,y:186.9},0).wait(1).to({x:832.4,y:173.55},0).wait(1).to({x:833.2,y:160.15},0).wait(1).to({x:832.35,y:150.5},0).wait(1).to({x:831.5,y:140.8},0).wait(1).to({x:830.65,y:131.15},0).wait(1).to({x:829.8,y:121.45},0).wait(1).to({x:828.9,y:111.75},0).wait(1).to({x:828.05,y:102.1},0).wait(1).to({x:827.2,y:92.4},0).wait(1).to({x:826.35,y:82.75},0).wait(1).to({x:825.45,y:73.05},0).wait(1).to({x:824.6,y:63.35},0).wait(1).to({x:823.75,y:53.7},0).wait(1).to({x:822.9,y:44},0).wait(1).to({x:822,y:34.35},0).wait(1).to({x:821.15,y:24.7},0).wait(1).to({x:820.3,y:15},0).wait(1).to({x:819.45,y:5.35},0).wait(1).to({x:818.55,y:-4.35},0).wait(1).to({x:817.7,y:-14.05},0).wait(1).to({x:816.85,y:-23.7},0).wait(1).to({x:816,y:-33.4},0).wait(1).to({x:815.1,y:-43.1},0).wait(1).to({x:792,y:-60.15},0).wait(1).to({x:768.9,y:-77.25},0).wait(1).to({x:745.8,y:-94.3},0).wait(1).to({x:722.7,y:-111.4},0).wait(1).to({x:699.6,y:-128.45},0).wait(1).to({x:676.5,y:-145.55},0).wait(1).to({x:653.4,y:-162.6},0).wait(1).to({x:630.3,y:-179.7},0).wait(1).to({x:607.2,y:-196.75},0).wait(1).to({x:584.1,y:-213.85},0).wait(1).to({x:561,y:-230.9},0).wait(1).to({x:537.9,y:-248},0).wait(1).to({x:514.8,y:-265.05},0).wait(1).to({x:491.7,y:-282.15},0).wait(1).to({x:468.6,y:-299.2},0).wait(1).to({x:445.5,y:-316.3},0).wait(1).to({x:422.4,y:-333.35},0).wait(1).to({x:399.3,y:-350.45},0).wait(1).to({x:376.2,y:-367.55},0).wait(1).to({x:365.6,y:-387.25},0).wait(1).to({x:355,y:-406.95},0).wait(1).to({x:344.35,y:-426.7},0).wait(1).to({x:333.75,y:-446.4},0).wait(1).to({x:323.15,y:-466.15},0).wait(1).to({x:312.5,y:-485.85},0).wait(1).to({x:301.9,y:-505.6},0).wait(1).to({x:291.3,y:-525.3},0).wait(1).to({x:280.65,y:-545.05},0).wait(1).to({x:270.05,y:-564.75},0).wait(1).to({x:259.45,y:-584.45},0).wait(1).to({x:248.8,y:-604.2},0).wait(1).to({x:238.2,y:-623.9},0).wait(1).to({x:227.6,y:-643.65},0).wait(1).to({x:216.95,y:-663.35},0).wait(1).to({x:206.35,y:-683.1},0).wait(1).to({x:195.75,y:-702.8},0).wait(1).to({x:185.1,y:-722.55},0).wait(1).to({x:174.5,y:-742.25},0).wait(1).to({x:163.85,y:-762},0).wait(1));

	// пр2
	this.movieClip_4 = new lib.Символ1();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(1523.45,914.95,0.5921,0.6431,14.9982,0,0,110.5,102.9);
	this.movieClip_4.alpha = 0;
	this.movieClip_4.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1).to({regX:111,regY:103.1,rotation:14.1664,x:1536.75,y:897.55,alpha:0.0526},0).wait(1).to({rotation:13.3331,x:1549.95,y:879.85,alpha:0.1053},0).wait(1).to({rotation:12.4998,x:1563.1,y:862.25,alpha:0.1579},0).wait(1).to({rotation:11.6664,x:1576.25,y:844.7,alpha:0.2105},0).wait(1).to({rotation:10.8331,x:1589.45,y:827,alpha:0.2632},0).wait(1).to({rotation:9.9998,x:1602.6,y:809.4,alpha:0.3158},0).wait(1).to({rotation:9.1665,x:1615.8,y:791.8,alpha:0.3684},0).wait(1).to({rotation:8.3332,x:1628.95,y:774.15,alpha:0.4211},0).wait(1).to({rotation:7.4999,x:1642.05,y:756.6,alpha:0.4737},0).wait(1).to({rotation:6.6665,x:1655.2,y:738.95,alpha:0.5263},0).wait(1).to({rotation:5.8332,x:1668.4,y:721.35,alpha:0.5789},0).wait(1).to({rotation:4.9999,x:1681.5,y:703.75,alpha:0.6316},0).wait(1).to({rotation:4.1666,x:1694.7,y:686.05,alpha:0.6842},0).wait(1).to({rotation:3.3333,x:1707.85,y:668.45,alpha:0.7368},0).wait(1).to({rotation:2.5,x:1721,y:650.85,alpha:0.7895},0).wait(1).to({rotation:1.6666,x:1734.15,y:633.2,alpha:0.8421},0).wait(1).to({rotation:0.8333,x:1747.35,y:615.65,alpha:0.8947},0).wait(1).to({rotation:0,x:1760.45,y:598,alpha:0.9474},0).wait(1).to({rotation:-14.9997,x:1773.65,y:580.3,alpha:1},0).wait(1).to({rotation:-29.9994,x:1750.5,y:571,alpha:0.9857},0).wait(1).to({rotation:-44.9991,x:1727.3,y:561.75,alpha:0.9713},0).wait(1).to({rotation:-42.4991,x:1704.15,y:552.55,alpha:0.957},0).wait(1).to({rotation:-39.9992,x:1680.95,y:543.35,alpha:0.9427},0).wait(1).to({rotation:-37.4993,x:1657.8,y:534.2,alpha:0.9283},0).wait(1).to({rotation:-34.9993,x:1634.65,y:524.95,alpha:0.914},0).wait(1).to({rotation:-32.4993,x:1611.45,y:515.8,alpha:0.8997},0).wait(1).to({rotation:-29.9994,x:1588.3,y:506.6,alpha:0.8853},0).wait(1).to({rotation:-27.4994,x:1565.15,y:497.4,alpha:0.871},0).wait(1).to({rotation:-24.9995,x:1541.95,y:488.3,alpha:0.8567},0).wait(1).to({rotation:-22.4995,x:1518.75,y:479.05,alpha:0.8423},0).wait(1).to({rotation:-19.9996,x:1495.6,y:469.85,alpha:0.828},0).wait(1).to({rotation:-17.4996,x:1472.5,y:460.7,alpha:0.8137},0).wait(1).to({rotation:-14.9997,x:1449.3,y:451.5,alpha:0.7993},0).wait(1).to({rotation:-12.4997,x:1426.1,y:442.35,alpha:0.785},0).wait(1).to({rotation:-9.9998,x:1402.9,y:433.15,alpha:0.7707},0).wait(1).to({rotation:-7.4998,x:1379.75,y:423.95,alpha:0.7563},0).wait(1).to({rotation:-4.9999,x:1356.6,y:414.75,alpha:0.742},0).wait(1).to({rotation:-2.4999,x:1333.4,y:405.6,alpha:0.7277},0).wait(1).to({rotation:0,x:1310.2,y:396.4,alpha:0.7133},0).wait(1).to({rotation:22.4996,x:1346.35,y:370.05,alpha:0.699},0).wait(1).to({rotation:44.9991,x:1382.35,y:343.65,alpha:0.6847},0).wait(1).to({rotation:40.7134,x:1418.55,y:317.15,alpha:0.6703},0).wait(1).to({rotation:36.4276,x:1454.8,y:290.65,alpha:0.656},0).wait(1).to({rotation:32.1419,x:1490.95,y:264.2,alpha:0.6417},0).wait(1).to({rotation:27.8561,x:1527.1,y:237.7,alpha:0.6273},0).wait(1).to({rotation:23.5704,x:1563.35,y:211.2,alpha:0.613},0).wait(1).to({rotation:19.2846,x:1599.5,y:184.75,alpha:0.5987},0).wait(1).to({rotation:14.9989,x:1635.7,y:158.25,alpha:0.5843},0).wait(1).to({rotation:-0.0004,x:1671.85,y:131.7,alpha:0.57},0).wait(1).to({rotation:-14.9997,x:1661.55,y:107.3},0).wait(1).to({x:1651.2,y:82.95},0).wait(1).to({x:1640.85,y:58.65},0).wait(1).to({x:1630.45,y:34.35},0).wait(1).to({x:1620.1,y:10.05},0).wait(1).to({x:1609.75,y:-14.3},0).wait(1).to({x:1599.35,y:-38.6},0).wait(1).to({x:1589,y:-62.95},0).wait(1).to({x:1578.65,y:-87.25},0).wait(1).to({x:1568.3,y:-111.6},0).wait(1).to({x:1557.9,y:-135.95},0).wait(1).to({x:1491.95,y:-134.35},0).wait(1).to({x:1426,y:-132.8},0).wait(1).to({x:1360,y:-131.25},0).wait(1).to({x:1294.05,y:-129.65},0).wait(1).to({x:1228.1,y:-128.1},0).wait(1).to({x:1162.1,y:-126.55},0).wait(1).to({x:1096.15,y:-125},0).wait(1).to({x:1030.15,y:-123.4},0).wait(1).to({x:964.2,y:-121.85},0).wait(1).to({x:898.25,y:-120.3},0).wait(1).to({x:832.25,y:-118.7},0).wait(1).to({x:766.3,y:-117.15},0).wait(1).to({x:700.35,y:-115.6},0).wait(1).to({x:634.35,y:-114.05},0).wait(1).to({x:568.4,y:-112.45},0).wait(1).to({x:502.4,y:-110.9},0).wait(1).to({x:436.45,y:-109.35},0).wait(1).to({x:370.5,y:-107.75},0).wait(1).to({x:304.5,y:-106.2},0).wait(1).to({x:238.55,y:-104.65},0).wait(1).to({x:172.55,y:-103.1},0).wait(1).to({x:183.3,y:-117},0).wait(1).to({x:194,y:-130.9},0).wait(1).to({x:204.75,y:-144.8},0).wait(1).to({x:215.45,y:-158.75},0).wait(1).to({x:226.2,y:-172.65},0).wait(1).to({x:236.9,y:-186.55},0).wait(1).to({x:247.6,y:-200.5},0).wait(1).to({x:258.35,y:-214.4},0).wait(1).to({x:269.05,y:-228.3},0).wait(1).to({x:279.8,y:-242.25},0).wait(1).to({x:290.5,y:-256.15},0).wait(1).to({x:301.25,y:-270.05},0).wait(1).to({x:311.95,y:-284},0).wait(1).to({x:322.65,y:-297.9},0).wait(1).to({x:333.4,y:-311.8},0).wait(1).to({x:344.1,y:-325.75},0).wait(1).to({x:354.85,y:-339.65},0).wait(1).to({x:365.55,y:-353.55},0).wait(1).to({x:376.25,y:-367.5},0).wait(1).to({x:365.65,y:-387.2},0).wait(1).to({x:355.05,y:-406.9},0).wait(1).to({x:344.4,y:-426.65},0).wait(1).to({x:333.8,y:-446.35},0).wait(1).to({x:323.2,y:-466.1},0).wait(1).to({x:312.55,y:-485.8},0).wait(1).to({x:301.95,y:-505.55},0).wait(1).to({x:291.35,y:-525.25},0).wait(1).to({x:280.7,y:-545},0).wait(1).to({x:270.1,y:-564.7},0).wait(1).to({x:259.5,y:-584.4},0).wait(1).to({x:248.85,y:-604.15},0).wait(1).to({x:238.25,y:-623.85},0).wait(1).to({x:227.65,y:-643.6},0).wait(1).to({x:217,y:-663.3},0).wait(1).to({x:206.4,y:-683.05},0).wait(1).to({x:195.8,y:-702.75},0).wait(1).to({x:185.15,y:-722.5},0).wait(1).to({x:174.55,y:-742.2},0).wait(1).to({x:163.9,y:-761.95},0).wait(1));

	// призрак
	this.movieClip_2 = new lib.Символ1();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(216,813.1,1,1,0,0,0,111,103.1);
	this.movieClip_2.alpha = 0;
	this.movieClip_2.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({rotation:5,x:220.65,y:800.8,alpha:0.0526},0).wait(1).to({rotation:9.9999,x:225.3,y:788.55,alpha:0.1053},0).wait(1).to({rotation:14.9999,x:229.95,y:776.35,alpha:0.1579},0).wait(1).to({rotation:19.9998,x:234.65,y:764.05,alpha:0.2105},0).wait(1).to({rotation:24.9998,x:239.35,y:751.8,alpha:0.2632},0).wait(1).to({rotation:29.9997,x:244,y:739.55,alpha:0.3158},0).wait(1).to({rotation:34.9997,x:248.65,y:727.25,alpha:0.3684},0).wait(1).to({rotation:39.9996,x:253.35,y:715.05,alpha:0.4211},0).wait(1).to({rotation:44.9996,x:258,y:702.75,alpha:0.4737},0).wait(1).to({rotation:40.4996,x:262.65,y:690.55,alpha:0.5263},0).wait(1).to({rotation:35.9997,x:267.35,y:678.25,alpha:0.5789},0).wait(1).to({rotation:31.4997,x:272.05,y:666,alpha:0.6316},0).wait(1).to({rotation:26.9998,x:276.65,y:653.75,alpha:0.6842},0).wait(1).to({rotation:22.4998,x:281.35,y:641.55,alpha:0.7368},0).wait(1).to({rotation:17.9998,x:286,y:629.25,alpha:0.7895},0).wait(1).to({rotation:13.4999,x:290.7,y:617,alpha:0.8421},0).wait(1).to({rotation:8.9999,x:295.35,y:604.8,alpha:0.8947},0).wait(1).to({rotation:4.5,x:300,y:592.55,alpha:0.9474},0).wait(1).to({rotation:0,x:304.7,y:580.3,alpha:1},0).wait(1).to({rotation:-4.2856,x:297.9,y:571.05,alpha:0.9857},0).wait(1).to({rotation:-8.5712,x:291.15,y:561.9,alpha:0.9713},0).wait(1).to({rotation:-12.8568,x:284.4,y:552.65,alpha:0.957},0).wait(1).to({rotation:-17.1424,x:277.65,y:543.5,alpha:0.9427},0).wait(1).to({rotation:-21.428,x:270.9,y:534.25,alpha:0.9283},0).wait(1).to({rotation:-25.7136,x:264.15,y:525.1,alpha:0.914},0).wait(1).to({rotation:-29.9992,x:257.4,y:515.9,alpha:0.8997},0).wait(1).to({rotation:-27.6916,x:250.6,y:506.7,alpha:0.8853},0).wait(1).to({rotation:-25.3839,x:243.85,y:497.5,alpha:0.871},0).wait(1).to({rotation:-23.0763,x:237.05,y:488.3,alpha:0.8567},0).wait(1).to({rotation:-20.7687,x:230.3,y:479.1,alpha:0.8423},0).wait(1).to({rotation:-18.461,x:223.55,y:469.9,alpha:0.828},0).wait(1).to({rotation:-16.1534,x:216.8,y:460.7,alpha:0.8137},0).wait(1).to({rotation:-13.8458,x:210,y:451.5,alpha:0.7993},0).wait(1).to({rotation:-11.5382,x:203.25,y:442.25,alpha:0.785},0).wait(1).to({rotation:-9.2305,x:196.5,y:433.05,alpha:0.7707},0).wait(1).to({rotation:-6.9229,x:189.8,y:423.85,alpha:0.7563},0).wait(1).to({rotation:-4.6153,x:183,y:414.65,alpha:0.742},0).wait(1).to({rotation:-2.3076,x:176.2,y:405.5,alpha:0.7277},0).wait(1).to({rotation:0,x:169.5,y:396.3,alpha:0.7133},0).wait(1).to({rotation:4.9996,x:178.45,y:384.2,alpha:0.699},0).wait(1).to({rotation:9.9993,x:187.4,y:372.2,alpha:0.6847},0).wait(1).to({rotation:14.9989,x:196.35,y:360.2,alpha:0.6703},0).wait(1).to({rotation:19.9986,x:205.4,y:348.1,alpha:0.656},0).wait(1).to({rotation:24.9982,x:214.35,y:336.1,alpha:0.6417},0).wait(1).to({rotation:29.9979,x:223.35,y:324.05,alpha:0.6273},0).wait(1).to({rotation:28.3313,x:232.25,y:312,alpha:0.613},0).wait(1).to({rotation:26.6646,x:241.3,y:299.95,alpha:0.5987},0).wait(1).to({rotation:24.998,x:250.25,y:287.95,alpha:0.5843},0).wait(1).to({rotation:23.3313,x:259.2,y:275.85,alpha:0.57},0).wait(1).to({rotation:21.6647,x:268.2,y:263.85},0).wait(1).to({rotation:19.998,x:277.15,y:251.85},0).wait(1).to({rotation:18.3314,x:286.15,y:239.75},0).wait(1).to({rotation:16.6647,x:295.15,y:227.75},0).wait(1).to({rotation:14.9981,x:304.05,y:215.7},0).wait(1).to({rotation:11.9985,x:313,y:203.65},0).wait(1).to({rotation:8.9989,x:322,y:191.65},0).wait(1).to({rotation:5.9992,x:331.05,y:179.65},0).wait(1).to({rotation:2.9996,x:339.95,y:167.6},0).wait(1).to({rotation:0,x:348.95,y:155.55},0).wait(1).to({rotation:-5.9998,x:357.95,y:143.55},0).wait(1).to({rotation:-11.9997,x:349.05,y:131.75},0).wait(1).to({rotation:-17.9995,x:340.2,y:120.05},0).wait(1).to({rotation:-23.9994,x:331.4,y:108.3},0).wait(1).to({rotation:-29.9992,x:322.55,y:96.55},0).wait(1).to({x:313.75,y:84.8},0).wait(1).to({x:304.9,y:73.1},0).wait(1).to({x:296.05,y:61.35},0).wait(1).to({x:287.2,y:49.6},0).wait(1).to({x:278.35,y:37.85},0).wait(1).to({x:269.5,y:26.15},0).wait(1).to({x:260.65,y:14.4},0).wait(1).to({x:251.8,y:2.65},0).wait(1).to({x:242.95,y:-9.1},0).wait(1).to({x:234.1,y:-20.85},0).wait(1).to({x:225.25,y:-32.6},0).wait(1).to({x:216.45,y:-44.35},0).wait(1).to({x:207.6,y:-56.1},0).wait(1).to({x:198.75,y:-67.85},0).wait(1).to({x:189.9,y:-79.6},0).wait(1).to({x:181.05,y:-91.35},0).wait(1).to({x:172.2,y:-103.1},0).wait(1).to({x:182.9,y:-117},0).wait(1).to({x:193.65,y:-130.9},0).wait(1).to({x:204.35,y:-144.85},0).wait(1).to({x:215.1,y:-158.75},0).wait(1).to({x:225.8,y:-172.65},0).wait(1).to({x:236.55,y:-186.6},0).wait(1).to({x:247.25,y:-200.5},0).wait(1).to({x:257.95,y:-214.4},0).wait(1).to({x:268.7,y:-228.35},0).wait(1).to({x:279.4,y:-242.25},0).wait(1).to({x:290.15,y:-256.15},0).wait(1).to({x:300.85,y:-270.1},0).wait(1).to({x:311.6,y:-284},0).wait(1).to({x:322.3,y:-297.9},0).wait(1).to({x:333,y:-311.85},0).wait(1).to({x:343.75,y:-325.75},0).wait(1).to({x:354.45,y:-339.65},0).wait(1).to({x:365.2,y:-353.55},0).wait(1).to({x:375.9,y:-367.5},0).wait(1).to({x:365.3,y:-387.2},0).wait(1).to({x:354.65,y:-406.95},0).wait(1).to({x:344.05,y:-426.65},0).wait(1).to({x:333.45,y:-446.4},0).wait(1).to({x:322.8,y:-466.1},0).wait(1).to({x:312.2,y:-485.8},0).wait(1).to({x:301.6,y:-505.55},0).wait(1).to({x:290.95,y:-525.25},0).wait(1).to({x:280.35,y:-545},0).wait(1).to({x:269.75,y:-564.7},0).wait(1).to({x:259.1,y:-584.45},0).wait(1).to({x:248.5,y:-604.15},0).wait(1).to({x:237.9,y:-623.9},0).wait(1).to({x:227.25,y:-643.6},0).wait(1).to({x:216.65,y:-663.35},0).wait(1).to({x:206,y:-683.05},0).wait(1).to({x:195.4,y:-702.75},0).wait(1).to({x:184.8,y:-722.5},0).wait(1).to({x:174.15,y:-742.2},0).wait(1).to({x:163.55,y:-761.95},0).wait(1));

	// звезда
	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.setTransform(1170.5,79.85,0.0227,0.0279,-104.9718,0,0,-2.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-1.7,regY:0.8,scaleX:0.1112,scaleY:0.1363,rotation:-104.9946,x:1170.6,y:79.9},7).to({regX:-2.1,scaleX:0.0925,scaleY:0.1999,rotation:-104.992,x:923.05,y:125.7},15).to({regX:-1.4,regY:1.1,scaleX:0.0262,scaleY:0.0571,rotation:-75.0025,x:732.5,y:97.25},17).to({_off:true},2).wait(80));

	// Фон
	this.instance_2 = new lib.Безымянный2();
	this.instance_2.setTransform(0,0,0.2403,0.2406);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(552.8,-1095.7,2600.5,3195);
// library properties:
lib.properties = {
	id: '0166CBE197EE084FBAE354E63EE5A510',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безымянный2.png?1698276716087", id:"Безымянный2"},
		{src:"images/8_atlas_1.png?1698276716028", id:"8_atlas_1"},
		{src:"sounds/SS.mp3?1698276716087", id:"SS"},
		{src:"sounds/SS2.mp3?1698276716087", id:"SS2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0166CBE197EE084FBAE354E63EE5A510'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;