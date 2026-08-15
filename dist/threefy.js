import * as e from "three/webgpu";
import { Color as t, DoubleSide as n, LOD as r, Matrix4 as i, MeshBasicMaterial as a } from "three/webgpu";
import o, { Suspense as s, cloneElement as c, createContext as l, createElement as u, isValidElement as d, memo as f, use as p, useEffect as m, useLayoutEffect as h, useReducer as g, useRef as _ } from "react";
import { OrbitControls as v } from "three/examples/jsm/controls/OrbitControls.js";
import { HDRLoader as y } from "three/examples/jsm/loaders/HDRLoader.js";
import { Fn as b, If as x, add as S, attribute as ee, bumpMap as te, cos as ne, drawIndex as re, float as C, floor as ie, fract as ae, instanceIndex as w, instancedBufferAttribute as T, int as E, ivec2 as D, mat4 as oe, mix as O, mrt as se, normalLocal as ce, normalMap as le, normalView as ue, output as de, pass as fe, positionLocal as pe, rand as me, reference as he, renderOutput as ge, screenCoordinate as _e, sin as ve, smoothstep as ye, tangentLocal as be, texture as xe, textureLoad as k, textureSize as Se, uniform as A, uv as Ce, varying as we, vec2 as j, vec3 as Te, vec4 as Ee } from "three/tsl";
import { jsx as De, jsxs as Oe } from "react/jsx-runtime";
import "react/jsx-dev-runtime";
import { ArcballControls as ke } from "three/examples/jsm/controls/ArcballControls.js";
import { DragControls as Ae } from "three/examples/jsm/controls/DragControls.js";
import { FirstPersonControls as je } from "three/examples/jsm/controls/FirstPersonControls.js";
import { FlyControls as Me } from "three/examples/jsm/controls/FlyControls.js";
import { MapControls as Ne } from "three/examples/jsm/controls/MapControls.js";
import { PointerLockControls as M } from "three/examples/jsm/controls/PointerLockControls.js";
import { TrackballControls as Pe } from "three/examples/jsm/controls/TrackballControls.js";
import { TransformControls as Fe } from "three/examples/jsm/controls/TransformControls.js";
import { bloom as Ie } from "three/examples/jsm/tsl/display/BloomNode.js";
import { ao as Le } from "three/examples/jsm/tsl/display/GTAONode.js";
import { outline as Re } from "three/examples/jsm/tsl/display/OutlineNode.js";
import { dof as ze } from "three/examples/jsm/tsl/display/DepthOfFieldNode.js";
import { dotScreen as Be } from "three/examples/jsm/tsl/display/DotScreenNode.js";
import { rgbShift as Ve } from "three/examples/jsm/tsl/display/RGBShiftNode.js";
import { fxaa as He } from "three/examples/jsm/tsl/display/FXAANode.js";
import { anaglyphPass as Ue } from "three/examples/jsm/tsl/display/AnaglyphPassNode.js";
import { parallaxBarrierPass as We } from "three/examples/jsm/tsl/display/ParallaxBarrierPassNode.js";
import { stereoPass as Ge } from "three/examples/jsm/tsl/display/StereoPassNode.js";
import { RoundedBoxGeometry as Ke } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { ConvexGeometry as qe } from "three/examples/jsm/geometries/ConvexGeometry.js";
import { DecalGeometry as Je } from "three/examples/jsm/geometries/DecalGeometry.js";
import { ParametricGeometry as Ye } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { TextGeometry as Xe } from "three/examples/jsm/geometries/TextGeometry.js";
import { TeapotGeometry as Ze } from "three/examples/jsm/geometries/TeapotGeometry.js";
import { BoxLineGeometry as Qe } from "three/examples/jsm/geometries/BoxLineGeometry.js";
import { LoftGeometry as $e } from "three/examples/jsm/geometries/LoftGeometry.js";
import { Line2 as et } from "three/examples/jsm/lines/webgpu/Line2.js";
import { LineSegments2 as tt } from "three/examples/jsm/lines/webgpu/LineSegments2.js";
import { Wireframe as nt } from "three/examples/jsm/lines/webgpu/Wireframe.js";
import { LineGeometry as rt } from "three/examples/jsm/lines/LineGeometry.js";
import { LineSegmentsGeometry as it } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { WireframeGeometry2 as at } from "three/examples/jsm/lines/WireframeGeometry2.js";
import { NURBSCurve as ot } from "three/examples/jsm/curves/NURBSCurve.js";
import { NURBSSurface as st } from "three/examples/jsm/curves/NURBSSurface.js";
import { GLTFExporter as ct } from "three/examples/jsm/exporters/GLTFExporter.js";
import { OBJExporter as lt } from "three/examples/jsm/exporters/OBJExporter.js";
import { PLYExporter as ut } from "three/examples/jsm/exporters/PLYExporter.js";
import { STLExporter as dt } from "three/examples/jsm/exporters/STLExporter.js";
import { strFromU8 as ft, strToU8 as pt, unzipSync as mt, zipSync as ht } from "three/examples/jsm/libs/fflate.module.js";
import * as gt from "three/examples/jsm/utils/SkeletonUtils.js";
import { VTKLoader as _t } from "three/examples/jsm/loaders/VTKLoader.js";
import { MD2Loader as vt } from "three/examples/jsm/loaders/MD2Loader.js";
import { FBXLoader as yt } from "three/examples/jsm/loaders/FBXLoader.js";
import { VRMLLoader as bt } from "three/examples/jsm/loaders/VRMLLoader.js";
import { AMFLoader as xt } from "three/examples/jsm/loaders/AMFLoader.js";
import { ThreeMFLoader as St } from "three/examples/jsm/loaders/3MFLoader.js";
import { ColladaLoader as Ct } from "three/examples/jsm/loaders/ColladaLoader.js";
import { PLYLoader as wt } from "three/examples/jsm/loaders/PLYLoader.js";
import { STLLoader as Tt } from "three/examples/jsm/loaders/STLLoader.js";
import { OBJLoader as Et } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader as Dt } from "three/examples/jsm/loaders/MTLLoader.js";
import { SVGLoader as Ot } from "three/examples/jsm/loaders/SVGLoader.js";
import { KMZLoader as kt } from "three/examples/jsm/loaders/KMZLoader.js";
import { TDSLoader as At } from "three/examples/jsm/loaders/TDSLoader.js";
import { GLTFLoader as jt } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader as Mt } from "three/examples/jsm/loaders/KTX2Loader.js";
import { DRACOLoader as Nt } from "three/examples/jsm/loaders/DRACOLoader.js";
import { VOXLoader as Pt, buildMesh as Ft } from "three/examples/jsm/loaders/VOXLoader.js";
import { MeshoptDecoder as It } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import * as Lt from "three/examples/jsm/utils/BufferGeometryUtils.js";
//#region \0rolldown/runtime.js
var Rt = Object.defineProperty, zt = (e, t) => {
	let n = {};
	for (var r in e) Rt(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Rt(n, Symbol.toStringTag, { value: "Module" }), n;
}, N = {};
globalThis.__threefyRegistry__ = N;
var Bt = !1, Vt = () => {
	Bt || (Bt = !0, globalThis.__threefyRegistry__ !== N && console.warn("[threefy] 라이브러리가 두 벌 로드됐다. 요소가 렌더 도중 터진다.\n  node_modules에 threefy가 두 벌 있는지 확인하라 (npm ls threefy)."));
}, P = (e, t, n) => (t.threeTag = e, t.threeType = n, t.displayName = e, N[e] = t, t), Ht = function(t) {
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
			e.activeAction = this.playAction(e, r);
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
}, Ut = class {
	constructor(t, n, r, i) {
		this.renderer = t, this.scene = n, this.camera = r, this.sceneHelpers = i, this.passes = [], this.effect = null, this.scenePass = null, this.pipeline = new e.RenderPipeline(t), this._warned = /* @__PURE__ */ new Set(), this._rebuildPending = !1, this._disposed = !1, this.rebuild();
	}
	_scheduleRebuild() {
		this._disposed || this._rebuildPending || (this._rebuildPending = !0, queueMicrotask(() => {
			this._rebuildPending && !this._disposed && this.rebuild();
		}));
	}
	addPass(e) {
		this.passes.includes(e) || (this.passes.push(e), this._scheduleRebuild());
	}
	insertPass(e, t) {
		this.passes.includes(e) || (this.passes.splice(t, 0, e), this._scheduleRebuild());
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && (this.passes.splice(t, 1), this._scheduleRebuild());
	}
	setSize() {}
	setScene(e) {
		this.scene !== e && (this.scene = e, this.passes.forEach((t) => {
			t.scene &&= e;
		}), this.effect?.scene && (this.effect.scene = e), this._scheduleRebuild());
	}
	setCamera(e) {
		this.camera !== e && (this.camera = e, this.passes.forEach((t) => {
			t.camera &&= e;
		}), this.effect?.camera && (this.effect.camera = e), this._scheduleRebuild());
	}
	setEffect(e) {
		this.effect !== e && (this.effect = e, this._scheduleRebuild());
	}
	_releaseNodes() {
		this.scenePass?.dispose?.(), this.scenePass = null, this.passes.forEach((e) => e.disposeNodes?.()), this.effect?.disposeNodes?.();
	}
	rebuild() {
		this._rebuildPending = !1, this._releaseNodes(), this.pipeline.outputColorTransform = !0;
		let e = {
			scene: this.scene,
			camera: this.camera,
			pipeline: this
		};
		if (this.effect && this.effect.setupRoot) {
			this.pipeline.outputNode = this.effect.setupRoot(e), this.pipeline.needsUpdate = !0;
			return;
		}
		let t = fe(this.scene, this.camera);
		this.scenePass = t, this._drawHelpersWithScene(t), this.passes.some((e) => e.requiresNormalMRT && e.enabled !== !1) && t.setMRT(se({
			output: de,
			normal: ue
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
		this._rebuildPending && this.rebuild(), this.passes.forEach((t) => t.update?.(e)), this.effect?.update?.(e), this.pipeline.render();
	}
	dispose() {
		this._disposed = !0, this._rebuildPending = !1, this._releaseNodes(), this.pipeline.outputNode = null, this.pipeline.dispose();
	}
}, Wt = (e) => e.split("?")[0].split(".").pop().toLowerCase(), Gt = (e) => e != null && Object.getPrototypeOf(e) === Object.prototype, Kt = (e) => e.replace(/\[/g, ".").replace(/\]/g, "").split(".").map((e) => isNaN(e) ? e : ~~e), qt = new Set([e.LOD?.prototype?.update, e.CubeCamera?.prototype?.update].filter(Boolean)), Jt = class t {
	static loadingManager = new e.LoadingManager();
	static textureLoader = new e.TextureLoader(t.loadingManager);
	static cubeTexLoader = new e.CubeTextureLoader(t.loadingManager);
	static hdrLoader = new y(t.loadingManager);
	static audioLoader = new e.AudioLoader(t.loadingManager);
	constructor(t = {}) {
		this.width = t.width || window.innerWidth, this.height = t.height || window.innerHeight, this.widthRatio = this.width / window.innerWidth, this.heightRatio = this.height / window.innerHeight, this._fixedSize = !!(t.width || t.height), this._ownsDom = !t.dom, this.dom = t.dom || document.createElement("div"), this._ownsDom && t.attach !== !1 && document.body.appendChild(this.dom), this.dom.tabIndex = "0", this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.scene = void 0, this.camera = void 0, this.renderer = void 0, this.renderCallbacks = void 0, this.timer = void 0, this.controls = void 0, this.animator = void 0, this.pipeline = void 0, this.sceneHelpers = void 0, this.dragControls = void 0, this.transformControls = void 0, this.effect = void 0, this.hasHoverHandler = !1, this.loadingManager = new e.LoadingManager(), this.textureLoader = new e.TextureLoader(this.loadingManager), this.cubeTexLoader = new e.CubeTextureLoader(this.loadingManager), this.hdrLoader = new y(this.loadingManager), this.audioLoader = new e.AudioLoader(this.loadingManager);
	}
	init() {
		return this.scene = new e.Scene(), this.sceneHelpers = new e.Scene(), this.sceneHelpers.name = "sceneHelpers", this.camera = new e.PerspectiveCamera(60, this.width / this.height, .1, 5e3), this.camera.position.z = 50, this.renderer = this.createRenderer(void 0), this.renderer.setSize(this.width, this.height), this.dom.appendChild(this.renderer.domElement), this.ready = this.renderer.init(), this.renderCallbacks = [], this.timer = new e.Timer(), this.controls = new v(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .075, this.animator = new Ht(this.scene), this.raycaster = new e.Raycaster(), this.selectedObject = null, this.selectedObjects = [], this.mouseDowned = !1, this._onDocumentMouseUp = (e) => this.onMouseUp(e), this.mouseDownPosition = new e.Vector2(), this.mouseUpPosition = new e.Vector2(), this.mouseMovePosition = new e.Vector2(), this.mouseClickPosition = new e.Vector2(), this.mouseDoubleClickPosition = new e.Vector2(), this.createRenderPipeline(), this.createBackground(), this._resizeHandler = () => this.onResize(), window.addEventListener("resize", this._resizeHandler, !1), this._domHandlers = [
			[
				"click",
				(e) => this.onClick(e),
				!1
			],
			[
				"dblclick",
				(e) => this.onDoubleClick(e),
				!1
			],
			[
				"mousemove",
				(e) => this.onMouseMove(e),
				!1
			],
			[
				"mousedown",
				(e) => this.onMouseDown(e),
				!1
			],
			[
				"wheel",
				(e) => this.onWheel(e),
				{ passive: !0 }
			],
			[
				"contextmenu",
				(e) => this.onContextMenu(e),
				!1
			],
			[
				"pointermove",
				(e) => this.onPointerMove(e),
				!1
			],
			[
				"pointerdown",
				(e) => this.onPointerDown(e),
				!1
			],
			[
				"pointerup",
				(e) => this.onPointerUp(e),
				!1
			],
			[
				"keydown",
				(e) => this.onKeyDown(e),
				!1
			],
			[
				"keyup",
				(e) => this.onKeyUp(e),
				!1
			]
		], this._domHandlers.forEach(([e, t, n]) => this.dom.addEventListener(e, t, n)), this.keyDownCallbacks = [], this.keyUpCallbacks = [], this._cache = /* @__PURE__ */ new Map(), this._loadingPromises = /* @__PURE__ */ new Map(), this._loadingErrors = /* @__PURE__ */ new Map(), this;
	}
	destroy() {
		this._destroyed || (this._destroyed = !0, this.animateID && window.cancelAnimationFrame(this.animateID), this.animateID = 0, window.removeEventListener("resize", this._resizeHandler, !1), this._domHandlers?.forEach(([e, t, n]) => this.dom.removeEventListener(e, t, n)), document.removeEventListener("mouseup", this._onDocumentMouseUp), this._domHandlers = null, this._resizeHandler = null, [
			this.controls,
			this.dragControls,
			this.transformControls
		].forEach((e) => this.removeControls(e)), this.animator?.stopAllActions(), this.animator = void 0, this.dispose(this.scene), this.dispose(this.sceneHelpers), this._cache.forEach((e) => {
			e?.isTexture && e.dispose();
		}), this._cache.clear(), this._loadingPromises.clear(), this._loadingErrors.clear(), this.__dracoLoader?.dispose(), this.__ktx2Loader?.dispose(), this.__dracoLoader = this.__ktx2Loader = void 0, this.__ktx2LoaderPromise = void 0, this.renderCallbacks = [], this.keyDownCallbacks = [], this.keyUpCallbacks = [], this.setEffect(null), this.pipeline?.dispose(), this.pipeline = void 0, this.renderer?.domElement?.remove(), this.renderer?.dispose(), this.renderer = void 0, this.dom.querySelectorAll?.(".threefy-spinner").forEach((e) => e.remove()), this._ownsDom && this.dom.remove(), this.scene = void 0, this.sceneHelpers = void 0, this.camera = void 0, this.timer = void 0, this.selectedObject = null, this.selectedObjects = []);
	}
	isSharedTexture(e) {
		if (!e?.isTexture || !this._cache) return !1;
		for (let t of this._cache.values()) if (t === e) return !0;
		return !1;
	}
	disposeTexture(e) {
		!e?.isTexture || this.isSharedTexture(e) || e.dispose();
	}
	dispose(t) {
		let n = /* @__PURE__ */ new Set();
		this._cache.forEach((e) => {
			e?.isTexture && n.add(e);
		});
		let r = (e) => {
			!e || n.has(e) || e.dispose();
		}, i = (t) => {
			if (Array.isArray(t)) {
				t.forEach((e) => i(e));
				return;
			}
			Object.values(t).filter((t) => t instanceof e.Texture).forEach(r), t.uniforms && Object.values(t.uniforms).filter(({ value: t }) => t instanceof e.Texture).forEach(({ value: e }) => r(e)), t.dispose();
		}, a = (t) => {
			t.geometry && !t.isSprite && t.geometry.dispose(), t.material && i(t.material), Object.values(t).filter((t) => t instanceof e.Texture).forEach(r);
		};
		t instanceof e.BufferGeometry ? t.dispose() : t instanceof e.Material ? i(t) : t instanceof e.Texture ? r(t) : t instanceof e.Object3D && t.traverse((e) => a(e));
	}
	setScene(e) {
		if (this.scene === e) return;
		let t = this.scene.background;
		this.scene = e, this.scene.background = t, this.animator?.stopAllActions(), this.animator = new Ht(e), this.pipeline.setScene(e);
	}
	setCamera(e) {
		this.camera = e, this.controls && (this.controls.object = e), this.pipeline.setCamera(e), e.updateProjectionMatrix();
	}
	setEffect(e) {
		let t = e ?? null;
		this.effect !== t && (this.effect?.disposeNodes?.(), this.effect?.dispose?.(), this.effect = t, this.effect?.setSize?.(this.width, this.height), this.pipeline.setEffect(t?.isThreefyEffect ? t : null));
	}
	setControls(e) {
		if (!e || e === this.controls || e === this.dragControls || e === this.transformControls) return;
		let t = e.constructor.name;
		if (t === "DragControls") {
			this._setDragControls(e);
			return;
		} else if (t === "TransformControls") {
			this._setTransformControls(e);
			return;
		} else t === "PointerLockControls" && this._setPointerLockControls(e);
		this.controls?.dispose(), this.controls = e;
	}
	_setDragControls(t) {
		let n = this;
		this.dragControls = t, t._dummyPosition = new e.Vector3();
		let r = function(e) {
			if (!this.enabled) return;
			let t = e.object;
			t !== void 0 && (t.getWorldPosition(this._dummyPosition), n.controls && (n.controls.enabled = !1), n.select(t));
		}, i = function(e) {
			if (!this.enabled) return;
			let t = e.object;
			t !== void 0 && t.getWorldPosition(this._dummyPosition), n.controls && (n.controls.enabled = !0);
		};
		t.addEventListener("dragstart", r), t.addEventListener("dragend", i), t.__threefyCleanup = () => {
			t.removeEventListener("dragstart", r), t.removeEventListener("dragend", i);
		};
	}
	_setPointerLockControls(e) {
		let t = this.dom ?? document.body, n = e.blocker;
		if (!n) {
			n = document.createElement("div"), n.className = "threefy-blocker", n.innerHTML = "\n                    <div class=\"threefy-instructions\">\n                        <p style=\"font-size:36px\">\n                            Click to play\n                        </p>\n                        <p>\n                            Move: WASD<br/>\n                            Jump: SPACE<br/>\n                            Look: MOUSE<br/>\n                            Stop: ESC\n                        </p>\n                    </div>\n                ", t !== document.body && window.getComputedStyle(t).position === "static" && (t.style.position = "relative"), t.appendChild(n);
			let r = document.getElementById("threefy-blocker-style") ?? document.createElement("style");
			r.id = "threefy-blocker-style", r.innerHTML = "\n                    .threefy-blocker {\n                        left: 0;\n                        top: 0;\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        color: white;\n                        background-color: rgba(0,0,0,0.5);\n                        z-index: 12;\n                    }\n                    .threefy-instructions {\n                        width: 100%;\n                        height: 100%;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                        text-align: center;\n                        font-size: 14px;\n                        cursor: pointer;\n                    }\n                ", r.isConnected || document.head.appendChild(r), e.blocker = n;
		}
		let r = 0, i = 0, a = () => {
			let t = e.domElement ?? document.body;
			try {
				let e = t.requestPointerLock?.();
				e && typeof e.catch == "function" && e.catch(() => {});
			} catch {}
		}, o = () => {
			let e = 1300 - (performance.now() - r);
			clearTimeout(i), e > 0 ? i = setTimeout(a, e) : a();
		}, s = () => {
			clearTimeout(i), n.style.display = "none";
		}, c = () => {
			r = performance.now(), n.style.display = "block";
		}, l = (t) => e.onKeyDown(t), u = (t) => e.onKeyUp(t);
		n.addEventListener("click", o), e.addEventListener("lock", s), e.addEventListener("unlock", c), document.addEventListener("keydown", l), document.addEventListener("keyup", u), e.__threefyCleanup = () => {
			clearTimeout(i), n.removeEventListener("click", o), e.removeEventListener("lock", s), e.removeEventListener("unlock", c), document.removeEventListener("keydown", l), document.removeEventListener("keyup", u), n.remove(), e.blocker = null;
		};
	}
	_setTransformControls(e) {
		let t = this;
		this.transformControls = e, this.transformControls.setSize(.5), e.addEventListener("dragging-changed", function(e) {
			t.controls && (t.controls.enabled = !e.value);
		});
		let n = e.getHelper();
		this.sceneHelpers.add(n), e.__threefyCleanup = () => {
			e.detach(), n.removeFromParent();
		};
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
		let t, n = Kt(e).reduce((e, n) => {
			if (e && e[n]) return t = e, e[n];
		}, this);
		return typeof n == "function" ? n.bind(t) : n;
	}
	set(t, n) {
		let r = (t, r) => {
			r === "map" || r === "matcap" || r === "emissiveMap" ? t.colorSpace = e.SRGBColorSpace : r === "envMap" ? /hdr|exr/i.test(n.split(".").pop()) ? t.colorSpace = e.LinearSRGBColorSpace : t.colorSpace = e.SRGBColorSpace : t.colorSpace = e.NoColorSpace;
		}, i = (e, t, n) => {
			typeof e[t] == "function" ? Array.isArray(n) ? e[t](...n) : e[t](n) : ((e, t) => e && (e.isColor || e.isEuler || e.isQuaternion || e.isVector2 || e.isVector3 || e.isVector4) ? (typeof t == "number" ? e.setScalar(t) : e.set(...t), !0) : !1)(e[t], n) || (typeof n == "string" && z.includes(t) ? e[t] = this.loadTexture(n, (e) => r(e, t)) ?? null : e[t] = n);
		};
		if (t && typeof t == "object" && Gt(n)) {
			Object.keys(n).forEach((e) => {
				i(t, e, n[e]);
			});
			return;
		}
		if (Gt(t)) {
			let e = this;
			Object.keys(t).forEach((n) => e.set(n, t[n]));
			return;
		}
		if (Gt(n)) {
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
		let o = Kt(t), s = o.length - 1;
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
			qt.has(n.update) || n.update?.(t, e);
		}), this.sceneHelpers.traverse((n) => n.update?.(t, e));
	}
	render(e, t) {
		this.renderCallbacks.forEach((n) => n(e, this, t)), this.effect && !this.effect.isThreefyEffect ? this.effect.render(this.scene, this.camera) : this.pipeline ? this.pipeline.render(t) : (this.renderer.render(this.scene, this.camera), this.sceneHelpers.children.length > 0 && (this.renderer.autoClear = !1, this.renderer.render(this.sceneHelpers, this.camera), this.renderer.autoClear = !0));
	}
	async animate() {
		try {
			this.timer.update();
			let e = this.timer.getDelta(), t = this.timer.getElapsed();
			this.update(t, e), this.render(t, e), await this.renderer.backend?.device?.queue?.onSubmittedWorkDone?.(), this.controls?.constructor.name === "PointerLockControls" && this.controls.animate(e, this.scene, this.raycaster);
		} catch (e) {
			console.error("Threefy.animate error:", e);
		} finally {
			this.animateID !== 0 && (this.animateID = window.requestAnimationFrame(this.animate.bind(this)));
		}
	}
	replayAnimate() {
		this.animateID === 0 && (this.animateID = window.requestAnimationFrame(this.animate.bind(this)), this.timer.reset(), this.controls && (this.controls.enabled = !0));
	}
	pauseAnimate(e) {
		if (this.animateID !== 0) {
			let { delayTime: t = 100, controlsEnabled: n = !1 } = e || {}, r = this;
			setTimeout(() => {
				window.cancelAnimationFrame(r.animateID), r.animateID = 0, r.controls && (r.controls.enabled = n);
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
		this.pipeline = new Ut(this.renderer, this.scene, this.camera, this.sceneHelpers);
	}
	addPass(e) {
		e.isOutlinePass && (this.outlinePass = e), this.pipeline.addPass(e);
	}
	removePass(e) {
		this.outlinePass === e && (this.outlinePass = void 0), this.pipeline.removePass(e);
	}
	removeControls(e) {
		if (!e) return !1;
		if (e === this.controls) this.controls = void 0;
		else if (e === this.dragControls) this.dragControls = void 0;
		else if (e === this.transformControls) this.transformControls = void 0;
		else return !1;
		return e.__threefyCleanup?.(), e.__threefyCleanup = null, e.dispose(), e.userData = {
			...e.userData,
			__threefyDisposed: !0
		}, !0;
	}
	createBackground(t, n) {
		let r = this;
		t === "default.hdr" && (t = "images/hdr/death_valley_sand_dunes.hdr"), Array.isArray(t) ? (t.length === 6 && this.loadTexture(t, (t) => {
			t.mapping = e.CubeReflectionMapping, r.scene.background = t, r.scene.environment = t, r.scene.backgroundBlurriness = 0, n && n(t);
		}), t.length === 3 && (this.scene.background = new e.Color(...t))) : typeof t == "string" ? t.split("?")[0].split(".").length === 1 ? this.scene.background = new e.Color(t) : Wt(t) === "hdr" ? this.loadTexture(t, (t) => {
			t.mapping = e.EquirectangularReflectionMapping, r.scene.background = t, r.scene.environment = t, r.scene.backgroundBlurriness = 0, n && n(t);
		}) : this.loadTexture(t, (t) => {
			t.colorSpace = e.SRGBColorSpace, r.scene.background = t, n && n(t);
		}) : typeof t == "number" ? this.scene.background = new e.Color(t) : t?.isTexture || t?.isColor ? this.scene.background = t : this.scene.background = new e.Color(1644825);
	}
	onResize(e, t) {
		if (!(e === void 0 && t === void 0 && this._fixedSize)) {
			if (this.width = e || this.widthRatio * window.innerWidth, this.height = t || this.heightRatio * window.innerHeight, e && (this.widthRatio = e / window.innerWidth), t && (this.heightRatio = t / window.innerHeight), this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.camera.isPerspectiveCamera) this.camera.aspect = this.width / this.height;
			else if (this.camera.isOrthographicCamera) {
				let e = this.camera.top - this.camera.bottom, t = this.width / this.height;
				this.camera.left = -e * t / 2, this.camera.right = e * t / 2, this.camera.top = e / 2, this.camera.bottom = -e / 2;
			}
			this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.pipeline && this.pipeline.setSize(this.width, this.height), this.effect?.setSize?.(this.width, this.height), this.controls && this.controls.constructor.name === "TrackballControls" && this.controls.handleResize();
		}
	}
	getLoaded(e) {
		let t = this._cache.get(e);
		return t?.[0] ? t[0] : void 0;
	}
	loadTexture(e, t, n) {
		let r = (e) => typeof e != "string" || e.trim() === "";
		if (Array.isArray(e) ? e.some(r) : r(e)) return;
		let i = Array.isArray(e) ? e.join("|") : e, a = (t) => {
			this._cache.delete(i), console.warn(`[threefy] cannot load texture '${i}' —`, t), n && n(t, e);
		}, o = this._cache.get(i);
		if (o) return t && t(o), o;
		let s = (e) => {
			t && t(e);
		};
		return o = Array.isArray(e) && e.length === 6 ? this.cubeTexLoader.load(e, s, void 0, a) : Wt(e) === "hdr" ? this.hdrLoader.load(e, s, void 0, a) : this.textureLoader.load(e, s, void 0, a), this._cache.set(i, o), o;
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
	_leavePointer(e, t) {
		!e || !e.isPointerOver || (e.onPointerLeave && e.onPointerLeave(t, e), e.onPointerOut && e.onPointerOut(t, e), e.isPointerOver = !1);
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
			let i = this.selectedObject;
			if (this.selectedObject = r, n) {
				i !== r && this._leavePointer(i, n);
				let e = {
					click: "onClick",
					dblclick: "onDoubleClick",
					wheel: "onWheel",
					contextmenu: "onContextMenu",
					pointermove: "onPointerMove",
					pointerdown: "onPointerDown",
					pointerup: "onPointerUp"
				}[n.type];
				e && (e = r[e], e && e.call(r, n, r)), r.isPointerOver || (r.onPointerEnter && r.onPointerEnter(n, r), r.onPointerOver && r.onPointerOver(n, r), r.isPointerOver = !0);
			}
		} else n && this._leavePointer(this.selectedObject, n), this.selectedObject = null, this.selectedObjects = [];
		this.transformControls && (this.selectedObject ? this.transformControls.attach(this.selectedObject) : this.transformControls.detach());
	}
	handleEvent(e) {
		let t = !(e instanceof PointerEvent) || e.type === "pointerdown" ? this.getIntersectObject(e) : this.selectedObject;
		t ? t.name === "picker" ? this.select(t.userData.object, "picker", e) : e.ctrlKey ? this.select(t, "multiple", e) : e.altKey ? this.select(t, "ancestor", e) : this.select(t, "itself", e) : this.select(null, "null", e);
	}
	onClick(e) {
		this.dom.focus(), this.mouseClickPosition.fromArray(this.getMousePosition(e)), this.onMouseDown(e), this.onMouseUp(e), this.outlinePass && this.outlinePass.followPointer !== !1 && this.outlinePass.pin(this.selectedObject);
	}
	onDoubleClick(e) {
		e.preventDefault(), this.mouseDoubleClickPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e);
	}
	getMousePosition(e) {
		let t = this.dom.getBoundingClientRect(), n, r;
		return e.changedTouches ? (n = e.changedTouches[0].clientX, r = e.changedTouches[0].clientY) : (n = e.clientX, r = e.clientY), n = (n - t.left) / t.width * 2 - 1, r = -((r - t.top) / t.height) * 2 + 1, [n, r];
	}
	onMouseMove(e) {
		this.mouseMovePosition.fromArray(this.getMousePosition(e)), (this.outlinePass || this.hasHoverHandler || this.transformControls) && this.handleEvent(e), this.outlinePass && this.outlinePass.followPointer !== !1 && this.outlinePass.hover(this.selectedObject);
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
		e.preventDefault(), this.mouseMovePosition.fromArray(this.getMousePosition(e)), this.handleEvent(e);
	}
	onPointerUp(e) {
		e.preventDefault(), this.handleEvent(e);
	}
	onKeyDown(e) {
		if (this.keyDownCallbacks.forEach((t) => t(e, this)), this.controls?.constructor.name === "PointerLockControls") {
			this.controls.onKeyDown(e);
			return;
		}
		if (this.transformControls) {
			this.transformControls.onKeyDown(e);
			return;
		}
		e.stopPropagation();
		let t = e.ctrlKey;
		if (!(t && e.code === "KeyZ") && !(t && e.code === "KeyY")) switch (e.code) {
			case "Backspace": e.preventDefault();
			case "Escape":
				this.controls && (this.controls.enabled = !0);
				break;
			case "Delete": break;
			case "Digit1": break;
			case "Digit2": break;
			case "KeyB": break;
			case "KeyO":
				if (this.animator && this.selectedObject) {
					let e = this.selectedObject.activeAction;
					e && (e.paused = !e.paused);
				}
				break;
			case "KeyP":
				this.animator && this.selectedObject && this.animator.playNextAction(this.selectedObject);
				break;
		}
	}
	onKeyUp(e) {
		if (this.keyUpCallbacks.forEach((t) => t(e, this)), this.controls?.constructor.name === "PointerLockControls") {
			this.controls.onKeyUp(e);
			return;
		}
		if (this.transformControls) {
			this.transformControls.onKeyUp(e);
			return;
		}
		switch (e.preventDefault(), e.stopPropagation(), e.key) {
			case "Control":
				this.controls && (this.controls.enabled = !0);
				break;
			case "Alt": break;
		}
	}
}, Yt = /* @__PURE__ */ zt({
	BatchedMaterial: () => sn,
	MergedMaterial: () => cn
}), Xt = {
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
}, Zt = (e) => {
	if (!e) return;
	let { threefy: t } = X();
	return Object.keys(e).filter((e) => e.match(/(map|matcap|Map)$/)).forEach((n) => {
		typeof e[n] == "string" && (e[n] = t.loadTexture(e[n]));
	}), e;
};
function Qt(e) {
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
var $t = {
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
}, en = class extends e.DataTexture {
	constructor(t, n) {
		let r = Object.entries(t).map(([e, t]) => ({
			name: e,
			...Qt(t)
		})), i = r.length, a = Math.sqrt(n * i);
		a = Math.ceil(a / i) * i, a = Math.max(a, i);
		let o = {};
		for (let e = 0, t = r.length; e < t; e++) o[r[e].name] = e;
		let s = new Float32Array(a * a * 4);
		for (let e = 0; e < n; e++) for (let t = 0; t < i; t++) {
			let n = $t[r[t].name];
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
		let { fields: t, image: n } = this, r = t.length, i = E(n.width), a = e.mul(r).toVar(), o = a.mod(i).toVar(), s = a.div(i).toVar(), c = {};
		return t.forEach((e, t) => {
			let n = k(this, D(o.add(t), s));
			c[e.name] = e.comp === "rgba" ? n : n[e.comp];
		}), c;
	}
}, tn = b(([e, t]) => {
	let n = E(Se(k(e), 0).x).toConst();
	return k(e, D(E(t).mod(n).toConst(), E(t).div(n).toConst())).x;
}), nn = b((e, t) => {
	let n = t.object, r = t.getDrawIndex() === null ? w : re;
	return n && n.isBatchedMesh ? C(tn(n._indirectTexture, E(r))).add(.5) : C(r).add(.5);
}), rn = () => E(we(nn(), "vThreefyInstanceId")), an = (e, t, n) => {
	let r = (e, t, r) => {
		let i = n(t);
		return i ? e.mul(r ? i[r] : i) : e;
	};
	if (e.colorNode = r(Ee(t.diffuse, 1), "map"), e.opacityNode = r(t.opacity, "alphaMap", "g"), e.emissiveNode = r(t.emissive, "emissiveMap", "rgb"), e.metalnessNode = r(t.metalness, "metalnessMap", "b"), e.roughnessNode = r(t.roughness, "roughnessMap", "g"), e.iorNode = t.ior, e.clearcoat > 0 && (e.clearcoatNode = r(t.clearcoat, "clearcoatMap", "r"), e.clearcoatRoughnessNode = r(t.clearcoatRoughness, "clearcoatRoughnessMap", "g")), e.iridescence > 0) {
		e.iridescenceNode = r(t.iridescence, "iridescenceMap", "r"), e.iridescenceIORNode = t.iridescenceIOR;
		let i = n("iridescenceThicknessMap");
		e.iridescenceThicknessNode = i ? O(t.iridescenceThicknessMinimum, t.iridescenceThicknessMaximum, i.g) : t.iridescenceThicknessMaximum;
	}
	e.sheen > 0 && (e.sheenNode = r(t.sheenColor.mul(e.sheen), "sheenColorMap", "rgb"), e.sheenRoughnessNode = r(t.sheenRoughness, "sheenRoughnessMap", "a")), e.anisotropy > 0 && (e.anisotropyNode = t.anisotropyVector), e.dispersion > 0 && (e.dispersionNode = t.dispersion);
}, on = (e, t, n) => {
	let r = { ...Xt };
	n || delete r.uvRange, e.props = r, e.dataTexture = new en(r, t);
}, sn = class extends e.MeshPhysicalNodeMaterial {
	constructor(e, t) {
		Zt(t), super(t), this.isBatchedMaterial = !0, on(this, e, !1);
	}
	setup(e) {
		if (!this._wired) {
			this._wired = !0;
			let e = this.dataTexture.getNodes(rn());
			an(this, e, (e) => this[e] && this[e].isTexture ? xe(this[e]) : null);
		}
		super.setup(e);
	}
	setValue(...e) {
		this.props[e[1]] && this.dataTexture.setValue(...e);
	}
	dispose() {
		super.dispose(), this.dataTexture.dispose();
	}
}, cn = class extends e.MeshPhysicalNodeMaterial {
	constructor(e, t) {
		Zt(t), super(t), this.isMergedMaterial = !0, on(this, e, !0);
	}
	setup(e) {
		this._wired || (this._wired = !0, this._wireNodes()), super.setup(e);
	}
	_wireNodes() {
		let e = this.dataTexture.getNodes(rn()), t = (t) => {
			let n = .5 / (t.image && t.image.width || 512), r = e.uvRange, i = r.x.add(n), a = r.y.sub(n), o = r.z.sub(n), s = r.w.add(n), c = ae(Ce(t.channel));
			return j(c.x.mul(o.sub(i)).add(i), c.y.mul(a.sub(s)).add(s));
		}, n = (e) => this[e] && this[e].isTexture ? xe(this[e], t(this[e])) : null;
		an(this, e, n), this.normalMap ? this.normalNode = le(n("normalMap"), j(this.normalScale.x, this.normalScale.y)) : this.bumpMap && (this.normalNode = te(n("bumpMap").r, C(this.bumpScale))), this.clearcoatNormalMap && (this.clearcoatNormalNode = le(n("clearcoatNormalMap"), j(this.clearcoatNormalScale.x, this.clearcoatNormalScale.y))), this.aoMap && (this.aoNode = n("aoMap").r.sub(1).mul(this.aoMapIntensity).add(1)), this.transmission > 0 && this.transmissionMap && (this.transmissionNode = C(this.transmission).mul(n("transmissionMap").r)), [
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
}, ln = /*@__PURE__*/ new e.Matrix4(), un = /*@__PURE__*/ new e.Matrix4(), dn = /*@__PURE__*/ new e.Box3(), fn = /*@__PURE__*/ new e.Sphere(), pn = class extends e.Object3D {
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
			un.copy(t.matrix).multiply(r).multiply(i.matrixWorld);
			let a = i.geometry;
			un.equals(ln) || (a = a.clone().applyMatrix4(un), this._ownGeometries.push(a));
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
			e.boundingBox = null, e.computeBoundingBox(), dn.copy(e.boundingBox), this.boundingBox.union(dn);
		});
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new e.Sphere()), this.boundingSphere.makeEmpty(), this._meshes.forEach((e) => {
			e.boundingSphere = null, e.computeBoundingSphere(), fn.copy(e.boundingSphere), this.boundingSphere.union(fn);
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
}, mn = (e) => typeof e == "string" && N[e] || e, F = (e, t, n) => De(mn(e), t, n), hn = (e, t, n) => Oe(mn(e), t, n), gn = new e.Matrix4(), _n = new e.Vector3(), I = class {
	constructor() {
		this.isPass = !0, this.isThreefyPass = !0, this.enabled = !0;
	}
	setSize() {}
	setup(e) {
		return e.color;
	}
	disposeNodes() {
		this._node?.dispose?.(), this._node = null;
	}
	dispose() {}
	_warnOnce(e) {
		this._warned || (this._warned = !0, console.warn(e));
	}
}, vn = class extends I {
	constructor(e, t) {
		super(), this.type = "RenderPass", this.scene = e, this.camera = t;
	}
}, yn = class extends I {
	constructor() {
		super(), this.type = "OutputPass";
	}
}, bn = class extends I {
	constructor(e, t = 1, n = 0, r = 0) {
		super(), this.type = "UnrealBloomPass", this.resolution = e, this.strength = t, this.radius = n, this.threshold = r;
	}
	setup(e) {
		return this._node = Ie(e.color, this.strength, this.radius, this.threshold), e.color.add(this._node);
	}
	update() {
		this._node && (this._node.strength.value = this.strength, this._node.radius.value = this.radius, this._node.threshold.value = this.threshold);
	}
}, xn = class e extends I {
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
		return this._node = Le(e.scenePass.getTextureNode("depth"), e.scenePass.getTextureNode("normal"), this.camera), this._aoParams && this.updateGtaoMaterial(this._aoParams), e.color.mul(Ee(Te(this._node.getTextureNode().r), 1));
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
}, Sn = class extends I {
	constructor(t, n, r, i = []) {
		super(), this.type = "OutlinePass", this.isOutlinePass = !0, this.scene = n, this.camera = r, this.selectedObjects = i, this.followPointer = !0, this.perInstance = !0, this.instanceInflate = 1.04, this._proxy = null, this._hover = null, this._pinned = null, this._active = null, this.edgeStrength = 3, this.edgeGlow = 0, this.edgeThickness = 1, this.pulsePeriod = 0, this.visibleEdgeColor = new e.Color(16777215), this.hiddenEdgeColor = new e.Color(1640965), this._edgeStrength = A(this.edgeStrength), this._edgeGlow = A(this.edgeGlow), this._edgeThickness = A(this.edgeThickness), this._visibleEdgeColor = A(this.visibleEdgeColor), this._hiddenEdgeColor = A(this.hiddenEdgeColor);
	}
	setup(e) {
		this._node = Re(this.scene, this.camera, {
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
		t.getMatrixAt(n, gn), r.matrixWorld.multiplyMatrices(t.matrixWorld, gn).scale(_n.set(i, i, i));
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
}, Cn = class extends I {
	constructor(t, n, r = {}) {
		super(), this.type = "BokehPass", this.isBokehPass = !0, this.scene = t, this.camera = n, this.mouse = new e.Vector2(), this.raycaster = new e.Raycaster(), this.distance = 100, this.focusRange = r.focusRange ?? .5, this.bokehScale = r.bokehScale ?? 4, this.vignetting = r.vignetting ?? !1, this.fstop = r.fstop ?? 2.2, this._focusDistance = A(this.distance), this._focusRange = A(this.distance * this.focusRange), this._bokehScale = A(this.bokehScale), this._frame = 0, this._targetDistance = void 0, this._lastMouseX = NaN, this._lastMouseY = NaN;
	}
	setup(e) {
		let t = ze(e.color, e.scenePass.getViewZNode(), this._focusDistance, this._focusRange, this._bokehScale);
		if (!this.vignetting) return t;
		let n = this.fstop / 22, r = Ce().distance(j(.5)), i = ye(1.3 + n, n, r);
		return Ee(t.rgb.mul(i), t.a);
	}
	update() {
		if (this._frame++, this.mouse.x !== this._lastMouseX || this.mouse.y !== this._lastMouseY || this._frame % 10 == 0 || this._targetDistance === void 0) {
			this._lastMouseX = this.mouse.x, this._lastMouseY = this.mouse.y, this.raycaster.setFromCamera(this.mouse, this.camera);
			let e = this.raycaster.intersectObjects(this.scene.children, !0);
			this._targetDistance = e.length > 0 ? e[0].distance : 1e3;
		}
		this.distance += (this._targetDistance - this.distance) * .03, this._focusDistance.value = this.distance, this._focusRange.value = this.distance * this.focusRange, this._bokehScale.value = this.bokehScale;
	}
}, wn = class extends I {
	constructor(e, t) {
		super(), this.type = "ShaderPass", this.shader = e, this.textureID = t;
	}
	setup(e) {
		return this._warnOnce("ShaderPass: GLSL shaders are not supported with WebGPURenderer — write a TSL node instead (pass ignored)"), e.color;
	}
}, Tn = class extends I {
	constructor(e = 64) {
		super(), this.type = "GlitchPass", this.dtSize = e, this.goWild = !1, this._curF = 0, this._generateTrigger();
	}
	setup(e) {
		let t = this._uniforms = {
			byp: A(0),
			amount: A(.08),
			angle: A(.02),
			seed: A(.02),
			seed_x: A(.02),
			seed_y: A(.02),
			distortion_x: A(.5),
			distortion_y: A(.6)
		}, n = C(.05);
		(!this._heightmap || this._heightmapSize !== this.dtSize) && (this._heightmap?.dispose(), this._heightmap = this._generateHeightmap(this.dtSize), this._heightmapSize = this.dtSize);
		let r = xe(this._heightmap);
		return b(() => {
			let i = Ce().toVar(), a = r.sample(i.mul(t.seed).mul(t.seed)).toVar();
			x(i.y.lessThan(t.distortion_x.add(n)).and(i.y.greaterThan(t.distortion_x.sub(n.mul(t.seed)))), () => {
				x(t.seed_x.greaterThan(0), () => {
					i.y.assign(C(1).sub(i.y.add(t.distortion_y)));
				}).Else(() => {
					i.y.assign(t.distortion_y);
				});
			}), x(i.x.lessThan(t.distortion_y.add(n)).and(i.x.greaterThan(t.distortion_y.sub(n.mul(t.seed)))), () => {
				x(t.seed_y.greaterThan(0), () => {
					i.x.assign(t.distortion_x);
				}).Else(() => {
					i.x.assign(C(1).sub(i.x.add(t.distortion_x)));
				});
			}), i.x.addAssign(a.x.mul(t.seed_x).mul(t.seed.div(5))), i.y.addAssign(a.y.mul(t.seed_y).mul(t.seed.div(5)));
			let o = j(ne(t.angle), ve(t.angle)).mul(t.amount), s = e.color.sample(i.add(o)), c = e.color.sample(i), l = e.color.sample(i.sub(o)), u = ie(_e.x.div(.5)), d = ie(_e.y.div(.5)), f = me(j(u.mul(t.seed), d.mul(t.seed).mul(50))).mul(.2).mul(t.amount.mul(200));
			return O(Ee(s.r, c.g, l.b, c.a).add(Ee(f)), e.color, t.byp);
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
		this._heightmap?.dispose(), this._heightmap = null;
	}
}, En = class extends I {
	constructor(e, t = 1.57, n = 1) {
		super(), this.type = "DotScreenPass", this.center = e, this.angle = t, this.scale = n, this._angle = A(this.angle), this._scale = A(this.scale);
	}
	setup(e) {
		return Be(e.color, this._angle, this._scale);
	}
	update() {
		this._angle.value = this.angle, this._scale.value = this.scale;
	}
}, Dn = class extends I {
	constructor(e = .005, t = 0) {
		super(), this.type = "RGBShiftPass", this.amount = e, this.angle = t, this._amount = A(this.amount), this._angle = A(this.angle);
	}
	setup(e) {
		return Ve(e.color, this._amount, this._angle);
	}
	update() {
		this._amount.value = this.amount, this._angle.value = this.angle;
	}
}, On = class extends I {
	constructor() {
		super(), this.type = "FXAAPass";
	}
	setup(e) {
		return e.pipeline.pipeline.outputColorTransform = !1, He(ge(e.color));
	}
}, kn = class {
	constructor() {
		this.isThreefyEffect = !0;
	}
	setSize() {}
	setupRoot(e) {
		return null;
	}
	disposeNodes() {
		this._node?.dispose?.(), this._node = null;
	}
	dispose() {}
}, An = class extends kn {
	constructor() {
		super(), this.type = "AnaglyphEffect", this.isAnaglyphEffect = !0;
	}
	setupRoot(e) {
		return this._node = Ue(e.scene, e.camera);
	}
}, jn = class extends kn {
	constructor() {
		super(), this.type = "ParallaxBarrierEffect", this.isParallaxBarrierEffect = !0;
	}
	setupRoot(e) {
		return this._node = We(e.scene, e.camera);
	}
}, Mn = class extends kn {
	constructor() {
		super(), this.type = "StereoEffect", this.isStereoEffect = !0;
	}
	setupRoot(t) {
		let n = Ge(t.scene, t.camera), r = n.updateBefore.bind(n), i = new e.Color();
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
		}, this._node = n;
	}
}, Nn = class extends kn {
	constructor(t, n = {}) {
		super(), this.type = "OutlineEffect", this.isOutlineEffect = !0, this.color = new e.Color(), n.defaultColor && this.color.set(...n.defaultColor), this.thickness = n.defaultThickness && n.defaultThickness >= 1 ? n.defaultThickness : 2, this.alpha = n.defaultAlpha ?? 1, this._color = A(this.color), this._alpha = A(this.alpha), this._thickness = A(this.thickness), this._edgeGlow = A(0), this._node = null, this._scratch = [];
	}
	_collectMeshes(e, t = []) {
		return t.length = 0, e.traverse((e) => {
			e.isMesh && t.push(e);
		}), t;
	}
	setupRoot(e) {
		let t = fe(e.scene, e.camera).getTextureNode();
		this._node = Re(e.scene, e.camera, {
			selectedObjects: this._collectMeshes(e.scene),
			edgeThickness: this._thickness,
			edgeGlow: this._edgeGlow
		});
		let { visibleEdge: n, hiddenEdge: r } = this._node, i = n.add(r).clamp(0, 1).mul(this._alpha);
		return Ee(O(t.rgb, this._color, i), t.a);
	}
	update() {
		if (!this._node) return;
		let e = this._collectMeshes(this._node.scene, this._scratch), t = this._node.selectedObjects;
		(!t || e.length !== t.length || e.some((e, n) => e !== t[n])) && (this._node.selectedObjects = e.slice()), this._color.value.copy(this.color), this._alpha.value = this.alpha, this._thickness.value = this.thickness;
	}
}, Pn = class extends kn {
	constructor() {
		super(), this.type = "AsciiEffect", this.isAsciiEffect = !0, this.domElement = typeof document < "u" ? document.createElement("div") : null, console.warn("AsciiEffect: the WebGPU version is still under development — rendering the plain scene for now.");
	}
	setupRoot(e) {
		return this._node = fe(e.scene, e.camera);
	}
};
r.prototype.addLevels = function(...e) {
	e.forEach((e) => Array.isArray(e) ? this.addLevel(...e) : this.addLevel(e));
}, M.prototype.blocker = null;
var Fn = {
	forward: !1,
	backward: !1,
	left: !1,
	right: !1,
	canJump: !1,
	jumpPower: 350,
	mass: 100,
	viscosity: 10
};
Object.defineProperty(M.prototype, "heroPlayer", {
	configurable: !0,
	get() {
		let e = {
			...Fn,
			velocity: [
				0,
				0,
				0
			],
			direction: [
				0,
				0,
				0
			]
		};
		return Object.defineProperty(this, "heroPlayer", {
			value: e,
			writable: !0,
			configurable: !0
		}), e;
	},
	set(e) {
		Object.defineProperty(this, "heroPlayer", {
			value: e,
			writable: !0,
			configurable: !0
		});
	}
}), M.prototype.update = function() {}, M.prototype.onKeyDown = function(e) {
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
}, M.prototype.onKeyUp = function(e) {
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
}, M.prototype.animate = function(e, t, n) {
	if (this.isLocked === !0) {
		let r = this.heroPlayer, i = r.velocity, a = r.direction, o = this.object;
		n.ray.origin.copy(o.position), n.ray.origin.y -= 10;
		let s = n.intersectObjects(t.children, !1).length > 0;
		i[0] -= i[0] * r.viscosity * e, i[2] -= i[2] * r.viscosity * e, i[1] -= (i[1] * r.viscosity * .1 + 9.8 * r.mass) * e, a[2] = Number(r.forward) - Number(r.backward), a[0] = Number(r.right) - Number(r.left);
		let c = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
		c ||= 1, a[0] /= c, a[1] /= c, a[2] /= c, (r.forward || r.backward) && (i[2] -= a[2] * 400 * e), (r.left || r.right) && (i[0] -= a[0] * 400 * e), s === !0 && (i[1] = Math.max(0, i[1]), r.canJump = !0), this.moveRight(-i[0] * e), this.moveForward(-i[2] * e), o.position.y += i[1] * e, o.position.y < 10 && (i[1] = 0, o.position.y = 10, r.canJump = !0);
	}
}, Fe.prototype.onKeyDown = function(e) {
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
}, Fe.prototype.onKeyUp = function(e) {
	switch (e.key) {
		case "Shift":
			this.setTranslationSnap(null), this.setRotationSnap(null), this.setScaleSnap(null);
			break;
	}
}, Ke.prototype.isRoundedBoxGeometry = !0, Ke.prototype.type = "RoundedBoxGeometry", qe.prototype.isConvexGeometry = !0, qe.prototype.type = "ConvexGeometry", Je.prototype.isDecalGeometry = !0, Je.prototype.type = "DecalGeometry", Ye.prototype.isParametricGeometry = !0, Xe.prototype.isTextGeometry = !0, Ze.prototype.isTeapotGeometry = !0, Ze.prototype.type = "TeapotGeometry", Qe.prototype.isBoxLineGeometry = !0, Qe.prototype.type = "BoxLineGeometry", $e.prototype.isLoftGeometry = !0;
var L = {
	RoundedBoxGeometry: Ke,
	ConvexGeometry: qe,
	DecalGeometry: Je,
	ParametricGeometry: Ye,
	TextGeometry: Xe,
	TeapotGeometry: Ze,
	BoxLineGeometry: Qe,
	LoftGeometry: $e,
	Line2: et,
	LineSegments2: tt,
	Wireframe: nt,
	LineGeometry: rt,
	LineSegmentsGeometry: it,
	WireframeGeometry2: at,
	ArcballControls: ke,
	DragControls: Ae,
	FirstPersonControls: je,
	FlyControls: Me,
	MapControls: Ne,
	OrbitControls: v,
	PointerLockControls: M,
	TrackballControls: Pe,
	TransformControls: Fe,
	RenderPass: vn,
	ShaderPass: wn,
	GlitchPass: Tn,
	GTAOPass: xn,
	OutlinePass: Sn,
	UnrealBloomPass: bn,
	BokehPass: Cn,
	OutputPass: yn,
	DotScreenPass: En,
	RGBShiftPass: Dn,
	FXAAPass: On,
	AnaglyphEffect: An,
	AsciiEffect: Pn,
	OutlineEffect: Nn,
	ParallaxBarrierEffect: jn,
	StereoEffect: Mn,
	NURBSCurve: ot,
	NURBSSurface: st,
	InstancedObject: pn
}, In = (t) => {
	if (t == null) return;
	if (t.isColor) return t;
	let n = typeof t;
	if (n === "number" || n === "string") return new e.Color(t);
	if (Array.isArray(t)) return new e.Color(...t);
}, Ln = (t) => {
	if (t == null) return;
	if (t.isVector3) return t;
	let n = typeof t;
	if (Array.isArray(t)) return new e.Vector3(...t);
	if (n === "number") return new e.Vector3().setScalar(t);
	if (n === "string") return new e.Vector3().setScalar(~~t);
	if (n === "object") return new e.Vector3(t.x, t.y, t.z);
}, Rn = (t) => {
	if (!t) return [];
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector2(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 2) n.push(new e.Vector2(t[r], t[r + 1]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector2(t.x, t.y));
	else return t;
}, R = (t) => {
	if (!t) return [];
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector3(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 3) n.push(new e.Vector3(t[r], t[r + 1], t[r + 2]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector3(t.x, t.y, t.z));
	else return t;
}, zn = (t) => {
	if (!t) return [];
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector4(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 4) n.push(new e.Vector4(t[r], t[r + 1], t[r + 2], t[r + 3]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector4(t.x, t.y, t.z, t.w));
	else return t;
}, Bn = [
	"color",
	"blendColor",
	"emissive",
	"specular",
	"sheenColor",
	"attenuationColor",
	"specularColor"
], Vn = [
	"r",
	"g",
	"b"
], Hn = [
	"x",
	"y",
	"z"
], Un = [
	"position",
	"rotation",
	"scale"
], Wn = new e.Color(), Gn = (t, n, r) => {
	let i = t[n];
	if (i && i.isColor) {
		Wn.set(r), i.equals(Wn) || i.copy(Wn);
		return;
	}
	t[n] = new e.Color(r);
}, z = /* @__PURE__ */ "alphaMap.anisotropyMap.aoMap.bumpMap.clearcoatMap.clearcoatNormalMap.clearcoatRoughnessMap.displacementMap.emissiveMap.envMap.gradientMap.iridescenceMap.iridescenceThicknessMap.lightMap.map.matcap.metalnessMap.normalMap.roughnessMap.sheenColorMap.sheenRoughnessMap.specularColorMap.specularIntensityMap.specularMap.thicknessMap.transmissionMap".split("."), Kn = {
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
}, qn = {
	shaderMaterial: "ShaderMaterial",
	rawShaderMaterial: "RawShaderMaterial"
}, Jn = {
	shader: "ShaderMaterial",
	rawShader: "RawShaderMaterial"
}, Yn = (e, t) => q(`removedMat:${e}`, `[threefy] ${e}는 2.1에서 없어졌다 — three의 ${t}은 GLSL 전용이라\n  WebGPU 렌더러가 그릴 수 없다(그려지지 않는 재질을 만들어 주는 쪽이 더 나쁘다).\n  TSL 노드 재질로 옮겨라: <meshStandardNodeMaterial colorNode={…} positionNode={…}/>`), B = {
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
}, V = null, H = [], Xn = null, Zn = !1, U = () => V || (H.length === 1 ? H[0] : H.length === 0 ? Xn : (Zn || (Zn = !0, console.warn("[threefy] <ThreeCanvas>가 둘 이상인데 캔버스 밖에서 threefy 상태를 물었다.\n  마지막으로 렌더된 캔버스로 답한다. 정확히 지정하려면 렌더 안에서 useThree()를 부르고\n  그 값을 effect·콜백으로 넘겨라.")), Xn ?? H[H.length - 1])), W = (e, t) => {
	if (!e) return t();
	let n = V;
	V = e, Xn = e;
	try {
		return t();
	} finally {
		V = n;
	}
}, Qn = (e) => {
	let t = H.indexOf(e);
	t >= 0 && H.splice(t, 1), Xn === e && (Xn = H[0] ?? null), V === e && (V = null);
}, $n = (e) => {
	e.destroyTimer !== null && (clearTimeout(e.destroyTimer), e.destroyTimer = null);
}, G = l(null), er = (e) => {
	if (!e) return;
	let { threefy: t } = X();
	return Object.keys(e).forEach((n) => {
		let r = e[n].value;
		typeof r == "string" ? e[n].value = t.loadTexture(r) : Array.isArray(r) && r.length > 0 && r.forEach((r, i) => {
			typeof r == "string" && (e[n].value[i] = t.loadTexture(r));
		});
	}), e;
}, tr = (e, t, n) => {
	let r = t.split("-"), i = r.length;
	r.reduce((e, t, a) => {
		if (a === i - 1) return Array.isArray(e) ? e : (Array.isArray(n) && typeof n[0] == "number" ? e[t] && typeof e[t] != "function" && e[t].fromArray(n) : e[t] && e[t].copy && n && (n.isVector2 || n.isVector3 || n.isVector4 || n.isColor || n.isMatrix3 || n.isMatrix4) ? e[t].copy(n) : e[t] = n, e[t]);
		if (a === i - 2) {
			let i = r[a + 1];
			return i = Number(i), !isNaN(i) && !Array.isArray(e[t]) && (e[t] = []), isNaN(i) ? e[t] || (e[t] = {}) : e[t][i] = n, e[t];
		} else e[t] || (e[t] = {});
		return e[t];
	}, e);
}, nr = {
	repeat: e.RepeatWrapping,
	clamp: e.ClampToEdgeWrapping,
	mirror: e.MirroredRepeatWrapping
}, rr = {
	srgb: e.SRGBColorSpace,
	linear: e.LinearSRGBColorSpace,
	none: e.NoColorSpace
}, ir = (t, n, r, i) => {
	let a = t[n];
	if (!a || !a.isTexture) return;
	let o = !1;
	if (!a._subpropOwned) {
		let e = a;
		a = a.clone(), a._subpropOwned = !0, a._subpropSource = e, t[n] = a, o = !0;
	}
	if (r === "repeat" || r === "offset" || r === "center") {
		let t = Array.isArray(i) ? i : [i, i], n = a[r];
		(n.x !== t[0] || n.y !== t[1]) && (n.fromArray(t), o = !0), r === "repeat" && a.wrapS === e.ClampToEdgeWrapping && a.wrapT === e.ClampToEdgeWrapping && (a.wrapS = a.wrapT = e.RepeatWrapping, o = !0);
	} else if (r === "wrap") {
		let e = nr[i] ?? i;
		(a.wrapS !== e || a.wrapT !== e) && (a.wrapS = a.wrapT = e, o = !0);
	} else if (r === "wrapS" || r === "wrapT") {
		let e = nr[i] ?? i;
		a[r] !== e && (a[r] = e, o = !0);
	} else if (r === "colorSpace") {
		let e = rr[i] ?? i;
		a.colorSpace !== e && (a.colorSpace = e, o = !0);
	} else a[r] !== i && (a[r] = i, o = !0);
	o && (a.needsUpdate = !0, t.needsUpdate = !0);
}, ar = (e, t, n) => {
	for (let r of z) e[r] && e[r].isTexture && ir(e, r, t, n);
}, or = [
	"onPointerMove",
	"onPointerOver",
	"onPointerOut",
	"onPointerEnter",
	"onPointerLeave"
], sr = function() {}, cr = (e, t) => {
	typeof e?.traverse == "function" && e.traverse((e) => {
		if (t) e.raycast === sr && (e.raycast = e.__threefyRaycast, delete e.__threefyRaycast);
		else {
			if (e.raycast === sr) return;
			e.__threefyRaycast = e.raycast, e.raycast = sr;
		}
	});
}, K = (t, n) => {
	if (!n) return;
	let r = (e) => {
		let t = e.indexOf("-");
		return t > 0 && z.includes(e.slice(0, t)) ? !0 : /^texture[A-Z]/.test(e);
	}, i = Object.keys(n);
	[...i.filter((e) => !r(e)), ...i.filter(r)].forEach((r) => {
		if (r === "attach") return;
		if (r === "pickable") {
			cr(t, n[r] !== !1);
			return;
		}
		if (t.isMaterial && /^(position|rotation|scale)(-[xyz])?$/.test(r)) return;
		if (t.isMaterial) {
			let e = n[r];
			if (e != null) {
				let n = r.indexOf("-");
				if (n > 0 && z.includes(r.slice(0, n))) {
					ir(t, r.slice(0, n), r.slice(n + 1), e);
					return;
				}
				if (/^texture[A-Z]/.test(r)) {
					ar(t, r[7].toLowerCase() + r.slice(8), e);
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
			if (a === "object") {
				if (t.isMaterial && i.isTexture && t[r]?._subpropSource === i) return;
				let e = t.isMaterial && i.isTexture ? t[r] : void 0;
				i.isObject3D || (t.isBatchedMesh && /geometry/.test(r) ? t.addGeometry(i) : t.isShaderMaterial && r === "uniforms" ? tr(t, r, er(i)) : tr(t, r, i)), t.isMaterial && i.isTexture && t[r] !== e && (t.needsUpdate = !0);
			} else if (a === "function") {
				t[r] = i;
				let e = U();
				or.includes(r) && e && (e.hasHoverHandler = !0);
			} else if (a === "number") {
				if (r === "scale") {
					t[r]?.isVector3 && t[r].fromArray([
						i,
						i,
						i
					]);
					return;
				}
				if (Bn.includes(r)) {
					Gn(t, r, i);
					return;
				}
				let e = r.split("-");
				if (Bn.includes(e[0]) && Vn.includes(e[1])) {
					t[e[0]][e[1]] = i;
					return;
				}
				if (Un.includes(e[0]) && Hn.includes(e[1])) {
					t.isObject3D && (t[e[0]][e[1]] = i);
					return;
				}
				tr(t, r, i);
			} else if (a === "string") if (Bn.includes(r)) Gn(t, r, i);
			else if (z.includes(r)) {
				let n = U()?.loadTexture(i), a = t[r];
				if (!n && !a) return;
				let o = !!n && a?._subpropSource === n;
				a !== n && !o && (t[r] = n ?? null, n && (r === "map" || r === "emissiveMap" ? n.colorSpace = e.SRGBColorSpace : r === "envMap" || r === "lightMap" ? n.colorSpace = e.LinearSRGBColorSpace : n.colorSpace = e.NoColorSpace), t.needsUpdate = !0);
			} else tr(t, r, i);
			else a === "boolean" ? t[r] = i : tr(t, r, i);
		}
	});
}, lr = Symbol.for("react.forward_ref"), ur = Symbol.for("react.memo"), dr = (e) => typeof e == "string" ? e : e?.threeTag || e?.displayName || e?.name || e?.render?.name || e?.type?.name || "fn", fr = /* @__PURE__ */ new Set(), q = (e, t) => {
	fr.has(e) || (fr.add(e), console.warn(t));
}, pr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new Map(), hr = (e, t) => {
	if (t === "fn") return;
	let n = mr.get(t);
	if (n || mr.set(t, n = {
		distinct: 0,
		reused: 0
	}), pr.has(e)) {
		n.reused++;
		return;
	}
	pr.set(e, !0), n.distinct++, !(n.distinct < 4 || n.reused > 0) && q(`redef:${t}`, `[threefy] <${t}/>가 렌더마다 새로 정의되고 있다.\n  다른 컴포넌트 **안에서** 정의하지 마라 — 매 렌더 언마운트/재마운트돼\n  3D 객체가 통째로 다시 만들어진다. 모듈 최상위로 빼라.`);
}, gr = null, _r = (e) => {
	e.handles.forEach(({ list: e, handle: t }) => {
		let n = e.indexOf(t);
		n >= 0 && e.splice(n, 1);
	}), e.handles = [];
}, vr = (e) => {
	let t = e.pending;
	t.length === 0 && e.handles.length === 0 || (e.cbs = t.map((e) => e.cb), !(e.handles.length === t.length && e.handles.every((e, n) => e.list === t[n].list)) && (_r(e), e.handles = t.map((t, n) => {
		let r = (...t) => e.cbs[n]?.(...t);
		return t.list.push(r), {
			list: t.list,
			handle: r
		};
	})));
}, yr = () => {
	let e = _(null);
	e.current === null && (e.current = {
		pending: [],
		handles: [],
		cbs: []
	});
	let t = e.current;
	return m(() => {
		vr(t);
	}), m(() => () => _r(t), []), t;
}, br = (e) => {
	let t = yr(), n = p(G)?.threefy, r = gr;
	gr = t, t.pending = [];
	try {
		return W(n, e);
	} finally {
		gr = r;
	}
}, xr = /* @__PURE__ */ new WeakMap(), Sr = (e) => {
	let t = xr.get(e);
	if (t) return t;
	let n;
	if (typeof e == "function") {
		if (e.prototype?.isReactComponent) {
			let t = dr(e);
			return q(`class:${t}`, `[threefy] <${t}/>는 class 컴포넌트다.\n  threefy 트리 안에서는 지원하지 않는다 — 함수 컴포넌트로 바꿔라.`), e;
		}
		n = (t) => br(() => Cr(e(t)));
	} else if (e?.$$typeof === lr) n = (t) => {
		let n = t, r = null;
		if ("ref" in t) {
			r = t.ref ?? null, n = {};
			for (let e in t) e !== "ref" && (n[e] = t[e]);
		}
		return br(() => Cr(e.render(n, r)));
	};
	else if (e?.$$typeof === ur) {
		let t = Sr(e.type);
		n = t === e.type ? e : f(t, e.compare);
	} else return e;
	return n.displayName = dr(e), xr.set(e, n), n;
}, Cr = (e) => d(e) ? J(e) : o.Children.map(e, J), wr = (e, t) => t.key === null ? u(e, t.props) : u(e, {
	key: t.key,
	...t.props
}), J = (e) => {
	if (!d(e)) return e;
	let t = e.type;
	if (typeof t == "symbol") return Tr(e);
	if (typeof t == "string") {
		let n = N[t];
		return n ? wr(n, e) : e;
	}
	if (t.threeTag) return e;
	hr(t, dr(t));
	let n = Sr(t);
	if (n !== t) return wr(n, e);
	let r = e.props?.children;
	return r === void 0 || typeof r == "function" ? e : c(e, { children: o.Children.map(r, J) });
}, Tr = (e) => {
	let t = Symbol.keyFor(e.type);
	if (t === "react.fragment") return /* @__PURE__ */ F("group", { children: e.props.children }, e.key ?? void 0);
	if (t === "react.suspense") {
		let { fallback: t, children: n } = e.props;
		return c(e, {
			fallback: Cr(t),
			children: o.Children.map(n, J)
		});
	}
	let n = e.props?.children;
	return n === void 0 || typeof n == "function" ? e : c(e, { children: o.Children.map(n, J) });
}, Er = l(null), Dr = (e, t) => {
	e && (typeof e == "function" ? e(t) : e.current = t);
}, Or = () => {
	let e = {
		object: null,
		entries: /* @__PURE__ */ new Map(),
		placed: null,
		orderSeq: 0,
		build: null,
		place: null,
		api: null
	};
	return e.api = {
		nextOrder: () => e.orderSeq++,
		register(t, n, r, i) {
			let a = e.entries.get(t);
			e.entries.set(t, {
				object: n,
				attach: r,
				order: i
			}), e.object && (a && a.object === n && a.attach === r || (a && a.object !== n && a.object && (e.unplace ? e.unplace(a.object) : a.object.isObject3D && a.object.removeFromParent()), r ? e.build() : e.place(n)));
		},
		unregister(t) {
			let n = e.entries.get(t);
			e.entries.delete(t), !(!n || !n.object) && (e.unplace ? e.unplace(n.object) : n.object.isObject3D && n.object.removeFromParent(), n.attach && n.object.userData?.__threefyOwned && typeof n.object.dispose == "function" && (n.object.dispose(), n.object.userData.__threefyDisposed = !0));
		}
	}, e;
}, kr = (t, n, r) => {
	let { ref: i } = t, a = p(Er), s = p(G)?.threefy ?? Y(), c = _(null);
	c.current === null && (c.current = Or());
	let l = c.current, u = _(null);
	u.current === null && (u.current = {});
	let d = u.current, f = _(null);
	f.current === null && (f.current = a ? a.nextOrder() : 0);
	let h = f.current, g;
	/Geometry/i.test(n) && (g = "geometry"), /Material/i.test(n) && (g = "material"), t.attach && (g = t.attach), l.build = () => W(s, () => {
		let n = {};
		l.entries.forEach((e) => {
			e.attach && (n[e.attach] = e.object);
		});
		let o = r(t, n);
		l.object = o, o?.isScene && s.setScene(o), l.place = (t) => {
			let n = (e) => {
				e.isObject3D && o && o.add(e);
			};
			if (t) if (t.isScene) s.setScene(t);
			else if (t.isCamera) s.setCamera(t);
			else if (t.type?.match(/(Helper)$/) || t.isTransformControls) s.sceneHelpers.add(t);
			else if (t.isFog || t.isFogExp2) (o?.isScene ? o : s.scene).fog = t;
			else if (t.isPass) s.addPass(t);
			else if (t.type?.match(/(Effect)$/)) s.setEffect(t);
			else if (t.type === "Group" && t.forCurvePath) {
				let r = t, i = new e.CurvePath();
				r.children.forEach((e) => {
					i.add(e.userData.curve);
				}), r.userData.path = i, n(t);
			} else n(t);
		}, l.unplace = (e) => {
			if (e && !(e.isScene || e.isCamera)) {
				if (e.isFog || e.isFogExp2) {
					let t = o?.isScene ? o : s.scene;
					t.fog === e && (t.fog = null);
					return;
				}
				if (e.isPass) {
					s.removePass(e), e.disposeNodes?.(), e.dispose?.();
					return;
				}
				if (e.type?.match(/(Effect)$/)) {
					s.pipeline?.effect === e && s.setEffect(null);
					return;
				}
				s.removeControls(e) || e.isObject3D && e.removeFromParent();
			}
		};
		let c = [...l.entries.values()].filter((e) => !e.attach).sort((e, t) => e.order - t.order).map((e) => e.object);
		l.placed && l.placed.length === c.length && l.placed.every((e, t) => e === c[t]) || (l.placed = c, c.forEach((e) => l.place(e))), Dr(i, o), a && a.register(d, o, g, h);
	}), n === "ThreeProvider" && l.object === null && l.build(), m(() => {
		l.build();
	}), m(() => () => {
		a && W(s, () => a.unregister(d));
	}, [a]);
	let v = o.Children.map(t.children, J);
	return /* @__PURE__ */ F(Er, {
		value: l.api,
		children: v
	});
};
function Ar(e, t) {
	switch (t.type) {
		case "myAction": return e;
		default: return e;
	}
}
var jr = () => {
	(/* @__PURE__ */ "Color.Vector2.Vector3.Vector4.Scene.Object3D.Group.Sprite.Line.LineLoop.LineSegments.Points.Audio.PositionalAudio.LOD.Fog.FogExp2.AmbientLight.DirectionalLight.HemisphereLight.Light.LightProbe.PointLight.RectAreaLight.SpotLight.ArrayCamera.Camera.CubeCamera.OrthographicCamera.PerspectiveCamera.StereoCamera.BufferAttribute.GLBufferAttribute.InstancedBufferAttribute.InstancedInterleavedBuffer.InterleavedBuffer.InterleavedBufferAttribute.BufferGeometry.InstancedBufferGeometry.BoxGeometry.CapsuleGeometry.CircleGeometry.ConeGeometry.CylinderGeometry.DodecahedronGeometry.EdgesGeometry.ExtrudeGeometry.IcosahedronGeometry.LatheGeometry.OctahedronGeometry.PlaneGeometry.PolyhedronGeometry.RingGeometry.ShapeGeometry.SphereGeometry.TetrahedronGeometry.TorusGeometry.TorusKnotGeometry.TubeGeometry.WireframeGeometry.LineBasicMaterial.LineDashedMaterial.MeshBasicMaterial.MeshDepthMaterial.MeshDistanceMaterial.MeshLambertMaterial.MeshMatcapMaterial.MeshNormalMaterial.MeshPhongMaterial.MeshPhysicalMaterial.MeshStandardMaterial.MeshToonMaterial.PointsMaterial.ShadowMaterial.SpriteMaterial.NodeMaterial.MeshBasicNodeMaterial.MeshLambertNodeMaterial.MeshPhongNodeMaterial.MeshStandardNodeMaterial.MeshPhysicalNodeMaterial.MeshToonNodeMaterial.MeshMatcapNodeMaterial.MeshNormalNodeMaterial.MeshSSSNodeMaterial.LineBasicNodeMaterial.LineDashedNodeMaterial.Line2NodeMaterial.PointsNodeMaterial.SpriteNodeMaterial.ShadowNodeMaterial.VolumeNodeMaterial.BatchedMesh.InstancedMesh.Mesh.SkinnedMesh.CanvasTexture.CompressedTexture.CompressedArrayTexture.CubeTexture.Data3DTexture.DataArrayTexture.DataTexture.DepthTexture.FramebufferTexture.Texture.VideoTexture.ArrowHelper.AxesHelper.BoxHelper.Box3Helper.CameraHelper.DirectionalLightHelper.GridHelper.PolarGridHelper.HemisphereLightHelper.PlaneHelper.PointLightHelper.SkeletonHelper.SpotLightHelper.Controls.ArcballControls.DragControls.FirstPersonControls.FlyControls.MapControls.OrbitControls.PointerLockControls.TrackballControls.TransformControls.RenderPass.ShaderPass.GlitchPass.GTAOPass.OutlinePass.UnrealBloomPass.BokehPass.OutputPass.DotScreenPass.RGBShiftPass.FXAAPass.AnaglyphEffect.AsciiEffect.OutlineEffect.ParallaxBarrierEffect.StereoEffect.RoundedBoxGeometry.ConvexGeometry.DecalGeometry.ParametricGeometry.TextGeometry.TeapotGeometry.BoxLineGeometry.LoftGeometry.Line2.LineSegments2.Wireframe.LineGeometry.LineSegmentsGeometry.WireframeGeometry2.Primitive.Geometry.Material.BatchedMaterial.CurvePath.InstancedObject".split(".")).forEach((e) => di(e)), fi(), pi(), ei(), ti();
};
function Mr(e) {
	Vt(), p(G) && q("nestedCanvas", "[threefy] <ThreeCanvas> 안에 <ThreeCanvas>가 또 있다.\n  캔버스가 하나 더 생겨 겹치고, 안쪽 요소는 안쪽 씬으로 간다.\n  씬을 나눠 조립하려는 것이라면 안쪽 <ThreeCanvas>를 지우고 컴포넌트나 <group>을 써라.");
	let t = _(null);
	t.current === null && (t.current = {
		threefy: null,
		destroyTimer: null
	});
	let n = t.current;
	$n(n);
	let { dom: r, width: i, height: a, style: o, className: c } = e, l = _(null), u = !r;
	if (n.threefy === null) {
		let e = new Jt({
			dom: r,
			width: i,
			height: a,
			attach: !u
		});
		e.init(), e.ready.then(() => {
			e._destroyed || e.animate();
		}), e.reactElements = N, H.push(e), n.threefy = e;
	}
	let d = n.threefy, [, f] = g(Ar, d), v = {
		threefy: d,
		dispatch: f
	};
	return h(() => {
		if (!u) return;
		let e = l.current;
		e && d.dom.parentElement !== e && e.appendChild(d.dom);
	}, [u, d]), h(() => {
		if (!u || i && a) return;
		let e = l.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = () => {
			let { width: t, height: n } = e.getBoundingClientRect();
			t > 0 && n > 0 && d.onResize(t, n);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [
		u,
		i,
		a,
		d
	]), m(() => ($n(n), () => {
		n.destroyTimer = setTimeout(() => {
			n.destroyTimer = null;
			let e = n.threefy;
			n.threefy = null, Qn(e), e?.destroy();
		}, 0);
	}), []), W(d, () => {
		let t = kr(e, "ThreeProvider", () => d.scene), n = /* @__PURE__ */ F(G, {
			value: v,
			children: /* @__PURE__ */ F(s, {
				fallback: null,
				children: t
			})
		});
		if (!u) return n;
		let r = {
			position: "relative",
			width: i ?? "100%",
			height: a ?? "100%",
			...o
		};
		return /* @__PURE__ */ F("div", {
			ref: l,
			className: c,
			style: r,
			children: n
		});
	});
}
function Nr(e) {
	return Mr(e);
}
var Y = () => U(), X = () => {
	let e = U();
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
};
function Pr(e) {
	return e === void 0 ? X() : e(U());
}
function Fr(e, t = []) {
	let n = _(null), r = _(null), i = p(G)?.threefy ?? Y();
	if (r.current === null && (r.current = {
		pending: !1,
		cb: null,
		threefy: null
	}), i && (r.current.threefy = i), n.current === null) {
		let e = r.current, t = null;
		n.current = {
			get current() {
				return t;
			},
			set current(n) {
				let r = t !== n;
				t = n, r && n && e.pending && (e.pending = !1, queueMicrotask(() => {
					let t = e.threefy ?? Y();
					W(t, () => e.cb(n, t?.scene));
				}));
			}
		};
	}
	return m(() => {
		let t = r.current;
		t.cb = e;
		let i = n.current.current;
		if (!i) {
			t.pending = !0;
			return;
		}
		let a = t.threefy ?? Y();
		W(a, () => e(i, a?.scene));
	}, [...t]), n.current;
}
var Ir = /* @__PURE__ */ new Set(), Lr = (e, t) => {
	Ir.has(e) || (Ir.add(e), console.warn(`[threefy] ${e}() is deprecated and will be removed in a future release. Use ${t}() instead.`));
}, Rr = (e, t = []) => (Lr("useRefEffect", "useSetup"), Fr(e, t)), zr = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Br = !1;
function Vr() {
	if (zr) {
		let e = zr.H;
		return !!e && e.useRef !== e.useState;
	}
	return Br || (Br = !0, console.warn("[threefy] React의 렌더 단계를 판정할 수 없다 (내부값이 바뀐 듯하다).\n  useFrame·useLoader 등이 예전 동작으로 떨어진다 (등록이 중복되거나 화면이 자동 갱신되지 않는다).\n  react 버전을 확인하라.")), !1;
}
function Hr(e) {
	let t = _(e);
	h(() => {
		t.current = e;
	});
	let n = _(null);
	return n.current === null && (n.current = (...e) => t.current(...e)), n.current;
}
function Ur(e, t = []) {
	return Lr("useRefCallback", "useHandle"), Hr(e);
}
var Wr = (e, t) => (e.push(t), () => {
	let n = e.indexOf(t);
	n >= 0 && e.splice(n, 1);
}), Gr = (e, t) => {
	if (gr) {
		gr.pending.push({
			list: e,
			cb: t
		});
		return;
	}
	if (!Vr()) return Wr(e, t);
	let n = Hr(t);
	m(() => Wr(e, n), []);
};
function Kr(e) {
	return Gr(U().renderCallbacks, e);
}
function qr(e) {
	return Gr(U().keyDownCallbacks, e);
}
function Jr(e) {
	return Gr(U().keyUpCallbacks, e);
}
var Yr = (e, t, n) => {
	let r = (e, t, n, i, a) => {
		let o = "is" + t;
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			typeof e != "object" || !e || a.has(e) || (a.add(e), (e[o] === !0 || e.type === t) && (n ? n === e.name && i.push(e) : i.push(e)), !ArrayBuffer.isView(e) && Object.keys(e).forEach((o) => {
				if (o === "parent") return;
				let s = e[o];
				typeof s == "object" && s && r(s, t, n, i, a);
			}));
		});
	}, i = [];
	return r(e, t, n, i, /* @__PURE__ */ new WeakSet()), i;
}, Xr = (e, t) => {
	let n = U().scene;
	if (t === void 0) return Yr(n, e);
	let r = Array.isArray(t) ? t : [t];
	if (e === "Object3D") {
		let e = (e) => e.split("/").pop().split("?")[0];
		r = r.map((t) => e(t));
	}
	let i = Yr(n, e), a = [];
	return r.forEach((e) => {
		a.push(i.filter((t) => t.name === e));
	}), a.length === 1 ? a[0] : a;
}, Zr = () => {
	let e = U();
	return {
		replay: () => e.replayAnimate(),
		pause: () => e.pauseAnimate(),
		flush: () => e.flushAnimate()
	};
}, Qr = {
	LOD: "lod",
	RGBShiftPass: "rgbShiftPass",
	FXAAPass: "fxaaPass"
}, $r = {
	rGBShiftPass: "rgbShiftPass",
	fXAAPass: "fxaaPass"
}, ei = () => {
	Object.entries($r).forEach(([e, t]) => {
		let n = N[t];
		if (!n) return;
		let r = (r) => (q(`tag:${e}`, `[threefy] <${e}/> is deprecated and will be removed in a future release. Use <${t}/> instead.`), n(r));
		r.threeTag = n.threeTag, r.threeType = n.threeType, r.displayName = e, N[e] = r;
	});
}, ti = () => {
	Object.entries(qn).forEach(([e, t]) => {
		let n = () => (Yn(`<${e}/>`, t), null);
		n.threeTag = e, n.displayName = e, N[e] = n;
	});
}, ni = (e, t) => {
	if (Object.is(e, t)) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
	if (typeof e.equals == "function" && e.constructor === t.constructor) return e.equals(t);
	if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, n) => Object.is(e, t[n]));
	if (e.constructor !== Object || t.constructor !== Object) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => Object.is(e[n], t[n]));
}, ri = (e, t, n) => {
	let r = e?.userData?.__threefyArgs;
	return !r || r.key !== t || r.args.length !== n.length ? !1 : r.args.every((e, t) => ni(e, n[t]));
}, ii = (e, t, n) => {
	e?.userData && (e.userData.__threefyArgs = {
		key: t,
		args: [...n]
	});
}, ai = (e) => {
	let { camera: t, renderer: n, scene: r } = U();
	switch (e) {
		case "arcball": return [
			t,
			n.domElement,
			r
		];
		case "drag": return [
			r.children,
			t,
			n.domElement
		];
		case "pointerLock": return [t, document.body];
		case "firstPerson":
		case "fly":
		case "map":
		case "orbit":
		case "trackball":
		case "transform": return [t, n.domElement];
		default: return [];
	}
}, oi = (e, t, n) => {
	let r = e?.__threefyArgs;
	return !r || r.key !== t || r.args.length !== n.length ? !1 : r.args.every((e, t) => ni(e, n[t]));
}, si = (e, t, n, r) => {
	let i = e.current;
	if (i && oi(i, t, n)) return i;
	let a = r();
	return a.__threefyArgs = {
		key: t,
		args: [...n]
	}, a;
}, ci = (e) => e.replace(/Controls$/, "").replace(/^./, (e) => e.toLowerCase()), li = (e, t, n) => {
	let r = U(), i = e.current;
	if (i && i.__threefyControlsKey === t) return r.setControls(i), i;
	i && r.removeControls(i);
	let a = new L[t](...n);
	return a.__threefyControlsKey = t, e.current = a, r.setControls(a), a;
}, ui = (e) => {
	if (!e) return;
	e.isSprite || e.geometry?.dispose();
	let t = e.material;
	Array.isArray(t) ? t.forEach((e) => e?.dispose?.()) : t?.dispose?.();
}, di = (t) => {
	P(Qr[t] ?? `${t[0].toLowerCase()}${t.slice(1)}`, (n) => {
		let r = _();
		return r.current ??= { current: null }, kr(n, t, (n, i) => {
			let { ref: a, children: o, args: s, type: c, count: l, object: u, onLoad: d, fallback: f, ...p } = n, m = a && typeof a != "function" ? a : r.current;
			m.current?.userData?.__threefyDisposed && (m.current = null);
			let h = Array.isArray(s) ? [...s] : [];
			t === "InstancedMesh" && l && h.push(void 0, void 0, l);
			let g;
			if (t === "Primitive") {
				if (!u) return q("primitiveNoObject", "[threefy] <primitive/>에는 object가 필요하다 (eg: <primitive object={mesh}/>).\n  object가 아직 없으면 그 요소를 렌더하지 마라 — { mesh && <primitive object={mesh}/> }"), null;
				if (d) {
					let e = u.userData;
					if (e?.__threefyLoaded) e.__threefyOnLoadFired || (e.__threefyOnLoadFired = !0, queueMicrotask(() => d(u)));
					else if (!e || !e.__threefyOnLoadBound) {
						e && (e.__threefyOnLoadBound = !0);
						let t = ({ target: e }) => {
							e.removeEventListener("onLoad", t), e.userData && (e.userData.__threefyOnLoadFired = !0), d(e);
						};
						u.addEventListener("onLoad", t);
					}
				}
				g = u;
			} else if (t === "Geometry") {
				let t = c?.match(/(rounded|convex|decal|parametric|text|teapot|boxLine|loft)/), n = c === void 0 ? "buffer" : c, r = t ? `x:${B[c]}` : `t:${B[n]}`;
				ri(m.current, r, h) || (m.current && m.current.dispose(), m.current = t ? new L[B[c]](...h) : new e[B[n]](...h), ii(m.current, r, h)), g = m.current;
			} else if (t === "Material") {
				let t = c === void 0 ? "basic" : c, n = Kn[t];
				if (!n) {
					let e = Jn[t];
					e ? Yn(`<material type={'${t}'}/>`, e) : q(`matType:${t}`, `[threefy] <material type={'${t}'}/>는 모르는 재질 타입이다. 'basic'으로 대체한다.\n  쓸 수 있는 값: ${Object.keys(Kn).join(", ")}`), n = Kn.basic;
				}
				let r = `m:${n}`;
				ri(m.current, r, h) || (m.current && m.current.dispose(), m.current = new e[n](), ii(m.current, r, h)), g = m.current;
			} else if (t === "BatchedMaterial") g = si(m, `b:${t}`, h, () => new Yt[t](...h));
			else if (t === "Controls") {
				let e = (e, t) => {
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
				}, t = c;
				(typeof t != "string" || t.length === 0) && (q("controlsType", "[threefy] <controls/>에는 type이 필요하다 (eg: type={'orbit'}). 'orbit'으로 대체한다.\n  쓸 수 있는 값: arcball, drag, firstPerson, fly, map, orbit, pointerLock, trackball, transform"), t = "orbit"), h.length === 0 && (h = ai(t)), e(t, p), g = li(m, t[0].toUpperCase() + t.slice(1) + "Controls", h);
			} else if (t.match(/(Controls)$/)) h.length === 0 && (h = ai(ci(t))), g = li(m, t, h);
			else if (t.match(/(Pass|Effect)$/)) g = si(m, `p:${t}`, h, () => new L[t](...h));
			else if (t.match(/Geometry2?$/)) {
				let n = `c:${t}`;
				ri(m.current, n, h) || (m.current && m.current.dispose(), m.current = new (L[t] || e[t])(...h), ii(m.current, n, h)), g = m.current;
			} else t === "CurvePath" ? (g = m.current ? m.current : new e.Group(...h), g.forCurvePath = !0) : g = m.current ? m.current : new (L[t] || e[t])(...h);
			return K(g, i), K(g, p), t !== "Primitive" && g.userData && (g.userData.__threefyOwned = !0), m.current = g, g;
		});
	}, t);
}, fi = () => {
	let t = /* @__PURE__ */ "box.capsule.circle.cone.cylinder.dodecahedron.extrude.icosahedron.lathe.octahedron.plane.polyhedron.ring.shape.sphere.tetrahedron.torus.torusKnot.tube.rounded.convex.decal.parametric.text.teapot.boxLine.loft.lineCurve.ellipseCurve.arcCurve.catmullRom3.splineCurve.bezierCurve.nurbsCurve.curve.nurbsSurface".split("."), n = [
		"line",
		"arc",
		"ellipse",
		"catmullRom3",
		"spline",
		"bezier",
		"nurbs"
	], r = (t, n, r) => {
		let { divisions: i, dim: a, order: o } = r, s;
		if (t === "lineCurve") i = i === void 0 ? 1 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n = R(n), s = new e.LineCurve3(...n)), (a === 2 || a === "2") && (n = Rn(n), s = new e.LineCurve(...n));
		else if (t === "ellipseCurve" || t === "arcCurve") i = i === void 0 ? 5 : i, s = new e.EllipseCurve(...n);
		else if (t === "catmullRom3") i = i === void 0 ? 5 : i, Array.isArray(n[0]) ? n[0] = R(n[0]) : n = [R(n)], s = new e.CatmullRomCurve3(...n);
		else if (t === "splineCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n[0] = R(n[0]), s = new e.CatmullRomCurve3(...n)), (a === 2 || a === "2") && (Array.isArray(n[0]) ? n[0] = Rn(n[0]) : n = [Rn(n)], s = new e.SplineCurve(...n));
		else if (t === "bezierCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, o = o === void 0 ? 2 : o, (a === 3 || a === "3") && (n = R(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve3(...n) : new e.QuadraticBezierCurve3(...n)), (a === 2 || a === "2") && (n = Rn(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve(...n) : new e.QuadraticBezierCurve(...n));
		else if (t === "nurbsCurve") {
			i = i === void 0 ? 5 : i;
			let { degree: e, knots: t, controlPoints: a } = r;
			if (n.length > 0 && ([e, t, a] = n), e === void 0 || !t || !a) return q("nurbsCurveArgs", "[threefy] <nurbsCurve/>에는 degree · knots · controlPoints가 모두 필요하다.\n  (eg) <nurbsCurve degree={3} knots={[...]} controlPoints={[[x,y,z,w], ...]}/>\n  이 요소는 건너뛴다."), [];
			a = zn(a), s = new L.NURBSCurve(e, t, a);
		}
		if (!s) return q(`curveShape:${t}:${a}`, `[threefy] <${t}/>를 만들 수 없다 (dim={${a}}). dim은 2 또는 3이어야 한다.\n  이 요소는 건너뛴다.`), [];
		let c = s.getPoints(i);
		return [new e.BufferGeometry().setFromPoints(c), s];
	}, i = (e, t, n) => {
		if (e === "nurbsSurface") {
			let { slices: e = 8, stacks: r = 8, degree1: i, degree2: a, knots1: o, knots2: s, controlPoints: c } = n;
			if (t.length > 0 && ([i, a, o, s, c] = t), i === void 0 || a === void 0 || !o || !s || !c) return q("nurbsSurfaceArgs", "[threefy] <nurbsSurface/>에는 degree1 · degree2 · knots1 · knots2 · controlPoints가 모두 필요하다.\n  이 요소는 건너뛴다."), [];
			let l = [], u = o.length - i - 1;
			for (let e = 0; e < u; e++) l.push(zn(c[e]));
			let d = new L.NURBSSurface(i, a, o, s, l);
			return [new L.ParametricGeometry((e, t, n) => d.getPoint(e, t, n), e, r), d];
		} else return [];
	};
	t.forEach((t) => {
		P(t, (a) => {
			let o = _();
			return o.current ??= { current: null }, kr(a, t, (a, s) => {
				let { ref: c, children: l, args: u, type: d, ...f } = a, p = c && typeof c != "function" ? c : o.current, m = Array.isArray(u) ? u : [], h = `o:${t}:${d ?? ""}`, g = !!p.current && !ri(p.current, h, m), _;
				if (p.current && !g) _ = p.current, K(_.material, f);
				else {
					let a = p.current, o = Array.isArray(u) ? [...u] : [], s, c, l;
					if (t.match(/(rounded|convex|decal|parametric|text|teapot|boxLine|loft)/)) s = new L[B[t]](...o);
					else if (t.match(/(lineCurve|ellipseCurve|arcCurve|catmullRom3|splineCurve|bezierCurve|nurbsCurve)/)) [s, c] = r(t, o, f);
					else if (t === "curve") {
						let e = d;
						n.includes(e) || (q(`curveType:${e}`, `[threefy] <curve type={'${e}'}/>는 모르는 커브 타입이다. 'line'으로 대체한다.\n  쓸 수 있는 값: ${n.join(", ")}`), e = "line");
						let t = e === "catmullRom3" ? e : e + "Curve";
						d = f.linetype === "dashed" ? "dashed" : "line", [s, c] = r(t, o, f);
					} else t === "nurbsSurface" ? [s, l] = i(t, o, f) : s = new e[B[t]](...o);
					if (!s) return null;
					let g, v, y;
					if (g = d === void 0 ? "basic" : d.split("-")[0], g === "line2Node") if (y = new e.Line2NodeMaterial(), K(y, f), c) {
						let e = Array.from(s.attributes.position.array);
						s.dispose(), s = new L.LineGeometry().setPositions(e), v = "Line2";
					} else {
						let t = new e.WireframeGeometry(s);
						s.dispose(), s = new L.LineSegmentsGeometry().fromWireframeGeometry(t), t.dispose(), v = "LineSegments2";
					}
					else if (g === "points" || g === "pointsNode") {
						y = new e.PointsNodeMaterial(), K(y, f);
						let t = s.attributes.position, n = new e.InstancedBufferAttribute(new Float32Array(t.array), 3);
						y.positionNode = T(n), _ = new e.Sprite(y), _.count = t.count, _.frustumCulled = !1, s.dispose();
					} else {
						let t = Kn[g];
						t ||= "Mesh" + g[0].toUpperCase() + g.slice(1) + "Material", v = t.startsWith("Points") ? "Points" : t.startsWith("Sprite") ? "Sprite" : t.startsWith("Line") ? "Line" : "Mesh", y = new e[t](), K(y, f);
					}
					_ ||= new (L[v] || e[v])(s, y), (g === "dashed" || g === "dashedNode" || g === "line2Node") && _.computeLineDistances(), c && (_.userData.curve = c), l && (_.userData.surface = l), ii(_, h, m), a && a !== _ && ui(a);
				}
				return K(_, s), K(_, f), p.current = _, _;
			});
		}, t);
	});
}, pi = () => {
	P("background", (e) => {
		let t = p(G)?.threefy ?? Y(), { url: n, texture: r, color: i, onLoad: a } = e, o = n === void 0 ? r === void 0 ? i === void 0 ? 1644825 : i : r : n;
		return m(() => {
			W(t, () => t.createBackground(o, a));
		}, [
			t,
			o,
			a
		]), null;
	}, "Background"), P("threePointLighting", (t) => {
		let n = _(null), { ref: r = n, color: i = 16777215, intensity: a = 1, keyLightPos: o = [
			-2,
			-1,
			3
		], fillLightPos: s = [
			2,
			4,
			4
		], backLightPos: c = [
			1,
			4,
			-2
		], hemisphereLightOn: l = !0, ...u } = t, d;
		typeof i == "number" ? d = i : i.isColor ? d = i.getHex() : Array.isArray(i) ? d = new e.Color().fromArray(i).getHex() : typeof i == "string" && (d = new e.Color(i).getHex());
		let f = N.group;
		return /* @__PURE__ */ hn(f, {
			ref: r,
			name: "threePointLighting",
			...u,
			children: [
				/* @__PURE__ */ F("directionalLight", {
					args: [d, a * .75 * Math.PI],
					position: o
				}),
				/* @__PURE__ */ F("directionalLight", {
					args: [d, a * .375 * Math.PI],
					position: s
				}),
				/* @__PURE__ */ F("directionalLight", {
					args: [d, a * .5 * Math.PI],
					position: c
				}),
				l && /* @__PURE__ */ F("hemisphereLight", {
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
	}, "ThreePointLighting"), P("shadowDirectionalLight", (e) => {
		let t = _(null), { ref: n = t, children: r, position: i = [
			0,
			100,
			0
		], color: a = 16777215, intensity: o = 1, ...s } = e, c = i, l = Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]), u = -l, d = l, f = l, p = -l, m = l * .1, h = l * 2, g = N.directionalLight;
		return /* @__PURE__ */ F(g, {
			ref: n,
			position: i,
			args: [a, o],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-left": u,
			"shadow-camera-right": d,
			"shadow-camera-top": f,
			"shadow-camera-bottom": p,
			"shadow-camera-near": m,
			"shadow-camera-far": h,
			castShadow: !0,
			...s
		});
	}, "ShadowDirectionalLight"), P("shadowSpotLight", (e) => {
		let t = _(null), { ref: n = t, children: r, position: i = [
			0,
			100,
			0
		], color: a = 16777215, intensity: o = 200, distance: s = 0, angle: c = Math.PI / 6, penumbra: l = 1, decay: u = 1.2, ...d } = e, f = i, p = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2]), m = p * .1, h = p * 2, g = N.spotLight;
		return /* @__PURE__ */ F(g, {
			ref: n,
			position: i,
			args: [
				a,
				o,
				s,
				c,
				l,
				u
			],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-near": m,
			"shadow-camera-far": h,
			"shadow-focus": 1,
			castShadow: !0,
			...d
		});
	}, "ShadowSpotLight"), P("shadowPointLight", (e) => {
		let t = _(null), { ref: n = t, children: r, position: i = [
			0,
			100,
			0
		], color: a = 16777215, intensity: o = 200, distance: s = 0, decay: c = 1.2, ...l } = e, u = i, d = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]), f = d * .1, p = d * 2, m = N.pointLight;
		return /* @__PURE__ */ F(m, {
			ref: n,
			position: i,
			args: [
				a,
				o,
				s,
				c
			],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-near": f,
			"shadow-camera-far": p,
			castShadow: !0,
			...l
		});
	}, "ShadowPointLight"), P("shadowPlaneReceiver", (e) => {
		let t = _(null), { ref: n = t, width: r = 100, depth: i = r, type: a = "shadow", color: o = 0, opacity: s = .5, ...c } = e, l = N.plane;
		return /* @__PURE__ */ F(l, {
			ref: n,
			receiveShadow: !0,
			"rotation-x": Math.PI / -2,
			args: [r, i],
			type: a,
			color: o,
			opacity: s,
			...c
		});
	}, "ShadowPlaneReceiver");
};
jr();
//#endregion
//#region src/MTLExporter.js
var mi = class {
	parse(e) {
		let t = "", n = {}, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
		function s(e) {
			let t = e.name ? e.name : `material${e.id}`, n = t;
			for (let e = 2; a.has(n); e++) n = `${t}-${e}`;
			return a.add(n), o.set(e.uuid, n), n;
		}
		function c(e) {
			let t = atob(e.split(",")[1]), n = new Uint8Array(t.length);
			for (let e = 0, r = t.length; e < r; e++) n[e] = t.charCodeAt(e);
			return n;
		}
		function l(e, t) {
			let r = i.get(e.uuid);
			if (r) return r;
			if (e.isDataTexture === !0) return console.error("saveTexture: DataTexture not supported.", e), null;
			let a = e.image;
			if (!a || !a.width || !a.height) return console.warn(`[threefy] texture for '${t}' is not ready (image not decoded yet) — not exported.`), null;
			let o = document.createElement("canvas"), s = o.getContext("2d");
			o.width = a.width, o.height = a.height;
			let l;
			try {
				s.drawImage(a, 0, 0), l = o.toDataURL();
			} catch (e) {
				return console.warn(`[threefy] texture for '${t}' is not drawable — not exported.`, e), null;
			}
			return n[t] = c(l), i.set(e.uuid, t), t;
		}
		function u(e) {
			let n, i = "", a = "", o = Array.isArray(e.material) ? e.material : [e.material];
			for (let e = 0, c = o.length; e < c; e++) if (n = o[e], n && !r.has(n.uuid)) {
				if (r.add(n.uuid), i = s(n), t += `newmtl ${i}\n`, n.color) {
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
				n.shininess && (t += `Ns ${n.shininess}\n`), n.opacity && n.opacity < 1 && n.transparent === !0 && (t += `d ${n.opacity}\n`, t += `Tr ${1 - n.opacity}\n`), n.map && (a = l(n.map, i + "_diffuse.png"), a && (t += "map_Kd " + a + "\n")), n.specularMap && (a = l(n.specularMap, i + "_specular.png"), a && (t += "map_Ks " + a + "\n")), n.emissiveMap && (a = l(n.emissiveMap, i + "_emissive.png"), a && (t += "map_Ke " + a + "\n")), n.normalMap && (a = l(n.normalMap, i + "_normal.png"), a && (t += "norm " + a + "\n")), n.bumpMap && (a = l(n.bumpMap, i + "_bump.png"), a && (t += "map_bump " + a + "\n")), n.alphaMap && (a = l(n.alphaMap, i + "_alpha.png"), a && (t += "map_d " + a + "\n"));
			}
		}
		return e.traverse(function(e) {
			e.isMesh === !0 && u(e);
		}), {
			mtl: t,
			textures: n,
			names: o
		};
	}
}, hi = class {
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
		let l = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&apos;"
		})[e]);
		function u(e) {
			let t = atob(e), n = new Uint8Array(t.length);
			for (let e = 0, r = n.length; e < r; e++) n[e] = t.charCodeAt(e);
			return n;
		}
		let d, f;
		function p(e, t, n) {
			if (!e || !e.width || !e.height) return console.warn(`[threefy] ColladaExporter: texture '${n}' is not ready (image not decoded yet) — not exported.`), null;
			d ||= document.createElement("canvas"), f ||= d.getContext("2d"), d.width = e.width, d.height = e.height;
			let r;
			try {
				f.drawImage(e, 0, 0), r = d.toDataURL(`image/${t}`, 1).replace(/^data:image\/(png|jpg);base64,/, "");
			} catch (e) {
				return console.warn(`[threefy] ColladaExporter: texture '${n}' is not drawable — not exported.`, e), null;
			}
			return u(r);
		}
		let m = [
			"getX",
			"getY",
			"getZ",
			"getW"
		], h = new t();
		function g(e, t = !1) {
			if (t) {
				let t = new Float32Array(e.count * 3);
				for (let n = 0, r = e.count; n < r; n++) h.fromBufferAttribute(e, n).convertLinearToSRGB(), t[3 * n + 0] = h.r, t[3 * n + 1] = h.g, t[3 * n + 2] = h.b;
				return t;
			} else if (e.isInterleavedBufferAttribute) {
				let t = new e.array.constructor(e.count * e.itemSize), n = e.itemSize;
				for (let r = 0, i = e.count; r < i; r++) for (let i = 0; i < n; i++) t[r * n + i] = e[m[i]](r);
				return t;
			} else return e.array;
		}
		function _(e, t, n) {
			return Array.isArray(e) ? e.slice(t, t + n) : new e.constructor(e.buffer, t * e.BYTES_PER_ELEMENT, n);
		}
		function v(e, t, n, r, i = !1) {
			let a = g(e, i);
			return `<source id="${t}"><float_array id="${t}-array" count="${a.length}">` + a.join(" ") + `</float_array><technique_common><accessor source="#${t}-array" count="${Math.floor(a.length / e.itemSize)}" stride="${e.itemSize}">` + n.map((e) => `<param name="${e}" type="${r}" />`).join("") + "</accessor></technique_common></source>";
		}
		let y;
		function b(e) {
			return e.matrixAutoUpdate && e.updateMatrix(), y ||= new i(), y.copy(e.matrix), y.transpose(), `<matrix>${y.toArray().join(" ")}</matrix>`;
		}
		function x(e) {
			let t = ne.get(e);
			if (!t) {
				let n = e;
				if (n.isBufferGeometry !== !0) throw Error("THREE.ColladaExporter: Geometry is not of type THREE.BufferGeometry.");
				let r = `Mesh${T.length + 1}`, i = n.index ? n.index.count * n.index.itemSize : n.attributes.position.count, a = n.groups != null && n.groups.length !== 0 ? n.groups : [{
					start: 0,
					count: i,
					materialIndex: 0
				}], o = `<geometry id="${r}"${e.name ? ` name="${l(e.name)}"` : ""}><mesh>`, s = `${r}-position`, c = `${r}-vertices`;
				o += v(n.attributes.position, s, [
					"X",
					"Y",
					"Z"
				], "float"), o += `<vertices id="${c}"><input semantic="POSITION" source="#${s}" /></vertices>`;
				let u = `<input semantic="VERTEX" source="#${c}" offset="0" />`;
				if ("normal" in n.attributes) {
					let e = `${r}-normal`;
					o += v(n.attributes.normal, e, [
						"X",
						"Y",
						"Z"
					], "float"), u += `<input semantic="NORMAL" source="#${e}" offset="0" />`;
				}
				if ("uv" in n.attributes) {
					let e = `${r}-texcoord`;
					o += v(n.attributes.uv, e, ["S", "T"], "float"), u += `<input semantic="TEXCOORD" source="#${e}" offset="0" set="0" />`;
				}
				if ("uv2" in n.attributes) {
					let e = `${r}-texcoord2`;
					o += v(n.attributes.uv2, e, ["S", "T"], "float"), u += `<input semantic="TEXCOORD" source="#${e}" offset="0" set="1" />`;
				}
				if ("color" in n.attributes) {
					let e = `${r}-color`;
					o += v(n.attributes.color, e, [
						"R",
						"G",
						"B"
					], "float", !0), u += `<input semantic="COLOR" source="#${e}" offset="0" />`;
				}
				let d = null;
				if (n.index) d = g(n.index);
				else {
					d = Array(i);
					for (let e = 0, t = d.length; e < t; e++) d[e] = e;
				}
				for (let e = 0, t = a.length; e < t; e++) {
					let t = a[e], n = _(d, t.start, t.count), r = n.length / 3;
					o += `<triangles material="MESH_MATERIAL_${t.materialIndex}" count="${r}">`, o += u, o += `<p>${n.join(" ")}</p>`, o += "</triangles>";
				}
				o += "</mesh></geometry>", T.push(o), t = {
					meshid: r,
					bufferGeometry: n
				}, ne.set(e, t);
			}
			return t;
		}
		function S(e) {
			if (C.has(e)) return C.get(e);
			let t = `image-${w.length + 1}`, n = e.name || t, r = n;
			for (let e = 2; ie.has(r); e++) r = `${n}-${e}`;
			let i = p(e.image, "png", r);
			if (i === null) return C.set(e, null), null;
			ie.add(r);
			let a = `<image id="${t}" name="${l(r)}">`;
			return s === "1.5.0" ? a += `<init_from><ref>${l(o.textureDirectory + r + ".png")}</ref></init_from>` : a += `<init_from>${l(o.textureDirectory + r + ".png")}</init_from>`, a += "</image>", w.push(a), C.set(e, t), ae.push({
				directory: o.textureDirectory,
				name: r,
				ext: "png",
				data: i,
				original: e
			}), t;
		}
		function ee(e) {
			let r = re.get(e);
			if (r == null) {
				r = `Mat${E.length + 1}`;
				let i = e.map ? S(e.map) : null, a = e.specularMap ? S(e.specularMap) : null, o = e.emissiveMap ? S(e.emissiveMap) : null, s = e.normalMap ? S(e.normalMap) : null, c = "phong";
				e.isMeshLambertMaterial === !0 ? c = "lambert" : e.isMeshBasicMaterial === !0 && (c = "constant", e.map !== null && console.warn("ColladaExporter: Texture maps not supported with MeshBasicMaterial."));
				let u = e.emissive ? e.emissive.clone() : new t(0, 0, 0), d = e.color ? e.color.clone() : new t(0, 0, 0), f, p;
				if (e.specular !== void 0 || e.shininess !== void 0) f = e.specular ? e.specular.clone() : new t(1, 1, 1), p = e.shininess || 0;
				else if (e.roughness !== void 0) {
					let n = Math.min(1, Math.max(0, e.roughness)), r = (.04 + .96 * (e.metalness ?? 0)) * (1 - n);
					f = new t(r, r, r), p = Math.round((1 - n) ** 4 * 1e3);
				} else f = new t(1, 1, 1), p = 0;
				let m = e.reflectivity || 0;
				u.convertLinearToSRGB(), f.convertLinearToSRGB(), d.convertLinearToSRGB();
				let h = "";
				e.transparent === !0 && (h += "<transparent>" + (i ? "<texture texture=\"diffuse-sampler\"></texture>" : "<float>1</float>") + "</transparent>", e.opacity < 1 && (h += `<transparency><float>${e.opacity}</float></transparency>`));
				let g = `<technique sid="common"><${c}><emission>` + (o ? "<texture texture=\"emissive-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="emission">${u.r} ${u.g} ${u.b} 1</color>`) + "</emission>" + (c === "constant" ? "" : "<diffuse>" + (i ? "<texture texture=\"diffuse-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="diffuse">${d.r} ${d.g} ${d.b} 1</color>`) + "</diffuse>") + (c === "constant" ? "" : "<bump>" + (s ? "<texture texture=\"bump-sampler\" texcoord=\"TEXCOORD\" />" : "") + "</bump>") + (c === "phong" ? `<specular><color sid="specular">${f.r} ${f.g} ${f.b} 1</color></specular><shininess>` + (a ? "<texture texture=\"specular-sampler\" texcoord=\"TEXCOORD\" />" : `<float sid="shininess">${p}</float>`) + "</shininess>" : "") + `<reflective><color>${d.r} ${d.g} ${d.b} 1</color></reflective><reflectivity><float>${m}</float></reflectivity>` + h + `</${c}></technique>`, _ = `<effect id="${r}-effect"><profile_COMMON>` + (i ? `<newparam sid="diffuse-surface"><surface type="2D"><init_from>${i}</init_from></surface></newparam><newparam sid="diffuse-sampler"><sampler2D><source>diffuse-surface</source></sampler2D></newparam>` : "") + (a ? `<newparam sid="specular-surface"><surface type="2D"><init_from>${a}</init_from></surface></newparam><newparam sid="specular-sampler"><sampler2D><source>specular-surface</source></sampler2D></newparam>` : "") + (o ? `<newparam sid="emissive-surface"><surface type="2D"><init_from>${o}</init_from></surface></newparam><newparam sid="emissive-sampler"><sampler2D><source>emissive-surface</source></sampler2D></newparam>` : "") + (s ? `<newparam sid="bump-surface"><surface type="2D"><init_from>${s}</init_from></surface></newparam><newparam sid="bump-sampler"><sampler2D><source>bump-surface</source></sampler2D></newparam>` : "") + g + (e.side === n ? "<extra><technique profile=\"THREEJS\"><double_sided sid=\"double_sided\" type=\"int\">1</double_sided></technique></extra>" : "") + "</profile_COMMON></effect>", v = e.name ? ` name="${l(e.name)}"` : "", y = `<material id="${r}"${v}><instance_effect url="#${r}-effect" /></material>`;
				D.push(y), E.push(_), re.set(e, r);
			}
			return r;
		}
		function te(e) {
			let t = `<node name="${l(e.name)}">`;
			if (t += b(e), e.isMesh === !0 && e.geometry !== null) {
				let n = x(e.geometry), r = n.meshid, i = n.bufferGeometry, o = null, s, c = e.material || new a(), l = Array.isArray(c) ? c : [c];
				s = i.groups.length > l.length ? Array(i.groups.length) : Array(l.length), o = s.fill().map((e, t) => ee(l[t % l.length])), t += `<instance_geometry url="#${r}">` + (o.length > 0 ? "<bind_material><technique_common>" + o.map((e, t) => `<instance_material symbol="MESH_MATERIAL_${t}" target="#${e}" ><bind_vertex_input semantic="TEXCOORD" input_semantic="TEXCOORD" input_set="0" /></instance_material>`).join("") + "</technique_common></bind_material>" : "") + "</instance_geometry>";
			}
			return e.children.forEach((e) => t += te(e)), t += "</node>", t;
		}
		let ne = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new Set(), ae = [], w = [], T = [], E = [], D = [], oe = te(e), O = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><COLLADA xmlns="${s === "1.4.1" ? "http://www.collada.org/2005/11/COLLADASchema" : "https://www.khronos.org/collada/"}" version="${s}"><asset>` + ("<contributor><authoring_tool>three.js Collada Exporter</authoring_tool>" + (o.author === null ? "" : `<author>${l(o.author)}</author>`) + `</contributor><created>${(/* @__PURE__ */ new Date()).toISOString()}</created><modified>${(/* @__PURE__ */ new Date()).toISOString()}</modified>` + (o.unitName === null ? "" : `<unit name="${l(o.unitName)}" meter="${o.unitMeter}" />`) + `<up_axis>${o.upAxis}</up_axis>`) + "</asset>";
		O += `<library_images>${w.join("")}</library_images>`, O += `<library_effects>${E.join("")}</library_effects>`, O += `<library_materials>${D.join("")}</library_materials>`, O += `<library_geometries>${T.join("")}</library_geometries>`, O += `<library_visual_scenes><visual_scene id="Scene" name="scene">${oe}</visual_scene></library_visual_scenes>`, O += "<scene><instance_visual_scene url=\"#Scene\"/></scene>", O += "</COLLADA>";
		let se = {
			data: c(O),
			textures: ae
		};
		return typeof r == "function" && requestAnimationFrame(() => r(se)), se;
	}
}, Z = function() {
	let e = document.createElement("a");
	this.saveFile = function(t, n) {
		let r = t.split(".").pop().toLowerCase();
		switch (n ||= X().scene, r) {
			case "obj":
				i(n, t);
				break;
			case "dae":
				a(n, t);
				break;
			case "glb":
				o(n, t);
				break;
			case "gltf":
				s(n, t);
				break;
			case "stl":
				c(n, t);
				break;
			case "ply":
				l(n, t);
				break;
			default:
				console.warn("[threefy] the file type \"" + r + "\" is not supported.");
				break;
		}
		function i(e, t = "model.obj") {
			let n = t, r = n.replace(".obj", ""), i = r + ".mtl", { MTLExporter: a } = Z.exporters, { mtl: o, textures: s, names: c } = new a().parse(e), l = [];
			e.traverse((e) => {
				(Array.isArray(e.material) ? e.material : e.material ? [e.material] : []).forEach((e) => {
					let t = e && c.get(e.uuid);
					t === void 0 || t === e.name || (l.push([e, e.name]), e.name = t);
				});
			});
			let { OBJExporter: u } = Z.exporters, f;
			try {
				f = new u().parse(e, r);
			} finally {
				l.forEach(([e, t]) => {
					e.name = t;
				});
			}
			let p = {
				[n]: pt(f),
				[i]: pt(o)
			}, m = Object.keys(s);
			m.forEach((e) => {
				p[e] = s[e];
			});
			let h = r + ".zip";
			d(ht(p), h), console.log(`[threefy] saved '${h}' — ${n} + ${i}` + (m.length ? ` + ${m.length} texture file(s)` : "") + ". An .obj needs its .mtl and images alongside it, so they are bundled.");
		}
		function a(e, t = "scene.dae") {
			let { ColladaExporter: n } = Z.exporters;
			new n().parse(e, function(e) {
				let n = e.textures ?? [];
				if (n.length === 0) {
					u(e.data, t);
					return;
				}
				let r = { [t]: pt(e.data) };
				n.forEach((e) => {
					r[`${e.directory}${e.name}.${e.ext}`] = e.data;
				});
				let i = t.replace(/\.dae$/i, "") + ".zip";
				d(ht(r), i), console.log(`[threefy] saved '${i}' — ${t} + ${n.length} texture file(s). A .dae cannot carry its images, so they are bundled.`);
			});
		}
		function o(e, t = "scene.glb") {
			let { GLTFExporter: n } = Z.exporters;
			new n().parse(e, function(e) {
				d(e, t);
			}, function(e) {
				console.error("[threefy] an error happened during parsing", e);
			}, { binary: !0 });
		}
		function s(e, t = "scene.gltf") {
			let { GLTFExporter: n } = Z.exporters;
			new n().parse(e, function(e) {
				u(JSON.stringify(e, null, 2), t);
			}, function(e) {
				console.error("[threefy] an error happened during parsing", e);
			}, { binary: !1 });
		}
		function c(e, t = "model.stl", n = !1) {
			let { STLExporter: r } = Z.exporters, i = new r();
			n === !0 ? u(i.parse(e), t) : d(i.parse(e, { binary: !0 }), t);
		}
		function l(e, t = "model.ply") {
			let { PLYExporter: n } = Z.exporters;
			u(new n().parse(e), t);
		}
		function u(e, t) {
			f(new Blob([e], { type: "text/plain" }), t);
		}
		function d(e, t) {
			f(new Blob([e], { type: "application/octet-stream" }), t);
		}
		function f(t, n) {
			let r = URL.createObjectURL(t);
			e.href = r, e.download = n, e.dispatchEvent(new MouseEvent("click")), setTimeout(() => URL.revokeObjectURL(r), 0);
		}
	};
};
Z.exporters = {}, Z.setExporter = (e) => {
	Z.exporters = {
		...Z.exporters,
		...e
	};
};
var gi = (e) => {
	switch (e.split(".").pop().toLowerCase()) {
		case "obj":
			Z.setExporter({
				OBJExporter: lt,
				MTLExporter: mi
			});
			break;
		case "dae":
			Z.setExporter({ ColladaExporter: hi });
			break;
		case "glb":
			Z.setExporter({ GLTFExporter: ct });
			break;
		case "gltf":
			Z.setExporter({ GLTFExporter: ct });
			break;
		case "stl":
			Z.setExporter({ STLExporter: dt });
			break;
		case "ply":
			Z.setExporter({ PLYExporter: ut });
			break;
	}
}, _i = (e, t) => {
	let n = new Z();
	gi(e), n.saveFile(e, t);
}, vi = 0, yi = () => {
	try {
		return X().threefy.dom;
	} catch {
		return null;
	}
}, bi = (e) => {
	if (e === document.body) return;
	let t = window.getComputedStyle(e).position;
	(!t || t === "static") && (e.style.position = "relative");
}, xi = "threefy-dragover-style", Si = () => {
	if (document.getElementById(xi)) return;
	let e = document.createElement("style");
	e.id = xi, e.textContent = "\n        .threefy-dragover::after {\n            content: '';\n            position: absolute;\n            inset: 0;\n            pointer-events: none;\n            z-index: 9;\n            border: 3px dashed #3276c3;\n            border-radius: 6px;\n            background-color: rgba( 50, 118, 195, 0.12 );\n        }\n    ", document.head.appendChild(e);
}, Ci = `https://unpkg.com/three@0.${e.REVISION}.0/examples/jsm/libs/basis/`, wi = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/", Q = function(t) {
	let n = this;
	this.threefy = t ?? null;
	let r = () => n.threefy ?? X().threefy;
	this.imageFiles = [], this.mtlFile = null, this.loadItemList = (e) => {
		Ei.getFilesFromItemList(e, (e, t) => {
			n.loadFiles(e, t);
		});
	}, this.loadFiles = async function(e, t) {
		if (e.length > 0) {
			t ||= Ei.createFilesMap(e);
			let n = l();
			n.setURLModifier((e) => {
				e = e.replace(/^(\.?\/)/, "");
				let n = t[e];
				return n ? URL.createObjectURL(n) : e;
			}), this.imageFiles = [], this.mtlFile = null;
			for (let t = 0; t < e.length; t++) e[t].name.match(/\.(png|jpg|gif)$/i) ? this.imageFiles.push(e[t]) : e[t].name.match(/\.(mtl)$/i) && (this.mtlFile = e[t]);
			for (let t = 0; t < e.length; t++) this.loadFile(e[t], n);
			this.mtlFile = null;
		}
	}, this.loadFile = function(e, t) {
		let r = e.name, o = r.split(".").pop().toLowerCase();
		zi(r);
		let s = (e) => {
			console.warn(`threefy: cannot load '${r}' —`, e), n.onError?.(e, r);
		}, c = (e) => (...t) => {
			try {
				Promise.resolve(e(...t)).catch(s);
			} catch (e) {
				s(e);
			}
		}, l = new FileReader();
		switch (l.addEventListener("error", () => s(l.error)), o) {
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
				l.addEventListener("load", c((e) => i(o, e, r, t, !1)), !1), l.readAsArrayBuffer(e);
				break;
			case "dae":
			case "svg":
			case "wrl":
				l.addEventListener("load", c((e) => i(o, e, r, t, !1)), !1), l.readAsText(e);
				break;
			case "obj":
				function n(e, n = null) {
					l.addEventListener("load", c(async function(e) {
						let i = e.target.result, { OBJLoader: a } = Q.loaders, o = new a(t);
						n && o.setMaterials(n);
						let s = o.parse(i);
						Ti.convertPhongToStandard(s), s.name = r, f(s);
					}), !1), l.readAsText(e);
				}
				function u(e, r) {
					if (r) {
						let i = new FileReader();
						i.addEventListener("error", () => s(i.error)), i.addEventListener("load", c(async function(r) {
							let i = r.target.result, { MTLLoader: a } = Q.loaders, o = new a(t).parse(i);
							o.preload(), n(e, o);
						}), !1), i.readAsText(r);
					} else n(e);
				}
				u(e, this.mtlFile);
				break;
			case "zip":
				setTimeout(() => {
					l.addEventListener("load", c((e) => a(e.target.result, r)), !1), l.readAsArrayBuffer(e);
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
				].includes(o) || console.warn("[threefy] unsupported 3D file format:", o);
				break;
		}
	};
	async function i(t, r, i, o, s = !1) {
		if (s) {
			let e = r;
			if (t === "dae" || t === "gltf" || t === "wrl") {
				let { strFromU8: t } = Q.loaders;
				r = t(e);
			} else r = e.buffer;
		} else r = r.target.result;
		switch (t) {
			case "3ds": {
				let { TDSLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.name = i, f(t);
				break;
			}
			case "3mf": {
				let { ThreeMFLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.name = i, f(t);
				break;
			}
			case "amf": {
				let { AMFLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.name = i, f(t);
				break;
			}
			case "dae": {
				let { ColladaLoader: e } = Q.loaders, t = new e(o).parse(r);
				if (!t || !t.scene) {
					console.error(`[threefy] '${i}' could not be parsed as COLLADA.`);
					break;
				}
				t.scene.name = i, t.scene.traverse((e) => {
					!e.isMesh || !e.geometry?.attributes?.color || (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) => {
						e && e.vertexColors !== !0 && (e.vertexColors = !0, e.needsUpdate = !0);
					});
				}), f(t.scene);
				break;
			}
			case "drc": {
				let { DRACOLoader: t } = Q.loaders, n = new t(o);
				n.setDecoderPath(wi), n.parse(r, function(t) {
					t.center(), u(t);
					let r;
					if (t.index !== null) {
						let n = new e.MeshStandardMaterial();
						r = new e.Mesh(t, n), r.name = i;
					} else {
						let n = new e.PointsMaterial({ size: .01 });
						t.hasAttribute("color") === !0 && (n.vertexColors = !0), r = new e.Points(t, n), r.name = i;
					}
					n.dispose(), f(r);
				});
				break;
			}
			case "fbx": {
				let { FBXLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.name = i, d(t, t.animations), f(t);
				break;
			}
			case "md2": {
				let { MD2Loader: t } = Q.loaders, a = new t(o).parse(r), c = null;
				if (s) for (let t in n.zip) {
					let r = t.split(".").pop().toLowerCase();
					if (r === "jpg" && (r = "jpeg"), [
						"png",
						"jpeg",
						"gif"
					].includes(r)) {
						let i = n.zip[t], a = "image/" + r, o = new Blob([i.buffer], { type: a }), s = URL.createObjectURL(o);
						c = new e.TextureLoader().load(s);
						break;
					}
				}
				else n.imageFiles.length === 1 && (c = new e.TextureLoader().load(URL.createObjectURL(n.imageFiles[0])));
				let l = new e.MeshStandardMaterial({ map: c }), u = new e.Mesh(a, l);
				u.mixer = new e.AnimationMixer(u), u.name = i, d(u, a.animations), f(u);
				break;
			}
			case "glb":
				(await c(o)).parse(r, "", function(e) {
					let t = e.scene;
					t.name = i, d(t, e.animations), f(t);
				});
				break;
			case "gltf":
				(await c(o)).parse(r, "", function(e) {
					let t = e.scene;
					t.name = i, d(t, e.animations), f(t);
				});
				break;
			case "kmz": {
				let { KMZLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.scene.name = i, f(t.scene);
				break;
			}
			case "mtl":
				s && (n.bufferMTL = r);
				break;
			case "obj":
				s && (n.bufferOBJ = r);
				break;
			case "ply": {
				let { PLYLoader: t } = Q.loaders, n = new t(o).parse(r);
				u(n);
				let a = new e.MeshStandardMaterial(), s = new e.Mesh(n, a);
				s.name = i, f(s);
				break;
			}
			case "stl": {
				let { STLLoader: t } = Q.loaders, n = new t(o).parse(r);
				u(n);
				let a = new e.MeshStandardMaterial({ vertexColors: !!n.hasColors }), s = new e.Mesh(n, a);
				s.name = i, f(s);
				break;
			}
			case "svg": {
				let { SVGLoader: t } = Q.loaders, n = new t(o).parse(r).paths, a = new e.Group();
				a.scale.multiplyScalar(.1), a.scale.y *= -1;
				for (let r = 0; r < n.length; r++) {
					let i = n[r], o = new e.MeshBasicMaterial({
						color: i.color,
						depthWrite: !1
					}), s = t.createShapes(i);
					for (let t = 0; t < s.length; t++) {
						let n = s[t], r = new e.ShapeGeometry(n), i = new e.Mesh(r, o);
						a.add(i);
					}
				}
				a.name = i, f(a);
				break;
			}
			case "vtk": {
				let { VTKLoader: t } = Q.loaders, n = new t(o).parse(r);
				u(n);
				let a = new e.MeshStandardMaterial(), s = new e.Mesh(n, a);
				s.name = i, f(s);
				break;
			}
			case "vox": {
				let { VOXLoader: t, buildVoxMesh: n } = Q.loaders, a = new t(o).parse(r);
				if (!a) {
					console.error(`[threefy] '${i}' is not a valid VOX file.`);
					break;
				}
				let s = a.scene;
				s || (s = new e.Group(), a.chunks.forEach((e) => s.add(n(e)))), s.name = i, f(s);
				break;
			}
			case "wrl": {
				let { VRMLLoader: e } = Q.loaders, t = new e(o).parse(r);
				t.name = i, f(t);
				break;
			}
			case "zip":
				a(r, i);
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
				].includes(t) || console.warn("[threefy] unsupported 3D file format:", t);
				break;
		}
	}
	async function a(e, t) {
		let { unzipSync: r, strFromU8: a } = Q.loaders, o = r(new Uint8Array(e));
		n.zip = o, Object.keys(o).forEach((e) => zi(e));
		let s = l();
		s.setURLModifier((e) => {
			let t = o[e];
			if (t) {
				let e = new Blob([t.buffer], { type: "application/octet-stream" });
				return URL.createObjectURL(e);
			}
			return e;
		}), n.bufferOBJ = null, n.bufferMTL = null;
		for (let e in o) {
			let n = o[e];
			i(e.split(".").pop().toLowerCase(), n, t, s, !0);
		}
		if (n.bufferMTL && n.bufferOBJ) {
			let { OBJLoader: e, MTLLoader: r } = Q.loaders, i = new r(s).parse(a(n.bufferMTL)), o = new e(s).setMaterials(i).parse(a(n.bufferOBJ));
			Ti.convertPhongToStandard(o), o.name = t, f(o);
		}
		n.bufferOBJ = null, n.bufferMTL = null, n.zip = null;
	}
	async function o(e) {
		let { DRACOLoader: t } = Q.loaders;
		if (!t) return null;
		if (!e.__dracoLoader) {
			let n = new t();
			n.setDecoderPath(wi), e.__dracoLoader = n;
		}
		return e.__dracoLoader;
	}
	async function s(e) {
		let { KTX2Loader: t } = Q.loaders;
		return t ? (e.__ktx2LoaderPromise ||= (async () => {
			let n = new t();
			return n.setTranscoderPath(Ci), await e.ready, n.detectSupport(e.renderer), e.__ktx2Loader = n;
		})(), e.__ktx2LoaderPromise) : null;
	}
	async function c(e) {
		let { GLTFLoader: t, MeshoptDecoder: n } = Q.loaders, i = r(), a = new t(e), c = await o(i);
		c && a.setDRACOLoader(c);
		let l = await s(i);
		return l && a.setKTX2Loader(l), n && a.setMeshoptDecoder(n), a;
	}
	function l() {
		let t = () => n.threefy?.dom ?? null, r = new e.LoadingManager();
		return r.onStart = () => {
			Fi(t());
		}, r.onProgress = (e, n, r) => {
			Li(n, r, t());
		}, r.onLoad = () => {
			Ii(t());
		}, r.onError = (e) => {
			Ri("There was an error loading " + e);
		}, r;
	}
	function u(e) {
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
	function d(e, t) {
		t && t.length > 0 && e.animations.push(...t);
	}
	function f(e) {
		let t = r(), i = t._cache.get(e.name);
		i ? i[0] = e : t._cache.set(e.name, i = [e]), n.__userInitiated && (n.onObject ? n.onObject(e) : t.scene.add(e));
		for (let t = 1, n = i.length; t < n; t++) i[t].dispatchEvent({ type: e.name });
	}
	this.openFiles = function(e, t, r) {
		e = e || yi() || document.body, n.onObject = t, n.onError = r, n.__userInitiated = !0, bi(e);
		let i = document.createElement("div");
		i.style.cssText = "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 10;", [
			"click",
			"dblclick",
			"mousedown",
			"mouseup",
			"mousemove",
			"pointerdown",
			"pointerup",
			"pointermove",
			"wheel",
			"contextmenu"
		].forEach((e) => i.addEventListener(e, (e) => e.stopPropagation()));
		let a = `threefy-file-input-${++vi}`, o = document.createElement("input");
		o.id = a, o.type = "file", o.multiple = !0, o.style.display = "none", o.addEventListener("change", () => {
			i.remove(), o.files?.length && n.loadFiles(o.files);
		}), o.addEventListener("cancel", () => i.remove());
		let s = document.createElement("label");
		return s.htmlFor = a, s.style.cssText = "color: white; background-color: #3276c3; font-weight: bold; cursor: pointer; padding: 0.625rem; border-radius: 0.4rem;", s.addEventListener("mouseover", () => {
			s.style.backgroundColor = "#333";
		}), s.addEventListener("mouseleave", () => {
			s.style.backgroundColor = "#3276c3";
		}), s.innerHTML = "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 17\" style=\"width:1em; height:1em; fill:currentColor; vertical-align: middle; margin-top: -0.25em; margin-right: 0.25em;\">\n                <path d=\"M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z\"></path>\n            </svg>\n            <span>Choose files</span>\n        ", i.appendChild(o), i.appendChild(s), e.append(i), () => i.remove();
	}, this.dragDropFiles = function(e, t, r) {
		if (e ||= yi(), n.onObject = t, n.onError = r, n.__userInitiated = !0, !e) return console.warn("ThreeLoader: dragDropFiles() — 붙일 컨테이너가 없다 (캔버스가 아직 없다면 컨테이너를 직접 넘겨라)."), () => {};
		bi(e), Si(), e.__threefyDropCleanup?.();
		let i = (t) => {
			e.classList.toggle("threefy-dragover", t), e.classList.toggle("dragover", t);
		}, a = (e) => {
			e.preventDefault(), e.stopPropagation(), i(!0);
		}, o = (e) => {
			e.preventDefault(), e.stopPropagation(), i(!1);
		}, s = (e) => {
			e.preventDefault(), i(!1), e.dataTransfer.types[0] !== "text/plain" && (e.dataTransfer.items ? n.loadItemList(e.dataTransfer.items) : n.loadFiles(e.dataTransfer.files));
		};
		e.addEventListener("dragover", a), e.addEventListener("dragleave", o), e.addEventListener("drop", s, !1);
		let c = () => {
			e.removeEventListener("dragover", a), e.removeEventListener("dragleave", o), e.removeEventListener("drop", s, !1), i(!1), e.__threefyDropCleanup === c && (e.__threefyDropCleanup = null);
		};
		return e.__threefyDropCleanup = c, c;
	};
};
Q.loaders = {}, Q.setLoader = (e) => {
	Q.loaders = {
		...Q.loaders,
		...e
	};
};
var Ti = { convertPhongToStandard: function(t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = (t) => {
		if (!t || !t.isMeshPhongMaterial) return t;
		let i = r.get(t.uuid);
		if (i) return i;
		t.specularMap && !n.has(t.uuid) && (n.add(t.uuid), console.warn(`[threefy] '${t.name || "material"}': specularMap is dropped — MeshStandardMaterial has no specularMap. The surface will look flatter than the original, and the map is not carried into exports.`));
		let a = new e.MeshStandardMaterial();
		return a.name = t.name, a.color.copy(t.color), a.emissive.copy(t.emissive), a.map = t.map, a.emissiveMap = t.emissiveMap, a.normalMap = t.normalMap, a.normalScale.copy(t.normalScale), a.bumpMap = t.bumpMap, a.bumpScale = t.bumpScale, a.aoMap = t.aoMap, a.aoMapIntensity = t.aoMapIntensity, a.alphaMap = t.alphaMap, a.transparent = t.transparent, a.opacity = t.opacity, a.side = t.side, a.vertexColors = t.vertexColors, a.roughness = 1, a.metalness = 0, r.set(t.uuid, a), t.dispose(), a;
	};
	t.traverse((e) => {
		!e.isMesh && !e.isPoints && !e.isLine || (e.material = Array.isArray(e.material) ? e.material.map(i) : i(e.material));
	});
} }, Ei = {
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
}, Di = (e) => e.split("/").pop().split("?")[0], Oi = (e) => Di(e).split(".").pop().toLowerCase(), ki = function(e, t, n, r) {
	let i;
	if (t) {
		function e(e) {
			return e.split("").splice(5, 44, "sangk").reverse().join("");
		}
		i = e(t);
	}
	let a = e.map(async (e) => {
		let n = await fetch(e);
		if (!n.ok) throw Error(`threefy: cannot load '${e}' (HTTP ${n.status} ${n.statusText})`);
		let r = await n.blob(), a;
		return e.split(".").pop() === "enc" ? (r = t ? await decryptFile(i, r) : null, a = e.replace(".enc", "")) : a = e, a = Di(a), r ? new File([r], a) : null;
	});
	Promise.all(a).then((e) => {
		e = e.filter((e) => e), new Q(r).loadFiles(e);
	}).catch((e) => {
		n ? n(e) : console.error(e);
	});
}, Ai = function(e, t, n) {
	return new Q(Y()).openFiles(e, t, n);
}, ji = function(e, t, n) {
	return new Q(Y()).dragDropFiles(e, t, n);
}, Mi = "threefy-spinner", Ni = "threefy-spin-keyframes", Pi = (e) => e ?? yi() ?? document.body, Fi = function(e) {
	let t = Pi(e), n = t.querySelector(`.${Mi}`);
	if (n) {
		n.style.display = "";
		return;
	}
	if (bi(t), n = document.createElement("div"), n.className = Mi, n.style.cssText = "position: absolute; inset: 0; pointer-events: none; z-index: 11;", n.innerHTML = "\n        <div style=\"position: absolute; left: 45%; top: 45%; width: 10%; vertical-align: middle; text-align: center;\">\n            <p class=\"threefy-spinner-text\" style=\"color: white; font-size: 1.125rem; font-weight: 500;\">Loading...</p>\n            <div style=\"margin-top: 0.5rem\">\n                <svg aria-hidden=\"true\" style=\"display: inline; width: 2.5rem; height: 2.5rem; margin-right: 0.5rem; color: rgb(229 231 235); animation: threefy-spin 1s linear infinite; fill: #2563eb;\" viewBox=\"0 0 100 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\" fill=\"currentColor\"/>\n                    <path d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\" fill=\"currentFill\"/>\n                </svg>\n            </div>\n        </div>\n    ", t.appendChild(n), !document.getElementById(Ni)) {
		let e = document.createElement("style");
		e.id = Ni, e.innerHTML = "\n            @keyframes threefy-spin {\n                from { transform: rotate(0deg); }\n                to { transform: rotate(360deg); }\n            }\n        ", document.head.appendChild(e);
	}
}, Ii = function(e) {
	let t = Pi(e).querySelector(`.${Mi}`);
	t && (t.style.display = "none");
}, Li = function(e, t, n) {
	let r = Pi(n).querySelector(".threefy-spinner-text");
	r && (r.textContent = t > 0 ? `Loading... ${Math.floor(e / t * 100)}%` : "Loading...");
}, Ri = function(e) {
	console.warn(e);
}, zi = (e) => {
	switch (Oi(e)) {
		case "3ds":
			Q.setLoader({ TDSLoader: At });
			break;
		case "3mf":
			Q.setLoader({ ThreeMFLoader: St });
			break;
		case "amf":
			Q.setLoader({ AMFLoader: xt });
			break;
		case "dae":
			Q.setLoader({ ColladaLoader: Ct });
			break;
		case "drc":
			Q.setLoader({ DRACOLoader: Nt });
			break;
		case "fbx":
			Q.setLoader({ FBXLoader: yt });
			break;
		case "md2":
			Q.setLoader({ MD2Loader: vt });
			break;
		case "gltf":
		case "glb":
			Q.setLoader({
				GLTFLoader: jt,
				KTX2Loader: Mt,
				DRACOLoader: Nt,
				MeshoptDecoder: It
			});
			break;
		case "kmz":
			Q.setLoader({ KMZLoader: kt });
			break;
		case "mtl":
		case "obj":
			Q.setLoader({
				OBJLoader: Et,
				MTLLoader: Dt
			});
			break;
		case "ply":
			Q.setLoader({ PLYLoader: wt });
			break;
		case "stl":
			Q.setLoader({ STLLoader: Tt });
			break;
		case "svg":
			Q.setLoader({ SVGLoader: Ot });
			break;
		case "vtk":
			Q.setLoader({ VTKLoader: _t });
			break;
		case "vox":
			Q.setLoader({
				VOXLoader: Pt,
				buildVoxMesh: Ft
			});
			break;
		case "wrl":
			Q.setLoader({ VRMLLoader: bt });
			break;
		case "zip":
			Q.setLoader({
				unzipSync: mt,
				strFromU8: ft
			});
			break;
	}
}, Bi = (e, t = "texture") => {
	e = Array.isArray(e) ? e : [e];
	let { threefy: n } = X(), r = t === "audio" ? (e) => {
		let t = n._cache.get(e);
		return t ? Promise.resolve(t) : new Promise((t, r) => {
			n.audioLoader.load(e, (r) => {
				n._cache.set(e, r), t(r);
			}, void 0, () => r(/* @__PURE__ */ Error(`threefy: cannot load '${e}'`)));
		});
	} : (e) => new Promise((t, r) => {
		n.loadTexture(e, t, (t) => r(t instanceof Error ? t : /* @__PURE__ */ Error(`threefy: cannot load '${e}'`))) === void 0 && t(void 0);
	});
	return Promise.all(e.map((e) => r(e))).then((e) => e.length === 1 ? e[0] : e);
}, Vi = (e) => Bi(e, "texture"), Hi = (e) => Bi(e, "audio"), Ui = (e) => {
	e = Array.isArray(e) ? e : [e];
	let { threefy: t } = X(), n = e.map((e) => t.loadTexture(e));
	return n.length === 1 ? n[0] : n;
}, Wi = (e, t) => !!e && e.length === t.length && e.every((e, n) => e === t[n]), Gi = (e) => {
	let t = gt.clone(e);
	return t.animations = e.animations ?? [], t.userData.__threefyLoaded = !0, t;
}, Ki = (t, n, r, i) => {
	let a = [], o = [], s = ({ target: e }) => {
		let n = Gi(t._cache.get(e.name)[0]);
		e.removeEventListener(e.name, s);
		let i = a.indexOf(e);
		i >= 0 && (a[i] = n);
		let o = e.parent;
		o && (o.remove(e), o.add(n)), n._listeners = e._listeners, n.applyMatrix4(e.matrix), n.userData.__threefyOnLoadFired = !0, n.dispatchEvent({ type: "onLoad" }), r();
	};
	return n.forEach((n) => {
		zi(n);
		let r = Di(n), i = t._cache.get(r);
		if (i && i[0]) {
			a.push(Gi(i[0]));
			return;
		}
		let c = new e.Object3D();
		c.name = r, i ? i.push(c) : (t._cache.set(r, [null, c]), o.push(n)), c.addEventListener(r, s), a.push(c);
	}), o.length > 0 && ki(o, void 0, i, t), a;
}, qi = (e, t) => t.every((t) => {
	let n = e._cache.get(Di(t));
	return !!(n && n[0]);
}), Ji = (e, t) => {
	if (qi(e, t)) return null;
	let n = t.join("|"), r = e._loadingErrors.get(n);
	if (r) throw r;
	let i = e._loadingPromises.get(n);
	if (i) return i;
	let a = new Promise((r, i) => {
		Ki(e, t, () => {
			qi(e, t) && (e._loadingPromises.delete(n), r());
		}, (t) => {
			e._loadingPromises.delete(n), e._loadingErrors.set(n, t), i(t);
		});
	});
	return a.catch(() => {}), e._loadingPromises.set(n, a), a;
}, Yi = (e) => {
	let { threefy: t } = X(), n = (e) => {
		let n = t._cache.get(e);
		Array.isArray(n) && n[0] === null && t._cache.delete(e);
	};
	if (e === void 0) {
		t._loadingErrors.clear(), t._loadingPromises.clear();
		for (let e of [...t._cache.keys()]) n(e);
		return;
	}
	let r = Array.isArray(e) ? e : [e];
	for (let e of [t._loadingErrors, t._loadingPromises]) for (let t of [...e.keys()]) t.split("|").some((e) => r.includes(e)) && e.delete(t);
	for (let e of r) n(Di(e));
}, Xi = (e) => {
	let t = Array.isArray(e) ? [...e] : [e], { threefy: n } = X(), r = Oi(t[0]);
	if (/png|jpg|jpeg|gif|bmp/i.test(r)) return Ui(t);
	if (/mp3|ogg|wav/i.test(r)) return Hi(t);
	if (!Vr()) {
		let e = Ki(n, t, () => {});
		return e.length === 1 ? e[0] : e;
	}
	let i = _(null), a = Ji(n, t);
	if (a) throw a;
	(i.current === null || !Wi(i.current.urls, t)) && (i.current = {
		urls: t,
		results: t.map((e) => Gi(n._cache.get(Di(e))[0]))
	});
	let o = i.current.results;
	return o.length === 1 ? o[0] : o;
}, Zi = 32, Qi = (e, t) => e === t ? !0 : !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || e.length > Zi ? !1 : e.every((e, n) => e === t[n]), $i = (e, t) => !!e && !!t && e.length === t.length && e.every((e, n) => Qi(e, t[n])), ea = (e, t) => {
	let n = _(null);
	return (n.current === null || !$i(n.current.keys, t)) && (n.current = {
		keys: t,
		value: e()
	}), n.current.value;
}, ta = (e, t) => {
	let n = _(null);
	m(() => (n.current = e, () => {
		n.current === e && (n.current = null), queueMicrotask(() => {
			n.current !== e && t(e);
		});
	}), [e]);
}, $ = class {
	constructor(e, t, n, r) {
		this.x = e, this.y = t, this.width = n, this.height = r, this.finalX = e + n, this.finalY = t + r;
	}
	overlaps(e) {
		return this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.y + this.height > e.y;
	}
}, na = class {
	constructor(t, n = 512, r = 512, i = !0, a = 4096) {
		if (this.MAX_TEXTURE_SIZE = a, !t) return;
		this.texturesObj = t, this.textureNames = Object.keys(t), this.texWidth = n, this.texHeight = r;
		let o = {};
		this.textureNames.forEach((e) => {
			let n = t[e].uuid;
			o[n] || (o[n] = []), o[n].push(e);
		}), this.uuid2Names = o, this.canvas = document.createElement("canvas"), this.textureCount = this.textureNames.length, this.maxWidth = n, this.maxHeight = r, this.textureCache = {}, this.node = {}, this.node.rectangle = new $(0, 0, this.maxWidth * this.textureCount, this.maxHeight * this.textureCount), this.textureOffsets = {}, this.allNodes = [], this.insert(this.node, this.findNextTexture()), this.ranges = {};
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
							let r = l.rectangle, o = n[e].x, s = n[e].y, d = c[e].image, f = new $(r.x, r.y, i, a), p = new $(o, s, d.width, d.height);
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
					e.rectangle = new $(n + i, r, s - (n + i), c - r), t.rectangle = new $(n, r + a, s - n, c - (r + a)), this.allNodes.push(e), this.allNodes.push(t);
				}
				return [e, this.findNextTexture()];
			} else throw Error("Error: Try to use smaller textures.");
		} else {
			let r = e.rectangle.width, o = e.rectangle.height;
			e.textureName = t;
			let s = {}, c = {};
			s.upperNode = e, c.upperNode = e, e.children = [s, c], s.rectangle = new $(i, 0, r - i, a), c.rectangle = new $(0, a, r, o - a), n[t] = {
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
}, ra = (e, t, n) => {
	let { diffuse: r, opacity: i } = n, { color: a, emissive: o, metalness: s, roughness: c } = n, { ior: l } = n, { clearcoat: u, clearcoatRoughness: d, dispersion: f } = n, { iridescence: p, iridescenceIOR: m, iridescenceThicknessMinimum: h, iridescenceThicknessMaximum: g } = n, { sheenColor: _, sheenRoughness: v, anisotropyVector: y } = n;
	r ? e.setValue(t, "diffuse", ...r) : e.setValue(t, "diffuse", 1, 1, 1), i !== void 0 && e.setValue(t, "opacity", i), a && e.setValue(t, "diffuse", ...a), o && e.setValue(t, "emissive", ...o), s !== void 0 && e.setValue(t, "metalness", s), c !== void 0 && e.setValue(t, "roughness", c), l !== void 0 && e.setValue(t, "ior", l), u !== void 0 && e.setValue(t, "clearcoat", u), d !== void 0 && e.setValue(t, "clearcoatRoughness", d), f !== void 0 && e.setValue(t, "dispersion", f), p !== void 0 && e.setValue(t, "iridescence", p), m !== void 0 && e.setValue(t, "iridescenceIOR", m), h !== void 0 && e.setValue(t, "iridescenceThicknessMinimum", h), g !== void 0 && e.setValue(t, "iridescenceThicknessMaximum", g), _ && e.setValue(t, "sheenColor", ..._), v !== void 0 && e.setValue(t, "sheenRoughness", v), y && e.setValue(t, "anisotropyVector", ...y);
}, ia = (t, n = 512, r = 512, i = 6553600, a = 6553600 * 2, o = null) => {
	if (!t || t.length === 0) return;
	let s = !0, c = (t, n, r, i = "white") => {
		let a = t[`${n}-${r}-${i}`];
		if (a) return a;
		let o = document.createElement("canvas"), s = o.getContext("2d");
		o.width = n, o.height = r, s.fillStyle = i, s.fillRect(0, 0, n, r);
		let c = new e.CanvasTexture(o);
		return t[`${n}-${r}-${i}`] = c, c;
	}, l = (t, n, r, i, a = "white") => {
		let o = t[n.uuid];
		if (o) return o;
		if (!n.image) return console.warn("resizeTexture(): image data not found in your texture — using a blank texture"), c(f, r, i, a);
		s = n.flipY;
		let l = document.createElement("canvas"), u = l.getContext("2d");
		l.width = r, l.height = i;
		try {
			u.drawImage(n.image, 0, 0, r, i);
		} catch {
			return console.warn("resizeTexture(): texture image is not drawable — using a blank texture"), c(f, r, i, a);
		}
		let { mapping: d, wrapS: p, wrapT: m, magFilter: h, minFilter: g, format: _, type: v, anisotropy: y, colorSpace: b } = n, x = new e.CanvasTexture(l, d, p, m, h, g, _, v, y);
		return x.colorSpace = b, x.uuid = n.uuid, t[x.uuid] = x, x;
	}, u = {}, d = {}, f = {}, p = {}, m, h = (o ?? X().threefy).renderer, g = h.backend, _ = h.capabilities && h.capabilities.maxTextureSize || g && g.device && g.device.limits.maxTextureDimension2D || g && g.gl && g.gl.getParameter(g.gl.MAX_TEXTURE_SIZE) || 4096, v = [
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
	], y = t.map((e) => {
		let t = e.material;
		return Array.isArray(t) ? t[0] : t;
	});
	if (v.forEach((e) => {
		y.map((t) => !!t[e]).every((e) => e === !1) || (u[e] = {});
	}), v = Object.keys(u), v.length > 0) {
		let t = {
			normalMap: "#8080ff",
			clearcoatNormalMap: "#8080ff"
		};
		v.forEach((e) => {
			let i = t[e] || "white";
			y.forEach((t, a) => {
				let o = `${a}`, s = t[e];
				s ? u[e][o] = l(d, s, n, r, i) : u[e][o] = c(f, n, r, i);
			});
		});
		let i = u.map ? "map" : v.find((e) => !!u[e]), a = new na(u[i], n, r, s, _);
		m = a.ranges, p[i] = a.mergedTexture, v.forEach((t) => {
			t !== i && (p[t] = a.toSameLayout(u[t], s)), t === "map" || t === "emissiveMap" || t === "specularColorMap" ? p[t].colorSpace = e.SRGBColorSpace : t === "envMap" || t === "lightMap" ? p[t].colorSpace = e.LinearSRGBColorSpace : p[t].colorSpace = e.NoColorSpace;
		});
	}
	let b = t.length, x = new cn(b, p);
	u.alphaMap && (x.alphaTest = .5);
	let S = new e.BatchedMesh(b, i, a, x);
	S.isMergedMesh = !0;
	let ee = new e.Matrix4();
	for (let e = 0; e < b; e++) {
		let n = t[e], r = S.addInstance(S.addGeometry(n.geometry)), i = r;
		if (m && m[i]) {
			let t;
			t = s ? [
				m[i].startU,
				m[i].startV,
				m[i].endU,
				m[i].endV
			] : [
				m[i].startU,
				m[i].endV,
				m[i].endU,
				m[i].startV
			], x.setValue(e, "uvRange", ...t);
		}
		n.updateWorldMatrix(!0, !1);
		let a = n.matrixWorld;
		n.isSkinnedMesh && (a = ee.multiplyMatrices(n.bindMatrixInverse, a)), S.setMatrixAt(r, a), ra(x, r, y[e]);
	}
	return S;
}, aa = (e, t = 512, n = 512, r = 6553600, i = 6553600 * 2, a = null) => new Promise((o) => {
	let s = [];
	if (e.forEach((e) => {
		let t = Array.isArray(e.material) ? e.material[0] : e.material;
		t && Object.keys(t).forEach((e) => {
			let n = t[e];
			/(map|Map)$/.test(e) && n && n.isTexture && s.push(n);
		});
	}), s.length > 0) {
		let c = Date.now(), l = () => {
			s.every((e) => e.image && e.image.width) || Date.now() - c > 1e4 ? o(ia(e, t, n, r, i, a)) : setTimeout(l, 100);
		};
		l();
	} else o(ia(e, t, n, r, i, a));
}), oa = (t) => {
	let n = [], r = [];
	if (t.forEach((t) => {
		if (/geometry/i.test(t.type)) {
			let { args: i, type: a, ...o } = t.props, s = a === void 0 ? `${t.type[0].toUpperCase()}${t.type.slice(1)}` : `${a[0].toUpperCase()}${a.slice(1)}Geometry`, c = i === void 0 ? [] : i, l = new e[s](...c);
			K(l, o), n.push(l), r.push(l);
		} else {
			let { object: e, ...r } = t.props;
			K(e, r), n.push(e);
		}
	}), n.length === 0) return null;
	let i = n.length === 1 ? n[0] : Lt.mergeGeometries(n, !1);
	return n.length > 1 && r.push(i), i.userData.__threefyOwnedGeometries = r, i;
}, sa = (e) => {
	e?.userData?.__threefyOwnedGeometries?.forEach((e) => e.dispose());
}, ca = (e) => {
	let t = _(null), { ref: n = t, children: r, ...i } = e, a = o.Children.toArray(r), s = a.filter((e) => /geometry/i.test(e?.type) || /primitive/.test(e?.type) && e?.props?.object?.isBufferGeometry), c = [];
	s.forEach((e) => {
		c.push(e.type);
		let t = e.props ?? {};
		Object.keys(t).sort().forEach((e) => {
			e !== "children" && c.push(e, t[e]);
		});
	});
	let l = ea(() => oa(s), c);
	ta(l, sa);
	let u;
	return a.forEach((e) => {
		if (!/geometry/i.test(e?.type)) {
			if (/primitive/.test(e?.type)) {
				e.props?.object?.isMaterial && (u = e.props.object);
				return;
			}
			/material/i.test(e?.type) && (u = e);
		}
	}), l ? /* @__PURE__ */ hn("mesh", {
		ref: n,
		...i,
		children: [/* @__PURE__ */ F("primitive", {
			object: l,
			attach: "geometry"
		}), u]
	}) : null;
}, la = (e) => {
	let t = _(null), { ref: n = t, children: r, texW: i = 512, texH: a = 512, maxVertexCount: s = 6553600, maxIndexCount: c = 6553600 * 2, ...l } = e, u = _(null), d = X().threefy, f = _(null), p = _(!1), h = _(!0);
	return m(() => (h.current = !0, () => {
		h.current = !1;
		let e = f.current;
		f.current = null, e && (e.removeFromParent(), d?.dispose(e));
	}), []), m(() => {
		if (p.current) return;
		let e = u.current;
		!e || o.Children.count(r) === 0 || (p.current = !0, Dr(n, e), e.visible = !1, aa(e.children, i, a, s, c, d).then((t) => {
			if (h.current) {
				if (!t || !e.parent) {
					e.visible = !0, p.current = !1;
					return;
				}
				e.parent.add(t), f.current = t, Dr(n, t);
			}
		}));
	}, [r]), o.Children.count(r) > 0 ? /* @__PURE__ */ F("batchedMesh", {
		ref: u,
		...l,
		children: r
	}) : null;
}, ua = class extends e.Sprite {
	constructor(e = "", t = {}) {
		let { textHeight: n = .5, textWidthScale: r = 1, textColor: i = "#ffffff", textAlign: a = "center", textBaseline: o = "middle", fontStyle: s = "normal", fontVariant: c = "normal", fontWeight: l = "normal", fontSize: u = "64px", fontFamily: d = "Karla, sans-serif" } = t, f = {
			string: e,
			height: n,
			widthScale: r,
			color: In(i),
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
		return e.Sprite.prototype.copy.call(this, t), this.text = JSON.parse(JSON.stringify(t.text)), this.font = JSON.parse(JSON.stringify(t.font)), this.ctx.drawImage(t.ctx.canvas, 0, 0), this.material?.map && (this.material.map.needsUpdate = !0), this;
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
		this.material ? (this.material.map?.dispose(), this.material.map = o, this.material.map.needsUpdate = !0) : this.material = new e.SpriteMaterial({
			color: 16777215,
			map: o
		});
		let s = n.height * n.string.length * n.widthScale;
		return this.scale.set(s, n.height, 1), a;
	}
}, da = (e, t) => {
	let n = e?.material?.map;
	n && (t ? t.disposeTexture(n) : n.dispose()), e?.material?.dispose();
}, fa = (e) => {
	let t = _(null), { ref: n = t, string: r = "", height: i = .5, widthScale: a = 1, color: o = 16777215, align: s = "center", baseline: c = "middle", style: l = "normal", variant: u = "normal", weight: d = "normal", size: f = "64px", family: p = "Karla, sans-serif", ...m } = e, h = ea(() => new ua(r, {
		textHeight: i,
		textWidthScale: a,
		textColor: o,
		textAlign: s,
		textBaseline: c,
		fontStyle: l,
		fontVariant: u,
		fontWeight: d,
		fontSize: f,
		fontFamily: p
	}), [
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p
	]), g = Y();
	return ta(h, (e) => da(e, g)), /* @__PURE__ */ F("primitive", {
		ref: n,
		object: h,
		...m
	});
}, pa = (e, t, n) => {
	let r = new Float32Array(t * n);
	if (n === 3 && e.length && e[0] && (e[0].isVector3 || e[0].isColor)) for (let n = 0; n < t; n++) {
		let t = e[n];
		t && (t.isColor ? (r[n * 3] = t.r, r[n * 3 + 1] = t.g, r[n * 3 + 2] = t.b) : (r[n * 3] = t.x, r[n * 3 + 1] = t.y, r[n * 3 + 2] = t.z));
	}
	else r.set(e.subarray ? e.subarray(0, r.length) : e.slice(0, r.length));
	return r;
}, ma = (e) => e[0] && e[0].isVector3 ? e.length : Math.floor(e.length / 3), ha = new e.Matrix4(), ga = new e.Ray(), _a = new e.Box3(), va = new e.Sphere(), ya = new e.Vector3(), ba = new e.Vector3(), xa = new e.Vector3(), Sa = new e.Vector3(), Ca = class extends e.Sprite {
	constructor(t = [], n = {}) {
		let { colors: r, sizes: i, rotations: a, ...o } = n, s = new e.PointsNodeMaterial();
		super(s), this.isPointsSprite = !0, this.type = "PointsSprite", this.frustumCulled = !1, K(s, o);
		let c = ma(t);
		this.count = c;
		let l = new e.InstancedBufferAttribute(pa(t, c, 3), 3);
		if (s.positionNode = T(l), this.userData.instancePosition = l, r) {
			let t = new e.InstancedBufferAttribute(pa(r, c, 3), 3), n = T(t);
			s.colorNode = s.map ? xe(s.map, Ce()).mul(n) : n, this.userData.instanceColor = t;
		}
		if (i) {
			let t = new e.InstancedBufferAttribute(pa(i, c, 1), 1);
			s.sizeNode = T(t), this.userData.instanceSize = t;
		}
		if (a) {
			let t = new e.InstancedBufferAttribute(pa(a, c, 1), 1);
			s.rotationNode = T(t), this.userData.instanceRotation = t;
		}
		this.pickThreshold = null, this._pointsBounds = null, this._pointsBoundsKey = -1;
	}
	_updatePointsBounds(t, n) {
		let r = t.version + (n ? n.version * 1e6 : 0);
		if (this._pointsBounds && this._pointsBoundsKey === r) return this._pointsBounds;
		let i = this.count;
		_a.makeEmpty();
		for (let e = 0; e < i; e++) _a.expandByPoint(ba.fromBufferAttribute(t, e));
		let a = 1;
		if (n) {
			a = 0;
			for (let e = 0; e < i; e++) a = Math.max(a, n.getX(e));
		}
		return this._pointsBounds = {
			sphere: _a.getBoundingSphere(new e.Sphere()),
			maxSize: a
		}, this._pointsBoundsKey = r, this._pointsBounds;
	}
	raycast(t, n) {
		let r = this.userData.instancePosition, i = this.count;
		if (!r || !i) return;
		let a = this.userData.instanceSize, o = this._updatePointsBounds(r, a), s = t.camera, c = s && s.isPerspectiveCamera ? Math.tan(e.MathUtils.DEG2RAD * .5 * s.fov) / s.zoom : 1, l = this.material.size === void 0 ? 1 : this.material.size, u = this.pickThreshold !== null && this.pickThreshold !== void 0 ? this.pickThreshold : t.params.Points && t.params.Points.threshold || 0, d = this.matrixWorld;
		ya.setFromMatrixScale(d);
		let f = (Math.abs(ya.x) + Math.abs(ya.y) + Math.abs(ya.z)) / 3 || 1, p = (e) => (.5 * e * c + u) / f;
		if (ha.copy(d).invert(), ga.copy(t.ray).applyMatrix4(ha), va.copy(o.sphere), va.radius += p(a ? o.maxSize : l), ga.intersectsSphere(va) === !1) return;
		let m = ga.origin, h = ga.direction, g = !!(s && s.isPerspectiveCamera), _ = Infinity, v = -1, y = 0, b = 0;
		for (let e = 0; e < i; e++) {
			ba.fromBufferAttribute(r, e), xa.subVectors(ba, m);
			let t = xa.dot(h);
			if (t <= 0) continue;
			let n = p(a ? a.getX(e) : l), i = Math.max(xa.lengthSq() - t * t, 0);
			if (i > n * n) continue;
			let o = g ? i / (t * t) : i;
			o >= _ || (_ = o, v = e, y = t, b = i);
		}
		if (v < 0) return;
		Sa.copy(m).addScaledVector(h, y).applyMatrix4(d);
		let x = t.ray.origin.distanceTo(Sa);
		x < t.near || x > t.far || n.push({
			distance: x,
			distanceToRay: Math.sqrt(b) * f,
			point: Sa.clone(),
			index: v,
			instanceId: v,
			face: null,
			object: this
		});
	}
}, wa = (e) => {
	let t = _(null), { ref: n = t, positions: r = [], colors: i, sizes: a, rotations: o, type: s, ...c } = e, l = [
		r,
		i,
		a,
		o
	];
	Object.keys(c).sort().forEach((e) => {
		l.push(e, c[e]);
	});
	let u = ea(() => new Ca(r, {
		colors: i,
		sizes: a,
		rotations: o,
		...c
	}), l), d = Y();
	return ta(u, (e) => da(e, d)), /* @__PURE__ */ F("primitive", {
		ref: n,
		object: u,
		...c
	});
}, Ta = /*@__PURE__*/ new e.Matrix4(), Ea = /*@__PURE__*/ new e.Matrix4(), Da = /*@__PURE__*/ new e.Matrix4(), Oa = /*@__PURE__*/ new e.Matrix4(), ka = [], Aa = /*@__PURE__*/ new e.Box3(), ja = /*@__PURE__*/ new e.Sphere(), Ma = /*@__PURE__*/ b(([e], t) => {
	let n = e.skeleton.boneTexture, r = ee("skinIndex", "uvec4"), i = ee("skinWeight", "vec4"), a = he("bindMatrix", "mat4"), o = he("bindMatrixInverse", "mat4"), s = (e) => {
		let t = E(e).mul(4);
		return oe(k(n, D(t, w)), k(n, D(t.add(1), w)), k(n, D(t.add(2), w)), k(n, D(t.add(3), w)));
	}, c = s(r.x), l = s(r.y), u = s(r.z), d = s(r.w), f = a.mul(pe), p = S(c.mul(i.x).mul(f), l.mul(i.y).mul(f), u.mul(i.z).mul(f), d.mul(i.w).mul(f));
	if (pe.assign(o.mul(p).xyz), t.hasGeometryAttribute("normal")) {
		let e = S(i.x.mul(c), i.y.mul(l), i.z.mul(u), i.w.mul(d));
		e = o.mul(e).mul(a), ce.assign(e.transformDirection(ce).xyz), t.hasGeometryAttribute("tangent") && be.assign(e.transformDirection(be).xyz);
	}
}, "void");
function Na(e) {
	let t = e.skeleton;
	if (!t.boneTexture) {
		if (e.instanceBones === null) {
			e.instanceBones = new Float32Array(t.bones.length * 16 * e.count);
			for (let n = 0; n < e.count; n++) t.update(e.instanceBones, n);
		}
		t.computeInstancedBoneTexture();
	}
}
function Pa(e) {
	!e || e.__instancedSkinning === !0 || (e.__instancedSkinning = !0, e.setupPosition = function(e) {
		let t = e.object;
		return t.isInstancedSkinnedMesh === !0 && t.skeleton && (Na(t), Ma(t)), Object.getPrototypeOf(this).setupPosition.call(this, e);
	});
}
var Fa = class extends e.SkinnedMesh {
	constructor(t, n, r = 1) {
		super(t, n), this.isInstancedMesh = !0, this.isInstancedSkinnedMesh = !0, this.isSkinnedMesh = !1, this.instanceMatrix = new e.InstancedBufferAttribute(new Float32Array(r * 16), 16), this.instanceColor = null, this.instanceBones = null, this.morphTexture = null, this.count = r, this.boundingBox = null, this.boundingSphere = null, this._mesh = null;
		let i = this.bind.bind(this);
		this.bind = function(t, n) {
			i(t, n), this.skeleton.update = (e, t) => {
				let n = this.skeleton.bones, r = this.skeleton.boneInverses, i = e || this.skeleton.boneMatrices, a = this.skeleton.boneTexture, o = t || 0;
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e] ? n[e].matrixWorld : Oa;
					Da.multiplyMatrices(t, r[e]), Da.toArray(i, 16 * (e + o * n.length));
				}
				a !== null && (a.needsUpdate = !0);
			}, this.skeleton.computeBoneTexture = this.skeleton.computeInstancedBoneTexture = () => {
				this.skeleton.boneTexture = new e.DataTexture(this.instanceBones, this.skeleton.bones.length * 4, this.count, e.RGBAFormat, e.FloatType), this.skeleton.boneTexture.needsUpdate = !0;
			};
		}, Array.isArray(this.material) ? this.material.forEach(Pa) : Pa(this.material);
	}
	computeBoundingBox() {
		let t = this.geometry, n = this.count;
		this.boundingBox === null && (this.boundingBox = new e.Box3()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Ta), Aa.copy(t.boundingBox).applyMatrix4(Ta), this.boundingBox.union(Aa);
	}
	computeBoundingSphere() {
		let t = this.geometry, n = this.count;
		this.boundingSphere === null && (this.boundingSphere = new e.Sphere()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Ta), ja.copy(t.boundingSphere).applyMatrix4(Ta), this.boundingSphere.union(ja);
	}
	copy(e, t) {
		return super.copy(e, t), this.isSkinnedMesh = !1, e.isInstancedMesh && (e.instanceMatrix && (this.instanceMatrix = e.instanceMatrix.clone()), e.instanceColor && (this.instanceColor = e.instanceColor.clone()), e.morphTexture && (this.morphTexture = e.morphTexture.clone()), this.count = e.count), Array.isArray(this.material) ? this.material.forEach(Pa) : Pa(this.material), this;
	}
	getColorAt(e, t) {
		if (this.instanceColor === null) return t.setRGB(1, 1, 1);
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
		if (a.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ja.copy(this.boundingSphere), ja.applyMatrix4(r), t.ray.intersectsSphere(ja) !== !1)) for (let e = 0; e < i; e++) {
			this.getMatrixAt(e, Ta), Ea.multiplyMatrices(r, Ta), a.matrixWorld = Ea, a.raycast(t, ka);
			for (let t = 0, r = ka.length; t < r; t++) {
				let r = ka[t];
				r.instanceId = e, r.object = this, n.push(r);
			}
			ka.length = 0;
		}
	}
	setColorAt(t, n) {
		this.instanceColor === null && (this.instanceColor = new e.InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), n.toArray(this.instanceColor.array, t * 3);
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
export { An as AnaglyphEffect, Ht as Animator, Pn as AsciiEffect, sn as BatchedMaterial, Cn as BokehPass, hi as ColladaExporter, En as DotScreenPass, On as FXAAPass, xn as GTAOPass, Tn as GlitchPass, pn as InstancedObject, Fa as InstancedSkinnedMesh, Kn as MATERIAL_TYPES, mi as MTLExporter, cn as MergedMaterial, la as MergedMesh, ca as Mesh, Nn as OutlineEffect, Sn as OutlinePass, yn as OutputPass, jn as ParallaxBarrierEffect, wa as Points, Ca as PointsSprite, Dn as RGBShiftPass, vn as RenderPass, wn as ShaderPass, Mn as StereoEffect, z as TEXTURE_MAPS, fa as Text, ua as TextSprite, Nr as ThreeCanvas, Jt as Threefy, Ut as ThreefyPipeline, bn as UnrealBloomPass, ji as dragDropFiles, X as getThree, Y as getThreefy, Vr as inRender, Hi as loadAudios, Vi as loadTextures, aa as mergeMeshes, Ai as openFiles, N as reactElements, Yi as retryLoad, K as setObject3D, Dr as setUserRef, In as toColor, Rn as toVector2s, Ln as toVector3, R as toVector3s, zn as toVector4s, Zr as useAnimate, _i as useExporter, Kr as useFrame, Hr as useHandle, qr as useKeyDown, Jr as useKeyUp, Xi as useLoader, Ur as useRefCallback, Rr as useRefEffect, Xr as useSearch, Yr as useSearchObject, Fr as useSetup, Pr as useThree };
