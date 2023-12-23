(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2 _1__atlas_1", frames: [[0,0,1486,1154]]},
		{name:"2 _1__atlas_2", frames: [[0,981,1212,907],[0,0,1569,979]]}
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



(lib.змеяpngкопия2 = function() {
	this.initialize(ss["2 _1__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.кошкаpngкопия2 = function() {
	this.initialize(ss["2 _1__atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.мышьpngкопия2 = function() {
	this.initialize(ss["2 _1__atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.фонpngкопия2 = function() {
	this.initialize(img.фонpngкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8335,4745);// helper functions:

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
	this.instance = new lib.змеяpngкопия2();
	this.instance.setTransform(0,0,0.2721,0.2721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,404.3,314), null);


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
	this.instance = new lib.мышьpngкопия2();
	this.instance.setTransform(0,0,0.1639,0.1639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,257.1,160.4), null);


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
	this.instance = new lib.кошкаpngкопия2();
	this.instance.setTransform(-188,-141,0.3098,0.3098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-141,375.5,281);


// stage content:
(lib._21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// snake
	this.instance = new lib.Символ2();
	this.instance.setTransform(2253.2,579,1,1,0,0,0,202.2,157);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).wait(1).to({rotation:-2.1427,x:2214,y:606.45},0).wait(1).to({rotation:-4.2854,x:2174.95,y:633.85},0).wait(1).to({rotation:-6.4281,x:2135.8,y:661.3},0).wait(1).to({rotation:-8.5708,x:2096.65,y:688.75},0).wait(1).to({rotation:-10.7135,x:2057.5,y:716.2},0).wait(1).to({rotation:-12.8562,x:2018.4,y:743.65},0).wait(1).to({rotation:-14.9989,x:1979.25,y:771.1},0).wait(1).to({x:1945,y:784.65},0).wait(1).to({x:1910.75,y:798.2},0).wait(1).to({x:1875.45,y:779.9},0).wait(1).to({x:1840.15,y:761.6},0).wait(1).to({x:1804.85,y:743.3},0).wait(1).to({x:1769.55,y:725},0).wait(1).to({x:1734.25,y:706.75},0).wait(1).to({x:1698.95,y:688.45},0).wait(1).to({x:1663.65,y:670.15},0).wait(1).to({x:1628.35,y:651.85},0).wait(1).to({x:1593.05,y:633.55},0).wait(1).to({x:1557.75,y:615.25},0).wait(1).to({x:1522.45,y:633.45},0).wait(1).to({x:1487.15,y:651.65},0).wait(1).to({x:1451.85,y:669.8},0).wait(1).to({x:1416.55,y:688},0).wait(1).to({x:1381.25,y:706.2},0).wait(1).to({x:1345.95,y:700.95},0).wait(1).to({x:1310.65,y:695.75},0).wait(1).to({x:1275.35,y:690.55},0).wait(1).to({x:1240.05,y:685.35},0).wait(1).to({x:1204.75,y:680.15},0).wait(1).to({x:1169.45,y:674.95},0).wait(1).to({x:1134.15,y:669.75},0).wait(1).to({x:1098.85,y:664.55},0).wait(1).to({x:1063.55,y:659.35},0).wait(1).to({x:1028.25,y:654.15},0).wait(31).to({scaleX:0.8189,rotation:-10.9079,x:951.2,y:664.35},0).wait(1).to({scaleX:0.6379,rotation:-6.817,x:874.15,y:674.6},0).wait(1).to({scaleX:0.4568,rotation:-2.726,x:797.1,y:684.75},0).wait(1).to({scaleX:0.2757,rotation:1.365,x:720.1,y:695},0).wait(1).to({scaleX:0.0946,rotation:5.456,x:643.05,y:705.15},0).wait(1).to({scaleX:0.0865,rotation:0,skewX:9.5469,skewY:-170.4531,x:566,y:715.35},0).wait(1).to({scaleX:0.2675,skewX:13.6379,skewY:-166.3621,x:566.05},0).wait(1).to({scaleX:0.4486,skewX:17.7289,skewY:-162.2711,x:566,y:715.4},0).wait(1).to({scaleX:0.6297,skewX:21.8199,skewY:-158.1801},0).wait(1).to({scaleX:0.8108,skewX:25.9108,skewY:-154.0892,y:715.35},0).wait(1).to({scaleX:0.9918,skewX:30.0018,skewY:-149.9982,x:565.95,y:715.3},0).wait(1).to({x:610.95,y:721.8},0).wait(1).to({x:656,y:728.3},0).wait(1).to({x:701,y:734.8},0).wait(1).to({x:746,y:741.3},0).wait(1).to({x:791,y:747.8},0).wait(1).to({x:836,y:754.3},0).wait(1).to({x:881,y:760.8},0).wait(1).to({x:926.05,y:767.3},0).wait(1).to({x:971.05,y:773.8},0).wait(1).to({x:1016.05,y:780.3},0).wait(1).to({x:1061.05,y:786.75},0).wait(1).to({x:1106.05,y:793.25},0).wait(1).to({x:1157.35,y:782.35},0).wait(1).to({x:1208.6,y:771.45},0).wait(1).to({x:1259.9,y:760.55},0).wait(1).to({x:1311.15,y:749.65},0).wait(1).to({x:1362.45,y:738.75},0).wait(1).to({x:1413.7,y:727.85},0).wait(1).to({x:1465,y:716.95},0).wait(1).to({x:1516.25,y:706.05},0).wait(1).to({x:1567.55,y:695.15},0).wait(1).to({x:1618.8,y:684.25},0).wait(1).to({x:1670.1,y:673.3},0).wait(1).to({x:1721.35,y:662.4},0).wait(1).to({x:1770.65,y:675.5},0).wait(1).to({x:1819.9,y:688.6},0).wait(1).to({x:1869.2,y:701.65},0).wait(1).to({x:1918.45,y:714.75},0).wait(1).to({x:1967.75,y:727.85},0).wait(1).to({x:2017,y:740.95},0).wait(1).to({x:2066.3,y:754},0).wait(1).to({x:2115.55,y:767.1},0).wait(1).to({x:2164.85,y:780.2},0).wait(1).to({x:2214.1,y:793.25},0).wait(1).to({scaleX:0.9389,scaleY:1.0271,skewX:28.6504,skewY:-151.3496,x:2219.65,y:788.7},0).wait(1).to({scaleX:0.886,scaleY:1.0542,skewX:27.299,skewY:-152.701,x:2225.1,y:784.2},0).wait(1).to({scaleX:0.8331,scaleY:1.0814,skewX:25.9476,skewY:-154.0524,x:2230.55,y:779.55},0).wait(1).to({scaleX:0.7802,scaleY:1.1085,skewX:24.5963,skewY:-155.4037,x:2236,y:775},0).wait(1).to({scaleX:0.7273,scaleY:1.1356,skewX:23.2449,skewY:-156.7551,x:2241.55,y:770.4},0).wait(1).to({scaleX:0.6744,scaleY:1.1627,skewX:21.8935,skewY:-158.1065,x:2246.95,y:765.85},0).wait(1).to({scaleX:0.6215,scaleY:1.1899,skewX:20.5421,skewY:-159.4579,x:2252.45,y:761.3},0).wait(1).to({scaleX:0.5686,scaleY:1.217,skewX:19.1907,skewY:-160.8093,x:2257.9,y:756.7},0).wait(1).to({scaleX:0.5157,scaleY:1.2441,skewX:17.8393,skewY:-162.1607,x:2263.4,y:752.15},0).wait(1).to({scaleX:0.4628,scaleY:1.2712,skewX:16.4879,skewY:-163.5121,x:2268.9,y:747.55},0).wait(1).to({scaleX:0.4099,scaleY:1.2984,skewX:15.1365,skewY:-164.8635,x:2274.3,y:742.95},0).wait(1).to({scaleX:0.357,scaleY:1.3255,skewX:13.7852,skewY:-166.2148,x:2279.8,y:738.4},0).wait(1).to({scaleX:0.304,scaleY:1.3526,skewX:12.4338,skewY:-167.5662,x:2285.3,y:733.8},0).wait(1).to({scaleX:0.2511,scaleY:1.3798,skewX:11.0824,skewY:-168.9176,x:2290.7,y:729.25},0).wait(1).to({scaleX:0.1982,scaleY:1.4069,skewX:9.731,skewY:-170.269,x:2296.2,y:724.7},0).wait(1).to({scaleX:0.1453,scaleY:1.434,skewX:8.3796,skewY:-171.6204,x:2301.75,y:720.1},0).wait(1).to({scaleX:0.0924,scaleY:1.4611,skewX:7.0282,skewY:-172.9718,x:2307.2,y:715.5},0).wait(1).to({scaleX:0.0395,scaleY:1.4883,skewX:5.6768,skewY:-174.3232,x:2312.65,y:710.9},0).wait(1).to({scaleX:0.0134,scaleY:1.5154,rotation:4.3255,skewX:0,skewY:0,x:2318.1,y:706.35},0).wait(1).to({scaleX:0.0663,scaleY:1.5425,rotation:2.9741,x:2323.6,y:701.8},0).wait(1).to({scaleX:0.1192,scaleY:1.5696,rotation:1.6227,x:2329.05,y:697.25},0).wait(1).to({scaleX:0.1721,scaleY:1.5968,rotation:0.2713,x:2334.5,y:692.65},0).wait(1).to({scaleX:0.225,scaleY:1.6239,rotation:-1.0801,x:2340,y:688.05},0).wait(1).to({scaleX:0.2779,scaleY:1.651,rotation:-2.4315,x:2345.5,y:683.45},0).wait(1).to({scaleX:0.3309,scaleY:1.6781,rotation:-3.7829,x:2350.95,y:678.9},0).wait(1).to({scaleX:0.3838,scaleY:1.7053,rotation:-5.1343,x:2356.45,y:674.3},0).wait(1).to({scaleX:0.4367,scaleY:1.7324,rotation:-6.4856,x:2361.9,y:669.75},0).wait(1).to({scaleX:0.4896,scaleY:1.7595,rotation:-7.837,x:2367.35,y:665.15},0).wait(1).to({scaleX:0.5425,scaleY:1.7866,rotation:-9.1884,x:2372.9,y:660.6},0).wait(1).to({scaleX:0.5954,scaleY:1.8137,rotation:-10.5398,x:2378.35,y:656},0).wait(1).to({scaleX:0.6483,scaleY:1.8409,rotation:-11.8912,x:2383.75,y:651.4},0).wait(1).to({scaleX:0.7012,scaleY:1.868,rotation:-13.2426,x:2389.25,y:646.85},0).wait(1).to({scaleX:0.7541,scaleY:1.8951,rotation:-14.594,x:2394.7,y:642.3},0).wait(1).to({scaleX:0.807,scaleY:1.9223,rotation:-15.9453,x:2400.2,y:637.7},0).wait(1).to({scaleX:0.8599,scaleY:1.9494,rotation:-17.2967,x:2405.7,y:633.1},0).wait(1).to({scaleX:0.9128,scaleY:1.9765,rotation:-18.6481,x:2411.15,y:628.55},0).wait(1).to({scaleX:0.9657,scaleY:2.0036,rotation:-19.9995,x:2416.65,y:623.95},0).wait(1).to({scaleX:1.0186,scaleY:2.0307,rotation:-21.3509,x:2422.15,y:619.35},0).wait(1).to({scaleX:1.0716,scaleY:2.0579,rotation:-22.7023,x:2427.6,y:614.8},0).wait(1).to({scaleX:1.1245,scaleY:2.085,rotation:-24.0537,x:2433,y:610.2},0).wait(1).to({scaleX:1.1774,scaleY:2.1121,rotation:-25.4051,x:2438.5,y:605.65},0).wait(1).to({scaleX:1.2303,scaleY:2.1392,rotation:-26.7564,x:2444,y:601.05},0).wait(1).to({scaleX:1.2832,scaleY:2.1664,rotation:-28.1078,x:2449.45,y:596.45},0).wait(1).to({scaleX:1.3361,scaleY:2.1935,rotation:-29.4592,x:2454.95,y:591.9},0).wait(1).to({scaleX:1.389,scaleY:2.2206,rotation:-30.8106,x:2460.35,y:587.35},0).wait(1).to({scaleX:1.4419,scaleY:2.2477,rotation:-32.162,x:2465.85,y:582.75},0).wait(1).to({scaleX:1.4948,scaleY:2.2749,rotation:-33.5134,x:2471.35,y:578.15},0).wait(1).to({scaleX:1.5477,scaleY:2.302,rotation:-34.8648,x:2476.85,y:573.6},0).wait(1).to({scaleX:1.6006,scaleY:2.3291,rotation:-36.2162,x:2482.3,y:569},0).wait(1).to({scaleX:1.6535,scaleY:2.3562,rotation:-37.5675,x:2487.75,y:564.4},0).wait(1).to({scaleX:1.7065,scaleY:2.3834,rotation:-38.9189,x:2493.2,y:559.85},0).wait(1).to({scaleX:1.7594,scaleY:2.4105,rotation:-40.2703,x:2498.7,y:555.25},0).wait(1).to({scaleX:1.8122,scaleY:2.4376,rotation:-41.6217,x:2504.2,y:550.7},0).wait(1).to({scaleX:1.8652,scaleY:2.4647,rotation:-42.9731,x:2509.65,y:546.1},0).wait(1).to({scaleX:1.9181,scaleY:2.4918,rotation:-44.3245,x:2515.1,y:541.5},0).wait(1).to({scaleX:1.971,scaleY:2.519,rotation:-45.6759,x:2520.55,y:536.95},0).wait(1).to({scaleX:2.0239,scaleY:2.5461,rotation:-47.0272,x:2526.1,y:532.4},0).wait(1).to({scaleX:2.0768,scaleY:2.5732,rotation:-48.3786,x:2531.5,y:527.8},0).wait(1).to({scaleX:2.1297,scaleY:2.6003,rotation:-49.73,x:2537,y:523.2},0).wait(1).to({scaleX:2.1826,scaleY:2.6275,rotation:-51.0814,x:2542.5,y:518.65},0).wait(1).to({scaleX:2.2355,scaleY:2.6546,rotation:-52.4328,x:2547.95,y:514},0).wait(1).to({scaleX:2.2884,scaleY:2.6817,rotation:-53.7842,x:2553.45,y:509.45},0).wait(1).to({scaleX:2.3414,scaleY:2.7089,rotation:-55.1356,x:2558.85,y:504.85},0).wait(1).to({scaleX:2.3943,scaleY:2.736,rotation:-56.487,x:2564.35,y:500.25},0).wait(1).to({scaleX:2.4472,scaleY:2.7631,rotation:-57.8383,x:2569.85,y:495.65},0).wait(1).to({scaleX:2.5001,scaleY:2.7902,rotation:-59.1897,x:2575.3,y:491.1},0).wait(1).to({scaleX:2.553,scaleY:2.8173,rotation:-60.5411,x:2580.75,y:486.6},0).wait(1).to({scaleX:2.6059,scaleY:2.8445,rotation:-61.8925,x:2586.25,y:482},0).wait(1).to({scaleX:2.5761,scaleY:2.8236,rotation:-61.6555,x:2536.65,y:503.5},0).wait(1).to({scaleX:2.5462,scaleY:2.8027,rotation:-61.4184,x:2487.05,y:525.1},0).wait(1).to({scaleX:2.5164,scaleY:2.7818,rotation:-61.1814,x:2437.4,y:546.7},0).wait(1).to({scaleX:2.4866,scaleY:2.7609,rotation:-60.9443,x:2387.85,y:568.25},0).wait(1).to({scaleX:2.4567,scaleY:2.74,rotation:-60.7073,x:2338.2,y:589.8},0).wait(1).to({scaleX:2.4269,scaleY:2.7191,rotation:-60.4703,x:2288.6,y:611.4},0).wait(1).to({scaleX:2.3971,scaleY:2.6983,rotation:-60.2332,x:2239.05,y:632.9},0).wait(1).to({scaleX:2.3672,scaleY:2.6773,rotation:-59.9962,x:2189.4,y:654.55},0).wait(8).to({x:2218.5},0).wait(1).to({x:2247.55},0).wait(1).to({x:2276.6},0).wait(1).to({x:2305.65},0).wait(1).to({x:2334.75},0).wait(1).to({x:2363.8},0).wait(1).to({x:2392.85},0).wait(1).to({x:2421.95},0).wait(1).to({x:2451},0).wait(1).to({x:2480.05},0).wait(1).to({x:2509.15},0).wait(1).to({x:2538.2},0).wait(1).to({x:2567.25},0).wait(1).to({x:2596.3},0).wait(1).to({x:2625.4},0).wait(1).to({x:2654.45},0).wait(1).to({x:2683.5},0).wait(1).to({x:2712.6},0).wait(1).to({x:2741.65},0).wait(1).to({x:2770.7},0).wait(1).to({x:2799.75},0).wait(1).to({x:2828.85},0).wait(1).to({x:2857.9},0).wait(1).to({x:2886.95},0).wait(1));

	// cat
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(-309.25,508.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({x:333.85,y:692.25},19).to({startPosition:0},27).to({scaleX:1.1021,scaleY:1.0645,skewY:22.4995,x:520.1,y:563.15},2).to({scaleX:1.2552,scaleY:1.1611,skewY:56.2491,x:855,y:426.35},3).to({regX:0.2,regY:-0.1,scaleX:1.3573,scaleY:1.2255,skewY:78.751,x:1022.5,y:356.55},2).to({regX:0,regY:0.1,scaleX:1.4594,scaleY:1.29,skewY:101.2501,x:1197.3,y:341.4},2).to({regX:-0.1,scaleX:1.5615,scaleY:1.3544,skewY:123.7509,x:1378.55,y:284.35},2).to({regY:0.2,scaleX:1.6635,scaleY:1.4189,skewY:146.2508,x:1547.15,y:312.2},2).to({regX:0,regY:0,scaleX:1.8168,scaleY:1.5156,skewY:180,x:1823.3,y:639.1},3).to({startPosition:0},12).to({scaleX:0.8082,scaleY:0.7028,x:796.4},26).to({regX:-0.1,regY:0.1,x:704.95,y:605.7},2).to({regX:-0.2,x:669.4,y:571.3},2).to({regX:0,regY:0,x:632.15,y:639.1},3).to({startPosition:0},36).to({scaleX:0.7507,skewY:102.8561,y:639.15},3).to({regX:-0.1,scaleX:0.6741,skewY:0,x:632.1,y:639.1},4).to({y:149.1},7).to({y:639.1},7).to({regX:0,scaleX:0.7056,skewY:180,x:631.9},3).to({x:-453.85,y:694.75},9).to({_off:true},1).wait(149));

	// mouse
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(-143.4,945.2,1,1,0,0,0,128.6,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-114.3,y:943.25},0).wait(1).to({x:-85.2,y:941.3},0).wait(1).to({x:-56.1,y:939.35},0).wait(1).to({x:-27,y:937.45},0).wait(1).to({x:2.1,y:935.5},0).wait(1).to({x:31.2,y:933.55},0).wait(1).to({x:60.25,y:931.65},0).wait(1).to({x:89.35,y:929.7},0).wait(1).to({x:118.45,y:927.75},0).wait(1).to({x:147.5,y:925.85},0).wait(1).to({x:176.6,y:923.9},0).wait(1).to({x:205.7,y:921.95},0).wait(1).to({x:234.75,y:920.05},0).wait(1).to({x:263.85,y:918.1},0).wait(1).to({x:292.95,y:916.15},0).wait(1).to({x:322.05,y:914.25},0).wait(1).to({x:351.15,y:912.3},0).wait(1).to({x:380.25,y:910.35},0).wait(1).to({x:409.35,y:908.45},0).wait(1).to({x:438.4,y:906.5},0).wait(1).to({x:467.5,y:904.55},0).wait(1).to({x:496.6,y:902.6},0).wait(1).to({x:525.7,y:900.7},0).wait(1).to({x:554.8,y:898.75},0).wait(1).to({x:583.9,y:896.8},0).wait(1).to({x:612.95,y:894.9},0).wait(1).to({x:642.05,y:892.95},0).wait(1).to({x:671.15,y:891},0).wait(1).to({x:700.25,y:889.1},0).wait(1).to({x:729.35,y:887.15},0).wait(1).to({x:758.45,y:885.2},0).wait(1).to({x:787.5,y:883.3},0).wait(1).to({x:816.6,y:881.35},0).wait(1).to({x:845.7,y:879.4},0).wait(1).to({x:874.8,y:877.5},0).wait(1).to({x:903.9,y:875.55},0).wait(1).to({x:933,y:873.6},0).wait(1).to({x:962.1,y:871.7},0).wait(2).to({scaleX:0.7787},0).wait(1).to({scaleX:0.5574,x:962.05},0).wait(1).to({scaleX:0.336},0).wait(1).to({scaleX:0.1147},0).wait(1).to({scaleX:0.1066,skewY:180},0).wait(1).to({scaleX:0.3279},0).wait(1).to({scaleX:0.5493,x:962},0).wait(1).to({scaleX:0.7706},0).wait(1).to({scaleX:0.9919},0).wait(1).to({regX:128.5,scaleX:0.9592,x:962.05},0).wait(1).to({regX:128.6,x:961.95},0).wait(6).to({regX:128.5,x:962.05},0).wait(1).to({regX:128.6,x:943.55,y:852.95},0).wait(1).to({x:925.2,y:834.25},0).wait(1).to({x:906.85,y:815.55},0).wait(1).to({x:888.5,y:796.85},0).wait(1).to({x:870.15,y:778.15},0).wait(1).to({x:851.8,y:759.45},0).wait(1).to({x:833.45,y:740.75},0).wait(1).to({x:810.8,y:762.15},0).wait(1).to({x:788.15,y:783.55},0).wait(1).to({x:765.5,y:805},0).wait(1).to({x:742.85,y:826.4},0).wait(1).to({x:720.2,y:847.8},0).wait(1).to({x:697.55,y:869.25},0).wait(6).to({y:833.75},0).wait(1).to({y:798.3},0).wait(1).to({y:762.85},0).wait(1).to({y:727.35},0).wait(1).to({y:691.9},0).wait(1).to({y:656.45},0).wait(1).to({y:684.05},0).wait(1).to({y:711.7},0).wait(1).to({y:739.35},0).wait(1).to({y:766.95},0).wait(1).to({y:794.6},0).wait(1).to({y:822.25},0).wait(1).to({y:849.9},0).wait(1).to({scaleX:0.6394},0).wait(1).to({scaleX:0.3196,x:697.6},0).wait(1).to({scaleX:0.0002,skewY:0},0).wait(1).to({scaleX:0.3199,x:697.65},0).wait(1).to({scaleX:0.6397},0).wait(1).to({scaleX:0.9595,x:697.75},0).wait(1).to({x:733.6,y:847.2},0).wait(1).to({x:769.45,y:844.5},0).wait(1).to({x:805.35,y:841.8},0).wait(1).to({x:841.2,y:839.1},0).wait(1).to({x:877.1,y:836.45},0).wait(1).to({x:912.95,y:833.75},0).wait(1).to({x:948.85,y:831.05},0).wait(1).to({x:984.7,y:828.35},0).wait(1).to({x:1020.6,y:825.7},0).wait(1).to({x:1056.45,y:823},0).wait(1).to({x:1092.3,y:820.3},0).wait(1).to({x:1128.2,y:817.6},0).wait(1).to({x:1164.05,y:814.9},0).wait(1).to({x:1199.95,y:812.25},0).wait(1).to({x:1235.8,y:809.55},0).wait(1).to({x:1271.7,y:806.85},0).wait(1).to({x:1307.55,y:804.15},0).wait(1).to({x:1343.45,y:801.5},0).wait(1).to({y:773.9},0).wait(1).to({y:746.35},0).wait(1).to({y:718.75},0).wait(1).to({y:691.2},0).wait(1).to({y:663.65},0).wait(1).to({scaleX:0.5681,x:1343.4,y:694.6},0).wait(1).to({scaleX:0.1767,x:1343.3,y:725.55},0).wait(1).to({scaleX:0.2147,skewY:180,y:756.5},0).wait(1).to({scaleX:0.6061,x:1343.25,y:787.45},0).wait(1).to({regX:128.3,scaleX:0.9975,x:1343.35,y:818.4},0).wait(1).to({regX:128.6,scaleX:0.9684,scaleY:0.9709,x:1315,y:813.75},0).wait(1).to({scaleX:0.9392,scaleY:0.9419,x:1286.95,y:809.15},0).wait(1).to({scaleX:0.9101,scaleY:0.9128,x:1258.9,y:804.55},0).wait(1).to({scaleX:0.8809,scaleY:0.8837,x:1230.85,y:799.95},0).wait(1).to({scaleX:0.8518,scaleY:0.8547,x:1202.8,y:795.35},0).wait(1).to({scaleX:0.8226,scaleY:0.8256,x:1174.75,y:790.7},0).wait(1).to({scaleX:0.7934,scaleY:0.7966,x:1146.7,y:786.15},0).wait(1).to({scaleX:0.7643,scaleY:0.7675,x:1118.65,y:781.5},0).wait(1).to({scaleX:0.7351,scaleY:0.7384,x:1090.6,y:776.9},0).wait(1).to({scaleX:0.706,scaleY:0.7094,x:1062.55,y:772.3},0).wait(1).to({scaleX:0.6768,scaleY:0.6803,x:1034.5,y:767.7},0).wait(1).to({scaleX:0.6477,scaleY:0.6512,x:1006.45,y:763.1},0).wait(1).to({scaleX:0.6185,scaleY:0.6222,x:978.4,y:758.5},0).wait(1).to({scaleX:0.5893,scaleY:0.5931,x:950.35,y:753.85},0).wait(1).to({scaleX:0.5602,scaleY:0.5641,x:922.35,y:749.3},0).wait(1).to({scaleX:0.531,scaleY:0.535,x:894.3,y:744.65},0).wait(1).to({scaleX:0.5019,scaleY:0.5059,x:866.25,y:740.05},0).wait(1).to({scaleX:0.4727,scaleY:0.4769,x:838.2,y:735.45},0).wait(1).to({scaleX:0.4436,scaleY:0.4478,x:810.15,y:730.85},0).wait(1).to({scaleX:0.4144,scaleY:0.4187,x:782.1,y:726.25},0).wait(1).to({scaleX:0.3852,scaleY:0.3897,x:754.05,y:721.65},0).wait(1).to({scaleX:0.3561,scaleY:0.3606,x:726,y:717},0).wait(1).to({scaleX:0.3269,scaleY:0.3316,x:697.95,y:712.45},0).wait(1).to({scaleX:0.2978,scaleY:0.3025,x:669.9,y:707.8},0).wait(1).to({scaleX:0.2686,scaleY:0.2734,x:641.85,y:703.25},0).wait(1).to({scaleX:0.2395,scaleY:0.2444,x:613.8,y:698.6},0).wait(1).to({scaleX:0.2103,scaleY:0.2153,x:585.75,y:694},0).wait(1).to({scaleX:0.1811,scaleY:0.1862,x:557.7,y:689.4},0).wait(1).to({scaleX:0.152,scaleY:0.1572,x:529.65,y:684.8},0).wait(1).to({scaleX:0.1228,scaleY:0.1281,x:501.6,y:680.15},0).wait(1).to({scaleX:0.0937,scaleY:0.0991,x:473.6,y:675.6},0).wait(1).to({scaleX:0.0645,scaleY:0.07,x:445.55,y:670.95},0).wait(1).to({scaleX:0.0354,scaleY:0.0409,x:417.5,y:666.4},0).wait(1).to({scaleX:0.0062,scaleY:0.0119,x:389.45,y:661.75},0).to({_off:true},1).wait(112).to({_off:false,regX:126.7,regY:79.3,scaleX:0.03,scaleY:0.0681,skewY:0,x:394.95,y:668.15},0).wait(1).to({regX:128.6,regY:80.2,scaleX:0.0624,scaleY:0.1039,x:409.9,y:676.35},0).wait(1).to({scaleX:0.0948,scaleY:0.1398,x:424.8,y:684.5},0).wait(1).to({scaleX:0.1272,scaleY:0.1756,x:439.7,y:692.65},0).wait(1).to({scaleX:0.1596,scaleY:0.2115,x:454.65,y:700.8},0).wait(1).to({scaleX:0.192,scaleY:0.2473,x:469.5,y:709},0).wait(1).to({scaleX:0.2245,scaleY:0.2832,x:484.4,y:717.1},0).wait(1).to({scaleX:0.2569,scaleY:0.319,x:499.35,y:725.3},0).wait(1).to({scaleX:0.2893,scaleY:0.3548,x:514.25,y:733.45},0).wait(1).to({scaleX:0.3217,scaleY:0.3907,x:529.15,y:741.6},0).wait(1).to({scaleX:0.3541,scaleY:0.4265,x:544.05,y:749.75},0).wait(1).to({scaleX:0.3865,scaleY:0.4624,x:558.95,y:757.95},0).wait(1).to({scaleX:0.4189,scaleY:0.4982,x:573.85,y:766.05},0).wait(1).to({scaleX:0.4513,scaleY:0.5341,x:588.8,y:774.25},0).wait(1).to({scaleX:0.4837,scaleY:0.5699,x:603.7,y:782.4},0).wait(1).to({scaleX:0.5162,scaleY:0.6057,x:618.6,y:790.55},0).wait(1).to({scaleX:0.5486,scaleY:0.6416,x:633.5,y:798.7},0).wait(1).to({scaleX:0.581,scaleY:0.6774,x:648.4,y:806.9},0).wait(1).to({scaleX:0.6134,scaleY:0.7133,x:663.35,y:815},0).wait(1).to({scaleX:0.6458,scaleY:0.7491,x:678.25,y:823.2},0).wait(1).to({scaleX:0.6782,scaleY:0.7849,x:693.1,y:831.35},0).wait(1).to({scaleX:0.7106,scaleY:0.8208,x:708.05,y:839.5},0).wait(1).to({scaleX:0.743,scaleY:0.8566,x:722.95,y:847.65},0).wait(1).to({scaleX:0.7754,scaleY:0.8925,x:737.85,y:855.85},0).wait(1).to({scaleX:0.8078,scaleY:0.9283,x:752.75,y:863.95},0).wait(1).to({scaleX:0.8403,scaleY:0.9642,x:767.65,y:872.15},0).wait(1).to({scaleX:0.8727,scaleY:1,x:782.55,y:880.3},0).wait(1).to({x:814.6},0).wait(1).to({x:846.6},0).wait(1).to({x:878.65},0).wait(1).to({x:910.7},0).wait(1).to({x:942.7},0).wait(1).to({x:974.75},0).wait(1).to({x:1006.75},0).wait(1).to({x:1038.8},0).wait(1).to({x:1070.85},0).wait(1).to({x:1102.85},0).wait(1).to({x:1134.9},0).wait(1).to({x:1166.95},0).wait(1).to({x:1198.95},0).wait(1).to({x:1231},0).wait(1).to({x:1263},0).wait(1).to({x:1295.05},0).wait(1).to({x:1327.1},0).wait(1).to({x:1359.1},0).wait(1).to({x:1391.15},0).wait(1).to({x:1423.2},0).wait(1).to({x:1455.2},0).wait(1).to({x:1487.25},0).wait(1).to({x:1519.3},0).wait(1).to({x:1551.3},0).wait(1).to({x:1583.35},0).wait(1).to({x:1615.35},0).wait(1).to({x:1647.4},0).wait(6).to({scaleX:0.5699,x:1646.85},0).wait(1).to({scaleX:0.2671,x:1646.25},0).wait(1).to({scaleX:0.0356,skewY:180,x:1645.65},0).wait(1).to({scaleX:0.3384,x:1645.1},0).wait(1).to({scaleX:0.6411,x:1644.45},0).wait(1).to({scaleX:0.9439,x:1643.85},0).wait(17).to({x:1671.95},0).wait(1).to({x:1700},0).wait(1).to({x:1728.05},0).wait(1).to({x:1756.15},0).wait(1).to({x:1784.2},0).wait(1).to({x:1812.25},0).wait(1).to({x:1840.35},0).wait(1).to({x:1868.4},0).wait(1).to({x:1896.45},0).wait(1).to({x:1924.55},0).wait(1).to({x:1952.6},0).wait(1).to({x:1980.65},0).wait(1).to({x:2008.75},0).wait(1).to({x:2036.8},0).wait(1).to({x:2064.85},0).wait(1).to({x:2092.95},0).wait(1).to({x:2121},0).wait(1).to({x:2149.05},0).wait(1).to({x:2177.15},0).wait(1).to({x:2205.2},0).wait(1).to({x:2233.25},0).wait(1).to({x:2261.35},0).wait(1).to({x:2289.4},0).wait(1).to({x:2317.45},0).wait(1));

	// Слой_1
	this.instance_3 = new lib.фонpngкопия2();
	this.instance_3.setTransform(0,0,0.2306,0.229);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(373));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(373.9,347.1,3116.2999999999997,932.1);
// library properties:
lib.properties = {
	id: '770F502030492848A7D26B8D24A78336',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фонpngкопия2.png?1698183113592", id:"фонpngкопия2"},
		{src:"images/2 _1__atlas_1.png?1698183113544", id:"2 _1__atlas_1"},
		{src:"images/2 _1__atlas_2.png?1698183113544", id:"2 _1__atlas_2"}
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
an.compositions['770F502030492848A7D26B8D24A78336'] = {
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