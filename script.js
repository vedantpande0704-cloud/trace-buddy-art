// ═══════════════════════════════════════════
// SVG TEMPLATES
// ═══════════════════════════════════════════
function mkSVG(inner, w=200, h=200) {
  const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s)
}

const TEMPLATES = [
  { id:'cat', name:'Cat', src: mkSVG(`
    <ellipse cx="100" cy="130" rx="55" ry="45"/>
    <circle cx="100" cy="72" r="38"/>
    <polygon points="68,42 58,18 84,36"/>
    <polygon points="132,42 142,18 116,36"/>
    <ellipse cx="86" cy="68" rx="7" ry="8"/>
    <ellipse cx="114" cy="68" rx="7" ry="8"/>
    <ellipse cx="86" cy="69" rx="3" ry="5" fill="#111" stroke="none"/>
    <ellipse cx="114" cy="69" rx="3" ry="5" fill="#111" stroke="none"/>
    <polygon points="100,80 96,85 104,85" fill="#111" stroke="none"/>
    <path d="M96,85 Q100,92 104,85"/>
    <path d="M96,85 Q88,90 82,87"/><path d="M104,85 Q112,90 118,87"/>
    <line x1="56" y1="79" x2="88" y2="83"/><line x1="56" y1="87" x2="88" y2="87"/>
    <line x1="112" y1="83" x2="144" y2="79"/><line x1="112" y1="87" x2="144" y2="87"/>
    <path d="M155,155 Q185,128 172,100 Q162,74 178,64"/>
    <ellipse cx="74" cy="168" rx="17" ry="10"/>
    <ellipse cx="126" cy="168" rx="17" ry="10"/>
  `) },
  { id:'rose', name:'Rose', src: mkSVG(`
    <path d="M100,195 Q100,160 100,130"/>
    <path d="M100,170 Q72,154 68,132 Q90,144 100,170"/>
    <path d="M100,154 Q128,138 132,118 Q110,130 100,154"/>
    <line x1="97" y1="165" x2="86" y2="157"/>
    <line x1="103" y1="147" x2="114" y2="139"/>
    <path d="M100,50 Q80,28 58,44 Q53,76 80,90 Q90,95 100,95"/>
    <path d="M100,50 Q120,28 142,44 Q147,76 120,90 Q110,95 100,95"/>
    <path d="M100,52 Q76,36 64,62 Q60,92 84,102 Q93,105 100,102"/>
    <path d="M100,52 Q124,36 136,62 Q140,92 116,102 Q107,105 100,102"/>
    <path d="M100,56 Q84,44 79,62 Q79,82 100,87"/>
    <path d="M100,56 Q116,44 121,62 Q121,82 100,87"/>
    <ellipse cx="100" cy="70" rx="14" ry="17"/>
  `) },
  { id:'butterfly', name:'Butterfly', src: mkSVG(`
    <ellipse cx="100" cy="100" rx="5" ry="30"/>
    <path d="M98,70 Q84,50 76,39"/><circle cx="76" cy="39" r="3.5" fill="#111" stroke="none"/>
    <path d="M102,70 Q116,50 124,39"/><circle cx="124" cy="39" r="3.5" fill="#111" stroke="none"/>
    <path d="M100,80 Q58,44 28,54 Q8,70 24,96 Q40,116 76,106 Q90,100 100,95"/>
    <path d="M100,80 Q142,44 172,54 Q192,70 176,96 Q160,116 124,106 Q110,100 100,95"/>
    <path d="M100,88 Q70,66 48,72 Q34,82 44,98 Q58,110 82,104" stroke-width="1.4"/>
    <path d="M100,88 Q130,66 152,72 Q166,82 156,98 Q142,110 118,104" stroke-width="1.4"/>
    <path d="M100,106 Q64,110 40,130 Q28,150 48,164 Q70,174 96,153 Q100,141 100,126"/>
    <path d="M100,106 Q136,110 160,130 Q172,150 152,164 Q130,174 104,153 Q100,141 100,126"/>
    <path d="M100,116 Q70,120 56,135 Q48,148 62,157 Q78,164 96,150" stroke-width="1.4"/>
    <path d="M100,116 Q130,120 144,135 Q152,148 138,157 Q122,164 104,150" stroke-width="1.4"/>
  `) },
  { id:'house', name:'House', src: mkSVG(`
    <rect x="28" y="100" width="144" height="90"/>
    <polygon points="14,106 100,34 186,106"/>
    <rect x="130" y="46" width="18" height="36"/>
    <rect x="82" y="146" width="36" height="44" rx="3"/>
    <circle cx="112" cy="168" r="3" fill="#111" stroke="none"/>
    <rect x="40" y="116" width="34" height="30" rx="2"/>
    <line x1="57" y1="116" x2="57" y2="146" stroke-width="1.5"/>
    <line x1="40" y1="131" x2="74" y2="131" stroke-width="1.5"/>
    <rect x="126" y="116" width="34" height="30" rx="2"/>
    <line x1="143" y1="116" x2="143" y2="146" stroke-width="1.5"/>
    <line x1="126" y1="131" x2="160" y2="131" stroke-width="1.5"/>
    <line x1="20" y1="192" x2="180" y2="192"/>
    <path d="M20,192 Q18,180 28,184 Q24,170 36,176 Q34,164 44,170 Q44,192 20,192"/>
    <path d="M180,192 Q182,180 172,184 Q176,170 164,176 Q166,164 156,170 Q156,192 180,192"/>
  `) },
  { id:'dragon', name:'Dragon', src: mkSVG(`
    <path d="M38,140 Q54,118 80,124 Q106,130 120,114 Q140,97 162,104 Q177,112 172,132 Q167,150 146,151 Q125,152 110,139 Q94,128 78,137 Q64,146 54,158 Q46,168 38,140"/>
    <path d="M80,124 Q70,99 76,78 Q79,63 91,54"/>
    <path d="M91,54 Q74,44 70,30 Q68,17 82,16 Q93,14 96,27 Q99,16 110,15 Q122,14 122,28 Q120,42 109,49 Q101,55 91,54"/>
    <path d="M83,18 Q77,6 72,2"/><path d="M109,17 Q115,5 119,1"/>
    <circle cx="88" cy="31" r="5"/><circle cx="88" cy="31" r="2.5" fill="#111" stroke="none"/>
    <path d="M77,43 Q75,46 78,47" stroke-width="1.5"/>
    <path d="M106,119 Q101,84 111,59 Q126,33 147,30 Q157,44 141,65 Q129,80 121,96 Q113,111 109,120"/>
    <path d="M111,59 Q131,54 147,30" stroke-width="1.5"/>
    <path d="M116,76 Q136,65 150,47" stroke-width="1.5"/>
    <path d="M119,91 Q139,80 150,62" stroke-width="1.5"/>
    <path d="M38,140 Q18,156 14,172 Q12,182 22,180 Q31,177 36,166 Q41,155 52,158"/>
    <path d="M22,180 L15,188"/><path d="M31,177 L26,186"/>
    <path d="M100,138 Q98,159 90,171 Q85,180 92,181 Q101,179 103,169 Q106,158 108,148"/>
    <path d="M141,142 Q146,163 149,177 Q152,185 146,184 Q139,183 137,171 Q134,159 136,147"/>
    <path d="M88,181 L83,188 M93,181 L91,188 M98,181 L97,188" stroke-width="1.5"/>
  `) },
  { id:'car', name:'Car', src: mkSVG(`
    <path d="M18,136 Q18,156 34,156 L166,156 Q182,156 182,136 L182,114 L18,114 Z"/>
    <path d="M44,114 Q52,83 70,78 L130,78 Q148,83 156,114"/>
    <path d="M68,114 Q72,88 83,84 L117,84 Q128,88 132,114"/>
    <path d="M52,114 Q56,93 67,89 L81,87 L79,114"/>
    <path d="M121,114 L119,87 L133,89 Q144,93 148,114"/>
    <line x1="100" y1="114" x2="100" y2="156"/>
    <path d="M85,134 Q85,130 91,130 Q97,130 97,134" stroke-width="2"/>
    <path d="M109,134 Q109,130 115,130 Q121,130 121,134" stroke-width="2"/>
    <circle cx="54" cy="156" r="23"/><circle cx="54" cy="156" r="13"/><circle cx="54" cy="156" r="4" fill="#111" stroke="none"/>
    <circle cx="148" cy="156" r="23"/><circle cx="148" cy="156" r="13"/><circle cx="148" cy="156" r="4" fill="#111" stroke="none"/>
    <path d="M18,120 Q13,122 12,129 Q13,134 18,134"/>
    <line x1="12" y1="125" x2="5" y2="118" stroke-width="1.5"/>
    <line x1="12" y1="129" x2="4" y2="129" stroke-width="1.5"/>
    <line x1="12" y1="133" x2="5" y2="140" stroke-width="1.5"/>
    <path d="M182,120 Q187,122 188,129 Q187,134 182,134"/>
  `) },
  { id:'star', name:'Star', src: mkSVG(`
    <polygon points="100,16 121,74 182,74 132,108 152,166 100,132 48,166 68,108 18,74 79,74"/>
    <polygon points="100,54 114,96 158,96 124,120 137,162 100,138 63,162 76,120 42,96 86,96" stroke-width="1.3"/>
    <line x1="100" y1="2" x2="100" y2="10"/>
    <line x1="188" y1="68" x2="180" y2="74"/>
    <line x1="158" y1="178" x2="152" y2="168"/>
    <line x1="42" y1="178" x2="48" y2="168"/>
    <line x1="12" y1="68" x2="20" y2="74"/>
    <line x1="138" y1="6" x2="134" y2="13" stroke-width="1.3"/>
    <line x1="164" y1="28" x2="158" y2="33" stroke-width="1.3"/>
    <line x1="62" y1="6" x2="66" y2="13" stroke-width="1.3"/>
    <line x1="36" y1="28" x2="42" y2="33" stroke-width="1.3"/>
  `) },
  { id:'fish', name:'Fish', src: mkSVG(`
    <path d="M156,100 Q177,77 190,59 Q184,96 192,100 Q184,104 190,141 Q177,123 156,100"/>
    <ellipse cx="91" cy="100" rx="71" ry="43"/>
    <path d="M20,100 Q16,91 20,87 Q24,83 29,90"/>
    <circle cx="47" cy="89" r="11"/><circle cx="47" cy="89" r="5.5" fill="#111" stroke="none"/>
    <circle cx="49" cy="86" r="2.5" fill="white" stroke="none"/>
    <path d="M80,57 Q90,36 111,33 Q132,36 141,54 Q126,59 80,57"/>
    <path d="M76,100 Q68,119 57,129 Q51,134 49,126 Q55,116 65,105 Q68,102 76,100"/>
    <path d="M102,141 Q107,157 118,164 Q123,167 122,160 Q117,150 109,143"/>
    <path d="M61,88 Q68,82 76,86 Q70,93 61,88" stroke-width="1.4"/>
    <path d="M79,82 Q86,76 94,80 Q88,87 79,82" stroke-width="1.4"/>
    <path d="M97,78 Q104,72 112,76 Q106,83 97,78" stroke-width="1.4"/>
    <path d="M69,99 Q76,93 84,97 Q78,104 69,99" stroke-width="1.4"/>
    <path d="M87,95 Q94,89 102,93 Q96,100 87,95" stroke-width="1.4"/>
    <path d="M105,91 Q112,85 120,89 Q114,96 105,91" stroke-width="1.4"/>
    <path d="M77,111 Q84,105 92,109 Q86,116 77,111" stroke-width="1.4"/>
    <path d="M95,107 Q102,101 110,105 Q104,112 95,107" stroke-width="1.4"/>
    <path d="M57,71 Q51,100 57,129"/>
    <line x1="119" y1="61" x2="119" y2="139" stroke-width="1.3"/>
    <line x1="136" y1="65" x2="136" y2="135" stroke-width="1.3"/>
  `) },
]

