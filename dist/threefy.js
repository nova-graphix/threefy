var Lt = Object.defineProperty;
var St = (r, e, t) => e in r ? Lt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var te = (r, e, t) => St(r, typeof e != "symbol" ? e + "" : e, t);
import * as y from "three";
import { Raycaster as kt, Vector2 as At, UniformsUtils as Ge, ShaderMaterial as Ie, Scene as _t, OrthographicCamera as Pt, WebGLRenderTarget as Fe, Mesh as Dt, PlaneGeometry as Ot, LOD as st, Color as ue, MeshBasicMaterial as Rt, Matrix4 as $t, DoubleSide as Ut } from "three";
import { LOD as Wn } from "three";
import B, { createContext as Bt, useRef as me, useEffect as ge, useCallback as Gt, useReducer as It, useMemo as Ft, forwardRef as H, useId as jt } from "react";
import * as Vt from "three/examples/jsm/utils/SkeletonUtils";
import { EffectComposer as nt } from "three/examples/jsm/postprocessing/EffectComposer";
import { EffectComposer as Jn } from "three/examples/jsm/postprocessing/EffectComposer";
import { RGBELoader as ot } from "three/examples/jsm/loaders/RGBELoader";
import { RGBELoader as qn } from "three/examples/jsm/loaders/RGBELoader";
import { ArcballControls as zt } from "three/examples/jsm/controls/ArcballControls";
import { ArcballControls as Qn } from "three/examples/jsm/controls/ArcballControls";
import { DragControls as it } from "three/examples/jsm/controls/DragControls";
import { DragControls as to } from "three/examples/jsm/controls/DragControls";
import { FirstPersonControls as at } from "three/examples/jsm/controls/FirstPersonControls";
import { FirstPersonControls as so } from "three/examples/jsm/controls/FirstPersonControls";
import { FlyControls as Nt } from "three/examples/jsm/controls/FlyControls";
import { FlyControls as oo } from "three/examples/jsm/controls/FlyControls";
import { MapControls as Ht } from "three/examples/jsm/controls/MapControls";
import { MapControls as ao } from "three/examples/jsm/controls/MapControls";
import { OrbitControls as ct } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls as lo } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls as K } from "three/examples/jsm/controls/PointerLockControls";
import { PointerLockControls as ho } from "three/examples/jsm/controls/PointerLockControls";
import { TrackballControls as lt } from "three/examples/jsm/controls/TrackballControls";
import { TrackballControls as po } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls as ye } from "three/examples/jsm/controls/TransformControls";
import { TransformControls as go } from "three/examples/jsm/controls/TransformControls";
import { DotScreenShader as Kt } from "three/examples/jsm/shaders/DotScreenShader";
import { DotScreenShader as vo } from "three/examples/jsm/shaders/DotScreenShader";
import { RGBShiftShader as Wt } from "three/examples/jsm/shaders/RGBShiftShader";
import { RGBShiftShader as wo } from "three/examples/jsm/shaders/RGBShiftShader";
import { FXAAShader as Xt } from "three/examples/jsm/shaders/FXAAShader";
import { FXAAShader as Mo } from "three/examples/jsm/shaders/FXAAShader";
import { RenderPass as be } from "three/examples/jsm/postprocessing/RenderPass";
import { RenderPass as To } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass as Jt } from "three/examples/jsm/postprocessing/ShaderPass";
import { ShaderPass as Lo } from "three/examples/jsm/postprocessing/ShaderPass";
import { GlitchPass as Yt } from "three/examples/jsm/postprocessing/GlitchPass";
import { GlitchPass as ko } from "three/examples/jsm/postprocessing/GlitchPass";
import { GTAOPass as qt } from "three/examples/jsm/postprocessing/GTAOPass";
import { GTAOPass as _o } from "three/examples/jsm/postprocessing/GTAOPass";
import { OutlinePass as ut } from "three/examples/jsm/postprocessing/OutlinePass";
import { OutlinePass as Do } from "three/examples/jsm/postprocessing/OutlinePass";
import { UnrealBloomPass as Zt } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { UnrealBloomPass as Ro } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { Pass as Qt } from "three/examples/jsm/postprocessing/Pass";
import { BokehDepthShader as er, BokehShader as tr } from "three/examples/jsm/shaders/BokehShader2";
import { OutputPass as dt } from "three/examples/jsm/postprocessing/OutputPass";
import { OutputPass as Uo } from "three/examples/jsm/postprocessing/OutputPass";
import { AnaglyphEffect as Ee } from "three/examples/jsm/effects/AnaglyphEffect";
import { AnaglyphEffect as Go } from "three/examples/jsm/effects/AnaglyphEffect";
import { AsciiEffect as Le } from "three/examples/jsm/effects/AsciiEffect";
import { AsciiEffect as Fo } from "three/examples/jsm/effects/AsciiEffect";
import { OutlineEffect as Se } from "three/examples/jsm/effects/OutlineEffect";
import { OutlineEffect as Vo } from "three/examples/jsm/effects/OutlineEffect";
import { ParallaxBarrierEffect as ke } from "three/examples/jsm/effects/ParallaxBarrierEffect";
import { ParallaxBarrierEffect as No } from "three/examples/jsm/effects/ParallaxBarrierEffect";
import { PeppersGhostEffect as Ae } from "three/examples/jsm/effects/PeppersGhostEffect";
import { PeppersGhostEffect as Ko } from "three/examples/jsm/effects/PeppersGhostEffect";
import { StereoEffect as _e } from "three/examples/jsm/effects/StereoEffect";
import { StereoEffect as Xo } from "three/examples/jsm/effects/StereoEffect";
import { RoundedBoxGeometry as Pe } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { RoundedBoxGeometry as Yo } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { ConvexGeometry as De } from "three/examples/jsm/geometries/ConvexGeometry";
import { ConvexGeometry as Zo } from "three/examples/jsm/geometries/ConvexGeometry";
import { DecalGeometry as Oe } from "three/examples/jsm/geometries/DecalGeometry";
import { DecalGeometry as ei } from "three/examples/jsm/geometries/DecalGeometry";
import { ParametricGeometry as Re } from "three/examples/jsm/geometries/ParametricGeometry";
import { ParametricGeometry as ri } from "three/examples/jsm/geometries/ParametricGeometry";
import { TextGeometry as ht } from "three/examples/jsm/geometries/TextGeometry";
import { TextGeometry as ni } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader as rr } from "three/examples/jsm/loaders/FontLoader";
import { FontLoader as ii } from "three/examples/jsm/loaders/FontLoader";
import { NURBSCurve as ft } from "three/examples/jsm/curves/NURBSCurve";
import { NURBSCurve as ci } from "three/examples/jsm/curves/NURBSCurve";
import { NURBSSurface as pt } from "three/examples/jsm/curves/NURBSSurface";
import { NURBSSurface as ui } from "three/examples/jsm/curves/NURBSSurface";
import { LightProbeGenerator as sr } from "three/examples/jsm/lights/LightProbeGenerator";
import { LightProbeGenerator as hi } from "three/examples/jsm/lights/LightProbeGenerator";
import { RectAreaLightHelper as nr } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightHelper as pi } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib as or } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightUniformsLib as gi } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { VertexNormalsHelper as ir } from "three/examples/jsm/helpers/VertexNormalsHelper";
import { VertexNormalsHelper as vi } from "three/examples/jsm/helpers/VertexNormalsHelper";
import { VertexTangentsHelper as ar } from "three/examples/jsm/helpers/VertexTangentsHelper";
import { VertexTangentsHelper as wi } from "three/examples/jsm/helpers/VertexTangentsHelper";
import { GLTFExporter as je } from "three/examples/jsm/exporters/GLTFExporter";
import { OBJExporter as cr } from "three/examples/jsm/exporters/OBJExporter";
import { PLYExporter as lr } from "three/examples/jsm/exporters/PLYExporter";
import { STLExporter as ur } from "three/examples/jsm/exporters/STLExporter";
import { VTKLoader as dr } from "three/examples/jsm/loaders/VTKLoader";
import { MD2Loader as hr } from "three/examples/jsm/loaders/MD2Loader";
import { FBXLoader as fr } from "three/examples/jsm/loaders/FBXLoader";
import { VRMLLoader as pr } from "three/examples/jsm/loaders/VRMLLoader";
import { AMFLoader as mr } from "three/examples/jsm/loaders/AMFLoader";
import { ThreeMFLoader as gr } from "three/examples/jsm/loaders/3MFLoader";
import { ColladaLoader as yr } from "three/examples/jsm/loaders/ColladaLoader";
import { PLYLoader as vr } from "three/examples/jsm/loaders/PLYLoader";
import { STLLoader as xr } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader as wr } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader as br } from "three/examples/jsm/loaders/MTLLoader";
import { SVGLoader as Mr } from "three/examples/jsm/loaders/SVGLoader";
import { KMZLoader as Cr } from "three/examples/jsm/loaders/KMZLoader";
import { TDSLoader as Tr } from "three/examples/jsm/loaders/TDSLoader";
import { GLTFLoader as Er } from "three/examples/jsm/loaders/GLTFLoader";
import { KTX2Loader as Lr } from "three/examples/jsm/loaders/KTX2Loader";
import { DRACOLoader as Ve } from "three/examples/jsm/loaders/DRACOLoader";
import { MeshoptDecoder as Sr } from "three/examples/jsm/libs/meshopt_decoder.module";
import { VOXLoader as kr, VOXMesh as Ar } from "three/examples/jsm/loaders/VOXLoader";
import { unzipSync as mt, strFromU8 as _r } from "three/examples/jsm/libs/fflate.module";
import { mergeGeometries as Pr } from "three/examples/jsm/utils/BufferGeometryUtils";
const ze = function(r) {
  if (!r) {
    console.error("Animator: cannot be created without scene");
    return;
  }
  this.mixer = new y.AnimationMixer(r), this.update = function(e) {
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
    const n = s.duration || 1, o = s.loopMode || y.LoopRepeat, i = s.repetitions || 1 / 0, a = s.combine || "crossFade";
    if (a == "crossFade") {
      const u = e.activeAction, m = this.mixer.clipAction(t, e);
      return m ? (m.enabled = !0, m.setLoop(o, i), u ? (u.enabled = !0, u.crossFadeTo(m, n).play()) : m.play(), e.activeAction = m, m) : void 0;
    } else if (a === "overlap") {
      const u = this.mixer.clipAction(t, e);
      return u.play(), e.activeAction = u, u;
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
class gt extends Qt {
  constructor(e, t, s) {
    super();
    const n = s.width || window.innerWidth || 1, o = s.height || window.innerHeight || 1, i = s.vignetting || !1, a = s.shaderFocus || !1;
    this.scene = e, this.camera = t, this.raycaster = new kt(), this.mouse = new At(), this.width = n, this.height = o, this.distance = 100;
    const u = er, m = Ge.clone(u.uniforms);
    this.materialDepth = new Ie(
      {
        uniforms: m,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader
      }
    ), m.mNear.value = t.near, m.mFar.value = t.far, this.scene2 = new _t(), this.camera2 = new Pt(n / -2, n / 2, o / 2, o / -2, -1e4, 1e4), this.camera2.position.z = 100, this.scene2.add(this.camera2), this.rtTextureDepth = new Fe(n, o), this.rtTextureColor = new Fe(n, o);
    const d = { rings: 3, samples: 4 }, l = tr, c = Ge.clone(l.uniforms);
    c.textureWidth.value = n, c.textureHeight.value = o, c.shaderFocus.value = a, c.fstop.value = 2.2, c.maxblur.value = 1, c.showFocus.value = !1, c.focalDepth.value = 2.8, c.manualdof.value = !1, c.vignetting.value = i, c.depthblur.value = !1, c.threshold.value = 0.5, c.gain.value = 2, c.bias.value = 0.5, c.fringe.value = 0.7, c.focalLength.value = 35, c.noise.value = !0, c.pentagon.value = !1, c.dithering.value = 1e-4, c.znear.value = t.near, c.zfar.value = t.far, t.setFocalLength(c.focalLength.value), this.materialBokeh = new Ie(
      {
        uniforms: c,
        vertexShader: l.vertexShader,
        fragmentShader: l.fragmentShader,
        defines: {
          RINGS: d.rings,
          SAMPLES: d.samples
        }
      }
    ), c.tColor.value = this.rtTextureColor.texture, c.tDepth.value = this.rtTextureDepth.texture;
    const h = new Dt(new Ot(n, o), this.materialBokeh);
    h.position.z = -500, this.scene2.add(h);
  }
  render(e, t, s, n, o) {
    const i = this.scene, a = this.camera, u = this.raycaster, m = this.mouse, d = this.materialBokeh.uniforms, l = (g) => {
      var f = a.far, p = a.near;
      return -f * p / (g * (f - p) - f);
    }, c = (g) => Math.max(0, Math.min(1, g)), h = (g, f, p) => {
      var v = c((p - g) / (f - g));
      return v * v * (3 - 2 * v);
    };
    {
      const g = m.x * 0.5 + 0.5, f = m.y * 0.5 + 0.5;
      d.focusCoords.value.set(g, f);
    }
    {
      u.setFromCamera(m, a);
      const g = u.intersectObjects(i.children, !0), f = g.length > 0 ? g[0].distance : 1e3;
      this.distance += (f - this.distance) * 0.03;
      const p = h(a.near, a.far, this.distance), v = l(1 - p);
      d.focalDepth.value = v;
    }
    e.setRenderTarget(this.rtTextureColor), e.clear(), e.render(i, a), i.overrideMaterial = this.materialDepth, e.setRenderTarget(this.rtTextureDepth), e.clear(), e.render(i, a), i.overrideMaterial = null, this.renderToScreen ? (e.setRenderTarget(null), e.render(this.scene2, this.camera2)) : (e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene2, this.camera2));
  }
}
gt.prototype.isBokehPass = !0;
st.prototype.addLevels = function(...r) {
  r.forEach((e) => Array.isArray(e) ? this.addLevel(...e) : this.addLevel(e));
};
K.prototype.blocker = null;
K.prototype.heroPlayer = {
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
K.prototype.update = function() {
};
K.prototype.onKeyDown = function(r) {
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
K.prototype.onKeyUp = function(r) {
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
K.prototype.animate = function(r, e, t) {
  if (this.isLocked === !0) {
    const s = this.heroPlayer, n = s.velocity, o = s.direction, i = this.getObject();
    t.ray.origin.copy(i.position), t.ray.origin.y -= 10;
    const u = t.intersectObjects(e.children, !1).length > 0;
    n[0] -= n[0] * s.viscosity * r, n[2] -= n[2] * s.viscosity * r, n[1] -= (n[1] * s.viscosity * 0.1 + 9.8 * s.mass) * r, o[2] = Number(s.forward) - Number(s.backward), o[0] = Number(s.right) - Number(s.left);
    let m = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
    m = m || 1, o[0] /= m, o[1] /= m, o[2] /= m, (s.forward || s.backward) && (n[2] -= o[2] * 400 * r), (s.left || s.right) && (n[0] -= o[0] * 400 * r), u === !0 && (n[1] = Math.max(0, n[1]), s.canJump = !0), this.moveRight(-n[0] * r), this.moveForward(-n[2] * r), i.position.y += n[1] * r, i.position.y < 10 && (n[1] = 0, i.position.y = 10, s.canJump = !0);
  }
};
ye.prototype.onKeyDown = function(r) {
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
ye.prototype.onKeyUp = function(r) {
  switch (r.key) {
    case "Shift":
      this.setTranslationSnap(null), this.setRotationSnap(null), this.setScaleSnap(null);
      break;
  }
};
Ee.prototype.isAnaglyphEffect = !0;
Ee.prototype.type = "AnaglyphEffect";
Le.prototype.isAsciiEffect = !0;
Le.prototype.type = "AsciiEffect";
Se.prototype.isOutlineEffect = !0;
Se.prototype.type = "OutlineEffect";
ke.prototype.isParallaxBarrierEffect = !0;
ke.prototype.type = "ParallaxBarrierEffect";
Ae.prototype.isPeppersGhostEffect = !0;
Ae.prototype.type = "PeppersGhostEffect";
_e.prototype.isStereoEffect = !0;
_e.prototype.type = "StereoEffect";
Pe.prototype.isRoundedBoxGeometry = !0;
Pe.prototype.type = "RoundedBoxGeometry";
De.prototype.isConvexGeometry = !0;
De.prototype.type = "ConvexGeometry";
Oe.prototype.isDecalGeometry = !0;
Oe.prototype.type = "DecalGeometry";
Re.prototype.isParametricGeometry = !0;
ht.prototype.isTextGeometry = !0;
const se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnaglyphEffect: Ee,
  ArcballControls: zt,
  AsciiEffect: Le,
  BokehPass: gt,
  ConvexGeometry: De,
  DecalGeometry: Oe,
  DotScreenShader: Kt,
  DragControls: it,
  EffectComposer: nt,
  FXAAShader: Xt,
  FirstPersonControls: at,
  FlyControls: Nt,
  FontLoader: rr,
  GTAOPass: qt,
  GlitchPass: Yt,
  LOD: st,
  LightProbeGenerator: sr,
  MapControls: Ht,
  NURBSCurve: ft,
  NURBSSurface: pt,
  OrbitControls: ct,
  OutlineEffect: Se,
  OutlinePass: ut,
  OutputPass: dt,
  ParallaxBarrierEffect: ke,
  ParametricGeometry: Re,
  PeppersGhostEffect: Ae,
  PointerLockControls: K,
  RGBELoader: ot,
  RGBShiftShader: Wt,
  RectAreaLightHelper: nr,
  RectAreaLightUniformsLib: or,
  RenderPass: be,
  RoundedBoxGeometry: Pe,
  ShaderPass: Jt,
  SkeletonUtils: Vt,
  StereoEffect: _e,
  TextGeometry: ht,
  TrackballControls: lt,
  TransformControls: ye,
  UnrealBloomPass: Zt,
  VertexNormalsHelper: ir,
  VertexTangentsHelper: ar
}, Symbol.toStringTag, { value: "Module" })), j = class j {
  constructor(e = {}) {
    this.width = e.width || window.innerWidth, this.height = e.height || window.innerHeight, this.widthRatio = this.width / window.innerWidth, this.heightRatio = this.height / window.innerHeight, this.dom = e.dom || document.createElement("div"), e.dom || document.body.appendChild(this.dom), this.dom.tabIndex = "1", this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.scene = void 0, this.camera = void 0, this.renderer = void 0, this.renderCallbacks = void 0, this.clock = void 0, this.controls = void 0, this.animator = void 0, this.composer = void 0, this.sceneHelpers = void 0, this.dragControls = void 0, this.transformControls = void 0, this.effect = void 0, this.loadingManager = j.loadingManager;
  }
  init() {
    return this.scene = new y.Scene(), this.sceneHelpers = new y.Scene(), this.sceneHelpers.name = "sceneHelpers", this.camera = new y.PerspectiveCamera(
      60,
      // this.fov
      this.width / this.height,
      0.1,
      // this.near
      5e3
      // this.far
    ), this.camera.position.z = 50, this.renderer = this.createRenderer(void 0), this.renderer.setSize(this.width, this.height), this.dom.appendChild(this.renderer.domElement), this.renderCallbacks = [], this.clock = new y.Clock(), this.controls = new ct(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.075, this.animator = new ze(this.scene), this.raycaster = new y.Raycaster(), this.selectedObject = null, this.selectedObjects = [], this.mouseDowned = !1, this.mouseDownPosition = new y.Vector2(), this.mouseUpPosition = new y.Vector2(), this.mouseMovePosition = new y.Vector2(), this.mouseClickPosition = new y.Vector2(), this.mouseDoubleClickPosition = new y.Vector2(), this.createEffectComposer(), this.createBackground(), window.addEventListener("resize", () => this.onResize(), !1), this.dom.addEventListener("click", (e) => this.onClick(e), !1), this.dom.addEventListener("dblclick", (e) => this.onDoubleClick(e), !1), this.dom.addEventListener("mousemove", (e) => this.onMouseMove(e), !1), this.dom.addEventListener("mousedown", (e) => this.onMouseDown(e), !1), this.dom.addEventListener("wheel", (e) => this.onWheel(e), { passive: !0 }), this.dom.addEventListener("contextmenu", (e) => this.onContextMenu(e), !1), this.dom.addEventListener("pointermove", (e) => this.onPointerMove(e), !1), this.dom.addEventListener("pointerdown", (e) => this.onPointerDown(e), !1), this.dom.addEventListener("pointerup", (e) => this.onPointerUp(e), !1), this.dom.addEventListener("keydown", (e) => this.onKeyDown(e), !1), this.dom.addEventListener("keyup", (e) => this.onKeyUp(e), !1), this.keyDownCallbacks = [], this.keyUpCallbacks = [], this._cache = /* @__PURE__ */ new Map(), this;
  }
  // dispose
  dispose(e) {
    const t = (n) => {
      if (Array.isArray(n)) {
        n.forEach((o) => t(o));
        return;
      }
      Object.values(n).filter((o) => o instanceof y.Texture).forEach((o) => o.dispose()), n.uniforms && Object.values(n.uniforms).filter(({ value: o }) => o instanceof y.Texture).forEach(({ value: o }) => o.dispose()), n.dispose();
    }, s = (n) => {
      n.geometry && n.geometry.dispose(), n.material && t(n.material), Object.values(n).filter((o) => o instanceof y.Texture).forEach((o) => o.dispose());
    };
    e instanceof y.BufferGeometry ? e.dispose() : e instanceof y.Material ? t(e) : e instanceof y.Texture ? e.dispose() : e instanceof y.Object3D && (e.traverse && e.traverse((n) => s(n)), s(e));
  }
  // scene, camera, controls
  setScene(e) {
    const t = this.scene.background;
    this.scene = e, this.scene.background = t, this.animator = new ze(e), this.animator.mixer = new y.AnimationMixer(e), this.composer.passes.forEach((s) => {
      var n;
      ((n = s.scene) == null ? void 0 : n.name) !== "sceneHelpers" ? s.scene = e : s.renderScene && (s.renderScene = e);
    });
  }
  setCamera(e) {
    this.camera = e, this.controls.object = e, this.composer.passes.forEach((t) => {
      t.camera ? t.camera = e : t.renderCamera && (t.renderCamera = e);
    }), e.updateProjectionMatrix();
  }
  setEffect(e) {
    var t, s;
    (s = (t = this.effect) == null ? void 0 : t.dispose) == null || s.call(t), this.effect = e, this.effect.setSize(this.width, this.height);
  }
  setControls(e) {
    if (e instanceof it) {
      this._setDragControls(e);
      return;
    }
    if (e instanceof K && this._setPointerLockControls(e), e instanceof ye) {
      this._setTransformControls(e);
      return;
    }
    this.controls.dispose(), this.controls = e;
  }
  // controls
  _setDragControls(e) {
    const t = this;
    this.dragControls = e, e._dummyPosition = new y.Vector3(), e.addEventListener("dragstart", function(s) {
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
          const a = this._dummyPosition.sub(o), u = a.length(), m = a.x.toFixed(2), d = a.y.toFixed(2), l = a.z.toFixed(2);
          console.log(`movement vector: (${m}, ${d}, ${l}), its length: ${u.toFixed(2)}`);
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
    this.transformControls = e, this.transformControls.setSize(0.5), e.addEventListener("dragging-changed", function(s) {
      t.controls.enabled = !s.value;
    });
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
    const s = (u, m, d) => {
      const l = (c, h) => c && (c.isColor || c.isEuler || c.isQuaternion || c.isVector2 || c.isVector3 || c.isVector4) ? (typeof h == "number" ? c.setScalar(h) : c.set(...h), !0) : !1;
      typeof u[m] == "function" ? Array.isArray(d) ? u[m](...d) : u[m](d) : l(u[m], d) || (typeof d == "string" && bt.includes(m) ? u[m] = new y.TextureLoader().load(d, (h) => h.colorSpace = y.SRGBColorSpace) : u[m] = d);
    };
    if (typeof e == "object" && t && Object.getPrototypeOf(t) === Object.prototype) {
      Object.keys(t).forEach((u) => {
        s(e, u, t[u]);
      });
      return;
    }
    if (Object.getPrototypeOf(e) === Object.prototype) {
      const u = this;
      Object.keys(e).forEach((m) => u.set(m, e[m]));
      return;
    }
    if (Object.getPrototypeOf(t) === Object.prototype) {
      const u = this;
      Object.keys(t).forEach((m) => {
        const d = e + "." + m, l = t[m];
        u.set(d, l);
      });
      return;
    }
    let n = !0;
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
        const u = e.split(".")[1];
        this.camera[u] = t, this.camera.updateProjectionMatrix();
        break;
      case "background":
      case "scene.background":
        this.createBackground(t);
        break;
      default:
        n = !1;
        break;
    }
    if (n) return;
    const o = e.replace("[", ".").replace("]", "").split(".").map((u) => isNaN(u) ? u : ~~u), i = o.length - 1;
    if (n = o.reduce((u, m, d) => {
      if (u)
        return d === i ? u : u[m] ? u[m] : void 0;
    }, this), !n) {
      console.warn(`${e} not found`);
      return;
    }
    const a = o.pop();
    s(n, a, t);
  }
  // renderer
  createRenderer(e) {
    const t = new y.WebGLRenderer({ canvas: e, antialias: !0 });
    return t.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.shadowMap.enabled = !0, t.shadowMap.needsUpdate = !0, t.shadowMap.type = y.PCFSoftShadowMap, t.outputColorSpace = y.SRGBColorSpace, t.toneMapping = y.LinearToneMapping, t.toneMappingExposure = 1, t;
  }
  // animate loop
  update(e, t) {
    var s;
    (s = this.TWEEN) == null || s.update(), this.controls.update(t), this.animator.update(t), this.scene.traverse((n) => {
      !n.isLOD && n.update && n.update(t, e);
    }), this.sceneHelpers.traverse((n) => {
      n.update && n.update(t, e);
    });
  }
  render(e, t) {
    this.renderCallbacks.forEach((s) => s(e, this, t)), this.effect ? this.effect.render(this.scene, this.camera) : this.composer ? this.composer.render(t) : (this.renderer.render(this.scene, this.camera), this.sceneHelpers.children.length > 0 && (this.renderer.autoClear = !1, this.renderer.render(this.sceneHelpers, this.camera), this.renderer.autoClear = !0));
  }
  animate() {
    this.animateID = window.requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getDelta(), t = this.clock.elapsedTime;
    this.update(t, e), this.render(t, e), this.controls instanceof K && this.controls.animate(e, this.scene, this.raycaster);
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
    if (this.composer = new nt(this.renderer), this.composer.setSize(this.width, this.height), this.composer.addPass(new be(this.scene, this.camera)), this.sceneHelpers) {
      this.renderer.autoClear = !1;
      const e = new be(this.sceneHelpers, this.camera);
      e.clear = !1, e.clearDepth = !1, this.composer.addPass(e), this.renderer.autoClear = !0;
    }
    this.composer.addPass(new dt());
  }
  addPass(e) {
    e instanceof ut && (this.outlinePass = e), this.composer.insertPass(e, this.composer.passes.length - 1);
  }
  // background
  createBackground(e, t) {
    const s = this;
    if (e === "default.hdr" && (e = "images/hdr/death_valley_sand_dunes.hdr"), Array.isArray(e))
      e.length === 6 && this.loadTexture(e, (n) => {
        n.mapping = y.CubeReflectionMapping, s.scene.background = n, s.scene.environment = n, s.scene.backgroundBlurriness = 0, t && t(n);
      }), e.length === 3 && (this.scene.background = new y.Color(...e));
    else if (typeof e == "string") {
      const n = e.split(".");
      n.length === 1 ? this.scene.background = new y.Color(e) : n.pop().toLowerCase() === "hdr" ? this.loadTexture(e, (i) => {
        i.mapping = y.EquirectangularReflectionMapping, s.scene.background = i, s.scene.environment = i, s.scene.backgroundBlurriness = 0, t && t(i);
      }) : this.loadTexture(e, (i) => {
        i.colorSpace = y.SRGBColorSpace, s.scene.background = i, t && t(i);
      });
    } else typeof e == "number" ? this.scene.background = new y.Color(e) : e != null && e.isTexture || e != null && e.isColor ? this.scene.background = e : this.scene.background = new y.Color(1644825);
  }
  // resize
  onResize(e, t) {
    if (this.width = e || this.widthRatio * window.innerWidth, this.height = t || this.heightRatio * window.innerHeight, e && (this.widthRatio = e / window.innerWidth), t && (this.heightRatio = t / window.innerHeight), this.dom.style.width = this.width + "px", this.dom.style.height = this.height + "px", this.camera.isPerspectiveCamera)
      this.camera.aspect = this.width / this.height;
    else if (this.camera.isOrthographicCamera) {
      const s = this.camera.top - this.camera.bottom, n = this.width / this.height;
      this.camera.left = -s * n / 2, this.camera.right = s * n / 2, this.camera.top = s / 2, this.camera.bottom = -s / 2;
    }
    this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.composer && this.composer.setSize(this.width, this.height), this.effect && this.effect.setSize(this.width, this.height), this.controls && (this.controls instanceof at || this.controls instanceof lt) && this.controls.handleResize();
  }
  // load
  getLoaded(e) {
    const t = this._cache.get(e);
    return t != null && t[0] ? t[0] : void 0;
  }
  loadTexture(e, t) {
    let s = this._cache.get(e);
    return s || (Array.isArray(e) && e.length === 6 ? s = j.cubeTexLoader.load(e, (n) => {
      t && t(n);
    }) : (e.split(".").pop().toLowerCase() === "hdr" ? s = j.rgbeLoader.load(e, (o) => {
      t && t(o);
    }) : s = j.textureLoader.load(e, (o) => {
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
    if (e.preventDefault(), this.mouseMovePosition.fromArray(this.getMousePosition(e)), this.handleEvent(e), this.outlinePass) {
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
    if (this.controls instanceof K) {
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
          Dr(this);
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
    if (this.controls instanceof K) {
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
};
te(j, "loadingManager", new y.LoadingManager()), te(j, "textureLoader", new y.TextureLoader(j.loadingManager)), te(j, "cubeTexLoader", new y.CubeTextureLoader(j.loadingManager)), te(j, "rgbeLoader", new ot(j.loadingManager)), te(j, "audioLoader", new y.AudioLoader(j.loadingManager));
let Me = j;
const Dr = (r) => {
  console.log(r.scene);
}, Ne = {
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
}, yt = {
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
}, $e = (r) => {
  if (!r) return;
  const { threefy: e } = W();
  return Object.keys(r).filter((t) => t.match(/(map|matcap|Map)$/)).forEach((t) => {
    typeof r[t] == "string" && (r[t] = e.loadTexture(r[t]));
  }), r;
}, Or = (r) => {
  if (!r) return;
  const { threefy: e } = W();
  return Object.keys(r).forEach((t) => {
    const s = r[t].value;
    typeof s == "string" ? r[t].value = e.loadTexture(s) : Array.isArray(s) && s.length > 0 && s.forEach((n, o) => {
      typeof n == "string" && (r[t].value[o] = e.loadTexture(n));
    });
  }), r;
}, Rr = (r) => {
  const e = /(attach|castShadow|receiveShadow|position|rotation|scale)/;
  return Object.keys(r).forEach((t) => {
    e.test(t) && delete r[t];
  }), r;
};
function $r(r) {
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
class vt extends y.DataTexture {
  constructor(e, t) {
    const s = Object.entries(e).map(([c, h]) => ({
      // see properties above
      name: c,
      ...$r(h)
    })), n = s.length;
    let o = Math.sqrt(t * n);
    o = Math.ceil(o / n) * n, o = Math.max(o, n);
    const i = {};
    for (let c = 0, h = s.length; c < h; c++)
      i[s[c].name] = c;
    const a = [1, 1, 1, 1], u = [1, 1, 1, 1], m = [1, 1, 1, 1], d = [...a, ...u, ...m], l = new Float32Array(o * o * 4);
    for (let c = 0; c < t; c++)
      l.set(d, c * n * 4);
    super(l, o, o, y.RGBAFormat, y.FloatType), this.fields = s, this.fieldToIndex = i;
  }
  setValue(e, t, ...s) {
    const { fields: n, fieldToIndex: o, image: i } = this, a = n.length;
    if (!(t in o)) return;
    const u = o[t], d = n[u].dim, l = i.data, c = (e * a + u) * 4;
    d === 3 && s.length === 1 && (s = new y.Color(s[0]).toArray());
    for (let h = 0; h < d; h++)
      l[c + h] = s[h] || 0;
    this.needsUpdate = !0;
  }
  getGlsl(e = "vInstanceId", t = "dataTexture", s = "") {
    const { fields: n, image: o } = this, i = o.width, a = n.length;
    let u = `${s}int size = ${i};
${s}int j = int( ${e} ) * ${a};
${s}int x = j % size;
${s}int y = j / size;
`;
    for (let m = 0, d = n.length; m < d; m++) {
      const { name: l, type: c, comp: h } = n[m];
      u += `${s}${c} ${l} = ${c}( texelFetch( ${t}, ivec2( x + ${m}, y ), 0 ).${h} );
`;
    }
    return u;
  }
}
class Ur extends y.MeshPhysicalMaterial {
  constructor(e, t) {
    $e(t), super(t), this.isBatchedMaterial = !0;
    const s = { ...yt };
    delete s.uvRange, this.props = s;
    const n = new vt(s, e);
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
class xt extends y.MeshPhysicalMaterial {
  constructor(e, t) {
    $e(t), super(t), this.isMergedMaterial = !0;
    const s = { ...yt };
    this.props = s;
    const n = new vt(s, e);
    this.dataTexture = n, this.onBeforeCompile = (o, i) => {
      Object.keys(s).length !== 0 && (o.uniforms.dataTexture = { value: n }, o.vertexShader = o.vertexShader.replace(
        "void main() {",
        Ne.__vertexMain__
      ), o.fragmentShader = o.fragmentShader.replace(
        "void main() {",
        Ne.__fragmentMain__ + `${n.getGlsl()}`
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
let Br = 0;
const Gr = Date.now(), He = /* @__PURE__ */ new WeakMap(), Ke = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Ce(r) {
  const e = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function t(s, n) {
    let o = y.ShaderChunk[n];
    return o ? Ce(o) : s;
  }
  return r.replace(e, t);
}
const ne = Object.assign || function() {
  let r = arguments[0];
  for (let e = 1, t = arguments.length; e < t; e++) {
    let s = arguments[e];
    if (s)
      for (let n in s)
        s.hasOwnProperty(n) && (r[n] = s[n]);
  }
  return r;
};
function Ir(r) {
  return JSON.stringify(r, (e, t) => e === "uniforms" ? void 0 : t);
}
function Fr({ vertexShader: r, fragmentShader: e }, t, s) {
  let {
    vertexDefs: n,
    vertexTransform: o,
    vertexMainIntro: i,
    fragmentDefs: a,
    fragmentDiffuseTransform: u,
    fragmentMainIntro: m,
    fragmentColorTransform: d,
    timeUniform: l
  } = t;
  if (l) {
    const c = `
uniform float ${l};
`;
    n = (n || "") + c, a = (a || "") + c;
  }
  return (n || o || i) && (o && (r = Ce(r), n = `
                ${n || ""}
                void vertexTransform_${s}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
                    ${o}
                }`, r = r.replace(/\b(position|normal|uv)\b/g, (c, h, g, f) => /\battribute\s+vec3\s+$/.test(f.substr(0, g)) ? h : `_${h}_${s}`), i = `
                vec3 _position_${s} = vec3(position);
                vec3 _normal_${s} = vec3(normal);
                vec2 _uv_${s} = vec2(uv);
                vertexTransform_${s}(_position_${s}, _normal_${s}, _uv_${s});
                ${i || ""}`), r = r.replace(
    Ke,
    `${n || ""}

$&

${i || ""}`
  )), (a || u || m || d) && (e = Ce(e), u && (a = `
                ${a || ""}
                void fragmentDiffuseTransform_${s}(inout vec3 diffuse) {
                    ${u}
                }`, e = e.replace(/\b(diffuse)\b/g, (c, h, g, f) => /\buniform\s+vec3\s+$/.test(f.substr(0, g)) ? h : `_${h}_${s}`), m = `
                vec3 _diffuse_${s} = diffuse;
                fragmentDiffuseTransform_${s}(_diffuse_${s});
                ${m || ""}`), e = e.replace(
    Ke,
    `
            ${a || ""}
            void threejsMain_${s}() {
            ${m || ""}`
  ), e += `
            void main() {
                threejsMain_${s}();
                ${d || ""}
            }`), {
    vertexShader: r,
    fragmentShader: e
  };
}
const Te = function(r, e) {
  const t = Ir(e);
  let s = He.get(r);
  if (s || (s = /* @__PURE__ */ Object.create(null), He.set(r, s)), s[t])
    return s[t].clone();
  const n = ++Br, o = `_derivedShaders${n}`, i = `_onBeforeCompile${n}`;
  let a, u;
  function m(c) {
    r.onBeforeCompile.call(this, c);
    const { vertex: h, fragment: g } = this[o] || (this[o] = { vertex: {}, fragment: {} });
    if (h.source !== c.vertexShader || g.source !== c.fragmentShader) {
      const f = Fr(c, e, n);
      h.source = c.vertexShader, h.result = f.vertexShader, g.source = c.fragmentShader, g.result = f.fragmentShader;
    }
    c.vertexShader = h.result, c.fragmentShader = g.result, ne(c.uniforms, this.uniforms), e.timeUniform && (c.uniforms[e.timeUniform] = {
      get value() {
        return Date.now() - Gr;
      }
    }), this[i] && this[i](c);
  }
  function d() {
    this._listeners = void 0;
  }
  d.prototype = Object.create(
    r,
    {
      constructor: { value: d },
      isDerivedMaterial: { value: !0 },
      baseMaterial: { value: r },
      onBeforeCompile: {
        get() {
          return m;
        },
        set(c) {
          this[i] = c;
        }
      },
      copy: {
        value: function(c) {
          return r.copy.call(this, c), !r.isShaderMaterial && !r.isDerivedMaterial && (this.extensions = c.extensions, this.defines = ne({}, c.defines), this.uniforms = y.UniformsUtils.clone(c.uniforms)), this;
        }
      },
      getDepthMaterial: {
        value: function() {
          let c = this._depthMaterial;
          return c || (u || (u = Te(
            r.isDerivedMaterial ? r.getDepthMaterial() : new y.MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
            e
          ), u.defines.IS_DEPTH_MATERIAL = ""), c = this._depthMaterial = u.clone()), c;
        }
      },
      getDistanceMaterial: {
        value: function() {
          let c = this._distanceMaterial;
          return c || (a || (a = Te(
            r.isDerivedMaterial ? r.getDistanceMaterial() : new y.MeshDistanceMaterial(),
            e
          ), a.defines.IS_DISTANCE_MATERIAL = ""), c = this._distanceMaterial = a.clone()), c;
        }
      },
      dispose: {
        value() {
          const { _depthMaterial: c, _distanceMaterial: h } = this;
          c && c.dispose(), h && h.dispose(), r.dispose.call(this);
        }
      }
    }
  );
  const l = new d();
  return l.copy(r), l.uniforms = ne(y.UniformsUtils.clone(r.uniforms || {}), e.uniforms), l.defines = ne({}, r.defines, e.defines), l.defines.DERIVED_MATERIAL = n, l.extensions = ne({}, r.extensions, e.extensions), s[t] = l, l.clone();
};
class wt {
  constructor(e = "basic", t = {}) {
    const {
      extensions: s,
      defines: n,
      uniforms: o,
      vdeclare: i,
      vvertex: a,
      vmain: u,
      fdeclare: m,
      fdiffuse: d,
      fmain: l,
      fcolor: c,
      ...h
    } = t;
    let g = Mt[e];
    g || (g = "MeshBasicMaterial");
    const f = $e(Rr(h)), p = new y[g](f), v = Or(o), x = {
      extensions: s,
      defines: n,
      uniforms: v,
      vertexDefs: i,
      vertexTransform: a,
      vertexMainIntro: u,
      fragmentDefs: m,
      fragmentDiffuseTransform: d,
      fragmentMainIntro: l,
      fragmentColorTransform: c
    };
    return this.isCustomMaterial = !0, this.type = "CustomMaterial", this.subType = g, Te(p, x);
  }
}
const We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BatchedMaterial: Ur,
  CustomMaterial: wt,
  MergedMaterial: xt
}, Symbol.toStringTag, { value: "Module" })), jr = (r) => {
  if (r.isColor) return r;
  const e = typeof r;
  if (e === "number" || e === "string")
    return new y.Color(r);
  if (Array.isArray(r))
    return new y.Color(...r);
}, An = (r) => {
  if (r.isVector3) return r;
  const e = typeof r;
  return Array.isArray(r) ? new y.Vector3(...r) : e === "number" ? new y.Vector3().setScalar(r) : e === "string" ? new y.Vector3().setScalar(~~r) : e === "object" ? new y.Vector3(r.x, r.y, r.z) : void 0;
}, de = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new y.Vector2(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 2)
      e.push(new y.Vector2(r[t], r[t + 1]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new y.Vector2(e.x, e.y)) : r;
}, oe = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new y.Vector3(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 3)
      e.push(new y.Vector3(r[t], r[t + 1], r[t + 2]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new y.Vector3(e.x, e.y, e.z)) : r;
}, Xe = (r) => {
  if (Array.isArray(r[0]))
    return r.map((e) => new y.Vector4(...e));
  if (typeof r[0] == "number") {
    const e = [];
    for (let t = 0, s = r.length; t < s; t += 4)
      e.push(new y.Vector4(r[t], r[t + 1], r[t + 2], r[t + 3]));
    return e;
  } else return typeof r[0] == "object" ? r.map((e) => new y.Vector4(e.x, e.y, e.z, e.w)) : r;
}, we = [
  "color",
  "blendColor",
  "emissive",
  "specular",
  "sheenColor",
  "attenuationColor",
  "specularColor"
], bt = [
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
], Mt = {
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
}, fe = {
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
let _ = null;
const Vr = Bt(), zr = (r) => {
  if (!r) return;
  const { threefy: e } = W();
  return Object.keys(r).forEach((t) => {
    const s = r[t].value;
    typeof s == "string" ? r[t].value = e.loadTexture(s) : Array.isArray(s) && s.length > 0 && s.forEach((n, o) => {
      typeof n == "string" && (r[t].value[o] = e.loadTexture(n));
    });
  }), r;
}, ie = (r, e, t) => {
  const s = e.split("-"), n = s.length;
  s.reduce((o, i, a) => {
    if (a === n - 1)
      return Array.isArray(o) ? o : (Array.isArray(t) && typeof t[0] == "number" ? o[i] && typeof o[i] != "function" && o[i].fromArray(t) : o[i] && o[i].copy && t && (t.isVector2 || t.isVector3 || t.isVector4 || t.isColor || t.isMatrix3 || t.isMatrix4) ? o[i].copy(t) : o[i] = t, o[i]);
    if (a === n - 2) {
      let u = s[a + 1];
      return u = Number(u), !isNaN(u) && !Array.isArray(o[i]) && (o[i] = []), isNaN(u) ? o[i] || (o[i] = {}) : o[i][u] = t, o[i];
    } else
      o[i] || (o[i] = {});
    return o[i];
  }, r);
}, Y = (r, e) => {
  e && Object.keys(e).forEach((t) => {
    var i;
    if (t === "attach" || r.isMaterial && /position|rotation|scale/.test(t) || ![t in r, t === "update", /-/.test(t), /^on/.test(t)].some(Boolean)) return;
    const n = e[t], o = typeof n;
    if (n != null && !(r.isBufferGeometry && t === "scale")) {
      if (typeof r[t] == "function" && o !== "function") {
        const a = Array.isArray(n) ? n : [n];
        r[t](...a);
        return;
      }
      if (o === "object")
        n.isObject3D || (r.isBatchedMesh && /geometry/.test(t) ? r.addGeometry(n) : r.isShaderMaterial && t === "uniforms" ? ie(r, t, zr(n)) : ie(r, t, n)), r.isMaterial && n.isTexture && (r.needsUpdate = !0);
      else if (o === "function")
        r[t] = n, r[t].bind(r);
      else if (o === "number") {
        if (t === "scale") {
          (i = r[t]) != null && i.isVector3 && r[t].fromArray([n, n, n]);
          return;
        }
        if (we.includes(t)) {
          r[t] = new y.Color(n);
          return;
        }
        const a = t.split("-");
        if (we.includes(a[0]) && "r g b".includes(a[1])) {
          r[a[0]][a[1]] = n;
          return;
        }
        if ("position rotation scale".includes(a[0]) && "x y z".includes(a[1])) {
          r.isObject3D && (r[a[0]][a[1]] = n);
          return;
        }
        ie(r, t, n);
      } else o === "string" ? we.includes(t) ? r[t] = new y.Color(n) : bt.includes(t) ? (r[t] = _.loadTexture(n), t === "map" || t === "emissiveMap" ? r[t].colorSpace = y.SRGBColorSpace : t === "envMap" || t === "lightMap" ? r[t].colorSpace = y.LinearSRGBColorSpace : r[t].colorSpace = y.NoColorSpace, r.needsUpdate = !0) : ie(r, t, n) : o === "boolean" ? r[t] = n : ie(r, t, n);
    }
  });
}, pe = (r) => {
  if (r)
    if (typeof r.type == "function") {
      const e = r.type(r.props);
      return pe(e);
    } else if (typeof r.type == "symbol") {
      const e = Symbol.keyFor(r.type);
      if (e === "react.fragment")
        return /* @__PURE__ */ B.createElement("group", null, r.props.children);
      if (e === "react.suspense") {
        const t = r.props;
        return /* @__PURE__ */ B.createElement("group", { fallback: t.fallback }, t.fallback, t.children);
      } else
        return console.warn(`warning: ${e} not supported`, r), null;
    } else return typeof r.type == "object" ? typeof r.type.$$typeof == "symbol" && Symbol.keyFor(r.type.$$typeof) === "react.forward_ref" ? pe(r.type.render(r.props, r.ref)) : (console.warn("warning: unexpected cases occurred", r), null) : r;
}, Ue = (r, e, t, s) => {
  const n = { refs: [], elms: [] }, o = { refs: [], elms: [] };
  ge(() => {
    const d = (g) => {
      let f = g.map((p) => p.current);
      return f = f.flat(1 / 0), f = f.filter((p) => p != null), f;
    }, l = (g, f) => {
      f[g.attach] = g.current;
    }, c = {};
    n.refs.forEach((g) => l(g, c));
    const h = s(r, c);
    if (o.refs.length > 0) {
      const g = d(o.refs), f = [];
      g.forEach((p) => {
        var v, x;
        if (p)
          if (p.isScene)
            _.setScene(p);
          else if (p.isCamera)
            _.setCamera(p);
          else if ((v = p.type) != null && v.match(/(Helper)$/) || p.isTransformControls)
            _.sceneHelpers.add(p);
          else if (p.isFog || p.isFogExp2)
            _.scene.fog = p;
          else if (p.isPass)
            _.addPass(p);
          else if ((x = p.type) != null && x.match(/(Effect)$/))
            _.setEffect(p);
          else if (p.type === "Group" && p.forCurvePath) {
            const w = p, M = new y.CurvePath();
            w.children.forEach((C) => {
              M.add(C.userData.curve);
            }), w.userData.path = M, f.push(p);
          } else
            f.push(p);
      }), f.forEach((p) => {
        p.isObject3D && h.add(p);
      });
    }
    if (e) {
      let g;
      /Geometry/i.test(t) && (g = "geometry"), /Material/i.test(t) && (g = "material"), e.current = h, e.attach = r.attach ? r.attach : g;
    }
  }, [n.refs, o.refs, e]);
  const { children: i } = r;
  let a = Array.isArray(i) ? i : [i];
  a = a.flat(1 / 0);
  const u = jt(), m = _.reactElements;
  for (let d = 0; d < a.length; d++) {
    if (!a[d]) continue;
    let l = pe(a[d]);
    if (!l) continue;
    typeof l.type == "symbol" && (l = pe(l));
    const c = `${u}-${l.type}-${d}`, h = l.ref ? l.ref : me(null), g = m[l.type];
    let f = !1;
    /Geometry/i.test(l.type) && (f = !0), /Material/i.test(l.type) && (f = !0), l.props.attach || f ? (n.refs.push(h), n.elms.push(/* @__PURE__ */ B.createElement(g, { ref: h, key: c, ...l.props }))) : (o.refs.push(h), o.elms.push(/* @__PURE__ */ B.createElement(g, { ref: h, key: c, ...l.props })));
  }
  return [n.elms, o.elms].flat();
};
function Nr(r, e) {
  switch (e.type) {
    case "myAction":
      return r;
    default:
      return r;
  }
}
function Hr(r) {
  _ || (_ = new Me(), _.init(), _.animate(), _.reactElements = {}, [
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
    "PeppersGhostEffect",
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
  ].forEach((a) => Kr(a)), Wr(), Xr());
  const [e, t] = It(Nr, _), s = Ft(() => ({ threefy: e, dispatch: t }), [e]), o = Ue(r, null, "ThreeProvider", (i, a) => _.scene);
  return /* @__PURE__ */ B.createElement(Vr.Provider, { value: s }, o.length > 0 && o);
}
function _n(r) {
  return Hr(r);
}
function W(r) {
  if (r === void 0) {
    const e = _;
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
    return r(_);
}
function Pn(r, e = []) {
  const t = me(null);
  return ge(() => {
    t.current && r(t.current, _.scene);
  }, [...e]), t;
}
function Dn(r, e = []) {
  const t = me(r);
  return ge(() => {
    t.current = r;
  }, [r, ...e]), Gt((...s) => {
    const n = t.current;
    return n(...s);
  }, [t]);
}
function On(r) {
  _.renderCallbacks.push(r);
}
function Rn(r) {
  _.keyDownCallbacks.push(r);
}
function $n(r) {
  _.keyUpCallbacks.push(r);
}
const Je = (r, e, t) => {
  const s = (o, i, a, u) => {
    const m = "is" + i;
    (Array.isArray(o) ? o : [o]).forEach((l) => {
      (l[m] === !0 || l.type === i) && (a ? a === l.name && u.push(l) : u.push(l)), Object.keys(l).forEach((c) => {
        const h = l[c];
        c !== "parent" && typeof h == "object" && h !== null && s(h, i, a, u);
      });
    });
  }, n = [];
  return s(r, e, t, n), n;
}, Un = (r, e) => {
  const t = _.scene;
  if (e === void 0)
    return Je(t, r);
  let s = Array.isArray(e) ? e : [e];
  if (r === "Object3D") {
    const i = (a) => a.split("/").pop();
    s = s.map((a) => i(a));
  }
  const n = Je(t, r), o = [];
  return s.forEach((i) => {
    o.push(n.filter((a) => a.name === i));
  }), o.length === 1 ? o[0] : o;
}, Bn = () => {
  const r = _;
  return {
    replay: () => r.replayAnimate(),
    pause: () => r.pauseAnimate(),
    flush: () => r.flushAnimate()
  };
}, Kr = (r) => {
  const e = H((s, n) => {
    const i = Ue(s, n, r, (a, u) => {
      const { children: m, args: d, type: l, count: c, object: h, onLoad: g, fallback: f, ...p } = a;
      let v = Array.isArray(d) ? d : [];
      r === "InstancedMesh" && c && v.push(void 0, void 0, c);
      let x;
      if (r === "Primitive") {
        if (!h) throw new Error("create3DElement(): Primitives without 'object' are invalid!");
        if (g) {
          const w = ({ target: M }) => {
            M.removeEventListener("onLoad", w), g(M);
          };
          h.addEventListener("onLoad", w);
        }
        x = h;
      } else if (r === "Geometry") {
        if (n.current && n.current.dispose(), l.match(/(rounded|convex|decal|parametric|text)/))
          n.current = new se[fe[l]](...v);
        else {
          const w = l === void 0 ? "buffer" : l;
          n.current = new y[fe[w]](...v);
        }
        x = n.current;
      } else if (r === "Material") {
        const w = l === void 0 ? "basic" : l;
        x = n.current ? n.current : new y[Mt[w]]();
      } else if (r === "BatchedMaterial")
        x = n.current ? n.current : new We[r](...v);
      else if (r === "CustomMaterial")
        x = n.current ? n.current : new We[r](l, p);
      else if (r === "Controls") {
        const w = (L, E) => {
          const k = _.camera, P = _.renderer, G = _.scene;
          switch (E.length = 0, L) {
            case "arcball":
              E.push(k, P.domElement, G);
              break;
            case "drag":
              E.push(G.children, k, P.domElement);
              break;
            case "pointerLock":
              E.push(k, document.body);
              break;
            case "firstPerson":
            case "fly":
            case "map":
            case "orbit":
            case "trackball":
            case "transform":
              E.push(k, P.domElement);
              break;
          }
        }, M = (L, E) => {
          const {
            movementSpeed: k = 10,
            lookSpeed: P = 0.05,
            rollSpeed: G = 0.2,
            enableDamping: V = !0,
            dampingFactor: q = 0.075,
            rotateSpeed: J = 5
          } = a;
          switch (L) {
            case "firstPerson":
              E.movementSpeed = k, E.lookSpeed = P;
              break;
            case "fly":
              E.movementSpeed = k, E.rollSpeed = G;
              break;
            case "map":
              E.enableDamping = V;
              break;
            case "orbit":
              E.enableDamping = !0, E.dampingFactor = q;
              break;
            case "trackball":
              E.rotateSpeed = J;
              break;
          }
        };
        v.length === 0 && w(l, v), M(l, p);
        const C = l[0].toUpperCase() + l.slice(1) + "Controls";
        x = n.current ? n.current : new se[C](...v), _.setControls(x);
      } else r.match(/(Controls)$/) ? (x = n.current ? n.current : new se[r](...v), _.setControls(x)) : r.match(/(Pass)$/) ? x = n.current ? n.current : new se[r](...v) : r.match(/(Effect)$/) ? x = n.current ? n.current : new se[r](...v) : r.match(/(Geometry)$/) ? (n.current && n.current.dispose(), n.current = new y[r](...v), x = n.current) : r === "CurvePath" ? (x = n.current ? n.current : new y.Group(...v), x.forCurvePath = !0) : x = n.current ? n.current : new y[r](...v);
      if (Y(x, u), Y(x, p), r === "Group" && f) {
        const w = m.flat(1).map((L) => L.props.url !== void 0), M = [], C = ({ target: L }) => {
          const E = L;
          E.removeEventListener("added", C);
          let k = !1;
          E.children.forEach((P, G) => {
            if (w[G]) {
              const V = ({ target: q }) => {
                const J = q;
                J.removeEventListener("onLoad", V), k || (G === 0 ? k = !0 : (J.visible = !1, M.push(J))), k && M.forEach((ce) => ce.visible = !0);
              };
              P.addEventListener("onLoad", V);
            } else
              k || (G === 0 ? (k = !0, M.forEach((V) => V.visible = !0)) : (P.visible = !1, M.push(P)));
          });
        };
        x.addEventListener("added", C);
      }
      return x;
    });
    return /* @__PURE__ */ B.createElement(B.Fragment, null, i.length > 0 && i);
  }), t = r === "LOD" ? "lod" : `${r[0].toLowerCase()}${r.slice(1)}`;
  _.reactElements[t] = e;
}, Wr = () => {
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
    let { divisions: i, dim: a, order: u } = o, m;
    if (s === "lineCurve")
      i = i === void 0 ? 1 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n = oe(n), m = new y.LineCurve3(...n)), (a === 2 || a === "2") && (n = de(n), m = new y.LineCurve(...n));
    else if (s === "ellipseCurve" || s === "arcCurve")
      i = i === void 0 ? 5 : i, m = new y.EllipseCurve(...n);
    else if (s === "catmullRom3")
      i = i === void 0 ? 5 : i, Array.isArray(n[0]) ? n[0] = oe(n[0]) : n = [oe(n)], m = new y.CatmullRomCurve3(...n);
    else if (s === "splineCurve")
      i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, (a === 3 || a === "3") && (n[0] = oe(n[0]), m = new y.CatmullRomCurve3(...n)), (a === 2 || a === "2") && (Array.isArray(n[0]) ? n[0] = de(n[0]) : n = [de(n)], m = new y.SplineCurve(...n));
    else if (s === "bezierCurve")
      i = i === void 0 ? 5 : i, a = a === void 0 ? 2 : a, u = u === void 0 ? 2 : u, (a === 3 || a === "3") && (n = oe(n), m = u === 3 || u === "cubic" ? new y.CubicBezierCurve3(...n) : new y.QuadraticBezierCurve3(...n)), (a === 2 || a === "2") && (n = de(n), m = u === 3 || u === "cubic" ? new y.CubicBezierCurve(...n) : new y.QuadraticBezierCurve(...n));
    else if (s === "nurbsCurve") {
      i = i === void 0 ? 5 : i;
      let {
        degree: c,
        // degree
        knots: h,
        // knot vector
        controlPoints: g
        // controlPoints = [ Vector4, ... ] or [ [x,y,z,w], ... ]
      } = o;
      n.length > 0 && ([c, h, g] = n), g = Xe(g), m = new ft(c, h, g);
    }
    const d = m.getPoints(i);
    return [new y.BufferGeometry().setFromPoints(d), m];
  }, t = (s, n, o) => {
    if (s === "nurbsSurface") {
      let {
        slices: i = 8,
        stacks: a = 8,
        degree1: u,
        degree2: m,
        // u-degree, v-degree
        knots1: d,
        knots2: l,
        // u-knot,   v-knot
        controlPoints: c
        // controlPoints[u][v].xyzw where v = first, u = later
      } = o;
      n.length > 0 && ([u, m, d, l, c] = n);
      const h = [], g = d.length - u - 1;
      for (let x = 0; x < g; x++)
        h.push(Xe(c[x]));
      const f = new pt(u, m, d, l, h), p = (x, w, M) => f.getPoint(x, w, M);
      return [new Re(p, i, a), f];
    } else return [];
  };
  r.forEach((s) => {
    const n = H((o, i) => {
      const u = Ue(o, i, s, (m, d) => {
        let { children: l, args: c, type: h, ...g } = m, f = !1;
        if (i.current) {
          const v = i.current.geometry;
          f = !v || v.isRoundedBoxGeometry || v.isConvexGeometry || v.isDecalGeometry || v.isParametricGeometry || v.isTextGeometry;
        }
        let p;
        if (i.current && !f)
          p = i.current, Y(p.geometry, c), Y(p.material, g);
        else {
          let v = Array.isArray(c) ? c : [], x, w, M;
          if (s.match(/(rounded|convex|decal|parametric|text)/))
            x = new se[fe[s]](...v);
          else if (s.match(/(lineCurve|ellipseCurve|arcCurve|catmullRom3|splineCurve|bezierCurve|nurbsCurve)/))
            [x, w] = e(s, v, g);
          else if (s === "curve") {
            const P = h === "catmullRom3" ? h : h + "Curve";
            h = g.linetype === "dashed" ? "dashed" : "line", [x, w] = e(P, v, g);
          } else s === "nurbsSurface" ? [x, M] = t(s, v, g) : x = new y[fe[s]](...v);
          let C, L, E, k;
          if (h === void 0 ? C = "basic" : [C, L] = h.split("-"), L)
            k = new wt(L, g), E = "Mesh";
          else {
            let P;
            switch (C) {
              case "points":
                P = "PointsMaterial", E = "Points";
                break;
              case "line":
                P = "LineBasicMaterial", E = "Line";
                break;
              case "dashed":
                P = "LineDashedMaterial", E = "Line";
                break;
              case "rawShader":
                P = "RawShaderMaterial", E = "Mesh";
                break;
              case "shader":
                P = "ShaderMaterial", E = "Mesh";
                break;
              case "shadow":
                P = "ShadowMaterial", E = "Mesh";
                break;
              case "sprite":
                P = "SpriteMaterial", E = "Sprite";
                break;
              default:
                P = h || "basic", P = "Mesh" + P[0].toUpperCase() + P.slice(1) + "Material", E = "Mesh";
                break;
            }
            k = new y[P](), Y(k, g);
          }
          p = new y[E](x, k), C === "dashed" && p.computeLineDistances(), w && (p.userData.curve = w), M && (p.userData.surface = M);
        }
        return Y(p, d), Y(p, g), p;
      });
      return /* @__PURE__ */ B.createElement(B.Fragment, null, u.length > 0 && u);
    });
    _.reactElements[s] = n;
  });
}, Xr = () => {
  const r = H((i, a) => {
    const {
      url: u,
      texture: m,
      color: d,
      onLoad: l
    } = i, c = u || m || d || 1644825;
    _.createBackground(c, l);
  });
  _.reactElements.background = r;
  const e = H((i, a) => {
    const {
      color: u = 16777215,
      intensity: m = 1,
      keyLightPos: d = [-2, -1, 3],
      fillLightPos: l = [2, 4, 4],
      backLightPos: c = [1, 4, -2],
      hemisphereLightOn: h = !0,
      ...g
    } = i;
    let f;
    typeof u == "number" ? f = u : u.isColor ? f = u.getHex() : Array.isArray(u) ? f = new y.Color().fromArray(u).getHex() : typeof u == "string" && (f = new y.Color(u).getHex());
    const p = _.reactElements.group;
    return /* @__PURE__ */ B.createElement(p, { ref: a, name: "threePointLighting", ...g }, /* @__PURE__ */ B.createElement("directionalLight", { args: [f, m * 0.75 * Math.PI], position: d }), /* @__PURE__ */ B.createElement("directionalLight", { args: [f, m * 0.375 * Math.PI], position: l }), /* @__PURE__ */ B.createElement("directionalLight", { args: [f, m * 0.5 * Math.PI], position: c }), h && /* @__PURE__ */ B.createElement("hemisphereLight", { args: [8175615, 16770492, 0.2 * Math.PI], position: [0, 1, 0] }));
  });
  _.reactElements.threePointLighting = e;
  const t = H((i, a) => {
    const {
      children: u,
      position: m = [0, 100, 0],
      color: d = 16777215,
      intensity: l = 1,
      ...c
    } = i, h = m, g = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]), f = -g, p = g, v = g, x = -g, w = g * 0.1, M = g * 2, C = _.reactElements.directionalLight;
    return /* @__PURE__ */ B.createElement(
      C,
      {
        ref: a,
        position: m,
        args: [d, l],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-left": f,
        "shadow-camera-right": p,
        "shadow-camera-top": v,
        "shadow-camera-bottom": x,
        "shadow-camera-near": w,
        "shadow-camera-far": M,
        castShadow: !0,
        ...c
      }
    );
  });
  _.reactElements.shadowDirectionalLight = t;
  const s = H((i, a) => {
    const {
      children: u,
      position: m = [0, 100, 0],
      color: d = 16777215,
      intensity: l = 200,
      distance: c = 0,
      angle: h = Math.PI / 6,
      penumbra: g = 1,
      decay: f = 1.2,
      ...p
    } = i, v = m, x = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]), w = x * 0.1, M = x * 2, C = _.reactElements.spotLight;
    return /* @__PURE__ */ B.createElement(
      C,
      {
        ref: a,
        position: m,
        args: [d, l, c, h, g, f],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-near": w,
        "shadow-camera-far": M,
        "shadow-focus": 1,
        castShadow: !0,
        ...p
      }
    );
  });
  _.reactElements.shadowSpotLight = s;
  const n = H((i, a) => {
    const {
      children: u,
      position: m = [0, 100, 0],
      color: d = 16777215,
      intensity: l = 200,
      distance: c = 0,
      decay: h = 1.2,
      ...g
    } = i, f = m, p = Math.sqrt(f[0] * f[0] + f[1] * f[1] + f[2] * f[2]), v = p * 0.1, x = p * 2, w = _.reactElements.pointLight;
    return /* @__PURE__ */ B.createElement(
      w,
      {
        ref: a,
        position: m,
        args: [d, l, c, h],
        "shadow-mapSize": [1024, 1024],
        "shadow-camera-near": v,
        "shadow-camera-far": x,
        castShadow: !0,
        ...g
      }
    );
  });
  _.reactElements.shadowPointLight = n;
  const o = H((i, a) => {
    const {
      width: u = 100,
      depth: m = u,
      type: d = "shadow",
      color: l = 0,
      opacity: c = 0.5,
      ...h
    } = i, g = _.reactElements.plane;
    return /* @__PURE__ */ B.createElement(
      g,
      {
        ref: a,
        receiveShadow: !0,
        "rotation-x": Math.PI / -2,
        args: [u, m],
        type: d,
        color: l,
        opacity: c,
        ...h
      }
    );
  });
  _.reactElements.shadowPlaneReceiver = o;
};
class Jr {
  parse(e) {
    let t = "";
    function s(n) {
      let o, i = "", a = "";
      const u = ".png", m = Array.isArray(n.material) ? n.material : [n.material];
      for (let d = 0, l = m.length; d < l; d++) {
        let c = function(h, g) {
          if (h.isDataTexture === !0)
            return console.error("saveTexture: DataTexture not supported.", h), !1;
          var f = document.createElement("canvas"), p = f.getContext("2d");
          f.width = h.image.width, f.height = h.image.height, p.drawImage(h.image, 0, 0);
          var v = f.toDataURL(), x = document.createElement("a");
          return document.body.appendChild(x), x.download = g, x.href = v, x.click(), document.body.removeChild(x), !0;
        };
        if (o = m[d], i = o.name !== "" ? o.name : `material${o.id}`, t += `newmtl ${i}
`, o.color) {
          let h = o.color;
          t += `Kd ${h.r} ${h.g} ${h.b}
`;
        }
        if (o.specular) {
          let h = o.specular;
          t += `Ks ${h.r} ${h.g} ${h.b}
`;
        }
        if (o.emissive) {
          let h = o.emissive;
          t += `Ke ${h.r} ${h.g} ${h.b}
`;
        }
        o.shininess && (t += `Ns ${o.shininess}
`), o.opacity && o.opacity < 1 && o.transparent === !0 && (t += `d ${o.opacity}
`, t += `Tr ${1 - o.opacity}
`), o.map && (a = i + "_diffuse" + u, c(o.map, a) && (t += "map_Kd " + a + `
`)), o.specularMap && (a = i + "_specular" + u, c(o.specularMap, a) && (t += "map_Ks " + a + `
`)), o.emissiveMap && (a = i + "_emissive" + u, c(o.emissiveMap, a) && (t += "map_Ke " + a + `
`)), o.normalMap && (a = i + "_normal" + u, c(o.normalMap, a) && (t += "norm " + a + `
`)), o.bumpMap && (a = i + "_bump" + u, c(o.bumpMap, a) && (t += "map_bump " + a + `
`)), o.alphaMap && (a = i + "_alpha" + u, c(o.alphaMap, a) && (t += "map_d " + a + `
`, o.transparent = !0));
      }
    }
    return e.traverse(function(n) {
      n.isMesh === !0 && s(n);
    }), t;
  }
}
class Yr {
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
      const S = /^<\//, T = /(\?>$)|(\/>$)/, D = /<[^>]+>[^<]*<\/[^<]+>/, O = ($, R) => R > 0 ? $ + O($, R - 1) : "";
      let I = 0;
      return b.match(/(<[^>]+>[^<]+<\/[^<]+>)|(<[^>]+>)/g).map(($) => {
        !D.test($) && !T.test($) && S.test($) && I--;
        const R = `${O("  ", I)}${$}`;
        return !D.test($) && !T.test($) && !S.test($) && I++, R;
      }).join(`
`);
    }
    function i(b) {
      const S = atob(b), T = new Uint8Array(S.length);
      for (let D = 0, O = T.length; D < O; D++)
        T[D] = S.charCodeAt(D);
      return T;
    }
    let a, u;
    function m(b, S) {
      a = a || document.createElement("canvas"), u = u || a.getContext("2d"), a.width = b.width, a.height = b.height, u.drawImage(b, 0, 0);
      const T = a.toDataURL(`image/${S}`, 1).replace(/^data:image\/(png|jpg);base64,/, "");
      return i(T);
    }
    const d = ["getX", "getY", "getZ", "getW"], l = new ue();
    function c(b, S = !1) {
      if (S) {
        const T = new Float32Array(b.count * 3);
        for (let D = 0, O = b.count; D < O; D++)
          l.fromBufferAttribute(b, D).convertLinearToSRGB(), T[3 * D + 0] = l.r, T[3 * D + 1] = l.g, T[3 * D + 2] = l.b;
        return T;
      } else if (b.isInterleavedBufferAttribute) {
        const T = new b.array.constructor(b.count * b.itemSize), D = b.itemSize;
        for (let O = 0, I = b.count; O < I; O++)
          for (let $ = 0; $ < D; $++)
            T[O * D + $] = b[d[$]](O);
        return T;
      } else
        return b.array;
    }
    function h(b, S, T) {
      return Array.isArray(b) ? b.slice(S, S + T) : new b.constructor(b.buffer, S * b.BYTES_PER_ELEMENT, T);
    }
    function g(b, S, T, D, O = !1) {
      const I = c(b, O);
      return `<source id="${S}"><float_array id="${S}-array" count="${I.length}">` + I.join(" ") + `</float_array><technique_common><accessor source="#${S}-array" count="${Math.floor(I.length / b.itemSize)}" stride="${b.itemSize}">` + T.map((R) => `<param name="${R}" type="${D}" />`).join("") + "</accessor></technique_common></source>";
    }
    let f;
    function p(b) {
      return b.updateMatrix(), f = f || new $t(), f.copy(b.matrix), f.transpose(), `<matrix>${f.toArray().join(" ")}</matrix>`;
    }
    function v(b) {
      let S = C.get(b);
      if (!S) {
        const T = b;
        if (T.isBufferGeometry !== !0)
          throw new Error("THREE.ColladaExporter: Geometry is not of type THREE.BufferGeometry.");
        const D = `Mesh${G.length + 1}`, O = T.index ? T.index.count * T.index.itemSize : T.attributes.position.count, I = T.groups != null && T.groups.length !== 0 ? T.groups : [{ start: 0, count: O, materialIndex: 0 }], $ = b.name ? ` name="${b.name}"` : "";
        let R = `<geometry id="${D}"${$}><mesh>`;
        const z = `${D}-position`, Z = `${D}-vertices`;
        R += g(T.attributes.position, z, ["X", "Y", "Z"], "float"), R += `<vertices id="${Z}"><input semantic="POSITION" source="#${z}" /></vertices>`;
        let N = `<input semantic="VERTEX" source="#${Z}" offset="0" />`;
        if ("normal" in T.attributes) {
          const U = `${D}-normal`;
          R += g(T.attributes.normal, U, ["X", "Y", "Z"], "float"), N += `<input semantic="NORMAL" source="#${U}" offset="0" />`;
        }
        if ("uv" in T.attributes) {
          const U = `${D}-texcoord`;
          R += g(T.attributes.uv, U, ["S", "T"], "float"), N += `<input semantic="TEXCOORD" source="#${U}" offset="0" set="0" />`;
        }
        if ("uv2" in T.attributes) {
          const U = `${D}-texcoord2`;
          R += g(T.attributes.uv2, U, ["S", "T"], "float"), N += `<input semantic="TEXCOORD" source="#${U}" offset="0" set="1" />`;
        }
        if ("color" in T.attributes) {
          const U = `${D}-color`;
          R += g(T.attributes.color, U, ["R", "G", "B"], "float", !0), N += `<input semantic="COLOR" source="#${U}" offset="0" />`;
        }
        let Q = null;
        if (T.index)
          Q = c(T.index);
        else {
          Q = new Array(O);
          for (let U = 0, ve = Q.length; U < ve; U++) Q[U] = U;
        }
        for (let U = 0, ve = I.length; U < ve; U++) {
          const xe = I[U], Be = h(Q, xe.start, xe.count), Et = Be.length / 3;
          R += `<triangles material="MESH_MATERIAL_${xe.materialIndex}" count="${Et}">`, R += N, R += `<p>${Be.join(" ")}</p>`, R += "</triangles>";
        }
        R += "</mesh></geometry>", G.push(R), S = { meshid: D, bufferGeometry: T }, C.set(b, S);
      }
      return S;
    }
    function x(b) {
      let S = E.get(b);
      if (S == null) {
        S = `image-${P.length + 1}`;
        const T = "png", D = b.name || S;
        let O = `<image id="${S}" name="${D}">`;
        n === "1.5.0" ? O += `<init_from><ref>${s.textureDirectory}${D}.${T}</ref></init_from>` : O += `<init_from>${s.textureDirectory}${D}.${T}</init_from>`, O += "</image>", P.push(O), E.set(b, S), k.push({
          directory: s.textureDirectory,
          name: D,
          ext: T,
          data: m(b.image, T),
          original: b
        });
      }
      return S;
    }
    function w(b) {
      let S = L.get(b);
      if (S == null) {
        S = `Mat${V.length + 1}`;
        let T = "phong";
        b.isMeshLambertMaterial === !0 ? T = "lambert" : b.isMeshBasicMaterial === !0 && (T = "constant", b.map !== null && console.warn("ColladaExporter: Texture maps not supported with MeshBasicMaterial."));
        const D = b.emissive ? b.emissive : new ue(0, 0, 0), O = b.color ? b.color : new ue(0, 0, 0), I = b.specular ? b.specular : new ue(1, 1, 1), $ = b.shininess || 0, R = b.reflectivity || 0;
        D.convertLinearToSRGB(), I.convertLinearToSRGB(), O.convertLinearToSRGB();
        let z = "";
        b.transparent === !0 && (z += "<transparent>" + (b.map ? '<texture texture="diffuse-sampler"></texture>' : "<float>1</float>") + "</transparent>", b.opacity < 1 && (z += `<transparency><float>${b.opacity}</float></transparency>`));
        const Z = `<technique sid="common"><${T}><emission>` + (b.emissiveMap ? '<texture texture="emissive-sampler" texcoord="TEXCOORD" />' : `<color sid="emission">${D.r} ${D.g} ${D.b} 1</color>`) + "</emission>" + (T !== "constant" ? "<diffuse>" + (b.map ? '<texture texture="diffuse-sampler" texcoord="TEXCOORD" />' : `<color sid="diffuse">${O.r} ${O.g} ${O.b} 1</color>`) + "</diffuse>" : "") + (T !== "constant" ? "<bump>" + (b.normalMap ? '<texture texture="bump-sampler" texcoord="TEXCOORD" />' : "") + "</bump>" : "") + (T === "phong" ? `<specular><color sid="specular">${I.r} ${I.g} ${I.b} 1</color></specular><shininess>` + (b.specularMap ? '<texture texture="specular-sampler" texcoord="TEXCOORD" />' : `<float sid="shininess">${$}</float>`) + "</shininess>" : "") + `<reflective><color>${O.r} ${O.g} ${O.b} 1</color></reflective><reflectivity><float>${R}</float></reflectivity>` + z + `</${T}></technique>`, N = `<effect id="${S}-effect"><profile_COMMON>` + (b.map ? `<newparam sid="diffuse-surface"><surface type="2D"><init_from>${x(b.map)}</init_from></surface></newparam><newparam sid="diffuse-sampler"><sampler2D><source>diffuse-surface</source></sampler2D></newparam>` : "") + (b.specularMap ? `<newparam sid="specular-surface"><surface type="2D"><init_from>${x(b.specularMap)}</init_from></surface></newparam><newparam sid="specular-sampler"><sampler2D><source>specular-surface</source></sampler2D></newparam>` : "") + (b.emissiveMap ? `<newparam sid="emissive-surface"><surface type="2D"><init_from>${x(b.emissiveMap)}</init_from></surface></newparam><newparam sid="emissive-sampler"><sampler2D><source>emissive-surface</source></sampler2D></newparam>` : "") + (b.normalMap ? `<newparam sid="bump-surface"><surface type="2D"><init_from>${x(b.normalMap)}</init_from></surface></newparam><newparam sid="bump-sampler"><sampler2D><source>bump-surface</source></sampler2D></newparam>` : "") + Z + (b.side === Ut ? '<extra><technique profile="THREEJS"><double_sided sid="double_sided" type="int">1</double_sided></technique></extra>' : "") + "</profile_COMMON></effect>", Q = b.name ? ` name="${b.name}"` : "", U = `<material id="${S}"${Q}><instance_effect url="#${S}-effect" /></material>`;
        q.push(U), V.push(N), L.set(b, S);
      }
      return S;
    }
    function M(b) {
      let S = `<node name="${b.name}">`;
      if (S += p(b), b.isMesh === !0 && b.geometry !== null) {
        const T = v(b.geometry), D = T.meshid, O = T.bufferGeometry;
        let I = null, $;
        const R = b.material || new Rt(), z = Array.isArray(R) ? R : [R];
        O.groups.length > z.length ? $ = new Array(O.groups.length) : $ = new Array(z.length), I = $.fill().map((Z, N) => w(z[N % z.length])), S += `<instance_geometry url="#${D}">` + (I.length > 0 ? "<bind_material><technique_common>" + I.map(
          (Z, N) => `<instance_material symbol="MESH_MATERIAL_${N}" target="#${Z}" ><bind_vertex_input semantic="TEXCOORD" input_semantic="TEXCOORD" input_set="0" /></instance_material>`
        ).join("") + "</technique_common></bind_material>" : "") + "</instance_geometry>";
      }
      return b.children.forEach((T) => S += M(T)), S += "</node>", S;
    }
    const C = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), k = [], P = [], G = [], V = [], q = [], J = M(e);
    let X = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?><COLLADA xmlns="${n === "1.4.1" ? "http://www.collada.org/2005/11/COLLADASchema" : "https://www.khronos.org/collada/"}" version="${n}"><asset>` + ("<contributor><authoring_tool>three.js Collada Exporter</authoring_tool>" + (s.author !== null ? `<author>${s.author}</author>` : "") + `</contributor><created>${(/* @__PURE__ */ new Date()).toISOString()}</created><modified>${(/* @__PURE__ */ new Date()).toISOString()}</modified>` + (s.unitName !== null ? `<unit name="${s.unitName}" meter="${s.unitMeter}" />` : "") + `<up_axis>${s.upAxis}</up_axis>`) + "</asset>";
    X += `<library_images>${P.join("")}</library_images>`, X += `<library_effects>${V.join("")}</library_effects>`, X += `<library_materials>${q.join("")}</library_materials>`, X += `<library_geometries>${G.join("")}</library_geometries>`, X += `<library_visual_scenes><visual_scene id="Scene" name="scene">${J}</visual_scene></library_visual_scenes>`, X += '<scene><instance_visual_scene url="#Scene"/></scene>', X += "</COLLADA>";
    const le = {
      data: o(X),
      textures: k
    };
    return typeof t == "function" && requestAnimationFrame(() => t(le)), le;
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
        u(t, e);
        break;
      case "stl":
        m(t, e);
        break;
      case "ply":
        d(t, e);
        break;
      default:
        console.log('The file type "' + s + '" is not supported.');
        break;
    }
    function n(g, f = "object.json") {
      const p = (x, w) => typeof w == "number" ? parseFloat(w.toFixed(6)) : w;
      let v = g.toJSON();
      try {
        v = JSON.stringify(v, p, "	"), v = v.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, "$1");
      } catch {
        v = JSON.stringify(v);
      }
      l(v, f);
    }
    function o(g, f = "model.obj") {
      const p = f, v = p.replace(".obj", ""), x = v + ".mtl", { OBJExporter: w } = F.exporters, M = new w();
      l(M.parse(g, v), p);
      const { MTLExporter: C } = F.exporters, L = new C();
      l(L.parse(g), x);
    }
    function i(g, f = "scene.dae") {
      const { ColladaExporter: p } = F.exporters;
      new p().parse(g, function(x) {
        l(x.data, f);
      });
    }
    function a(g, f = "scene.glb") {
      const { GLTFExporter: p } = F.exporters, v = new p(), x = { binary: !0 };
      v.parse(
        g,
        function(w) {
          c(w, f);
        },
        function(w) {
          console.log("An error happened during parsing", w);
        },
        x
      );
    }
    function u(g, f = "scene.gltf") {
      const { GLTFExporter: p } = F.exporters, v = new p(), x = { binary: !1 };
      v.parse(
        g,
        function(w) {
          l(JSON.stringify(w, null, 2), f);
        },
        function(w) {
          console.log("An error happened during parsing", w);
        },
        x
      );
    }
    function m(g, f = "model.stl", p = !1) {
      const { STLExporter: v } = F.exporters, x = new v();
      p === !0 ? l(x.parse(g), f) : c(x.parse(g, { binary: !0 }), f);
    }
    function d(g, f = "model.ply") {
      const { PLYExporter: p } = F.exporters, v = new p();
      l(v.parse(g), f);
    }
    function l(g, f) {
      h(new Blob([g], { type: "text/plain" }), f);
    }
    function c(g, f) {
      h(new Blob([g], { type: "application/octet-stream" }), f);
    }
    function h(g, f) {
      r.href = URL.createObjectURL(g), r.download = f, r.dispatchEvent(new MouseEvent("click")), URL.revokeObjectURL(r.href);
    }
  };
};
F.exporters = {};
F.setExporter = (r) => {
  F.exporters = { ...F.exporters, ...r };
};
const qr = (r) => {
  switch (r.split(".").pop().toLowerCase()) {
    case "obj":
      F.setExporter({ OBJExporter: cr, MTLExporter: Jr });
      break;
    case "dae":
      F.setExporter({ ColladaExporter: Yr });
      break;
    case "glb":
      F.setExporter({ GLTFExporter: je });
      break;
    case "gltf":
      F.setExporter({ GLTFExporter: je });
      break;
    case "stl":
      F.setExporter({ STLExporter: ur });
      break;
    case "ply":
      F.setExporter({ PLYExporter: lr });
      break;
  }
}, Gn = (r, e) => {
  const t = new F();
  qr(r), t.saveFile(r, e);
}, Zr = "https://unpkg.com/browse/three@0.161.0/examples/jsm/libs/basis/", Ye = "https://www.gstatic.com/draco/versioned/decoders/1.5.6/", A = function() {
  const r = this;
  this.imageFiles = [], this.mtlFile = null, this.loadItemList = (d) => {
    qe.getFilesFromItemList(d, (l, c) => {
      r.loadFiles(l, c);
    });
  }, this.loadFiles = async function(d, l) {
    if (d.length > 0) {
      l = l || qe.createFilesMap(d);
      const c = n();
      c.setURLModifier((h) => {
        h = h.replace(/^(\.?\/)/, "");
        const g = l[h];
        return g ? (console.log("Loading", h), URL.createObjectURL(g)) : h;
      }), this.imageFiles = [], this.mtlFile = null;
      for (let h = 0; h < d.length; h++)
        d[h].name.match(/\.(png|jpg|gif)$/i) ? this.imageFiles.push(d[h]) : d[h].name.match(/\.(mtl)$/i) && (this.mtlFile = d[h]);
      for (let h = 0; h < d.length; h++)
        this.loadFile(d[h], c);
      this.imageFiles.length = 0, this.mtlFile = null;
    }
  }, this.loadFile = function(d, l) {
    const c = d.name, h = c.split(".").pop().toLowerCase(), g = new FileReader();
    switch (g.addEventListener("progress", (f) => {
      const p = "(" + Math.floor(f.total / 1e3).toLocaleString() + " KB)", v = Math.floor(f.loaded / f.total * 100) + "%";
      console.log("Loading", c, p, v);
    }), h) {
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
        g.addEventListener("load", (v) => e(h, v, c, l, !1), !1), g.readAsArrayBuffer(d);
        break;
      case "dae":
      case "js":
      case "json":
      case "svg":
      case "wrl":
        g.addEventListener("load", (v) => e(h, v, c, l, !1), !1), g.readAsText(d);
        break;
      case "obj":
        let f = function(v, x = null) {
          g.addEventListener("load", async function(w) {
            const M = w.target.result, { OBJLoader: C } = A.loaders, L = new C(l);
            x && L.setMaterials(x);
            const E = L.parse(M);
            E.name = c, a(E);
          }, !1), g.readAsText(v);
        };
        (function(v, x) {
          if (x) {
            const w = new FileReader();
            w.addEventListener("load", async function(M) {
              const C = M.target.result, { MTLLoader: L } = A.loaders, E = new L(l).parse(C);
              E.preload(), console.log("Loading", x.name), f(v, E);
            }, !1), w.readAsText(x);
          } else
            f(v);
        })(d, this.mtlFile);
        break;
      case "zip":
        setTimeout(() => {
          g.addEventListener("load", (v) => t(v.target.result, c), !1), g.readAsArrayBuffer(d);
        }, 10);
        break;
      default:
        ["png", "jpg", "gif", "bmp", "tga", "mtl", "bin"].includes(h) || console.log("Unsupported 3D file format:", h);
        break;
    }
  };
  async function e(d, l, c, h, g = !1) {
    if (g) {
      const f = l;
      if (d === "dae" || d === "gltf" || d === "wrl") {
        const { strFromU8: p } = A.loaders;
        l = p(f);
      } else
        l = f.buffer;
    } else
      l = l.target.result;
    switch (d) {
      case "3ds": {
        const { TDSLoader: f } = A.loaders, v = new f(h).parse(l);
        v.name = c, a(v);
        break;
      }
      case "3mf": {
        const { ThreeMFLoader: f } = A.loaders, v = new f(h).parse(l);
        v.name = c, a(v);
        break;
      }
      case "amf": {
        const { AMFLoader: f } = A.loaders, v = new f(h).parse(l);
        v.name = c, a(v);
        break;
      }
      case "dae": {
        const { ColladaLoader: f } = A.loaders, v = new f(h).parse(l);
        v.scene.name = c, i(v.scene, v.animations), a(v.scene);
        break;
      }
      case "drc": {
        const { DRACOLoader: f } = A.loaders, p = new f(h);
        p.setDecoderPath(Ye), p.parse(l, function(v) {
          v.center(), o(v);
          let x;
          if (v.index !== null) {
            const w = new y.MeshStandardMaterial();
            x = new y.Mesh(v, w), x.name = c;
          } else {
            const w = new y.PointsMaterial({ size: 0.01 });
            v.hasAttribute("color") === !0 && (w.vertexColors = !0), x = new y.Points(v, w), x.name = c;
          }
          p.dispose(), a(x);
        });
        break;
      }
      case "fbx": {
        const { FBXLoader: f } = A.loaders, v = new f(h).parse(l);
        v.name = c, i(v, v.animations), a(v);
        break;
      }
      case "md2": {
        const { MD2Loader: f } = A.loaders, v = new f(h).parse(l);
        let x = null;
        if (g)
          for (let C in r.zip) {
            let L = C.split(".").pop().toLowerCase();
            if (L === "jpg" && (L = "jpeg"), ["png", "jpeg", "gif"].includes(L)) {
              const E = r.zip[C], k = "image/" + L, P = new Blob([E.buffer], { type: k }), G = URL.createObjectURL(P);
              x = new y.TextureLoader().load(G);
              break;
            }
          }
        else
          r.imageFiles.length === 1 && (x = new y.TextureLoader().load(URL.createObjectURL(r.imageFiles[0])));
        const w = new y.MeshStandardMaterial({ map: x }), M = new y.Mesh(v, w);
        M.mixer = new y.AnimationMixer(M), M.name = c, i(M, v.animations), a(M);
        break;
      }
      case "glb": {
        const f = await s(h);
        f.parse(l, "", function(p) {
          const v = p.scene;
          v.name = c, i(v, p.animations), a(v), f.dracoLoader.dispose(), f.ktx2Loader.dispose();
        });
        break;
      }
      case "gltf": {
        const f = await s(h);
        f.parse(l, "", function(p) {
          const v = p.scene;
          v.name = c, i(v, p.animations), a(v), f.dracoLoader.dispose(), f.ktx2Loader.dispose();
        });
        break;
      }
      case "js":
      case "json": {
        const f = f;
        if (f.indexOf("postMessage") !== -1) {
          const v = new Blob([f], { type: "text/javascript" }), x = URL.createObjectURL(v), w = new Worker(x);
          w.onmessage = function(M) {
            M.data.metadata = { version: 2 }, m(M.data);
          }, w.postMessage(Date.now());
          return;
        }
        let p;
        try {
          p = JSON.parse(f);
        } catch (v) {
          alert(v);
          return;
        }
        m(p);
        break;
      }
      case "kmz": {
        const { KMZLoader: f } = A.loaders, v = new f(h).parse(l);
        v.scene.name = c, a(v.scene);
        break;
      }
      case "mtl": {
        g && (r.bufferMTL = l);
        break;
      }
      case "obj": {
        g && (r.bufferOBJ = l);
        break;
      }
      case "ply": {
        const { PLYLoader: f } = A.loaders, p = new f(h).parse(l);
        o(p);
        const v = new y.MeshStandardMaterial(), x = new y.Mesh(p, v);
        x.name = c, a(x);
        break;
      }
      case "stl": {
        const { STLLoader: f } = A.loaders, p = new f(h).parse(l);
        o(p);
        const v = new y.MeshStandardMaterial({ vertexColors: !!p.hasColors }), x = new y.Mesh(p, v);
        x.name = c, a(x);
        break;
      }
      case "svg": {
        const { SVGLoader: f } = A.loaders, v = new f(h).parse(l).paths, x = new y.Group();
        x.scale.multiplyScalar(0.1), x.scale.y *= -1;
        for (let w = 0; w < v.length; w++) {
          const M = v[w], C = new y.MeshBasicMaterial({
            color: M.color,
            depthWrite: !1
          }), L = f.createShapes(M);
          for (let E = 0; E < L.length; E++) {
            const k = L[E], P = new y.ShapeGeometry(k), G = new y.Mesh(P, C);
            x.add(G);
          }
        }
        x.name = c, a(x);
        break;
      }
      case "vtk": {
        const { VTKLoader: f } = A.loaders, p = new f(h).parse(l);
        o(p);
        const v = new y.MeshStandardMaterial(), x = new y.Mesh(p, v);
        x.name = c, a(x);
        break;
      }
      case "vox": {
        const { VOXLoader: f, VOXMesh: p } = A.loaders, x = new f(h).parse(l).map((M) => new p(M)), w = new y.Group();
        w.add(...x), w.name = c, a(w);
        break;
      }
      case "wrl": {
        const { VRMLLoader: f } = A.loaders, p = new f(h).parse(l);
        p.name = c, a(p);
        break;
      }
      case "zip": {
        t(l, c);
        break;
      }
      default: {
        ["png", "jpg", "gif", "bmp", "tga", "mtl", "bin"].includes(d) || console.log("Unsupported 3D file format:", d);
        break;
      }
    }
  }
  async function t(d, l) {
    const { unzipSync: c, strFromU8: h } = A.loaders, g = c(new Uint8Array(d));
    r.zip = g;
    const f = n();
    f.setURLModifier((p) => {
      const v = g[p];
      if (v) {
        console.log("Loading", p);
        const x = new Blob([v.buffer], { type: "application/octet-stream" });
        return URL.createObjectURL(x);
      }
      return p;
    }), r.bufferOBJ = null, r.bufferMTL = null;
    for (let p in g) {
      const v = g[p], x = p.split(".").pop().toLowerCase();
      e(x, v, l, f, !0);
    }
    if (r.bufferMTL && r.bufferOBJ) {
      const { OBJLoader: p, MTLLoader: v } = A.loaders, x = new v(f).parse(h(r.bufferMTL)), w = new p(f).setMaterials(x).parse(h(r.bufferOBJ));
      w.name = l, a(w);
    }
    r.bufferOBJ = null, r.bufferMTL = null, r.zip = null;
  }
  async function s(d) {
    const { GLTFLoader: l, KTX2Loader: c, DRACOLoader: h, MeshoptDecoder: g } = A.loaders, f = new l(d);
    if (h) {
      const p = new h();
      p.setDecoderPath(Ye), f.setDRACOLoader(p);
    }
    if (c) {
      const p = new c();
      p.setTranscoderPath(Zr), p.detectSupport(W().threefy.renderer), f.setKTX2Loader(p);
    }
    return g && f.setMeshoptDecoder(g), Promise.resolve(f).then((p) => p);
  }
  function n() {
    const d = new y.LoadingManager();
    return d.onStart = () => {
      es();
    }, d.onProgress = (l, c, h) => {
      rs(c, h);
    }, d.onLoad = () => {
      ts();
    }, d.onError = (l) => {
      ss("There was an error loading " + l);
    }, d;
  }
  function o(d) {
    let l = !1;
    if (d.isDiscreteGeometry === !0) {
      const c = d.faces[0].vertexNormals;
      c && c.length === 3 && (l = !0);
    } else if (d.isBufferGeometry === !0) {
      const c = d.attributes.normal;
      c && c.count > 0 && (l = !0);
    }
    l === !1 && d.computeVertexNormals();
  }
  function i(d, l) {
    l && l.length > 0 && d.animations.push(...l);
  }
  function a(d) {
    const { threefy: l } = W(), c = l._cache.get(d.name);
    c[0] = d;
    for (let h = 1, g = c.length; h < g; h++)
      c[h].dispatchEvent({ type: d.name });
  }
  function u(d) {
    W().threefy.setScene(d);
  }
  function m(d) {
    switch (d.metadata === void 0 && (d.metadata = { type: "DiscreteGeometry" }), d.metadata.type === void 0 && (d.metadata.type = "DiscreteGeometry"), d.metadata.formatVersion !== void 0 && (d.metadata.version = d.metadata.formatVersion), d.metadata.type.toLowerCase()) {
      case "buffergeometry": {
        const c = new y.BufferGeometryLoader().parse(d), h = new y.Mesh(c);
        a(h);
        break;
      }
      case "discretegeometry": {
        console.error('ThreeLoader: "DiscreteGeometry" is no longer supported.');
        break;
      }
      case "object": {
        new y.ObjectLoader().parse(d, function(c) {
          c.isScene ? u(c) : c.name === "natureObject" ? c.children.forEach(function(h) {
            add(cloneObject(h));
          }) : a(c);
        });
        break;
      }
    }
  }
  this.openFiles = function() {
    const d = document.createElement("div");
    d.style.cssText = "position: absolute; left: 44%; top: 48%;";
    const l = document.createElement("input");
    l.id = "file-input", l.type = "file", l.multiple = !0, l.style.display = "none", l.addEventListener("change", () => {
      d.remove(), l.files && r.loadFiles(l.files);
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
        `, d.appendChild(l), d.appendChild(c), document.body.append(d);
  }, this.dragDropFiles = function(d) {
    d || (d = W().threefy.dom), d.addEventListener("dragover", function(l) {
      l.preventDefault(), l.stopPropagation(), d.classList.add("dragover");
    }), d.addEventListener("dragleave", function(l) {
      l.preventDefault(), l.stopPropagation(), d.classList.remove("dragover");
    }), d.addEventListener("drop", function(l) {
      l.preventDefault(), l.dataTransfer.types[0] !== "text/plain" && (l.dataTransfer.items ? r.loadItemList(l.dataTransfer.items) : r.loadFiles(l.dataTransfer.files));
    }, !1);
  };
};
A.loaders = {};
A.setLoader = (r) => {
  A.loaders = { ...A.loaders, ...r };
};
const qe = {
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
    function a(u) {
      u && (u.isDirectory ? u.createReader().readEntries(function(d) {
        for (let l = 0; l < d.length; l++)
          a(d[l]);
        i();
      }) : u.isFile && u.file(function(m) {
        n.push(m), o[u.fullPath.substr(1)] = m, i();
      }), s++);
    }
    for (let u = 0; u < r.length; u++)
      a(r[u].webkitGetAsEntry());
  }
}, Qr = function(r, e) {
  const t = r.map(async (s) => {
    let o = await (await fetch(s)).blob(), i;
    return s.split(".").pop() === "enc" ? (o = null, i = s.replace(".enc", "")) : i = s, i = i.split("/").pop().split("?")[0], o ? new File([o], i) : null;
  });
  Promise.all(t).then((s) => {
    s = s.filter((o) => o), new A().loadFiles(s);
  });
}, es = function() {
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
}, ts = function() {
  const r = document.getElementById("loading-spinner");
  r && (r.style.display = "none");
}, rs = function(r, e) {
  const t = document.getElementById("loading-spinner");
  t && (t.style.width = `${r / e * 100 | 0}%`);
}, ss = function(r) {
  console.warn(r);
}, ns = (r) => new Promise(async (e) => {
  let s = await (await fetch(r)).blob();
  const n = r.split("/").pop().split("?")[0], o = new File([s], n), i = new FileReader();
  i.addEventListener("load", (a) => {
    const u = a.target.result, m = mt(new Uint8Array(u));
    e(Object.keys(m));
  }, !1), i.readAsArrayBuffer(o);
}), Ct = (r) => {
  switch (r.split(".").pop().toLowerCase()) {
    case "3ds":
      A.setLoader({ TDSLoader: Tr });
      break;
    case "3mf":
      A.setLoader({ ThreeMFLoader: gr });
      break;
    case "amf":
      A.setLoader({ AMFLoader: mr });
      break;
    case "dae":
      A.setLoader({ ColladaLoader: yr });
      break;
    case "drc":
      A.setLoader({ DRACOLoader: Ve });
      break;
    case "fbx":
      A.setLoader({ FBXLoader: fr });
      break;
    case "md2":
      A.setLoader({ MD2Loader: hr });
      break;
    case "gltf":
    case "glb":
      A.setLoader({ GLTFLoader: Er, KTX2Loader: Lr, DRACOLoader: Ve, MeshoptDecoder: Sr });
      break;
    case "kmz":
      A.setLoader({ KMZLoader: Cr });
      break;
    case "mtl":
    case "obj":
      A.setLoader({ OBJLoader: wr, MTLLoader: br });
      break;
    case "ply":
      A.setLoader({ PLYLoader: vr });
      break;
    case "stl":
      A.setLoader({ STLLoader: xr });
      break;
    case "svg":
      A.setLoader({ SVGLoader: Mr });
      break;
    case "vtk":
      A.setLoader({ VTKLoader: dr });
      break;
    case "vox":
      A.setLoader({ VOXLoader: kr, VOXMesh: Ar });
      break;
    case "wrl":
      A.setLoader({ VRMLLoader: pr });
      break;
    case "zip":
      A.setLoader({ unzipSync: mt, strFromU8: _r }), ns(r).then((t) => {
        t.forEach((s) => Ct(s));
      });
      break;
  }
}, Tt = (r, e = "texture") => {
  r = Array.isArray(r) ? r : [r];
  const { threefy: t } = W();
  let s;
  e === "texture" && (s = new y.TextureLoader()), e === "audio" && (s = new y.AudioLoader());
  const n = (o) => {
    let i = t._cache.get(o);
    return i ? Promise.resolve(i) : new Promise((a) => {
      s.load(o, (u) => {
        t._cache.set(o, u), a(u);
      });
    });
  };
  return new Promise((o) => {
    Promise.all(r.map((i) => n(i))).then(
      (i) => o(i.length === 1 ? i[0] : i)
    );
  });
}, In = (r) => Tt(r, "texture"), os = (r) => Tt(r, "audio"), is = (r) => {
  r = Array.isArray(r) ? r : [r];
  const { threefy: e } = W(), t = r.map((s) => e.loadTexture(s));
  return t.length === 1 ? t[0] : t;
}, Fn = (r) => {
  if (r = Array.isArray(r) ? r : [r], /png|jpg|jpeg|gif|bmp/i.test(r[0].split(".").pop()))
    return is(r);
  if (/mp3|ogg|wav/i.test(r[0].split(".").pop()))
    return os(r);
  r.forEach((o) => Ct(o));
  const e = (o) => o.split("/").pop(), { threefy: t } = W(), s = [], n = ({ target: o }) => {
    const a = t._cache.get(o.name)[0], u = s.map((l) => l.name).indexOf(o.name);
    s[u] = a;
    const m = o;
    m.removeEventListener(m.name, n);
    const d = m.parent;
    d && (d.remove(m), d.add(a)), a._listeners = m._listeners, a.applyMatrix4(m.matrix), a.dispatchEvent({ type: "onLoad" });
  };
  return r.forEach((o, i) => {
    const a = e(o), u = new y.Object3D();
    u.name = a, t._cache.has(a) ? (t._cache.get(a).push(u), r[i] = null) : t._cache.set(a, [null, u]), u.addEventListener(a, n), s.push(u);
  }), r = r.filter((o) => o !== null), r.length > 0 && Qr(r), s.length === 1 ? s[0] : s;
};
class ee {
  constructor(e, t, s, n) {
    this.x = e, this.y = t, this.width = s, this.height = n, this.finalX = e + s, this.finalY = t + n;
  }
  overlaps(e) {
    return this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.y + this.height > e.y;
  }
}
class as {
  constructor(e, t = 512, s = 512, n = !0, o = 4096) {
    if (this.MAX_TEXTURE_SIZE = o, !e) return;
    this.texturesObj = e, this.textureNames = Object.keys(e), this.texWidth = t, this.texHeight = s;
    const i = {};
    this.textureNames.forEach((c) => {
      const h = e[c].uuid;
      i[h] || (i[h] = []), i[h].push(c);
    }), this.uuid2Names = i, this.canvas = document.createElement("canvas"), this.textureCount = this.textureNames.length, this.maxWidth = t, this.maxHeight = s, this.textureCache = {}, this.node = {}, this.node.rectangle = new ee(0, 0, this.maxWidth * this.textureCount, this.maxHeight * this.textureCount), this.textureOffsets = {}, this.allNodes = [], this.insert(this.node, this.findNextTexture()), this.ranges = {};
    const a = this.calculateImageSize();
    this.canvas.width = a.width, this.canvas.height = a.height;
    const u = this.canvas.getContext("2d");
    this.context = u;
    const [m, d] = [this.texWidth, this.texHeight], l = this.textureOffsets;
    Object.keys(l).forEach((c) => {
      const h = e[c], g = l[c].x, f = l[c].y;
      u.drawImage(h.image, g, f, m, d);
      const p = {};
      p.startU = g / a.width, p.endU = (g + m) / a.width, p.startV = f / a.height, p.endV = (f + d) / a.height, n && (p.startV = 1 - p.startV, p.endV = 1 - p.endV), this.ranges[c] = p;
    }), this.makeCanvasPowerOfTwo(), this.mergedTexture = new y.CanvasTexture(this.canvas), this.mergedTexture.wrapS = y.ClampToEdgeWrapping, this.mergedTexture.wrapT = y.ClampToEdgeWrapping, this.mergedTexture.minFilter = y.LinearMipmapLinearFilter, this.mergedTexture.magFilter = y.LinearFilter, this.mergedTexture.flipY = n;
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
      let a = this.maxWidth * this.textureCount + this.maxHeight * this.textureCount, u = 0, m = !1;
      const d = this.texturesObj;
      for (let l = 0; l < this.allNodes.length; l++) {
        const c = this.allNodes[l];
        if (!c.textureName) {
          s[t] = { x: c.rectangle.x, y: c.rectangle.y };
          const h = this.calculateImageSize(), g = h.width + h.height;
          if (g < a && h.width <= this.MAX_TEXTURE_SIZE && h.height <= this.MAX_TEXTURE_SIZE) {
            let f = !1;
            Object.keys(s).forEach((p) => {
              if (p === t) return;
              const v = c.rectangle, x = s[p].x, w = s[p].y, M = d[p].image, C = new ee(v.x, v.y, o, i), L = new ee(x, w, M.width, M.height);
              C.overlaps(L) && (f = !0);
            }), f || (a = g, u = this.allNodes[l], m = !0);
          }
          delete s[t];
        }
      }
      if (m) {
        if (s[t] = { x: u.rectangle.x, y: u.rectangle.y }, u.textureName = t, !u.children) {
          const c = {}, h = {};
          c.upperNode = u, h.upperNode = u, u.children = [c, h];
          const g = u.rectangle.x, f = u.rectangle.y, p = this.maxWidth * this.textureCount, v = this.maxHeight * this.textureCount;
          c.rectangle = new ee(g + o, f, p - (g + o), v - f), h.rectangle = new ee(g, f + i, p - g, v - (f + i)), this.allNodes.push(c), this.allNodes.push(h);
        }
        const l = this.findNextTexture();
        return [e, l];
      } else
        throw new Error("Error: Try to use smaller textures.");
    } else {
      const a = e.rectangle.width, u = e.rectangle.height;
      e.textureName = t;
      const m = {}, d = {};
      m.upperNode = e, d.upperNode = e, e.children = [m, d], m.rectangle = new ee(o, 0, a - o, i), d.rectangle = new ee(0, i, a, u - i), s[t] = { x: e.rectangle.x, y: e.rectangle.y };
      const l = e.children[0];
      this.allNodes = [e, m, d];
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
      const a = o[i].x, u = o[i].y;
      e = Math.max(a + s, e), t = Math.max(u + n, t);
    }), { width: e, height: t };
  }
  findNextTexture() {
    const e = this, t = this.textureNames.find((s) => !e.textureCache[s]);
    return t ? (this.textureCache[t] = !0, t) : null;
  }
  toSameLayout(e, t) {
    const s = this.calculateImageSize(), n = document.createElement("canvas");
    n.width = s.width, n.height = s.height;
    const o = n.getContext("2d"), [i, a] = [this.texWidth, this.texHeight], u = this.textureOffsets;
    Object.keys(u).forEach((l) => {
      const c = e[l], h = u[l].x, g = u[l].y;
      o.drawImage(c.image, h, g, i, a);
    });
    const m = this.makeCanvasPowerOfTwo(n), d = new y.CanvasTexture(m);
    return d.wrapS = y.ClampToEdgeWrapping, d.wrapT = y.ClampToEdgeWrapping, d.minFilter = y.LinearMipmapLinearFilter, d.magFilter = y.LinearFilter, d.flipY = t, d;
  }
}
const cs = (r, e, t) => {
  const { diffuse: s, opacity: n } = t, { color: o, emissive: i, specular: a, shininess: u, metalness: m, roughness: d } = t, { ior: l, specularIntensity: c, specularColor: h } = t, { clearcoat: g, clearcoatRoughness: f, dispersion: p } = t, { iridescence: v, iridescenceIOR: x, iridescenceThicknessMinimum: w, iridescenceThicknessMaximum: M } = t, { sheenColor: C, sheenRoughness: L, anisotropyVector: E } = t;
  s ? r.setValue(e, "diffuse", ...s) : r.setValue(e, "diffuse", 1, 1, 1), n !== void 0 && r.setValue(e, "opacity", n), o && r.setValue(e, "diffuse", ...o), i && r.setValue(e, "emissive", ...i), a && r.setValue(e, "specular", ...a), u !== void 0 && r.setValue(e, "shininess", u), m !== void 0 && r.setValue(e, "metalness", m), d !== void 0 && r.setValue(e, "roughness", d), l !== void 0 && r.setValue(e, "ior", l), c !== void 0 && r.setValue(e, "specularIntensity", c), h && r.setValue(e, "specularColor", ...h), g !== void 0 && r.setValue(e, "clearcoat", g), f !== void 0 && r.setValue(e, "clearcoatRoughness", f), p !== void 0 && r.setValue(e, "dispersion", p), v !== void 0 && r.setValue(e, "iridescence", v), x !== void 0 && r.setValue(e, "iridescenceIOR", x), w !== void 0 && r.setValue(e, "iridescenceThicknessMinimum", w), M !== void 0 && r.setValue(e, "iridescenceThicknessMaximum", M), C && r.setValue(e, "sheenColor", ...C), L !== void 0 && r.setValue(e, "sheenRoughness", L), E && r.setValue(e, "anisotropyVector", ...E);
}, Ze = (r, e = 512, t = 512) => {
  if (!r || r.length === 0) return;
  let s = !0;
  const n = (w, M, C, L = "white") => {
    const E = w[`${M}-${C}`];
    if (E) return E;
    const k = document.createElement("canvas"), P = k.getContext("2d");
    k.width = M, k.height = C, P.fillStyle = L, P.fillRect(0, 0, M, C);
    const G = new y.CanvasTexture(k);
    return w[`${M}-${C}`] = G, G;
  }, o = (w, M, C, L) => {
    const E = w[M.uuid];
    if (E) return E;
    M.image || console.warn("resizeTexture(): image data not found in your texture"), s = M.flipY;
    const k = document.createElement("canvas"), P = k.getContext("2d");
    k.width = C, k.height = L, P.drawImage(M.image, 0, 0, C, L);
    const { mapping: G, wrapS: V, wrapT: q, magFilter: J, minFilter: ce, format: X, type: le, anisotropy: b, colorSpace: S } = M, T = new y.CanvasTexture(k, G, V, q, J, ce, X, le, b);
    return T.colorSpace = S, T.uuid = M.uuid, w[T.uuid] = T, T;
  }, i = {}, a = {}, u = {}, m = {};
  let d;
  const { renderer: l } = W(), c = l.capabilities.maxTextureSize;
  let h = [
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
  const g = r.map((w) => {
    const M = w.material;
    return Array.isArray(M) ? M[0] : M;
  });
  if (h.forEach((w) => {
    g.map((C) => !!C[w]).every((C) => C === !1) || (i[w] = {});
  }), h = Object.keys(i), h.length > 0) {
    h.forEach((C) => {
      g.forEach((L, E) => {
        const k = `${E}`, P = L[C];
        P ? i[C][k] = o(a, P, e, t) : i[C][k] = n(u, e, t);
      });
    });
    const w = i.map ? "map" : h.find((C) => !!i[C]), M = new as(i[w], e, t, s, c);
    d = M.ranges, m[w] = M.mergedTexture, h.forEach((C) => {
      C !== w && (m[C] = M.toSameLayout(i[C], s)), C === "map" || C === "emissiveMap" ? m[C].colorSpace = y.SRGBColorSpace : C === "envMap" || C === "lightMap" ? m[C].colorSpace = y.LinearSRGBColorSpace : m[C].colorSpace = y.NoColorSpace;
    });
  }
  const f = r.length, p = new xt(f, m);
  i.alphaMap && (p.alphaTest = 0.5);
  const v = new y.BatchedMesh(f, 6553600, 6553600 * 2, p), x = new y.Matrix4();
  for (let w = 0; w < f; w++) {
    const M = r[w], C = v.addInstance(v.addGeometry(M.geometry)), L = C;
    if (d && d[L]) {
      let k;
      s ? k = [d[L].startU, d[L].startV, d[L].endU, d[L].endV] : k = [d[L].startU, d[L].endV, d[L].endU, d[L].startV], p.setValue(w, "uvRange", ...k);
    }
    let E = M.matrixWorld;
    M.isSkinnedMesh && (E = x.multiplyMatrices(M.bindMatrixInverse, E)), v.setMatrixAt(C, E), cs(p, C, g[w]);
  }
  return v;
}, ls = (r, e = 512, t = 512) => new Promise((s) => {
  if (r.find((o) => {
    const i = o.material;
    return !!(i && Object.keys(i).find((u) => /(map|Map)$/.test(u) && i[u]));
  }))
    setTimeout(() => {
      const o = Ze(r, e, t);
      s(o);
    }, 500);
  else {
    const o = Ze(r, e, t);
    s(o);
  }
}), jn = H((r, e) => {
  const { children: t, ...s } = r;
  let n;
  const o = [];
  if (t.forEach((a) => {
    if (/geometry/i.test(a.type)) {
      const { args: u, type: m, ...d } = a.props, l = m !== void 0 ? `${m[0].toUpperCase()}${m.slice(1)}Geometry` : `${a.type[0].toUpperCase()}${a.type.slice(1)}`, c = u !== void 0 ? u : [], h = new y[l](...c);
      Y(h, d), o.push(h);
    } else if (/primitive/.test(a.type)) {
      const { object: u, ...m } = a.props;
      if (u != null && u.isBufferGeometry) {
        const d = u;
        d && (Y(d, m), o.push(d));
      }
      u != null && u.isMaterial && (n = u);
    } else /material/i.test(a.type) && (n = a);
  }), o.length === 0) return null;
  const i = o.length === 1 ? o[0] : Pr(o, !1);
  return /* @__PURE__ */ B.createElement("mesh", { ref: e, ...s }, /* @__PURE__ */ B.createElement("primitive", { object: i, attach: "geometry" }), n);
}), Vn = H((r, e) => {
  const { children: t, ...s } = r;
  return e || (e = me(null)), ge(() => {
    if (e.current) {
      const n = e.current;
      n.visible = !1, ls(n.children).then((o) => {
        const i = n.parent;
        i.remove(n), i.add(o), e.current = o;
      });
    }
  }, [t]), (t == null ? void 0 : t.length) > 0 ? /* @__PURE__ */ B.createElement("batchedMesh", { ref: e, ...s }, t) : null;
});
class us extends y.Sprite {
  constructor(e = "", t = {}) {
    const {
      textHeight: s = 0.5,
      textWidthScale: n = 1,
      textColor: o = "#ffffff",
      textAlign: i = "center",
      textBaseline: a = "middle",
      fontStyle: u = "normal",
      fontVariant: m = "normal",
      fontWeight: d = "normal",
      fontSize: l = "64px",
      fontFamily: c = "Karla, sans-serif"
    } = t, h = {
      string: e,
      height: s,
      widthScale: n,
      color: jr(o),
      align: i,
      baseline: a
    }, g = {
      style: u,
      variant: m,
      weight: d,
      size: l,
      family: c
    };
    super(), this.isTextSprite = !0, this.type = "TextSprite", this.text = h, this.font = g, this.ctx = this.updateText(e);
  }
  copy(e) {
    return y.Sprite.prototype.copy.call(this, e), this.text = JSON.parse(JSON.stringify(e.text)), this.font = JSON.parse(JSON.stringify(e.font)), this.ctx.drawImage(e.ctx.canvas, 0, 0), this;
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
    const i = new y.CanvasTexture(o.canvas);
    this.material ? (this.material.map = i, this.material.map.needsUpdate = !0) : this.material = new y.SpriteMaterial({ color: 16777215, map: i });
    const a = t.height * t.string.length * t.widthScale;
    return this.scale.set(a, t.height, 1), o;
  }
}
const zn = H((r, e) => {
  const {
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
    style: u = "normal",
    // font style: 'normal', 'italic', 'oblique'
    variant: m = "normal",
    // font variant: 'normal', 'small-caps'
    weight: d = "normal",
    // font weight: 'normal', 'bold', 'bolder', 'lighter', '100', '200', ..., '900'
    size: l = "64px",
    // font size: (eg) '16px', '64px', '200px', '1000px'
    family: c = "Karla, sans-serif",
    // font family
    ...h
  } = r, g = new us(
    t,
    {
      textHeight: s,
      textWidthScale: n,
      textColor: o,
      textAlign: i,
      textBaseline: a,
      fontStyle: u,
      fontVariant: m,
      fontWeight: d,
      fontSize: l,
      fontFamily: c
    }
  );
  return /* @__PURE__ */ B.createElement("primitive", { ref: e, object: g, ...h });
}), re = /* @__PURE__ */ new y.Matrix4(), Qe = /* @__PURE__ */ new y.Matrix4(), et = /* @__PURE__ */ new y.Matrix4(), ds = /* @__PURE__ */ new y.Matrix4(), he = [], tt = /* @__PURE__ */ new y.Box3(), ae = /* @__PURE__ */ new y.Sphere();
let rt = !1;
class Nn extends y.SkinnedMesh {
  constructor(e, t, s = 1) {
    super(e, t), this.isInstancedMesh = !0, this.isInstancedSkinnedMesh = !0, this.instanceMatrix = new y.InstancedBufferAttribute(new Float32Array(s * 16), 16), this.instanceColor = null, this.instanceBones = null, this.morphTexture = null, this.count = s, this.boundingBox = null, this.boundingSphere = null, this._mesh = null;
    const n = this.bind.bind(this);
    this.bind = function(o, i) {
      n(o, i), this.skeleton.update = (a, u) => {
        const m = this.skeleton.bones, d = this.skeleton.boneInverses, l = a || this.skeleton.boneMatrices, c = this.skeleton.boneTexture, h = u || 0;
        for (let g = 0, f = m.length; g < f; g++) {
          const p = m[g] ? m[g].matrixWorld : ds;
          et.multiplyMatrices(p, d[g]), et.toArray(
            l,
            16 * (g + h * m.length)
          );
        }
        c !== null && (c.needsUpdate = !0);
      }, this.skeleton.computeBoneTexture = this.skeleton.computeInstancedBoneTexture = () => {
        this.skeleton.boneTexture = new y.DataTexture(
          this.instanceBones,
          this.skeleton.bones.length * 4,
          this.count,
          y.RGBAFormat,
          y.FloatType
        ), this.skeleton.boneTexture.needsUpdate = !0;
      };
    }, rt || (rt = !0, y.ShaderChunk.points_vert = y.ShaderChunk.points_vert.replace(
      "#include <clipping_planes_pars_vertex>",
      `#include <clipping_planes_pars_vertex>
#include <skinning_pars_vertex>`
    ), y.ShaderChunk.points_vert = y.ShaderChunk.points_vert.replace(
      "#include <morphtarget_vertex>",
      `#include <skinbase_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>`
    ), y.ShaderLib.points.vertexShader = y.ShaderChunk.points_vert, y.ShaderChunk.skinning_pars_vertex = /* glsl */
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
    this.boundingBox === null && (this.boundingBox = new y.Box3()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let s = 0; s < t; s++)
      this.getMatrixAt(s, re), tt.copy(e.boundingBox).applyMatrix4(re), this.boundingBox.union(tt);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new y.Sphere()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let s = 0; s < t; s++)
      this.getMatrixAt(s, re), ae.copy(e.boundingSphere).applyMatrix4(re), this.boundingSphere.union(ae);
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
    this._mesh === null && (this._mesh = new y.SkinnedMesh(this.geometry, this.material), this._mesh.copy(this));
    const o = this._mesh;
    if (o.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ae.copy(this.boundingSphere), ae.applyMatrix4(s), e.ray.intersectsSphere(ae) !== !1))
      for (let i = 0; i < n; i++) {
        this.getMatrixAt(i, re), Qe.multiplyMatrices(s, re), o.matrixWorld = Qe, o.raycast(e, he);
        for (let a = 0, u = he.length; a < u; a++) {
          const m = he[a];
          m.instanceId = i, m.object = this, t.push(m);
        }
        he.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new y.InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const s = t.morphTargetInfluences, n = s.length + 1;
    this.morphTexture === null && (this.morphTexture = new y.DataTexture(new Float32Array(n * this.count), n, this.count, RedFormat, FloatType));
    const o = this.morphTexture.source.data.data;
    let i = 0;
    for (let m = 0; m < s.length; m++)
      i += s[m];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - i, u = n * e;
    o[u] = a, o.set(s, u + 1);
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
  Go as AnaglyphEffect,
  ze as Animator,
  Qn as ArcballControls,
  Fo as AsciiEffect,
  Ur as BatchedMaterial,
  gt as BokehPass,
  Yr as ColladaExporter,
  Zo as ConvexGeometry,
  wt as CustomMaterial,
  ei as DecalGeometry,
  vo as DotScreenShader,
  to as DragControls,
  Jn as EffectComposer,
  Mo as FXAAShader,
  so as FirstPersonControls,
  oo as FlyControls,
  ii as FontLoader,
  _o as GTAOPass,
  ko as GlitchPass,
  Nn as InstancedSkinnedMesh,
  Wn as LOD,
  hi as LightProbeGenerator,
  Mt as MATERIAL_TYPES,
  Jr as MTLExporter,
  ao as MapControls,
  xt as MergedMaterial,
  Vn as MergedMesh,
  jn as Mesh,
  ci as NURBSCurve,
  ui as NURBSSurface,
  lo as OrbitControls,
  Vo as OutlineEffect,
  Do as OutlinePass,
  Uo as OutputPass,
  No as ParallaxBarrierEffect,
  ri as ParametricGeometry,
  Ko as PeppersGhostEffect,
  ho as PointerLockControls,
  qn as RGBELoader,
  wo as RGBShiftShader,
  pi as RectAreaLightHelper,
  gi as RectAreaLightUniformsLib,
  To as RenderPass,
  Yo as RoundedBoxGeometry,
  Lo as ShaderPass,
  Vt as SkeletonUtils,
  Xo as StereoEffect,
  bt as TEXTURE_MAPS,
  jr as THREE_Color,
  An as THREE_Vector3,
  oe as THREE_Vector3s,
  zn as Text,
  ni as TextGeometry,
  us as TextSprite,
  _n as ThreeCanvas,
  po as TrackballControls,
  go as TransformControls,
  Ro as UnrealBloomPass,
  vi as VertexNormalsHelper,
  wi as VertexTangentsHelper,
  os as loadAudios,
  In as loadTextures,
  ls as mergeMeshes,
  Y as setObject3D,
  Bn as useAnimate,
  Gn as useExporter,
  On as useFrame,
  Rn as useKeyDown,
  $n as useKeyUp,
  Fn as useLoader,
  Dn as useRefCallback,
  Pn as useRefEffect,
  Un as useSearch,
  Je as useSearchObject,
  W as useThree
};
