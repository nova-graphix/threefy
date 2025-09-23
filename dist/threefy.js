import * as v from "three";
import { Raycaster as pt, Vector2 as mt, UniformsUtils as Oe, ShaderMaterial as Re, Scene as gt, OrthographicCamera as vt, WebGLRenderTarget as $e, Mesh as yt, PlaneGeometry as xt, LOD as wt, Color as le, MeshBasicMaterial as bt, Matrix4 as Mt, DoubleSide as Ct } from "three";
import B, { useRef as j, useEffect as pe, useReducer as Tt, createContext as Lt, useId as Et } from "react";
import { HDRLoader as St, OrbitControls as Ze, EffectComposer as kt, RenderPass as ye, OutputPass as Qe, OutlinePass as et, Pass as _t, NURBSSurface as At, NURBSCurve as Pt, StereoEffect as be, ParallaxBarrierEffect as Me, OutlineEffect as Ce, AsciiEffect as Te, AnaglyphEffect as Le, UnrealBloomPass as Dt, GTAOPass as Ot, GlitchPass as Rt, ShaderPass as $t, TransformControls as Ee, TrackballControls as Ut, PointerLockControls as te, MapControls as Bt, FlyControls as It, FirstPersonControls as Gt, DragControls as Ft, ArcballControls as jt, TextGeometry as tt, ParametricGeometry as rt, DecalGeometry as Se, ConvexGeometry as ke, RoundedBoxGeometry as _e, PLYExporter as Vt, STLExporter as zt, GLTFExporter as Ue, OBJExporter as Nt, VRMLLoader as Ht, VOXMesh as Kt, VOXLoader as Wt, VTKLoader as Xt, SVGLoader as Jt, STLLoader as Yt, PLYLoader as qt, MTLLoader as Zt, OBJLoader as Qt, KMZLoader as er, DRACOLoader as Be, KTX2Loader as tr, GLTFLoader as rr, MD2Loader as sr, FBXLoader as nr, ColladaLoader as or, AMFLoader as ir, ThreeMFLoader as ar, TDSLoader as cr, BufferGeometryUtils as lr } from "three/examples/jsm/Addons.js";
import { BokehDepthShader as ur, BokehShader as dr } from "three/examples/jsm/shaders/BokehShader2.js";
import { MeshoptDecoder as hr } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { strFromU8 as fr, unzipSync as st } from "three/examples/jsm/libs/fflate.module.js";
const Ie = function(r) {
  if (!r) {
    console.error("Animator: cannot be created without scene");
    return;
  }
  this.mixer = new v.AnimationMixer(r), this.update = function(e) {
    this.mixer.update(e);
  }, this.addAnimation = function(e, t) {
    t.length > 0 && (e.animations = t);
  }, this.createActions = function(e) {
    const t = {}, s = e.animations;
    if (s !== void 0) {
      for (const n of s)
        t[n.name] = this.mixer.clipAction(n, e), e.activeAction || (e.activeAction = t[n.name]);
      return t;
    }
  }, this.playAction = function(e, t, s) {
    if (!e || !e.animations || e.animations.length === 0) return;
    t = t !== void 0 ? t : e.animations[0], s = s || {};
    const n = s.duration || 1, o = s.loopMode || v.LoopRepeat, i = s.repetitions || 1 / 0, a = s.combine || "crossFade";
    if (a == "crossFade") {
      const h = e.activeAction, f = this.mixer.clipAction(t, e);
      return f ? (f.enabled = !0, f.setLoop(o, i), h ? (h.enabled = !0, h.crossFadeTo(f, n).play()) : f.play(), e.activeAction = f, f) : void 0;
    } else if (a === "overlap") {
      const h = this.mixer.clipAction(t, e);
      return h.play(), e.activeAction = h, h;
    }
  }, this.playNextAction = function(e) {
    if (!e) return;
    const t = e.animations;
    if (t !== void 0 && t.length > 0) {
      let s = -1;
      if (e.activeAction) {
        const o = e.activeAction.getClip();
        s = t.indexOf(o);
      }
      s = ~~((s + 1) % t.length);
      const n = t[s];
      e.activeAction = this.playAction(e, n), console.log('>> playAction: "' + n.name + '"');
    }
  }, this.stopAction = function(e, t) {
    if (e && t) {
      const s = this.mixer.clipAction(t, e);
      s.enabled = !0, s.stop();
    } else if (e && !t) {
      const s = e.activeAction;
      s && (s.enabled = !0, s.stop());
    }
  }, this.stopAllActions = function() {
    this.mixer.stopAllAction();
  };
};
class W {
  static loadingManager = new v.LoadingManager();
  static textureLoader = new v.TextureLoader(W.loadingManager);
  static cubeTexLoader = new v.CubeTextureLoader(W.loadingManager);
  static rgbeLoader = new St(W.loadingManager);
  static audioLoader = new v.AudioLoader(W.loadingManager);
  constructor(e = {}) {
    this.width = e.width || window.innerWidth, this.height = e.height || window.innerHeight, this.widthRatio = this.width / window.innerWidth, this.heightRatio = this.height / window.innerHeight, this.dom = e.dom || document.createElement("div"), e.dom || document.body.appendChild(this.dom), this.dom.tabIndex = "0", this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.scene = void 0, this.camera = void 0, this.renderer = void 0, this.renderCallbacks = void 0, this.clock = void 0, this.controls = void 0, this.animator = void 0, this.composer = void 0, this.sceneHelpers = void 0, this.dragControls = void 0, this.transformControls = void 0, this.effect = void 0, this.loadingManager = W.loadingManager;
  }
  init() {
    return this.scene = new v.Scene(), this.sceneHelpers = new v.Scene(), this.sceneHelpers.name = "sceneHelpers", this.camera = new v.PerspectiveCamera(
      60,
      // this.fov
      this.width / this.height,
      0.1,
      // this.near
      5e3
      // this.far
    ), this.camera.position.z = 50, this.renderer = this.createRenderer(void 0), this.renderer.setSize(this.width, this.height), this.dom.appendChild(this.renderer.domElement), this.renderCallbacks = [], this.clock = new v.Clock(), this.controls = new Ze(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.075, this.animator = new Ie(this.scene), this.raycaster = new v.Raycaster(), this.selectedObject = null, this.selectedObjects = [], this.mouseDowned = !1, this.mouseDownPosition = new v.Vector2(), this.mouseUpPosition = new v.Vector2(), this.mouseMovePosition = new v.Vector2(), this.mouseClickPosition = new v.Vector2(), this.mouseDoubleClickPosition = new v.Vector2(), this.createEffectComposer(), this.createBackground(), window.addEventListener("resize", () => this.onResize(), !1), this.dom.addEventListener("click", (e) => this.onClick(e), !1), this.dom.addEventListener("dblclick", (e) => this.onDoubleClick(e), !1), this.dom.addEventListener("mousemove", (e) => this.onMouseMove(e), !1), this.dom.addEventListener("mousedown", (e) => this.onMouseDown(e), !1), this.dom.addEventListener("wheel", (e) => this.onWheel(e), { passive: !0 }), this.dom.addEventListener("contextmenu", (e) => this.onContextMenu(e), !1), this.dom.addEventListener("pointermove", (e) => this.onPointerMove(e), !1), this.dom.addEventListener("pointerdown", (e) => this.onPointerDown(e), !1), this.dom.addEventListener("pointerup", (e) => this.onPointerUp(e), !1), this.dom.addEventListener("keydown", (e) => this.onKeyDown(e), !1), this.dom.addEventListener("keyup", (e) => this.onKeyUp(e), !1), this.keyDownCallbacks = [], this.keyUpCallbacks = [], this._cache = /* @__PURE__ */ new Map(), this;
  }
  // dispose
  dispose(e) {
    const t = (n) => {
      if (Array.isArray(n)) {
        n.forEach((o) => t(o));
        return;
      }
      Object.values(n).filter((o) => o instanceof v.Texture).forEach((o) => o.dispose()), n.uniforms && Object.values(n.uniforms).filter(({ value: o }) => o instanceof v.Texture).forEach(({ value: o }) => o.dispose()), n.dispose();
    }, s = (n) => {
      n.geometry && n.geometry.dispose(), n.material && t(n.material), Object.values(n).filter((o) => o instanceof v.Texture).forEach((o) => o.dispose());
    };
    e instanceof v.BufferGeometry ? e.dispose() : e instanceof v.Material ? t(e) : e instanceof v.Texture ? e.dispose() : e instanceof v.Object3D && (e.traverse && e.traverse((n) => s(n)), s(e));
  }
  // scene, camera, controls
  setScene(e) {
    const t = this.scene.background;
    this.scene = e, this.scene.background = t, this.animator = new Ie(e), this.animator.mixer = new v.AnimationMixer(e), this.composer.passes.forEach((s) => {
      s.scene?.name !== "sceneHelpers" ? s.scene = e : s.renderScene && (s.renderScene = e);
    });
  }
  setCamera(e) {
    this.camera = e, this.controls.object = e, this.composer.passes.forEach((t) => {
      t.camera ? t.camera = e : t.renderCamera && (t.renderCamera = e);
    }), e.updateProjectionMatrix();
  }
  setEffect(e) {
    this.effect?.dispose?.(), this.effect = e, this.effect.setSize(this.width, this.height);
  }
  setControls(e) {
    const t = e.constructor.name;
    if (t === "DragControls") {
      this._setDragControls(e);
      return;
    } else if (t === "TransformControls") {
      this._setTransformControls(e);
      return;
    } else t === "PointerLockControls" && this._setPointerLockControls(e);
    this.controls.dispose(), this.controls = e;
  }
  // controls
  _setDragControls(e) {
    const t = this;
    this.dragControls = e, e._dummyPosition = new v.Vector3(), e.addEventListener("dragstart", function(s) {
      if (this.enabled) {
        const n = s.object;
        n !== void 0 && (n.getWorldPosition(this._dummyPosition), t.controls.enabled = !1, t.select(n));
      }
    }), e.addEventListener("dragend", function(s) {
      if (this.enabled) {
        const n = s.object;
        if (n !== void 0) {
          const o = this._dummyPosition.clone();
          n.getWorldPosition(this._dummyPosition);
          const a = this._dummyPosition.sub(o), h = a.length(), f = a.x.toFixed(2), u = a.y.toFixed(2), l = a.z.toFixed(2);
          console.log(`movement vector: (${f}, ${u}, ${l}), its length: ${h.toFixed(2)}`);
        }
        t.controls.enabled = !0;
      }
    });
  }
  _setPointerLockControls(e) {
    let t = e.blocker;
    if (!t) {
      t = document.createElement("div"), t.id = "blocker", t.innerHTML = `
                    <div id="instructions">
                        <p style="font-size:36px">
                            Click to play
                        </p>
                        <p>
                            Move: WASD<br/>
                            Jump: SPACE<br/>
                            Look: MOUSE<br/>
                            Stop: ESC
                        </p>
                    </div>
                `, document.body.appendChild(t);
      const s = document.createElement("style");
      s.innerHTML = `
                    #blocker {
                        left: 0;
                        top: 0;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        color: white;
                        background-color: rgba(0,0,0,0.5);
                    }
                    #instructions {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        font-size: 14px;
                        cursor: pointer;
                    }
                `, document.head.appendChild(s), e.blocker = t;
    }
    t.addEventListener("click", () => e.lock()), e.addEventListener("lock", () => t.style.display = "none"), e.addEventListener("unlock", () => t.style.display = "block"), document.addEventListener("keydown", (s) => e.onKeyDown(s)), document.addEventListener("keyup", (s) => e.onKeyUp(s));
  }
  _setTransformControls(e) {
    const t = this;
    this.transformControls = e, this.transformControls.setSize(0.5), e.addEventListener("dragging-changed", function(n) {
      t.controls.enabled = !n.value;
    });
    const s = e.getHelper();
    this.sceneHelpers.add(s);
  }
  // get & set
  list(e) {
    const s = ((n) => {
      let o = /* @__PURE__ */ new Set(), i = n;
      for (; i && (Object.getOwnPropertyNames(i).map((a) => o.add(a)), i = Object.getPrototypeOf(i), i !== Object.prototype); )
        ;
      return [...o.keys()];
    })(e);
    return {
      properties: s.filter((n) => typeof e[n] != "function"),
      methods: s.filter((n) => typeof e[n] == "function")
    };
  }
  get(e) {
    if (arguments.length > 1) {
      const o = [];
      for (let i = 0; i < arguments.length; i++)
        o.push(this.get(arguments[i]));
      return o;
    }
    let t;
    const n = e.replace("[", ".").replace("]", "").split(".").map((o) => isNaN(o) ? o : ~~o).reduce((o, i) => {
      if (o && o[i])
        return t = o, o[i];
    }, this);
    return typeof n == "function" ? n.bind(t) : n;
  }
  set(e, t) {
    const s = (f, u) => {
      u === "map" || u === "matcap" || u === "emissiveMap" ? f.colorSpace = v.SRGBColorSpace : u === "envMap" ? /hdr|exr/i.test(t.split(".").pop()) ? f.colorSpace = v.LinearSRGBColorSpace : f.colorSpace = v.SRGBColorSpace : f.colorSpace = v.NoColorSpace;
    }, n = (f, u, l) => {
      const c = (d, m) => d && (d.isColor || d.isEuler || d.isQuaternion || d.isVector2 || d.isVector3 || d.isVector4) ? (typeof m == "number" ? d.setScalar(m) : d.set(...m), !0) : !1;
      typeof f[u] == "function" ? Array.isArray(l) ? f[u](...l) : f[u](l) : c(f[u], l) || (typeof l == "string" && lt.includes(u) ? f[u] = new v.TextureLoader().load(l, (m) => {
        s(m, u);
      }) : f[u] = l);
    };
    if (typeof e == "object" && t && Object.getPrototypeOf(t) === Object.prototype) {
      Object.keys(t).forEach((f) => {
        n(e, f, t[f]);
      });
      return;
    }
    if (Object.getPrototypeOf(e) === Object.prototype) {
      const f = this;
      Object.keys(e).forEach((u) => f.set(u, e[u]));
      return;
    }
    if (Object.getPrototypeOf(t) === Object.prototype) {
      const f = this;
      Object.keys(t).forEach((u) => {
        const l = e + "." + u, c = t[u];
        f.set(l, c);
      });
      return;
    }
    let o = !0;
    switch (e) {
      case "scene":
        this.setScene(t);
        break;
      case "camera":
        this.setCamera(t);
        break;
      case "camera.near":
      case "camera.far":
      case "camera.fov":
        const f = e.split(".")[1];
        this.camera[f] = t, this.camera.updateProjectionMatrix();
        break;
      case "background":
      case "scene.background":
        this.createBackground(t);
        break;
      default:
        o = !1;
        break;
    }
    if (o) return;
    const i = e.replace("[", ".").replace("]", "").split(".").map((f) => isNaN(f) ? f : ~~f), a = i.length - 1;
    if (o = i.reduce((f, u, l) => {
      if (f)
        return l === a ? f : f[u] ? f[u] : void 0;
    }, this), !o) {
      console.warn(`${e} not found`);
      return;
    }
    const h = i.pop();
    n(o, h, t);
  }
  // renderer
  createRenderer(e) {
    const t = new v.WebGLRenderer({ canvas: e, antialias: !0 });
    return t.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.shadowMap.enabled = !0, t.shadowMap.needsUpdate = !0, t.shadowMap.type = v.PCFSoftShadowMap, t.outputColorSpace = v.SRGBColorSpace, t.toneMapping = v.LinearToneMapping, t.toneMappingExposure = 1, t;
  }
  // animate loop
  update(e, t) {
    this.controls?.update?.(t), this.animator?.update?.(t), this.scene.traverse((s) => {
      s.isLOD || s.update?.(t, e);
    }), this.sceneHelpers.traverse((s) => s.update?.(t, e));
  }
  render(e, t) {
    this.renderCallbacks.forEach((s) => s(e, this, t)), this.effect ? this.effect.render(this.scene, this.camera) : this.composer ? this.composer.render(t) : (this.renderer.render(this.scene, this.camera), this.sceneHelpers.children.length > 0 && (this.renderer.autoClear = !1, this.renderer.render(this.sceneHelpers, this.camera), this.renderer.autoClear = !0));
  }
  animate() {
    this.animateID = window.requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getDelta(), t = this.clock.elapsedTime;
    this.update(t, e), this.render(t, e), this.controls.constructor.name === "PointerLockControls" && this.controls.animate(e, this.scene, this.raycaster);
  }
  replayAnimate() {
    this.animateID === 0 && (this.animateID = window.requestAnimationFrame(this.animate.bind(this)), this.clock.oldTime = performance.now(), this.controls.enabled = !0);
  }
  pauseAnimate(e) {
    if (this.animateID !== 0) {
      let {
        delayTime: t = 100,
        controlsEnabled: s = !1
      } = e || {};
      const n = this;
      setTimeout(() => {
        window.cancelAnimationFrame(n.animateID), n.animateID = 0, n.controls.enabled = s;
      }, t);
    }
  }
  flushAnimate(e) {
    if (this.animateID === 0) {
      let { delayTime: t = 20 } = e || {};
      this.replayAnimate(), this.pauseAnimate({ delayTime: t });
    }
  }
  // composer & pass
  createEffectComposer() {
    if (this.composer = new kt(this.renderer), this.composer.setSize(this.width, this.height), this.composer.addPass(new ye(this.scene, this.camera)), this.sceneHelpers) {
      this.renderer.autoClear = !1;
      const e = new ye(this.sceneHelpers, this.camera);
      e.clear = !1, e.clearDepth = !1, this.composer.addPass(e), this.renderer.autoClear = !0;
    }
    this.composer.addPass(new Qe());
  }
  addPass(e) {
    e instanceof et && (this.outlinePass = e), this.composer.insertPass(e, this.composer.passes.length - 1);
  }
  // background
  createBackground(e, t) {
    const s = this;
    if (e === "default.hdr" && (e = "images/hdr/death_valley_sand_dunes.hdr"), Array.isArray(e))
      e.length === 6 && this.loadTexture(e, (n) => {
        n.mapping = v.CubeReflectionMapping, s.scene.background = n, s.scene.environment = n, s.scene.backgroundBlurriness = 0, t && t(n);
      }), e.length === 3 && (this.scene.background = new v.Color(...e));
    else if (typeof e == "string") {
      const n = e.split(".");
      n.length === 1 ? this.scene.background = new v.Color(e) : n.pop().toLowerCase() === "hdr" ? this.loadTexture(e, (i) => {
        i.mapping = v.EquirectangularReflectionMapping, s.scene.background = i, s.scene.environment = i, s.scene.backgroundBlurriness = 0, t && t(i);
      }) : this.loadTexture(e, (i) => {
        i.colorSpace = v.SRGBColorSpace, s.scene.background = i, t && t(i);
      });
    } else typeof e == "number" ? this.scene.background = new v.Color(e) : e?.isTexture || e?.isColor ? this.scene.background = e : this.scene.background = new v.Color(1644825);
  }
  // resize
  onResize(e, t) {
    if (this.width = e || this.widthRatio * window.innerWidth, this.height = t || this.heightRatio * window.innerHeight, e && (this.widthRatio = e / window.innerWidth), t && (this.heightRatio = t / window.innerHeight), this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.camera.isPerspectiveCamera)
      this.camera.aspect = this.width / this.height;
    else if (this.camera.isOrthographicCamera) {
      const s = this.camera.top - this.camera.bottom, n = this.width / this.height;
      this.camera.left = -s * n / 2, this.camera.right = s * n / 2, this.camera.top = s / 2, this.camera.bottom = -s / 2;
    }
    if (this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.composer && this.composer.setSize(this.width, this.height), this.effect && this.effect.setSize(this.width, this.height), this.controls) {
      const s = this.controls.constructor.name;
      (s === "FirstPersonControls" || s === "TrackballControls") && this.controls.handleResize();
    }
  }
  // load
  getLoaded(e) {
    const t = this._cache.get(e);
    return t?.[0] ? t[0] : void 0;
  }
  loadTexture(e, t) {
    let s = this._cache.get(e);
    return s || (Array.isArray(e) && e.length === 6 ? s = W.cubeTexLoader.load(e, (n) => {
      t && t(n);
    }) : (e.split(".").pop().toLowerCase() === "hdr" ? s = W.rgbeLoader.load(e, (o) => {
      t && t(o);
    }) : s = W.textureLoader.load(e, (o) => {
      t && t(o);
    }), this._cache.set(e, s))), s;
  }
  // intersection
  getIntersects(e, t) {
    return this.raycaster.setFromCamera(e, this.camera), this.raycaster.intersectObjects(t, !0);
  }
  getIntersectObject(e, t) {
    if (e) {
      let s;
      switch (e.type) {
        case "click":
          s = this.mouseClickPosition;
          break;
        case "dblclick":
          s = this.mouseDoubleClickPosition;
          break;
        case "mousedown":
          s = this.mouseDownPosition;
          break;
        case "mouseup":
          s = this.mouseUpPosition;
          break;
        case "mousemove":
          s = this.mouseMovePosition;
          break;
        case "wheel":
          s = this.mouseMovePosition;
          break;
        case "contextmenu":
          s = this.mouseMovePosition;
          break;
        case "pointermove":
          s = this.mouseMovePosition;
          break;
        case "pointerdown":
          s = this.mouseMovePosition;
          break;
        case "pointerup":
          s = this.mouseMovePosition;
          break;
        default:
          return null;
      }
      const n = this.getIntersects(s, this.scene.children);
      if (n.length === 0) return null;
      {
        const o = n[0].object;
        return o.intersect = { ...n[0] }, o;
      }
    }
  }
  // select
  select(e, t, s) {
    if (e) {
      let n = e;
      if (t === "ancestor") {
        const o = this;
        e.traverseAncestors(function(i) {
          i.parent === o.scene && (n = i);
        }), this.selectedObjects = [n];
      } else if (t === "multiple") {
        const o = this.selectedObjects.indexOf(n);
        o === -1 ? this.selectedObjects.push(n) : this.selectedObjects.splice(o, 1);
      } else
        this.selectedObjects = [n];
      if (this.selectedObject = n, s) {
        let i = {
          click: "onClick",
          dblclick: "onDoubleClick",
          wheel: "onWheel",
          contextmenu: "onContextMenu",
          pointermove: "onPointerMove",
          pointerdown: "onPointerDown",
          pointerup: "onPointerUp"
        }[s.type];
        i && (i = n[i], i && i(s, n)), n.isPointerOver || (n.onPointerEnter && n.onPointerEnter(s, n), n.onPointerOver && n.onPointerOver(s, n), n.isPointerOver = !0);
      }
    } else {
      if (s) {
        const n = this.selectedObject;
        n && n.isPointerOver && (n.onPointerLeave && n.onPointerLeave(s, n), n.onPointerOut && n.onPointerOut(s, n), n.isPointerOver = !1);
      }
      this.selectedObject = null, this.selectedObjects = [];
    }
    this.transformControls && (this.selectedObject ? this.transformControls.attach(this.selectedObject) : this.transformControls.detach());
  }
  // event handler
  handleEvent(e) {
    let t;
    e instanceof PointerEvent ? t = this.selectedObject : t = this.getIntersectObject(e), t ? t.name === "picker" ? this.select(t.userData.object, "picker", e) : e.ctrlKey ? this.select(t, "multiple", e) : e.altKey ? this.select(t, "ancestor", e) : this.select(t, "itsef", e) : this.select(null, "null", e);
  }
  // click event
  onClick(e) {
    this.dom.focus(), this.onMouseDown(e), this.onMouseUp(e);
  }
  onDoubleClick(e) {
    e.preventDefault(), this.mouseDoubleClickPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e);
  }
  // mouse event
  getMousePosition(e) {
    const t = this.dom.getBoundingClientRect();
    let s, n;
    return e.changedTouches ? (s = e.changedTouches[0].clientX, n = e.changedTouches[0].clientY) : (s = e.clientX, n = e.clientY), s = (s - t.left) / t.width * 2 - 1, n = -((n - t.top) / t.height) * 2 + 1, [s, n];
  }
  onMouseMove(e) {
    if (this.mouseMovePosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), this.outlinePass) {
      const t = this.selectedObject;
      this.outlinePass.selectedObjects = t ? [t] : [];
    }
  }
  onMouseDown(e) {
    this.mouseDowned = !0, e.preventDefault(), this.mouseDownPosition.fromArray(this.getMousePosition(e)), document.addEventListener("mouseup", (t) => this.onMouseUp(t), !1);
  }
  onMouseUp(e) {
    this.mouseDowned && (this.mouseDowned = !1, e.preventDefault(), this.mouseUpPosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), document.removeEventListener("mouseup", (t) => this.onMouseUp(t), !1));
  }
  // wheel event
  onWheel(e) {
    this.handleEvent(e);
  }
  // pointer event
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
  // keyboard event
  onKeyDown(e) {
    if (this.keyDownCallbacks.length > 0) {
      this.keyDownCallbacks.forEach((s) => s(e, this));
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
    const t = e.ctrlKey;
    if (!(t && e.keyCode === 90) && !(t && e.keyCode === 89))
      switch (e.keyCode) {
        case 8:
          e.preventDefault();
        // prevent browser back
        // do not use 'break'
        case 27:
          this.controls.enabled = !0;
          break;
        case 46:
          break;
        case 49:
          break;
        case 50:
          break;
        case 66:
          break;
        case 68:
          pr(this);
          break;
        case 79:
          if (this.animator && this.selectedObject) {
            const s = this.selectedObject.activeAction;
            s && (s.paused = !s.paused);
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
    }
  }
}
const pr = (r) => {
  console.log(r.scene);
}, Ge = {
  //==============================================================
  __vertexMain__: `
varying float vInstanceId;
vec2 getMergedUv( in vec2 uv, in vec4 uvRange ) {
    vec2 _uv = mod( uv, vec2(1.0) );
    float offset = 0.5 / float(512); // assume: TEXTURE_SIZE = 512
    float startU = uvRange.x + offset;
    float startV = uvRange.y - offset;
    float endU = uvRange.z - offset;
    float endV = uvRange.w + offset;
    _uv.x = _uv.x * (endU - startU) + startU;
    _uv.y = _uv.y * (startV - endV) + endV;
    return _uv;
}
#define vDisplacementMapUv    getMergedUv( vDisplacementMapUv, uvRange )
void main() {
    // add 0.5 to the value to avoid floating error that may cause flickering
    vInstanceId = getIndirectIndex(gl_DrawID) + 0.5;
`,
  //==============================================================
  __fragmentMain__: `
uniform highp sampler2D dataTexture;
varying float vInstanceId;
vec2 getMergedUv( in vec2 uv, in vec4 uvRange ) {
    vec2 _uv = mod( uv, vec2(1.0) );
    float offset = 0.5 / float(512); // assume: TEXTURE_SIZE = 512
    float startU = uvRange.x + offset;
    float startV = uvRange.y - offset;
    float endU = uvRange.z - offset;
    float endV = uvRange.w + offset;
    _uv.x = _uv.x * (endU - startU) + startU;
    _uv.y = _uv.y * (startV - endV) + endV;
    return _uv;
}
#define vUv                        getMergedUv( vUv, uvRange )
#define vDisplacementMapUv         getMergedUv( vDisplacementMapUv, uvRange )
#define vAlphaMapUv                getMergedUv( vAlphaMapUv, uvRange )
#define vAoMapUv                   getMergedUv( vAoMapUv, uvRange )
#define vEmissiveMapUv             getMergedUv( vEmissiveMapUv, uvRange )
#define vLightMapUv                getMergedUv( vLightMapUv, uvRange )
#define vMapUv                     getMergedUv( vMapUv, uvRange )
#define vMetalnessMapUv            getMergedUv( vMetalnessMapUv, uvRange )
#define vNormalMapUv               getMergedUv( vNormalMapUv, uvRange )
#define vBumpMapUv                 getMergedUv( vBumpMapUv, uvRange )
#define vRoughnessMapUv            getMergedUv( vRoughnessMapUv, uvRange )
#define vTransmissionMapUv         getMergedUv( vTransmissionMapUv, uvRange )
#define vSpecularMapUv             getMergedUv( vSpecularMapUv, uvRange )
#define vAnisotropyMapUv           getMergedUv( vAnisotropyMapUv, uvRange )
#define vClearcoatMapUv            getMergedUv( vClearcoatMapUv, uvRange )
#define vClearcoatNormalMapUv      getMergedUv( vClearcoatNormalMapUv, uvRange )
#define vClearcoatRoughnessMapUv   getMergedUv( vClearcoatRoughnessMapUv, uvRange )
#define vIridescenceMapUv          getMergedUv( vIridescenceMapUv, uvRange )
#define vIridescenceThicknessMapUv getMergedUv( vIridescenceThicknessMapUv, uvRange )
#define vSheenColorMapUv           getMergedUv( vSheenColorMapUv, uvRange )
#define vSheenRoughnessMapUv       getMergedUv( vSheenRoughnessMapUv, uvRange )
#define vSpecularColorMapUv        getMergedUv( vSpecularColorMapUv, uvRange )
#define vSpecularIntensityMapUv    getMergedUv( vSpecularIntensityMapUv, uvRange )
#define vThicknessMapUv            getMergedUv( vThicknessMapUv, uvRange )
void main() {
`
  //==============================================================
}, nt = {
  // used in BatchedMaterial and MergedMaterial
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
}, Ae = (r) => {
  if (!r) return;
  const { threefy: e } = H();
  return Object.keys(r).filter((t) => t.match(/(map|matcap|Map)$/)).forEach((t) => {
    typeof r[t] == "string" && (r[t] = e.loadTexture(r[t]));
  }), r;
}, mr = (r) => {
  if (!r) return;
  const { threefy: e } = H();
  return Object.keys(r).forEach((t) => {
    const s = r[t].value;
    typeof s == "string" ? r[t].value = e.loadTexture(s) : Array.isArray(s) && s.length > 0 && s.forEach((n, o) => {
      typeof n == "string" && (r[t].value[o] = e.loadTexture(n));
    });
  }), r;
}, gr = (r) => {
  const e = /(attach|castShadow|receiveShadow|position|rotation|scale)/;
  return Object.keys(r).forEach((t) => {
    e.test(t) && delete r[t];
  }), r;
};
function vr(r) {
  let e = parseFloat(r.replace(/[^1-4]/g, "")) || 1, t;
  switch (e) {
    case 1:
      t = "r";
      break;
    case 2:
      t = "rg";
      break;
    case 3:
      t = "rgb";
      break;
    case 4:
      t = "rgba";
      break;
  }
  return { type: r, dim: e, comp: t };
}
class ot extends v.DataTexture {
  constructor(e, t) {
    const s = Object.entries(e).map(([c, d]) => ({
      // see properties above
      name: c,
      ...vr(d)
    })), n = s.length;
    let o = Math.sqrt(t * n);
    o = Math.ceil(o / n) * n, o = Math.max(o, n);
    const i = {};
    for (let c = 0, d = s.length; c < d; c++)
      i[s[c].name] = c;
    const a = [1, 1, 1, 1], h = [1, 1, 1, 1], f = [1, 1, 1, 1], u = [...a, ...h, ...f], l = new Float32Array(o * o * 4);
    for (let c = 0; c < t; c++)
      l.set(u, c * n * 4);
    super(l, o, o, v.RGBAFormat, v.FloatType), this.fields = s, this.fieldToIndex = i;
  }
  setValue(e, t, ...s) {
    const { fields: n, fieldToIndex: o, image: i } = this, a = n.length;
    if (!(t in o)) return;
    const h = o[t], u = n[h].dim, l = i.data, c = (e * a + h) * 4;
    u === 3 && s.length === 1 && (s = new v.Color(s[0]).toArray());
    for (let d = 0; d < u; d++)
      l[c + d] = s[d] || 0;
    this.needsUpdate = !0;
  }
  getGlsl(e = "vInstanceId", t = "dataTexture", s = "") {
    const { fields: n, image: o } = this, i = o.width, a = n.length;
    let h = `${s}int size = ${i};
${s}int j = int( ${e} ) * ${a};
${s}int x = j % size;
${s}int y = j / size;
`;
    for (let f = 0, u = n.length; f < u; f++) {
      const { name: l, type: c, comp: d } = n[f];
      h += `${s}${c} ${l} = ${c}( texelFetch( ${t}, ivec2( x + ${f}, y ), 0 ).${d} );
`;
    }
    return h;
  }
}
class yr extends v.MeshPhysicalMaterial {
  constructor(e, t) {
    Ae(t), super(t), this.isBatchedMaterial = !0;
    const s = { ...nt };
    delete s.uvRange, this.props = s;
    const n = new ot(s, e);
    this.dataTexture = n, this.onBeforeCompile = (o, i) => {
      Object.keys(s).length !== 0 && (o.uniforms.dataTexture = { value: n }, o.vertexShader = o.vertexShader.replace(
        "void main() {",
        `
                varying float vInstanceId;
                void main() {
                    // add 0.5 to the value to avoid floating error that may cause flickering
                    vInstanceId = getIndirectIndex(gl_DrawID) + 0.5;
                `
      ), o.fragmentShader = o.fragmentShader.replace(
        "void main() {",
        `
                uniform highp sampler2D dataTexture;
                varying float vInstanceId;
                void main() {
                    ${n.getGlsl()}
                `
      ));
    };
  }
  setValue(...e) {
    this.props[e[1]] && this.dataTexture.setValue(...e);
  }
  dispose() {
    super.dispose(), this.dataTexture.dispose();
  }
}
class it extends v.MeshPhysicalMaterial {
  constructor(e, t) {
    Ae(t), super(t), this.isMergedMaterial = !0;
    const s = { ...nt };
    this.props = s;
    const n = new ot(s, e);
    this.dataTexture = n, this.onBeforeCompile = (o, i) => {
      Object.keys(s).length !== 0 && (o.uniforms.dataTexture = { value: n }, o.vertexShader = o.vertexShader.replace(
        "void main() {",
        Ge.__vertexMain__
      ), o.fragmentShader = o.fragmentShader.replace(
        "void main() {",
        Ge.__fragmentMain__ + `${n.getGlsl()}`
      ));
    };
  }
  setValue(...e) {
    this.props[e[1]] && this.dataTexture.setValue(...e);
  }
  dispose() {
    super.dispose(), this.dataTexture.dispose();
  }
}
let xr = 0;
const wr = Date.now(), Fe = /* @__PURE__ */ new WeakMap(), je = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function xe(r) {
  const e = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function t(s, n) {
    let o = v.ShaderChunk[n];
    return o ? xe(o) : s;
  }
  return r.replace(e, t);
}
const se = Object.assign || function() {
  let r = arguments[0];
  for (let e = 1, t = arguments.length; e < t; e++) {
    let s = arguments[e];
    if (s)
      for (let n in s)
        s.hasOwnProperty(n) && (r[n] = s[n]);
  }
  return r;
};
function br(r) {
  return JSON.stringify(r, (e, t) => e === "uniforms" ? void 0 : t);
}
function Mr({ vertexShader: r, fragmentShader: e }, t, s) {
  let {
    vertexDefs: n,
    vertexTransform: o,
    vertexMainIntro: i,
    fragmentDefs: a,
    fragmentDiffuseTransform: h,
    fragmentMainIntro: f,
    fragmentColorTransform: u,
    timeUniform: l
  } = t;
  if (l) {
    const c = `
uniform float ${l};
`;
    n = (n || "") + c, a = (a || "") + c;
  }
  return (n || o || i) && (o && (r = xe(r), n = `
                ${n || ""}
                void vertexTransform_${s}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
                    ${o}
                }`, r = r.replace(/\b(position|normal|uv)\b/g, (c, d, m, p) => /\battribute\s+vec3\s+$/.test(p.substr(0, m)) ? d : `_${d}_${s}`), i = `
                vec3 _position_${s} = vec3(position);
                vec3 _normal_${s} = vec3(normal);
                vec2 _uv_${s} = vec2(uv);
                vertexTransform_${s}(_position_${s}, _normal_${s}, _uv_${s});
                ${i || ""}`), r = r.replace(
    je,
    `${n || ""}

$&

${i || ""}`
  )), (a || h || f || u) && (e = xe(e), h && (a = `
                ${a || ""}
                void fragmentDiffuseTransform_${s}(inout vec3 diffuse) {
                    ${h}
                }`, e = e.replace(/\b(diffuse)\b/g, (c, d, m, p) => /\buniform\s+vec3\s+$/.test(p.substr(0, m)) ? d : `_${d}_${s}`), f = `
                vec3 _diffuse_${s} = diffuse;
                fragmentDiffuseTransform_${s}(_diffuse_${s});
                ${f || ""}`), e = e.replace(
    je,
    `
            ${a || ""}
            void threejsMain_${s}() {
            ${f || ""}`
  ), e += `
            void main() {
                threejsMain_${s}();
                ${u || ""}
            }`), {
    vertexShader: r,
    fragmentShader: e
  };
}
const we = function(r, e) {
  const t = br(e);
  let s = Fe.get(r);
  if (s || (s = /* @__PURE__ */ Object.create(null), Fe.set(r, s)), s[t])
    return s[t].clone();
  const n = ++xr, o = `_derivedShaders${n}`, i = `_onBeforeCompile${n}`;
  let a, h;
  function f(c) {
    r.onBeforeCompile.call(this, c);
    const { vertex: d, fragment: m } = this[o] || (this[o] = { vertex: {}, fragment: {} });
    if (d.source !== c.vertexShader || m.source !== c.fragmentShader) {
      const p = Mr(c, e, n);
      d.source = c.vertexShader, d.result = p.vertexShader, m.source = c.fragmentShader, m.result = p.fragmentShader;
    }
    c.vertexShader = d.result, c.fragmentShader = m.result, se(c.uniforms, this.uniforms), e.timeUniform && (c.uniforms[e.timeUniform] = {
      get value() {
        return Date.now() - wr;
      }
    }), this[i] && this[i](c);
  }
  function u() {
    this._listeners = void 0;
  }
  u.prototype = Object.create(
    r,
    {
      constructor: { value: u },
      isDerivedMaterial: { value: !0 },
      baseMaterial: { value: r },
      onBeforeCompile: {
        get() {
          return f;
        },
        set(c) {
          this[i] = c;
        }
      },
      copy: {
        value: function(c) {
          return r.copy.call(this, c), !r.isShaderMaterial && !r.isDerivedMaterial && (this.extensions = c.extensions, this.defines = se({}, c.defines), this.uniforms = v.UniformsUtils.clone(c.uniforms)), this;
        }
      },
      getDepthMaterial: {
        value: function() {
          let c = this._depthMaterial;
          return c || (h || (h = we(
            r.isDerivedMaterial ? r.getDepthMaterial() : new v.MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
            e
          ), h.defines.IS_DEPTH_MATERIAL = ""), c = this._depthMaterial = h.clone()), c;
        }
      },
      getDistanceMaterial: {
        value: function() {
          let c = this._distanceMaterial;
          return c || (a || (a = we(
            r.isDerivedMaterial ? r.getDistanceMaterial() : new v.MeshDistanceMaterial(),
            e
          ), a.defines.IS_DISTANCE_MATERIAL = ""), c = this._distanceMaterial = a.clone()), c;
        }
      },
      dispose: {
        value() {
          const { _depthMaterial: c, _distanceMaterial: d } = this;
          c && c.dispose(), d && d.dispose(), r.dispose.call(this);
        }
      }
    }
  );
  const l = new u();
  return l.copy(r), l.uniforms = se(v.UniformsUtils.clone(r.uniforms || {}), e.uniforms), l.defines = se({}, r.defines, e.defines), l.defines.DERIVED_MATERIAL = n, l.extensions = se({}, r.extensions, e.extensions), s[t] = l, l.clone();
};
class at {
  constructor(e = "basic", t = {}) {
    const {
      extensions: s,
      defines: n,
      uniforms: o,
      vdeclare: i,
      vvertex: a,
      vmain: h,
      fdeclare: f,
      fdiffuse: u,
      fmain: l,
      fcolor: c,
      ...d
    } = t;
    let m = ut[e];
    m || (m = "MeshBasicMaterial");
    const p = Ae(gr(d)), g = new v[m](p), y = mr(o), x = {
      extensions: s,
      defines: n,
      uniforms: y,
      vertexDefs: i,
      vertexTransform: a,
      vertexMainIntro: h,
      fragmentDefs: f,
      fragmentDiffuseTransform: u,
      fragmentMainIntro: l,
      fragmentColorTransform: c
    };
    return this.isCustomMaterial = !0, this.type = "CustomMaterial", this.subType = m, we(g, x);
  }
}
const Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BatchedMaterial: yr,
  CustomMaterial: at,
  MergedMaterial: it
}, Symbol.toStringTag, { value: "Module" }));
class ct extends _t {
  constructor(e, t, s) {
    super();
    const n = s.width || window.innerWidth || 1, o = s.height || window.innerHeight || 1, i = s.vignetting || !1, a = s.shaderFocus || !1;
    this.scene = e, this.camera = t, this.raycaster = new pt(), this.mouse = new mt(), this.width = n, this.height = o, this.distance = 100;
    const h = ur, f = Oe.clone(h.uniforms);
    this.materialDepth = new Re(
      {
        uniforms: f,
        vertexShader: h.vertexShader,
        fragmentShader: h.fragmentShader
      }
    ), f.mNear.value = t.near, f.mFar.value = t.far, this.scene2 = new gt(), this.camera2 = new vt(n / -2, n / 2, o / 2, o / -2, -1e4, 1e4), this.camera2.position.z = 100, this.scene2.add(this.camera2), this.rtTextureDepth = new $e(n, o), this.rtTextureColor = new $e(n, o);
    const u = { rings: 3, samples: 4 }, l = dr, c = Oe.clone(l.uniforms);
    c.textureWidth.value = n, c.textureHeight.value = o, c.shaderFocus.value = a, c.fstop.value = 2.2, c.maxblur.value = 1, c.showFocus.value = !1, c.focalDepth.value = 2.8, c.manualdof.value = !1, c.vignetting.value = i, c.depthblur.value = !1, c.threshold.value = 0.5, c.gain.value = 2, c.bias.value = 0.5, c.fringe.value = 0.7, c.focalLength.value = 35, c.noise.value = !0, c.pentagon.value = !1, c.dithering.value = 1e-4, c.znear.value = t.near, c.zfar.value = t.far, t.setFocalLength(c.focalLength.value), this.materialBokeh = new Re(
      {
        uniforms: c,
        vertexShader: l.vertexShader,
        fragmentShader: l.fragmentShader,
        defines: {
          RINGS: u.rings,
          SAMPLES: u.samples
        }
      }
    ), c.tColor.value = this.rtTextureColor.texture, c.tDepth.value = this.rtTextureDepth.texture;
    const d = new yt(new xt(n, o), this.materialBokeh);
    d.position.z = -500, this.scene2.add(d);
  }
  render(e, t, s, n, o) {
    const i = this.scene, a = this.camera, h = this.raycaster, f = this.mouse, u = this.materialBokeh.uniforms, l = (m) => {
      var p = a.far, g = a.near;
      return -p * g / (m * (p - g) - p);
    }, c = (m) => Math.max(0, Math.min(1, m)), d = (m, p, g) => {
      var y = c((g - m) / (p - m));
      return y * y * (3 - 2 * y);
    };
    {
      const m = f.x * 0.5 + 0.5, p = f.y * 0.5 + 0.5;
      u.focusCoords.value.set(m, p);
    }
    {
      h.setFromCamera(f, a);
      const m = h.intersectObjects(i.children, !0), p = m.length > 0 ? m[0].distance : 1e3;
      this.distance += (p - this.distance) * 0.03;
      const g = d(a.near, a.far, this.distance), y = l(1 - g);
      u.focalDepth.value = y;
    }
    e.setRenderTarget(this.rtTextureColor), e.clear(), e.render(i, a), i.overrideMaterial = this.materialDepth, e.setRenderTarget(this.rtTextureDepth), e.clear(), e.render(i, a), i.overrideMaterial = null, this.renderToScreen ? (e.setRenderTarget(null), e.render(this.scene2, this.camera2)) : (e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene2, this.camera2));
  }
}
ct.prototype.isBokehPass = !0;
wt.prototype.addLevels = function(...r) {
  r.forEach((e) => Array.isArray(e) ? this.addLevel(...e) : this.addLevel(e));
};
te.prototype.blocker = null;
te.prototype.heroPlayer = {
  forward: !1,
  backward: !1,
  left: !1,
  right: !1,
  canJump: !1,
  jumpPower: 350,
  mass: 100,
  velocity: [0, 0, 0],
  direction: [0, 0, 0],
  viscosity: 10
  // resistive force to the motion of the object
};
te.prototype.update = function() {
};
te.prototype.onKeyDown = function(r) {
  const e = this.heroPlayer;
  switch (r.code) {
    case "ArrowUp":
    case "KeyW":
      e.forward = !0;
      break;
    case "ArrowLeft":
    case "KeyA":
      e.left = !0;
      break;
    case "ArrowDown":
    case "KeyS":
      e.backward = !0;
      break;
    case "ArrowRight":
    case "KeyD":
      e.right = !0;
      break;
    case "Space":
      e.canJump === !0 && (e.velocity[1] += e.jumpPower), e.canJump = !1;
      break;
  }
};
te.prototype.onKeyUp = function(r) {
  const e = this.heroPlayer;
  switch (r.code) {
    case "ArrowUp":
    case "KeyW":
      e.forward = !1;
      break;
    case "ArrowLeft":
    case "KeyA":
      e.left = !1;
      break;
    case "ArrowDown":
    case "KeyS":
      e.backward = !1;
      break;
    case "ArrowRight":
    case "KeyD":
      e.right = !1;
      break;
  }
};
te.prototype.animate = function(r, e, t) {
  if (this.isLocked === !0) {
    const s = this.heroPlayer, n = s.velocity, o = s.direction, i = this.getObject();
    t.ray.origin.copy(i.position), t.ray.origin.y -= 10;
    const h = t.intersectObjects(e.children, !1).length > 0;
    n[0] -= n[0] * s.viscosity * r, n[2] -= n[2] * s.viscosity * r, n[1] -= (n[1] * s.viscosity * 0.1 + 9.8 * s.mass) * r, o[2] = Number(s.forward) - Number(s.backward), o[0] = Number(s.right) - Number(s.left);
    let f = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
    f = f || 1, o[0] /= f, o[1] /= f, o[2] /= f, (s.forward || s.backward) && (n[2] -= o[2] * 400 * r), (s.left || s.right) && (n[0] -= o[0] * 400 * r), h === !0 && (n[1] = Math.max(0, n[1]), s.canJump = !0), this.moveRight(-n[0] * r), this.moveForward(-n[2] * r), i.position.y += n[1] * r, i.position.y < 10 && (n[1] = 0, i.position.y = 10, s.canJump = !0);
  }
};
Ee.prototype.onKeyDown = function(r) {
  switch (r.key) {
    case "q":
      this.setSpace(this.space === "local" ? "world" : "local");
      break;
    case "Shift":
      this.setTranslationSnap(1), this.setRotationSnap(15 * Math.PI / 180), this.setScaleSnap(0.25);
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
    // case 'c':
    //     const position = currentCamera.position.clone();
    //     currentCamera = currentCamera.isPerspectiveCamera ? cameraOrtho : cameraPersp;
    //     currentCamera.position.copy( position );
    //     orbit.object = currentCamera;
    //     this.camera = currentCamera;
    //     currentCamera.lookAt( orbit.target.x, orbit.target.y, orbit.target.z );
    //     onWindowResize();
    //     break;
    // case 'v':
    //     const randomFoV = Math.random() + 0.1;
    //     const randomZoom = Math.random() + 0.1;
    //     cameraPersp.fov = randomFoV * 160;
    //     cameraOrtho.bottom = - randomFoV * 500;
    //     cameraOrtho.top = randomFoV * 500;
    //     cameraPersp.zoom = randomZoom * 5;
    //     cameraOrtho.zoom = randomZoom * 5;
    //     onWindowResize();
    //     break;
    case "+":
    case "=":
      this.setSize(this.size + 0.1);
      break;
    case "-":
    case "_":
      this.setSize(Math.max(this.size - 0.1, 0.1));
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
};
Ee.prototype.onKeyUp = function(r) {
  switch (r.key) {
    case "Shift":
      this.setTranslationSnap(null), this.setRotationSnap(null), this.setScaleSnap(null);
      break;
  }
};
Le.prototype.isAnaglyphEffect = !0;
Le.prototype.type = "AnaglyphEffect";
Te.prototype.isAsciiEffect = !0;
Te.prototype.type = "AsciiEffect";
Ce.prototype.isOutlineEffect = !0;
Ce.prototype.type = "OutlineEffect";
Me.prototype.isParallaxBarrierEffect = !0;
Me.prototype.type = "ParallaxBarrierEffect";
be.prototype.isStereoEffect = !0;
be.prototype.type = "StereoEffect";
_e.prototype.isRoundedBoxGeometry = !0;
_e.prototype.type = "RoundedBoxGeometry";
ke.prototype.isConvexGeometry = !0;
ke.prototype.type = "ConvexGeometry";
Se.prototype.isDecalGeometry = !0;
Se.prototype.type = "DecalGeometry";
rt.prototype.isParametricGeometry = !0;
tt.prototype.isTextGeometry = !0;
const J = {
  // helpers
  // EdgesGeometry,
  // WireframeGeometry,
  // addons
  RoundedBoxGeometry: _e,
  ConvexGeometry: ke,
  DecalGeometry: Se,
  ParametricGeometry: rt,
  TextGeometry: tt,
  // Controls
  ArcballControls: jt,
  DragControls: Ft,
  FirstPersonControls: Gt,
  FlyControls: It,
  MapControls: Bt,
  OrbitControls: Ze,
  PointerLockControls: te,
  TrackballControls: Ut,
  TransformControls: Ee,
  // Pass
  RenderPass: ye,
  ShaderPass: $t,
  GlitchPass: Rt,
  GTAOPass: Ot,
  OutlinePass: et,
  UnrealBloomPass: Dt,
  BokehPass: ct,
  OutputPass: Qe,
  // Effect
  AnaglyphEffect: Le,
  AsciiEffect: Te,
  OutlineEffect: Ce,
  ParallaxBarrierEffect: Me,
  StereoEffect: be,
  // NURBS
  NURBSCurve: Pt,
  NURBSSurface: At
}, Cr = (r) => {
  if (r.isColor) return r;
  const e = typeof r;
  if (e === "number" || e === "string")
    return new v.Color(r);
  if (Array.isArray(r))
    return new v.Color(...r);
}, es = (r) => {
  if (r.isVector3) return r;
  const e = typeof r;
  return Array.isArray(r) ? new v.Vector3(...r) : e === "number" ? new v.Vector3().setScalar(r) : e === "string" ? new v.Vector3().setScalar(~~r) : e === "object" ? new v.Vector3(r.x, r.y, r.z) : void 0;
}, ue = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new v.Vector2(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 2)
      e.push(new v.Vector2(r[t], r[t + 1]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new v.Vector2(e.x, e.y)) : r;
}, ne = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new v.Vector3(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 3)
      e.push(new v.Vector3(r[t], r[t + 1], r[t + 2]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new v.Vector3(e.x, e.y, e.z)) : r;
}, ze = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new v.Vector4(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 4)
      e.push(new v.Vector4(r[t], r[t + 1], r[t + 2], r[t + 3]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new v.Vector4(e.x, e.y, e.z, e.w)) : r;
}, ve = [
  "color",
  "blendColor",
  "emissive",
  "specular",
  "sheenColor",
  "attenuationColor",
  "specularColor"
], lt = [
  "alphaMap",
  "anisotropyMap",
  "aoMap",
  "bumpMap",
  "clearcoatMap",
  "clearcoatNormalMap",
  "clearcoatRoughnessMap",
  "displacementMap",
  "emissiveMap",
  "envMap",
  "gradientMap",
  "iridescenceMap",
  "iridescenceThicknessMap",
  "lightMap",
  "map",
  "matcap",
  "metalnessMap",
  "normalMap",
  "roughnessMap",
  "sheenColorMap",
  "sheenRoughnessMap",
  "specularColorMap",
  "specularIntensityMap",
  "specularMap",
  "thicknessMap",
  "transmissionMap"
], ut = {
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
}, he = {
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
  // helpers
  edges: "EdgesGeometry",
  wireframe: "WireframeGeometry",
  // addons
  rounded: "RoundedBoxGeometry",
  convex: "ConvexGeometry",
  decal: "DecalGeometry",
  parametric: "ParametricGeometry",
  text: "TextGeometry"
};
let A = null;
const Tr = Lt(null), Lr = (r) => {
  if (!r) return;
  const { threefy: e } = H();
  return Object.keys(r).forEach((t) => {
    const s = r[t].value;
    typeof s == "string" ? r[t].value = e.loadTexture(s) : Array.isArray(s) && s.length > 0 && s.forEach((n, o) => {
      typeof n == "string" && (r[t].value[o] = e.loadTexture(n));
    });
  }), r;
}, oe = (r, e, t) => {
  const s = e.split("-"), n = s.length;
  s.reduce((o, i, a) => {
    if (a === n - 1)
      return Array.isArray(o) ? o : (Array.isArray(t) && typeof t[0] == "number" ? o[i] && typeof o[i] != "function" && o[i].fromArray(t) : o[i] && o[i].copy && t && (t.isVector2 || t.isVector3 || t.isVector4 || t.isColor || t.isMatrix3 || t.isMatrix4) ? o[i].copy(t) : o[i] = t, o[i]);
    if (a === n - 2) {
      let h = s[a + 1];
      return h = Number(h), !isNaN(h) && !Array.isArray(o[i]) && (o[i] = []), isNaN(h) ? o[i] || (o[i] = {}) : o[i][h] = t, o[i];
    } else
      o[i] || (o[i] = {});
    return o[i];
  }, r);
}, Y = (r, e) => {
  e && Object.keys(e).forEach((t) => {
    if (t === "attach" || r.isMaterial && /position|rotation|scale/.test(t) || ![t in r, t === "update", /-/.test(t), /^on/.test(t)].some(Boolean)) return;
    const n = e[t], o = typeof n;
    if (n != null && !(r.isBufferGeometry && t === "scale")) {
      if (typeof r[t] == "function" && o !== "function") {
        const i = Array.isArray(n) ? n : [n];
        r[t](...i);
        return;
      }
      if (o === "object")
        n.isObject3D || (r.isBatchedMesh && /geometry/.test(t) ? r.addGeometry(n) : r.isShaderMaterial && t === "uniforms" ? oe(r, t, Lr(n)) : oe(r, t, n)), r.isMaterial && n.isTexture && (r.needsUpdate = !0);
      else if (o === "function")
        r[t] = n, r[t].bind(r);
      else if (o === "number") {
        if (t === "scale") {
          r[t]?.isVector3 && r[t].fromArray([n, n, n]);
          return;
        }
        if (ve.includes(t)) {
          r[t] = new v.Color(n);
          return;
        }
        const i = t.split("-");
        if (ve.includes(i[0]) && "r g b".includes(i[1])) {
          r[i[0]][i[1]] = n;
          return;
        }
        if ("position rotation scale".includes(i[0]) && "x y z".includes(i[1])) {
          r.isObject3D && (r[i[0]][i[1]] = n);
          return;
        }
        oe(r, t, n);
      } else o === "string" ? ve.includes(t) ? r[t] = new v.Color(n) : lt.includes(t) ? (r[t] = A.loadTexture(n), t === "map" || t === "emissiveMap" ? r[t].colorSpace = v.SRGBColorSpace : t === "envMap" || t === "lightMap" ? r[t].colorSpace = v.LinearSRGBColorSpace : r[t].colorSpace = v.NoColorSpace, r.needsUpdate = !0) : oe(r, t, n) : o === "boolean" ? r[t] = n : oe(r, t, n);
    }
  });
}, fe = (r) => {
  if (r)
    if (typeof r.type == "function") {
      const e = r.type(r.props);
      return fe(e);
    } else if (typeof r.type == "symbol") {
      const e = Symbol.keyFor(r.type);
      if (e === "react.fragment")
        return /* @__PURE__ */ B.createElement("group", null, r.props.children);
      if (e === "react.suspense") {
        const t = r.props;
        return /* @__PURE__ */ B.createElement("group", { fallback: t.fallback }, t.fallback, t.children);
      } else
        return console.warn(`warning: ${e} not supported`, r), null;
    } else return typeof r.type == "object" ? typeof r.type.$$typeof == "symbol" && Symbol.keyFor(r.type.$$typeof) === "react.forward_ref" ? (console.warn("warning: react.forward_ref found..."), fe(r.type.render(r.props, r.props.ref))) : (console.warn("warning: unexpected cases occurred", r), null) : r;
}, Pe = (r, e, t) => {
  const s = { refs: [], elms: [] }, n = { refs: [], elms: [] }, { ref: o } = r;
  pe(() => {
    const u = (m) => {
      let p = m.map((g) => g.current);
      return p = p.flat(1 / 0), p = p.filter((g) => g != null), p;
    }, l = (m, p) => {
      p[m.attach] = m.current;
    }, c = {};
    s.refs.forEach((m) => l(m, c));
    const d = t(r, c);
    if (n.refs.length > 0) {
      const m = u(n.refs), p = [];
      m.forEach((g) => {
        if (g)
          if (g.isScene)
            A.setScene(g);
          else if (g.isCamera)
            A.setCamera(g);
          else if (g.type?.match(/(Helper)$/) || g.isTransformControls)
            A.sceneHelpers.add(g);
          else if (g.isFog || g.isFogExp2)
            A.scene.fog = g;
          else if (g.isPass)
            A.addPass(g);
          else if (g.type?.match(/(Effect)$/))
            A.setEffect(g);
          else if (g.type === "Group" && g.forCurvePath) {
            const y = g, x = new v.CurvePath();
            y.children.forEach((w) => {
              x.add(w.userData.curve);
            }), y.userData.path = x, p.push(g);
          } else
            p.push(g);
      }), p.forEach((g) => {
        g.isObject3D && d.add(g);
      });
    }
    if (o) {
      let m;
      /Geometry/i.test(e) && (m = "geometry"), /Material/i.test(e) && (m = "material"), o.current = d, o.attach = r.attach ? r.attach : m;
    }
  }, [s.refs, n.refs, o]);
  const { children: i } = r;
  let a = Array.isArray(i) ? i : [i];
  a = a.flat(1 / 0);
  const h = Et(), f = A.reactElements;
  for (let u = 0; u < a.length; u++) {
    if (!a[u]) continue;
    let l = fe(a[u]);
    if (!l) continue;
    typeof l.type == "symbol" && (l = fe(l));
    const c = `${h}-${l.type}-${u}`, d = l.props.ref ? l.props.ref : j(null), m = f[l.type];
    let p = !1;
    /Geometry/i.test(l.type) && (p = !0), /Material/i.test(l.type) && (p = !0), l.props.attach || p ? (s.refs.push(d), s.elms.push(/* @__PURE__ */ B.createElement(m, { ref: d, key: c, ...l.props }))) : (n.refs.push(d), n.elms.push(/* @__PURE__ */ B.createElement(m, { ref: d, key: c, ...l.props })));
  }
  return [s.elms, n.elms].flat();
};
function Er(r, e) {
  switch (e.type) {
    case "myAction":
      return r;
    default:
      return r;
  }
}
function Sr(r) {
  A || (A = new W(), A.init(), A.animate(), A.reactElements = {}, [
    // Math
    "Color",
    "Vector2",
    "Vector3",
    "Vector4",
    // Object3D
    "Scene",
    "Object3D",
    "Group",
    "Sprite",
    "Line",
    "LineLoop",
    "LineSegments",
    "Points",
    "Audio",
    "PositionalAudio",
    "LOD",
    // Fog
    "Fog",
    "FogExp2",
    // Lights
    "AmbientLight",
    "DirectionalLight",
    "HemisphereLight",
    "Light",
    "LightProbe",
    "PointLight",
    "RectAreaLight",
    "SpotLight",
    // Cameras
    "ArrayCamera",
    "Camera",
    "CubeCamera",
    "OrthographicCamera",
    "PerspectiveCamera",
    "StereoCamera",
    // BufferAttribute
    "BufferAttribute",
    "GLBufferAttribute",
    "InstancedBufferAttribute",
    "InstancedInterleavedBuffer",
    "InterleavedBuffer",
    "InterleavedBufferAttribute",
    // Geometries
    "BufferGeometry",
    "InstancedBufferGeometry",
    "BoxGeometry",
    "CapsuleGeometry",
    "CircleGeometry",
    "ConeGeometry",
    "CylinderGeometry",
    "DodecahedronGeometry",
    "EdgesGeometry",
    "ExtrudeGeometry",
    "IcosahedronGeometry",
    "LatheGeometry",
    "OctahedronGeometry",
    "PlaneGeometry",
    "PolyhedronGeometry",
    "RingGeometry",
    "ShapeGeometry",
    "SphereGeometry",
    "TetrahedronGeometry",
    "TorusGeometry",
    "TorusKnotGeometry",
    "TubeGeometry",
    "WireframeGeometry",
    // Materials
    "LineBasicMaterial",
    "LineDashedMaterial",
    "MeshBasicMaterial",
    "MeshDepthMaterial",
    "MeshDistanceMaterial",
    "MeshLambertMaterial",
    "MeshMatcapMaterial",
    "MeshNormalMaterial",
    "MeshPhongMaterial",
    "MeshPhysicalMaterial",
    "MeshStandardMaterial",
    "MeshToonMaterial",
    "PointsMaterial",
    "RawShaderMaterial",
    "ShaderMaterial",
    "ShadowMaterial",
    "SpriteMaterial",
    // Mesh
    "BatchedMesh",
    "InstancedMesh",
    "Mesh",
    "SkinnedMesh",
    // Textures
    "CanvasTexture",
    "CompressedTexture",
    "CompressedArrayTexture",
    "CubeTexture",
    "Data3DTexture",
    "DataArrayTexture",
    "DataTexture",
    "DepthTexture",
    "FramebufferTexture",
    "Texture",
    "VideoTexture",
    // Helpers
    "ArrowHelper",
    "AxesHelper",
    "BoxHelper",
    "Box3Helper",
    "CameraHelper",
    "DirectionalLightHelper",
    "GridHelper",
    "PolarGridHelper",
    "HemisphereLightHelper",
    "PlaneHelper",
    "PointLightHelper",
    "SkeletonHelper",
    "SpotLightHelper",
    // Controls(addons)
    "Controls",
    "ArcballControls",
    "DragControls",
    "FirstPersonControls",
    "FlyControls",
    "MapControls",
    "OrbitControls",
    "PointerLockControls",
    "TrackballControls",
    "TransformControls",
    // EffectComposer(addons)
    "RenderPass",
    "ShaderPass",
    "GlitchPass",
    "GTAOPass",
    "OutlinePass",
    "UnrealBloomPass",
    "BokehPass",
    "OutputPass",
    // Camera Effects(addons)
    "AnaglyphEffect",
    "AsciiEffect",
    "OutlineEffect",
    "ParallaxBarrierEffect",
    "StereoEffect",
    // Geometries(addons)
    "RoundedBoxGeometry",
    "ConvexGeometry",
    "DecalGeometry",
    "ParametricGeometry",
    "TextGeometry",
    // Non-three.js
    "Primitive",
    // Extension
    "Geometry",
    // <geometry type={'box'}/>
    "Material",
    // <material type={'basic'}/>
    "BatchedMaterial",
    // <batchedMaterial/>
    "CustomMaterial",
    // <customMaterial type={'basic'}/>
    "CurvePath"
    // <curvePath><curve/>...</curvePath> (cf: defined as THREE.Group())
  ].forEach((a) => kr(a)), _r(), Ar());
  const [e, t] = Tt(Er, A), s = { threefy: e, dispatch: t }, o = Pe(r, "ThreeProvider", (i, a) => A.scene);
  return /* @__PURE__ */ B.createElement(Tr, { value: s }, o.length > 0 && o);
}
function ts(r) {
  return Sr(r);
}
function H(r) {
  if (r === void 0) {
    const e = A;
    return {
      threefy: e,
      scene: e.scene,
      camera: e.camera,
      renderer: e.renderer,
      clock: e.clock,
      controls: e.controls,
      animator: e.animator,
      raycaster: e.raycaster,
      canvas: e.renderer.domElement,
      list: e.list,
      get: e.get.bind(e),
      set: e.set.bind(e)
    };
  } else
    return r(A);
}
function rs(r, e = []) {
  const t = j(null);
  return pe(() => {
    t.current && r(t.current, A.scene);
  }, [...e]), t;
}
function ss(r, e = []) {
  const t = j(r);
  return pe(() => {
    t.current = r;
  }, [r, ...e]), function(...s) {
    const n = t.current;
    return n(...s);
  };
}
function ns(r) {
  A.renderCallbacks.push(r);
}
function os(r) {
  A.keyDownCallbacks.push(r);
}
function is(r) {
  A.keyUpCallbacks.push(r);
}
const Ne = (r, e, t) => {
  const s = (o, i, a, h) => {
    const f = "is" + i;
    (Array.isArray(o) ? o : [o]).forEach((l) => {
      (l[f] === !0 || l.type === i) && (a ? a === l.name && h.push(l) : h.push(l)), Object.keys(l).forEach((c) => {
        const d = l[c];
        c !== "parent" && typeof d == "object" && d !== null && s(d, i, a, h);
      });
    });
  }, n = [];
  return s(r, e, t, n), n;
}, as = (r, e) => {
  const t = A.scene;
  if (e === void 0)
    return Ne(t, r);
  let s = Array.isArray(e) ? e : [e];
  if (r === "Object3D") {
    const i = (a) => a.split("/").pop();
    s = s.map((a) => i(a));
  }
  const n = Ne(t, r), o = [];
  return s.forEach((i) => {
    o.push(n.filter((a) => a.name === i));
  }), o.length === 1 ? o[0] : o;
}, cs = () => {
  const r = A;
  return {
    replay: () => r.replayAnimate(),
    pause: () => r.pauseAnimate(),
    flush: () => r.flushAnimate()
  };
}, kr = (r) => {
  const e = (s) => {
    const o = Pe(s, r, (i, a) => {
      const {
        ref: h = j(null),
        children: f,
        args: u,
        type: l,
        count: c,
        object: d,
        onLoad: m,
        fallback: p,
        ...g
      } = i;
      let y = Array.isArray(u) ? u : [];
      r === "InstancedMesh" && c && y.push(void 0, void 0, c);
      let x;
      if (r === "Primitive") {
        if (!d) throw new Error("create3DElement(): Primitives without 'object' are invalid!");
        if (m) {
          const w = ({ target: M }) => {
            M.removeEventListener("onLoad", w), m(M);
          };
          d.addEventListener("onLoad", w);
        }
        x = d;
      } else if (r === "Geometry") {
        if (h.current && h.current.dispose(), l.match(/(rounded|convex|decal|parametric|text)/))
          h.current = new J[he[l]](...y);
        else {
          const w = l === void 0 ? "buffer" : l;
          h.current = new v[he[w]](...y);
        }
        x = h.current;
      } else if (r === "Material") {
        const w = l === void 0 ? "basic" : l;
        x = h.current ? h.current : new v[ut[w]]();
      } else if (r === "BatchedMaterial")
        x = h.current ? h.current : new Ve[r](...y);
      else if (r === "CustomMaterial")
        x = h.current ? h.current : new Ve[r](l, g);
      else if (r === "Controls") {
        const w = (E, L) => {
          const k = A.camera, P = A.renderer, I = A.scene;
          switch (L.length = 0, E) {
            case "arcball":
              L.push(k, P.domElement, I);
              break;
            case "drag":
              L.push(I.children, k, P.domElement);
              break;
            case "pointerLock":
              L.push(k, document.body);
              break;
            case "firstPerson":
            case "fly":
            case "map":
            case "orbit":
            case "trackball":
            case "transform":
              L.push(k, P.domElement);
              break;
          }
        }, M = (E, L) => {
          const {
            movementSpeed: k = 10,
            lookSpeed: P = 0.05,
            rollSpeed: I = 0.2,
            enableDamping: V = !0,
            dampingFactor: q = 0.075,
            rotateSpeed: X = 5
          } = i;
          switch (E) {
            case "firstPerson":
              L.movementSpeed = k, L.lookSpeed = P;
              break;
            case "fly":
              L.movementSpeed = k, L.rollSpeed = I;
              break;
            case "map":
              L.enableDamping = V;
              break;
            case "orbit":
              L.enableDamping = !0, L.dampingFactor = q;
              break;
            case "trackball":
              L.rotateSpeed = X;
              break;
          }
        };
        y.length === 0 && w(l, y), M(l, g);
        const T = l[0].toUpperCase() + l.slice(1) + "Controls";
        x = h.current ? h.current : new J[T](...y), A.setControls(x);
      } else r.match(/(Controls)$/) ? (x = h.current ? h.current : new J[r](...y), A.setControls(x)) : r.match(/(Pass)$/) ? x = h.current ? h.current : new J[r](...y) : r.match(/(Effect)$/) ? x = h.current ? h.current : new J[r](...y) : r.match(/(Geometry)$/) ? (h.current && h.current.dispose(), h.current = new v[r](...y), x = h.current) : r === "CurvePath" ? (x = h.current ? h.current : new v.Group(...y), x.forCurvePath = !0) : x = h.current ? h.current : new v[r](...y);
      if (Y(x, a), Y(x, g), r === "Group" && p) {
        const w = f.flat(1).map((E) => E.props.url !== void 0), M = [], T = ({ target: E }) => {
          const L = E;
          L.removeEventListener("added", T);
          let k = !1;
          L.children.forEach((P, I) => {
            if (w[I]) {
              const V = ({ target: q }) => {
                const X = q;
                X.removeEventListener("onLoad", V), k || (I === 0 ? k = !0 : (X.visible = !1, M.push(X))), k && M.forEach((ae) => ae.visible = !0);
              };
              P.addEventListener("onLoad", V);
            } else
              k || (I === 0 ? (k = !0, M.forEach((V) => V.visible = !0)) : (P.visible = !1, M.push(P)));
          });
        };
        x.addEventListener("added", T);
      }
      return x;
    });
    return /* @__PURE__ */ B.createElement(B.Fragment, null, o.length > 0 && o);
  }, t = r === "LOD" ? "lod" : `${r[0].toLowerCase()}${r.slice(1)}`;
  A.reactElements[t] = e;
}, _r = () => {
  const r = [
    "box",
    "capsule",
    "circle",
    "cone",
    "cylinder",
    "dodecahedron",
    "extrude",
    "icosahedron",
    "lathe",
    "octahedron",
    "plane",
    "polyhedron",
    "ring",
    "shape",
    "sphere",
    "tetrahedron",
    "torus",
    "torusKnot",
    "tube",
    // helpers
    "edges",
    "wireframe",
    // addons
    "rounded",
    "convex",
    "decal",
    "parametric",
    "text",
    // curves
    "lineCurve",
    "ellipseCurve",
    "arcCurve",
    "catmullRom3",
    "splineCurve",
    "bezierCurve",
    "nurbsCurve",
    "curve",
    // surfaces
    "nurbsSurface"
  ], e = (s, n, o) => {
    let { divisions: i, dim: a, order: h } = o, f;
    if (s === "lineCurve")
      i = i === void 0 ? 1 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n = ne(n), f = new v.LineCurve3(...n)), (a === 2 || a === "2") && (n = ue(n), f = new v.LineCurve(...n));
    else if (s === "ellipseCurve" || s === "arcCurve")
      i = i === void 0 ? 5 : i, f = new v.EllipseCurve(...n);
    else if (s === "catmullRom3")
      i = i === void 0 ? 5 : i, Array.isArray(n[0]) ? n[0] = ne(n[0]) : n = [ne(n)], f = new v.CatmullRomCurve3(...n);
    else if (s === "splineCurve")
      i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n[0] = ne(n[0]), f = new v.CatmullRomCurve3(...n)), (a === 2 || a === "2") && (Array.isArray(n[0]) ? n[0] = ue(n[0]) : n = [ue(n)], f = new v.SplineCurve(...n));
    else if (s === "bezierCurve")
      i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, h = h === void 0 ? 2 : h, (a === 3 || a === "3") && (n = ne(n), f = h === 3 || h === "cubic" ? new v.CubicBezierCurve3(...n) : new v.QuadraticBezierCurve3(...n)), (a === 2 || a === "2") && (n = ue(n), f = h === 3 || h === "cubic" ? new v.CubicBezierCurve(...n) : new v.QuadraticBezierCurve(...n));
    else if (s === "nurbsCurve") {
      i = i === void 0 ? 5 : i;
      let {
        degree: c,
        // degree
        knots: d,
        // knot vector
        controlPoints: m
        // controlPoints = [ Vector4, ... ] or [ [x,y,z,w], ... ]
      } = o;
      n.length > 0 && ([c, d, m] = n), m = ze(m), f = new J.NURBSCurve(c, d, m);
    }
    const u = f.getPoints(i);
    return [new v.BufferGeometry().setFromPoints(u), f];
  }, t = (s, n, o) => {
    if (s === "nurbsSurface") {
      let {
        slices: i = 8,
        stacks: a = 8,
        degree1: h,
        degree2: f,
        // u-degree, v-degree
        knots1: u,
        knots2: l,
        // u-knot,   v-knot
        controlPoints: c
        // controlPoints[u][v].xyzw where v = first, u = later
      } = o;
      n.length > 0 && ([h, f, u, l, c] = n);
      const d = [], m = u.length - h - 1;
      for (let x = 0; x < m; x++)
        d.push(ze(c[x]));
      const p = new J.NURBSSurface(h, f, u, l, d), g = (x, w, M) => p.getPoint(x, w, M);
      return [new J.ParametricGeometry(g, i, a), p];
    } else return [];
  };
  r.forEach((s) => {
    const n = (o) => {
      const a = Pe(o, s, (h, f) => {
        let {
          ref: u = j(null),
          children: l,
          args: c,
          type: d,
          ...m
        } = h, p = !1;
        if (u.current) {
          const y = u.current.geometry;
          p = !y || y.isRoundedBoxGeometry || y.isConvexGeometry || y.isDecalGeometry || y.isParametricGeometry || y.isTextGeometry;
        }
        let g;
        if (u.current && !p)
          g = u.current, Y(g.geometry, c), Y(g.material, m);
        else {
          let y = Array.isArray(c) ? c : [], x, w, M;
          if (s.match(/(rounded|convex|decal|parametric|text)/))
            x = new J[he[s]](...y);
          else if (s.match(/(lineCurve|ellipseCurve|arcCurve|catmullRom3|splineCurve|bezierCurve|nurbsCurve)/))
            [x, w] = e(s, y, m);
          else if (s === "curve") {
            const P = d === "catmullRom3" ? d : d + "Curve";
            d = m.linetype === "dashed" ? "dashed" : "line", [x, w] = e(P, y, m);
          } else s === "nurbsSurface" ? [x, M] = t(s, y, m) : x = new v[he[s]](...y);
          let T, E, L, k;
          if (d === void 0 ? T = "basic" : [T, E] = d.split("-"), E)
            k = new at(E, m), L = "Mesh";
          else {
            let P;
            switch (T) {
              case "points":
                P = "PointsMaterial", L = "Points";
                break;
              case "line":
                P = "LineBasicMaterial", L = "Line";
                break;
              case "dashed":
                P = "LineDashedMaterial", L = "Line";
                break;
              case "rawShader":
                P = "RawShaderMaterial", L = "Mesh";
                break;
              case "shader":
                P = "ShaderMaterial", L = "Mesh";
                break;
              case "shadow":
                P = "ShadowMaterial", L = "Mesh";
                break;
              case "sprite":
                P = "SpriteMaterial", L = "Sprite";
                break;
              default:
                P = d || "basic", P = "Mesh" + P[0].toUpperCase() + P.slice(1) + "Material", L = "Mesh";
                break;
            }
            k = new v[P](), Y(k, m);
          }
          g = new v[L](x, k), T === "dashed" && g.computeLineDistances(), w && (g.userData.curve = w), M && (g.userData.surface = M);
        }
        return Y(g, f), Y(g, m), g;
      });
      return /* @__PURE__ */ B.createElement(B.Fragment, null, a.length > 0 && a);
    };
    A.reactElements[s] = n;
  });
}, Ar = () => {
  const r = (i) => {
    const {
      url: a,
      texture: h,
      color: f,
      onLoad: u
    } = i, l = a || h || f || 1644825;
    A.createBackground(l, u);
  };
  A.reactElements.background = r;
  const e = (i) => {
    const {
      ref: a = j(null),
      color: h = 16777215,
      intensity: f = 1,
      keyLightPos: u = [-2, -1, 3],
      fillLightPos: l = [2, 4, 4],
      backLightPos: c = [1, 4, -2],
      hemisphereLightOn: d = !0,
      ...m
    } = i;
    let p;
    typeof h == "number" ? p = h : h.isColor ? p = h.getHex() : Array.isArray(h) ? p = new v.Color().fromArray(h).getHex() : typeof h == "string" && (p = new v.Color(h).getHex());
    const g = A.reactElements.group;
    return /* @__PURE__ */ B.createElement(g, { ref: a, name: "threePointLighting", ...m }, /* @__PURE__ */ B.createElement("directionalLight", { args: [p, f * 0.75 * Math.PI], position: u }), /* @__PURE__ */ B.createElement("directionalLight", { args: [p, f * 0.375 * Math.PI], position: l }), /* @__PURE__ */ B.createElement("directionalLight", { args: [p, f * 0.5 * Math.PI], position: c }), d && /* @__PURE__ */ B.createElement("hemisphereLight", { args: [8175615, 16770492, 0.2 * Math.PI], position: [0, 1, 0] }));
  };
  A.reactElements.threePointLighting = e;
  const t = (i) => {
    const {
      ref: a = j(null),
      children: h,
      position: f = [0, 100, 0],
      color: u = 16777215,
      intensity: l = 1,
      ...c
    } = i, d = f, m = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]), p = -m, g = m, y = m, x = -m, w = m * 0.1, M = m * 2, T = A.reactElements.directionalLight;
    return /* @__PURE__ */ B.createElement(
      T,
      {
        ref: a,
        position: f,
        args: [u, l],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-left": p,
        "shadow-camera-right": g,
        "shadow-camera-top": y,
        "shadow-camera-bottom": x,
        "shadow-camera-near": w,
        "shadow-camera-far": M,
        castShadow: !0,
        ...c
      }
    );
  };
  A.reactElements.shadowDirectionalLight = t;
  const s = (i) => {
    const {
      ref: a = j(null),
      children: h,
      position: f = [0, 100, 0],
      color: u = 16777215,
      intensity: l = 200,
      distance: c = 0,
      angle: d = Math.PI / 6,
      penumbra: m = 1,
      decay: p = 1.2,
      ...g
    } = i, y = f, x = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]), w = x * 0.1, M = x * 2, T = A.reactElements.spotLight;
    return /* @__PURE__ */ B.createElement(
      T,
      {
        ref: a,
        position: f,
        args: [u, l, c, d, m, p],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-near": w,
        "shadow-camera-far": M,
        "shadow-focus": 1,
        castShadow: !0,
        ...g
      }
    );
  };
  A.reactElements.shadowSpotLight = s;
  const n = (i) => {
    const {
      ref: a = j(null),
      children: h,
      position: f = [0, 100, 0],
      color: u = 16777215,
      intensity: l = 200,
      distance: c = 0,
      decay: d = 1.2,
      ...m
    } = i, p = f, g = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]), y = g * 0.1, x = g * 2, w = A.reactElements.pointLight;
    return /* @__PURE__ */ B.createElement(
      w,
      {
        ref: a,
        position: f,
        args: [u, l, c, d],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-near": y,
        "shadow-camera-far": x,
        castShadow: !0,
        ...m
      }
    );
  };
  A.reactElements.shadowPointLight = n;
  const o = (i) => {
    const {
      ref: a = j(null),
      width: h = 100,
      depth: f = h,
      type: u = "shadow",
      color: l = 0,
      opacity: c = 0.5,
      ...d
    } = i, m = A.reactElements.plane;
    return /* @__PURE__ */ B.createElement(
      m,
      {
        ref: a,
        receiveShadow: !0,
        "rotation-x": Math.PI / -2,
        args: [h, f],
        type: u,
        color: l,
        opacity: c,
        ...d
      }
    );
  };
  A.reactElements.shadowPlaneReceiver = o;
};
class Pr {
  parse(e) {
    let t = "";
    function s(n) {
      let o, i = "", a = "";
      const h = ".png", f = Array.isArray(n.material) ? n.material : [n.material];
      for (let u = 0, l = f.length; u < l; u++) {
        let c = function(d, m) {
          if (d.isDataTexture === !0)
            return console.error("saveTexture: DataTexture not supported.", d), !1;
          var p = document.createElement("canvas"), g = p.getContext("2d");
          p.width = d.image.width, p.height = d.image.height, g.drawImage(d.image, 0, 0);
          var y = p.toDataURL(), x = document.createElement("a");
          return document.body.appendChild(x), x.download = m, x.href = y, x.click(), document.body.removeChild(x), !0;
        };
        if (o = f[u], i = o.name !== "" ? o.name : `material${o.id}`, t += `newmtl ${i}
`, o.color) {
          let d = o.color;
          t += `Kd ${d.r} ${d.g} ${d.b}
`;
        }
        if (o.specular) {
          let d = o.specular;
          t += `Ks ${d.r} ${d.g} ${d.b}
`;
        }
        if (o.emissive) {
          let d = o.emissive;
          t += `Ke ${d.r} ${d.g} ${d.b}
`;
        }
        o.shininess && (t += `Ns ${o.shininess}
`), o.opacity && o.opacity < 1 && o.transparent === !0 && (t += `d ${o.opacity}
`, t += `Tr ${1 - o.opacity}
`), o.map && (a = i + "_diffuse" + h, c(o.map, a) && (t += "map_Kd " + a + `
`)), o.specularMap && (a = i + "_specular" + h, c(o.specularMap, a) && (t += "map_Ks " + a + `
`)), o.emissiveMap && (a = i + "_emissive" + h, c(o.emissiveMap, a) && (t += "map_Ke " + a + `
`)), o.normalMap && (a = i + "_normal" + h, c(o.normalMap, a) && (t += "norm " + a + `
`)), o.bumpMap && (a = i + "_bump" + h, c(o.bumpMap, a) && (t += "map_bump " + a + `
`)), o.alphaMap && (a = i + "_alpha" + h, c(o.alphaMap, a) && (t += "map_d " + a + `
`, o.transparent = !0));
      }
    }
    return e.traverse(function(n) {
      n.isMesh === !0 && s(n);
    }), t;
  }
}
class Dr {
  parse(e, t, s = {}) {
    if (s = Object.assign({
      version: "1.4.1",
      author: null,
      textureDirectory: "",
      upAxis: "Y_UP",
      unitName: null,
      unitMeter: null
    }, s), s.upAxis.match(/^[XYZ]_UP$/) === null)
      return console.error("ColladaExporter: Invalid upAxis: valid values are X_UP, Y_UP or Z_UP."), null;
    if (s.unitName !== null && s.unitMeter === null)
      return console.error("ColladaExporter: unitMeter needs to be specified if unitName is specified."), null;
    if (s.unitMeter !== null && s.unitName === null)
      return console.error("ColladaExporter: unitName needs to be specified if unitMeter is specified."), null;
    s.textureDirectory !== "" && (s.textureDirectory = `${s.textureDirectory}/`.replace(/\\/g, "/").replace(/\/+/g, "/"));
    const n = s.version;
    if (n !== "1.4.1" && n !== "1.5.0")
      return console.warn(`ColladaExporter : Version ${n} not supported for export. Only 1.4.1 and 1.5.0.`), null;
    function o(b) {
      const S = /^<\//, C = /(\?>$)|(\/>$)/, D = /<[^>]+>[^<]*<\/[^<]+>/, O = ($, R) => R > 0 ? $ + O($, R - 1) : "";
      let G = 0;
      return b.match(/(<[^>]+>[^<]+<\/[^<]+>)|(<[^>]+>)/g).map(($) => {
        !D.test($) && !C.test($) && S.test($) && G--;
        const R = `${O("  ", G)}${$}`;
        return !D.test($) && !C.test($) && !S.test($) && G++, R;
      }).join(`
`);
    }
    function i(b) {
      const S = atob(b), C = new Uint8Array(S.length);
      for (let D = 0, O = C.length; D < O; D++)
        C[D] = S.charCodeAt(D);
      return C;
    }
    let a, h;
    function f(b, S) {
      a = a || document.createElement("canvas"), h = h || a.getContext("2d"), a.width = b.width, a.height = b.height, h.drawImage(b, 0, 0);
      const C = a.toDataURL(`image/${S}`, 1).replace(/^data:image\/(png|jpg);base64,/, "");
      return i(C);
    }
    const u = ["getX", "getY", "getZ", "getW"], l = new le();
    function c(b, S = !1) {
      if (S) {
        const C = new Float32Array(b.count * 3);
        for (let D = 0, O = b.count; D < O; D++)
          l.fromBufferAttribute(b, D).convertLinearToSRGB(), C[3 * D + 0] = l.r, C[3 * D + 1] = l.g, C[3 * D + 2] = l.b;
        return C;
      } else if (b.isInterleavedBufferAttribute) {
        const C = new b.array.constructor(b.count * b.itemSize), D = b.itemSize;
        for (let O = 0, G = b.count; O < G; O++)
          for (let $ = 0; $ < D; $++)
            C[O * D + $] = b[u[$]](O);
        return C;
      } else
        return b.array;
    }
    function d(b, S, C) {
      return Array.isArray(b) ? b.slice(S, S + C) : new b.constructor(b.buffer, S * b.BYTES_PER_ELEMENT, C);
    }
    function m(b, S, C, D, O = !1) {
      const G = c(b, O);
      return `<source id="${S}"><float_array id="${S}-array" count="${G.length}">` + G.join(" ") + `</float_array><technique_common><accessor source="#${S}-array" count="${Math.floor(G.length / b.itemSize)}" stride="${b.itemSize}">` + C.map((R) => `<param name="${R}" type="${D}" />`).join("") + "</accessor></technique_common></source>";
    }
    let p;
    function g(b) {
      return b.updateMatrix(), p = p || new Mt(), p.copy(b.matrix), p.transpose(), `<matrix>${p.toArray().join(" ")}</matrix>`;
    }
    function y(b) {
      let S = T.get(b);
      if (!S) {
        const C = b;
        if (C.isBufferGeometry !== !0)
          throw new Error("THREE.ColladaExporter: Geometry is not of type THREE.BufferGeometry.");
        const D = `Mesh${I.length + 1}`, O = C.index ? C.index.count * C.index.itemSize : C.attributes.position.count, G = C.groups != null && C.groups.length !== 0 ? C.groups : [{ start: 0, count: O, materialIndex: 0 }], $ = b.name ? ` name="${b.name}"` : "";
        let R = `<geometry id="${D}"${$}><mesh>`;
        const z = `${D}-position`, Z = `${D}-vertices`;
        R += m(C.attributes.position, z, ["X", "Y", "Z"], "float"), R += `<vertices id="${Z}"><input semantic="POSITION" source="#${z}" /></vertices>`;
        let N = `<input semantic="VERTEX" source="#${Z}" offset="0" />`;
        if ("normal" in C.attributes) {
          const U = `${D}-normal`;
          R += m(C.attributes.normal, U, ["X", "Y", "Z"], "float"), N += `<input semantic="NORMAL" source="#${U}" offset="0" />`;
        }
        if ("uv" in C.attributes) {
          const U = `${D}-texcoord`;
          R += m(C.attributes.uv, U, ["S", "T"], "float"), N += `<input semantic="TEXCOORD" source="#${U}" offset="0" set="0" />`;
        }
        if ("uv2" in C.attributes) {
          const U = `${D}-texcoord2`;
          R += m(C.attributes.uv2, U, ["S", "T"], "float"), N += `<input semantic="TEXCOORD" source="#${U}" offset="0" set="1" />`;
        }
        if ("color" in C.attributes) {
          const U = `${D}-color`;
          R += m(C.attributes.color, U, ["R", "G", "B"], "float", !0), N += `<input semantic="COLOR" source="#${U}" offset="0" />`;
        }
        let Q = null;
        if (C.index)
          Q = c(C.index);
        else {
          Q = new Array(O);
          for (let U = 0, me = Q.length; U < me; U++) Q[U] = U;
        }
        for (let U = 0, me = G.length; U < me; U++) {
          const ge = G[U], De = d(Q, ge.start, ge.count), ft = De.length / 3;
          R += `<triangles material="MESH_MATERIAL_${ge.materialIndex}" count="${ft}">`, R += N, R += `<p>${De.join(" ")}</p>`, R += "</triangles>";
        }
        R += "</mesh></geometry>", I.push(R), S = { meshid: D, bufferGeometry: C }, T.set(b, S);
      }
      return S;
    }
    function x(b) {
      let S = L.get(b);
      if (S == null) {
        S = `image-${P.length + 1}`;
        const C = "png", D = b.name || S;
        let O = `<image id="${S}" name="${D}">`;
        n === "1.5.0" ? O += `<init_from><ref>${s.textureDirectory}${D}.${C}</ref></init_from>` : O += `<init_from>${s.textureDirectory}${D}.${C}</init_from>`, O += "</image>", P.push(O), L.set(b, S), k.push({
          directory: s.textureDirectory,
          name: D,
          ext: C,
          data: f(b.image, C),
          original: b
        });
      }
      return S;
    }
    function w(b) {
      let S = E.get(b);
      if (S == null) {
        S = `Mat${V.length + 1}`;
        let C = "phong";
        b.isMeshLambertMaterial === !0 ? C = "lambert" : b.isMeshBasicMaterial === !0 && (C = "constant", b.map !== null && console.warn("ColladaExporter: Texture maps not supported with MeshBasicMaterial."));
        const D = b.emissive ? b.emissive : new le(0, 0, 0), O = b.color ? b.color : new le(0, 0, 0), G = b.specular ? b.specular : new le(1, 1, 1), $ = b.shininess || 0, R = b.reflectivity || 0;
        D.convertLinearToSRGB(), G.convertLinearToSRGB(), O.convertLinearToSRGB();
        let z = "";
        b.transparent === !0 && (z += "<transparent>" + (b.map ? '<texture texture="diffuse-sampler"></texture>' : "<float>1</float>") + "</transparent>", b.opacity < 1 && (z += `<transparency><float>${b.opacity}</float></transparency>`));
        const Z = `<technique sid="common"><${C}><emission>` + (b.emissiveMap ? '<texture texture="emissive-sampler" texcoord="TEXCOORD" />' : `<color sid="emission">${D.r} ${D.g} ${D.b} 1</color>`) + "</emission>" + (C !== "constant" ? "<diffuse>" + (b.map ? '<texture texture="diffuse-sampler" texcoord="TEXCOORD" />' : `<color sid="diffuse">${O.r} ${O.g} ${O.b} 1</color>`) + "</diffuse>" : "") + (C !== "constant" ? "<bump>" + (b.normalMap ? '<texture texture="bump-sampler" texcoord="TEXCOORD" />' : "") + "</bump>" : "") + (C === "phong" ? `<specular><color sid="specular">${G.r} ${G.g} ${G.b} 1</color></specular><shininess>` + (b.specularMap ? '<texture texture="specular-sampler" texcoord="TEXCOORD" />' : `<float sid="shininess">${$}</float>`) + "</shininess>" : "") + `<reflective><color>${O.r} ${O.g} ${O.b} 1</color></reflective><reflectivity><float>${R}</float></reflectivity>` + z + `</${C}></technique>`, N = `<effect id="${S}-effect"><profile_COMMON>` + (b.map ? `<newparam sid="diffuse-surface"><surface type="2D"><init_from>${x(b.map)}</init_from></surface></newparam><newparam sid="diffuse-sampler"><sampler2D><source>diffuse-surface</source></sampler2D></newparam>` : "") + (b.specularMap ? `<newparam sid="specular-surface"><surface type="2D"><init_from>${x(b.specularMap)}</init_from></surface></newparam><newparam sid="specular-sampler"><sampler2D><source>specular-surface</source></sampler2D></newparam>` : "") + (b.emissiveMap ? `<newparam sid="emissive-surface"><surface type="2D"><init_from>${x(b.emissiveMap)}</init_from></surface></newparam><newparam sid="emissive-sampler"><sampler2D><source>emissive-surface</source></sampler2D></newparam>` : "") + (b.normalMap ? `<newparam sid="bump-surface"><surface type="2D"><init_from>${x(b.normalMap)}</init_from></surface></newparam><newparam sid="bump-sampler"><sampler2D><source>bump-surface</source></sampler2D></newparam>` : "") + Z + (b.side === Ct ? '<extra><technique profile="THREEJS"><double_sided sid="double_sided" type="int">1</double_sided></technique></extra>' : "") + "</profile_COMMON></effect>", Q = b.name ? ` name="${b.name}"` : "", U = `<material id="${S}"${Q}><instance_effect url="#${S}-effect" /></material>`;
        q.push(U), V.push(N), E.set(b, S);
      }
      return S;
    }
    function M(b) {
      let S = `<node name="${b.name}">`;
      if (S += g(b), b.isMesh === !0 && b.geometry !== null) {
        const C = y(b.geometry), D = C.meshid, O = C.bufferGeometry;
        let G = null, $;
        const R = b.material || new bt(), z = Array.isArray(R) ? R : [R];
        O.groups.length > z.length ? $ = new Array(O.groups.length) : $ = new Array(z.length), G = $.fill().map((Z, N) => w(z[N % z.length])), S += `<instance_geometry url="#${D}">` + (G.length > 0 ? "<bind_material><technique_common>" + G.map(
          (Z, N) => `<instance_material symbol="MESH_MATERIAL_${N}" target="#${Z}" ><bind_vertex_input semantic="TEXCOORD" input_semantic="TEXCOORD" input_set="0" /></instance_material>`
        ).join("") + "</technique_common></bind_material>" : "") + "</instance_geometry>";
      }
      return b.children.forEach((C) => S += M(C)), S += "</node>", S;
    }
    const T = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), k = [], P = [], I = [], V = [], q = [], X = M(e);
    let K = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><COLLADA xmlns="${n === "1.4.1" ? "http://www.collada.org/2005/11/COLLADASchema" : "https://www.khronos.org/collada/"}" version="${n}"><asset>` + ("<contributor><authoring_tool>three.js Collada Exporter</authoring_tool>" + (s.author !== null ? `<author>${s.author}</author>` : "") + `</contributor><created>${(/* @__PURE__ */ new Date()).toISOString()}</created><modified>${(/* @__PURE__ */ new Date()).toISOString()}</modified>` + (s.unitName !== null ? `<unit name="${s.unitName}" meter="${s.unitMeter}" />` : "") + `<up_axis>${s.upAxis}</up_axis>`) + "</asset>";
    K += `<library_images>${P.join("")}</library_images>`, K += `<library_effects>${V.join("")}</library_effects>`, K += `<library_materials>${q.join("")}</library_materials>`, K += `<library_geometries>${I.join("")}</library_geometries>`, K += `<library_visual_scenes><visual_scene id="Scene" name="scene">${X}</visual_scene></library_visual_scenes>`, K += '<scene><instance_visual_scene url="#Scene"/></scene>', K += "</COLLADA>";
    const ce = {
      data: o(K),
      textures: k
    };
    return typeof t == "function" && requestAnimationFrame(() => t(ce)), ce;
  }
}
const F = function() {
  const r = document.createElement("a");
  this.saveFile = function(e, t) {
    const s = e.split(".").pop().toLowerCase();
    switch (t || (t = useThree().scene), s) {
      case "json":
        n(t, e);
        break;
      case "obj":
        o(t, e);
        break;
      case "dae":
        i(t, e);
        break;
      case "glb":
        a(t, e);
        break;
      case "gltf":
        h(t, e);
        break;
      case "stl":
        f(t, e);
        break;
      case "ply":
        u(t, e);
        break;
      default:
        console.log('The file type "' + s + '" is not supported.');
        break;
    }
    function n(m, p = "object.json") {
      const g = (x, w) => typeof w == "number" ? parseFloat(w.toFixed(6)) : w;
      let y = m.toJSON();
      try {
        y = JSON.stringify(y, g, "	"), y = y.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, "$1");
      } catch {
        y = JSON.stringify(y);
      }
      l(y, p);
    }
    function o(m, p = "model.obj") {
      const g = p, y = g.replace(".obj", ""), x = y + ".mtl", { OBJExporter: w } = F.exporters, M = new w();
      l(M.parse(m, y), g);
      const { MTLExporter: T } = F.exporters, E = new T();
      l(E.parse(m), x);
    }
    function i(m, p = "scene.dae") {
      const { ColladaExporter: g } = F.exporters;
      new g().parse(m, function(x) {
        l(x.data, p);
      });
    }
    function a(m, p = "scene.glb") {
      const { GLTFExporter: g } = F.exporters, y = new g(), x = { binary: !0 };
      y.parse(
        m,
        function(w) {
          c(w, p);
        },
        function(w) {
          console.log("An error happened during parsing", w);
        },
        x
      );
    }
    function h(m, p = "scene.gltf") {
      const { GLTFExporter: g } = F.exporters, y = new g(), x = { binary: !1 };
      y.parse(
        m,
        function(w) {
          l(JSON.stringify(w, null, 2), p);
        },
        function(w) {
          console.log("An error happened during parsing", w);
        },
        x
      );
    }
    function f(m, p = "model.stl", g = !1) {
      const { STLExporter: y } = F.exporters, x = new y();
      g === !0 ? l(x.parse(m), p) : c(x.parse(m, { binary: !0 }), p);
    }
    function u(m, p = "model.ply") {
      const { PLYExporter: g } = F.exporters, y = new g();
      l(y.parse(m), p);
    }
    function l(m, p) {
      d(new Blob([m], { type: "text/plain" }), p);
    }
    function c(m, p) {
      d(new Blob([m], { type: "application/octet-stream" }), p);
    }
    function d(m, p) {
      r.href = URL.createObjectURL(m), r.download = p, r.dispatchEvent(new MouseEvent("click")), URL.revokeObjectURL(r.href);
    }
  };
};
F.exporters = {};
F.setExporter = (r) => {
  F.exporters = { ...F.exporters, ...r };
};
const Or = (r) => {
  switch (r.split(".").pop().toLowerCase()) {
    case "obj":
      F.setExporter({ OBJExporter: Nt, MTLExporter: Pr });
      break;
    case "dae":
      F.setExporter({ ColladaExporter: Dr });
      break;
    case "glb":
      F.setExporter({ GLTFExporter: Ue });
      break;
    case "gltf":
      F.setExporter({ GLTFExporter: Ue });
      break;
    case "stl":
      F.setExporter({ STLExporter: zt });
      break;
    case "ply":
      F.setExporter({ PLYExporter: Vt });
      break;
  }
}, ls = (r, e) => {
  const t = new F();
  Or(r), t.saveFile(r, e);
}, Rr = "https://app.unpkg.com/three@0.180.0/files/examples/jsm/libs/basis/", He = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/", _ = function() {
  const r = this;
  this.imageFiles = [], this.mtlFile = null, this.loadItemList = (u) => {
    Ke.getFilesFromItemList(u, (l, c) => {
      r.loadFiles(l, c);
    });
  }, this.loadFiles = async function(u, l) {
    if (u.length > 0) {
      l = l || Ke.createFilesMap(u);
      const c = n();
      c.setURLModifier((d) => {
        d = d.replace(/^(\.?\/)/, "");
        const m = l[d];
        return m ? (console.log("Loading", d), URL.createObjectURL(m)) : d;
      }), this.imageFiles = [], this.mtlFile = null;
      for (let d = 0; d < u.length; d++)
        u[d].name.match(/\.(png|jpg|gif)$/i) ? this.imageFiles.push(u[d]) : u[d].name.match(/\.(mtl)$/i) && (this.mtlFile = u[d]);
      for (let d = 0; d < u.length; d++)
        this.loadFile(u[d], c);
      this.mtlFile = null;
    }
  }, this.loadFile = function(u, l) {
    const c = u.name, d = c.split(".").pop().toLowerCase(), m = new FileReader();
    switch (m.addEventListener("progress", (p) => {
      const g = "(" + Math.floor(p.total / 1e3).toLocaleString() + " KB)", y = Math.floor(p.loaded / p.total * 100) + "%";
      console.log("Loading", c, g, y);
    }), d) {
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
        m.addEventListener("load", (y) => e(d, y, c, l, !1), !1), m.readAsArrayBuffer(u);
        break;
      case "dae":
      case "js":
      case "json":
      case "svg":
      case "wrl":
        m.addEventListener("load", (y) => e(d, y, c, l, !1), !1), m.readAsText(u);
        break;
      case "obj":
        let p = function(y, x = null) {
          m.addEventListener("load", async function(w) {
            const M = w.target.result, { OBJLoader: T } = _.loaders, E = new T(l);
            x && E.setMaterials(x);
            const L = E.parse(M);
            L.name = c, a(L);
          }, !1), m.readAsText(y);
        };
        (function(y, x) {
          if (x) {
            const w = new FileReader();
            w.addEventListener("load", async function(M) {
              const T = M.target.result, { MTLLoader: E } = _.loaders, L = new E(l).parse(T);
              L.preload(), console.log("Loading", x.name), p(y, L);
            }, !1), w.readAsText(x);
          } else
            p(y);
        })(u, this.mtlFile);
        break;
      case "zip":
        setTimeout(() => {
          m.addEventListener("load", (y) => t(y.target.result, c), !1), m.readAsArrayBuffer(u);
        }, 10);
        break;
      default:
        ["png", "jpg", "gif", "bmp", "tga", "mtl", "bin"].includes(d) || console.log("Unsupported 3D file format:", d);
        break;
    }
  };
  async function e(u, l, c, d, m = !1) {
    if (m) {
      const p = l;
      if (u === "dae" || u === "gltf" || u === "wrl") {
        const { strFromU8: g } = _.loaders;
        l = g(p);
      } else
        l = p.buffer;
    } else
      l = l.target.result;
    switch (u) {
      case "3ds": {
        const { TDSLoader: p } = _.loaders, y = new p(d).parse(l);
        y.name = c, a(y);
        break;
      }
      case "3mf": {
        const { ThreeMFLoader: p } = _.loaders, y = new p(d).parse(l);
        y.name = c, a(y);
        break;
      }
      case "amf": {
        const { AMFLoader: p } = _.loaders, y = new p(d).parse(l);
        y.name = c, a(y);
        break;
      }
      case "dae": {
        const { ColladaLoader: p } = _.loaders, y = new p(d).parse(l);
        y.scene.name = c, i(y.scene, y.animations), a(y.scene);
        break;
      }
      case "drc": {
        const { DRACOLoader: p } = _.loaders, g = new p(d);
        g.setDecoderPath(He), g.parse(l, function(y) {
          y.center(), o(y);
          let x;
          if (y.index !== null) {
            const w = new v.MeshStandardMaterial();
            x = new v.Mesh(y, w), x.name = c;
          } else {
            const w = new v.PointsMaterial({ size: 0.01 });
            y.hasAttribute("color") === !0 && (w.vertexColors = !0), x = new v.Points(y, w), x.name = c;
          }
          g.dispose(), a(x);
        });
        break;
      }
      case "fbx": {
        const { FBXLoader: p } = _.loaders, y = new p(d).parse(l);
        y.name = c, i(y, y.animations), a(y);
        break;
      }
      case "md2": {
        const { MD2Loader: p } = _.loaders, y = new p(d).parse(l);
        let x = null;
        if (m)
          for (let T in r.zip) {
            let E = T.split(".").pop().toLowerCase();
            if (E === "jpg" && (E = "jpeg"), ["png", "jpeg", "gif"].includes(E)) {
              const L = r.zip[T], k = "image/" + E, P = new Blob([L.buffer], { type: k }), I = URL.createObjectURL(P);
              x = new v.TextureLoader().load(I);
              break;
            }
          }
        else
          r.imageFiles.length === 1 && (x = new v.TextureLoader().load(URL.createObjectURL(r.imageFiles[0])));
        const w = new v.MeshStandardMaterial({ map: x }), M = new v.Mesh(y, w);
        M.mixer = new v.AnimationMixer(M), M.name = c, i(M, y.animations), a(M);
        break;
      }
      case "glb": {
        const p = await s(d);
        p.parse(l, "", function(g) {
          const y = g.scene;
          y.name = c, i(y, g.animations), a(y), p.dracoLoader.dispose(), p.ktx2Loader.dispose();
        });
        break;
      }
      case "gltf": {
        const p = await s(d);
        p.parse(l, "", function(g) {
          const y = g.scene;
          y.name = c, i(y, g.animations), a(y), p.dracoLoader.dispose(), p.ktx2Loader.dispose();
        });
        break;
      }
      case "js":
      case "json": {
        const p = p;
        if (p.indexOf("postMessage") !== -1) {
          const y = new Blob([p], { type: "text/javascript" }), x = URL.createObjectURL(y), w = new Worker(x);
          w.onmessage = function(M) {
            M.data.metadata = { version: 2 }, f(M.data);
          }, w.postMessage(Date.now());
          return;
        }
        let g;
        try {
          g = JSON.parse(p);
        } catch (y) {
          alert(y);
          return;
        }
        f(g);
        break;
      }
      case "kmz": {
        const { KMZLoader: p } = _.loaders, y = new p(d).parse(l);
        y.scene.name = c, a(y.scene);
        break;
      }
      case "mtl": {
        m && (r.bufferMTL = l);
        break;
      }
      case "obj": {
        m && (r.bufferOBJ = l);
        break;
      }
      case "ply": {
        const { PLYLoader: p } = _.loaders, g = new p(d).parse(l);
        o(g);
        const y = new v.MeshStandardMaterial(), x = new v.Mesh(g, y);
        x.name = c, a(x);
        break;
      }
      case "stl": {
        const { STLLoader: p } = _.loaders, g = new p(d).parse(l);
        o(g);
        const y = new v.MeshStandardMaterial({ vertexColors: !!g.hasColors }), x = new v.Mesh(g, y);
        x.name = c, a(x);
        break;
      }
      case "svg": {
        const { SVGLoader: p } = _.loaders, y = new p(d).parse(l).paths, x = new v.Group();
        x.scale.multiplyScalar(0.1), x.scale.y *= -1;
        for (let w = 0; w < y.length; w++) {
          const M = y[w], T = new v.MeshBasicMaterial({
            color: M.color,
            depthWrite: !1
          }), E = p.createShapes(M);
          for (let L = 0; L < E.length; L++) {
            const k = E[L], P = new v.ShapeGeometry(k), I = new v.Mesh(P, T);
            x.add(I);
          }
        }
        x.name = c, a(x);
        break;
      }
      case "vtk": {
        const { VTKLoader: p } = _.loaders, g = new p(d).parse(l);
        o(g);
        const y = new v.MeshStandardMaterial(), x = new v.Mesh(g, y);
        x.name = c, a(x);
        break;
      }
      case "vox": {
        const { VOXLoader: p, VOXMesh: g } = _.loaders, x = new p(d).parse(l).map((M) => new g(M)), w = new v.Group();
        w.add(...x), w.name = c, a(w);
        break;
      }
      case "wrl": {
        const { VRMLLoader: p } = _.loaders, g = new p(d).parse(l);
        g.name = c, a(g);
        break;
      }
      case "zip": {
        t(l, c);
        break;
      }
      default: {
        ["png", "jpg", "gif", "bmp", "tga", "mtl", "bin"].includes(u) || console.log("Unsupported 3D file format:", u);
        break;
      }
    }
  }
  async function t(u, l) {
    const { unzipSync: c, strFromU8: d } = _.loaders, m = c(new Uint8Array(u));
    r.zip = m;
    const p = n();
    p.setURLModifier((g) => {
      const y = m[g];
      if (y) {
        console.log("Loading", g);
        const x = new Blob([y.buffer], { type: "application/octet-stream" });
        return URL.createObjectURL(x);
      }
      return g;
    }), r.bufferOBJ = null, r.bufferMTL = null;
    for (let g in m) {
      const y = m[g], x = g.split(".").pop().toLowerCase();
      e(x, y, l, p, !0);
    }
    if (r.bufferMTL && r.bufferOBJ) {
      const { OBJLoader: g, MTLLoader: y } = _.loaders, x = new y(p).parse(d(r.bufferMTL)), w = new g(p).setMaterials(x).parse(d(r.bufferOBJ));
      w.name = l, a(w);
    }
    r.bufferOBJ = null, r.bufferMTL = null, r.zip = null;
  }
  async function s(u) {
    const { GLTFLoader: l, KTX2Loader: c, DRACOLoader: d, MeshoptDecoder: m } = _.loaders, p = new l(u);
    if (d) {
      const g = new d();
      g.setDecoderPath(He), p.setDRACOLoader(g);
    }
    if (c) {
      const g = new c();
      g.setTranscoderPath(Rr), g.detectSupport(H().threefy.renderer), p.setKTX2Loader(g);
    }
    return m && p.setMeshoptDecoder(m), Promise.resolve(p).then((g) => g);
  }
  function n() {
    const u = new v.LoadingManager();
    return u.onStart = () => {
      Ur();
    }, u.onProgress = (l, c, d) => {
      Ir(c, d);
    }, u.onLoad = () => {
      Br();
    }, u.onError = (l) => {
      Gr("There was an error loading " + l);
    }, u;
  }
  function o(u) {
    let l = !1;
    if (u.isDiscreteGeometry === !0) {
      const c = u.faces[0].vertexNormals;
      c && c.length === 3 && (l = !0);
    } else if (u.isBufferGeometry === !0) {
      const c = u.attributes.normal;
      c && c.count > 0 && (l = !0);
    }
    l === !1 && u.computeVertexNormals();
  }
  function i(u, l) {
    l && l.length > 0 && u.animations.push(...l);
  }
  function a(u) {
    const { threefy: l } = H(), c = l._cache.get(u.name);
    c[0] = u;
    for (let d = 1, m = c.length; d < m; d++)
      c[d].dispatchEvent({ type: u.name });
  }
  function h(u) {
    H().threefy.setScene(u);
  }
  function f(u) {
    switch (u.metadata === void 0 && (u.metadata = { type: "DiscreteGeometry" }), u.metadata.type === void 0 && (u.metadata.type = "DiscreteGeometry"), u.metadata.formatVersion !== void 0 && (u.metadata.version = u.metadata.formatVersion), u.metadata.type.toLowerCase()) {
      case "buffergeometry": {
        const c = new v.BufferGeometryLoader().parse(u), d = new v.Mesh(c);
        a(d);
        break;
      }
      case "discretegeometry": {
        console.error('ThreeLoader: "DiscreteGeometry" is no longer supported.');
        break;
      }
      case "object": {
        new v.ObjectLoader().parse(u, function(c) {
          c.isScene ? h(c) : c.name === "natureObject" ? c.children.forEach(function(d) {
            add(cloneObject(d));
          }) : a(c);
        });
        break;
      }
    }
  }
  this.openFiles = function() {
    const u = document.createElement("div");
    u.style.cssText = "position: absolute; left: 44%; top: 48%;";
    const l = document.createElement("input");
    l.id = "file-input", l.type = "file", l.multiple = !0, l.style.display = "none", l.addEventListener("change", () => {
      u.remove(), l.files && r.loadFiles(l.files);
    });
    const c = document.createElement("label");
    c.htmlFor = "file-input", c.style.cssText = "color: white; background-color: #3276c3; font-weight: bold; cursor: pointer; padding: 0.625rem; border-radius: 0.4rem;", c.addEventListener("mouseover", () => {
      c.style.backgroundColor = "#333";
    }), c.addEventListener("mouseleave", () => {
      c.style.backgroundColor = "#3276c3";
    }), c.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17" style="width:1em; height:1em; fill:currentColor; vertical-align: middle; margin-top: -0.25em; margin-right: 0.25em;">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg>
            <span>Choose files</span>
        `, u.appendChild(l), u.appendChild(c), document.body.append(u);
  }, this.dragDropFiles = function(u) {
    u || (u = H().threefy.dom), u.addEventListener("dragover", function(l) {
      l.preventDefault(), l.stopPropagation(), u.classList.add("dragover");
    }), u.addEventListener("dragleave", function(l) {
      l.preventDefault(), l.stopPropagation(), u.classList.remove("dragover");
    }), u.addEventListener("drop", function(l) {
      l.preventDefault(), l.dataTransfer.types[0] !== "text/plain" && (l.dataTransfer.items ? r.loadItemList(l.dataTransfer.items) : r.loadFiles(l.dataTransfer.files));
    }, !1);
  };
};
_.loaders = {};
_.setLoader = (r) => {
  _.loaders = { ..._.loaders, ...r };
};
const Ke = {
  createFilesMap: function(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
      const s = r[t];
      e[s.name] = s;
    }
    return e;
  },
  getFilesFromItemList: function(r, e) {
    let t = 0, s = 0;
    const n = [], o = {};
    function i() {
      t++, t === s && e(n, o);
    }
    function a(h) {
      h && (h.isDirectory ? h.createReader().readEntries(function(u) {
        for (let l = 0; l < u.length; l++)
          a(u[l]);
        i();
      }) : h.isFile && h.file(function(f) {
        n.push(f), o[h.fullPath.substr(1)] = f, i();
      }), s++);
    }
    for (let h = 0; h < r.length; h++)
      a(r[h].webkitGetAsEntry());
  }
}, $r = function(r, e) {
  const t = r.map(async (s) => {
    let o = await (await fetch(s)).blob(), i;
    return s.split(".").pop() === "enc" ? (o = null, i = s.replace(".enc", "")) : i = s, i = i.split("/").pop().split("?")[0], o ? new File([o], i) : null;
  });
  Promise.all(t).then((s) => {
    s = s.filter((o) => o), new _().loadFiles(s);
  });
}, Ur = function() {
  let r = document.getElementById("loading-spinner");
  if (r) {
    r.style.display = "";
    return;
  }
  r = document.createElement("div"), r.id = "loading-spinner", r.innerHTML = `
        <div style="position: absolute; left: 45%; top: 45%; width: 10%; vertical-align: middle; text-align: center;">
            <p style="color: white; font-size: 1.125rem; font-weight: 500;">Loading...</p>
            <div style="margin-top: 0.5rem">
                <svg aria-hidden="true" style="display: inline; width: 2.5rem; height: 2.5rem; margin-right: 0.5rem; color: rgb(229 231 235); animation: spin 1s linear infinite; fill: #2563eb;" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
            </div>
        </div>
    `, document.body.appendChild(r);
  const e = document.createElement("style");
  e.id = "spin-keyframes", e.innerHTML = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `, document.head.appendChild(e);
}, Br = function() {
  const r = document.getElementById("loading-spinner");
  r && (r.style.display = "none");
}, Ir = function(r, e) {
  const t = document.getElementById("loading-spinner");
  t && (t.style.width = `${r / e * 100 | 0}%`);
}, Gr = function(r) {
  console.warn(r);
}, Fr = (r) => new Promise(async (e) => {
  let s = await (await fetch(r)).blob();
  const n = r.split("/").pop().split("?")[0], o = new File([s], n), i = new FileReader();
  i.addEventListener("load", (a) => {
    const h = a.target.result, f = st(new Uint8Array(h));
    e(Object.keys(f));
  }, !1), i.readAsArrayBuffer(o);
}), dt = (r) => {
  switch (r.split(".").pop().toLowerCase()) {
    case "3ds":
      _.setLoader({ TDSLoader: cr });
      break;
    case "3mf":
      _.setLoader({ ThreeMFLoader: ar });
      break;
    case "amf":
      _.setLoader({ AMFLoader: ir });
      break;
    case "dae":
      _.setLoader({ ColladaLoader: or });
      break;
    case "drc":
      _.setLoader({ DRACOLoader: Be });
      break;
    case "fbx":
      _.setLoader({ FBXLoader: nr });
      break;
    case "md2":
      _.setLoader({ MD2Loader: sr });
      break;
    case "gltf":
    case "glb":
      _.setLoader({ GLTFLoader: rr, KTX2Loader: tr, DRACOLoader: Be, MeshoptDecoder: hr });
      break;
    case "kmz":
      _.setLoader({ KMZLoader: er });
      break;
    case "mtl":
    case "obj":
      _.setLoader({ OBJLoader: Qt, MTLLoader: Zt });
      break;
    case "ply":
      _.setLoader({ PLYLoader: qt });
      break;
    case "stl":
      _.setLoader({ STLLoader: Yt });
      break;
    case "svg":
      _.setLoader({ SVGLoader: Jt });
      break;
    case "vtk":
      _.setLoader({ VTKLoader: Xt });
      break;
    case "vox":
      _.setLoader({ VOXLoader: Wt, VOXMesh: Kt });
      break;
    case "wrl":
      _.setLoader({ VRMLLoader: Ht });
      break;
    case "zip":
      _.setLoader({ unzipSync: st, strFromU8: fr }), Fr(r).then((t) => {
        t.forEach((s) => dt(s));
      });
      break;
  }
}, ht = (r, e = "texture") => {
  r = Array.isArray(r) ? r : [r];
  const { threefy: t } = H();
  let s;
  e === "texture" && (s = new v.TextureLoader()), e === "audio" && (s = new v.AudioLoader());
  const n = (o) => {
    let i = t._cache.get(o);
    return i ? Promise.resolve(i) : new Promise((a) => {
      s.load(o, (h) => {
        t._cache.set(o, h), a(h);
      });
    });
  };
  return new Promise((o) => {
    Promise.all(r.map((i) => n(i))).then(
      (i) => o(i.length === 1 ? i[0] : i)
    );
  });
}, us = (r) => ht(r, "texture"), jr = (r) => ht(r, "audio"), Vr = (r) => {
  r = Array.isArray(r) ? r : [r];
  const { threefy: e } = H(), t = r.map((s) => e.loadTexture(s));
  return t.length === 1 ? t[0] : t;
}, ds = (r) => {
  if (r = Array.isArray(r) ? r : [r], /png|jpg|jpeg|gif|bmp/i.test(r[0].split(".").pop()))
    return Vr(r);
  if (/mp3|ogg|wav/i.test(r[0].split(".").pop()))
    return jr(r);
  r.forEach((o) => dt(o));
  const e = (o) => o.split("/").pop(), { threefy: t } = H(), s = [], n = ({ target: o }) => {
    const a = t._cache.get(o.name)[0], h = s.map((l) => l.name).indexOf(o.name);
    s[h] = a;
    const f = o;
    f.removeEventListener(f.name, n);
    const u = f.parent;
    u && (u.remove(f), u.add(a)), a._listeners = f._listeners, a.applyMatrix4(f.matrix), a.dispatchEvent({ type: "onLoad" });
  };
  return r.forEach((o, i) => {
    const a = e(o), h = new v.Object3D();
    h.name = a, t._cache.has(a) ? (t._cache.get(a).push(h), r[i] = null) : t._cache.set(a, [null, h]), h.addEventListener(a, n), s.push(h);
  }), r = r.filter((o) => o !== null), r.length > 0 && $r(r), s.length === 1 ? s[0] : s;
};
class ee {
  constructor(e, t, s, n) {
    this.x = e, this.y = t, this.width = s, this.height = n, this.finalX = e + s, this.finalY = t + n;
  }
  overlaps(e) {
    return this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.y + this.height > e.y;
  }
}
class zr {
  constructor(e, t = 512, s = 512, n = !0, o = 4096) {
    if (this.MAX_TEXTURE_SIZE = o, !e) return;
    this.texturesObj = e, this.textureNames = Object.keys(e), this.texWidth = t, this.texHeight = s;
    const i = {};
    this.textureNames.forEach((c) => {
      const d = e[c].uuid;
      i[d] || (i[d] = []), i[d].push(c);
    }), this.uuid2Names = i, this.canvas = document.createElement("canvas"), this.textureCount = this.textureNames.length, this.maxWidth = t, this.maxHeight = s, this.textureCache = {}, this.node = {}, this.node.rectangle = new ee(0, 0, this.maxWidth * this.textureCount, this.maxHeight * this.textureCount), this.textureOffsets = {}, this.allNodes = [], this.insert(this.node, this.findNextTexture()), this.ranges = {};
    const a = this.calculateImageSize();
    this.canvas.width = a.width, this.canvas.height = a.height;
    const h = this.canvas.getContext("2d");
    this.context = h;
    const [f, u] = [this.texWidth, this.texHeight], l = this.textureOffsets;
    Object.keys(l).forEach((c) => {
      const d = e[c], m = l[c].x, p = l[c].y;
      h.drawImage(d.image, m, p, f, u);
      const g = {};
      g.startU = m / a.width, g.endU = (m + f) / a.width, g.startV = p / a.height, g.endV = (p + u) / a.height, n && (g.startV = 1 - g.startV, g.endV = 1 - g.endV), this.ranges[c] = g;
    }), this.makeCanvasPowerOfTwo(), this.mergedTexture = new v.CanvasTexture(this.canvas), this.mergedTexture.wrapS = v.ClampToEdgeWrapping, this.mergedTexture.wrapT = v.ClampToEdgeWrapping, this.mergedTexture.minFilter = v.LinearMipmapLinearFilter, this.mergedTexture.magFilter = v.LinearFilter, this.mergedTexture.flipY = n;
  }
  isTextureAlreadyInserted(e) {
    const t = this, n = this.texturesObj[e].uuid, i = this.uuid2Names[n].find((a) => t.textureOffsets[a]);
    return i ? this.textureOffsets[i] : !1;
  }
  insert(e, t) {
    let n, [o, i] = [e, t];
    for (n = 0; n < 65536 && ([o, i] = this._insert(o, i), !!i); n++)
      ;
    n === 65536 && console.warn("TextureMerger.insert(): max iteration exceeded! try to increase the MAX_ITERS value");
  }
  _insert(e, t) {
    const s = this.textureOffsets, n = this.isTextureAlreadyInserted(t);
    if (n) {
      s[t] = n;
      const a = this.findNextTexture();
      return [e, a];
    }
    const [o, i] = [this.texWidth, this.texHeight];
    if (e.upperNode) {
      let a = this.maxWidth * this.textureCount + this.maxHeight * this.textureCount, h = 0, f = !1;
      const u = this.texturesObj;
      for (let l = 0; l < this.allNodes.length; l++) {
        const c = this.allNodes[l];
        if (!c.textureName) {
          s[t] = { x: c.rectangle.x, y: c.rectangle.y };
          const d = this.calculateImageSize(), m = d.width + d.height;
          if (m < a && d.width <= this.MAX_TEXTURE_SIZE && d.height <= this.MAX_TEXTURE_SIZE) {
            let p = !1;
            Object.keys(s).forEach((g) => {
              if (g === t) return;
              const y = c.rectangle, x = s[g].x, w = s[g].y, M = u[g].image, T = new ee(y.x, y.y, o, i), E = new ee(x, w, M.width, M.height);
              T.overlaps(E) && (p = !0);
            }), p || (a = m, h = this.allNodes[l], f = !0);
          }
          delete s[t];
        }
      }
      if (f) {
        if (s[t] = { x: h.rectangle.x, y: h.rectangle.y }, h.textureName = t, !h.children) {
          const c = {}, d = {};
          c.upperNode = h, d.upperNode = h, h.children = [c, d];
          const m = h.rectangle.x, p = h.rectangle.y, g = this.maxWidth * this.textureCount, y = this.maxHeight * this.textureCount;
          c.rectangle = new ee(m + o, p, g - (m + o), y - p), d.rectangle = new ee(m, p + i, g - m, y - (p + i)), this.allNodes.push(c), this.allNodes.push(d);
        }
        const l = this.findNextTexture();
        return [e, l];
      } else
        throw new Error("Error: Try to use smaller textures.");
    } else {
      const a = e.rectangle.width, h = e.rectangle.height;
      e.textureName = t;
      const f = {}, u = {};
      f.upperNode = e, u.upperNode = e, e.children = [f, u], f.rectangle = new ee(o, 0, a - o, i), u.rectangle = new ee(0, i, a, h - i), s[t] = { x: e.rectangle.x, y: e.rectangle.y };
      const l = e.children[0];
      this.allNodes = [e, f, u];
      const c = this.findNextTexture();
      return [l, c];
    }
  }
  makeCanvasPowerOfTwo(e) {
    let t = !1;
    e || (e = this.canvas, t = !0);
    const s = e.width, n = e.height, o = Math.pow(2, Math.round(Math.log(s) / Math.log(2))), i = Math.pow(2, Math.round(Math.log(n) / Math.log(2))), a = document.createElement("canvas");
    return a.width = o, a.height = i, a.getContext("2d").drawImage(e, 0, 0, o, i), t && (this.canvas = a), a;
  }
  calculateImageSize() {
    let e = 0, t = 0;
    const [s, n] = [this.texWidth, this.texHeight], o = this.textureOffsets;
    return Object.keys(o).forEach((i) => {
      const a = o[i].x, h = o[i].y;
      e = Math.max(a + s, e), t = Math.max(h + n, t);
    }), { width: e, height: t };
  }
  findNextTexture() {
    const e = this, t = this.textureNames.find((s) => !e.textureCache[s]);
    return t ? (this.textureCache[t] = !0, t) : null;
  }
  toSameLayout(e, t) {
    const s = this.calculateImageSize(), n = document.createElement("canvas");
    n.width = s.width, n.height = s.height;
    const o = n.getContext("2d"), [i, a] = [this.texWidth, this.texHeight], h = this.textureOffsets;
    Object.keys(h).forEach((l) => {
      const c = e[l], d = h[l].x, m = h[l].y;
      o.drawImage(c.image, d, m, i, a);
    });
    const f = this.makeCanvasPowerOfTwo(n), u = new v.CanvasTexture(f);
    return u.wrapS = v.ClampToEdgeWrapping, u.wrapT = v.ClampToEdgeWrapping, u.minFilter = v.LinearMipmapLinearFilter, u.magFilter = v.LinearFilter, u.flipY = t, u;
  }
}
const Nr = (r, e, t) => {
  const { diffuse: s, opacity: n } = t, { color: o, emissive: i, specular: a, shininess: h, metalness: f, roughness: u } = t, { ior: l, specularIntensity: c, specularColor: d } = t, { clearcoat: m, clearcoatRoughness: p, dispersion: g } = t, { iridescence: y, iridescenceIOR: x, iridescenceThicknessMinimum: w, iridescenceThicknessMaximum: M } = t, { sheenColor: T, sheenRoughness: E, anisotropyVector: L } = t;
  s ? r.setValue(e, "diffuse", ...s) : r.setValue(e, "diffuse", 1, 1, 1), n !== void 0 && r.setValue(e, "opacity", n), o && r.setValue(e, "diffuse", ...o), i && r.setValue(e, "emissive", ...i), a && r.setValue(e, "specular", ...a), h !== void 0 && r.setValue(e, "shininess", h), f !== void 0 && r.setValue(e, "metalness", f), u !== void 0 && r.setValue(e, "roughness", u), l !== void 0 && r.setValue(e, "ior", l), c !== void 0 && r.setValue(e, "specularIntensity", c), d && r.setValue(e, "specularColor", ...d), m !== void 0 && r.setValue(e, "clearcoat", m), p !== void 0 && r.setValue(e, "clearcoatRoughness", p), g !== void 0 && r.setValue(e, "dispersion", g), y !== void 0 && r.setValue(e, "iridescence", y), x !== void 0 && r.setValue(e, "iridescenceIOR", x), w !== void 0 && r.setValue(e, "iridescenceThicknessMinimum", w), M !== void 0 && r.setValue(e, "iridescenceThicknessMaximum", M), T && r.setValue(e, "sheenColor", ...T), E !== void 0 && r.setValue(e, "sheenRoughness", E), L && r.setValue(e, "anisotropyVector", ...L);
}, We = (r, e = 512, t = 512) => {
  if (!r || r.length === 0) return;
  let s = !0;
  const n = (w, M, T, E = "white") => {
    const L = w[`${M}-${T}`];
    if (L) return L;
    const k = document.createElement("canvas"), P = k.getContext("2d");
    k.width = M, k.height = T, P.fillStyle = E, P.fillRect(0, 0, M, T);
    const I = new v.CanvasTexture(k);
    return w[`${M}-${T}`] = I, I;
  }, o = (w, M, T, E) => {
    const L = w[M.uuid];
    if (L) return L;
    M.image || console.warn("resizeTexture(): image data not found in your texture"), s = M.flipY;
    const k = document.createElement("canvas"), P = k.getContext("2d");
    k.width = T, k.height = E, P.drawImage(M.image, 0, 0, T, E);
    const { mapping: I, wrapS: V, wrapT: q, magFilter: X, minFilter: ae, format: K, type: ce, anisotropy: b, colorSpace: S } = M, C = new v.CanvasTexture(k, I, V, q, X, ae, K, ce, b);
    return C.colorSpace = S, C.uuid = M.uuid, w[C.uuid] = C, C;
  }, i = {}, a = {}, h = {}, f = {};
  let u;
  const { renderer: l } = H(), c = l.capabilities.maxTextureSize;
  let d = [
    "alphaMap",
    "aoMap",
    "bumpMap",
    "displacementMap",
    "emissiveMap",
    "envMap",
    "lightMap",
    "map",
    "specularMap",
    "metalnessMap",
    "normalMap",
    "roughnessMap",
    "clearcoatMap",
    "clearcoatNormalMap",
    "clearcoatRoughnessMap",
    "transmissionMap"
  ];
  const m = r.map((w) => {
    const M = w.material;
    return Array.isArray(M) ? M[0] : M;
  });
  if (d.forEach((w) => {
    m.map((T) => !!T[w]).every((T) => T === !1) || (i[w] = {});
  }), d = Object.keys(i), d.length > 0) {
    d.forEach((T) => {
      m.forEach((E, L) => {
        const k = `${L}`, P = E[T];
        P ? i[T][k] = o(a, P, e, t) : i[T][k] = n(h, e, t);
      });
    });
    const w = i.map ? "map" : d.find((T) => !!i[T]), M = new zr(i[w], e, t, s, c);
    u = M.ranges, f[w] = M.mergedTexture, d.forEach((T) => {
      T !== w && (f[T] = M.toSameLayout(i[T], s)), T === "map" || T === "emissiveMap" ? f[T].colorSpace = v.SRGBColorSpace : T === "envMap" || T === "lightMap" ? f[T].colorSpace = v.LinearSRGBColorSpace : f[T].colorSpace = v.NoColorSpace;
    });
  }
  const p = r.length, g = new it(p, f);
  i.alphaMap && (g.alphaTest = 0.5);
  const y = new v.BatchedMesh(p, 6553600, 6553600 * 2, g), x = new v.Matrix4();
  for (let w = 0; w < p; w++) {
    const M = r[w], T = y.addInstance(y.addGeometry(M.geometry)), E = T;
    if (u && u[E]) {
      let k;
      s ? k = [u[E].startU, u[E].startV, u[E].endU, u[E].endV] : k = [u[E].startU, u[E].endV, u[E].endU, u[E].startV], g.setValue(w, "uvRange", ...k);
    }
    let L = M.matrixWorld;
    M.isSkinnedMesh && (L = x.multiplyMatrices(M.bindMatrixInverse, L)), y.setMatrixAt(T, L), Nr(g, T, m[w]);
  }
  return y;
}, Hr = (r, e = 512, t = 512) => new Promise((s) => {
  if (r.find((o) => {
    const i = o.material;
    return !!(i && Object.keys(i).find((h) => /(map|Map)$/.test(h) && i[h]));
  }))
    setTimeout(() => {
      const o = We(r, e, t);
      s(o);
    }, 500);
  else {
    const o = We(r, e, t);
    s(o);
  }
}), hs = (r) => {
  const {
    ref: e = j(null),
    children: t,
    ...s
  } = r;
  let n;
  const o = [];
  if (t.forEach((a) => {
    if (/geometry/i.test(a.type)) {
      const { args: h, type: f, ...u } = a.props, l = f !== void 0 ? `${f[0].toUpperCase()}${f.slice(1)}Geometry` : `${a.type[0].toUpperCase()}${a.type.slice(1)}`, c = h !== void 0 ? h : [], d = new v[l](...c);
      Y(d, u), o.push(d);
    } else if (/primitive/.test(a.type)) {
      const { object: h, ...f } = a.props;
      if (h?.isBufferGeometry) {
        const u = h;
        u && (Y(u, f), o.push(u));
      }
      h?.isMaterial && (n = h);
    } else /material/i.test(a.type) && (n = a);
  }), o.length === 0) return null;
  const i = o.length === 1 ? o[0] : lr.mergeGeometries(o, !1);
  return /* @__PURE__ */ B.createElement("mesh", { ref: e, ...s }, /* @__PURE__ */ B.createElement("primitive", { object: i, attach: "geometry" }), n);
}, fs = (r) => {
  const {
    ref: e = j(null),
    children: t,
    ...s
  } = r;
  return pe(() => {
    if (e.current) {
      const n = e.current;
      n.visible = !1, Hr(n.children).then((o) => {
        const i = n.parent;
        i.remove(n), i.add(o), e.current = o;
      });
    }
  }, [t]), t?.length > 0 ? /* @__PURE__ */ B.createElement("batchedMesh", { ref: e, ...s }, t) : null;
};
class Kr extends v.Sprite {
  constructor(e = "", t = {}) {
    const {
      textHeight: s = 0.5,
      textWidthScale: n = 1,
      textColor: o = "#ffffff",
      textAlign: i = "center",
      textBaseline: a = "middle",
      fontStyle: h = "normal",
      fontVariant: f = "normal",
      fontWeight: u = "normal",
      fontSize: l = "64px",
      fontFamily: c = "Karla, sans-serif"
    } = t, d = {
      string: e,
      height: s,
      widthScale: n,
      color: Cr(o),
      align: i,
      baseline: a
    }, m = {
      style: h,
      variant: f,
      weight: u,
      size: l,
      family: c
    };
    super(), this.isTextSprite = !0, this.type = "TextSprite", this.text = d, this.font = m, this.ctx = this.updateText(e);
  }
  copy(e) {
    return v.Sprite.prototype.copy.call(this, e), this.text = JSON.parse(JSON.stringify(e.text)), this.font = JSON.parse(JSON.stringify(e.font)), this.ctx.drawImage(e.ctx.canvas, 0, 0), this;
  }
  clone() {
    return new this.constructor(this.text.string).copy(this);
  }
  updateText(e) {
    const t = this.text, s = this.font;
    e !== void 0 && typeof e == "string" && (t.string = e);
    const n = document.createElement("canvas");
    n.height = parseInt(s.size), n.width = n.height * t.string.length;
    const o = n.getContext("2d");
    o.font = s.style + " " + s.variant + " " + s.weight + " " + s.size + " " + s.family, o.textAlign = t.align, o.textBaseline = t.baseline, o.fillStyle = "#" + t.color.getHexString(), o.fillText(t.string, n.width / 2, n.height / 2);
    const i = new v.CanvasTexture(o.canvas);
    this.material ? (this.material.map = i, this.material.map.needsUpdate = !0) : this.material = new v.SpriteMaterial({ color: 16777215, map: i });
    const a = t.height * t.string.length * t.widthScale;
    return this.scale.set(a, t.height, 1), o;
  }
}
const ps = (r) => {
  const {
    ref: e = j(null),
    string: t = "",
    // text string
    height: s = 0.5,
    // text height: measured in world space
    widthScale: n = 1,
    // text width scale: higher means the wider
    color: o = 16777215,
    // text color: (eg) 0xffffff, '#ffffff'
    align: i = "center",
    // text align: 'start', 'end', 'left', 'right', 'center'
    baseline: a = "middle",
    // text baseline: 'top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'
    style: h = "normal",
    // font style: 'normal', 'italic', 'oblique'
    variant: f = "normal",
    // font variant: 'normal', 'small-caps'
    weight: u = "normal",
    // font weight: 'normal', 'bold', 'bolder', 'lighter', '100', '200', ..., '900'
    size: l = "64px",
    // font size: (eg) '16px', '64px', '200px', '1000px'
    family: c = "Karla, sans-serif",
    // font family
    ...d
  } = r, m = new Kr(
    t,
    {
      textHeight: s,
      textWidthScale: n,
      textColor: o,
      textAlign: i,
      textBaseline: a,
      fontStyle: h,
      fontVariant: f,
      fontWeight: u,
      fontSize: l,
      fontFamily: c
    }
  );
  return /* @__PURE__ */ B.createElement("primitive", { ref: e, object: m, ...d });
}, re = /* @__PURE__ */ new v.Matrix4(), Xe = /* @__PURE__ */ new v.Matrix4(), Je = /* @__PURE__ */ new v.Matrix4(), Wr = /* @__PURE__ */ new v.Matrix4(), de = [], Ye = /* @__PURE__ */ new v.Box3(), ie = /* @__PURE__ */ new v.Sphere();
let qe = !1;
class ms extends v.SkinnedMesh {
  constructor(e, t, s = 1) {
    super(e, t), this.isInstancedMesh = !0, this.isInstancedSkinnedMesh = !0, this.instanceMatrix = new v.InstancedBufferAttribute(new Float32Array(s * 16), 16), this.instanceColor = null, this.instanceBones = null, this.morphTexture = null, this.count = s, this.boundingBox = null, this.boundingSphere = null, this._mesh = null;
    const n = this.bind.bind(this);
    this.bind = function(o, i) {
      n(o, i), this.skeleton.update = (a, h) => {
        const f = this.skeleton.bones, u = this.skeleton.boneInverses, l = a || this.skeleton.boneMatrices, c = this.skeleton.boneTexture, d = h || 0;
        for (let m = 0, p = f.length; m < p; m++) {
          const g = f[m] ? f[m].matrixWorld : Wr;
          Je.multiplyMatrices(g, u[m]), Je.toArray(
            l,
            16 * (m + d * f.length)
          );
        }
        c !== null && (c.needsUpdate = !0);
      }, this.skeleton.computeBoneTexture = this.skeleton.computeInstancedBoneTexture = () => {
        this.skeleton.boneTexture = new v.DataTexture(
          this.instanceBones,
          this.skeleton.bones.length * 4,
          this.count,
          v.RGBAFormat,
          v.FloatType
        ), this.skeleton.boneTexture.needsUpdate = !0;
      };
    }, qe || (qe = !0, v.ShaderChunk.points_vert = v.ShaderChunk.points_vert.replace(
      "#include <clipping_planes_pars_vertex>",
      `#include <clipping_planes_pars_vertex>
#include <skinning_pars_vertex>`
    ), v.ShaderChunk.points_vert = v.ShaderChunk.points_vert.replace(
      "#include <morphtarget_vertex>",
      `#include <skinbase_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>`
    ), v.ShaderLib.points.vertexShader = v.ShaderChunk.points_vert, v.ShaderChunk.skinning_pars_vertex = /* glsl */
    `
        #ifdef USE_SKINNING

          uniform mat4 bindMatrix;
          uniform mat4 bindMatrixInverse;

          uniform highp sampler2D boneTexture;
          // uniform int boneTextureSize;

          mat4 getBoneMatrix( const in float i ) {

          #ifdef USE_INSTANCING
              
              int j = 4 * int(i);
              vec4 v1 = texelFetch(boneTexture, ivec2( j, gl_InstanceID ), 0);
              vec4 v2 = texelFetch(boneTexture, ivec2( j + 1, gl_InstanceID ), 0);
              vec4 v3 = texelFetch(boneTexture, ivec2( j + 2, gl_InstanceID ), 0);
              vec4 v4 = texelFetch(boneTexture, ivec2( j + 3, gl_InstanceID ), 0);
              
          #else

            // float j = i * 4.0;
            // float x = mod( j, float( boneTextureSize ) );
            // float y = floor( j / float( boneTextureSize ) );
            // float dx = 1.0 / float( boneTextureSize );
            // float dy = 1.0 / float( boneTextureSize );
            // y = dy * ( y + 0.5 );
            // vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
            // vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
            // vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
            // vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

            int size = textureSize( boneTexture, 0 ).x;
            int j = int( i ) * 4;
            int x = j % size;
            int y = j / size;
            vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
            vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
            vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
            vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

          #endif

            return mat4( v1, v2, v3, v4 );

          }

        #endif
      `);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new v.Box3()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let s = 0; s < t; s++)
      this.getMatrixAt(s, re), Ye.copy(e.boundingBox).applyMatrix4(re), this.boundingBox.union(Ye);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new v.Sphere()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let s = 0; s < t; s++)
      this.getMatrixAt(s, re), ie.copy(e.boundingSphere).applyMatrix4(re), this.boundingSphere.union(ie);
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
    const s = t.morphTargetInfluences, n = this.morphTexture.source.data.data, o = s.length + 1, i = e * o + 1;
    for (let a = 0; a < s.length; a++)
      s[a] = n[i + a];
  }
  raycast(e, t) {
    const s = this.matrixWorld, n = this.count;
    this._mesh === null && (this._mesh = new v.SkinnedMesh(this.geometry, this.material), this._mesh.copy(this));
    const o = this._mesh;
    if (o.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ie.copy(this.boundingSphere), ie.applyMatrix4(s), e.ray.intersectsSphere(ie) !== !1))
      for (let i = 0; i < n; i++) {
        this.getMatrixAt(i, re), Xe.multiplyMatrices(s, re), o.matrixWorld = Xe, o.raycast(e, de);
        for (let a = 0, h = de.length; a < h; a++) {
          const f = de[a];
          f.instanceId = i, f.object = this, t.push(f);
        }
        de.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new v.InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const s = t.morphTargetInfluences, n = s.length + 1;
    this.morphTexture === null && (this.morphTexture = new v.DataTexture(new Float32Array(n * this.count), n, this.count, RedFormat, FloatType));
    const o = this.morphTexture.source.data.data;
    let i = 0;
    for (let f = 0; f < s.length; f++)
      i += s[f];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - i, h = n * e;
    o[h] = a, o.set(s, h + 1);
  }
  setBonesAt(e, t) {
    t = t || this.skeleton;
    const s = t.bones.length * 16;
    this.instanceBones === null && (this.instanceBones = new Float32Array(s * this.count)), t.update(this.instanceBones, e);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
export {
  Ie as Animator,
  yr as BatchedMaterial,
  ct as BokehPass,
  Dr as ColladaExporter,
  at as CustomMaterial,
  ms as InstancedSkinnedMesh,
  ut as MATERIAL_TYPES,
  Pr as MTLExporter,
  it as MergedMaterial,
  fs as MergedMesh,
  hs as Mesh,
  lt as TEXTURE_MAPS,
  Cr as THREE_Color,
  es as THREE_Vector3,
  ne as THREE_Vector3s,
  ps as Text,
  Kr as TextSprite,
  ts as ThreeCanvas,
  W as Threefy,
  jr as loadAudios,
  us as loadTextures,
  Hr as mergeMeshes,
  Y as setObject3D,
  cs as useAnimate,
  ls as useExporter,
  ns as useFrame,
  os as useKeyDown,
  is as useKeyUp,
  ds as useLoader,
  ss as useRefCallback,
  rs as useRefEffect,
  as as useSearch,
  Ne as useSearchObject,
  H as useThree
};
