(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3_atlas_1", frames: [[0,0,1478,1830]]},
		{name:"3_atlas_2", frames: [[0,834,687,711],[689,834,376,376],[0,0,1436,832]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.глаз = function() {
	this.initialize(ss["3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.голова = function() {
	this.initialize(img.голова);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4441,3968);


(lib.колесо = function() {
	this.initialize(ss["3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.машинка = function() {
	this.initialize(ss["3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(img.тело);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8098,4907);


(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8000,4500);


(lib.хвост = function() {
	this.initialize(img.хвост);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1906,3530);


(lib.цхо = function() {
	this.initialize(ss["3_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо();
	this.instance.setTransform(0,0,0.3023,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,113.7,106.4), null);


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
	this.instance = new lib.хвост();
	this.instance.setTransform(0,0,0.0857,0.0824);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,163.3,290.8), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.глаз();
	this.instance.setTransform(0,0,0.0526,0.0526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,36.2,37.4), null);


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
	this.instance = new lib.цхо();
	this.instance.setTransform(8.05,0,0.0754,0.0916,2.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,119.3,172.9), null);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.машинка();
	this.instance.setTransform(-210.9,-122.2,0.2937,0.2937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-122.2,421.8,244.4);


(lib.хвост_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ3();
	this.instance.setTransform(163.3,290.8,1,1,0,0,0,163.3,290.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:81.7,regY:145.4,rotation:-2.1428,x:76.35,y:145.75},0).wait(1).to({rotation:-4.2856,x:71.05,y:146.35},0).wait(1).to({rotation:-6.4284,x:66,y:147.1},0).wait(1).to({rotation:-8.5712,x:60.95,y:148.05},0).wait(1).to({rotation:-10.714,x:56.15,y:149.15},0).wait(1).to({rotation:-12.8568,x:51.4,y:150.45},0).wait(1).to({rotation:-14.9996,x:46.9,y:151.95},0).wait(1).to({rotation:-17.1424,x:42.5,y:153.6},0).wait(1).to({rotation:-19.2852,x:38.25,y:155.45},0).wait(1).to({rotation:-21.428,x:34.25,y:157.4},0).wait(1).to({rotation:-23.5708,x:30.45,y:159.55},0).wait(1).to({rotation:-25.7136,x:26.75,y:161.8},0).wait(1).to({rotation:-27.8564,x:23.3,y:164.2},0).wait(1).to({rotation:-29.9992,x:20,y:166.65},0).wait(1).to({rotation:-27.8564,x:23.3,y:163.7},0).wait(1).to({rotation:-25.7136,x:26.75,y:160.75},0).wait(1).to({rotation:-23.5708,x:30.45,y:157.95},0).wait(1).to({rotation:-21.428,x:34.25,y:155.3},0).wait(1).to({rotation:-19.2852,x:38.25,y:152.85},0).wait(1).to({rotation:-17.1424,x:42.5,y:150.5},0).wait(1).to({rotation:-14.9996,x:46.9,y:148.3},0).wait(1).to({rotation:-12.8568,x:51.4,y:146.3},0).wait(1).to({rotation:-10.714,x:56.15,y:144.45},0).wait(1).to({rotation:-8.5712,x:60.95,y:142.8},0).wait(1).to({rotation:-6.4284,x:66,y:141.35},0).wait(1).to({rotation:-4.2856,x:71.05,y:140.05},0).wait(1).to({rotation:-2.1428,x:76.35,y:139},0).wait(1).to({rotation:0,x:81.7,y:138.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.4,-13.5,286.8,346.9);


(lib.ухо = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(119.3,86.4,1,1,0,0,0,119.3,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:59.7,scaleX:0.9776,x:61},0).wait(1).to({scaleX:0.9552,x:62.35},0).wait(1).to({scaleX:0.9328,x:63.7},0).wait(1).to({scaleX:0.9104,x:65},0).wait(1).to({scaleX:0.888,x:66.35},0).wait(1).to({scaleX:0.8656,x:67.7},0).wait(1).to({scaleX:0.8432,x:69.05},0).wait(1).to({scaleX:0.8208,x:70.35},0).wait(1).to({scaleX:0.7984,x:71.7},0).wait(1).to({scaleX:0.817,x:70.6},0).wait(1).to({scaleX:0.8357,x:69.5},0).wait(1).to({scaleX:0.8543,x:68.35},0).wait(1).to({scaleX:0.873,x:67.25},0).wait(1).to({scaleX:0.8916,x:66.15},0).wait(1).to({scaleX:0.9103,x:65.05},0).wait(1).to({scaleX:0.9289,x:63.9},0).wait(1).to({scaleX:0.9476,x:62.8},0).wait(1).to({scaleX:0.9662,x:61.7},0).wait(1).to({scaleX:0.9849,x:60.6},0).wait(1).to({scaleX:1.0035,x:59.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,119.7,172.9);


(lib.колесо_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ4();
	this.instance.setTransform(56.9,53.2,1,1,0,0,0,56.9,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:56.8,rotation:-22.5,x:56.85},0).wait(1).to({rotation:-45,x:56.8},0).wait(1).to({rotation:-67.5,x:56.85},0).wait(1).to({rotation:-90,y:53.25},0).wait(1).to({rotation:-22.5,y:53.2},0).wait(1).to({rotation:45,x:56.8,y:53.15},0).wait(1).to({rotation:112.5,x:56.85},0).wait(1).to({rotation:180,x:56.9,y:53.2},0).wait(1).to({rotation:157.5778,x:56.85,y:53.1},0).wait(1).to({rotation:135.1556,x:56.9,y:53.15},0).wait(1).to({rotation:112.7334,x:56.85},0).wait(1).to({rotation:90.3112},0).wait(1).to({rotation:67.811,x:56.8,y:53.2},0).wait(1).to({rotation:45.3108},0).wait(1).to({rotation:22.8106},0).wait(1).to({rotation:0.3104,x:56.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24.6,155.7,155.7);


(lib.глаз_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(-23.2,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.глаз_1, new cjs.Rectangle(-23.2,-4.1,36.2,37.4), null);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.глаз_1();
	this.instance.setTransform(63.75,14,1,1,0,0,0,15.2,18.7);

	this.instance_1 = new lib.глаз_1();
	this.instance_1.setTransform(-68.15,-14,1,1,0,0,0,15.2,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-36.8,168,65.4);


// stage content:
(lib._3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_29
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(899.65,536.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:876.45,y:523.9},70).to({x:876.5},15).to({x:902.6,y:537.4},77).wait(6));

	// колесо
	this.instance_1 = new lib.колесо_1();
	this.instance_1.setTransform(2032.25,918.2,0.9666,1,0,0,0,56.9,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-367.3},72).to({scaleX:0.943,skewY:180,x:-138.8},8).to({x:2283.35},82).wait(6));

	// колесо
	this.instance_2 = new lib.колесо_1();
	this.instance_2.setTransform(2263.9,918.2,0.956,1,0,0,0,56.9,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-135.65},72).to({regX:57,scaleX:0.9327,skewY:180,x:-364.85},8).to({x:2057.3},82).wait(6));

	// машинка_png
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.setTransform(2147.9,842.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-251.65},72).to({scaleX:0.9756,skewY:180,x:-251.6},8).to({x:2170.55},82).wait(6));

	// голова_png
	this.instance_4 = new lib.голова();
	this.instance_4.setTransform(673,310,0.0893,0.083);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(168));

	// ухо
	this.instance_5 = new lib.ухо();
	this.instance_5.setTransform(766.05,374.5,1.0151,1.0151,0,0,0,59.6,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(168));

	// ухо
	this.instance_6 = new lib.ухо();
	this.instance_6.setTransform(1024.7,428.3,0.9498,1.0208,0,14.9987,-165.0015,59.7,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168));

	// тело_png
	this.instance_7 = new lib.тело();
	this.instance_7.setTransform(633,293,0.0779,0.0779);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168));

	// хвост
	this.instance_8 = new lib.хвост_1();
	this.instance_8.setTransform(1163.7,222.6,0.7516,0.7516,0,0,0,81.7,145.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168));

	// фон_png
	this.instance_9 = new lib.фон();
	this.instance_9.setTransform(2,0,0.2398,0.2422);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(168));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(497.5,540,1878.8000000000002,632.7);
// library properties:
lib.properties = {
	id: '4019DF35C2E9FC4C9BBF9DF973D82FA4',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/голова_.png?1698185405429", id:"голова"},
		{src:"images/тело_.png?1698185405429", id:"тело"},
		{src:"images/фон_.png?1698185405429", id:"фон"},
		{src:"images/хвост_.png?1698185405429", id:"хвост"},
		{src:"images/3_atlas_1.png?1698185405401", id:"3_atlas_1"},
		{src:"images/3_atlas_2.png?1698185405401", id:"3_atlas_2"}
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
an.compositions['4019DF35C2E9FC4C9BBF9DF973D82FA4'] = {
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