let userTemplates = []

// ═══════════════════════════════════════════
// RENDER HOME GRID
// ═══════════════════════════════════════════
function renderGrid() {
  const grid = document.getElementById('grid')
  const all = [...userTemplates, ...TEMPLATES]
  document.getElementById('tmpl-count').textContent =
    all.length + (userTemplates.length ? ` (${userTemplates.length} yours)` : ' built-in')
  grid.innerHTML = ''
  all.forEach((t, i) => {
    const isUser = i < userTemplates.length
    const el = document.createElement('div')
    el.className = 'tile' + (isUser ? ' user-tile' : '')
    el.setAttribute('role', 'button')
    el.setAttribute('aria-label', 'Open ' + t.name)
    el.innerHTML = `<img class="tile-img" src="${t.src}" alt="${t.name}" loading="lazy"><div class="tile-name">${t.name}</div>`
    el.onclick = () => openStudio(t)
    grid.appendChild(el)
  })
}

function handleUpload(e) {
  const file = e.target.files[0]
  if (!file) return
  const url = URL.createObjectURL(file)
  const name = file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  const t = { id: 'u' + Date.now(), name: name || 'My Image', src: url }
  userTemplates.unshift(t)
  renderGrid()
  openStudio(t)
  e.target.value = ''
}

// ═══════════════════════════════════════════
// STUDIO STATE
// ═══════════════════════════════════════════
let mode = 'trace'          // 'trace' | 'draw'
let locked = false
let camStream = null
let ov = {                  // overlay state
  x: 0, y: 0,              // translate px
  w: 300, h: 300,          // base size
  scale: 1,
  rot: 0,                  // degrees
  opacity: 0.55,
  flipH: false,
  flipV: false,
}
let drawColor = '#111111'
let brushSz = 4

