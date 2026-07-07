import * as e from "three";
import { Color as t, DoubleSide as n, LOD as r, Matrix4 as i, Mesh as a, MeshBasicMaterial as o, OrthographicCamera as s, PlaneGeometry as c, Raycaster as l, Scene as u, ShaderMaterial as d, UniformsUtils as f, Vector2 as p, WebGLRenderTarget as m } from "three";
import { createContext as h, useEffect as g, useId as _, useReducer as v, useRef as y } from "react";
import { AMFLoader as b, AnaglyphEffect as x, ArcballControls as S, AsciiEffect as C, BufferGeometryUtils as ee, ColladaLoader as te, ConvexGeometry as w, DRACOLoader as T, DecalGeometry as E, DragControls as D, EffectComposer as O, FBXLoader as k, FirstPersonControls as ne, FlyControls as A, GLTFExporter as j, GLTFLoader as re, GTAOPass as ie, GlitchPass as ae, HDRLoader as oe, KMZLoader as se, KTX2Loader as ce, MD2Loader as le, MTLLoader as ue, MapControls as de, NURBSCurve as fe, NURBSSurface as pe, OBJExporter as me, OBJLoader as he, OrbitControls as ge, OutlineEffect as _e, OutlinePass as ve, OutputPass as ye, PLYExporter as be, PLYLoader as xe, ParallaxBarrierEffect as M, ParametricGeometry as Se, Pass as Ce, PointerLockControls as N, RenderPass as P, RoundedBoxGeometry as F, STLExporter as we, STLLoader as Te, SVGLoader as Ee, ShaderPass as De, StereoEffect as Oe, TDSLoader as ke, TextGeometry as Ae, ThreeMFLoader as je, TrackballControls as Me, TransformControls as Ne, UnrealBloomPass as Pe, VOXLoader as Fe, VRMLLoader as Ie, VTKLoader as Le } from "three/examples/jsm/Addons.js";
import { Fragment as Re, jsx as I, jsxs as ze } from "react/jsx-runtime";
import { BokehDepthShader as Be, BokehShader as Ve } from "three/examples/jsm/shaders/BokehShader2.js";
import { MeshoptDecoder as He } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { strFromU8 as Ue, unzipSync as We } from "three/examples/jsm/libs/fflate.module.js";
//#region \0rolldown/runtime.js
var Ge = Object.defineProperty, Ke = (e, t) => {
	let n = {};
	for (var r in e) Ge(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ge(n, Symbol.toStringTag, { value: "Module" }), n;
}, qe = function(t) {
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
}, Je = class t {
	static loadingManager = new e.LoadingManager();
	static textureLoader = new e.TextureLoader(t.loadingManager);
	static cubeTexLoader = new e.CubeTextureLoader(t.loadingManager);
	static hdrLoader = new oe(t.loadingManager);
	static audioLoader = new e.AudioLoader(t.loadingManager);
	constructor(e = {}) {
		this.width = e.width || window.innerWidth, this.height = e.height || window.innerHeight, this.widthRatio = this.width / window.innerWidth, this.heightRatio = this.height / window.innerHeight, this.dom = e.dom || document.createElement("div"), e.dom || document.body.appendChild(this.dom), this.dom.tabIndex = "0", this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.scene = void 0, this.camera = void 0, this.renderer = void 0, this.renderCallbacks = void 0, this.timer = void 0, this.controls = void 0, this.animator = void 0, this.composer = void 0, this.sceneHelpers = void 0, this.dragControls = void 0, this.transformControls = void 0, this.effect = void 0, this.loadingManager = t.loadingManager;
	}
	init() {
		return this.scene = new e.Scene(), this.sceneHelpers = new e.Scene(), this.sceneHelpers.name = "sceneHelpers", this.camera = new e.PerspectiveCamera(60, this.width / this.height, .1, 5e3), this.camera.position.z = 50, this.renderer = this.createRenderer(void 0), this.renderer.setSize(this.width, this.height), this.dom.appendChild(this.renderer.domElement), this.renderCallbacks = [], this.timer = new e.Timer(), this.controls = new ge(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .075, this.animator = new qe(this.scene), this.raycaster = new e.Raycaster(), this.selectedObject = null, this.selectedObjects = [], this.mouseDowned = !1, this.mouseDownPosition = new e.Vector2(), this.mouseUpPosition = new e.Vector2(), this.mouseMovePosition = new e.Vector2(), this.mouseClickPosition = new e.Vector2(), this.mouseDoubleClickPosition = new e.Vector2(), this.createEffectComposer(), this.createBackground(), window.addEventListener("resize", () => this.onResize(), !1), this.dom.addEventListener("click", (e) => this.onClick(e), !1), this.dom.addEventListener("dblclick", (e) => this.onDoubleClick(e), !1), this.dom.addEventListener("mousemove", (e) => this.onMouseMove(e), !1), this.dom.addEventListener("mousedown", (e) => this.onMouseDown(e), !1), this.dom.addEventListener("wheel", (e) => this.onWheel(e), { passive: !0 }), this.dom.addEventListener("contextmenu", (e) => this.onContextMenu(e), !1), this.dom.addEventListener("pointermove", (e) => this.onPointerMove(e), !1), this.dom.addEventListener("pointerdown", (e) => this.onPointerDown(e), !1), this.dom.addEventListener("pointerup", (e) => this.onPointerUp(e), !1), this.dom.addEventListener("keydown", (e) => this.onKeyDown(e), !1), this.dom.addEventListener("keyup", (e) => this.onKeyUp(e), !1), this.keyDownCallbacks = [], this.keyUpCallbacks = [], this._cache = /* @__PURE__ */ new Map(), this;
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
		this.scene = t, this.scene.background = n, this.animator = new qe(t), this.animator.mixer = new e.AnimationMixer(t), this.composer.passes.forEach((e) => {
			e.scene?.name === "sceneHelpers" ? e.renderScene &&= t : e.scene = t;
		});
	}
	setCamera(e) {
		this.camera = e, this.controls.object = e, this.composer.passes.forEach((t) => {
			t.camera ? t.camera = e : t.renderCamera &&= e;
		}), e.updateProjectionMatrix();
	}
	setEffect(e) {
		this.effect?.dispose?.(), this.effect = e, this.effect.setSize(this.width, this.height);
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
			typeof t[n] == "function" ? Array.isArray(i) ? t[n](...i) : t[n](i) : ((e, t) => e && (e.isColor || e.isEuler || e.isQuaternion || e.isVector2 || e.isVector3 || e.isVector4) ? (typeof t == "number" ? e.setScalar(t) : e.set(...t), !0) : !1)(t[n], i) || (typeof i == "string" && yt.includes(n) ? t[n] = new e.TextureLoader().load(i, (e) => {
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
		let n = new e.WebGLRenderer({
			canvas: t,
			antialias: !0
		});
		return n.setPixelRatio(Math.min(window.devicePixelRatio, 2)), n.shadowMap.enabled = !0, n.shadowMap.needsUpdate = !0, n.shadowMap.type = e.PCFShadowMap, n.outputColorSpace = e.SRGBColorSpace, n.toneMapping = e.LinearToneMapping, n.toneMappingExposure = 1, n;
	}
	update(e, t) {
		this.controls?.update?.(t), this.animator?.update?.(t), this.scene.traverse((n) => {
			n.isLOD || n.update?.(t, e);
		}), this.sceneHelpers.traverse((n) => n.update?.(t, e));
	}
	render(e, t) {
		this.renderCallbacks.forEach((n) => n(e, this, t)), this.effect ? this.effect.render(this.scene, this.camera) : this.composer ? this.composer.render(t) : (this.renderer.render(this.scene, this.camera), this.sceneHelpers.children.length > 0 && (this.renderer.autoClear = !1, this.renderer.render(this.sceneHelpers, this.camera), this.renderer.autoClear = !0));
	}
	animate() {
		this.animateID = window.requestAnimationFrame(this.animate.bind(this)), this.timer.update();
		let e = this.timer.getDelta(), t = this.timer.getElapsed();
		this.update(t, e), this.render(t, e), this.controls.constructor.name === "PointerLockControls" && this.controls.animate(e, this.scene, this.raycaster);
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
	createEffectComposer() {
		if (this.composer = new O(this.renderer), this.composer.setSize(this.width, this.height), this.composer.addPass(new P(this.scene, this.camera)), this.sceneHelpers) {
			this.renderer.autoClear = !1;
			let e = new P(this.sceneHelpers, this.camera);
			e.clear = !1, e.clearDepth = !1, this.composer.addPass(e), this.renderer.autoClear = !0;
		}
		this.composer.addPass(new ye());
	}
	addPass(e) {
		e instanceof ve && (this.outlinePass = e), this.composer.insertPass(e, this.composer.passes.length - 1);
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
		this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.composer && this.composer.setSize(this.width, this.height), this.effect && this.effect.setSize(this.width, this.height), this.controls && this.controls.constructor.name === "TrackballControls" && this.controls.handleResize();
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
		t = e instanceof PointerEvent ? this.selectedObject : this.getIntersectObject(e), t ? t.name === "picker" ? this.select(t.userData.object, "picker", e) : e.ctrlKey ? this.select(t, "multiple", e) : e.altKey ? this.select(t, "ancestor", e) : this.select(t, "itsef", e) : this.select(null, "null", e);
	}
	onClick(e) {
		this.dom.focus(), this.onMouseDown(e), this.onMouseUp(e);
	}
	onDoubleClick(e) {
		e.preventDefault(), this.mouseDoubleClickPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e);
	}
	getMousePosition(e) {
		let t = this.dom.getBoundingClientRect(), n, r;
		return e.changedTouches ? (n = e.changedTouches[0].clientX, r = e.changedTouches[0].clientY) : (n = e.clientX, r = e.clientY), n = (n - t.left) / t.width * 2 - 1, r = -((r - t.top) / t.height) * 2 + 1, [n, r];
	}
	onMouseMove(e) {
		if (this.mouseMovePosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), this.outlinePass) {
			let e = this.selectedObject;
			this.outlinePass.selectedObjects = e ? [e] : [];
		}
	}
	onMouseDown(e) {
		this.mouseDowned = !0, e.preventDefault(), this.mouseDownPosition.fromArray(this.getMousePosition(e)), document.addEventListener("mouseup", (e) => this.onMouseUp(e), !1);
	}
	onMouseUp(e) {
		this.mouseDowned && (this.mouseDowned = !1, e.preventDefault(), this.mouseUpPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), document.removeEventListener("mouseup", (e) => this.onMouseUp(e), !1));
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
				Ye(this);
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
}, Ye = (e) => {
	console.log(e.scene);
}, Xe = /* @__PURE__ */ Ke({
	BatchedMaterial: () => it,
	CustomMaterial: () => pt,
	MergedMaterial: () => L
}), Ze = {
	__vertexMain__: "\nvarying float vInstanceId;\nvec2 getMergedUv( in vec2 uv, in vec4 uvRange ) {\n    vec2 _uv = mod( uv, vec2(1.0) );\n    float offset = 0.5 / float(512); // assume: TEXTURE_SIZE = 512\n    float startU = uvRange.x + offset;\n    float startV = uvRange.y - offset;\n    float endU = uvRange.z - offset;\n    float endV = uvRange.w + offset;\n    _uv.x = _uv.x * (endU - startU) + startU;\n    _uv.y = _uv.y * (startV - endV) + endV;\n    return _uv;\n}\n#define vDisplacementMapUv    getMergedUv( vDisplacementMapUv, uvRange )\nvoid main() {\n    // add 0.5 to the value to avoid floating error that may cause flickering\n    vInstanceId = getIndirectIndex(gl_DrawID) + 0.5;\n",
	__fragmentMain__: "\nuniform highp sampler2D dataTexture;\nvarying float vInstanceId;\nvec2 getMergedUv( in vec2 uv, in vec4 uvRange ) {\n    vec2 _uv = mod( uv, vec2(1.0) );\n    float offset = 0.5 / float(512); // assume: TEXTURE_SIZE = 512\n    float startU = uvRange.x + offset;\n    float startV = uvRange.y - offset;\n    float endU = uvRange.z - offset;\n    float endV = uvRange.w + offset;\n    _uv.x = _uv.x * (endU - startU) + startU;\n    _uv.y = _uv.y * (startV - endV) + endV;\n    return _uv;\n}\n#define vUv                        getMergedUv( vUv, uvRange )\n#define vDisplacementMapUv         getMergedUv( vDisplacementMapUv, uvRange )\n#define vAlphaMapUv                getMergedUv( vAlphaMapUv, uvRange )\n#define vAoMapUv                   getMergedUv( vAoMapUv, uvRange )\n#define vEmissiveMapUv             getMergedUv( vEmissiveMapUv, uvRange )\n#define vLightMapUv                getMergedUv( vLightMapUv, uvRange )\n#define vMapUv                     getMergedUv( vMapUv, uvRange )\n#define vMetalnessMapUv            getMergedUv( vMetalnessMapUv, uvRange )\n#define vNormalMapUv               getMergedUv( vNormalMapUv, uvRange )\n#define vBumpMapUv                 getMergedUv( vBumpMapUv, uvRange )\n#define vRoughnessMapUv            getMergedUv( vRoughnessMapUv, uvRange )\n#define vTransmissionMapUv         getMergedUv( vTransmissionMapUv, uvRange )\n#define vSpecularMapUv             getMergedUv( vSpecularMapUv, uvRange )\n#define vAnisotropyMapUv           getMergedUv( vAnisotropyMapUv, uvRange )\n#define vClearcoatMapUv            getMergedUv( vClearcoatMapUv, uvRange )\n#define vClearcoatNormalMapUv      getMergedUv( vClearcoatNormalMapUv, uvRange )\n#define vClearcoatRoughnessMapUv   getMergedUv( vClearcoatRoughnessMapUv, uvRange )\n#define vIridescenceMapUv          getMergedUv( vIridescenceMapUv, uvRange )\n#define vIridescenceThicknessMapUv getMergedUv( vIridescenceThicknessMapUv, uvRange )\n#define vSheenColorMapUv           getMergedUv( vSheenColorMapUv, uvRange )\n#define vSheenRoughnessMapUv       getMergedUv( vSheenRoughnessMapUv, uvRange )\n#define vSpecularColorMapUv        getMergedUv( vSpecularColorMapUv, uvRange )\n#define vSpecularIntensityMapUv    getMergedUv( vSpecularIntensityMapUv, uvRange )\n#define vThicknessMapUv            getMergedUv( vThicknessMapUv, uvRange )\nvoid main() {\n"
}, Qe = {
	uvRange: "vec4",
	diffuse: "vec3",
	opacity: "float",
	color: "vec3",
	emissive: "vec3",
	specular: "vec3",
	shininess: "float",
	metalness: "float",
	roughness: "float",
	ior: "float",
	specularIntensity: "float",
	specularColor: "vec3",
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
}, $e = (e) => {
	if (!e) return;
	let { threefy: t } = q();
	return Object.keys(e).filter((e) => e.match(/(map|matcap|Map)$/)).forEach((n) => {
		typeof e[n] == "string" && (e[n] = t.loadTexture(e[n]));
	}), e;
}, et = (e) => {
	if (!e) return;
	let { threefy: t } = q();
	return Object.keys(e).forEach((n) => {
		let r = e[n].value;
		typeof r == "string" ? e[n].value = t.loadTexture(r) : Array.isArray(r) && r.length > 0 && r.forEach((r, i) => {
			typeof r == "string" && (e[n].value[i] = t.loadTexture(r));
		});
	}), e;
}, tt = (e) => {
	let t = /(attach|castShadow|receiveShadow|position|rotation|scale)/;
	return Object.keys(e).forEach((n) => {
		t.test(n) && delete e[n];
	}), e;
};
function nt(e) {
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
var rt = class extends e.DataTexture {
	constructor(t, n) {
		let r = Object.entries(t).map(([e, t]) => ({
			name: e,
			...nt(t)
		})), i = r.length, a = Math.sqrt(n * i);
		a = Math.ceil(a / i) * i, a = Math.max(a, i);
		let o = {};
		for (let e = 0, t = r.length; e < t; e++) o[r[e].name] = e;
		let s = [
			1,
			1,
			1,
			1
		], c = [
			1,
			1,
			1,
			1
		], l = [
			1,
			1,
			1,
			1
		], u = [
			...s,
			...c,
			...l
		], d = new Float32Array(a * a * 4);
		for (let e = 0; e < n; e++) d.set(u, e * i * 4);
		super(d, a, a, e.RGBAFormat, e.FloatType), this.fields = r, this.fieldToIndex = o;
	}
	setValue(t, n, ...r) {
		let { fields: i, fieldToIndex: a, image: o } = this, s = i.length;
		if (!(n in a)) return;
		let c = a[n], l = i[c].dim, u = o.data, d = (t * s + c) * 4;
		l === 3 && r.length === 1 && (r = new e.Color(r[0]).toArray());
		for (let e = 0; e < l; e++) u[d + e] = r[e] || 0;
		this.needsUpdate = !0;
	}
	getGlsl(e = "vInstanceId", t = "dataTexture", n = "") {
		let { fields: r, image: i } = this, a = `${n}int size = ${i.width};\n${n}int j = int( ${e} ) * ${r.length};\n${n}int x = j % size;\n${n}int y = j / size;\n`;
		for (let e = 0, i = r.length; e < i; e++) {
			let { name: i, type: o, comp: s } = r[e];
			a += `${n}${o} ${i} = ${o}( texelFetch( ${t}, ivec2( x + ${e}, y ), 0 ).${s} );\n`;
		}
		return a;
	}
}, it = class extends e.MeshPhysicalMaterial {
	constructor(e, t) {
		$e(t), super(t), this.isBatchedMaterial = !0;
		let n = { ...Qe };
		delete n.uvRange, this.props = n;
		let r = new rt(n, e);
		this.dataTexture = r, this.onBeforeCompile = (e, t) => {
			Object.keys(n).length !== 0 && (e.uniforms.dataTexture = { value: r }, e.vertexShader = e.vertexShader.replace("void main() {", "\n                varying float vInstanceId;\n                void main() {\n                    // add 0.5 to the value to avoid floating error that may cause flickering\n                    vInstanceId = getIndirectIndex(gl_DrawID) + 0.5;\n                "), e.fragmentShader = e.fragmentShader.replace("void main() {", `
                uniform highp sampler2D dataTexture;
                varying float vInstanceId;
                void main() {
                    ${r.getGlsl()}
                `));
		};
	}
	setValue(...e) {
		this.props[e[1]] && this.dataTexture.setValue(...e);
	}
	dispose() {
		super.dispose(), this.dataTexture.dispose();
	}
}, L = class extends e.MeshPhysicalMaterial {
	constructor(e, t) {
		$e(t), super(t), this.isMergedMaterial = !0;
		let n = { ...Qe };
		this.props = n;
		let r = new rt(n, e);
		this.dataTexture = r, this.onBeforeCompile = (e, t) => {
			Object.keys(n).length !== 0 && (e.uniforms.dataTexture = { value: r }, e.vertexShader = e.vertexShader.replace("void main() {", Ze.__vertexMain__), e.fragmentShader = e.fragmentShader.replace("void main() {", Ze.__fragmentMain__ + `${r.getGlsl()}`));
		};
	}
	setValue(...e) {
		this.props[e[1]] && this.dataTexture.setValue(...e);
	}
	dispose() {
		super.dispose(), this.dataTexture.dispose();
	}
}, at = 0, ot = Date.now(), st = /* @__PURE__ */ new WeakMap(), ct = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function lt(t) {
	let n = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function r(t, n) {
		let r = e.ShaderChunk[n];
		return r ? lt(r) : t;
	}
	return t.replace(n, r);
}
var R = Object.assign || function() {
	let e = arguments[0];
	for (let t = 1, n = arguments.length; t < n; t++) {
		let n = arguments[t];
		if (n) for (let t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
	}
	return e;
};
function ut(e) {
	return JSON.stringify(e, (e, t) => e === "uniforms" ? void 0 : t);
}
function dt({ vertexShader: e, fragmentShader: t }, n, r) {
	let { vertexDefs: i, vertexTransform: a, vertexMainIntro: o, fragmentDefs: s, fragmentDiffuseTransform: c, fragmentMainIntro: l, fragmentColorTransform: u, timeUniform: d } = n;
	if (d) {
		let e = `\nuniform float ${d};\n`;
		i = (i || "") + e, s = (s || "") + e;
	}
	return (i || a || o) && (a && (e = lt(e), i = `
                ${i || ""}
                void vertexTransform_${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
                    ${a}
                }`, e = e.replace(/\b(position|normal|uv)\b/g, (e, t, n, i) => /\battribute\s+vec3\s+$/.test(i.substr(0, n)) ? t : `_${t}_${r}`), o = `
                vec3 _position_${r} = vec3(position);
                vec3 _normal_${r} = vec3(normal);
                vec2 _uv_${r} = vec2(uv);
                vertexTransform_${r}(_position_${r}, _normal_${r}, _uv_${r});
                ${o || ""}`), e = e.replace(ct, `${i || ""}\n\n$&\n\n${o || ""}`)), (s || c || l || u) && (t = lt(t), c && (s = `
                ${s || ""}
                void fragmentDiffuseTransform_${r}(inout vec3 diffuse) {
                    ${c}
                }`, t = t.replace(/\b(diffuse)\b/g, (e, t, n, i) => /\buniform\s+vec3\s+$/.test(i.substr(0, n)) ? t : `_${t}_${r}`), l = `
                vec3 _diffuse_${r} = diffuse;
                fragmentDiffuseTransform_${r}(_diffuse_${r});
                ${l || ""}`), t = t.replace(ct, `
            ${s || ""}
            void threejsMain_${r}() {
            ${l || ""}`), t += `
            void main() {
                threejsMain_${r}();
                ${u || ""}
            }`), {
		vertexShader: e,
		fragmentShader: t
	};
}
var ft = function(t, n) {
	let r = ut(n), i = st.get(t);
	if (i || (i = Object.create(null), st.set(t, i)), i[r]) return i[r].clone();
	let a = ++at, o = `_derivedShaders${a}`, s = `_onBeforeCompile${a}`, c, l;
	function u(e) {
		t.onBeforeCompile.call(this, e);
		let { vertex: r, fragment: i } = this[o] || (this[o] = {
			vertex: {},
			fragment: {}
		});
		if (r.source !== e.vertexShader || i.source !== e.fragmentShader) {
			let t = dt(e, n, a);
			r.source = e.vertexShader, r.result = t.vertexShader, i.source = e.fragmentShader, i.result = t.fragmentShader;
		}
		e.vertexShader = r.result, e.fragmentShader = i.result, R(e.uniforms, this.uniforms), n.timeUniform && (e.uniforms[n.timeUniform] = { get value() {
			return Date.now() - ot;
		} }), this[s] && this[s](e);
	}
	function d() {
		this._listeners = void 0;
	}
	d.prototype = Object.create(t, {
		constructor: { value: d },
		isDerivedMaterial: { value: !0 },
		baseMaterial: { value: t },
		onBeforeCompile: {
			get() {
				return u;
			},
			set(e) {
				this[s] = e;
			}
		},
		copy: { value: function(n) {
			return t.copy.call(this, n), !t.isShaderMaterial && !t.isDerivedMaterial && (this.extensions = n.extensions, this.defines = R({}, n.defines), this.uniforms = e.UniformsUtils.clone(n.uniforms)), this;
		} },
		getDepthMaterial: { value: function() {
			let r = this._depthMaterial;
			return r ||= (l || (l = ft(t.isDerivedMaterial ? t.getDepthMaterial() : new e.MeshDepthMaterial({ depthPacking: RGBADepthPacking }), n), l.defines.IS_DEPTH_MATERIAL = ""), this._depthMaterial = l.clone()), r;
		} },
		getDistanceMaterial: { value: function() {
			let r = this._distanceMaterial;
			return r ||= (c || (c = ft(t.isDerivedMaterial ? t.getDistanceMaterial() : new e.MeshDistanceMaterial(), n), c.defines.IS_DISTANCE_MATERIAL = ""), this._distanceMaterial = c.clone()), r;
		} },
		dispose: { value() {
			let { _depthMaterial: e, _distanceMaterial: n } = this;
			e && e.dispose(), n && n.dispose(), t.dispose.call(this);
		} }
	});
	let f = new d();
	return f.copy(t), f.uniforms = R(e.UniformsUtils.clone(t.uniforms || {}), n.uniforms), f.defines = R({}, t.defines, n.defines), f.defines.DERIVED_MATERIAL = a, f.extensions = R({}, t.extensions, n.extensions), i[r] = f, f.clone();
}, pt = class {
	constructor(t = "basic", n = {}) {
		let { extensions: r, defines: i, uniforms: a, vdeclare: o, vvertex: s, vmain: c, fdeclare: l, fdiffuse: u, fmain: d, fcolor: f, ...p } = n, m = bt[t];
		m ||= "MeshBasicMaterial";
		let h = $e(tt(p)), g = new e[m](h), _ = et(a), v = {
			extensions: r,
			defines: i,
			uniforms: _,
			vertexDefs: o,
			vertexTransform: s,
			vertexMainIntro: c,
			fragmentDefs: l,
			fragmentDiffuseTransform: u,
			fragmentMainIntro: d,
			fragmentColorTransform: f
		};
		this.isCustomMaterial = !0, this.type = "CustomMaterial", this.subType = m;
		let y = ft(g, v);
		return _ && Object.keys(_).forEach((e) => {
			y.uniforms[e] && (y.uniforms[e].value = _[e].value);
		}), y;
	}
}, mt = class extends Ce {
	constructor(e, t, n) {
		super();
		let r = n.width || window.innerWidth || 1, i = n.height || window.innerHeight || 1, o = n.vignetting || !1, h = n.shaderFocus || !1;
		this.scene = e, this.camera = t, this.raycaster = new l(), this.mouse = new p(), this.width = r, this.height = i, this.distance = 100;
		let g = Be, _ = f.clone(g.uniforms);
		this.materialDepth = new d({
			uniforms: _,
			vertexShader: g.vertexShader,
			fragmentShader: g.fragmentShader
		}), _.mNear.value = t.near, _.mFar.value = t.far, this.scene2 = new u(), this.camera2 = new s(r / -2, r / 2, i / 2, i / -2, -1e4, 1e4), this.camera2.position.z = 100, this.scene2.add(this.camera2), this.rtTextureDepth = new m(r, i), this.rtTextureColor = new m(r, i);
		let v = {
			rings: 3,
			samples: 4
		}, y = Ve, b = f.clone(y.uniforms);
		b.textureWidth.value = r, b.textureHeight.value = i, b.shaderFocus.value = h, b.fstop.value = 2.2, b.maxblur.value = 1, b.showFocus.value = !1, b.focalDepth.value = 2.8, b.manualdof.value = !1, b.vignetting.value = o, b.depthblur.value = !1, b.threshold.value = .5, b.gain.value = 2, b.bias.value = .5, b.fringe.value = .7, b.focalLength.value = 35, b.noise.value = !0, b.pentagon.value = !1, b.dithering.value = 1e-4, b.znear.value = t.near, b.zfar.value = t.far, t.setFocalLength(b.focalLength.value), this.materialBokeh = new d({
			uniforms: b,
			vertexShader: y.vertexShader,
			fragmentShader: y.fragmentShader,
			defines: {
				RINGS: v.rings,
				SAMPLES: v.samples
			}
		}), b.tColor.value = this.rtTextureColor.texture, b.tDepth.value = this.rtTextureDepth.texture;
		let x = new a(new c(r, i), this.materialBokeh);
		x.position.z = -500, this.scene2.add(x);
	}
	render(e, t, n, r, i) {
		let a = this.scene, o = this.camera, s = this.raycaster, c = this.mouse, l = this.materialBokeh.uniforms, u = (e) => {
			var t = o.far, n = o.near;
			return -t * n / (e * (t - n) - t);
		}, d = (e) => Math.max(0, Math.min(1, e)), f = (e, t, n) => {
			var r = d((n - e) / (t - e));
			return r * r * (3 - 2 * r);
		};
		{
			let e = c.x * .5 + .5, t = c.y * .5 + .5;
			l.focusCoords.value.set(e, t);
		}
		{
			s.setFromCamera(c, o);
			let e = s.intersectObjects(a.children, !0), t = e.length > 0 ? e[0].distance : 1e3;
			this.distance += (t - this.distance) * .03;
			let n = u(1 - f(o.near, o.far, this.distance));
			l.focalDepth.value = n;
		}
		e.setRenderTarget(this.rtTextureColor), e.clear(), e.render(a, o), a.overrideMaterial = this.materialDepth, e.setRenderTarget(this.rtTextureDepth), e.clear(), e.render(a, o), a.overrideMaterial = null, this.renderToScreen ? (e.setRenderTarget(null), e.render(this.scene2, this.camera2)) : (e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene2, this.camera2));
	}
};
mt.prototype.isBokehPass = !0, r.prototype.addLevels = function(...e) {
	e.forEach((e) => Array.isArray(e) ? this.addLevel(...e) : this.addLevel(e));
}, N.prototype.blocker = null, N.prototype.heroPlayer = {
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
}, N.prototype.update = function() {}, N.prototype.onKeyDown = function(e) {
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
}, N.prototype.onKeyUp = function(e) {
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
}, N.prototype.animate = function(e, t, n) {
	if (this.isLocked === !0) {
		let r = this.heroPlayer, i = r.velocity, a = r.direction, o = this.getObject();
		n.ray.origin.copy(o.position), n.ray.origin.y -= 10;
		let s = n.intersectObjects(t.children, !1).length > 0;
		i[0] -= i[0] * r.viscosity * e, i[2] -= i[2] * r.viscosity * e, i[1] -= (i[1] * r.viscosity * .1 + 9.8 * r.mass) * e, a[2] = Number(r.forward) - Number(r.backward), a[0] = Number(r.right) - Number(r.left);
		let c = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
		c ||= 1, a[0] /= c, a[1] /= c, a[2] /= c, (r.forward || r.backward) && (i[2] -= a[2] * 400 * e), (r.left || r.right) && (i[0] -= a[0] * 400 * e), s === !0 && (i[1] = Math.max(0, i[1]), r.canJump = !0), this.moveRight(-i[0] * e), this.moveForward(-i[2] * e), o.position.y += i[1] * e, o.position.y < 10 && (i[1] = 0, o.position.y = 10, r.canJump = !0);
	}
}, Ne.prototype.onKeyDown = function(e) {
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
}, Ne.prototype.onKeyUp = function(e) {
	switch (e.key) {
		case "Shift":
			this.setTranslationSnap(null), this.setRotationSnap(null), this.setScaleSnap(null);
			break;
	}
}, x.prototype.isAnaglyphEffect = !0, x.prototype.type = "AnaglyphEffect", C.prototype.isAsciiEffect = !0, C.prototype.type = "AsciiEffect", _e.prototype.isOutlineEffect = !0, _e.prototype.type = "OutlineEffect", M.prototype.isParallaxBarrierEffect = !0, M.prototype.type = "ParallaxBarrierEffect", Oe.prototype.isStereoEffect = !0, Oe.prototype.type = "StereoEffect", F.prototype.isRoundedBoxGeometry = !0, F.prototype.type = "RoundedBoxGeometry", w.prototype.isConvexGeometry = !0, w.prototype.type = "ConvexGeometry", E.prototype.isDecalGeometry = !0, E.prototype.type = "DecalGeometry", Se.prototype.isParametricGeometry = !0, Ae.prototype.isTextGeometry = !0;
var z = {
	RoundedBoxGeometry: F,
	ConvexGeometry: w,
	DecalGeometry: E,
	ParametricGeometry: Se,
	TextGeometry: Ae,
	ArcballControls: S,
	DragControls: D,
	FirstPersonControls: ne,
	FlyControls: A,
	MapControls: de,
	OrbitControls: ge,
	PointerLockControls: N,
	TrackballControls: Me,
	TransformControls: Ne,
	RenderPass: P,
	ShaderPass: De,
	GlitchPass: ae,
	GTAOPass: ie,
	OutlinePass: ve,
	UnrealBloomPass: Pe,
	BokehPass: mt,
	OutputPass: ye,
	AnaglyphEffect: x,
	AsciiEffect: C,
	OutlineEffect: _e,
	ParallaxBarrierEffect: M,
	StereoEffect: Oe,
	NURBSCurve: fe,
	NURBSSurface: pe
}, ht = (t) => {
	if (t.isColor) return t;
	let n = typeof t;
	if (n === "number" || n === "string") return new e.Color(t);
	if (Array.isArray(t)) return new e.Color(...t);
}, gt = (t) => {
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
}, _t = (t) => {
	if (Array.isArray(t[0])) return t.map((t) => new e.Vector4(...t));
	if (typeof t[0] == "number") {
		let n = [];
		for (let r = 0, i = t.length; r < i; r += 4) n.push(new e.Vector4(t[r], t[r + 1], t[r + 2], t[r + 3]));
		return n;
	} else if (typeof t[0] == "object") return t.map((t) => new e.Vector4(t.x, t.y, t.z, t.w));
	else return t;
}, vt = [
	"color",
	"blendColor",
	"emissive",
	"specular",
	"sheenColor",
	"attenuationColor",
	"specularColor"
], yt = /* @__PURE__ */ "alphaMap.anisotropyMap.aoMap.bumpMap.clearcoatMap.clearcoatNormalMap.clearcoatRoughnessMap.displacementMap.emissiveMap.envMap.gradientMap.iridescenceMap.iridescenceThicknessMap.lightMap.map.matcap.metalnessMap.normalMap.roughnessMap.sheenColorMap.sheenRoughnessMap.specularColorMap.specularIntensityMap.specularMap.thicknessMap.transmissionMap".split("."), bt = {
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
	sprite: "SpriteMaterial"
}, H = {
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
	edges: "EdgesGeometry",
	wireframe: "WireframeGeometry",
	rounded: "RoundedBoxGeometry",
	convex: "ConvexGeometry",
	decal: "DecalGeometry",
	parametric: "ParametricGeometry",
	text: "TextGeometry"
}, U = null, xt = h(null), St = (e) => {
	if (!e) return;
	let { threefy: t } = q();
	return Object.keys(e).forEach((n) => {
		let r = e[n].value;
		typeof r == "string" ? e[n].value = t.loadTexture(r) : Array.isArray(r) && r.length > 0 && r.forEach((r, i) => {
			typeof r == "string" && (e[n].value[i] = t.loadTexture(r));
		});
	}), e;
}, W = (e, t, n) => {
	let r = t.split("-"), i = r.length;
	r.reduce((e, t, a) => {
		if (a === i - 1) return Array.isArray(e) ? e : (Array.isArray(n) && typeof n[0] == "number" ? e[t] && typeof e[t] != "function" && e[t].fromArray(n) : e[t] && e[t].copy && n && (n.isVector2 || n.isVector3 || n.isVector4 || n.isColor || n.isMatrix3 || n.isMatrix4) ? e[t].copy(n) : e[t] = n, e[t]);
		if (a === i - 2) {
			let i = r[a + 1];
			return i = Number(i), !isNaN(i) && !Array.isArray(e[t]) && (e[t] = []), isNaN(i) ? e[t] || (e[t] = {}) : e[t][i] = n, e[t];
		} else e[t] || (e[t] = {});
		return e[t];
	}, e);
}, G = (t, n) => {
	n && Object.keys(n).forEach((r) => {
		if (r === "attach" || t.isMaterial && /position|rotation|scale/.test(r) || ![
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
			if (a === "object") i.isObject3D || (t.isBatchedMesh && /geometry/.test(r) ? t.addGeometry(i) : t.isShaderMaterial && r === "uniforms" ? W(t, r, St(i)) : W(t, r, i)), t.isMaterial && i.isTexture && (t.needsUpdate = !0);
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
				if (vt.includes(r)) {
					t[r] = new e.Color(i);
					return;
				}
				let n = r.split("-");
				if (vt.includes(n[0]) && "r g b".includes(n[1])) {
					t[n[0]][n[1]] = i;
					return;
				}
				if ("position rotation scale".includes(n[0]) && "x y z".includes(n[1])) {
					t.isObject3D && (t[n[0]][n[1]] = i);
					return;
				}
				W(t, r, i);
			} else a === "string" ? vt.includes(r) ? t[r] = new e.Color(i) : yt.includes(r) ? (t[r] = U.loadTexture(i), r === "map" || r === "emissiveMap" ? t[r].colorSpace = e.SRGBColorSpace : r === "envMap" || r === "lightMap" ? t[r].colorSpace = e.LinearSRGBColorSpace : t[r].colorSpace = e.NoColorSpace, t.needsUpdate = !0) : W(t, r, i) : a === "boolean" ? t[r] = i : W(t, r, i);
		}
	});
}, K = (e) => {
	if (e) {
		if (typeof e.type == "function") return K(e.type(e.props));
		if (typeof e.type == "symbol") {
			let t = Symbol.keyFor(e.type);
			if (t === "react.fragment") return /* @__PURE__ */ I("group", { children: e.props.children });
			if (t === "react.suspense") {
				let t = e.props;
				return /* @__PURE__ */ ze("group", {
					fallback: t.fallback,
					children: [t.fallback, t.children]
				});
			} else return console.warn(`warning: ${t} not supported`, e), null;
		} else if (typeof e.type == "object") {
			if (typeof e.type.$$typeof == "symbol" && Symbol.keyFor(e.type.$$typeof) === "react.forward_ref") {
				let { ref: t, ...n } = e.props;
				return K(e.type.render(n, t));
			}
			return console.warn("warning: unexpected cases occurred", e), null;
		} else return e;
	}
}, Ct = (t, n, r) => {
	let i = {
		refs: [],
		elms: []
	}, a = {
		refs: [],
		elms: []
	}, { ref: o } = t;
	g(() => {
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
				if (t) if (t.isScene) U.setScene(t);
				else if (t.isCamera) U.setCamera(t);
				else if (t.type?.match(/(Helper)$/) || t.isTransformControls) U.sceneHelpers.add(t);
				else if (t.isFog || t.isFogExp2) U.scene.fog = t;
				else if (t.isPass) U.addPass(t);
				else if (t.type?.match(/(Effect)$/)) U.setEffect(t);
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
	let { children: s } = t, c = Array.isArray(s) ? s : [s];
	c = c.flat(Infinity);
	let l = _(), u = U.reactElements;
	for (let e = 0; e < c.length; e++) {
		if (!c[e]) continue;
		let t = K(c[e]);
		if (!t) continue;
		typeof t.type == "symbol" && (t = K(t));
		let n = `${l}-${t.type}-${e}`, r = t.props.ref ? t.props.ref : y(null), o = u[t.type], { ref: s, ...d } = t.props, f = !1;
		/Geometry/i.test(t.type) && (f = !0), /Material/i.test(t.type) && (f = !0), t.props.attach || f ? (i.refs.push(r), i.elms.push(/* @__PURE__ */ I(o, {
			ref: r,
			...d
		}, n))) : (a.refs.push(r), a.elms.push(/* @__PURE__ */ I(o, {
			ref: r,
			...d
		}, n)));
	}
	return [i.elms, a.elms].flat();
};
function wt(e, t) {
	switch (t.type) {
		case "myAction": return e;
		default: return e;
	}
}
function Tt(e) {
	U || (U = new Je(), U.init(), U.animate(), U.reactElements = {}, (/* @__PURE__ */ "Color.Vector2.Vector3.Vector4.Scene.Object3D.Group.Sprite.Line.LineLoop.LineSegments.Points.Audio.PositionalAudio.LOD.Fog.FogExp2.AmbientLight.DirectionalLight.HemisphereLight.Light.LightProbe.PointLight.RectAreaLight.SpotLight.ArrayCamera.Camera.CubeCamera.OrthographicCamera.PerspectiveCamera.StereoCamera.BufferAttribute.GLBufferAttribute.InstancedBufferAttribute.InstancedInterleavedBuffer.InterleavedBuffer.InterleavedBufferAttribute.BufferGeometry.InstancedBufferGeometry.BoxGeometry.CapsuleGeometry.CircleGeometry.ConeGeometry.CylinderGeometry.DodecahedronGeometry.EdgesGeometry.ExtrudeGeometry.IcosahedronGeometry.LatheGeometry.OctahedronGeometry.PlaneGeometry.PolyhedronGeometry.RingGeometry.ShapeGeometry.SphereGeometry.TetrahedronGeometry.TorusGeometry.TorusKnotGeometry.TubeGeometry.WireframeGeometry.LineBasicMaterial.LineDashedMaterial.MeshBasicMaterial.MeshDepthMaterial.MeshDistanceMaterial.MeshLambertMaterial.MeshMatcapMaterial.MeshNormalMaterial.MeshPhongMaterial.MeshPhysicalMaterial.MeshStandardMaterial.MeshToonMaterial.PointsMaterial.RawShaderMaterial.ShaderMaterial.ShadowMaterial.SpriteMaterial.BatchedMesh.InstancedMesh.Mesh.SkinnedMesh.CanvasTexture.CompressedTexture.CompressedArrayTexture.CubeTexture.Data3DTexture.DataArrayTexture.DataTexture.DepthTexture.FramebufferTexture.Texture.VideoTexture.ArrowHelper.AxesHelper.BoxHelper.Box3Helper.CameraHelper.DirectionalLightHelper.GridHelper.PolarGridHelper.HemisphereLightHelper.PlaneHelper.PointLightHelper.SkeletonHelper.SpotLightHelper.Controls.ArcballControls.DragControls.FirstPersonControls.FlyControls.MapControls.OrbitControls.PointerLockControls.TrackballControls.TransformControls.RenderPass.ShaderPass.GlitchPass.GTAOPass.OutlinePass.UnrealBloomPass.BokehPass.OutputPass.AnaglyphEffect.AsciiEffect.OutlineEffect.ParallaxBarrierEffect.StereoEffect.RoundedBoxGeometry.ConvexGeometry.DecalGeometry.ParametricGeometry.TextGeometry.Primitive.Geometry.Material.BatchedMaterial.CustomMaterial.CurvePath".split(".")).forEach((e) => Ft(e)), It(), Lt());
	let [t, n] = v(wt, U), r = {
		threefy: t,
		dispatch: n
	}, i = Ct(e, "ThreeProvider", (e, t) => U.scene);
	return /* @__PURE__ */ I(xt, {
		value: r,
		children: i.length > 0 && i
	});
}
function Et(e) {
	return Tt(e);
}
function q(e) {
	if (e === void 0) {
		let e = U;
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
	} else return e(U);
}
function Dt(e, t = []) {
	let n = y(null);
	return g(() => {
		n.current && e(n.current, U.scene);
	}, [...t]), n;
}
function Ot(e, t = []) {
	let n = y(e);
	return g(() => {
		n.current = e;
	}, [e, ...t]), function(...e) {
		let t = n.current;
		return t(...e);
	};
}
function kt(e) {
	U.renderCallbacks.push(e);
}
function At(e) {
	U.keyDownCallbacks.push(e);
}
function jt(e) {
	U.keyUpCallbacks.push(e);
}
var Mt = (e, t, n) => {
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
}, Nt = (e, t) => {
	let n = U.scene;
	if (t === void 0) return Mt(n, e);
	let r = Array.isArray(t) ? t : [t];
	if (e === "Object3D") {
		let e = (e) => e.split("/").pop();
		r = r.map((t) => e(t));
	}
	let i = Mt(n, e), a = [];
	return r.forEach((e) => {
		a.push(i.filter((t) => t.name === e));
	}), a.length === 1 ? a[0] : a;
}, Pt = () => {
	let e = U;
	return {
		replay: () => e.replayAnimate(),
		pause: () => e.pauseAnimate(),
		flush: () => e.flushAnimate()
	};
}, Ft = (t) => {
	let n = (n) => {
		let r = Ct(n, t, (n, r) => {
			let { ref: i = { current: null }, children: a, args: o, type: s, count: c, object: l, onLoad: u, fallback: d, ...f } = n, p = Array.isArray(o) ? o : [];
			t === "InstancedMesh" && c && p.push(void 0, void 0, c);
			let m;
			if (t === "Primitive") {
				if (!l) throw Error("create3DElement(): Primitives without 'object' are invalid!");
				if (u) {
					let e = ({ target: t }) => {
						t.removeEventListener("onLoad", e), u(t);
					};
					l.addEventListener("onLoad", e);
				}
				m = l;
			} else if (t === "Geometry") i.current && i.current.dispose(), s.match(/(rounded|convex|decal|parametric|text)/) ? i.current = new z[H[s]](...p) : i.current = new e[H[s === void 0 ? "buffer" : s]](...p), m = i.current;
			else if (t === "Material") {
				let t = s === void 0 ? "basic" : s;
				m = i.current ? i.current : new e[bt[t]]();
			} else if (t === "BatchedMaterial") m = i.current ? i.current : new Xe[t](...p);
			else if (t === "CustomMaterial") m = i.current ? i.current : new Xe[t](s, f);
			else if (t === "Controls") {
				p.length === 0 && ((e, t) => {
					let n = U.camera, r = U.renderer, i = U.scene;
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
				})(s, p), ((e, t) => {
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
				})(s, f);
				let e = s[0].toUpperCase() + s.slice(1) + "Controls";
				m = i.current ? i.current : new z[e](...p), U.setControls(m);
			} else t.match(/(Controls)$/) ? (m = i.current ? i.current : new z[t](...p), U.setControls(m)) : t.match(/(Pass)$/) || t.match(/(Effect)$/) ? m = i.current ? i.current : new z[t](...p) : t.match(/(Geometry)$/) ? (i.current && i.current.dispose(), i.current = new e[t](...p), m = i.current) : t === "CurvePath" ? (m = i.current ? i.current : new e.Group(...p), m.forCurvePath = !0) : m = i.current ? i.current : new e[t](...p);
			if (G(m, r), G(m, f), t === "Group" && d) {
				let e = a.flat(1).map((e) => e.props.url !== void 0), t = [], n = ({ target: r }) => {
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
				m.addEventListener("added", n);
			}
			return m;
		});
		return /* @__PURE__ */ I(Re, { children: r.length > 0 && r });
	}, r = t === "LOD" ? "lod" : `${t[0].toLowerCase()}${t.slice(1)}`;
	U.reactElements[r] = n;
}, It = () => {
	let t = /* @__PURE__ */ "box.capsule.circle.cone.cylinder.dodecahedron.extrude.icosahedron.lathe.octahedron.plane.polyhedron.ring.shape.sphere.tetrahedron.torus.torusKnot.tube.edges.wireframe.rounded.convex.decal.parametric.text.lineCurve.ellipseCurve.arcCurve.catmullRom3.splineCurve.bezierCurve.nurbsCurve.curve.nurbsSurface".split("."), n = (t, n, r) => {
		let { divisions: i, dim: a, order: o } = r, s;
		if (t === "lineCurve") i = i === void 0 ? 1 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n = V(n), s = new e.LineCurve3(...n)), (a === 2 || a === "2") && (n = B(n), s = new e.LineCurve(...n));
		else if (t === "ellipseCurve" || t === "arcCurve") i = i === void 0 ? 5 : i, s = new e.EllipseCurve(...n);
		else if (t === "catmullRom3") i = i === void 0 ? 5 : i, Array.isArray(n[0]) ? n[0] = V(n[0]) : n = [V(n)], s = new e.CatmullRomCurve3(...n);
		else if (t === "splineCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n[0] = V(n[0]), s = new e.CatmullRomCurve3(...n)), (a === 2 || a === "2") && (Array.isArray(n[0]) ? n[0] = B(n[0]) : n = [B(n)], s = new e.SplineCurve(...n));
		else if (t === "bezierCurve") i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, o = o === void 0 ? 2 : o, (a === 3 || a === "3") && (n = V(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve3(...n) : new e.QuadraticBezierCurve3(...n)), (a === 2 || a === "2") && (n = B(n), s = o === 3 || o === "cubic" ? new e.CubicBezierCurve(...n) : new e.QuadraticBezierCurve(...n));
		else if (t === "nurbsCurve") {
			i = i === void 0 ? 5 : i;
			let { degree: e, knots: t, controlPoints: a } = r;
			n.length > 0 && ([e, t, a] = n), a = _t(a), s = new z.NURBSCurve(e, t, a);
		}
		let c = s.getPoints(i);
		return [new e.BufferGeometry().setFromPoints(c), s];
	}, r = (e, t, n) => {
		if (e === "nurbsSurface") {
			let { slices: e = 8, stacks: r = 8, degree1: i, degree2: a, knots1: o, knots2: s, controlPoints: c } = n;
			t.length > 0 && ([i, a, o, s, c] = t);
			let l = [], u = o.length - i - 1;
			for (let e = 0; e < u; e++) l.push(_t(c[e]));
			let d = new z.NURBSSurface(i, a, o, s, l);
			return [new z.ParametricGeometry((e, t, n) => d.getPoint(e, t, n), e, r), d];
		} else return [];
	};
	t.forEach((t) => {
		let i = (i) => {
			let a = Ct(i, t, (i, a) => {
				let { ref: o = { current: null }, children: s, args: c, type: l, ...u } = i, d = !1;
				if (o.current) {
					let e = o.current.geometry;
					d = !e || e.isRoundedBoxGeometry || e.isConvexGeometry || e.isDecalGeometry || e.isParametricGeometry || e.isTextGeometry;
				}
				let f;
				if (o.current && !d) f = o.current, G(f.geometry, c), G(f.material, u);
				else {
					let i = Array.isArray(c) ? c : [], a, o, s;
					if (t.match(/(rounded|convex|decal|parametric|text)/)) a = new z[H[t]](...i);
					else if (t.match(/(lineCurve|ellipseCurve|arcCurve|catmullRom3|splineCurve|bezierCurve|nurbsCurve)/)) [a, o] = n(t, i, u);
					else if (t === "curve") {
						let e = l === "catmullRom3" ? l : l + "Curve";
						l = u.linetype === "dashed" ? "dashed" : "line", [a, o] = n(e, i, u);
					} else t === "nurbsSurface" ? [a, s] = r(t, i, u) : a = new e[H[t]](...i);
					let d, p, m, h;
					if (l === void 0 ? d = "basic" : [d, p] = l.split("-"), p) h = new pt(p, u), m = "Mesh";
					else {
						let t;
						switch (d) {
							case "points":
								t = "PointsMaterial", m = "Points";
								break;
							case "line":
								t = "LineBasicMaterial", m = "Line";
								break;
							case "dashed":
								t = "LineDashedMaterial", m = "Line";
								break;
							case "rawShader":
								t = "RawShaderMaterial", m = "Mesh";
								break;
							case "shader":
								t = "ShaderMaterial", m = "Mesh";
								break;
							case "shadow":
								t = "ShadowMaterial", m = "Mesh";
								break;
							case "sprite":
								t = "SpriteMaterial", m = "Sprite";
								break;
							default:
								t = l || "basic", t = "Mesh" + t[0].toUpperCase() + t.slice(1) + "Material", m = "Mesh";
								break;
						}
						h = new e[t](), G(h, u);
					}
					f = new e[m](a, h), d === "dashed" && f.computeLineDistances(), o && (f.userData.curve = o), s && (f.userData.surface = s);
				}
				return G(f, a), G(f, u), f;
			});
			return /* @__PURE__ */ I(Re, { children: a.length > 0 && a });
		};
		U.reactElements[t] = i;
	});
}, Lt = () => {
	let t = (e) => {
		let { url: t, texture: n, color: r, onLoad: i } = e, a = t || n || r || 1644825;
		U.createBackground(a, i);
	};
	U.reactElements.background = t;
	let n = (t) => {
		let { ref: n = y(null), color: r = 16777215, intensity: i = 1, keyLightPos: a = [
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
		], hemisphereLightOn: c = !0, ...l } = t, u;
		typeof r == "number" ? u = r : r.isColor ? u = r.getHex() : Array.isArray(r) ? u = new e.Color().fromArray(r).getHex() : typeof r == "string" && (u = new e.Color(r).getHex());
		let d = U.reactElements.group;
		return /* @__PURE__ */ ze(d, {
			ref: n,
			name: "threePointLighting",
			...l,
			children: [
				/* @__PURE__ */ I("directionalLight", {
					args: [u, i * .75 * Math.PI],
					position: a
				}),
				/* @__PURE__ */ I("directionalLight", {
					args: [u, i * .375 * Math.PI],
					position: o
				}),
				/* @__PURE__ */ I("directionalLight", {
					args: [u, i * .5 * Math.PI],
					position: s
				}),
				c && /* @__PURE__ */ I("hemisphereLight", {
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
	U.reactElements.threePointLighting = n;
	let r = (e) => {
		let { ref: t = y(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 1, ...o } = e, s = r, c = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]), l = -c, u = c, d = c, f = -c, p = c * .1, m = c * 2, h = U.reactElements.directionalLight;
		return /* @__PURE__ */ I(h, {
			ref: t,
			position: r,
			args: [i, a],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-left": l,
			"shadow-camera-right": u,
			"shadow-camera-top": d,
			"shadow-camera-bottom": f,
			"shadow-camera-near": p,
			"shadow-camera-far": m,
			castShadow: !0,
			...o
		});
	};
	U.reactElements.shadowDirectionalLight = r;
	let i = (e) => {
		let { ref: t = y(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 200, distance: o = 0, angle: s = Math.PI / 6, penumbra: c = 1, decay: l = 1.2, ...u } = e, d = r, f = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]), p = f * .1, m = f * 2, h = U.reactElements.spotLight;
		return /* @__PURE__ */ I(h, {
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
			"shadow-camera-near": p,
			"shadow-camera-far": m,
			"shadow-focus": 1,
			castShadow: !0,
			...u
		});
	};
	U.reactElements.shadowSpotLight = i;
	let a = (e) => {
		let { ref: t = y(null), children: n, position: r = [
			0,
			100,
			0
		], color: i = 16777215, intensity: a = 200, distance: o = 0, decay: s = 1.2, ...c } = e, l = r, u = Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]), d = u * .1, f = u * 2, p = U.reactElements.pointLight;
		return /* @__PURE__ */ I(p, {
			ref: t,
			position: r,
			args: [
				i,
				a,
				o,
				s
			],
			"shadow-mapSize": [1024, 1024],
			"shadow-camera-near": d,
			"shadow-camera-far": f,
			castShadow: !0,
			...c
		});
	};
	U.reactElements.shadowPointLight = a;
	let o = (e) => {
		let { ref: t = y(null), width: n = 100, depth: r = n, type: i = "shadow", color: a = 0, opacity: o = .5, ...s } = e, c = U.reactElements.plane;
		return /* @__PURE__ */ I(c, {
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
	U.reactElements.shadowPlaneReceiver = o;
}, Rt = class {
	parse(e) {
		let t = "";
		function n(e) {
			let n, r = "", i = "", a = Array.isArray(e.material) ? e.material : [e.material];
			for (let e = 0, o = a.length; e < o; e++) {
				if (n = a[e], r = n.name === "" ? `material${n.id}` : n.name, t += `newmtl ${r}\n`, n.color) {
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
				n.shininess && (t += `Ns ${n.shininess}\n`), n.opacity && n.opacity < 1 && n.transparent === !0 && (t += `d ${n.opacity}\n`, t += `Tr ${1 - n.opacity}\n`);
				function o(e, t) {
					if (e.isDataTexture === !0) return console.error("saveTexture: DataTexture not supported.", e), !1;
					var n = document.createElement("canvas"), r = n.getContext("2d");
					n.width = e.image.width, n.height = e.image.height, r.drawImage(e.image, 0, 0);
					var i = n.toDataURL(), a = document.createElement("a");
					return document.body.appendChild(a), a.download = t, a.href = i, a.click(), document.body.removeChild(a), !0;
				}
				n.map && (i = r + "_diffuse.png", o(n.map, i) && (t += "map_Kd " + i + "\n")), n.specularMap && (i = r + "_specular.png", o(n.specularMap, i) && (t += "map_Ks " + i + "\n")), n.emissiveMap && (i = r + "_emissive.png", o(n.emissiveMap, i) && (t += "map_Ke " + i + "\n")), n.normalMap && (i = r + "_normal.png", o(n.normalMap, i) && (t += "norm " + i + "\n")), n.bumpMap && (i = r + "_bump.png", o(n.bumpMap, i) && (t += "map_bump " + i + "\n")), n.alphaMap && (i = r + "_alpha.png", o(n.alphaMap, i) && (t += "map_d " + i + "\n", n.transparent = !0));
			}
		}
		return e.traverse(function(e) {
			e.isMesh === !0 && n(e);
		}), t;
	}
}, zt = class {
	parse(e, r, a = {}) {
		if (a = Object.assign({
			version: "1.4.1",
			author: null,
			textureDirectory: "",
			upAxis: "Y_UP",
			unitName: null,
			unitMeter: null
		}, a), a.upAxis.match(/^[XYZ]_UP$/) === null) return console.error("ColladaExporter: Invalid upAxis: valid values are X_UP, Y_UP or Z_UP."), null;
		if (a.unitName !== null && a.unitMeter === null) return console.error("ColladaExporter: unitMeter needs to be specified if unitName is specified."), null;
		if (a.unitMeter !== null && a.unitName === null) return console.error("ColladaExporter: unitName needs to be specified if unitMeter is specified."), null;
		a.textureDirectory !== "" && (a.textureDirectory = `${a.textureDirectory}/`.replace(/\\/g, "/").replace(/\/+/g, "/"));
		let s = a.version;
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
			let t = ee.get(e);
			if (!t) {
				let n = e;
				if (n.isBufferGeometry !== !0) throw Error("THREE.ColladaExporter: Geometry is not of type THREE.BufferGeometry.");
				let r = `Mesh${D.length + 1}`, i = n.index ? n.index.count * n.index.itemSize : n.attributes.position.count, a = n.groups != null && n.groups.length !== 0 ? n.groups : [{
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
				o += "</mesh></geometry>", D.push(o), t = {
					meshid: r,
					bufferGeometry: n
				}, ee.set(e, t);
			}
			return t;
		}
		function x(e) {
			let t = w.get(e);
			if (t == null) {
				t = `image-${E.length + 1}`;
				let n = e.name || t, r = `<image id="${t}" name="${n}">`;
				s === "1.5.0" ? r += `<init_from><ref>${a.textureDirectory}${n}.png</ref></init_from>` : r += `<init_from>${a.textureDirectory}${n}.png</init_from>`, r += "</image>", E.push(r), w.set(e, t), T.push({
					directory: a.textureDirectory,
					name: n,
					ext: "png",
					data: f(e.image, "png"),
					original: e
				});
			}
			return t;
		}
		function S(e) {
			let r = te.get(e);
			if (r == null) {
				r = `Mat${O.length + 1}`;
				let i = "phong";
				e.isMeshLambertMaterial === !0 ? i = "lambert" : e.isMeshBasicMaterial === !0 && (i = "constant", e.map !== null && console.warn("ColladaExporter: Texture maps not supported with MeshBasicMaterial."));
				let a = e.emissive ? e.emissive : new t(0, 0, 0), o = e.color ? e.color : new t(0, 0, 0), s = e.specular ? e.specular : new t(1, 1, 1), c = e.shininess || 0, l = e.reflectivity || 0;
				a.convertLinearToSRGB(), s.convertLinearToSRGB(), o.convertLinearToSRGB();
				let u = "";
				e.transparent === !0 && (u += "<transparent>" + (e.map ? "<texture texture=\"diffuse-sampler\"></texture>" : "<float>1</float>") + "</transparent>", e.opacity < 1 && (u += `<transparency><float>${e.opacity}</float></transparency>`));
				let d = `<technique sid="common"><${i}><emission>` + (e.emissiveMap ? "<texture texture=\"emissive-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="emission">${a.r} ${a.g} ${a.b} 1</color>`) + "</emission>" + (i === "constant" ? "" : "<diffuse>" + (e.map ? "<texture texture=\"diffuse-sampler\" texcoord=\"TEXCOORD\" />" : `<color sid="diffuse">${o.r} ${o.g} ${o.b} 1</color>`) + "</diffuse>") + (i === "constant" ? "" : "<bump>" + (e.normalMap ? "<texture texture=\"bump-sampler\" texcoord=\"TEXCOORD\" />" : "") + "</bump>") + (i === "phong" ? `<specular><color sid="specular">${s.r} ${s.g} ${s.b} 1</color></specular><shininess>` + (e.specularMap ? "<texture texture=\"specular-sampler\" texcoord=\"TEXCOORD\" />" : `<float sid="shininess">${c}</float>`) + "</shininess>" : "") + `<reflective><color>${o.r} ${o.g} ${o.b} 1</color></reflective><reflectivity><float>${l}</float></reflectivity>` + u + `</${i}></technique>`, f = `<effect id="${r}-effect"><profile_COMMON>` + (e.map ? `<newparam sid="diffuse-surface"><surface type="2D"><init_from>${x(e.map)}</init_from></surface></newparam><newparam sid="diffuse-sampler"><sampler2D><source>diffuse-surface</source></sampler2D></newparam>` : "") + (e.specularMap ? `<newparam sid="specular-surface"><surface type="2D"><init_from>${x(e.specularMap)}</init_from></surface></newparam><newparam sid="specular-sampler"><sampler2D><source>specular-surface</source></sampler2D></newparam>` : "") + (e.emissiveMap ? `<newparam sid="emissive-surface"><surface type="2D"><init_from>${x(e.emissiveMap)}</init_from></surface></newparam><newparam sid="emissive-sampler"><sampler2D><source>emissive-surface</source></sampler2D></newparam>` : "") + (e.normalMap ? `<newparam sid="bump-surface"><surface type="2D"><init_from>${x(e.normalMap)}</init_from></surface></newparam><newparam sid="bump-sampler"><sampler2D><source>bump-surface</source></sampler2D></newparam>` : "") + d + (e.side === n ? "<extra><technique profile=\"THREEJS\"><double_sided sid=\"double_sided\" type=\"int\">1</double_sided></technique></extra>" : "") + "</profile_COMMON></effect>", p = e.name ? ` name="${e.name}"` : "", m = `<material id="${r}"${p}><instance_effect url="#${r}-effect" /></material>`;
				k.push(m), O.push(f), te.set(e, r);
			}
			return r;
		}
		function C(e) {
			let t = `<node name="${e.name}">`;
			if (t += y(e), e.isMesh === !0 && e.geometry !== null) {
				let n = b(e.geometry), r = n.meshid, i = n.bufferGeometry, a = null, s, c = e.material || new o(), l = Array.isArray(c) ? c : [c];
				s = i.groups.length > l.length ? Array(i.groups.length) : Array(l.length), a = s.fill().map((e, t) => S(l[t % l.length])), t += `<instance_geometry url="#${r}">` + (a.length > 0 ? "<bind_material><technique_common>" + a.map((e, t) => `<instance_material symbol="MESH_MATERIAL_${t}" target="#${e}" ><bind_vertex_input semantic="TEXCOORD" input_semantic="TEXCOORD" input_set="0" /></instance_material>`).join("") + "</technique_common></bind_material>" : "") + "</instance_geometry>";
			}
			return e.children.forEach((e) => t += C(e)), t += "</node>", t;
		}
		let ee = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), T = [], E = [], D = [], O = [], k = [], ne = C(e), A = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><COLLADA xmlns="${s === "1.4.1" ? "http://www.collada.org/2005/11/COLLADASchema" : "https://www.khronos.org/collada/"}" version="${s}"><asset>` + ("<contributor><authoring_tool>three.js Collada Exporter</authoring_tool>" + (a.author === null ? "" : `<author>${a.author}</author>`) + `</contributor><created>${(/* @__PURE__ */ new Date()).toISOString()}</created><modified>${(/* @__PURE__ */ new Date()).toISOString()}</modified>` + (a.unitName === null ? "" : `<unit name="${a.unitName}" meter="${a.unitMeter}" />`) + `<up_axis>${a.upAxis}</up_axis>`) + "</asset>";
		A += `<library_images>${E.join("")}</library_images>`, A += `<library_effects>${O.join("")}</library_effects>`, A += `<library_materials>${k.join("")}</library_materials>`, A += `<library_geometries>${D.join("")}</library_geometries>`, A += `<library_visual_scenes><visual_scene id="Scene" name="scene">${ne}</visual_scene></library_visual_scenes>`, A += "<scene><instance_visual_scene url=\"#Scene\"/></scene>", A += "</COLLADA>";
		let j = {
			data: c(A),
			textures: T
		};
		return typeof r == "function" && requestAnimationFrame(() => r(j)), j;
	}
}, J = function() {
	let e = document.createElement("a");
	this.saveFile = function(t, n) {
		let r = t.split(".").pop().toLowerCase();
		switch (n ||= useThree().scene, r) {
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
			let n = t, r = n.replace(".obj", ""), i = r + ".mtl", { OBJExporter: a } = J.exporters;
			d(new a().parse(e, r), n);
			let { MTLExporter: o } = J.exporters;
			d(new o().parse(e), i);
		}
		function o(e, t = "scene.dae") {
			let { ColladaExporter: n } = J.exporters;
			new n().parse(e, function(e) {
				d(e.data, t);
			});
		}
		function s(e, t = "scene.glb") {
			let { GLTFExporter: n } = J.exporters;
			new n().parse(e, function(e) {
				f(e, t);
			}, function(e) {
				console.log("An error happened during parsing", e);
			}, { binary: !0 });
		}
		function c(e, t = "scene.gltf") {
			let { GLTFExporter: n } = J.exporters;
			new n().parse(e, function(e) {
				d(JSON.stringify(e, null, 2), t);
			}, function(e) {
				console.log("An error happened during parsing", e);
			}, { binary: !1 });
		}
		function l(e, t = "model.stl", n = !1) {
			let { STLExporter: r } = J.exporters, i = new r();
			n === !0 ? d(i.parse(e), t) : f(i.parse(e, { binary: !0 }), t);
		}
		function u(e, t = "model.ply") {
			let { PLYExporter: n } = J.exporters;
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
J.exporters = {}, J.setExporter = (e) => {
	J.exporters = {
		...J.exporters,
		...e
	};
};
var Bt = (e) => {
	switch (e.split(".").pop().toLowerCase()) {
		case "obj":
			J.setExporter({
				OBJExporter: me,
				MTLExporter: Rt
			});
			break;
		case "dae":
			J.setExporter({ ColladaExporter: zt });
			break;
		case "glb":
			J.setExporter({ GLTFExporter: j });
			break;
		case "gltf":
			J.setExporter({ GLTFExporter: j });
			break;
		case "stl":
			J.setExporter({ STLExporter: we });
			break;
		case "ply":
			J.setExporter({ PLYExporter: be });
			break;
	}
}, Vt = (e, t) => {
	let n = new J();
	Bt(e), n.saveFile(e, t);
}, Ht = `https://unpkg.com/three@0.${e.REVISION}.0/examples/jsm/libs/basis/`, Ut = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/", Y = function() {
	let t = this;
	this.imageFiles = [], this.mtlFile = null, this.loadItemList = (e) => {
		Gt.getFilesFromItemList(e, (e, n) => {
			t.loadFiles(e, n);
		});
	}, this.loadFiles = async function(e, t) {
		if (e.length > 0) {
			t ||= Gt.createFilesMap(e);
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
						let r = e.target.result, { OBJLoader: a } = Y.loaders, o = new a(t);
						n && o.setMaterials(n);
						let s = o.parse(r);
						Wt.convertPhongToStandard(s), s.name = i, c(s);
					}, !1), o.readAsText(e);
				}
				function l(e, n) {
					if (n) {
						let r = new FileReader();
						r.addEventListener("load", async function(r) {
							let i = r.target.result, { MTLLoader: a } = Y.loaders, o = new a(t).parse(i);
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
				let { strFromU8: t } = Y.loaders;
				a = t(e);
			} else a = e.buffer;
		} else a = a.target.result;
		switch (n) {
			case "3ds": {
				let { TDSLoader: e } = Y.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "3mf": {
				let { ThreeMFLoader: e } = Y.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "amf": {
				let { AMFLoader: e } = Y.loaders, t = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "dae": {
				let { ColladaLoader: e } = Y.loaders, t = new e(d).parse(a);
				t.scene.name = l, s(t.scene, t.animations), c(t.scene);
				break;
			}
			case "drc": {
				let { DRACOLoader: t } = Y.loaders, n = new t(d);
				n.setDecoderPath(Ut), n.parse(a, function(t) {
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
				let { FBXLoader: e } = Y.loaders, t = new e(d).parse(a);
				t.name = l, s(t, t.animations), c(t);
				break;
			}
			case "md2": {
				let { MD2Loader: n } = Y.loaders, r = new n(d).parse(a), i = null;
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
				let e = e;
				if (e.indexOf("postMessage") !== -1) {
					let t = new Blob([e], { type: "text/javascript" }), n = URL.createObjectURL(t), r = new Worker(n);
					r.onmessage = function(e) {
						e.data.metadata = { version: 2 }, u(e.data);
					}, r.postMessage(Date.now());
					return;
				}
				let t;
				try {
					t = JSON.parse(e);
				} catch (e) {
					alert(e);
					return;
				}
				u(t);
				break;
			}
			case "kmz": {
				let { KMZLoader: e } = Y.loaders, t = new e(d).parse(a);
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
				let { PLYLoader: t } = Y.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial(), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "stl": {
				let { STLLoader: t } = Y.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial({ vertexColors: !!n.hasColors }), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "svg": {
				let { SVGLoader: t } = Y.loaders, n = new t(d).parse(a).paths, r = new e.Group();
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
				let { VTKLoader: t } = Y.loaders, n = new t(d).parse(a);
				o(n);
				let r = new e.MeshStandardMaterial(), i = new e.Mesh(n, r);
				i.name = l, c(i);
				break;
			}
			case "vox": {
				let { VOXLoader: e } = Y.loaders, { scene: t } = new e(d).parse(a);
				t.name = l, c(t);
				break;
			}
			case "wrl": {
				let { VRMLLoader: e } = Y.loaders, t = new e(d).parse(a);
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
		let { unzipSync: i, strFromU8: o } = Y.loaders, s = i(new Uint8Array(e));
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
			let { OBJLoader: e, MTLLoader: n } = Y.loaders, i = new n(l).parse(o(t.bufferMTL)), a = new e(l).setMaterials(i).parse(o(t.bufferOBJ));
			Wt.convertPhongToStandard(a), a.name = r, c(a);
		}
		t.bufferOBJ = null, t.bufferMTL = null, t.zip = null;
	}
	async function i(e) {
		let { GLTFLoader: t, KTX2Loader: n, DRACOLoader: r, MeshoptDecoder: i } = Y.loaders, a = new t(e);
		if (r) {
			let e = new r();
			e.setDecoderPath(Ut), a.setDRACOLoader(e);
		}
		if (n) {
			let e = new n();
			e.setTranscoderPath(Ht), e.detectSupport(q().threefy.renderer), a.setKTX2Loader(e);
		}
		return i && a.setMeshoptDecoder(i), Promise.resolve(a).then((e) => e);
	}
	function a() {
		let t = new e.LoadingManager();
		return t.onStart = () => {
			qt();
		}, t.onProgress = (e, t, n) => {
			Yt(t, n);
		}, t.onLoad = () => {
			Jt();
		}, t.onError = (e) => {
			Xt("There was an error loading " + e);
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
		let { threefy: t } = q(), n = t._cache.get(e.name);
		n[0] = e;
		for (let t = 1, r = n.length; t < r; t++) n[t].dispatchEvent({ type: e.name });
	}
	function l(e) {
		q().threefy.setScene(e);
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
					e.isScene ? l(e) : e.name === "natureObject" ? e.children.forEach(function(e) {
						add(cloneObject(e));
					}) : c(e);
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
		e ||= q().threefy.dom, e.addEventListener("dragover", function(t) {
			t.preventDefault(), t.stopPropagation(), e.classList.add("dragover");
		}), e.addEventListener("dragleave", function(t) {
			t.preventDefault(), t.stopPropagation(), e.classList.remove("dragover");
		}), e.addEventListener("drop", function(e) {
			e.preventDefault(), e.dataTransfer.types[0] !== "text/plain" && (e.dataTransfer.items ? t.loadItemList(e.dataTransfer.items) : t.loadFiles(e.dataTransfer.files));
		}, !1);
	};
};
Y.loaders = {}, Y.setLoader = (e) => {
	Y.loaders = {
		...Y.loaders,
		...e
	};
};
var Wt = { convertPhongToStandard: function(t) {
	let n = (t) => {
		if (!t || !t.isMeshPhongMaterial) return t;
		let n = new e.MeshStandardMaterial();
		return n.name = t.name, n.color.copy(t.color), n.emissive.copy(t.emissive), n.map = t.map, n.emissiveMap = t.emissiveMap, n.normalMap = t.normalMap, n.normalScale.copy(t.normalScale), n.bumpMap = t.bumpMap, n.bumpScale = t.bumpScale, n.aoMap = t.aoMap, n.aoMapIntensity = t.aoMapIntensity, n.alphaMap = t.alphaMap, n.transparent = t.transparent, n.opacity = t.opacity, n.side = t.side, n.vertexColors = t.vertexColors, n.roughness = 1, n.metalness = 0, t.dispose(), n;
	};
	t.traverse((e) => {
		!e.isMesh && !e.isPoints && !e.isLine || (e.material = Array.isArray(e.material) ? e.material.map(n) : n(e.material));
	});
} }, Gt = {
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
}, Kt = function(e, t) {
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
		e = e.filter((e) => e), new Y().loadFiles(e);
	});
}, qt = function() {
	let e = document.getElementById("loading-spinner");
	if (e) {
		e.style.display = "";
		return;
	}
	e = document.createElement("div"), e.id = "loading-spinner", e.innerHTML = "\n        <div style=\"position: absolute; left: 45%; top: 45%; width: 10%; vertical-align: middle; text-align: center;\">\n            <p style=\"color: white; font-size: 1.125rem; font-weight: 500;\">Loading...</p>\n            <div style=\"margin-top: 0.5rem\">\n                <svg aria-hidden=\"true\" style=\"display: inline; width: 2.5rem; height: 2.5rem; margin-right: 0.5rem; color: rgb(229 231 235); animation: spin 1s linear infinite; fill: #2563eb;\" viewBox=\"0 0 100 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\" fill=\"currentColor\"/>\n                    <path d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\" fill=\"currentFill\"/>\n                </svg>\n            </div>\n        </div>\n    ", document.body.appendChild(e);
	let t = document.createElement("style");
	t.id = "spin-keyframes", t.innerHTML = "\n        @keyframes spin {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n        }\n    ", document.head.appendChild(t);
}, Jt = function() {
	let e = document.getElementById("loading-spinner");
	e && (e.style.display = "none");
}, Yt = function(e, t) {
	let n = document.getElementById("loading-spinner");
	n && (n.style.width = `${e / t * 100 | 0}%`);
}, Xt = function(e) {
	console.warn(e);
}, Zt = (e) => new Promise(async (t) => {
	let n = await (await fetch(e)).blob(), r = e.split("/").pop().split("?")[0], i = new File([n], r), a = new FileReader();
	a.addEventListener("load", (e) => {
		let n = e.target.result, r = We(new Uint8Array(n));
		t(Object.keys(r));
	}, !1), a.readAsArrayBuffer(i);
}), Qt = (e) => {
	switch (e.split(".").pop().toLowerCase()) {
		case "3ds":
			Y.setLoader({ TDSLoader: ke });
			break;
		case "3mf":
			Y.setLoader({ ThreeMFLoader: je });
			break;
		case "amf":
			Y.setLoader({ AMFLoader: b });
			break;
		case "dae":
			Y.setLoader({ ColladaLoader: te });
			break;
		case "drc":
			Y.setLoader({ DRACOLoader: T });
			break;
		case "fbx":
			Y.setLoader({ FBXLoader: k });
			break;
		case "md2":
			Y.setLoader({ MD2Loader: le });
			break;
		case "gltf":
		case "glb":
			Y.setLoader({
				GLTFLoader: re,
				KTX2Loader: ce,
				DRACOLoader: T,
				MeshoptDecoder: He
			});
			break;
		case "kmz":
			Y.setLoader({ KMZLoader: se });
			break;
		case "mtl":
		case "obj":
			Y.setLoader({
				OBJLoader: he,
				MTLLoader: ue
			});
			break;
		case "ply":
			Y.setLoader({ PLYLoader: xe });
			break;
		case "stl":
			Y.setLoader({ STLLoader: Te });
			break;
		case "svg":
			Y.setLoader({ SVGLoader: Ee });
			break;
		case "vtk":
			Y.setLoader({ VTKLoader: Le });
			break;
		case "vox":
			Y.setLoader({ VOXLoader: Fe });
			break;
		case "wrl":
			Y.setLoader({ VRMLLoader: Ie });
			break;
		case "zip":
			Y.setLoader({
				unzipSync: We,
				strFromU8: Ue
			}), Zt(e).then((e) => {
				e.forEach((e) => Qt(e));
			});
			break;
	}
}, $t = (t, n = "texture") => {
	t = Array.isArray(t) ? t : [t];
	let { threefy: r } = q(), i;
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
}, en = (e) => $t(e, "texture"), tn = (e) => $t(e, "audio"), nn = (e) => {
	e = Array.isArray(e) ? e : [e];
	let { threefy: t } = q(), n = e.map((e) => t.loadTexture(e));
	return n.length === 1 ? n[0] : n;
}, rn = (t) => {
	if (t = Array.isArray(t) ? t : [t], /png|jpg|jpeg|gif|bmp/i.test(t[0].split(".").pop())) return nn(t);
	if (/mp3|ogg|wav/i.test(t[0].split(".").pop())) return tn(t);
	t.forEach((e) => Qt(e));
	let n = (e) => e.split("/").pop(), { threefy: r } = q(), i = [], a = ({ target: e }) => {
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
	}), t = t.filter((e) => e !== null), t.length > 0 && Kt(t, void 0), i.length === 1 ? i[0] : i;
}, X = class {
	constructor(e, t, n, r) {
		this.x = e, this.y = t, this.width = n, this.height = r, this.finalX = e + n, this.finalY = t + r;
	}
	overlaps(e) {
		return this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.y + this.height > e.y;
	}
}, an = class {
	constructor(t, n = 512, r = 512, i = !0, a = 4096) {
		if (this.MAX_TEXTURE_SIZE = a, !t) return;
		this.texturesObj = t, this.textureNames = Object.keys(t), this.texWidth = n, this.texHeight = r;
		let o = {};
		this.textureNames.forEach((e) => {
			let n = t[e].uuid;
			o[n] || (o[n] = []), o[n].push(e);
		}), this.uuid2Names = o, this.canvas = document.createElement("canvas"), this.textureCount = this.textureNames.length, this.maxWidth = n, this.maxHeight = r, this.textureCache = {}, this.node = {}, this.node.rectangle = new X(0, 0, this.maxWidth * this.textureCount, this.maxHeight * this.textureCount), this.textureOffsets = {}, this.allNodes = [], this.insert(this.node, this.findNextTexture()), this.ranges = {};
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
							let r = l.rectangle, o = n[e].x, s = n[e].y, d = c[e].image, f = new X(r.x, r.y, i, a), p = new X(o, s, d.width, d.height);
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
					e.rectangle = new X(n + i, r, s - (n + i), c - r), t.rectangle = new X(n, r + a, s - n, c - (r + a)), this.allNodes.push(e), this.allNodes.push(t);
				}
				return [e, this.findNextTexture()];
			} else throw Error("Error: Try to use smaller textures.");
		} else {
			let r = e.rectangle.width, o = e.rectangle.height;
			e.textureName = t;
			let s = {}, c = {};
			s.upperNode = e, c.upperNode = e, e.children = [s, c], s.rectangle = new X(i, 0, r - i, a), c.rectangle = new X(0, a, r, o - a), n[t] = {
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
}, on = (e, t, n) => {
	let { diffuse: r, opacity: i } = n, { color: a, emissive: o, specular: s, shininess: c, metalness: l, roughness: u } = n, { ior: d, specularIntensity: f, specularColor: p } = n, { clearcoat: m, clearcoatRoughness: h, dispersion: g } = n, { iridescence: _, iridescenceIOR: v, iridescenceThicknessMinimum: y, iridescenceThicknessMaximum: b } = n, { sheenColor: x, sheenRoughness: S, anisotropyVector: C } = n;
	r ? e.setValue(t, "diffuse", ...r) : e.setValue(t, "diffuse", 1, 1, 1), i !== void 0 && e.setValue(t, "opacity", i), a && e.setValue(t, "diffuse", ...a), o && e.setValue(t, "emissive", ...o), s && e.setValue(t, "specular", ...s), c !== void 0 && e.setValue(t, "shininess", c), l !== void 0 && e.setValue(t, "metalness", l), u !== void 0 && e.setValue(t, "roughness", u), d !== void 0 && e.setValue(t, "ior", d), f !== void 0 && e.setValue(t, "specularIntensity", f), p && e.setValue(t, "specularColor", ...p), m !== void 0 && e.setValue(t, "clearcoat", m), h !== void 0 && e.setValue(t, "clearcoatRoughness", h), g !== void 0 && e.setValue(t, "dispersion", g), _ !== void 0 && e.setValue(t, "iridescence", _), v !== void 0 && e.setValue(t, "iridescenceIOR", v), y !== void 0 && e.setValue(t, "iridescenceThicknessMinimum", y), b !== void 0 && e.setValue(t, "iridescenceThicknessMaximum", b), x && e.setValue(t, "sheenColor", ...x), S !== void 0 && e.setValue(t, "sheenRoughness", S), C && e.setValue(t, "anisotropyVector", ...C);
}, sn = (t, n = 512, r = 512) => {
	if (!t || t.length === 0) return;
	let i = !0, a = (t, n, r, i = "white") => {
		let a = t[`${n}-${r}`];
		if (a) return a;
		let o = document.createElement("canvas"), s = o.getContext("2d");
		o.width = n, o.height = r, s.fillStyle = i, s.fillRect(0, 0, n, r);
		let c = new e.CanvasTexture(o);
		return t[`${n}-${r}`] = c, c;
	}, o = (t, n, r, a) => {
		let o = t[n.uuid];
		if (o) return o;
		n.image || console.warn("resizeTexture(): image data not found in your texture"), i = n.flipY;
		let s = document.createElement("canvas"), c = s.getContext("2d");
		s.width = r, s.height = a, c.drawImage(n.image, 0, 0, r, a);
		let { mapping: l, wrapS: u, wrapT: d, magFilter: f, minFilter: p, format: m, type: h, anisotropy: g, colorSpace: _ } = n, v = new e.CanvasTexture(s, l, u, d, f, p, m, h, g);
		return v.colorSpace = _, v.uuid = n.uuid, t[v.uuid] = v, v;
	}, s = {}, c = {}, l = {}, u = {}, d, { renderer: f } = q(), p = f.capabilities.maxTextureSize, m = [
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
	], h = t.map((e) => {
		let t = e.material;
		return Array.isArray(t) ? t[0] : t;
	});
	if (m.forEach((e) => {
		h.map((t) => !!t[e]).every((e) => e === !1) || (s[e] = {});
	}), m = Object.keys(s), m.length > 0) {
		m.forEach((e) => {
			h.forEach((t, i) => {
				let u = `${i}`, d = t[e];
				d ? s[e][u] = o(c, d, n, r) : s[e][u] = a(l, n, r);
			});
		});
		let t = s.map ? "map" : m.find((e) => !!s[e]), f = new an(s[t], n, r, i, p);
		d = f.ranges, u[t] = f.mergedTexture, m.forEach((n) => {
			n !== t && (u[n] = f.toSameLayout(s[n], i)), n === "map" || n === "emissiveMap" || n === "specularColorMap" ? u[n].colorSpace = e.SRGBColorSpace : n === "envMap" || n === "lightMap" ? u[n].colorSpace = e.LinearSRGBColorSpace : u[n].colorSpace = e.NoColorSpace;
		});
	}
	let g = t.length, _ = new L(g, u);
	s.alphaMap && (_.alphaTest = .5);
	let v = new e.BatchedMesh(g, 6553600, 6553600 * 2, _);
	v.isMergedMesh = !0;
	let y = new e.Matrix4();
	for (let e = 0; e < g; e++) {
		let n = t[e], r = v.addInstance(v.addGeometry(n.geometry)), a = r;
		if (d && d[a]) {
			let t;
			t = i ? [
				d[a].startU,
				d[a].startV,
				d[a].endU,
				d[a].endV
			] : [
				d[a].startU,
				d[a].endV,
				d[a].endU,
				d[a].startV
			], _.setValue(e, "uvRange", ...t);
		}
		let o = n.matrixWorld;
		n.isSkinnedMesh && (o = y.multiplyMatrices(n.bindMatrixInverse, o)), v.setMatrixAt(r, o), on(_, r, h[e]);
	}
	return v;
}, cn = (e, t = 512, n = 512) => new Promise((r) => {
	e.find((e) => {
		let t = e.material;
		return !!(t && Object.keys(t).find((e) => /(map|Map)$/.test(e) && t[e]));
	}) ? setTimeout(() => {
		r(sn(e, t, n));
	}, 500) : r(sn(e, t, n));
}), ln = (t) => {
	let { ref: n = y(null), children: r, ...i } = t, a, o = [];
	if (r.forEach((t) => {
		if (/geometry/i.test(t.type)) {
			let { args: n, type: r, ...i } = t.props, a = r === void 0 ? `${t.type[0].toUpperCase()}${t.type.slice(1)}` : `${r[0].toUpperCase()}${r.slice(1)}Geometry`, s = n === void 0 ? [] : n, c = new e[a](...s);
			G(c, i), o.push(c);
		} else if (/primitive/.test(t.type)) {
			let { object: e, ...n } = t.props;
			if (e?.isBufferGeometry) {
				let t = e;
				t && (G(t, n), o.push(t));
			}
			e?.isMaterial && (a = e);
		} else /material/i.test(t.type) && (a = t);
	}), o.length === 0) return null;
	let s = o.length === 1 ? o[0] : ee.mergeGeometries(o, !1);
	return /* @__PURE__ */ ze("mesh", {
		ref: n,
		...i,
		children: [/* @__PURE__ */ I("primitive", {
			object: s,
			attach: "geometry"
		}), a]
	});
}, un = (e) => {
	let { ref: t = y(null), children: n, ...r } = e;
	return g(() => {
		if (t.current) {
			let e = t.current;
			e.visible = !1, cn(e.children).then((n) => {
				let r = e.parent;
				r.remove(e), r.add(n), t.current = n;
			});
		}
	}, [n]), n?.length > 0 ? /* @__PURE__ */ I("batchedMesh", {
		ref: t,
		...r,
		children: n
	}) : null;
}, dn = class extends e.Sprite {
	constructor(e = "", t = {}) {
		let { textHeight: n = .5, textWidthScale: r = 1, textColor: i = "#ffffff", textAlign: a = "center", textBaseline: o = "middle", fontStyle: s = "normal", fontVariant: c = "normal", fontWeight: l = "normal", fontSize: u = "64px", fontFamily: d = "Karla, sans-serif" } = t, f = {
			string: e,
			height: n,
			widthScale: r,
			color: ht(i),
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
}, fn = (e) => {
	let { ref: t = y(null), string: n = "", height: r = .5, widthScale: i = 1, color: a = 16777215, align: o = "center", baseline: s = "middle", style: c = "normal", variant: l = "normal", weight: u = "normal", size: d = "64px", family: f = "Karla, sans-serif", ...p } = e;
	return /* @__PURE__ */ I("primitive", {
		ref: t,
		object: new dn(n, {
			textHeight: r,
			textWidthScale: i,
			textColor: a,
			textAlign: o,
			textBaseline: s,
			fontStyle: c,
			fontVariant: l,
			fontWeight: u,
			fontSize: d,
			fontFamily: f
		}),
		...p
	});
}, Z = /*@__PURE__*/ new e.Matrix4(), pn = /*@__PURE__*/ new e.Matrix4(), mn = /*@__PURE__*/ new e.Matrix4(), hn = /*@__PURE__*/ new e.Matrix4(), Q = [], gn = /*@__PURE__*/ new e.Box3(), $ = /*@__PURE__*/ new e.Sphere(), _n = !1, vn = class extends e.SkinnedMesh {
	constructor(t, n, r = 1) {
		super(t, n), this.isInstancedMesh = !0, this.isInstancedSkinnedMesh = !0, this.instanceMatrix = new e.InstancedBufferAttribute(new Float32Array(r * 16), 16), this.instanceColor = null, this.instanceBones = null, this.morphTexture = null, this.count = r, this.boundingBox = null, this.boundingSphere = null, this._mesh = null;
		let i = this.bind.bind(this);
		this.bind = function(t, n) {
			i(t, n), this.skeleton.update = (e, t) => {
				let n = this.skeleton.bones, r = this.skeleton.boneInverses, i = e || this.skeleton.boneMatrices, a = this.skeleton.boneTexture, o = t || 0;
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e] ? n[e].matrixWorld : hn;
					mn.multiplyMatrices(t, r[e]), mn.toArray(i, 16 * (e + o * n.length));
				}
				a !== null && (a.needsUpdate = !0);
			}, this.skeleton.computeBoneTexture = this.skeleton.computeInstancedBoneTexture = () => {
				this.skeleton.boneTexture = new e.DataTexture(this.instanceBones, this.skeleton.bones.length * 4, this.count, e.RGBAFormat, e.FloatType), this.skeleton.boneTexture.needsUpdate = !0;
			};
		}, _n || (_n = !0, e.ShaderChunk.points_vert = e.ShaderChunk.points_vert.replace("#include <clipping_planes_pars_vertex>", "#include <clipping_planes_pars_vertex>\n#include <skinning_pars_vertex>"), e.ShaderChunk.points_vert = e.ShaderChunk.points_vert.replace("#include <morphtarget_vertex>", "#include <skinbase_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>"), e.ShaderLib.points.vertexShader = e.ShaderChunk.points_vert, e.ShaderChunk.skinning_pars_vertex = "\n        #ifdef USE_SKINNING\n\n          uniform mat4 bindMatrix;\n          uniform mat4 bindMatrixInverse;\n\n          uniform highp sampler2D boneTexture;\n          // uniform int boneTextureSize;\n\n          mat4 getBoneMatrix( const in float i ) {\n\n          #ifdef USE_INSTANCING\n              \n              int j = 4 * int(i);\n              vec4 v1 = texelFetch(boneTexture, ivec2( j, gl_InstanceID ), 0);\n              vec4 v2 = texelFetch(boneTexture, ivec2( j + 1, gl_InstanceID ), 0);\n              vec4 v3 = texelFetch(boneTexture, ivec2( j + 2, gl_InstanceID ), 0);\n              vec4 v4 = texelFetch(boneTexture, ivec2( j + 3, gl_InstanceID ), 0);\n              \n          #else\n\n            // float j = i * 4.0;\n            // float x = mod( j, float( boneTextureSize ) );\n            // float y = floor( j / float( boneTextureSize ) );\n            // float dx = 1.0 / float( boneTextureSize );\n            // float dy = 1.0 / float( boneTextureSize );\n            // y = dy * ( y + 0.5 );\n            // vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n            // vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n            // vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n            // vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n            int size = textureSize( boneTexture, 0 ).x;\n            int j = int( i ) * 4;\n            int x = j % size;\n            int y = j / size;\n            vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n            vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n            vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n            vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\n          #endif\n\n            return mat4( v1, v2, v3, v4 );\n\n          }\n\n        #endif\n      ");
	}
	computeBoundingBox() {
		let t = this.geometry, n = this.count;
		this.boundingBox === null && (this.boundingBox = new e.Box3()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Z), gn.copy(t.boundingBox).applyMatrix4(Z), this.boundingBox.union(gn);
	}
	computeBoundingSphere() {
		let t = this.geometry, n = this.count;
		this.boundingSphere === null && (this.boundingSphere = new e.Sphere()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let e = 0; e < n; e++) this.getMatrixAt(e, Z), $.copy(t.boundingSphere).applyMatrix4(Z), this.boundingSphere.union($);
	}
	copy(e, t) {
		return super.copy(e, t), e.isInstancedMesh && (e.instanceMatrix && (this.instanceMatrix = e.instanceMatrix.clone()), e.instanceColor && (this.instanceColor = e.instanceColor.clone()), e.morphTexture && (this.morphTexture = e.morphTexture.clone()), this.count = e.count), this;
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
			this.getMatrixAt(e, Z), pn.multiplyMatrices(r, Z), a.matrixWorld = pn, a.raycast(t, Q);
			for (let t = 0, r = Q.length; t < r; t++) {
				let r = Q[t];
				r.instanceId = e, r.object = this, n.push(r);
			}
			Q.length = 0;
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
		this.morphTexture === null && (this.morphTexture = new e.DataTexture(new Float32Array(i * this.count), i, this.count, RedFormat, FloatType));
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
export { qe as Animator, it as BatchedMaterial, mt as BokehPass, zt as ColladaExporter, pt as CustomMaterial, vn as InstancedSkinnedMesh, bt as MATERIAL_TYPES, Rt as MTLExporter, L as MergedMaterial, un as MergedMesh, ln as Mesh, yt as TEXTURE_MAPS, ht as THREE_Color, gt as THREE_Vector3, V as THREE_Vector3s, fn as Text, dn as TextSprite, Et as ThreeCanvas, Je as Threefy, tn as loadAudios, en as loadTextures, cn as mergeMeshes, G as setObject3D, Pt as useAnimate, Vt as useExporter, kt as useFrame, At as useKeyDown, jt as useKeyUp, rn as useLoader, Ot as useRefCallback, Dt as useRefEffect, Nt as useSearch, Mt as useSearchObject, q as useThree };

//# sourceMappingURL=threefy.js.map