import * as e from "three/webgpu";
import { Color as t, DoubleSide as n, LOD as r, Matrix4 as i, MeshBasicMaterial as a } from "three/webgpu";
import { createContext as o, useEffect as s, useId as c, useReducer as l, useRef as u } from "react";
import { OrbitControls as d } from "three/examples/jsm/controls/OrbitControls.js";
import { HDRLoader as f } from "three/examples/jsm/loaders/HDRLoader.js";
import { Fn as p, If as m, add as h, attribute as g, bumpMap as _, cos as v, drawIndex as y, float as b, floor as x, fract as S, instanceIndex as C, instancedBufferAttribute as w, int as T, ivec2 as E, mat4 as ee, mix as D, mrt as te, normalLocal as O, normalMap as ne, normalView as re, output as k, pass as A, positionLocal as ie, rand as ae, reference as oe, renderOutput as se, screenCoordinate as ce, sin as le, smoothstep as ue, tangentLocal as de, texture as fe, textureLoad as j, textureSize as pe, uniform as M, uv as me, varying as he, vec2 as N, vec3 as ge, vec4 as P } from "three/tsl";
import { Fragment as _e, jsx as F, jsxs as ve } from "react/jsx-runtime";
import { ArcballControls as ye } from "three/examples/jsm/controls/ArcballControls.js";
import { DragControls as be } from "three/examples/jsm/controls/DragControls.js";
import { FirstPersonControls as xe } from "three/examples/jsm/controls/FirstPersonControls.js";
import { FlyControls as Se } from "three/examples/jsm/controls/FlyControls.js";
import { MapControls as Ce } from "three/examples/jsm/controls/MapControls.js";
import { PointerLockControls as I } from "three/examples/jsm/controls/PointerLockControls.js";
import { TrackballControls as we } from "three/examples/jsm/controls/TrackballControls.js";
import { TransformControls as Te } from "three/examples/jsm/controls/TransformControls.js";
import { bloom as Ee } from "three/examples/jsm/tsl/display/BloomNode.js";
import { ao as De } from "three/examples/jsm/tsl/display/GTAONode.js";
import { outline as Oe } from "three/examples/jsm/tsl/display/OutlineNode.js";
import { dof as ke } from "three/examples/jsm/tsl/display/DepthOfFieldNode.js";
import { dotScreen as Ae } from "three/examples/jsm/tsl/display/DotScreenNode.js";
import { rgbShift as je } from "three/examples/jsm/tsl/display/RGBShiftNode.js";
import { fxaa as Me } from "three/examples/jsm/tsl/display/FXAANode.js";
import { anaglyphPass as Ne } from "three/examples/jsm/tsl/display/AnaglyphPassNode.js";
import { parallaxBarrierPass as Pe } from "three/examples/jsm/tsl/display/ParallaxBarrierPassNode.js";
import { stereoPass as Fe } from "three/examples/jsm/tsl/display/StereoPassNode.js";
import { RoundedBoxGeometry as Ie } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { ConvexGeometry as Le } from "three/examples/jsm/geometries/ConvexGeometry.js";
import { DecalGeometry as Re } from "three/examples/jsm/geometries/DecalGeometry.js";
import { ParametricGeometry as ze } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { TextGeometry as Be } from "three/examples/jsm/geometries/TextGeometry.js";
import { TeapotGeometry as Ve } from "three/examples/jsm/geometries/TeapotGeometry.js";
import { BoxLineGeometry as He } from "three/examples/jsm/geometries/BoxLineGeometry.js";
import { LoftGeometry as Ue } from "three/examples/jsm/geometries/LoftGeometry.js";
import { Line2 as We } from "three/examples/jsm/lines/webgpu/Line2.js";
import { LineSegments2 as Ge } from "three/examples/jsm/lines/webgpu/LineSegments2.js";
import { Wireframe as Ke } from "three/examples/jsm/lines/webgpu/Wireframe.js";
import { LineGeometry as qe } from "three/examples/jsm/lines/LineGeometry.js";
import { LineSegmentsGeometry as Je } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { WireframeGeometry2 as Ye } from "three/examples/jsm/lines/WireframeGeometry2.js";
import { NURBSCurve as Xe } from "three/examples/jsm/curves/NURBSCurve.js";
import { NURBSSurface as Ze } from "three/examples/jsm/curves/NURBSSurface.js";
import { GLTFExporter as Qe } from "three/examples/jsm/exporters/GLTFExporter.js";
import { OBJExporter as $e } from "three/examples/jsm/exporters/OBJExporter.js";
import { PLYExporter as et } from "three/examples/jsm/exporters/PLYExporter.js";
import { STLExporter as tt } from "three/examples/jsm/exporters/STLExporter.js";
import { strFromU8 as nt, strToU8 as rt, unzipSync as it, zipSync as at } from "three/examples/jsm/libs/fflate.module.js";
import { VTKLoader as ot } from "three/examples/jsm/loaders/VTKLoader.js";
import { MD2Loader as st } from "three/examples/jsm/loaders/MD2Loader.js";
import { FBXLoader as ct } from "three/examples/jsm/loaders/FBXLoader.js";
import { VRMLLoader as lt } from "three/examples/jsm/loaders/VRMLLoader.js";
import { AMFLoader as ut } from "three/examples/jsm/loaders/AMFLoader.js";
import { ThreeMFLoader as dt } from "three/examples/jsm/loaders/3MFLoader.js";
import { ColladaLoader as ft } from "three/examples/jsm/loaders/ColladaLoader.js";
import { PLYLoader as pt } from "three/examples/jsm/loaders/PLYLoader.js";
import { STLLoader as mt } from "three/examples/jsm/loaders/STLLoader.js";
import { OBJLoader as ht } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader as gt } from "three/examples/jsm/loaders/MTLLoader.js";
import { SVGLoader as _t } from "three/examples/jsm/loaders/SVGLoader.js";
import { KMZLoader as vt } from "three/examples/jsm/loaders/KMZLoader.js";
import { TDSLoader as yt } from "three/examples/jsm/loaders/TDSLoader.js";
import { GLTFLoader as bt } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader as xt } from "three/examples/jsm/loaders/KTX2Loader.js";
import { DRACOLoader as St } from "three/examples/jsm/loaders/DRACOLoader.js";
import { VOXLoader as Ct } from "three/examples/jsm/loaders/VOXLoader.js";
import { MeshoptDecoder as wt } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import * as Tt from "three/examples/jsm/utils/BufferGeometryUtils.js";
//#region \0rolldown/runtime.js
var Et = Object.defineProperty, Dt = (e, t) => {
	let n = {};
	for (var r in e) Et(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Et(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ot = function(t) {
	if (!t) {
		console.error("Animator: cannot be created without scene");
		return;
	}
	this.mixer = new e.AnimationMixer(t), this.update = function(e) {
		this.mixer.update(e);
	}, this.addAnimation = function(e, t) {
		t.length > 0 && (e.animations = t);
	}, this.createActions = function(e) {
		let t = {}, n = e.animations;
		if (n !== void 0) {
			for (let r of n) t[r.name] = this.mixer.clipAction(r, e), e.activeAction ||= t[r.name];
			return t;
		}
	}, this.playAction = function(t, n, r) {
		if (!t || !t.animations || t.animations.length === 0) return;
		n = n === void 0 ? t.animations[0] : n, r ||= {};
		let i = r.duration || 1, a = r.loopMode || e.LoopRepeat, o = r.repetitions || Infinity, s = r.combine || "crossFade";
		if (s == "crossFade") {
			let e = t.activeAction, r = this.mixer.clipAction(n, t);
			return r ? (r.enabled = !0, r.setLoop(a, o), e ? (e.enabled = !0, e.crossFadeTo(r, i).play()) : r.play(), t.activeAction = r, r) : void 0;
		} else if (s === "overlap") {
			let e = this.mixer.clipAction(n, t);
			return e.play(), t.activeAction = e, e;
		}
	}, this.playNextAction = function(e) {
		if (!e) return;
		let t = e.animations;
		if (t !== void 0 && t.length > 0) {
			let n = -1;
			if (e.activeAction) {
				let r = e.activeAction.getClip();
				n = t.indexOf(r);
			}
			n = ~~((n + 1) % t.length);
			let r = t[n];
			e.activeAction = this.playAction(e, r), console.log(">> playAction: \"" + r.name + "\"");
		}
	}, this.stopAction = function(e, t) {
		if (e && t) {
			let n = this.mixer.clipAction(t, e);
			n.enabled = !0, n.stop();
		} else if (e && !t) {
			let t = e.activeAction;
			t && (t.enabled = !0, t.stop());
		}
	}, this.stopAllActions = function() {
		this.mixer.stopAllAction();
	};
}, kt = class {
	constructor(t, n, r, i) {
		this.renderer = t, this.scene = n, this.camera = r, this.sceneHelpers = i, this.passes = [], this.effect = null, this.scenePass = null, this.pipeline = new e.RenderPipeline(t), this._warned = /* @__PURE__ */ new Set(), this.rebuild();
	}
	addPass(e) {
		this.passes.push(e), this.rebuild();
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), this.rebuild();
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && (this.passes.splice(t, 1), this.rebuild());
	}
	setSize() {}
	setScene(e) {
		this.scene = e, this.passes.forEach((t) => {
			t.scene &&= e;
		}), this.effect?.scene && (this.effect.scene = e), this.rebuild();
	}
	setCamera(e) {
		this.camera = e, this.passes.forEach((t) => {
			t.camera &&= e;
		}), this.effect?.camera && (this.effect.camera = e), this.rebuild();
	}
	setEffect(e) {
		this.effect = e, this.rebuild();
	}
	rebuild() {
		this.pipeline.outputColorTransform = !0;
		let e = {
			scene: this.scene,
			camera: this.camera,
			pipeline: this
		};
		if (this.effect && this.effect.setupRoot) {
			this.scenePass = null, this.pipeline.outputNode = this.effect.setupRoot(e), this.pipeline.needsUpdate = !0;
			return;
		}
		let t = A(this.scene, this.camera);
		this.scenePass = t, this._drawHelpersWithScene(t), this.passes.some((e) => e.requiresNormalMRT && e.enabled !== !1) && t.setMRT(te({
			output: k,
			normal: re
		})), e.scenePass = t;
		let n = t.getTextureNode();
		for (let t of this.passes) t.enabled !== !1 && (typeof t.setup == "function" ? (e.color = n, n = t.setup(e)) : this._warned.has(t.constructor.name) || (this._warned.add(t.constructor.name), console.warn(`ThreefyPipeline: '${t.constructor.name}' is a WebGL-only pass and was ignored (WebGPU needs a TSL-based pass)`)));
		this.pipeline.outputNode = n, this.pipeline.needsUpdate = !0;
	}
	_drawHelpersWithScene(e) {
		let t = e.updateBefore.bind(e);
		e.updateBefore = (n) => {
			if (t(n), !(this.sceneHelpers?.children.length > 0)) return;
			let { renderer: r } = n, i = r.getRenderTarget(), a = r.getMRT(), o = r.autoClear;
			r.setRenderTarget(e.renderTarget), r.setMRT(null), r.autoClear = !1, r.render(this.sceneHelpers, this.camera), r.setRenderTarget(i), r.setMRT(a), r.autoClear = o;
		};
	}
	render(e) {
		this.passes.forEach((t) => t.update?.(e)), this.effect?.update?.(e), this.pipeline.render();
	}
	dispose() {
		this.pipeline.dispose();
	}
}, At = class t {
	static loadingManager = new e.LoadingManager();
	static textureLoader = new e.TextureLoader(t.loadingManager);
	static cubeTexLoader = new e.CubeTextureLoader(t.loadingManager);
	static hdrLoader = new f(t.loadingManager);
	static audioLoader = new e.AudioLoader(t.loadingManager);
	constructor(e = {}) {
		this.width = e.width || window.innerWidth, this.height = e.height || window.innerHeight, this.widthRatio = this.width / window.innerWidth, this.heightRatio = this.height / window.innerHeight, this.dom = e.dom || document.createElement("div"), e.dom || document.body.appendChild(this.dom), this.dom.tabIndex = "0", this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.scene = void 0, this.camera = void 0, this.renderer = void 0, this.renderCallbacks = void 0, this.timer = void 0, this.controls = void 0, this.animator = void 0, this.pipeline = void 0, this.sceneHelpers = void 0, this.dragControls = void 0, this.transformControls = void 0, this.effect = void 0, this.loadingManager = t.loadingManager;
	}
	init() {
		return this.scene = new e.Scene(), this.sceneHelpers = new e.Scene(), this.sceneHelpers.name = "sceneHelpers", this.camera = new e.PerspectiveCamera(60, this.width / this.height, .1, 5e3), this.camera.position.z = 50, this.renderer = this.createRenderer(void 0), this.renderer.setSize(this.width, this.height), this.dom.appendChild(this.renderer.domElement), this.ready = this.renderer.init(), this.renderCallbacks = [], this.timer = new e.Timer(), this.controls = new d(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .075, this.animator = new Ot(this.scene), this.raycaster = new e.Raycaster(), this.selectedObject = null, this.selectedObjects = [], this.mouseDowned = !1, this._onDocumentMouseUp = (e) => this.onMouseUp(e), this.mouseDownPosition = new e.Vector2(), this.mouseUpPosition = new e.Vector2(), this.mouseMovePosition = new e.Vector2(), this.mouseClickPosition = new e.Vector2(), this.mouseDoubleClickPosition = new e.Vector2(), this.createRenderPipeline(), this.createBackground(), window.addEventListener("resize", () => this.onResize(), !1), this.dom.addEventListener("click", (e) => this.onClick(e), !1), this.dom.addEventListener("dblclick", (e) => this.onDoubleClick(e), !1), this.dom.addEventListener("mousemove", (e) => this.onMouseMove(e), !1), this.dom.addEventListener("mousedown", (e) => this.onMouseDown(e), !1), this.dom.addEventListener("wheel", (e) => this.onWheel(e), { passive: !0 }), this.dom.addEventListener("contextmenu", (e) => this.onContextMenu(e), !1), this.dom.addEventListener("pointermove", (e) => this.onPointerMove(e), !1), this.dom.addEventListener("pointerdown", (e) => this.onPointerDown(e), !1), this.dom.addEventListener("pointerup", (e) => this.onPointerUp(e), !1), this.dom.addEventListener("keydown", (e) => this.onKeyDown(e), !1), this.dom.addEventListener("keyup", (e) => this.onKeyUp(e), !1), this.keyDownCallbacks = [], this.keyUpCallbacks = [], this._cache = /* @__PURE__ */ new Map(), this;
	}
	dispose(t) {
		let n = (t) => {
			if (Array.isArray(t)) {
				t.forEach((e) => n(e));
				return;
			}
			Object.values(t).filter((t) => t instanceof e.Texture).forEach((e) => e.dispose()), t.uniforms && Object.values(t.uniforms).filter(({ value: t }) => t instanceof e.Texture).forEach(({ value: e }) => e.dispose()), t.dispose();
		}, r = (t) => {
			t.geometry && t.geometry.dispose(), t.material && n(t.material), Object.values(t).filter((t) => t instanceof e.Texture).forEach((e) => e.dispose());
		};
		t instanceof e.BufferGeometry ? t.dispose() : t instanceof e.Material ? n(t) : t instanceof e.Texture ? t.dispose() : t instanceof e.Object3D && (t.traverse && t.traverse((e) => r(e)), r(t));
	}
	setScene(t) {
		let n = this.scene.background;
		this.scene = t, this.scene.background = n, this.animator = new Ot(t), this.animator.mixer = new e.AnimationMixer(t), this.pipeline.setScene(t);
	}
	setCamera(e) {
		this.camera = e, this.controls.object = e, this.pipeline.setCamera(e), e.updateProjectionMatrix();
	}
	setEffect(e) {
		this.effect?.dispose?.(), this.effect = e, this.effect.setSize(this.width, this.height), this.pipeline.setEffect(e?.isThreefyEffect ? e : null);
	}
	setControls(e) {
		let t = e.constructor.name;
		if (t === "DragControls") {
			this._setDragControls(e);
			return;
		} else if (t === "TransformControls") {
			this._setTransformControls(e);
			return;
		} else t === "PointerLockControls" && this._setPointerLockControls(e);
		this.controls.dispose(), this.controls = e;
	}
	_setDragControls(t) {
		let n = this;
		this.dragControls = t, t._dummyPosition = new e.Vector3(), t.addEventListener("dragstart", function(e) {
			if (this.enabled) {
				let t = e.object;
				t !== void 0 && (t.getWorldPosition(this._dummyPosition), n.controls.enabled = !1, n.select(t));
			}
		}), t.addEventListener("dragend", function(e) {
			if (this.enabled) {
				let t = e.object;
				if (t !== void 0) {
					let e = this._dummyPosition.clone();
					t.getWorldPosition(this._dummyPosition);
					let n = this._dummyPosition.sub(e), r = n.length(), i = n.x.toFixed(2), a = n.y.toFixed(2), o = n.z.toFixed(2);
					console.log(`movement vector: (${i}, ${a}, ${o}), its length: ${r.toFixed(2)}`);
				}
				n.controls.enabled = !0;
			}
		});
	}
	_setPointerLockControls(e) {
		let t = e.blocker;
		if (!t) {
			t = document.createElement("div"), t.id = "blocker", t.innerHTML = "\n                    <div id=\"instructions\">\n                        <p style=\"font-size:36px\">\n                            Click to play\n                        </p>\n                        <p>\n                            Move: WASD<br/>\n                            Jump: SPACE<br/>\n                            Look: MOUSE<br/>\n                            Stop: ESC\n                        </p>\n                    </div>\n                ", document.body.appendChild(t);
			let n = document.createElement("style");
			n.innerHTML = "\n                    #blocker {\n                        left: 0;\n                        top: 0;\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        color: white;\n                        background-color: rgba(0,0,0,0.5);\n                    }\n                    #instructions {\n                        width: 100%;\n                        height: 100%;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                        text-align: center;\n                        font-size: 14px;\n                        cursor: pointer;\n                    }\n                ", document.head.appendChild(n), e.blocker = t;
		}
		t.addEventListener("click", () => e.lock()), e.addEventListener("lock", () => t.style.display = "none"), e.addEventListener("unlock", () => t.style.display = "block"), document.addEventListener("keydown", (t) => e.onKeyDown(t)), document.addEventListener("keyup", (t) => e.onKeyUp(t));
	}
	_setTransformControls(e) {
		let t = this;
		this.transformControls = e, this.transformControls.setSize(.5), e.addEventListener("dragging-changed", function(e) {
			t.controls.enabled = !e.value;
		});
		let n = e.getHelper();
		this.sceneHelpers.add(n);
	}
	list(e) {
		let t = ((e) => {
			let t = /* @__PURE__ */ new Set(), n = e;
			for (; n && (Object.getOwnPropertyNames(n).map((e) => t.add(e)), n = Object.getPrototypeOf(n), n !== Object.prototype););
			return [...t.keys()];
		})(e);
		return {
			properties: t.filter((t) => typeof e[t] != "function"),
			methods: t.filter((t) => typeof e[t] == "function")
		};
	}
	get(e) {
		if (arguments.length > 1) {
			let e = [];
			for (let t = 0; t < arguments.length; t++) e.push(this.get(arguments[t]));
			return e;
		}
		let t, n = e.replace("[", ".").replace("]", "").split(".").map((e) => isNaN(e) ? e : ~~e).reduce((e, n) => {
			if (e && e[n]) return t = e, e[n];
		}, this);
		return typeof n == "function" ? n.bind(t) : n;
	}
	set(t, n) {
		let r = (t, r) => {
			r === "map" || r === "matcap" || r === "emissiveMap" ? t.colorSpace = e.SRGBColorSpace : r === "envMap" ? /hdr|exr/i.test(n.split(".").pop()) ? t.colorSpace = e.LinearSRGBColorSpace : t.colorSpace = e.SRGBColorSpace : t.colorSpace = e.NoColorSpace;
		}, i = (t, n, i) => {
			typeof t[n] == "function" ? Array.isArray(i) ? t[n](...i) : t[n](i) : ((e, t) => e && (e.isColor || e.isEuler || e.isQuaternion || e.isVector2 || e.isVector3 || e.isVector4) ? (typeof t == "number" ? e.setScalar(t) : e.set(...t), !0) : !1)(t[n], i) || (typeof i == "string" && H.includes(n) ? t[n] = new e.TextureLoader().load(i, (e) => {
				r(e, n);
			}) : t[n] = i);
		};
		if (typeof t == "object" && n && Object.getPrototypeOf(n) === Object.prototype) {
			Object.keys(n).forEach((e) => {
				i(t, e, n[e]);
			});
			return;
		}
		if (Object.getPrototypeOf(t) === Object.prototype) {
			let e = this;
			Object.keys(t).forEach((n) => e.set(n, t[n]));
			return;
		}
		if (Object.getPrototypeOf(n) === Object.prototype) {
			let e = this;
			Object.keys(n).forEach((r) => {
				let i = t + "." + r, a = n[r];
				e.set(i, a);
			});
			return;
		}
		let a = !0;
		switch (t) {
			case "scene":
				this.setScene(n);
				break;
			case "camera":
				this.setCamera(n);
				break;
			case "camera.near":
			case "camera.far":
			case "camera.fov":
				let e = t.split(".")[1];
				this.camera[e] = n, this.camera.updateProjectionMatrix();
				break;
			case "background":
			case "scene.background":
				this.createBackground(n);
				break;
			default:
				a = !1;
				break;
		}
		if (a) return;
		let o = t.replace("[", ".").replace("]", "").split(".").map((e) => isNaN(e) ? e : ~~e), s = o.length - 1;
		if (a = o.reduce((e, t, n) => {
			if (e) return n === s ? e : e[t] ? e[t] : void 0;
		}, this), !a) {
			console.warn(`${t} not found`);
			return;
		}
		let c = o.pop();
		i(a, c, n);
	}
	createRenderer(t) {
		let n = new e.WebGPURenderer({
			canvas: t,
			antialias: !0
		});
		return n.setPixelRatio(Math.min(window.devicePixelRatio, 2)), n.shadowMap.enabled = !0, n.shadowMap.type = e.PCFShadowMap, n.outputColorSpace = e.SRGBColorSpace, n.toneMapping = e.LinearToneMapping, n.toneMappingExposure = 1, n;
	}
	update(e, t) {
		this.controls?.update?.(t), this.animator?.update?.(t), this.scene.traverse((n) => {
			n.isLOD || n.update?.(t, e);
		}), this.sceneHelpers.traverse((n) => n.update?.(t, e));
	}
	render(e, t) {
		this.renderCallbacks.forEach((n) => n(e, this, t)), this.effect && !this.effect.isThreefyEffect ? this.effect.render(this.scene, this.camera) : this.pipeline ? this.pipeline.render(t) : (this.renderer.render(this.scene, this.camera), this.sceneHelpers.children.length > 0 && (this.renderer.autoClear = !1, this.renderer.render(this.sceneHelpers, this.camera), this.renderer.autoClear = !0));
	}
	async animate() {
		try {
			this.timer.update();
			let e = this.timer.getDelta(), t = this.timer.getElapsed();
			this.update(t, e), this.render(t, e), await this.renderer.backend?.device?.queue?.onSubmittedWorkDone?.(), this.controls.constructor.name === "PointerLockControls" && this.controls.animate(e, this.scene, this.raycaster);
		} catch (e) {
			console.error("Threefy.animate error:", e);
		} finally {
			this.animateID !== 0 && (this.animateID = window.requestAnimationFrame(this.animate.bind(this)));
		}
	}
	replayAnimate() {
		this.animateID === 0 && (this.animateID = window.requestAnimationFrame(this.animate.bind(this)), this.timer.reset(), this.controls.enabled = !0);
	}
	pauseAnimate(e) {
		if (this.animateID !== 0) {
			let { delayTime: t = 100, controlsEnabled: n = !1 } = e || {}, r = this;
			setTimeout(() => {
				window.cancelAnimationFrame(r.animateID), r.animateID = 0, r.controls.enabled = n;
			}, t);
		}
	}
	flushAnimate(e) {
		if (this.animateID === 0) {
			let { delayTime: t = 20 } = e || {};
			this.replayAnimate(), this.pauseAnimate({ delayTime: t });
		}
	}
	createRenderPipeline() {
		this.pipeline = new kt(this.renderer, this.scene, this.camera, this.sceneHelpers);
	}
	addPass(e) {
		e.isOutlinePass && (this.outlinePass = e), this.pipeline.addPass(e);
	}
	createBackground(t, n) {
		let r = this;
		if (t === "default.hdr" && (t = "images/hdr/death_valley_sand_dunes.hdr"), Array.isArray(t)) t.length === 6 && this.loadTexture(t, (t) => {
			t.mapping = e.CubeReflectionMapping, r.scene.background = t, r.scene.environment = t, r.scene.backgroundBlurriness = 0, n && n(t);
		}), t.length === 3 && (this.scene.background = new e.Color(...t));
		else if (typeof t == "string") {
			let i = t.split(".");
			i.length === 1 ? this.scene.background = new e.Color(t) : i.pop().toLowerCase() === "hdr" ? this.loadTexture(t, (t) => {
				t.mapping = e.EquirectangularReflectionMapping, r.scene.background = t, r.scene.environment = t, r.scene.backgroundBlurriness = 0, n && n(t);
			}) : this.loadTexture(t, (t) => {
				t.colorSpace = e.SRGBColorSpace, r.scene.background = t, n && n(t);
			});
		} else typeof t == "number" ? this.scene.background = new e.Color(t) : t?.isTexture || t?.isColor ? this.scene.background = t : this.scene.background = new e.Color(1644825);
	}
	onResize(e, t) {
		if (this.width = e || this.widthRatio * window.innerWidth, this.height = t || this.heightRatio * window.innerHeight, e && (this.widthRatio = e / window.innerWidth), t && (this.heightRatio = t / window.innerHeight), this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.camera.isPerspectiveCamera) this.camera.aspect = this.width / this.height;
		else if (this.camera.isOrthographicCamera) {
			let e = this.camera.top - this.camera.bottom, t = this.width / this.height;
			this.camera.left = -e * t / 2, this.camera.right = e * t / 2, this.camera.top = e / 2, this.camera.bottom = -e / 2;
		}
		this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.pipeline && this.pipeline.setSize(this.width, this.height), this.effect && this.effect.setSize(this.width, this.height), this.controls && this.controls.constructor.name === "TrackballControls" && this.controls.handleResize();
	}
	getLoaded(e) {
		let t = this._cache.get(e);
		return t?.[0] ? t[0] : void 0;
	}
	loadTexture(e, n) {
		let r = this._cache.get(e);
		return r || (Array.isArray(e) && e.length === 6 ? r = t.cubeTexLoader.load(e, (e) => {
			n && n(e);
		}) : (r = e.split(".").pop().toLowerCase() === "hdr" ? t.hdrLoader.load(e, (e) => {
			n && n(e);
		}) : t.textureLoader.load(e, (e) => {
			n && n(e);
		}), this._cache.set(e, r))), r;
	}
	getIntersects(e, t) {
		return this.raycaster.setFromCamera(e, this.camera), this.raycaster.intersectObjects(t, !0);
	}
	getIntersectObject(e, t) {
		if (e) {
			let t;
			switch (e.type) {
				case "click":
					t = this.mouseClickPosition;
					break;
				case "dblclick":
					t = this.mouseDoubleClickPosition;
					break;
				case "mousedown":
					t = this.mouseDownPosition;
					break;
				case "mouseup":
					t = this.mouseUpPosition;
					break;
				case "mousemove":
					t = this.mouseMovePosition;
					break;
				case "wheel":
					t = this.mouseMovePosition;
					break;
				case "contextmenu":
					t = this.mouseMovePosition;
					break;
				case "pointermove":
					t = this.mouseMovePosition;
					break;
				case "pointerdown":
					t = this.mouseMovePosition;
					break;
				case "pointerup":
					t = this.mouseMovePosition;
					break;
				default: return null;
			}
			let n = this.getIntersects(t, this.scene.children);
			if (n.length === 0) return null;
			{
				let e = n[0].object;
				return e.intersect = { ...n[0] }, e;
			}
		}
	}
	select(e, t, n) {
		if (e) {
			let r = e;
			if (t === "ancestor") {
				let t = this;
				e.traverseAncestors(function(e) {
					e.parent === t.scene && (r = e);
				}), this.selectedObjects = [r];
			} else if (t === "multiple") {
				let e = this.selectedObjects.indexOf(r);
				e === -1 ? this.selectedObjects.push(r) : this.selectedObjects.splice(e, 1);
			} else this.selectedObjects = [r];
			if (this.selectedObject = r, n) {
				let e = {
					click: "onClick",
					dblclick: "onDoubleClick",
					wheel: "onWheel",
					contextmenu: "onContextMenu",
					pointermove: "onPointerMove",
					pointerdown: "onPointerDown",
					pointerup: "onPointerUp"
				}[n.type];
				e && (e = r[e], e && e(n, r)), r.isPointerOver || (r.onPointerEnter && r.onPointerEnter(n, r), r.onPointerOver && r.onPointerOver(n, r), r.isPointerOver = !0);
			}
		} else {
			if (n) {
				let e = this.selectedObject;
				e && e.isPointerOver && (e.onPointerLeave && e.onPointerLeave(n, e), e.onPointerOut && e.onPointerOut(n, e), e.isPointerOver = !1);
			}
			this.selectedObject = null, this.selectedObjects = [];
		}
		this.transformControls && (this.selectedObject ? this.transformControls.attach(this.selectedObject) : this.transformControls.detach());
	}
	handleEvent(e) {
		let t;
		t = e instanceof PointerEvent ? this.selectedObject : this.getIntersectObject(e), t ? t.name === "picker" ? this.select(t.userData.object, "picker", e) : e.ctrlKey ? this.select(t, "multiple", e) : e.altKey ? this.select(t, "ancestor", e) : this.select(t, "itself", e) : this.select(null, "null", e);
	}
	onClick(e) {
		this.dom.focus(), this.onMouseDown(e), this.onMouseUp(e), this.outlinePass && this.outlinePass.followPointer !== !1 && this.outlinePass.pin(this.selectedObject);
	}
	onDoubleClick(e) {
		e.preventDefault(), this.mouseDoubleClickPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e);
	}
	getMousePosition(e) {
		let t = this.dom.getBoundingClientRect(), n, r;
		return e.changedTouches ? (n = e.changedTouches[0].clientX, r = e.changedTouches[0].clientY) : (n = e.clientX, r = e.clientY), n = (n - t.left) / t.width * 2 - 1, r = -((r - t.top) / t.height) * 2 + 1, [n, r];
	}
	onMouseMove(e) {
		this.mouseMovePosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), this.outlinePass && this.outlinePass.followPointer !== !1 && this.outlinePass.hover(this.selectedObject);
	}
	onMouseDown(e) {
		this.mouseDowned = !0, e.preventDefault(), this.mouseDownPosition.fromArray(this.getMousePosition(e)), document.addEventListener("mouseup", this._onDocumentMouseUp, !1);
	}
	onMouseUp(e) {
		this.mouseDowned && (this.mouseDowned = !1, e.preventDefault(), this.mouseUpPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), document.removeEventListener("mouseup", this._onDocumentMouseUp, !1));
	}
	onWheel(e) {
		this.handleEvent(e);
	}
	onContextMenu(e) {
		e.preventDefault(), this.handleEvent(e);
	}
	onPointerMove(e) {
		e.preventDefault(), this.handleEvent(e);
	}
	onPointerDown(e) {
		e.preventDefault(), this.handleEvent(e);
	}
	onPointerUp(e) {
		e.preventDefault(), this.handleEvent(e);
	}
	onKeyDown(e) {
		if (this.keyDownCallbacks.length > 0) {
			this.keyDownCallbacks.forEach((t) => t(e, this));
			return;
		}
		if (this.controls.constructor.name === "PointerLockControls") {
			this.controls.onKeyDown(e);
			return;
		}
		if (this.transformControls) {
			this.transformControls.onKeyDown(e);
			return;
		}
		e.stopPropagation();
		let t = e.ctrlKey;
		if (!(t && e.keyCode === 90) && !(t && e.keyCode === 89)) switch (e.keyCode) {
			case 8: e.preventDefault();
			case 27:
				this.controls.enabled = !0;
				break;
			case 46: break;
			case 49: break;
			case 50: break;
			case 66: break;
			case 68:
				jt(this);
				break;
			case 79:
				if (this.animator && this.selectedObject) {
					let e = this.selectedObject.activeAction;
					e && (e.paused = !e.paused);
				}
				break;
			case 80:
				this.animator && this.selectedObject && this.animator.playNextAction(this.selectedObject);
				break;
		}
	}
	onKeyUp(e) {
		if (this.keyUpCallbacks.length > 0) {
			this.keyUpCallbacks.forEach((t) => t(e, this));
			return;
		}
		if (this.controls.constructor.name === "PointerLockControls") {
			this.controls.onKeyUp(e);
			return;
		}
		if (this.transformControls) {
			this.transformControls.onKeyUp(e);
			return;
		}
		switch (e.preventDefault(), e.stopPropagation(), e.keyCode) {
			case 17:
				this.controls.enabled = !0;
				break;
			case 18: break;
		}
	}
}, jt = (e) => {
	console.log(e.scene);
}, Mt = /* @__PURE__ */ Dt({
	BatchedMaterial: () => Wt,
	CustomMaterial: () => Kt,
	MergedMaterial: () => Gt
}), Nt = {
	uvRange: "vec4",
	diffuse: "vec3",
	opacity: "float",
	emissive: "vec3",
	metalness: "float",
	roughness: "float",
	ior: "float",
	clearcoat: "float",
	clearcoatRoughness: "float",
	dispersion: "float",
	iridescence: "float",
	iridescenceIOR: "float",
	iridescenceThicknessMinimum: "float",
	iridescenceThicknessMaximum: "float",
	sheenColor: "vec3",
	sheenRoughness: "float",
	anisotropyVector: "vec2"
}, Pt = (e) => {
	if (!e) return;
	let { threefy: t } = J();
	return Object.keys(e).filter((e) => e.match(/(map|matcap|Map)$/)).forEach((n) => {
		typeof e[n] == "string" && (e[n] = t.loadTexture(e[n]));
	}), e;
}, Ft = (e) => {
	let t = /^(attach|castShadow|receiveShadow|position|rotation|scale)(-[xyz])?$/;
	return Object.keys(e).forEach((n) => {
		t.test(n) && delete e[n];
	}), e;
};
function It(e) {
	let t = parseFloat(e.replace(/[^1-4]/g, "")) || 1, n;
	switch (t) {
		case 1:
			n = "r";
			break;
		case 2:
			n = "rg";
			break;
		case 3:
			n = "rgb";
			break;
		case 4:
			n = "rgba";
			break;
	}
	return {
		type: e,
		dim: t,
		comp: n
	};
}
var Lt = {
	diffuse: [
		1,
		1,
		1
	],
	opacity: [1],
	ior: [1.5],
	roughness: [1],
	uvRange: [
		0,
		1,
		1,
		0
	]
}, Rt = class extends e.DataTexture {
	constructor(t, n) {
		let r = Object.entries(t).map(([e, t]) => ({
			name: e,
			...It(t)
		})), i = r.length, a = Math.sqrt(n * i);
		a = Math.ceil(a / i) * i, a = Math.max(a, i);
		let o = {};
		for (let e = 0, t = r.length; e < t; e++) o[r[e].name] = e;
		let s = new Float32Array(a * a * 4);
		for (let e = 0; e < n; e++) for (let t = 0; t < i; t++) {
			let n = Lt[r[t].name];
			n && s.set(n, (e * i + t) * 4);
		}
		super(s, a, a, e.RGBAFormat, e.FloatType), this.fields = r, this.fieldToIndex = o, this.needsUpdate = !0;
	}
	setValue(t, n, ...r) {
		let { fields: i, fieldToIndex: a, image: o } = this, s = i.length;
		if (!(n in a)) return;
		let c = a[n], l = i[c].dim, u = o.data, d = (t * s + c) * 4;
		l === 3 && r.length === 1 && (r = new e.Color(r[0]).toArray());
		for (let e = 0; e < l; e++) u[d + e] = r[e] || 0;
		this.needsUpdate = !0;
	}
	getNodes(e) {
		let { fields: t, image: n } = this, r = t.length, i = T(n.width), a = e.mul(r).toVar(), o = a.mod(i).toVar(), s = a.div(i).toVar(), c = {};
		return t.forEach((e, t) => {
			let n = j(this, E(o.add(t), s));
			c[e.name] = e.comp === "rgba" ? n : n[e.comp];
		}), c;
	}
}, zt = p(([e, t]) => {
	let n = T(pe(j(e), 0).x).toConst();
	return j(e, E(T(t).mod(n).toConst(), T(t).div(n).toConst())).x;
}), Bt = p((e, t) => {
	let n = t.object, r = t.getDrawIndex() === null ? C : y;
	return n && n.isBatchedMesh ? b(zt(n._indirectTexture, T(r))).add(.5) : b(r).add(.5);
}), Vt = () => T(he(Bt(), "vThreefyInstanceId")), Ht = (e, t, n) => {
	let r = (e, t, r) => {
		let i = n(t);
		return i ? e.mul(r ? i[r] : i) : e;
	};
	if (e.colorNode = r(P(t.diffuse, 1), "map"), e.opacityNode = r(t.opacity, "alphaMap", "g"), e.emissiveNode = r(t.emissive, "emissiveMap", "rgb"), e.metalnessNode = r(t.metalness, "metalnessMap", "b"), e.roughnessNode = r(t.roughness, "roughnessMap", "g"), e.iorNode = t.ior, e.clearcoat > 0 && (e.clearcoatNode = r(t.clearcoat, "clearcoatMap", "r"), e.clearcoatRoughnessNode = r(t.clearcoatRoughness, "clearcoatRoughnessMap", "g")), e.iridescence > 0) {
		e.iridescenceNode = r(t.iridescence, "iridescenceMap", "r"), e.iridescenceIORNode = t.iridescenceIOR;
		let i = n("iridescenceThicknessMap");
		e.iridescenceThicknessNode = i ? D(t.iridescenceThicknessMinimum, t.iridescenceThicknessMaximum, i.g) : t.iridescenceThicknessMaximum;
	}
	e.sheen > 0 && (e.sheenNode = r(t.sheenColor.mul(e.sheen), "sheenColorMap", "rgb"), e.sheenRoughnessNode = r(t.sheenRoughness, "sheenRoughnessMap", "a")), e.anisotropy > 0 && (e.anisotropyNode = t.anisotropyVector), e.dispersion > 0 && (e.dispersionNode = t.dispersion);
}, Ut = (e, t, n) => {
	let r = { ...Nt };
	n || delete r.uvRange, e.props = r, e.dataTexture = new Rt(r, t);
}, Wt = class extends e.MeshPhysicalNodeMaterial {
	constructor(e, t) {
		Pt(t), super(t), this.isBatchedMaterial = !0, Ut(this, e, !1);
	}
	setup(e) {
		if (!this._wired) {
			this._wired = !0;
			let e = this.dataTexture.getNodes(Vt());
			Ht(this, e, (e) => this[e] && this[e].isTexture ? fe(this[e]) : null);
		}
		super.setup(e);
	}
	setValue(...e) {
		this.props[e[1]] && this.dataTexture.setValue(...e);
	}
	dispose() {
		super.dispose(), this.dataTexture.dispose();
	}
}, Gt = class extends e.MeshPhysicalNodeMaterial {
	constructor(e, t) {
		Pt(t), super(t), this.isMergedMaterial = !0, Ut(this, e, !0);
	}
	setup(e) {
		this._wired || (this._wired = !0, this._wireNodes()), super.setup(e);
	}
	_wireNodes() {
		let e = this.dataTexture.getNodes(Vt()), t = (t) => {
			let n = .5 / (t.image && t.image.width || 512), r = e.uvRange, i = r.x.add(n), a = r.y.sub(n), o = r.z.sub(n), s = r.w.add(n), c = S(me(t.channel));
			return N(c.x.mul(o.sub(i)).add(i), c.y.mul(a.sub(s)).add(s));
		}, n = (e) => this[e] && this[e].isTexture ? fe(this[e], t(this[e])) : null;
		Ht(this, e, n), this.normalMap ? this.normalNode = ne(n("normalMap"), N(this.normalScale.x, this.normalScale.y)) : this.bumpMap && (this.normalNode = _(n("bumpMap").r, b(this.bumpScale))), this.clearcoatNormalMap && (this.clearcoatNormalNode = ne(n("clearcoatNormalMap"), N(this.clearcoatNormalScale.x, this.clearcoatNormalScale.y))), this.aoMap && (this.aoNode = n("aoMap").r.sub(1).mul(this.aoMapIntensity).add(1)), this.transmission > 0 && this.transmissionMap && (this.transmissionNode = b(this.transmission).mul(n("transmissionMap").r)), [
			"displacementMap",
			"lightMap",
			"specularColorMap",
			"specularIntensityMap"
		].forEach((e) => {
			this[e] && (console.warn(`MergedMaterial: '${e}' is not supported with WebGPURenderer and was removed.`), this[e] = null);
		});
	}
	setValue(...e) {
		this.props[e[1]] && this.dataTexture.setValue(...e);
	}
	dispose() {
		super.dispose(), this.dataTexture.dispose();
	}
}, Kt = class {
	constructor(t = "basic", n = {}) {
		let { extensions: r, defines: i, uniforms: a, vdeclare: o, vvertex: s, vmain: c, fdeclare: l, fdiffuse: u, fmain: d, fcolor: f, ...p } = n;
		(a || o || s || c || l || u || d || f) && console.warn("CustomMaterial: GLSL injection (uniforms/vdeclare/vvertex/vmain/fdeclare/fdiffuse/fmain/fcolor) is not supported with WebGPURenderer and is ignored. Use a node material with TSL instead, eg <meshStandardNodeMaterial positionNode={...} colorNode={...}/>.");
		let m = U[t];
		m ||= "MeshBasicMaterial";
		let h = Pt(Ft(p)), g = new e[m](h);
		return g.isCustomMaterial = !0, g.subType = m, g;
	}
}, qt = /*@__PURE__*/ new e.Matrix4(), Jt = /*@__PURE__*/ new e.Matrix4(), Yt = /*@__PURE__*/ new e.Box3(), Xt = /*@__PURE__*/ new e.Sphere(), Zt = class extends e.Object3D {
	constructor(t, n = 1) {
		super(), this.isInstancedObject = !0, this.type = "InstancedObject", this.instanceMatrix = new e.InstancedBufferAttribute(new Float32Array(n * 16), 16), this.instanceColor = null, this.boundingBox = null, this.boundingSphere = null, this._count = n, this._meshes = [], this._ownGeometries = [], t && this._build(t, n);
	}
	_build(t, n) {
		t.updateMatrixWorld(!0);
		let r = new e.Matrix4().copy(t.matrixWorld).invert();
		t.traverse((i) => {
			if (!i.isMesh) {
				(i.isPoints || i.isLine) && console.warn(`InstancedObject: '${i.name || i.type}' is not a Mesh — skipped.`);
				return;
			}
			if (i.isSkinnedMesh) {
				console.warn(`InstancedObject: SkinnedMesh '${i.name}' is not supported — use InstancedSkinnedMesh.`);
				return;
			}
			Jt.copy(t.matrix).multiply(r).multiply(i.matrixWorld);
			let a = i.geometry;
			Jt.equals(qt) || (a = a.clone().applyMatrix4(Jt), this._ownGeometries.push(a));
			let o = new e.InstancedMesh(a, i.material, n);
			o.instanceMatrix = this.instanceMatrix, o.name = i.name, o.castShadow = i.castShadow, o.receiveShadow = i.receiveShadow, o.renderOrder = i.renderOrder, o.visible = i.visible, o.frustumCulled = i.frustumCulled, o.matrixAutoUpdate = !1, this._meshes.push(o), this.add(o);
		}), this._meshes.length === 0 && console.warn("InstancedObject: the source object has no Mesh to instance.");
	}
	get count() {
		return this._count;
	}
	set count(e) {
		this._count = e, this._meshes.forEach((t) => {
			t.count = e;
		});
	}
	getMatrixAt(e, t) {
		return t.fromArray(this.instanceMatrix.array, e * 16);
	}
	setMatrixAt(e, t) {
		return t.toArray(this.instanceMatrix.array, e * 16), this;
	}
	getColorAt(e, t) {
		return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
	}
	setColorAt(t, n) {
		return this.instanceColor === null && (this.instanceColor = new e.InstancedBufferAttribute(new Float32Array(this._count * 3).fill(1), 3), this._meshes.forEach((e) => {
			e.instanceColor = this.instanceColor;
		})), n.toArray(this.instanceColor.array, t * 3), this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new e.Box3()), this.boundingBox.makeEmpty(), this._meshes.forEach((e) => {
			e.boundingBox = null, e.computeBoundingBox(), Yt.copy(e.boundingBox), this.boundingBox.union(Yt);
		});
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new e.Sphere()), this.boundingSphere.makeEmpty(), this._meshes.forEach((e) => {
			e.boundingSphere = null, e.computeBoundingSphere(), Xt.copy(e.boundingSphere), this.boundingSphere.union(Xt);
		});
	}
	copy(t, n) {
		return super.copy(t, !1), this.instanceMatrix = t.instanceMatrix.clone(), this.instanceColor = t.instanceColor ? t.instanceColor.clone() : null, this.boundingBox = t.boundingBox ? t.boundingBox.clone() : null, this.boundingSphere = t.boundingSphere ? t.boundingSphere.clone() : null, this._count = t._count, this._meshes = [], this._ownGeometries = [], t._meshes.forEach((t) => {
			let n = new e.InstancedMesh(t.geometry, t.material, this._count);
			n.instanceMatrix = this.instanceMatrix, n.instanceColor = this.instanceColor, n.name = t.name, n.castShadow = t.castShadow, n.receiveShadow = t.receiveShadow, n.renderOrder = t.renderOrder, n.visible = t.visible, n.frustumCulled = t.frustumCulled, n.matrixAutoUpdate = !1, this._meshes.push(n), this.add(n);
		}), this;
	}
	dispose() {
		return this._meshes.forEach((e) => e.dispose()), this._ownGeometries.forEach((e) => e.dispose()), this._ownGeometries.length = 0, this;
	}
}, Qt = new e.Matrix4(), $t = new e.Vector3(), L = class {
	constructor() {
		this.isPass = !0, this.isThreefyPass = !0, this.enabled = !0;
	}
	setSize() {}
	setup(e) {
		return e.color;
	}
	dispose() {}
	_warnOnce(e) {
		this._warned || (this._warned = !0, console.warn(e));
	}
}, en = class extends L {
	constructor(e, t) {
		super(), this.type = "RenderPass", this.scene = e, this.camera = t;
	}
}, tn = class extends L {
	constructor() {
		super(), this.type = "OutputPass";
	}
}, nn = class extends L {
	constructor(e, t = 1, n = 0, r = 0) {
		super(), this.type = "UnrealBloomPass", this.resolution = e, this.strength = t, this.radius = n, this.threshold = r;
	}
	setup(e) {
		return this._node = Ee(e.color, this.strength, this.radius, this.threshold), e.color.add(this._node);
	}
	update() {
		this._node && (this._node.strength.value = this.strength, this._node.radius.value = this.radius, this._node.threshold.value = this.threshold);
	}
}, rn = class e extends L {
	static OUTPUT = {
		Off: -1,
		Default: 0,
		Diffuse: 1,
		AO: 2,
		Denoise: 3,
		Depth: 4,
		Normal: 5
	};
	constructor(t, n) {
		super(), this.type = "GTAOPass", this.scene = t, this.camera = n, this.requiresNormalMRT = !0, this.output = e.OUTPUT.Default, this._aoParams = null;
	}
	setup(e) {
		return this._node = De(e.scenePass.getTextureNode("depth"), e.scenePass.getTextureNode("normal"), this.camera), this._aoParams && this.updateGtaoMaterial(this._aoParams), e.color.mul(P(ge(this._node.getTextureNode().r), 1));
	}
	updateGtaoMaterial(e) {
		if (this._aoParams = e, this._node) for (let t of [
			"radius",
			"thickness",
			"distanceExponent",
			"distanceFallOff",
			"scale",
			"samples"
		]) e[t] !== void 0 && (this._node[t].value = e[t]);
	}
	updatePdMaterial() {}
}, an = class extends L {
	constructor(t, n, r, i = []) {
		super(), this.type = "OutlinePass", this.isOutlinePass = !0, this.scene = n, this.camera = r, this.selectedObjects = i, this.followPointer = !0, this.perInstance = !0, this.instanceInflate = 1.04, this._proxy = null, this._hover = null, this._pinned = null, this._active = null, this.edgeStrength = 3, this.edgeGlow = 0, this.edgeThickness = 1, this.pulsePeriod = 0, this.visibleEdgeColor = new e.Color(16777215), this.hiddenEdgeColor = new e.Color(1640965), this._edgeStrength = M(this.edgeStrength), this._edgeGlow = M(this.edgeGlow), this._edgeThickness = M(this.edgeThickness), this._visibleEdgeColor = M(this.visibleEdgeColor), this._hiddenEdgeColor = M(this.hiddenEdgeColor);
	}
	setup(e) {
		this._node = Oe(this.scene, this.camera, {
			selectedObjects: this.selectedObjects,
			edgeThickness: this._edgeThickness,
			edgeGlow: this._edgeGlow
		}), this._showProxyWhileOutlining(this._node);
		let { visibleEdge: t, hiddenEdge: n } = this._node, r = t.mul(this._visibleEdgeColor).add(n.mul(this._hiddenEdgeColor)).mul(this._edgeStrength);
		return e.color.add(r);
	}
	hover(e) {
		this._hover = this._describe(e), this._applySelection();
	}
	pin(e) {
		this._pinned = this._describe(e), this._applySelection();
	}
	unpin() {
		this._pinned = null, this._applySelection();
	}
	getHovered() {
		return this._hover ? { ...this._hover } : null;
	}
	getPinned() {
		return this._pinned ? { ...this._pinned } : null;
	}
	get hovered() {
		return this.getHovered();
	}
	get pinned() {
		return this.getPinned();
	}
	_describe(e) {
		return e ? {
			object: e,
			instanceId: (this.perInstance && e.isInstancedMesh ? e.intersect?.instanceId : void 0) ?? -1
		} : null;
	}
	_applySelection() {
		let e = this._hover || this._pinned;
		this._active = e, e ? e.instanceId < 0 ? this.selectedObjects = [e.object] : (this._updateProxy(), this.selectedObjects = this._proxy ? [this._proxy] : []) : this.selectedObjects = [];
	}
	update() {
		if (!this._node) return;
		this._updateProxy(), this._node.selectedObjects = this.selectedObjects;
		let e = this.edgeStrength;
		if (this.pulsePeriod > 0) {
			let t = performance.now() * .001;
			e *= .625 + .375 * Math.cos(2 * Math.PI * t / this.pulsePeriod);
		}
		this._edgeStrength.value = e, this._edgeGlow.value = this.edgeGlow, this._edgeThickness.value = this.edgeThickness;
	}
	dispose() {
		this._proxy &&= (this._proxy.removeFromParent(), this._proxy.material.dispose(), null), this._hover = this._pinned = this._active = null;
	}
	_instanceProxy(t) {
		if (!this._proxy) {
			let n = new e.Mesh(t.geometry, new e.MeshBasicNodeMaterial());
			n.name = "outlineProxy", n.userData.isOutlineProxy = !0, n.visible = !1, n.raycast = () => {}, n.matrixAutoUpdate = !1, n.matrixWorldAutoUpdate = !1, this._proxy = n;
		}
		return this._proxy.geometry = t.geometry, this._proxy.parent !== this.scene && this.scene.add(this._proxy), this._proxy;
	}
	_updateProxy() {
		let e = this._active;
		if (!e || e.instanceId < 0) return;
		let t = e.object, n = e.instanceId;
		if (n >= t.count) return;
		let r = this._instanceProxy(t), i = this.instanceInflate;
		t.getMatrixAt(n, Qt), r.matrixWorld.multiplyMatrices(t.matrixWorld, Qt).scale($t.set(i, i, i));
	}
	_showProxyWhileOutlining(e) {
		let t = e.updateBefore.bind(e);
		e.updateBefore = (e) => {
			let n = this._proxy, r = n !== null && this.selectedObjects.includes(n);
			r && (n.visible = !0);
			try {
				t(e);
			} finally {
				r && (n.visible = !1);
			}
		};
	}
}, on = class extends L {
	constructor(t, n, r = {}) {
		super(), this.type = "BokehPass", this.isBokehPass = !0, this.scene = t, this.camera = n, this.mouse = new e.Vector2(), this.raycaster = new e.Raycaster(), this.distance = 100, this.focusRange = r.focusRange ?? .5, this.bokehScale = r.bokehScale ?? 4, this.vignetting = r.vignetting ?? !1, this.fstop = r.fstop ?? 2.2, this._focusDistance = M(this.distance), this._focusRange = M(this.distance * this.focusRange), this._bokehScale = M(this.bokehScale);
	}
	setup(e) {
		let t = ke(e.color, e.scenePass.getViewZNode(), this._focusDistance, this._focusRange, this._bokehScale);
		if (!this.vignetting) return t;
		let n = this.fstop / 22, r = me().distance(N(.5)), i = ue(1.3 + n, n, r);
		return P(t.rgb.mul(i), t.a);
	}
	update() {
		this.raycaster.setFromCamera(this.mouse, this.camera);
		let e = this.raycaster.intersectObjects(this.scene.children, !0), t = e.length > 0 ? e[0].distance : 1e3;
		this.distance += (t - this.distance) * .03, this._focusDistance.value = this.distance, this._focusRange.value = this.distance * this.focusRange, this._bokehScale.value = this.bokehScale;
	}
}, sn = class extends L {
	constructor(e, t) {
		super(), this.type = "ShaderPass", this.shader = e, this.textureID = t;
	}
	setup(e) {
		return this._warnOnce("ShaderPass: GLSL shaders are not supported with WebGPURenderer — write a TSL node instead (pass ignored)"), e.color;
	}
}, cn = class extends L {
	constructor(e = 64) {
		super(), this.type = "GlitchPass", this.dtSize = e, this.goWild = !1, this._curF = 0, this._generateTrigger();
	}
	setup(e) {
		let t = this._uniforms = {
			byp: M(0),
			amount: M(.08),
			angle: M(.02),
			seed: M(.02),
			seed_x: M(.02),
			seed_y: M(.02),
			distortion_x: M(.5),
			distortion_y: M(.6)
		}, n = b(.05);
		this._heightmap = this._generateHeightmap(this.dtSize);
		let r = fe(this._heightmap);
		return p(() => {
			let i = me().toVar(), a = r.sample(i.mul(t.seed).mul(t.seed)).toVar();
			m(i.y.lessThan(t.distortion_x.add(n)).and(i.y.greaterThan(t.distortion_x.sub(n.mul(t.seed)))), () => {
				m(t.seed_x.greaterThan(0), () => {
					i.y.assign(b(1).sub(i.y.add(t.distortion_y)));
				}).Else(() => {
					i.y.assign(t.distortion_y);
				});
			}), m(i.x.lessThan(t.distortion_y.add(n)).and(i.x.greaterThan(t.distortion_y.sub(n.mul(t.seed)))), () => {
				m(t.seed_y.greaterThan(0), () => {
					i.x.assign(t.distortion_x);
				}).Else(() => {
					i.x.assign(b(1).sub(i.x.add(t.distortion_x)));
				});
			}), i.x.addAssign(a.x.mul(t.seed_x).mul(t.seed.div(5))), i.y.addAssign(a.y.mul(t.seed_y).mul(t.seed.div(5)));
			let o = N(v(t.angle), le(t.angle)).mul(t.amount), s = e.color.sample(i.add(o)), c = e.color.sample(i), l = e.color.sample(i.sub(o)), u = x(ce.x.div(.5)), d = x(ce.y.div(.5)), f = ae(N(u.mul(t.seed), d.mul(t.seed).mul(50))).mul(.2).mul(t.amount.mul(200));
			return D(P(s.r, c.g, l.b, c.a).add(P(f)), e.color, t.byp);
		})();
	}
	update() {
		if (!this._uniforms) return;
		let t = this._uniforms, n = e.MathUtils.randFloat;
		t.seed.value = Math.random(), t.byp.value = 0, this._curF % this._randX === 0 || this.goWild ? (t.amount.value = Math.random() / 30, t.angle.value = n(-Math.PI, Math.PI), t.seed_x.value = n(-1, 1), t.seed_y.value = n(-1, 1), t.distortion_x.value = n(0, 1), t.distortion_y.value = n(0, 1), this._curF = 0, this._generateTrigger()) : this._curF % this._randX < this._randX / 5 ? (t.amount.value = Math.random() / 90, t.angle.value = n(-Math.PI, Math.PI), t.distortion_x.value = n(0, 1), t.distortion_y.value = n(0, 1), t.seed_x.value = n(-.3, .3), t.seed_y.value = n(-.3, .3)) : this.goWild || (t.byp.value = 1), this._curF++;
	}
	_generateTrigger() {
		this._randX = e.MathUtils.randInt(120, 240);
	}
	_generateHeightmap(t) {
		let n = new Uint8Array(t * t * 4);
		for (let e = 0; e < n.length; e++) n[e] = Math.random() * 255;
		let r = new e.DataTexture(n, t, t);
		return r.needsUpdate = !0, r;
	}
	dispose() {
		this._heightmap?.dispose();
	}
}, ln = class extends L {
	constructor(e, t = 1.57, n = 1) {
		super(), this.type = "DotScreenPass", this.center = e, this.angle = t, this.scale = n, this._angle = M(this.angle), this._scale = M(this.scale);
	}
	setup(e) {
		return Ae(e.color, this._angle, this._scale);
	}
	update() {
		this._angle.value = this.angle, this._scale.value = this.scale;
	}
}, un = class extends L {
	constructor(e = .005, t = 0) {
		super(), this.type = "RGBShiftPass", this.amount = e, this.angle = t, this._amount = M(this.amount), this._angle = M(this.angle);
	}
	setup(e) {
		return je(e.color, this._amount, this._angle);
	}
	update() {
		this._amount.value = this.amount, this._angle.value = this.angle;
	}
}, dn = class extends L {
	constructor() {
		super(), this.type = "FXAAPass";
	}
	setup(e) {
		return e.pipeline.pipeline.outputColorTransform = !1, Me(se(e.color));
	}
}, R = class {
	constructor() {
		this.isThreefyEffect = !0;
	}
	setSize() {}
	setupRoot(e) {
		return null;
	}
	dispose() {}
}, fn = class extends R {
	constructor() {
		super(), this.type = "AnaglyphEffect", this.isAnaglyphEffect = !0;
	}
	setupRoot(e) {
		return Ne(e.scene, e.camera);
	}
}, pn = class extends R {
	constructor() {
		super(), this.type = "ParallaxBarrierEffect", this.isParallaxBarrierEffect = !0;
	}
	setupRoot(e) {
		return Pe(e.scene, e.camera);
	}
}, mn = class extends R {
	constructor() {
		super(), this.type = "StereoEffect", this.isStereoEffect = !0;
	}
	setupRoot(t) {
		let n = Fe(t.scene, t.camera), r = n.updateBefore.bind(n), i = new e.Color();
		return n.updateBefore = (e) => {
			let t = n.scene, a = t.background;
			if (a?.isColor !== !0) return r(e);
			let { renderer: o } = e, s = o.getClearColor(i).clone(), c = o.getClearAlpha();
			o.setClearColor(a, 1), t.background = null;
			try {
				return r(e);
			} finally {
				t.background = a, o.setClearColor(s, c);
			}
		}, n;
	}
}, hn = class extends R {
	constructor(t, n = {}) {
		super(), this.type = "OutlineEffect", this.isOutlineEffect = !0, this.color = new e.Color(), n.defaultColor && this.color.set(...n.defaultColor), this.thickness = n.defaultThickness && n.defaultThickness >= 1 ? n.defaultThickness : 2, this.alpha = n.defaultAlpha ?? 1, this._color = M(this.color), this._alpha = M(this.alpha), this._thickness = M(this.thickness), this._edgeGlow = M(0), this._node = null;
	}
	_collectMeshes(e) {
		let t = [];
		return e.traverse((e) => {
			e.isMesh && t.push(e);
		}), t;
	}
	setupRoot(e) {
		let t = A(e.scene, e.camera).getTextureNode();
		this._node = Oe(e.scene, e.camera, {
			selectedObjects: this._collectMeshes(e.scene),
			edgeThickness: this._thickness,
			edgeGlow: this._edgeGlow
		});
		let { visibleEdge: n, hiddenEdge: r } = this._node, i = n.add(r).clamp(0, 1).mul(this._alpha);
		return P(D(t.rgb, this._color, i), t.a);
	}
	update() {
		this._node && (this._node.selectedObjects = this._collectMeshes(this._node.scene), this._color.value.copy(this.color), this._alpha.value = this.alpha, this._thickness.value = this.thickness);
	}
}, gn = class extends R {
	constructor() {
		super(), this.type = "AsciiEffect", this.isAsciiEffect = !0, this.domElement = typeof document < "u" ? document.createElement("div") : null, console.warn("AsciiEffect: not available with WebGPURenderer (DOM-based effect) — rendering the plain scene instead");
	}
	setupRoot(e) {
		return A(e.scene, e.camera);
	}
};
r.prototype.addLevels = function(...e) {
	e.forEach((e) => Array.isArray(e) ? this.addLevel(...e) : this.addLevel(e));
}, I.prototype.blocker = null, I.prototype.heroPlayer = {
	forward: !1,
	backward: !1,
	left: !1,
	right: !1,
	canJump: !1,
	jumpPower: 350,
	mass: 100,
	velocity: [
		0,
		0,
		0
	],
	direction: [
		0,
		0,
		0
	],
	viscosity: 10
}, I.prototype.update = function() {}, I.prototype.onKeyDown = function(e) {
	let t = this.heroPlayer;
	switch (e.code) {
		case "ArrowUp":
		case "KeyW":
			t.forward = !0;
			break;
		case "ArrowLeft":
		case "KeyA":
			t.left = !0;
			break;
		case "ArrowDown":
		case "KeyS":
			t.backward = !0;
			break;
		case "ArrowRight":
		case "KeyD":
			t.right = !0;
			break;
		case "Space":
			t.canJump === !0 && (t.velocity[1] += t.jumpPower), t.canJump = !1;
			break;
	}
}, I.prototype.onKeyUp = function(e) {
	let t = this.heroPlayer;
	switch (e.code) {
		case "ArrowUp":
		case "KeyW":
			t.forward = !1;
			break;
		case "ArrowLeft":
		case "KeyA":
			t.left = !1;
			break;
		case "ArrowDown":
		case "KeyS":
			t.backward = !1;
			break;
		case "ArrowRight":
		case "KeyD":
			t.right = !1;
			break;
	}
}, I.prototype.animate = function(e, t, n) {
	if (this.isLocked === !0) {
		let r = this.heroPlayer, i = r.velocity, a = r.direction, o = this.getObject();
		n.ray.origin.copy(o.position), n.ray.origin.y -= 10;
		let s = n.intersectObjects(t.children, !1).length > 0;
		i[0] -= i[0] * r.viscosity * e, i[2] -= i[2] * r.viscosity * e, i[1] -= (i[1] * r.viscosity * .1 + 9.8 * r.mass) * e, a[2] = Number(r.forward) - Number(r.backward), a[0] = Number(r.right) - Number(r.left);
		let c = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
		c ||= 1, a[0] /= c, a[1] /= c, a[2] /= c, (r.forward || r.backward) && (i[2] -= a[2] * 400 * e), (r.left || r.right) && (i[0] -= a[0] * 400 * e), s === !0 && (i[1] = Math.max(0, i[1]), r.canJump = !0), this.moveRight(-i[0] * e), this.moveForward(-i[2] * e), o.position.y += i[1] * e, o.position.y < 10 && (i[1] = 0, o.position.y = 10, r.canJump = !0);
	}
}, Te.prototype.onKeyDown = function(e) {
	switch (e.key) {
		case "q":
			this.setSpace(this.space === "local" ? "world" : "local");
			break;
		case "Shift":
			this.setTranslationSnap(1), this.setRotationSnap(15 * Math.PI / 180), this.setScaleSnap(.25);
			break;
		case "w":
			this.setMode("translate");
			break;
		case "e":
			this.setMode("rotate");
			break;
		case "r":
			this.setMode("scale");
			break;
		case "+":
		case "=":
			this.setSize(this.size + .1);
			break;
		case "-":
		case "_":
			this.setSize(Math.max(this.size - .1, .1));
			break;
		case "x":
			this.showX = !this.showX;
			break;
		case "y":
			this.showY = !this.showY;
			break;
		case "z":
			this.showZ = !this.showZ;
			break;
		case " ":
			this.enabled = !this.enabled;
			break;
		case "Escape":
			this.reset();
			break;
	}
}, Te.prototype.onKeyUp = function(e) {
	switch (e.key) {
		case "Shift":
			this.setTranslationSnap(null), this.setRotationSnap(null), this.setScaleSnap(null);
			break;
	}
}, Ie.prototype.isRoundedBoxGeometry = !0, Ie.prototype.type = "RoundedBoxGeometry", Le.prototype.isConvexGeometry = !0, Le.prototype.type = "ConvexGeometry", Re.prototype.isDecalGeometry = !0, Re.prototype.type = "DecalGeometry", ze.prototype.isParametricGeometry = !0, Be.prototype.isTextGeometry = !0, Ve.prototype.isTeapotGeometry = !0, Ve.prototype.type = "TeapotGeometry", He.prototype.isBoxLineGeometry = !0, He.prototype.type = "BoxLineGeometry", Ue.prototype.isLoftGeometry = !0;
var z = {
	RoundedBoxGeometry: Ie,
	ConvexGeometry: Le,
	DecalGeometry: Re,
	ParametricGeometry: ze,
	TextGeometry: Be,
	TeapotGeometry: Ve,
	BoxLineGeometry: He,
	LoftGeometry: Ue,
	Line2: We,
	LineSegments2: Ge,
	Wireframe: Ke,
	LineGeometry: qe,
	LineSegmentsGeometry: Je,
	WireframeGeometry2: Ye,
	ArcballControls: ye,
	DragControls: be,
	FirstPersonControls: xe,
	FlyControls: Se,
	MapControls: Ce,
	OrbitControls: d,
	PointerLockControls: I,
	TrackballControls: we,
	TransformControls: Te,
	RenderPass: en,
	ShaderPass: sn,
	GlitchPass: cn,
	GTAOPass: rn,
	OutlinePass: an,
	UnrealBloomPass: nn,
	BokehPass: on,
	OutputPass: tn,
	DotScreenPass: ln,
	RGBShiftPass: un,
	FXAAPass: dn,
	AnaglyphEffect: fn,
	AsciiEffect: gn,
	OutlineEffect: hn,
	ParallaxBarrierEffect: pn,
	StereoEffect: mn,
	NURBSCurve: Xe,
	NURBSSurface: Ze,
	InstancedObject: Zt
}, _n = (t) => {
	if (t.isColor) return t;
	let n = typeof t;
	if (n === "number" || n === "string") return new e.Color(t);
	if (Array.isArray(t)) return new e.Color(...t);
}, vn = (t) => {
	if (t.isVector3) return t;
	let n = typeof t;
	if (Array.isArray(t)) return new e.Vector3(...t);
	if (n === "number") return new e.Vector3().setScalar(t);
	if (n === "string") return new e.Vector3().setScalar(~~t);
	if (n === "object") return new e.Vector3(t.x, t.y, t.z);
}, B = (t) => {
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector2(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 2) n.push(new e.Vector2(t[r], t[r + 1]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector2(t.x, t.y));
	else return t;
}, V = (t) => {
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector3(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 3) n.push(new e.Vector3(t[r], t[r + 1], t[r + 2]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector3(t.x, t.y, t.z));
	else return t;
}, yn = (t) => {
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector4(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 4) n.push(new e.Vector4(t[r], t[r + 1], t[r + 2], t[r + 3]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector4(t.x, t.y, t.z, t.w));
	else return t;
}, bn = [
	"color",
	"blendColor",
	"emissive",
	"specular",
	"sheenColor",
	"attenuationColor",
	"specularColor"
], H = /* @__PURE__ */ "alphaMap.anisotropyMap.aoMap.bumpMap.clearcoatMap.clearcoatNormalMap.clearcoatRoughnessMap.displacementMap.emissiveMap.envMap.gradientMap.iridescenceMap.iridescenceThicknessMap.lightMap.map.matcap.metalnessMap.normalMap.roughnessMap.sheenColorMap.sheenRoughnessMap.specularColorMap.specularIntensityMap.specularMap.thicknessMap.transmissionMap".split("."), U = {
	line: "LineBasicMaterial",
	dashed: "LineDashedMaterial",
	basic: "MeshBasicMaterial",
	depth: "MeshDepthMaterial",
	distance: "MeshDistanceMaterial",
	lambert: "MeshLambertMaterial",
	matcap: "MeshMatcapMaterial",
	normal: "MeshNormalMaterial",
	phong: "MeshPhongMaterial",
	physical: "MeshPhysicalMaterial",
	standard: "MeshStandardMaterial",
	toon: "MeshToonMaterial",
	points: "PointsMaterial",
	rawShader: "RawShaderMaterial",
	shader: "ShaderMaterial",
	shadow: "ShadowMaterial",
	sprite: "SpriteMaterial",
	node: "NodeMaterial",
	basicNode: "MeshBasicNodeMaterial",
	lambertNode: "MeshLambertNodeMaterial",
	phongNode: "MeshPhongNodeMaterial",
	standardNode: "MeshStandardNodeMaterial",
	physicalNode: "MeshPhysicalNodeMaterial",
	toonNode: "MeshToonNodeMaterial",
	matcapNode: "MeshMatcapNodeMaterial",
	normalNode: "MeshNormalNodeMaterial",
	sssNode: "MeshSSSNodeMaterial",
	lineNode: "LineBasicNodeMaterial",
	dashedNode: "LineDashedNodeMaterial",
	line2Node: "Line2NodeMaterial",
	pointsNode: "PointsNodeMaterial",
	spriteNode: "SpriteNodeMaterial",
	shadowNode: "ShadowNodeMaterial",
	volumeNode: "VolumeNodeMaterial"
}, W = {
	buffer: "BufferGeometry",
	instancedBuffer: "InstancedBufferGeometry",
	box: "BoxGeometry",
	capsule: "CapsuleGeometry",
	circle: "CircleGeometry",
	cone: "ConeGeometry",
	cylinder: "CylinderGeometry",
	dodecahedron: "DodecahedronGeometry",
	extrude: "ExtrudeGeometry",
	icosahedron: "IcosahedronGeometry",
	lathe: "LatheGeometry",
	octahedron: "OctahedronGeometry",
	plane: "PlaneGeometry",
	polyhedron: "PolyhedronGeometry",
	ring: "RingGeometry",
	shape: "ShapeGeometry",
	sphere: "SphereGeometry",
	tetrahedron: "TetrahedronGeometry",
	torus: "TorusGeometry",
	torusKnot: "TorusKnotGeometry",
	tube: "TubeGeometry",
	rounded: "RoundedBoxGeometry",
	convex: "ConvexGeometry",
	decal: "DecalGeometry",
	parametric: "ParametricGeometry",
	text: "TextGeometry",
	teapot: "TeapotGeometry",
	boxLine: "BoxLineGeometry",
	loft: "LoftGeometry"
}, G = null, xn = o(null), Sn = (e) => {
	if (!e) return;
	let { threefy: t } = J();
	return Object.keys(e).forEach((n) => {
		let r = e[n].value;
		typeof r == "string" ? e[n].value = t.loadTexture(r) : Array.isArray(r) && r.length > 0 && r.forEach((r, i) => {
			typeof r == "string" && (e[n].value[i] = t.loadTexture(r));
		});
	}), e;
}, K = (e, t, n) => {
	let r = t.split("-"), i = r.length;
	r.reduce((e, t, a) => {
		if (a === i - 1) return Array.isArray(e) ? e : (Array.isArray(n) && typeof n[0] == "number" ? e[t] && typeof e[t] != "function" && e[t].fromArray(n) : e[t] && e[t].copy && n && (n.isVector2 || n.isVector3 || n.isVector4 || n.isColor || n.isMatrix3 || n.isMatrix4) ? e[t].copy(n) : e[t] = n, e[t]);
		if (a === i - 2) {
			let i = r[a + 1];
			return i = Number(i), !isNaN(i) && !Array.isArray(e[t]) && (e[t] = []), isNaN(i) ? e[t] || (e[t] = {}) : e[t][i] = n, e[t];
		} else e[t] || (e[t] = {});
		return e[t];
	}, e);
}, Cn = {
	repeat: e.RepeatWrapping,
	clamp: e.ClampToEdgeWrapping,
	mirror: e.MirroredRepeatWrapping
}, wn = {
	srgb: e.SRGBColorSpace,
	linear: e.LinearSRGBColorSpace,
	none: e.NoColorSpace
}, Tn = (t, n, r, i) => {
	let a = t[n];
	!a || !a.isTexture || (a._subpropOwned || (a = a.clone(), a._subpropOwned = !0, t[n] = a), r === "repeat" || r === "offset" || r === "center" ? (a[r].fromArray(Array.isArray(i) ? i : [i, i]), r === "repeat" && a.wrapS === e.ClampToEdgeWrapping && a.wrapT === e.ClampToEdgeWrapping && (a.wrapS = a.wrapT = e.RepeatWrapping)) : r === "wrap" ? a.wrapS = a.wrapT = Cn[i] ?? i : r === "wrapS" || r === "wrapT" ? a[r] = Cn[i] ?? i : r === "colorSpace" ? a.colorSpace = wn[i] ?? i : a[r] = i, a.needsUpdate = !0, t.needsUpdate = !0);
}, En = (e, t, n) => {
	for (let r of H) e[r] && e[r].isTexture && Tn(e, r, t, n);
}, q = (t, n) => {
	if (!n) return;
	let r = (e) => {
		let t = e.indexOf("-");
		return t > 0 && H.includes(e.slice(0, t)) ? !0 : /^texture[A-Z]/.test(e);
	}, i = Object.keys(n);
	[...i.filter((e) => !r(e)), ...i.filter(r)].forEach((r) => {
		if (r === "attach" || t.isMaterial && /^(position|rotation|scale)(-[xyz])?$/.test(r)) return;
		if (t.isMaterial) {
			let e = n[r];
			if (e != null) {
				let n = r.indexOf("-");
				if (n > 0 && H.includes(r.slice(0, n))) {
					Tn(t, r.slice(0, n), r.slice(n + 1), e);
					return;
				}
				if (/^texture[A-Z]/.test(r)) {
					En(t, r[7].toLowerCase() + r.slice(8), e);
					return;
				}
			}
		}
		if (![
			r in t,
			r === "update",
			/-/.test(r),
			/^on/.test(r)
		].some(Boolean)) return;
		let i = n[r], a = typeof i;
		if (i != null && !(t.isBufferGeometry && r === "scale")) {
			if (typeof t[r] == "function" && a !== "function") {
				let e = Array.isArray(i) ? i : [i];
				t[r](...e);
				return;
			}
			if (a === "object") i.isObject3D || (t.isBatchedMesh && /geometry/.test(r) ? t.addGeometry(i) : t.isShaderMaterial && r === "uniforms" ? K(t, r, Sn(i)) : K(t, r, i)), t.isMaterial && i.isTexture && (t.needsUpdate = !0);
			else if (a === "function") t[r] = i, t[r].bind(t);
			else if (a === "number") {
				if (r === "scale") {
					t[r]?.isVector3 && t[r].fromArray([
						i,
						i,
						i
					]);
					return;
				}
				if (bn.includes(r)) {
					t[r] = new e.Color(i);
					return;
				}
				let n = r.split("-");
				if (bn.includes(n[0]) && "r g b".includes(n[1])) {
					t[n[0]][n[1]] = i;
					return;
				}
				if ("position rotation scale".includes(n[0]) && "x y z".includes(n[1])) {
					t.isObject3D && (t[n[0]][n[1]] = i);
					return;
				}
				K(t, r, i);
			} else a === "string" ? bn.includes(r) ? t[r] = new e.Color(i) : H.includes(r) ? (t[r] = G.loadTexture(i), r === "map" || r === "emissiveMap" ? t[r].colorSpace = e.SRGBColorSpace : r === "envMap" || r === "lightMap" ? t[r].colorSpace = e.LinearSRGBColorSpace : t[r].colorSpace = e.NoColorSpace, t.needsUpdate = !0) : K(t, r, i) : a === "boolean" ? t[r] = i : K(t, r, i);
		}
	});
}, Dn = (e) => {
	if (e) {
		if (typeof e.type == "function") return Dn(e.type(e.props));
		if (typeof e.type == "symbol") {
			let t = Symbol.keyFor(e.type);
			if (t === "react.fragment") return /* @__PURE__ */ F("group", { children: e.props.children });
			if (t === "react.suspense") {
				let t = e.props;
				return /* @__PURE__ */ ve("group", {
					fallback: t.fallback,
					children: [t.fallback, t.children]
				});
			} else return console.warn(`warning: ${t} not supported`, e), null;
		} else if (typeof e.type == "object") {
			if (typeof e.type.$$typeof == "symbol" && Symbol.keyFor(e.type.$$typeof) === "react.forward_ref") {
				let { ref: t, ...n } = e.props;
				return Dn(e.type.render(n, t));
			}
			return console.warn("warning: unexpected cases occurred", e), null;
		} else return e;
	}
}, On = (t, n, r) => {
	let i = {
		refs: [],
		elms: []
	}, a = {
		refs: [],
		elms: []
	}, { ref: o } = t;
	s(() => {
		let s = (e) => {
			let t = e.map((e) => e.current);
			return t = t.flat(Infinity), t = t.filter((e) => e != null), t;
		}, c = (e, t) => {
			t[e.attach] = e.current;
		}, l = {};
		i.refs.forEach((e) => c(e, l));
		let u = r(t, l);
		if (a.refs.length > 0) {
			let t = s(a.refs), n = [];
			t.forEach((t) => {
				if (t) if (t.isScene) G.setScene(t);
				else if (t.isCamera) G.setCamera(t);
				else if (t.type?.match(/(Helper)$/) || t.isTransformControls) G.sceneHelpers.add(t);
				else if (t.isFog || t.isFogExp2) (u?.isScene ? u : G.scene).fog = t;
				else if (t.isPass) G.addPass(t);
				else if (t.type?.match(/(Effect)$/)) G.setEffect(t);
				else if (t.type === "Group" && t.forCurvePath) {
					let r = t, i = new e.CurvePath();
					r.children.forEach((e) => {
						i.add(e.userData.curve);
					}), r.userData.path = i, n.push(t);
				} else n.push(t);
			}), n.forEach((e) => {
				e.isObject3D && u.add(e);
			});
		}
		if (o) {
			let e;
			/Geometry/i.test(n) && (e = "geometry"), /Material/i.test(n) && (e = "material"), o.current = u, o.attach = t.attach ? t.attach : e;
		}
	}, [
		i.refs,
		a.refs,
		o
	]);
	let { children: l } = t, d = Array.isArray(l) ? l : [l];
	d = d.flat(Infinity);
	let f = c(), p = G.reactElements, m = u({}), h = /* @__PURE__ */ new Set();
	for (let e = 0; e < d.length; e++) {
		if (!d[e]) continue;
		let t = Dn(d[e]);
		if (!t) continue;
		typeof t.type == "symbol" && (t = Dn(t));
		let n = `${f}-${t.type}-${e}`, r = t.props.ref;
		r || (m.current[n] || (m.current[n] = { current: null }), r = m.current[n], h.add(n));
		let o = p[t.type], { ref: s, ...c } = t.props, l = !1;
		/Geometry/i.test(t.type) && (l = !0), /Material/i.test(t.type) && (l = !0), t.props.attach || l ? (i.refs.push(r), i.elms.push(/* @__PURE__ */ F(o, {
			ref: r,
			...c
		}, n))) : (a.refs.push(r), a.elms.push(/* @__PURE__ */ F(o, {
			ref: r,
			...c
		}, n)));
	}
	return Object.keys(m.current).forEach((e) => {
		h.has(e) || delete m.current[e];
	}), [i.elms, a.elms].flat();
};
function kn(e, t) {
	switch (t.type) {
		case "myAction": return e;
		default: return e;
	}
}
function An(e) {
	G || (G = new At(), G.init(), G.ready.then(() => G.animate()), G.reactElements = {}, (/* @__PURE__ */ "Color.Vector2.Vector3.Vector4.Scene.Object3D.Group.Sprite.Line.LineLoop.LineSegments.Points.Audio.PositionalAudio.LOD.Fog.FogExp2.AmbientLight.DirectionalLight.HemisphereLight.Light.LightProbe.PointLight.RectAreaLight.SpotLight.ArrayCamera.Camera.CubeCamera.OrthographicCamera.PerspectiveCamera.StereoCamera.BufferAttribute.GLBufferAttribute.InstancedBufferAttribute.InstancedInterleavedBuffer.InterleavedBuffer.InterleavedBufferAttribute.BufferGeometry.InstancedBufferGeometry.BoxGeometry.CapsuleGeometry.CircleGeometry.ConeGeometry.CylinderGeometry.DodecahedronGeometry.EdgesGeometry.ExtrudeGeometry.IcosahedronGeometry.LatheGeometry.OctahedronGeometry.PlaneGeometry.PolyhedronGeometry.RingGeometry.ShapeGeometry.SphereGeometry.TetrahedronGeometry.TorusGeometry.TorusKnotGeometry.TubeGeometry.WireframeGeometry.LineBasicMaterial.LineDashedMaterial.MeshBasicMaterial.MeshDepthMaterial.MeshDistanceMaterial.MeshLambertMaterial.MeshMatcapMaterial.MeshNormalMaterial.MeshPhongMaterial.MeshPhysicalMaterial.MeshStandardMaterial.MeshToonMaterial.PointsMaterial.RawShaderMaterial.ShaderMaterial.ShadowMaterial.SpriteMaterial.NodeMaterial.MeshBasicNodeMaterial.MeshLambertNodeMaterial.MeshPhongNodeMaterial.MeshStandardNodeMaterial.MeshPhysicalNodeMaterial.MeshToonNodeMaterial.MeshMatcapNodeMaterial.MeshNormalNodeMaterial.MeshSSSNodeMaterial.LineBasicNodeMaterial.LineDashedNodeMaterial.Line2NodeMaterial.PointsNodeMaterial.SpriteNodeMaterial.ShadowNodeMaterial.VolumeNodeMaterial.BatchedMesh.InstancedMesh.Mesh.SkinnedMesh.CanvasTexture.CompressedTexture.CompressedArrayTexture.CubeTexture.Data3DTexture.DataArrayTexture.DataTexture.DepthTexture.FramebufferTexture.Texture.VideoTexture.ArrowHelper.AxesHelper.BoxHelper.Box3Helper.CameraHelper.DirectionalLightHelper.GridHelper.PolarGridHelper.HemisphereLightHelper.PlaneHelper.PointLightHelper.SkeletonHelper.SpotLightHelper.Controls.ArcballControls.DragControls.FirstPersonControls.FlyControls.MapControls.OrbitControls.PointerLockControls.TrackballControls.TransformControls.RenderPass.ShaderPass.GlitchPass.GTAOPass.OutlinePass.UnrealBloomPass.BokehPass.OutputPass.DotScreenPass.RGBShiftPass.FXAAPass.AnaglyphEffect.AsciiEffect.OutlineEffect.ParallaxBarrierEffect.StereoEffect.RoundedBoxGeometry.ConvexGeometry.DecalGeometry.ParametricGeometry.TextGeometry.TeapotGeometry.BoxLineGeometry.LoftGeometry.Line2.LineSegments2.Wireframe.LineGeometry.LineSegmentsGeometry.WireframeGeometry2.Primitive.Geometry.Material.BatchedMaterial.CustomMaterial.CurvePath.InstancedObject".split(".")).forEach((e) => Bn(e)), Vn(), Hn());
	let [t, n] = l(kn, G), r = {
		threefy: t,
		dispatch: n
	}, i = On(e, "ThreeProvider", (e, t) => G.scene);
	return /* @__PURE__ */ F(xn, {
		value: r,
		children: i.length > 0 && i
	});
}
function jn(e) {
	return An(e);
}
function J(e) {
	if (e === void 0) {
		let e = G;
		return {
			threefy: e,
			scene: e.scene,
			camera: e.camera,
			renderer: e.renderer,
			timer: e.timer,
			controls: e.controls,
			animator: e.animator,
			raycaster: e.raycaster,
			canvas: e.renderer.domElement,
			list: e.list,
			get: e.get.bind(e),
			set: e.set.bind(e)
		};
	} else return e(G);
}
function Mn(e, t = []) {
	let n = u(null);
	return s(() => {
		n.current && e(n.current, G.scene);
	}, [...t]), n;
}
function Nn(e, t = []) {
	let n = u(e);
	return s(() => {
		n.current = e;
	}, [e, ...t]), function(...e) {
		let t = n.current;
		return t(...e);
	};
}
function Pn(e) {
	G.renderCallbacks.push(e);
}
function Fn(e) {
	G.keyDownCallbacks.push(e);
}
function In(e) {
	G.keyUpCallbacks.push(e);
}
var Ln = (e, t, n) => {
	let r = (e, t, n, i) => {
		let a = "is" + t;
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			(e[a] === !0 || e.type === t) && (n ? n === e.name && i.push(e) : i.push(e)), Object.keys(e).forEach((a) => {
				let o = e[a];
				a !== "parent" && typeof o == "object" && o && r(o, t, n, i);
			});
		});
	}, i = [];
	return r(e, t, n, i), i;
}, Rn = (e, t) => {
	let n = G.scene;
	if (t === void 0) return Ln(n, e);
	let r = Array.isArray(t) ? t : [t];
	if (e === "Object3D") {
		let e = (e) => e.split("/").pop();
		r = r.map((t) => e(t));
	}
	let i = Ln(n, e), a = [];
	return r.forEach((e) => {
		a.push(i.filter((t) => t.name === e));
	}), a.length === 1 ? a[0] : a;
}, zn = () => {
	let e = G;
	return {
		replay: () => e.replayAnimate(),
		pause: () => e.pauseAnimate(),
		flush: () => e.flushAnimate()
	};
}, Bn = (t) => {
	let n = (n) => {
		let r = u();
		r.current ??= { current: null };
		let i = On(n, t, (n, i) => {
			let { ref: a = r.current, children: o, args: s, type: c, count: l, object: u, onLoad: d, fallback: f, ...p } = n, m = Array.isArray(s) ? s : [];
			t === "InstancedMesh" && l && m.push(void 0, void 0, l);
			let h;
			if (t === "Primitive") {
				if (!u) throw Error("create3DElement(): Primitives without 'object' are invalid!");
				if (d) {
					let e = ({ target: t }) => {
						t.removeEventListener("onLoad", e), d(t);
					};
					u.addEventListener("onLoad", e);
				}
				h = u;
			} else if (t === "Geometry") a.current && a.current.dispose(), c.match(/(rounded|convex|decal|parametric|text|teapot|boxLine|loft)/) ? a.current = new z[W[c]](...m) : a.current = new e[W[c === void 0 ? "buffer" : c]](...m), h = a.current;
			else if (t === "Material") {
				let t = c === void 0 ? "basic" : c;
				h = a.current ? a.current : new e[U[t]]();
			} else if (t === "BatchedMaterial") h = a.current ? a.current : new Mt[t](...m);
			else if (t === "CustomMaterial") h = a.current ? a.current : new Mt[t](c, p);
			else if (t === "Controls") {
				m.length === 0 && ((e, t) => {
					let n = G.camera, r = G.renderer, i = G.scene;
					switch (t.length = 0, e) {
						case "arcball":
							t.push(n, r.domElement, i);
							break;
						case "drag":
							t.push(i.children, n, r.domElement);
							break;
						case "pointerLock":
							t.push(n, document.body);
							break;
						case "firstPerson":
						case "fly":
						case "map":
						case "orbit":
						case "trackball":
						case "transform":
							t.push(n, r.domElement);
							break;
					}
				})(c, m), ((e, t) => {
					let { movementSpeed: r = 10, lookSpeed: i = .05, rollSpeed: a = .2, enableDamping: o = !0, dampingFactor: s = .075, rotateSpeed: c = 5 } = n;
					switch (e) {
						case "firstPerson":
							t.movementSpeed = r, t.lookSpeed = i;
							break;
						case "fly":
							t.movementSpeed = r, t.rollSpeed = a;
							break;
						case "map":
							t.enableDamping = o;
							break;
						case "orbit":
							t.enableDamping = !0, t.dampingFactor = s;
							break;
						case "trackball":
							t.rotateSpeed = c;
							break;
					}
				})(c, p);
				let e = c[0].toUpperCase() + c.slice(1) + "Controls";
				h = a.current ? a.current : new z[e](...m), G.setControls(h);
			} else t.match(/(Controls)$/) ? (h = a.current ? a.current : new z[t](...m), G.setControls(h)) : t.match(/(Pass)$/) || t.match(/(Effect)$/) ? h = a.current ? a.current : new z[t](...m) : t.match(/Geometry2?$/) ? (a.current && a.current.dispose(), a.current = new (z[t] || e[t])(...m), h = a.current) : t === "CurvePath" ? (h = a.current ? a.current : new e.Group(...m), h.forCurvePath = !0) : h = a.current ? a.current : new (z[t] || e[t])(...m);
			if (q(h, i), q(h, p), t === "Group" && f) {
				let e = o.flat(1).map((e) => e.props.url !== void 0), t = [], n = ({ target: r }) => {
					let i = r;
					i.removeEventListener("added", n);
					let a = !1;
					i.children.forEach((n, r) => {
						if (e[r]) {
							let e = ({ target: n }) => {
								let i = n;
								i.removeEventListener("onLoad", e), a || (r === 0 ? a = !0 : (i.visible = !1, t.push(i))), a && t.forEach((e) => e.visible = !0);
							};
							n.addEventListener("onLoad", e);
						} else a || (r === 0 ? (a = !0, t.forEach((e) => e.visible = !0)) : (n.visible = !1, t.push(n)));
					});
				};
				h.addEventListener("added", n);
			}
			return h;
		});
		return /* @__PURE__ */ F(_e, { children: i.length > 0 && i });
	}, r = t === "LOD" ? "lod" : `${t[0].toLowerCase()}${t.slice(1)}`;
	G.reactElements[r] = n;
}, Vn = () => {
	let t = /* @__PURE__ */ "box.capsule.circle.cone.cylinder.dodecahedron.extrude.icosahedron.lathe.octahedron.plane.polyhedron.ring.shape.sphere.tetrahedron.torus.torusKnot.tube.rounded.convex.decal.parametric.text.teapot.boxLine.loft.lineCurve.ellipseCurve.arcCurve.catmullRom3.splineCurve.bezierCurve.nurbsCurve.curve.nurbsSurface".split("."), n = (t, n, r) => {
		let { divisions: i, dim: a, order: o } = r, s;
		if (t === "lineCurve") i = i === void 0 ? 1 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n = V(n), s = new e.LineCurve3(...n)), (a === 2 || a === "2") && (n = B(n), s = new e.LineCurve(...n));
		else if (t === "ellipseCurve" || t === "arcCurve") i = i === void 0 ? 5 : i, s = new e.EllipseCurve(...n);
		else if (t === "catmullRom3") i = i === void 0 ? 5 : i, Array.isArray(n[0]) ? n[0] = V(n[0]) : n = [V(n)], s = new e.CatmullRomCurve3(...n);
		else if (t === "splineCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n[0] = V(n[0]), s = new e.CatmullRomCurve3(...n)), (a === 2 || a === "2") && (Array.isArray(n[0]) ? n[0] = B(n[0]) : n = [B(n)], s = new e.SplineCurve(...n));
		else if (t === "bezierCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, o = o === void 0 ? 2 : o, (a === 3 || a === "3") && (n = V(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve3(...n) : new e.QuadraticBezierCurve3(...n)), (a === 2 || a === "2") && (n = B(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve(...n) : new e.QuadraticBezierCurve(...n));
		else if (t === "nurbsCurve") {
			i = i === void 0 ? 5 : i;
			let { degree: e, knots: t, controlPoints: a } = r;
			n.length > 0 && ([e, t, a] = n), a = yn(a), s = new z.NURBSCurve(e, t, a);
		}
		let c = s.getPoints(i);
		return [new e.BufferGeometry().setFromPoints(c), s];
	}, r = (e, t, n) => {
		if (e === "nurbsSurface") {
			let { slices: e = 8, stacks: r = 8, degree1: i, degree2: a, knots1: o, knots2: s, controlPoints: c } = n;
			t.length > 0 && ([i, a, o, s, c] = t);
			let l = [], u = o.length - i - 1;
			for (let e = 0; e < u; e++) l.push(yn(c[e]));
			let d = new z.NURBSSurface(i, a, o, s, l);
			return [new z.ParametricGeometry((e, t, n) => d.getPoint(e, t, n), e, r), d];
		} else return [];
	};
	t.forEach((t) => {
		let i = (i) => {
			let a = u();
			a.current ??= { current: null };
			let o = On(i, t, (i, o) => {
				let { ref: s = a.current, children: c, args: l, type: u, ...d } = i, f = !1;
				if (s.current) {
					let e = s.current.geometry;
					f = !e || e.isRoundedBoxGeometry || e.isConvexGeometry || e.isDecalGeometry || e.isParametricGeometry || e.isTextGeometry;
				}
				let p;
				if (s.current && !f) p = s.current, q(p.geometry, l), q(p.material, d);
				else {
					let i = Array.isArray(l) ? l : [], a, o, s;
					if (t.match(/(rounded|convex|decal|parametric|text|teapot|boxLine|loft)/)) a = new z[W[t]](...i);
					else if (t.match(/(lineCurve|ellipseCurve|arcCurve|catmullRom3|splineCurve|bezierCurve|nurbsCurve)/)) [a, o] = n(t, i, d);
					else if (t === "curve") {
						let e = u === "catmullRom3" ? u : u + "Curve";
						u = d.linetype === "dashed" ? "dashed" : "line", [a, o] = n(e, i, d);
					} else t === "nurbsSurface" ? [a, s] = r(t, i, d) : a = new e[W[t]](...i);
					let c, f, m, h;
					if (u === void 0 ? c = "basic" : [c, f] = u.split("-"), f) h = new Kt(f, d), m = "Mesh";
					else if (c === "line2Node") if (h = new e.Line2NodeMaterial(), q(h, d), o) {
						let e = Array.from(a.attributes.position.array);
						a.dispose(), a = new z.LineGeometry().setPositions(e), m = "Line2";
					} else {
						let t = new e.WireframeGeometry(a);
						a.dispose(), a = new z.LineSegmentsGeometry().fromWireframeGeometry(t), t.dispose(), m = "LineSegments2";
					}
					else if (c === "points" || c === "pointsNode") {
						h = new e.PointsNodeMaterial(), q(h, d);
						let t = a.attributes.position, n = new e.InstancedBufferAttribute(new Float32Array(t.array), 3);
						h.positionNode = w(n), p = new e.Sprite(h), p.count = t.count, p.frustumCulled = !1, a.dispose();
					} else {
						let t = U[c];
						t ||= "Mesh" + c[0].toUpperCase() + c.slice(1) + "Material", m = t.startsWith("Points") ? "Points" : t.startsWith("Sprite") ? "Sprite" : t.startsWith("Line") ? "Line" : "Mesh", h = new e[t](), q(h, d);
					}
					p ||= new (z[m] || e[m])(a, h), (c === "dashed" || c === "dashedNode" || c === "line2Node") && p.computeLineDistances(), o && (p.userData.curve = o), s && (p.userData.surface = s);
				}
				return q(p, o), q(p, d), p;
			});
			return /* @__PURE__ */ F(_e, { children: o.length > 0 && o });
		};
		G.reactElements[t] = i;
	});
}, Hn = () => {
	let t = (e) => {
		let { url: t, texture: n, color: r, onLoad: i } = e, a = t || n || r || 1644825;
		G.createBackground(a, i);
	};
	G.reactElements.background = t;
	let n = (t) => {
		let { ref: n = u(null), color: r = 16777215, intensity: i = 1, keyLightPos: a = [
			-2,
			-1,
			3
		], fillLightPos: o = [
			2,
			4,
			4
		], backLightPos: s = [
			1,
			4,
			-2
		], hemisphereLightOn: c = !0, ...l } = t, d;
		typeof r == "number" ? d = r : r.isColor ? d = r.getHex() : Array.isArray(r) ? d = new e.Color().fromArray(r).getHex() : typeof r == "string" && (d = new e.Color(r).getHex());
		let f = G.reactElements.group;
		return /* @__PURE__ */ ve(f, {
			ref: n,
			name: "threePointLighting",
			...l,
			children: [
				/* @__PURE__ */ F("directionalLight", {
					args: [d, i * .75 * Math.PI],
					position: a
				}),
				/* @__PURE__ */ F("directionalLight", {
					args: [d, i * .375 * Math.PI],
					position: o
				}),
				/* @__PURE__ */ F("directionalLight", {
					args: [d, i * .5 * Math.PI],
					position: s
				}),
				c && /* @__PURE__ */ F("hemisphereLight", {
					args: [
						8175615,
						16770492,
						.2 * Math.PI
					],
					position: [
						0,
						1,
						0
					]
				})
			]
		});
	};
	G.reactElements.threePointLighting = n;
	let r = (e) => {
		let { ref: t = u(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 1, ...o } = e, s = r, c = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]), l = -c, d = c, f = c, p = -c, m = c * .1, h = c * 2, g = G.reactElements.directionalLight;
		return /* @__PURE__ */ F(g, {
			ref: t,
			position: r,
			args: [i, a],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-left": l,
			"shadow-camera-right": d,
			"shadow-camera-top": f,
			"shadow-camera-bottom": p,
			"shadow-camera-near": m,
			"shadow-camera-far": h,
			castShadow: !0,
			...o
		});
	};
	G.reactElements.shadowDirectionalLight = r;
	let i = (e) => {
		let { ref: t = u(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 200, distance: o = 0, angle: s = Math.PI / 6, penumbra: c = 1, decay: l = 1.2, ...d } = e, f = r, p = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2]), m = p * .1, h = p * 2, g = G.reactElements.spotLight;
		return /* @__PURE__ */ F(g, {
			ref: t,
			position: r,
			args: [
				i,
				a,
				o,
				s,
				c,
				l
			],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-near": m,
			"shadow-camera-far": h,
			"shadow-focus": 1,
			castShadow: !0,
			...d
		});
	};
	G.reactElements.shadowSpotLight = i;
	let a = (e) => {
		let { ref: t = u(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 200, distance: o = 0, decay: s = 1.2, ...c } = e, l = r, d = Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]), f = d * .1, p = d * 2, m = G.reactElements.pointLight;
		return /* @__PURE__ */ F(m, {
			ref: t,
			position: r,
			args: [
				i,
				a,
				o,
				s
			],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-near": f,
			"shadow-camera-far": p,
			castShadow: !0,
			...c
		});
	};
	G.reactElements.shadowPointLight = a;
	let o = (e) => {
		let { ref: t = u(null), width: n = 100, depth: r = n, type: i = "shadow", color: a = 0, opacity: o = .5, ...s } = e, c = G.reactElements.plane;
		return /* @__PURE__ */ F(c, {
			ref: t,
			receiveShadow: !0,
			"rotation-x": Math.PI / -2,
			args: [n, r],
			type: i,
			color: a,
			opacity: o,
			...s
		});
	};
	G.reactElements.shadowPlaneReceiver = o;
}, Un = class {
	parse(e) {
		let t = "", n = {};
		function r(e) {
			let t = atob(e.split(",")[1]), n = new Uint8Array(t.length);
			for (let e = 0, r = t.length; e < r; e++) n[e] = t.charCodeAt(e);
			return n;
		}
		function i(e, t) {
			if (e.isDataTexture === !0) return console.error("saveTexture: DataTexture not supported.", e), !1;
			let i = document.createElement("canvas"), a = i.getContext("2d");
			return i.width = e.image.width, i.height = e.image.height, a.drawImage(e.image, 0, 0), n[t] = r(i.toDataURL()), !0;
		}
		function a(e) {
			let n, r = "", a = "", o = Array.isArray(e.material) ? e.material : [e.material];
			for (let e = 0, s = o.length; e < s; e++) {
				if (n = o[e], r = n.name === "" ? `material${n.id}` : n.name, t += `newmtl ${r}\n`, n.color) {
					let e = n.color;
					t += `Kd ${e.r} ${e.g} ${e.b}\n`;
				}
				if (n.specular) {
					let e = n.specular;
					t += `Ks ${e.r} ${e.g} ${e.b}\n`;
				}
				if (n.emissive) {
					let e = n.emissive;
					t += `Ke ${e.r} ${e.g} ${e.b}\n`;
				}
				n.shininess && (t += `Ns ${n.shininess}\n`), n.opacity && n.opacity < 1 && n.transparent === !0 && (t += `d ${n.opacity}\n`, t += `Tr ${1 - n.opacity}\n`), n.map && (a = r + "_diffuse.png", i(n.map, a) && (t += "map_Kd " + a + "\n")), n.specularMap && (a = r + "_specular.png", i(n.specularMap, a) && (t += "map_Ks " + a + "\n")), n.emissiveMap && (a = r + "_emissive.png", i(n.emissiveMap, a) && (t += "map_Ke " + a + "\n")), n.normalMap && (a = r + "_normal.png", i(n.normalMap, a) && (t += "norm " + a + "\n")), n.bumpMap && (a = r + "_bump.png", i(n.bumpMap, a) && (t += "map_bump " + a + "\n")), n.alphaMap && (a = r + "_alpha.png", i(n.alphaMap, a) && (t += "map_d " + a + "\n", n.transparent = !0));
			}
		}
		return e.traverse(function(e) {
			e.isMesh === !0 && a(e);
		}), {
			mtl: t,
			textures: n
		};
	}
}, Wn = class {
	parse(e, r, o = {}) {
		if (o = Object.assign({
			version: "1.4.1",
			author: null,
			textureDirectory: "",
			upAxis: "Y_UP",
			unitName: null,
			unitMeter: null
		}, o), o.upAxis.match(/^[XYZ]_UP$/) === null) return console.error("ColladaExporter: Invalid upAxis: valid values are X_UP, Y_UP or Z_UP."), null;
		if (o.unitName !== null && o.unitMeter === null) return console.error("ColladaExporter: unitMeter needs to be specified if unitName is specified."), null;
		if (o.unitMeter !== null && o.unitName === null) return console.error("ColladaExporter: unitName needs to be specified if unitMeter is specified."), null;
		o.textureDirectory !== "" && (o.textureDirectory = `${o.textureDirectory}/`.replace(/\\/g, "/").replace(/\/+/g, "/"));
		let s = o.version;
		if (s !== "1.4.1" && s !== "1.5.0") return console.warn(`ColladaExporter : Version ${s} not supported for export. Only 1.4.1 and 1.5.0.`), null;
		function c(e) {
			let t = /^<\//, n = /(\?>$)|(\/>$)/, r = /<[^>]+>[^<]*<\/[^<]+>/, i = (e, t) => t > 0 ? e + i(e, t - 1) : "", a = 0;
			return e.match(/(<[^>]+>[^<]+<\/[^<]+>)|(<[^>]+>)/g).map((e) => {
				!r.test(e) && !n.test(e) && t.test(e) && a--;
				let o = `${i("  ", a)}${e}`;
				return !r.test(e) && !n.test(e) && !t.test(e) && a++, o;
			}).join("\n");
		}
		function l(e) {
			let t = atob(e), n = new Uint8Array(t.length);
			for (let e = 0, r = n.length; e < r; e++) n[e] = t.charCodeAt(e);
			return n;
		}
		let u, d;
		function f(e, t) {
			return u ||= document.createElement("canvas"), d ||= u.getContext("2d"), u.width = e.width, u.height = e.height, d.drawImage(e, 0, 0), l(u.toDataURL(`image/${t}`, 1).replace(/^data:image\/(png|jpg);base64,/, ""));
		}
		let p = [
			"getX",
			"getY",
			"getZ",
			"getW"
		], m = new t();
		function h(e, t = !1) {
			if (t) {
				let t = new Float32Array(e.count * 3);
				for (let n = 0, r = e.count; n < r; n++) m.fromBufferAttribute(e, n).convertLinearToSRGB(), t[3 * n + 0] = m.r, t[3 * n + 1] = m.g, t[3 * n + 2] = m.b;
				return t;
			} else if (e.isInterleavedBufferAttribute) {
				let t = new e.array.constructor(e.count * e.itemSize), n = e.itemSize;
				for (let r = 0, i = e.count; r < i; r++) for (let i = 0; i < n; i++) t[r * n + i] = e[p[i]](r);
				return t;
			} else return e.array;
		}
		function g(e, t, n) {
			return Array.isArray(e) ? e.slice(t, t + n) : new e.constructor(e.buffer, t * e.BYTES_PER_ELEMENT, n);
		}
		function _(e, t, n, r, i = !1) {
			let a = h(e, i);
			return `<source id="${t}"><float_array id="${t}-array" count="${a.length}">` + a.join(" ") + `</float_array><technique_common><accessor source="#${t}-array" count="${Math.floor(a.length / e.itemSize)}" stride="${e.itemSize}">` + n.map((e) => `<param name="${e}" type="${r}" />`).join("") + "</accessor></technique_common></source>";
		}
		let v;
		function y(e) {
			return e.updateMatrix(), v ||= new i(), v.copy(e.matrix), v.transpose(), `<matrix>${v.toArray().join(" ")}</matrix>`;
		}
		function b(e) {
			let t = w.get(e);
			if (!t) {
				let n = e;
				if (n.isBufferGeometry !== !0) throw Error("THREE.ColladaExporter: Geometry is not of type THREE.BufferGeometry.");
				let r = `Mesh${te.length + 1}`, i = n.index ? n.index.count * n.index.itemSize : n.attributes.position.count, a = n.groups != null && n.groups.length !== 0 ? n.groups : [{
					start: 0,
					count: i,
					materialIndex: 0
				}], o = `<geometry id="${r}"${e.name ? ` name="${e.name}"` : ""}><mesh>`, s = `${r}-position`, c = `${r}-vertices`;
				o += _(n.attributes.position, s, [
					"X",
					"Y",
					"Z"
				], "float"), o += `<vertices id="${c}"><input semantic="POSITION" source="#${s}" /></vertices>`;
				let l = `<input semantic="VERTEX" source="#${c}" offset="0" />`;
				if ("normal" in n.attributes) {
					let e = `${r}-normal`;
					o += _(n.attributes.normal, e, [
						"X",
						"Y",
						"Z"
					], "float"), l += `<input semantic="NORMAL" source="#${e}" offset="0" />`;
				}
				if ("uv" in n.attributes) {
					let e = `${r}-texcoord`;
					o += _(n.attributes.uv, e, ["S", "T"], "float"), l += `<input semantic="TEXCOORD" source="#${e}" offset="0" set="0" />`;
				}
				if ("uv2" in n.attributes) {
					let e = `${r}-texcoord2`;
					o += _(n.attributes.uv2, e, ["S", "T"], "float"), l += `<input semantic="TEXCOORD" source="#${e}" offset="0" set="1" />`;
				}
				if ("color" in n.attributes) {
					let e = `${r}-color`;
					o += _(n.attributes.color, e, [
						"R",
						"G",
						"B"
					], "float", !0), l += `<input semantic="COLOR" source="#${e}" offset="0" />`;
				}
				let u = null;
				if (n.index) u = h(n.index);
				else {
					u = Array(i);
					for (let e = 0, t = u.length; e < t; e++) u[e] = e;
				}
				for (let e = 0, t = a.length; e < t; e++) {
					let t = a[e], n = g(u, t.start, t.count), r = n.length / 3;
					o += `<triangles material="MESH_MATERIAL_${t.materialIndex}" count="${r}">`, o += l, o += `<p>${n.join(" ")}</p>`, o += "</triangles>";
				}
				o += "</mesh></geometry>", te.push(o), t = {
					meshid: r,
					bufferGeometry: n
				}, w.set(e, t);
			}
			return t;
		}
		function x(e) {
			let t = E.get(e);
			if (t == null) {
				t = `image-${D.length + 1}`;
				let n = e.name || t, r = `<image id="${t}" name="${n}">`;
				s === "1.5.0" ? r += `<init_from><ref>${o.textureDirectory}${n}.png</ref></init_from>` : r += `<init_from>${o.textureDirectory}${n}.png</init_from>`, r += "</image>", D.push(r), E.set(e, t), ee.push({
					directory: o.textureDirectory,
					name: n,
					ext: "png",
					data: f(e.image, "png"),
					original: e
				});
			}
			return t;
		}
		function S(e) {
			let r = T.get(e);
			if (r == null) {
				r = `Mat${O.length + 1}`;
				let i = "phong";
				e.isMeshLambertMaterial === !0 ? i = "lambert" : e.isMeshBasicMaterial === !0 && (i = "constant", e.map !== null && console.warn("ColladaExporter: Texture maps not supported with MeshBasicMaterial."));
				let a = e.emissive ? e.emissive : new t(0, 0, 0), o = e.color ? e.color : new t(0, 0, 0), s = e.specular ? e.specular : new t(1, 1, 1), c = e.shininess || 0, l = e.reflectivity || 0;
				a.convertLinearToSRGB(), s.convertLinearToSRGB(), o.convertLinearToSRGB();
				let u = "";
				e.transparent === !0 && (u += "<transparent>" + (e.map ? "<texture texture=\"diffuse-sampler\"></texture>" : "<float>1</float>") + "</transparent>", e.opacity < 1 && (u += `<transparency><float>${e.opacity}</float></transparency>`));
				let d = `<technique sid="common"><${i}><emission>` + (e.emissiveMap ? "<texture texture=\"emissive-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="emission">${a.r} ${a.g} ${a.b} 1</color>`) + "</emission>" + (i === "constant" ? "" : "<diffuse>" + (e.map ? "<texture texture=\"diffuse-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="diffuse">${o.r} ${o.g} ${o.b} 1</color>`) + "</diffuse>") + (i === "constant" ? "" : "<bump>" + (e.normalMap ? "<texture texture=\"bump-sampler\" texcoord=\"TEXCOORD\" />" : "") + "</bump>") + (i === "phong" ? `<specular><color sid="specular">${s.r} ${s.g} ${s.b} 1</color></specular><shininess>` + (e.specularMap ? "<texture texture=\"specular-sampler\" texcoord=\"TEXCOORD\" />" : `<float sid="shininess">${c}</float>`) + "</shininess>" : "") + `<reflective><color>${o.r} ${o.g} ${o.b} 1</color></reflective><reflectivity><float>${l}</float></reflectivity>` + u + `</${i}></technique>`, f = `<effect id="${r}-effect"><profile_COMMON>` + (e.map ? `<newparam sid="diffuse-surface"><surface type="2D"><init_from>${x(e.map)}</init_from></surface></newparam><newparam sid="diffuse-sampler"><sampler2D><source>diffuse-surface</source></sampler2D></newparam>` : "") + (e.specularMap ? `<newparam sid="specular-surface"><surface type="2D"><init_from>${x(e.specularMap)}</init_from></surface></newparam><newparam sid="specular-sampler"><sampler2D><source>specular-surface</source></sampler2D></newparam>` : "") + (e.emissiveMap ? `<newparam sid="emissive-surface"><surface type="2D"><init_from>${x(e.emissiveMap)}</init_from></surface></newparam><newparam sid="emissive-sampler"><sampler2D><source>emissive-surface</source></sampler2D></newparam>` : "") + (e.normalMap ? `<newparam sid="bump-surface"><surface type="2D"><init_from>${x(e.normalMap)}</init_from></surface></newparam><newparam sid="bump-sampler"><sampler2D><source>bump-surface</source></sampler2D></newparam>` : "") + d + (e.side === n ? "<extra><technique profile=\"THREEJS\"><double_sided sid=\"double_sided\" type=\"int\">1</double_sided></technique></extra>" : "") + "</profile_COMMON></effect>", p = e.name ? ` name="${e.name}"` : "", m = `<material id="${r}"${p}><instance_effect url="#${r}-effect" /></material>`;
				ne.push(m), O.push(f), T.set(e, r);
			}
			return r;
		}
		function C(e) {
			let t = `<node name="${e.name}">`;
			if (t += y(e), e.isMesh === !0 && e.geometry !== null) {
				let n = b(e.geometry), r = n.meshid, i = n.bufferGeometry, o = null, s, c = e.material || new a(), l = Array.isArray(c) ? c : [c];
				s = i.groups.length > l.length ? Array(i.groups.length) : Array(l.length), o = s.fill().map((e, t) => S(l[t % l.length])), t += `<instance_geometry url="#${r}">` + (o.length > 0 ? "<bind_material><technique_common>" + o.map((e, t) => `<instance_material symbol="MESH_MATERIAL_${t}" target="#${e}" ><bind_vertex_input semantic="TEXCOORD" input_semantic="TEXCOORD" input_set="0" /></instance_material>`).join("") + "</technique_common></bind_material>" : "") + "</instance_geometry>";
			}
			return e.children.forEach((e) => t += C(e)), t += "</node>", t;
		}
		let w = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), ee = [], D = [], te = [], O = [], ne = [], re = C(e), k = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><COLLADA xmlns="${s === "1.4.1" ? "http://www.collada.org/2005/11/COLLADASchema" : "https://www.khronos.org/collada/"}" version="${s}"><asset>` + ("<contributor><authoring_tool>three.js Collada Exporter</authoring_tool>" + (o.author === null ? "" : `<author>${o.author}</author>`) + `</contributor><created>${(/* @__PURE__ */ new Date()).toISOString()}</created><modified>${(/* @__PURE__ */ new Date()).toISOString()}</modified>` + (o.unitName === null ? "" : `<unit name="${o.unitName}" meter="${o.unitMeter}" />`) + `<up_axis>${o.upAxis}</up_axis>`) + "</asset>";
		k += `<library_images>${D.join("")}</library_images>`, k += `<library_effects>${O.join("")}</library_effects>`, k += `<library_materials>${ne.join("")}</library_materials>`, k += `<library_geometries>${te.join("")}</library_geometries>`, k += `<library_visual_scenes><visual_scene id="Scene" name="scene">${re}</visual_scene></library_visual_scenes>`, k += "<scene><instance_visual_scene url=\"#Scene\"/></scene>", k += "</COLLADA>";
		let A = {
			data: c(k),
			textures: ee
		};
		return typeof r == "function" && requestAnimationFrame(() => r(A)), A;
	}
}, Y = function() {
	let e = document.createElement("a");
	this.saveFile = function(t, n) {
		let r = t.split(".").pop().toLowerCase();
		switch (n ||= J().scene, r) {
			case "json":
				i(n, t);
				break;
			case "obj":
				a(n, t);
				break;
			case "dae":
				o(n, t);
				break;
			case "glb":
				s(n, t);
				break;
			case "gltf":
				c(n, t);
				break;
			case "stl":
				l(n, t);
				break;
			case "ply":
				u(n, t);
				break;
			default:
				console.log("The file type \"" + r + "\" is not supported.");
				break;
		}
		function i(e, t = "object.json") {
			let n = (e, t) => typeof t == "number" ? parseFloat(t.toFixed(6)) : t, r = e.toJSON();
			try {
				r = JSON.stringify(r, n, "	"), r = r.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, "$1");
			} catch {
				r = JSON.stringify(r);
			}
			d(r, t);
		}
		function a(e, t = "model.obj") {
			let n = t, r = n.replace(".obj", ""), i = r + ".mtl", { OBJExporter: a } = Y.exporters, o = new a().parse(e, r), { MTLExporter: s } = Y.exporters, { mtl: c, textures: l } = new s().parse(e), u = {
				[n]: rt(o),
				[i]: rt(c)
			};
			Object.keys(l).forEach((e) => {
				u[e] = l[e];
			}), f(at(u), r + ".zip");
		}
		function o(e, t = "scene.dae") {
			let { ColladaExporter: n } = Y.exporters;
			new n().parse(e, function(e) {
				d(e.data, t);
			});
		}
		function s(e, t = "scene.glb") {
			let { GLTFExporter: n } = Y.exporters;
			new n().parse(e, function(e) {
				f(e, t);
			}, function(e) {
				console.log("An error happened during parsing", e);
			}, { binary: !0 });
		}
		function c(e, t = "scene.gltf") {
			let { GLTFExporter: n } = Y.exporters;
			new n().parse(e, function(e) {
				d(JSON.stringify(e, null, 2), t);
			}, function(e) {
				console.log("An error happened during parsing", e);
			}, { binary: !1 });
		}
		function l(e, t = "model.stl", n = !1) {
			let { STLExporter: r } = Y.exporters, i = new r();
			n === !0 ? d(i.parse(e), t) : f(i.parse(e, { binary: !0 }), t);
		}
		function u(e, t = "model.ply") {
			let { PLYExporter: n } = Y.exporters;
			d(new n().parse(e), t);
		}
		function d(e, t) {
			p(new Blob([e], { type: "text/plain" }), t);
		}
		function f(e, t) {
			p(new Blob([e], { type: "application/octet-stream" }), t);
		}
		function p(t, n) {
			e.href = URL.createObjectURL(t), e.download = n, e.dispatchEvent(new MouseEvent("click")), URL.revokeObjectURL(e.href);
		}
	};
};
Y.exporters = {}, Y.setExporter = (e) => {
	Y.exporters = {
		...Y.exporters,
		...e
	};
};
var Gn = (e) => {
	switch (e.split(".").pop().toLowerCase()) {
		case "obj":
			Y.setExporter({
				OBJExporter: $e,
				MTLExporter: Un
			});
			break;
		case "dae":
			Y.setExporter({ ColladaExporter: Wn });
			break;
		case "glb":
			Y.setExporter({ GLTFExporter: Qe });
			break;
		case "gltf":
			Y.setExporter({ GLTFExporter: Qe });
			break;
		case "stl":
			Y.setExporter({ STLExporter: tt });
			break;
		case "ply":
			Y.setExporter({ PLYExporter: et });
			break;
	}
}, Kn = (e, t) => {
	let n = new Y();
	Gn(e), n.saveFile(e, t);
}, qn = `https://unpkg.com/three@0.${e.REVISION}.0/examples/jsm/libs/basis/`, Jn = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/", X = function() {
	let t = this;
	this.imageFiles = [], this.mtlFile = null, this.loadItemList = (e) => {
		Xn.getFilesFromItemList(e, (e, n) => {
			t.loadFiles(e, n);
		});
	}, this.loadFiles = async function(e, t) {
		if (e.length > 0) {
			t ||= Xn.createFilesMap(e);
			let n = a();
			n.setURLModifier((e) => {
				e = e.replace(/^(\.?\/)/, "");
				let n = t[e];
				return n ? (console.log("Loading", e), URL.createObjectURL(n)) : e;
			}), this.imageFiles = [], this.mtlFile = null;
			for (let t = 0; t < e.length; t++) e[t].name.match(/\.(png|jpg|gif)$/i) ? this.imageFiles.push(e[t]) : e[t].name.match(/\.(mtl)$/i) && (this.mtlFile = e[t]);
			for (let t = 0; t < e.length; t++) this.loadFile(e[t], n);
			this.mtlFile = null;
		}
	}, this.loadFile = function(e, t) {
		let i = e.name, a = i.split(".").pop().toLowerCase(), o = new FileReader();
		switch (o.addEventListener("progress", (e) => {
			let t = "(" + Math.floor(e.total / 1e3).toLocaleString() + " KB)", n = Math.floor(e.loaded / e.total * 100) + "%";
			console.log("Loading", i, t, n);
		}), a) {
			case "3ds":
			case "3mf":
			case "amf":
			case "drc":
			case "fbx":
			case "md2":
			case "glb":
			case "gltf":
			case "kmz":
			case "ply":
			case "stl":
			case "vtk":
			case "vox":
				o.addEventListener("load", (e) => n(a, e, i, t, !1), !1), o.readAsArrayBuffer(e);
				break;
			case "dae":
			case "js":
			case "json":
			case "svg":
			case "wrl":
				o.addEventListener("load", (e) => n(a, e, i, t, !1), !1), o.readAsText(e);
				break;
			case "obj":
				function s(e, n = null) {
					o.addEventListener("load", async function(e) {
						let r = e.target.result, { OBJLoader: a } = X.loaders, o = new a(t);
						n && o.setMaterials(n);
						let s = o.parse(r);
						Yn.convertPhongToStandard(s), s.name = i, c(s);
					}, !1), o.readAsText(e);
				}
				function l(e, n) {
					if (n) {
						let r = new FileReader();
						r.addEventListener("load", async function(r) {
							let i = r.target.result, { MTLLoader: a } = X.loaders, o = new a(t).parse(i);
							o.preload(), console.log("Loading", n.name), s(e, o);
						}, !1), r.readAsText(n);
					} else s(e);
				}
				l(e, this.mtlFile);
				break;
			case "zip":
				setTimeout(() => {
					o.addEventListener("load", (e) => r(e.target.result, i), !1), o.readAsArrayBuffer(e);
				}, 10);
				break;
			default:
				[
					"png",
					"jpg",
					"gif",
					"bmp",
					"tga",
					"mtl",
					"bin"
				].includes(a) || console.log("Unsupported 3D file format:", a);
				break;
		}
	};
	async function n(n, a, l, d, f = !1) {
		if (f) {
			let e = a;
			if (n === "dae" || n === "gltf" || n === "wrl") {
				let { strFromU8: t } = X.loaders;
				a = t(e);
			} else a = e.buffer;
		} else a = a.target.result;
		switch (n) {
			case "3ds": {
				let { TDSLoader: e } = X.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "3mf": {
				let { ThreeMFLoader: e } = X.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "amf": {
				let { AMFLoader: e } = X.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "dae": {
				let { ColladaLoader: e } = X.loaders, t = new e(d).parse(a);
				t.scene.name = l, s(t.scene, t.animations), c(t.scene);
				break;
			}
			case "drc": {
				let { DRACOLoader: t } = X.loaders, n = new t(d);
				n.setDecoderPath(Jn), n.parse(a, function(t) {
					t.center(), o(t);
					let r;
					if (t.index !== null) {
						let n = new e.MeshStandardMaterial();
						r = new e.Mesh(t, n), r.name = l;
					} else {
						let n = new e.PointsMaterial({ size: .01 });
						t.hasAttribute("color") === !0 && (n.vertexColors = !0), r = new e.Points(t, n), r.name = l;
					}
					n.dispose(), c(r);
				});
				break;
			}
			case "fbx": {
				let { FBXLoader: e } = X.loaders, t = new e(d).parse(a);
				t.name = l, s(t, t.animations), c(t);
				break;
			}
			case "md2": {
				let { MD2Loader: n } = X.loaders, r = new n(d).parse(a), i = null;
				if (f) for (let n in t.zip) {
					let r = n.split(".").pop().toLowerCase();
					if (r === "jpg" && (r = "jpeg"), [
						"png",
						"jpeg",
						"gif"
					].includes(r)) {
						let a = t.zip[n], o = "image/" + r, s = new Blob([a.buffer], { type: o }), c = URL.createObjectURL(s);
						i = new e.TextureLoader().load(c);
						break;
					}
				}
				else t.imageFiles.length === 1 && (i = new e.TextureLoader().load(URL.createObjectURL(t.imageFiles[0])));
				let o = new e.MeshStandardMaterial({ map: i }), u = new e.Mesh(r, o);
				u.mixer = new e.AnimationMixer(u), u.name = l, s(u, r.animations), c(u);
				break;
			}
			case "glb": {
				let e = await i(d);
				e.parse(a, "", function(t) {
					let n = t.scene;
					n.name = l, s(n, t.animations), c(n), e.dracoLoader.dispose(), e.ktx2Loader.dispose();
				});
				break;
			}
			case "gltf": {
				let e = await i(d);
				e.parse(a, "", function(t) {
					let n = t.scene;
					n.name = l, s(n, t.animations), c(n), e.dracoLoader.dispose(), e.ktx2Loader.dispose();
				});
				break;
			}
			case "js":
			case "json": {
				if (a.indexOf("postMessage") !== -1) {
					let e = new Blob([a], { type: "text/javascript" }), t = URL.createObjectURL(e), n = new Worker(t);
					n.onmessage = function(e) {
						e.data.metadata = { version: 2 }, u(e.data);
					}, n.postMessage(Date.now());
					return;
				}
				let e;
				try {
					e = JSON.parse(a);
				} catch (e) {
					alert(e);
					return;
				}
				u(e);
				break;
			}
			case "kmz": {
				let { KMZLoader: e } = X.loaders, t = new e(d).parse(a);
				t.scene.name = l, c(t.scene);
				break;
			}
			case "mtl":
				f && (t.bufferMTL = a);
				break;
			case "obj":
				f && (t.bufferOBJ = a);
				break;
			case "ply": {
				let { PLYLoader: t } = X.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial(), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "stl": {
				let { STLLoader: t } = X.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial({ vertexColors: !!n.hasColors }), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "svg": {
				let { SVGLoader: t } = X.loaders, n = new t(d).parse(a).paths, r = new e.Group();
				r.scale.multiplyScalar(.1), r.scale.y *= -1;
				for (let i = 0; i < n.length; i++) {
					let a = n[i], o = new e.MeshBasicMaterial({
						color: a.color,
						depthWrite: !1
					}), s = t.createShapes(a);
					for (let t = 0; t < s.length; t++) {
						let n = s[t], i = new e.ShapeGeometry(n), a = new e.Mesh(i, o);
						r.add(a);
					}
				}
				r.name = l, c(r);
				break;
			}
			case "vtk": {
				let { VTKLoader: t } = X.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial(), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "vox": {
				let { VOXLoader: e } = X.loaders, { scene: t } = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "wrl": {
				let { VRMLLoader: e } = X.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "zip":
				r(a, l);
				break;
			default:
				[
					"png",
					"jpg",
					"gif",
					"bmp",
					"tga",
					"mtl",
					"bin"
				].includes(n) || console.log("Unsupported 3D file format:", n);
				break;
		}
	}
	async function r(e, r) {
		let { unzipSync: i, strFromU8: o } = X.loaders, s = i(new Uint8Array(e));
		t.zip = s;
		let l = a();
		l.setURLModifier((e) => {
			let t = s[e];
			if (t) {
				console.log("Loading", e);
				let n = new Blob([t.buffer], { type: "application/octet-stream" });
				return URL.createObjectURL(n);
			}
			return e;
		}), t.bufferOBJ = null, t.bufferMTL = null;
		for (let e in s) {
			let t = s[e];
			n(e.split(".").pop().toLowerCase(), t, r, l, !0);
		}
		if (t.bufferMTL && t.bufferOBJ) {
			let { OBJLoader: e, MTLLoader: n } = X.loaders, i = new n(l).parse(o(t.bufferMTL)), a = new e(l).setMaterials(i).parse(o(t.bufferOBJ));
			Yn.convertPhongToStandard(a), a.name = r, c(a);
		}
		t.bufferOBJ = null, t.bufferMTL = null, t.zip = null;
	}
	async function i(e) {
		let { GLTFLoader: t, KTX2Loader: n, DRACOLoader: r, MeshoptDecoder: i } = X.loaders, a = new t(e);
		if (r) {
			let e = new r();
			e.setDecoderPath(Jn), a.setDRACOLoader(e);
		}
		if (n) {
			let e = new n();
			e.setTranscoderPath(qn);
			let t = J().threefy;
			await t.ready, e.detectSupport(t.renderer), a.setKTX2Loader(e);
		}
		return i && a.setMeshoptDecoder(i), Promise.resolve(a).then((e) => e);
	}
	function a() {
		let t = new e.LoadingManager();
		return t.onStart = () => {
			Qn();
		}, t.onProgress = (e, t, n) => {
			er(t, n);
		}, t.onLoad = () => {
			$n();
		}, t.onError = (e) => {
			tr("There was an error loading " + e);
		}, t;
	}
	function o(e) {
		let t = !1;
		if (e.isDiscreteGeometry === !0) {
			let n = e.faces[0].vertexNormals;
			n && n.length === 3 && (t = !0);
		} else if (e.isBufferGeometry === !0) {
			let n = e.attributes.normal;
			n && n.count > 0 && (t = !0);
		}
		t === !1 && e.computeVertexNormals();
	}
	function s(e, t) {
		t && t.length > 0 && e.animations.push(...t);
	}
	function c(e) {
		let { threefy: t } = J(), n = t._cache.get(e.name);
		n[0] = e;
		for (let t = 1, r = n.length; t < r; t++) n[t].dispatchEvent({ type: e.name });
	}
	function l(e) {
		J().threefy.setScene(e);
	}
	function u(t) {
		switch (t.metadata === void 0 && (t.metadata = { type: "DiscreteGeometry" }), t.metadata.type === void 0 && (t.metadata.type = "DiscreteGeometry"), t.metadata.formatVersion !== void 0 && (t.metadata.version = t.metadata.formatVersion), t.metadata.type.toLowerCase()) {
			case "buffergeometry": {
				let n = new e.BufferGeometryLoader().parse(t);
				c(new e.Mesh(n));
				break;
			}
			case "discretegeometry":
				console.error("ThreeLoader: \"DiscreteGeometry\" is no longer supported.");
				break;
			case "object":
				new e.ObjectLoader().parse(t, function(e) {
					e.isScene ? l(e) : c(e);
				});
				break;
		}
	}
	this.openFiles = function() {
		let e = document.createElement("div");
		e.style.cssText = "position: absolute; left: 44%; top: 48%;";
		let n = document.createElement("input");
		n.id = "file-input", n.type = "file", n.multiple = !0, n.style.display = "none", n.addEventListener("change", () => {
			e.remove(), n.files && t.loadFiles(n.files);
		});
		let r = document.createElement("label");
		r.htmlFor = "file-input", r.style.cssText = "color: white; background-color: #3276c3; font-weight: bold; cursor: pointer; padding: 0.625rem; border-radius: 0.4rem;", r.addEventListener("mouseover", () => {
			r.style.backgroundColor = "#333";
		}), r.addEventListener("mouseleave", () => {
			r.style.backgroundColor = "#3276c3";
		}), r.innerHTML = "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 17\" style=\"width:1em; height:1em; fill:currentColor; vertical-align: middle; margin-top: -0.25em; margin-right: 0.25em;\">\n                <path d=\"M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z\"></path>\n            </svg>\n            <span>Choose files</span>\n        ", e.appendChild(n), e.appendChild(r), document.body.append(e);
	}, this.dragDropFiles = function(e) {
		e ||= J().threefy.dom, e.addEventListener("dragover", function(t) {
			t.preventDefault(), t.stopPropagation(), e.classList.add("dragover");
		}), e.addEventListener("dragleave", function(t) {
			t.preventDefault(), t.stopPropagation(), e.classList.remove("dragover");
		}), e.addEventListener("drop", function(e) {
			e.preventDefault(), e.dataTransfer.types[0] !== "text/plain" && (e.dataTransfer.items ? t.loadItemList(e.dataTransfer.items) : t.loadFiles(e.dataTransfer.files));
		}, !1);
	};
};
X.loaders = {}, X.setLoader = (e) => {
	X.loaders = {
		...X.loaders,
		...e
	};
};
var Yn = { convertPhongToStandard: function(t) {
	let n = (t) => {
		if (!t || !t.isMeshPhongMaterial) return t;
		let n = new e.MeshStandardMaterial();
		return n.name = t.name, n.color.copy(t.color), n.emissive.copy(t.emissive), n.map = t.map, n.emissiveMap = t.emissiveMap, n.normalMap = t.normalMap, n.normalScale.copy(t.normalScale), n.bumpMap = t.bumpMap, n.bumpScale = t.bumpScale, n.aoMap = t.aoMap, n.aoMapIntensity = t.aoMapIntensity, n.alphaMap = t.alphaMap, n.transparent = t.transparent, n.opacity = t.opacity, n.side = t.side, n.vertexColors = t.vertexColors, n.roughness = 1, n.metalness = 0, t.dispose(), n;
	};
	t.traverse((e) => {
		!e.isMesh && !e.isPoints && !e.isLine || (e.material = Array.isArray(e.material) ? e.material.map(n) : n(e.material));
	});
} }, Xn = {
	createFilesMap: function(e) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			t[r.name] = r;
		}
		return t;
	},
	getFilesFromItemList: function(e, t) {
		let n = 0, r = 0, i = [], a = {};
		function o() {
			n++, n === r && t(i, a);
		}
		function s(e) {
			e && (e.isDirectory ? e.createReader().readEntries(function(t) {
				for (let e = 0; e < t.length; e++) s(t[e]);
				o(e);
			}) : e.isFile && e.file(function(t) {
				i.push(t), a[e.fullPath.substr(1)] = t, o();
			}), r++);
		}
		for (let t = 0; t < e.length; t++) s(e[t].webkitGetAsEntry());
	}
}, Zn = function(e, t) {
	let n;
	if (t) {
		function e(e) {
			return e.split("").splice(5, 44, "sangk").reverse().join("");
		}
		n = e(t);
	}
	let r = e.map(async (e) => {
		let r = await (await fetch(e)).blob(), i;
		return e.split(".").pop() === "enc" ? (r = t ? await decryptFile(n, r) : null, i = e.replace(".enc", "")) : i = e, i = i.split("/").pop().split("?")[0], r ? new File([r], i) : null;
	});
	Promise.all(r).then((e) => {
		e = e.filter((e) => e), new X().loadFiles(e);
	});
}, Qn = function() {
	let e = document.getElementById("loading-spinner");
	if (e) {
		e.style.display = "";
		return;
	}
	e = document.createElement("div"), e.id = "loading-spinner", e.innerHTML = "\n        <div style=\"position: absolute; left: 45%; top: 45%; width: 10%; vertical-align: middle; text-align: center;\">\n            <p style=\"color: white; font-size: 1.125rem; font-weight: 500;\">Loading...</p>\n            <div style=\"margin-top: 0.5rem\">\n                <svg aria-hidden=\"true\" style=\"display: inline; width: 2.5rem; height: 2.5rem; margin-right: 0.5rem; color: rgb(229 231 235); animation: spin 1s linear infinite; fill: #2563eb;\" viewBox=\"0 0 100 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\" fill=\"currentColor\"/>\n                    <path d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\" fill=\"currentFill\"/>\n                </svg>\n            </div>\n        </div>\n    ", document.body.appendChild(e);
	let t = document.createElement("style");
	t.id = "spin-keyframes", t.innerHTML = "\n        @keyframes spin {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n        }\n    ", document.head.appendChild(t);
}, $n = function() {
	let e = document.getElementById("loading-spinner");
	e && (e.style.display = "none");
}, er = function(e, t) {
	let n = document.getElementById("loading-spinner");
	n && (n.style.width = `${e / t * 100 | 0}%`);
}, tr = function(e) {
	console.warn(e);
}, nr = (e) => new Promise(async (t) => {
	let n = await (await fetch(e)).blob(), r = e.split("/").pop().split("?")[0], i = new File([n], r), a = new FileReader();
	a.addEventListener("load", (e) => {
		let n = e.target.result, r = it(new Uint8Array(n));
		t(Object.keys(r));
	}, !1), a.readAsArrayBuffer(i);
}), rr = (e) => {
	switch (e.split(".").pop().toLowerCase()) {
		case "3ds":
			X.setLoader({ TDSLoader: yt });
			break;
		case "3mf":
			X.setLoader({ ThreeMFLoader: dt });
			break;
		case "amf":
			X.setLoader({ AMFLoader: ut });
			break;
		case "dae":
			X.setLoader({ ColladaLoader: ft });
			break;
		case "drc":
			X.setLoader({ DRACOLoader: St });
			break;
		case "fbx":
			X.setLoader({ FBXLoader: ct });
			break;
		case "md2":
			X.setLoader({ MD2Loader: st });
			break;
		case "gltf":
		case "glb":
			X.setLoader({
				GLTFLoader: bt,
				KTX2Loader: xt,
				DRACOLoader: St,
				MeshoptDecoder: wt
			});
			break;
		case "kmz":
			X.setLoader({ KMZLoader: vt });
			break;
		case "mtl":
		case "obj":
			X.setLoader({
				OBJLoader: ht,
				MTLLoader: gt
			});
			break;
		case "ply":
			X.setLoader({ PLYLoader: pt });
			break;
		case "stl":
			X.setLoader({ STLLoader: mt });
			break;
		case "svg":
			X.setLoader({ SVGLoader: _t });
			break;
		case "vtk":
			X.setLoader({ VTKLoader: ot });
			break;
		case "vox":
			X.setLoader({ VOXLoader: Ct });
			break;
		case "wrl":
			X.setLoader({ VRMLLoader: lt });
			break;
		case "zip":
			X.setLoader({
				unzipSync: it,
				strFromU8: nt
			}), nr(e).then((e) => {
				e.forEach((e) => rr(e));
			});
			break;
	}
}, ir = (t, n = "texture") => {
	t = Array.isArray(t) ? t : [t];
	let { threefy: r } = J(), i;
	n === "texture" && (i = new e.TextureLoader()), n === "audio" && (i = new e.AudioLoader());
	let a = (e) => {
		let t = r._cache.get(e);
		return t ? Promise.resolve(t) : new Promise((t) => {
			i.load(e, (n) => {
				r._cache.set(e, n), t(n);
			});
		});
	};
	return new Promise((e) => {
		Promise.all(t.map((e) => a(e))).then((t) => e(t.length === 1 ? t[0] : t));
	});
}, ar = (e) => ir(e, "texture"), or = (e) => ir(e, "audio"), sr = (e) => {
	e = Array.isArray(e) ? e : [e];
	let { threefy: t } = J(), n = e.map((e) => t.loadTexture(e));
	return n.length === 1 ? n[0] : n;
}, cr = (t) => {
	if (t = Array.isArray(t) ? t : [t], /png|jpg|jpeg|gif|bmp/i.test(t[0].split(".").pop())) return sr(t);
	if (/mp3|ogg|wav/i.test(t[0].split(".").pop())) return or(t);
	t.forEach((e) => rr(e));
	let n = (e) => e.split("/").pop(), { threefy: r } = J(), i = [], a = ({ target: e }) => {
		let t = r._cache.get(e.name)[0], n = i.map((e) => e.name).indexOf(e.name);
		i[n] = t;
		let o = e;
		o.removeEventListener(o.name, a);
		let s = o.parent;
		s && (s.remove(o), s.add(t)), t._listeners = o._listeners, t.applyMatrix4(o.matrix), t.dispatchEvent({ type: "onLoad" });
	};
	return t.forEach((o, s) => {
		let c = n(o), l = new e.Object3D();
		l.name = c, r._cache.has(c) ? (r._cache.get(c).push(l), t[s] = null) : r._cache.set(c, [null, l]), l.addEventListener(c, a), i.push(l);
	}), t = t.filter((e) => e !== null), t.length > 0 && Zn(t, void 0), i.length === 1 ? i[0] : i;
}, Z = class {
	constructor(e, t, n, r) {
		this.x = e, this.y = t, this.width = n, this.height = r, this.finalX = e + n, this.finalY = t + r;
	}
	overlaps(e) {
		return this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.y + this.height > e.y;
	}
}, lr = class {
	constructor(t, n = 512, r = 512, i = !0, a = 4096) {
		if (this.MAX_TEXTURE_SIZE = a, !t) return;
		this.texturesObj = t, this.textureNames = Object.keys(t), this.texWidth = n, this.texHeight = r;
		let o = {};
		this.textureNames.forEach((e) => {
			let n = t[e].uuid;
			o[n] || (o[n] = []), o[n].push(e);
		}), this.uuid2Names = o, this.canvas = document.createElement("canvas"), this.textureCount = this.textureNames.length, this.maxWidth = n, this.maxHeight = r, this.textureCache = {}, this.node = {}, this.node.rectangle = new Z(0, 0, this.maxWidth * this.textureCount, this.maxHeight * this.textureCount), this.textureOffsets = {}, this.allNodes = [], this.insert(this.node, this.findNextTexture()), this.ranges = {};
		let s = this.calculateImageSize();
		this.canvas.width = s.width, this.canvas.height = s.height;
		let c = this.canvas.getContext("2d");
		this.context = c;
		let [l, u] = [this.texWidth, this.texHeight], d = this.textureOffsets;
		Object.keys(d).forEach((e) => {
			let n = t[e], r = d[e].x, a = d[e].y;
			c.drawImage(n.image, r, a, l, u);
			let o = {};
			o.startU = r / s.width, o.endU = (r + l) / s.width, o.startV = a / s.height, o.endV = (a + u) / s.height, i && (o.startV = 1 - o.startV, o.endV = 1 - o.endV), this.ranges[e] = o;
		}), this.makeCanvasPowerOfTwo(), this.mergedTexture = new e.CanvasTexture(this.canvas), this.mergedTexture.wrapS = e.ClampToEdgeWrapping, this.mergedTexture.wrapT = e.ClampToEdgeWrapping, this.mergedTexture.minFilter = e.LinearMipmapLinearFilter, this.mergedTexture.magFilter = e.LinearFilter, this.mergedTexture.flipY = i;
	}
	isTextureAlreadyInserted(e) {
		let t = this, n = this.texturesObj[e].uuid, r = this.uuid2Names[n].find((e) => t.textureOffsets[e]);
		return r ? this.textureOffsets[r] : !1;
	}
	insert(e, t) {
		let n = 65536, r, [i, a] = [e, t];
		for (r = 0; r < n && ([i, a] = this._insert(i, a), a); r++);
		r === n && console.warn("TextureMerger.insert(): max iteration exceeded! try to increase the MAX_ITERS value");
	}
	_insert(e, t) {
		let n = this.textureOffsets, r = this.isTextureAlreadyInserted(t);
		if (r) return n[t] = r, [e, this.findNextTexture()];
		let [i, a] = [this.texWidth, this.texHeight];
		if (e.upperNode) {
			let r = this.maxWidth * this.textureCount + this.maxHeight * this.textureCount, o = 0, s = !1, c = this.texturesObj;
			for (let e = 0; e < this.allNodes.length; e++) {
				let l = this.allNodes[e];
				if (!l.textureName) {
					n[t] = {
						x: l.rectangle.x,
						y: l.rectangle.y
					};
					let u = this.calculateImageSize(), d = u.width + u.height;
					if (d < r && u.width <= this.MAX_TEXTURE_SIZE && u.height <= this.MAX_TEXTURE_SIZE) {
						let u = !1;
						Object.keys(n).forEach((e) => {
							if (e === t) return;
							let r = l.rectangle, o = n[e].x, s = n[e].y, d = c[e].image, f = new Z(r.x, r.y, i, a), p = new Z(o, s, d.width, d.height);
							f.overlaps(p) && (u = !0);
						}), u || (r = d, o = this.allNodes[e], s = !0);
					}
					delete n[t];
				}
			}
			if (s) {
				if (n[t] = {
					x: o.rectangle.x,
					y: o.rectangle.y
				}, o.textureName = t, !o.children) {
					let e = {}, t = {};
					e.upperNode = o, t.upperNode = o, o.children = [e, t];
					let n = o.rectangle.x, r = o.rectangle.y, s = this.maxWidth * this.textureCount, c = this.maxHeight * this.textureCount;
					e.rectangle = new Z(n + i, r, s - (n + i), c - r), t.rectangle = new Z(n, r + a, s - n, c - (r + a)), this.allNodes.push(e), this.allNodes.push(t);
				}
				return [e, this.findNextTexture()];
			} else throw Error("Error: Try to use smaller textures.");
		} else {
			let r = e.rectangle.width, o = e.rectangle.height;
			e.textureName = t;
			let s = {}, c = {};
			s.upperNode = e, c.upperNode = e, e.children = [s, c], s.rectangle = new Z(i, 0, r - i, a), c.rectangle = new Z(0, a, r, o - a), n[t] = {
				x: e.rectangle.x,
				y: e.rectangle.y
			};
			let l = e.children[0];
			return this.allNodes = [
				e,
				s,
				c
			], [l, this.findNextTexture()];
		}
	}
	makeCanvasPowerOfTwo(e) {
		let t = !1;
		e || (e = this.canvas, t = !0);
		let n = e.width, r = e.height, i = 2 ** Math.round(Math.log(n) / Math.log(2)), a = 2 ** Math.round(Math.log(r) / Math.log(2)), o = document.createElement("canvas");
		return o.width = i, o.height = a, o.getContext("2d").drawImage(e, 0, 0, i, a), t && (this.canvas = o), o;
	}
	calculateImageSize() {
		let e = 0, t = 0, [n, r] = [this.texWidth, this.texHeight], i = this.textureOffsets;
		return Object.keys(i).forEach((a) => {
			let o = i[a].x, s = i[a].y;
			e = Math.max(o + n, e), t = Math.max(s + r, t);
		}), {
			width: e,
			height: t
		};
	}
	findNextTexture() {
		let e = this, t = this.textureNames.find((t) => !e.textureCache[t]);
		return t ? (this.textureCache[t] = !0, t) : null;
	}
	toSameLayout(t, n) {
		let r = this.calculateImageSize(), i = document.createElement("canvas");
		i.width = r.width, i.height = r.height;
		let a = i.getContext("2d"), [o, s] = [this.texWidth, this.texHeight], c = this.textureOffsets;
		Object.keys(c).forEach((e) => {
			let n = t[e], r = c[e].x, i = c[e].y;
			a.drawImage(n.image, r, i, o, s);
		});
		let l = this.makeCanvasPowerOfTwo(i), u = new e.CanvasTexture(l);
		return u.wrapS = e.ClampToEdgeWrapping, u.wrapT = e.ClampToEdgeWrapping, u.minFilter = e.LinearMipmapLinearFilter, u.magFilter = e.LinearFilter, u.flipY = n, u;
	}
}, ur = (e, t, n) => {
	let { diffuse: r, opacity: i } = n, { color: a, emissive: o, specular: s, shininess: c, metalness: l, roughness: u } = n, { ior: d, specularIntensity: f, specularColor: p } = n, { clearcoat: m, clearcoatRoughness: h, dispersion: g } = n, { iridescence: _, iridescenceIOR: v, iridescenceThicknessMinimum: y, iridescenceThicknessMaximum: b } = n, { sheenColor: x, sheenRoughness: S, anisotropyVector: C } = n;
	r ? e.setValue(t, "diffuse", ...r) : e.setValue(t, "diffuse", 1, 1, 1), i !== void 0 && e.setValue(t, "opacity", i), a && e.setValue(t, "diffuse", ...a), o && e.setValue(t, "emissive", ...o), s && e.setValue(t, "specular", ...s), c !== void 0 && e.setValue(t, "shininess", c), l !== void 0 && e.setValue(t, "metalness", l), u !== void 0 && e.setValue(t, "roughness", u), d !== void 0 && e.setValue(t, "ior", d), f !== void 0 && e.setValue(t, "specularIntensity", f), p && e.setValue(t, "specularColor", ...p), m !== void 0 && e.setValue(t, "clearcoat", m), h !== void 0 && e.setValue(t, "clearcoatRoughness", h), g !== void 0 && e.setValue(t, "dispersion", g), _ !== void 0 && e.setValue(t, "iridescence", _), v !== void 0 && e.setValue(t, "iridescenceIOR", v), y !== void 0 && e.setValue(t, "iridescenceThicknessMinimum", y), b !== void 0 && e.setValue(t, "iridescenceThicknessMaximum", b), x && e.setValue(t, "sheenColor", ...x), S !== void 0 && e.setValue(t, "sheenRoughness", S), C && e.setValue(t, "anisotropyVector", ...C);
}, dr = (t, n = 512, r = 512, i = 6553600, a = 6553600 * 2) => {
	if (!t || t.length === 0) return;
	let o = !0, s = (t, n, r, i = "white") => {
		let a = t[`${n}-${r}-${i}`];
		if (a) return a;
		let o = document.createElement("canvas"), s = o.getContext("2d");
		o.width = n, o.height = r, s.fillStyle = i, s.fillRect(0, 0, n, r);
		let c = new e.CanvasTexture(o);
		return t[`${n}-${r}-${i}`] = c, c;
	}, c = (t, n, r, i, a = "white") => {
		let c = t[n.uuid];
		if (c) return c;
		if (!n.image) return console.warn("resizeTexture(): image data not found in your texture — using a blank texture"), s(d, r, i, a);
		o = n.flipY;
		let l = document.createElement("canvas"), u = l.getContext("2d");
		l.width = r, l.height = i;
		try {
			u.drawImage(n.image, 0, 0, r, i);
		} catch {
			return console.warn("resizeTexture(): texture image is not drawable — using a blank texture"), s(d, r, i, a);
		}
		let { mapping: f, wrapS: p, wrapT: m, magFilter: h, minFilter: g, format: _, type: v, anisotropy: y, colorSpace: b } = n, x = new e.CanvasTexture(l, f, p, m, h, g, _, v, y);
		return x.colorSpace = b, x.uuid = n.uuid, t[x.uuid] = x, x;
	}, l = {}, u = {}, d = {}, f = {}, p, { renderer: m } = J(), h = m.backend, g = m.capabilities && m.capabilities.maxTextureSize || h && h.device && h.device.limits.maxTextureDimension2D || h && h.gl && h.gl.getParameter(h.gl.MAX_TEXTURE_SIZE) || 4096, _ = [
		"alphaMap",
		"aoMap",
		"bumpMap",
		"displacementMap",
		"emissiveMap",
		"envMap",
		"lightMap",
		"map",
		"metalnessMap",
		"normalMap",
		"roughnessMap",
		"specularColorMap",
		"specularIntensityMap",
		"clearcoatMap",
		"clearcoatNormalMap",
		"clearcoatRoughnessMap",
		"transmissionMap"
	], v = t.map((e) => {
		let t = e.material;
		return Array.isArray(t) ? t[0] : t;
	});
	if (_.forEach((e) => {
		v.map((t) => !!t[e]).every((e) => e === !1) || (l[e] = {});
	}), _ = Object.keys(l), _.length > 0) {
		let t = {
			normalMap: "#8080ff",
			clearcoatNormalMap: "#8080ff"
		};
		_.forEach((e) => {
			let i = t[e] || "white";
			v.forEach((t, a) => {
				let o = `${a}`, f = t[e];
				f ? l[e][o] = c(u, f, n, r, i) : l[e][o] = s(d, n, r, i);
			});
		});
		let i = l.map ? "map" : _.find((e) => !!l[e]), a = new lr(l[i], n, r, o, g);
		p = a.ranges, f[i] = a.mergedTexture, _.forEach((t) => {
			t !== i && (f[t] = a.toSameLayout(l[t], o)), t === "map" || t === "emissiveMap" || t === "specularColorMap" ? f[t].colorSpace = e.SRGBColorSpace : t === "envMap" || t === "lightMap" ? f[t].colorSpace = e.LinearSRGBColorSpace : f[t].colorSpace = e.NoColorSpace;
		});
	}
	let y = t.length, b = new Gt(y, f);
	l.alphaMap && (b.alphaTest = .5);
	let x = new e.BatchedMesh(y, i, a, b);
	x.isMergedMesh = !0;
	let S = new e.Matrix4();
	for (let e = 0; e < y; e++) {
		let n = t[e], r = x.addInstance(x.addGeometry(n.geometry)), i = r;
		if (p && p[i]) {
			let t;
			t = o ? [
				p[i].startU,
				p[i].startV,
				p[i].endU,
				p[i].endV
			] : [
				p[i].startU,
				p[i].endV,
				p[i].endU,
				p[i].startV
			], b.setValue(e, "uvRange", ...t);
		}
		n.updateWorldMatrix(!0, !1);
		let a = n.matrixWorld;
		n.isSkinnedMesh && (a = S.multiplyMatrices(n.bindMatrixInverse, a)), x.setMatrixAt(r, a), ur(b, r, v[e]);
	}
	return x;
}, fr = (e, t = 512, n = 512, r = 6553600, i = 6553600 * 2) => new Promise((a) => {
	let o = [];
	if (e.forEach((e) => {
		let t = Array.isArray(e.material) ? e.material[0] : e.material;
		t && Object.keys(t).forEach((e) => {
			let n = t[e];
			/(map|Map)$/.test(e) && n && n.isTexture && o.push(n);
		});
	}), o.length > 0) {
		let s = Date.now(), c = () => {
			o.every((e) => e.image) || Date.now() - s > 1e4 ? a(dr(e, t, n, r, i)) : setTimeout(c, 100);
		};
		c();
	} else a(dr(e, t, n, r, i));
}), pr = (t) => {
	let { ref: n = u(null), children: r, ...i } = t, a, o = [];
	if (r.forEach((t) => {
		if (/geometry/i.test(t.type)) {
			let { args: n, type: r, ...i } = t.props, a = r === void 0 ? `${t.type[0].toUpperCase()}${t.type.slice(1)}` : `${r[0].toUpperCase()}${r.slice(1)}Geometry`, s = n === void 0 ? [] : n, c = new e[a](...s);
			q(c, i), o.push(c);
		} else if (/primitive/.test(t.type)) {
			let { object: e, ...n } = t.props;
			if (e?.isBufferGeometry) {
				let t = e;
				t && (q(t, n), o.push(t));
			}
			e?.isMaterial && (a = e);
		} else /material/i.test(t.type) && (a = t);
	}), o.length === 0) return null;
	let s = o.length === 1 ? o[0] : Tt.mergeGeometries(o, !1);
	return /* @__PURE__ */ ve("mesh", {
		ref: n,
		...i,
		children: [/* @__PURE__ */ F("primitive", {
			object: s,
			attach: "geometry"
		}), a]
	});
}, mr = (e) => {
	let { ref: t = u(null), children: n, texW: r = 512, texH: i = 512, maxVertexCount: a = 6553600, maxIndexCount: o = 6553600 * 2, ...c } = e;
	return s(() => {
		if (t.current) {
			let e = t.current;
			e.visible = !1, fr(e.children, r, i, a, o).then((n) => {
				let r = e.parent;
				r.remove(e), r.add(n), t.current = n;
			});
		}
	}, [n]), n?.length > 0 ? /* @__PURE__ */ F("batchedMesh", {
		ref: t,
		...c,
		children: n
	}) : null;
}, hr = class extends e.Sprite {
	constructor(e = "", t = {}) {
		let { textHeight: n = .5, textWidthScale: r = 1, textColor: i = "#ffffff", textAlign: a = "center", textBaseline: o = "middle", fontStyle: s = "normal", fontVariant: c = "normal", fontWeight: l = "normal", fontSize: u = "64px", fontFamily: d = "Karla, sans-serif" } = t, f = {
			string: e,
			height: n,
			widthScale: r,
			color: _n(i),
			align: a,
			baseline: o
		}, p = {
			style: s,
			variant: c,
			weight: l,
			size: u,
			family: d
		};
		super(), this.isTextSprite = !0, this.type = "TextSprite", this.text = f, this.font = p, this.ctx = this.updateText(e);
	}
	copy(t) {
		return e.Sprite.prototype.copy.call(this, t), this.text = JSON.parse(JSON.stringify(t.text)), this.font = JSON.parse(JSON.stringify(t.font)), this.ctx.drawImage(t.ctx.canvas, 0, 0), this;
	}
	clone() {
		return new this.constructor(this.text.string).copy(this);
	}
	updateText(t) {
		let n = this.text, r = this.font;
		t !== void 0 && typeof t == "string" && (n.string = t);
		let i = document.createElement("canvas");
		i.height = parseInt(r.size), i.width = i.height * n.string.length;
		let a = i.getContext("2d");
		a.font = r.style + " " + r.variant + " " + r.weight + " " + r.size + " " + r.family, a.textAlign = n.align, a.textBaseline = n.baseline, a.fillStyle = "#" + n.color.getHexString(), a.fillText(n.string, i.width / 2, i.height / 2);
		let o = new e.CanvasTexture(a.canvas);
		this.material ? (this.material.map = o, this.material.map.needsUpdate = !0) : this.material = new e.SpriteMaterial({
			color: 16777215,
			map: o
		});
		let s = n.height * n.string.length * n.widthScale;
		return this.scale.set(s, n.height, 1), a;
	}
}, gr = (e) => {
	let { ref: t = u(null), string: n = "", height: r = .5, widthScale: i = 1, color: a = 16777215, align: o = "center", baseline: s = "middle", style: c = "normal", variant: l = "normal", weight: d = "normal", size: f = "64px", family: p = "Karla, sans-serif", ...m } = e;
	return /* @__PURE__ */ F("primitive", {
		ref: t,
		object: new hr(n, {
			textHeight: r,
			textWidthScale: i,
			textColor: a,
			textAlign: o,
			textBaseline: s,
			fontStyle: c,
			fontVariant: l,
			fontWeight: d,
			fontSize: f,
			fontFamily: p
		}),
		...m
	});
}, _r = (e, t, n) => {
	let r = new Float32Array(t * n);
	if (n === 3 && e.length && e[0] && (e[0].isVector3 || e[0].isColor)) for (let n = 0; n < t; n++) {
		let t = e[n];
		t && (t.isColor ? (r[n * 3] = t.r, r[n * 3 + 1] = t.g, r[n * 3 + 2] = t.b) : (r[n * 3] = t.x, r[n * 3 + 1] = t.y, r[n * 3 + 2] = t.z));
	}
	else r.set(e.subarray ? e.subarray(0, r.length) : e.slice(0, r.length));
	return r;
}, vr = (e) => e[0] && e[0].isVector3 ? e.length : Math.floor(e.length / 3), yr = class extends e.Sprite {
	constructor(t = [], n = {}) {
		let { colors: r, sizes: i, rotations: a, ...o } = n, s = new e.PointsNodeMaterial();
		super(s), this.isPointsSprite = !0, this.type = "PointsSprite", this.frustumCulled = !1, q(s, o);
		let c = vr(t);
		this.count = c;
		let l = new e.InstancedBufferAttribute(_r(t, c, 3), 3);
		if (s.positionNode = w(l), this.userData.instancePosition = l, r) {
			let t = new e.InstancedBufferAttribute(_r(r, c, 3), 3), n = w(t);
			s.colorNode = s.map ? fe(s.map, me()).mul(n) : n, this.userData.instanceColor = t;
		}
		if (i) {
			let t = new e.InstancedBufferAttribute(_r(i, c, 1), 1);
			s.sizeNode = w(t), this.userData.instanceSize = t;
		}
		if (a) {
			let t = new e.InstancedBufferAttribute(_r(a, c, 1), 1);
			s.rotationNode = w(t), this.userData.instanceRotation = t;
		}
	}
}, br = (e) => {
	let { ref: t = u(null), positions: n = [], colors: r, sizes: i, rotations: a, type: o, ...s } = e;
	return /* @__PURE__ */ F("primitive", {
		ref: t,
		object: new yr(n, {
			colors: r,
			sizes: i,
			rotations: a,
			...s
		}),
		...s
	});
}, Q = /*@__PURE__*/ new e.Matrix4(), xr = /*@__PURE__*/ new e.Matrix4(), Sr = /*@__PURE__*/ new e.Matrix4(), Cr = /*@__PURE__*/ new e.Matrix4(), wr = [], Tr = /*@__PURE__*/ new e.Box3(), $ = /*@__PURE__*/ new e.Sphere(), Er = /*@__PURE__*/ p(([e], t) => {
	let n = e.skeleton.boneTexture, r = g("skinIndex", "uvec4"), i = g("skinWeight", "vec4"), a = oe("bindMatrix", "mat4"), o = oe("bindMatrixInverse", "mat4"), s = (e) => {
		let t = T(e).mul(4);
		return ee(j(n, E(t, C)), j(n, E(t.add(1), C)), j(n, E(t.add(2), C)), j(n, E(t.add(3), C)));
	}, c = s(r.x), l = s(r.y), u = s(r.z), d = s(r.w), f = a.mul(ie), p = h(c.mul(i.x).mul(f), l.mul(i.y).mul(f), u.mul(i.z).mul(f), d.mul(i.w).mul(f));
	if (ie.assign(o.mul(p).xyz), t.hasGeometryAttribute("normal")) {
		let e = h(i.x.mul(c), i.y.mul(l), i.z.mul(u), i.w.mul(d));
		e = o.mul(e).mul(a), O.assign(e.transformDirection(O).xyz), t.hasGeometryAttribute("tangent") && de.assign(e.transformDirection(de).xyz);
	}
}, "void");
function Dr(e) {
	let t = e.skeleton;
	if (!t.boneTexture) {
		if (e.instanceBones === null) {
			e.instanceBones = new Float32Array(t.bones.length * 16 * e.count);
			for (let n = 0; n < e.count; n++) t.update(e.instanceBones, n);
		}
		t.computeInstancedBoneTexture();
	}
}
function Or(e) {
	!e || e.__instancedSkinning === !0 || (e.__instancedSkinning = !0, e.setupPosition = function(e) {
		let t = e.object;
		return t.isInstancedSkinnedMesh === !0 && t.skeleton && (Dr(t), Er(t)), Object.getPrototypeOf(this).setupPosition.call(this, e);
	});
}
var kr = class extends e.SkinnedMesh {
	constructor(t, n, r = 1) {
		super(t, n), this.isInstancedMesh = !0, this.isInstancedSkinnedMesh = !0, this.isSkinnedMesh = !1, this.instanceMatrix = new e.InstancedBufferAttribute(new Float32Array(r * 16), 16), this.instanceColor = null, this.instanceBones = null, this.morphTexture = null, this.count = r, this.boundingBox = null, this.boundingSphere = null, this._mesh = null;
		let i = this.bind.bind(this);
		this.bind = function(t, n) {
			i(t, n), this.skeleton.update = (e, t) => {
				let n = this.skeleton.bones, r = this.skeleton.boneInverses, i = e || this.skeleton.boneMatrices, a = this.skeleton.boneTexture, o = t || 0;
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e] ? n[e].matrixWorld : Cr;
					Sr.multiplyMatrices(t, r[e]), Sr.toArray(i, 16 * (e + o * n.length));
				}
				a !== null && (a.needsUpdate = !0);
			}, this.skeleton.computeBoneTexture = this.skeleton.computeInstancedBoneTexture = () => {
				this.skeleton.boneTexture = new e.DataTexture(this.instanceBones, this.skeleton.bones.length * 4, this.count, e.RGBAFormat, e.FloatType), this.skeleton.boneTexture.needsUpdate = !0;
			};
		}, Array.isArray(this.material) ? this.material.forEach(Or) : Or(this.material);
	}
	computeBoundingBox() {
		let t = this.geometry, n = this.count;
		this.boundingBox === null && (this.boundingBox = new e.Box3()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Q), Tr.copy(t.boundingBox).applyMatrix4(Q), this.boundingBox.union(Tr);
	}
	computeBoundingSphere() {
		let t = this.geometry, n = this.count;
		this.boundingSphere === null && (this.boundingSphere = new e.Sphere()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Q), $.copy(t.boundingSphere).applyMatrix4(Q), this.boundingSphere.union($);
	}
	copy(e, t) {
		return super.copy(e, t), this.isSkinnedMesh = !1, e.isInstancedMesh && (e.instanceMatrix && (this.instanceMatrix = e.instanceMatrix.clone()), e.instanceColor && (this.instanceColor = e.instanceColor.clone()), e.morphTexture && (this.morphTexture = e.morphTexture.clone()), this.count = e.count), Array.isArray(this.material) ? this.material.forEach(Or) : Or(this.material), this;
	}
	getColorAt(e, t) {
		t.fromArray(this.instanceColor.array, e * 3);
	}
	getMatrixAt(e, t) {
		t.fromArray(this.instanceMatrix.array, e * 16);
	}
	getMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
		for (let e = 0; e < n.length; e++) n[e] = r[i + e];
	}
	raycast(t, n) {
		let r = this.matrixWorld, i = this.count;
		this._mesh === null && (this._mesh = new e.SkinnedMesh(this.geometry, this.material), this._mesh.copy(this));
		let a = this._mesh;
		if (a.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), $.copy(this.boundingSphere), $.applyMatrix4(r), t.ray.intersectsSphere($) !== !1)) for (let e = 0; e < i; e++) {
			this.getMatrixAt(e, Q), xr.multiplyMatrices(r, Q), a.matrixWorld = xr, a.raycast(t, wr);
			for (let t = 0, r = wr.length; t < r; t++) {
				let r = wr[t];
				r.instanceId = e, r.object = this, n.push(r);
			}
			wr.length = 0;
		}
	}
	setColorAt(t, n) {
		this.instanceColor === null && (this.instanceColor = new e.InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3)), n.toArray(this.instanceColor.array, t * 3);
	}
	setMatrixAt(e, t) {
		t.toArray(this.instanceMatrix.array, e * 16);
	}
	setMorphAt(t, n) {
		let r = n.morphTargetInfluences, i = r.length + 1;
		this.morphTexture === null && (this.morphTexture = new e.DataTexture(new Float32Array(i * this.count), i, this.count, e.RedFormat, e.FloatType));
		let a = this.morphTexture.source.data.data, o = 0;
		for (let e = 0; e < r.length; e++) o += r[e];
		let s = this.geometry.morphTargetsRelative ? 1 : 1 - o, c = i * t;
		a[c] = s, a.set(r, c + 1);
	}
	setBonesAt(e, t) {
		t ||= this.skeleton;
		let n = t.bones.length * 16;
		this.instanceBones === null && (this.instanceBones = new Float32Array(n * this.count)), t.update(this.instanceBones, e);
	}
	updateMorphTargets() {}
	dispose() {
		return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
	}
};
//#endregion
export { fn as AnaglyphEffect, Ot as Animator, gn as AsciiEffect, Wt as BatchedMaterial, on as BokehPass, Wn as ColladaExporter, Kt as CustomMaterial, ln as DotScreenPass, dn as FXAAPass, rn as GTAOPass, cn as GlitchPass, Zt as InstancedObject, kr as InstancedSkinnedMesh, U as MATERIAL_TYPES, Un as MTLExporter, Gt as MergedMaterial, mr as MergedMesh, pr as Mesh, hn as OutlineEffect, an as OutlinePass, tn as OutputPass, pn as ParallaxBarrierEffect, br as Points, yr as PointsSprite, un as RGBShiftPass, en as RenderPass, sn as ShaderPass, mn as StereoEffect, H as TEXTURE_MAPS, gr as Text, hr as TextSprite, jn as ThreeCanvas, At as Threefy, kt as ThreefyPipeline, nn as UnrealBloomPass, or as loadAudios, ar as loadTextures, fr as mergeMeshes, q as setObject3D, _n as toColor, vn as toVector3, V as toVector3s, zn as useAnimate, Kn as useExporter, Pn as useFrame, Fn as useKeyDown, In as useKeyUp, cr as useLoader, Nn as useRefCallback, Mn as useRefEffect, Rn as useSearch, Ln as useSearchObject, J as useThree };