// ═══════════════════════════════════════════
// OPEN / CLOSE STUDIO
// ═══════════════════════════════════════════
function openStudio(tmpl) {
  document.getElementById('home').classList.remove('active')
  document.getElementById('studio').classList.add('active')
  document.getElementById('tb-name').textContent = tmpl.name.toUpperCase()
  document.getElementById('overlay-img').src = tmpl.src

  // Reset overlay
  ov = { x: 0, y: 0, w: 300, h: 300, scale: 1, rot: 0, opacity: 0.55, flipH: false, flipV: false }
  document.getElementById('sl-opacity').value = 55
  document.getElementById('vl-opacity').textContent = '55%'
  document.getElementById('sl-scale').value = 100
  document.getElementById('vl-scale').textContent = '100%'
  document.getElementById('sl-rot').value = 0
  document.getElementById('vl-rot').textContent = '0°'
  document.getElementById('flip-h').classList.remove('on')
  document.getElementById('flip-v').classList.remove('on')

  setLocked(false)
  setMode('trace')
  applyOverlay()
}

function exitStudio() {
  stopCamera()
  clearCanvasFull()
  document.getElementById('studio').classList.remove('active')
  document.getElementById('home').classList.add('active')
  document.getElementById('cam-error').classList.remove('show')
  // Reset panel visibility for next session
  panelHidden = false
  document.getElementById('bottombar').classList.remove('collapsed')
  document.getElementById('tog-label').textContent = 'Hide controls'
}

// ═══════════════════════════════════════════
// CAMERA
// ═══════════════════════════════════════════
async function startCamera() {
  const vid = document.getElementById('cam-video')
  const err = document.getElementById('cam-error')
  err.classList.remove('show')
  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    })
    vid.srcObject = camStream
    vid.style.display = 'block'
    document.getElementById('draw-bg').style.display = 'none'
  } catch(e) {
    const msg = e.name === 'NotAllowedError'
      ? 'Camera permission denied. Please allow camera access in your browser settings, then try again.'
      : e.name === 'NotFoundError'
        ? 'No camera was found on this device.'
        : 'Camera is currently unavailable. You can still use Screen Draw mode.'
    document.getElementById('cam-err-msg').textContent = msg
    err.classList.add('show')
    vid.style.display = 'none'
  }
}

function stopCamera() {
  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null }
  const vid = document.getElementById('cam-video')
  vid.srcObject = null
  vid.style.display = 'none'
}

// ═══════════════════════════════════════════
// MODE SWITCH
// ═══════════════════════════════════════════
function setMode(m) {
  mode = m
  const canvas = document.getElementById('draw-canvas')
  const drawBg = document.getElementById('draw-bg')
  const brushRow = document.getElementById('brush-row')
  const colorRow = document.getElementById('color-row')
  const flipRow  = document.getElementById('flip-row')
  const clearBtn = document.getElementById('clear-btn')
  const err      = document.getElementById('cam-error')
  const cursor   = document.getElementById('cursor-ring')

  document.getElementById('mode-trace').classList.toggle('active', m === 'trace')
  document.getElementById('mode-draw').classList.toggle('active', m === 'draw')

  if (m === 'trace') {
    canvas.style.display = 'none'
    drawBg.style.display = 'none'
    brushRow.style.display = 'none'
    colorRow.style.display = 'none'
    clearBtn.style.display = 'none'
    flipRow.style.display  = 'flex'
    cursor.style.display   = 'none'
    err.classList.remove('show')
    startCamera()
  } else {
    stopCamera()
    canvas.style.display = 'block'
    drawBg.style.display = 'block'
    brushRow.style.display = 'flex'
    colorRow.style.display = 'flex'
    clearBtn.style.display = 'flex'
    flipRow.style.display  = 'none'
    cursor.style.display   = 'block'
    err.classList.remove('show')
    initCanvas()
  }
}

// ═══════════════════════════════════════════
// LOCK / UNLOCK OVERLAY
// ═══════════════════════════════════════════
function setLocked(v) {
  locked = v
  const wrap = document.getElementById('overlay-wrap')
  const btn  = document.getElementById('lock-btn')
  const lbl  = document.getElementById('lock-lbl')
  wrap.classList.toggle('locked', v)
  wrap.style.pointerEvents = v ? 'none' : 'all'
  btn.classList.toggle('active', v)
  lbl.textContent = v ? 'Locked' : 'Lock'
  document.getElementById('lock-icon').innerHTML = v
    ? `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 11V7a5 5 0 019.9-1"/>`
    : `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 11V7a5 5 0 0110 0v4"/>`
}
function toggleLock() { setLocked(!locked) }

// ═══════════════════════════════════════════
// OVERLAY TRANSFORM
// ═══════════════════════════════════════════
function applyOverlay() {
  const wrap = document.getElementById('overlay-wrap')
  const img  = document.getElementById('overlay-img')
  const w = ov.w * ov.scale, h = ov.h * ov.scale

  wrap.style.width   = w + 'px'
  wrap.style.height  = h + 'px'
  wrap.style.marginLeft = -(w/2) + 'px'
  wrap.style.marginTop  = -(h/2) + 'px'
  wrap.style.transform  = `translate(${ov.x}px,${ov.y}px) rotate(${ov.rot}deg)`

  let imgT = ''
  if (ov.flipH) imgT += ' scaleX(-1)'
  if (ov.flipV) imgT += ' scaleY(-1)'
  img.style.transform = imgT || 'none'
  img.style.opacity   = ov.opacity
}

function onOpacity(v) {
  ov.opacity = v/100
  document.getElementById('vl-opacity').textContent = v + '%'
  applyOverlay()
}
function onScale(v) {
  ov.scale = v/100
  document.getElementById('vl-scale').textContent = v + '%'
  applyOverlay()
}
function onRotation(v) {
  ov.rot = parseInt(v)
  document.getElementById('vl-rot').textContent = v + '°'
  applyOverlay()
}
function toggleFlipH() {
  ov.flipH = !ov.flipH
  document.getElementById('flip-h').classList.toggle('on', ov.flipH)
  applyOverlay()
}
function toggleFlipV() {
  ov.flipV = !ov.flipV
  document.getElementById('flip-v').classList.toggle('on', ov.flipV)
  applyOverlay()
}
function resetOverlay() {
  ov.x=0; ov.y=0; ov.scale=1; ov.rot=0; ov.flipH=false; ov.flipV=false
  document.getElementById('sl-scale').value=100; document.getElementById('vl-scale').textContent='100%'
  document.getElementById('sl-rot').value=0;   document.getElementById('vl-rot').textContent='0°'
  document.getElementById('flip-h').classList.remove('on')
  document.getElementById('flip-v').classList.remove('on')
  applyOverlay()
  toast('Position reset')
}

// ═══════════════════════════════════════════
// MULTI-TOUCH GESTURE (pan + pinch-zoom + rotate-handle)
// ═══════════════════════════════════════════
const ptrs = new Map()  // pointerId → {x,y}

const ovWrap = document.getElementById('overlay-wrap')

ovWrap.addEventListener('pointerdown', e => {
  if (locked || e.target.classList.contains('handle')) return
  ovWrap.setPointerCapture(e.pointerId)
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY })
  e.preventDefault()
})
ovWrap.addEventListener('pointermove', e => {
  if (locked || !ptrs.has(e.pointerId)) return
  const prev = ptrs.get(e.pointerId)
  const ids = [...ptrs.keys()]

  if (ids.length === 1) {
    ov.x += e.clientX - prev.x
    ov.y += e.clientY - prev.y
  } else if (ids.length >= 2) {
    const oid = ids.find(i => i !== e.pointerId)
    const op  = ptrs.get(oid)
    const pd  = Math.hypot(prev.x-op.x, prev.y-op.y)
    const nd  = Math.hypot(e.clientX-op.x, e.clientY-op.y)
    if (pd > 1) {
      ov.scale = Math.min(6, Math.max(0.1, ov.scale * (nd/pd)))
      const pct = Math.round(ov.scale*100)
      document.getElementById('sl-scale').value = Math.min(400,pct)
      document.getElementById('vl-scale').textContent = Math.min(400,pct)+'%'
    }
    const prevMid = {x:(prev.x+op.x)/2, y:(prev.y+op.y)/2}
    const newMid  = {x:(e.clientX+op.x)/2, y:(e.clientY+op.y)/2}
    ov.x += newMid.x - prevMid.x
    ov.y += newMid.y - prevMid.y
  }

  ptrs.set(e.pointerId, {x:e.clientX, y:e.clientY})
  applyOverlay()
  e.preventDefault()
})
ovWrap.addEventListener('pointerup',     e => ptrs.delete(e.pointerId))
ovWrap.addEventListener('pointercancel', e => ptrs.delete(e.pointerId))

// ── RESIZE CORNER HANDLES ──
document.querySelectorAll('.handle[data-corner]').forEach(h => {
  let sx, sy, sw, sh, sox, soy
  h.addEventListener('pointerdown', e => {
    if (locked) return
    h.setPointerCapture(e.pointerId)
    sx=e.clientX; sy=e.clientY
    sw=ov.w*ov.scale; sh=ov.h*ov.scale
    sox=ov.x; soy=ov.y
    e.stopPropagation(); e.preventDefault()
  })
  h.addEventListener('pointermove', e => {
    if (locked) return
    const dx=e.clientX-sx, dy=e.clientY-sy
    const corner=h.dataset.corner
    const asp=ov.h/ov.w
    let nw=sw

    if (corner==='br'||corner==='tr') nw=Math.max(60,sw+dx)
    else { nw=Math.max(60,sw-dx); ov.x=sox+(sw-nw) }

    const nh=nw*asp
    if (corner==='tl'||corner==='tr') ov.y=soy+(sh-nh)

    ov.scale=nw/ov.w
    const pct=Math.round(ov.scale*100)
    document.getElementById('sl-scale').value=Math.min(400,pct)
    document.getElementById('vl-scale').textContent=Math.min(400,pct)+'%'
    applyOverlay()
    e.preventDefault()
  })
})

// ── ROTATE HANDLE ──
const rotHandle = document.getElementById('rot-handle')
let isRotating = false
rotHandle.addEventListener('pointerdown', e => {
  if (locked) return
  rotHandle.setPointerCapture(e.pointerId)
  isRotating = true
  e.stopPropagation(); e.preventDefault()
})
rotHandle.addEventListener('pointermove', e => {
  if (!isRotating || locked) return
  const rect = ovWrap.getBoundingClientRect()
  const cx = rect.left + rect.width/2
  const cy = rect.top  + rect.height/2
  const angle = Math.atan2(e.clientY-cy, e.clientX-cx) * 180/Math.PI + 90
  ov.rot = Math.round(angle)
  const clamped = ((ov.rot % 360) + 360) % 360
  const display = clamped > 180 ? clamped-360 : clamped
  document.getElementById('sl-rot').value  = Math.max(-180,Math.min(180,display))
  document.getElementById('vl-rot').textContent = Math.max(-180,Math.min(180,display)) + '°'
  applyOverlay()
  e.preventDefault()
})
rotHandle.addEventListener('pointerup',     () => isRotating=false)
rotHandle.addEventListener('pointercancel', () => isRotating=false)

// ═══════════════════════════════════════════
// DRAW CANVAS
// ═══════════════════════════════════════════
let ctx2d = null
let drawing = false
let lastPt  = null

function initCanvas() {
  const c = document.getElementById('draw-canvas')
  const dpr = window.devicePixelRatio || 1
  const rc  = c.getBoundingClientRect()
  c.width  = Math.round(rc.width  * dpr)
  c.height = Math.round(rc.height * dpr)
  ctx2d = c.getContext('2d')
  ctx2d.scale(dpr, dpr)
}

function toLocal(clientX, clientY) {
  const c = document.getElementById('draw-canvas')
  const r = c.getBoundingClientRect()
  return { x: clientX-r.left, y: clientY-r.top }
}

const dc = document.getElementById('draw-canvas')
dc.addEventListener('pointerdown', e => {
  if (mode !== 'draw' || e.isPrimary === false && e.pointerType !== 'pen') return
  dc.setPointerCapture(e.pointerId)
  drawing = true
  lastPt  = toLocal(e.clientX, e.clientY)
  // Dot on tap
  ctx2d.beginPath()
  ctx2d.arc(lastPt.x, lastPt.y, brushSz/2, 0, Math.PI*2)
  ctx2d.fillStyle = drawColor
  ctx2d.fill()
})
dc.addEventListener('pointermove', e => {
  if (!drawing) return
  const pt = toLocal(e.clientX, e.clientY)
  ctx2d.strokeStyle = drawColor
  ctx2d.lineWidth   = brushSz
  ctx2d.lineCap     = 'round'
  ctx2d.lineJoin    = 'round'
  ctx2d.beginPath()
  ctx2d.moveTo(lastPt.x, lastPt.y)
  ctx2d.lineTo(pt.x, pt.y)
  ctx2d.stroke()
  lastPt = pt
})
dc.addEventListener('pointerup',     () => { drawing=false; lastPt=null })
dc.addEventListener('pointercancel', () => { drawing=false; lastPt=null })
dc.addEventListener('pointerleave',  () => { drawing=false; lastPt=null })

// Cursor ring
const ring = document.getElementById('cursor-ring')
document.addEventListener('pointermove', e => {
  if (mode !== 'draw') return
  const sz = brushSz + 8
  ring.style.width  = sz + 'px'
  ring.style.height = sz + 'px'
  ring.style.left   = e.clientX + 'px'
  ring.style.top    = e.clientY + 'px'
  ring.style.opacity = '1'
})

function onBrush(v) {
  brushSz = parseInt(v)
  document.getElementById('vl-brush').textContent = v + 'px'
}

function setColor(el) {
  drawColor = el.dataset.color
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'))
  el.classList.add('active')
  document.getElementById('custom-color').value = drawColor
}

function setCustomColor(v) {
  drawColor = v
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'))
}

function clearCanvasFull() {
  if (!ctx2d) return
  const c = document.getElementById('draw-canvas')
  ctx2d.clearRect(0, 0, c.width, c.height)
}

function clearCanvas() {
  clearCanvasFull()
  toast('Canvas cleared')
}

// Resize observer
const resizeObs = new ResizeObserver(() => {
  if (mode === 'draw' && ctx2d) {
    const c  = document.getElementById('draw-canvas')
    const dpr= window.devicePixelRatio||1
    const data = ctx2d.getImageData(0,0,c.width,c.height)
    initCanvas()
    ctx2d.putImageData(data,0,0)
  }
})
resizeObs.observe(document.getElementById('draw-canvas'))

// ═══════════════════════════════════════════
// SAVE / CAPTURE
// ═══════════════════════════════════════════
function saveFrame() {
  const vid = document.getElementById('cam-video')
  const dc2 = document.getElementById('draw-canvas')

  if (mode === 'trace' && camStream && vid.videoWidth) {
    const c  = document.createElement('canvas')
    c.width  = vid.videoWidth
    c.height = vid.videoHeight
    c.getContext('2d').drawImage(vid,0,0)
    dl(c, 'ar-tracer-camera.png')
  } else if (mode === 'draw') {
    dl(dc2, 'ar-tracer-drawing.png')
  } else {
    toast('Nothing to save yet — start camera or draw first')
    return
  }
  toast('Saved! 💾')
}

function dl(canvas, name) {
  const a = document.createElement('a')
  a.download = name
  a.href = canvas.toDataURL('image/png')
  a.click()
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastT
function toast(msg) {
  const el = document.getElementById('toast')
  el.textContent = msg
  el.classList.add('show')
  clearTimeout(toastT)
  toastT = setTimeout(() => el.classList.remove('show'), 2800)
}

// ═══════════════════════════════════════════
// PANEL COLLAPSE
// ═══════════════════════════════════════════
let panelHidden = false
function togglePanel() {
  panelHidden = !panelHidden
  document.getElementById('bottombar').classList.toggle('collapsed', panelHidden)
  document.getElementById('tog-label').textContent = panelHidden ? 'Show controls' : 'Hide controls'
  if (panelHidden) toast('Controls hidden — press H to show')
}

// ═══════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (!document.getElementById('studio').classList.contains('active')) return
  if (e.key === 'Escape')   exitStudio()
  if (e.key === 'l' || e.key === 'L') toggleLock()
  if (e.key === 't' || e.key === 'T') setMode('trace')
  if (e.key === 'd' || e.key === 'D') setMode('draw')
  if (e.key === 'r' || e.key === 'R') resetOverlay()
  if (e.key === 'h' || e.key === 'H') togglePanel()
  if ((e.key === 'Delete' || e.key === 'Backspace') && mode==='draw') clearCanvas()
})

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
renderGrid()