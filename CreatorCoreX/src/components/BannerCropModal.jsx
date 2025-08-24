// src/components/BannerCropModal.jsx
import React, { useEffect, useRef, useState } from "react";
import "../components/BannerCropModal.css";

export default function BannerCropModal({
  image,                 // dataURL or URL
  onCancel,              // () => void
  onCropComplete,        // (croppedAreaPixels) => void
  minZoom = 100,
  maxZoom = 200,
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [imgNatural, setImgNatural] = useState({ w: 0, h: 0 });
  const [zoomPct, setZoomPct] = useState(100);
  const [pos, setPos] = useState({ x: 0, y: 0 }); // px, top-left of image inside container
  const [drag, setDrag] = useState({ active: false, startX: 0, startY: 0, baseX: 0, baseY: 0 });

  // load image to know natural size
  useEffect(() => {
    const el = new Image();
    el.src = image;
    el.onload = () => setImgNatural({ w: el.naturalWidth, h: el.naturalHeight });
  }, [image]);

  // compute cover scale to fill the 16:9 canvas, then center image
  useEffect(() => {
    if (!containerRef.current || !imgNatural.w || !imgNatural.h) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    const coverScale = Math.max(cw / imgNatural.w, ch / imgNatural.h);
    const scale = coverScale * (zoomPct / 100);

    const dw = imgNatural.w * scale;
    const dh = imgNatural.h * scale;

    // center
    setPos({
      x: (cw - dw) / 2,
      y: (ch - dh) / 2,
    });
  }, [imgNatural.w, imgNatural.h]); // initial center once image loads

  // clamp position so image always covers the canvas (no gaps)
  const clampPos = (nextPos, zPct = zoomPct) => {
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    const coverScale = Math.max(cw / imgNatural.w, ch / imgNatural.h);
    const scale = coverScale * (zPct / 100);
    const dw = imgNatural.w * scale;
    const dh = imgNatural.h * scale;

    let x = nextPos.x;
    let y = nextPos.y;

    // keep edges inside
    if (dw <= cw) {
      x = (cw - dw) / 2;
    } else {
      if (x > 0) x = 0;
      if (x + dw < cw) x = cw - dw;
    }
    if (dh <= ch) {
      y = (ch - dh) / 2;
    } else {
      if (y > 0) y = 0;
      if (y + dh < ch) y = ch - dh;
    }
    return { x, y };
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setDrag({
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      baseX: pos.x,
      baseY: pos.y,
    });
  };
  const onMouseMove = (e) => {
    if (!drag.active) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    setPos((p) => clampPos({ x: drag.baseX + dx, y: drag.baseY + dy }));
  };
  const onMouseUp = () => setDrag((d) => ({ ...d, active: false }));

  // touch support
  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    setDrag({
      active: true,
      startX: t.clientX,
      startY: t.clientY,
      baseX: pos.x,
      baseY: pos.y,
    });
  };
  const onTouchMove = (e) => {
    if (!drag.active || e.touches.length !== 1) return;
    const t = e.touches[0];
    const dx = t.clientX - drag.startX;
    const dy = t.clientY - drag.startY;
    setPos((p) => clampPos({ x: drag.baseX + dx, y: drag.baseY + dy }));
  };
  const onTouchEnd = () => setDrag((d) => ({ ...d, active: false }));

  const onZoomChange = (value) => {
    const z = Math.min(maxZoom, Math.max(minZoom, Number(value)));
    setZoomPct((prev) => {
      // keep position clamped for new zoom
      const nextPos = clampPos(pos, z);
      setPos(nextPos);
      return z;
    });
  };

  const resetView = () => {
    setZoomPct(100);
    // re-center based on current container size
    if (!containerRef.current || !imgNatural.w || !imgNatural.h) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    const coverScale = Math.max(cw / imgNatural.w, ch / imgNatural.h);
    const dw = imgNatural.w * coverScale;
    const dh = imgNatural.h * coverScale;
    setPos({ x: (cw - dw) / 2, y: (ch - dh) / 2 });
  };

  const handleDone = () => {
    if (!containerRef.current || !imgNatural.w || !imgNatural.h) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;

    const coverScale = Math.max(cw / imgNatural.w, ch / imgNatural.h);
    const scale = coverScale * (zoomPct / 100);

    // visible crop in image pixels
    const cropX = Math.max(0, (0 - pos.x) / scale);
    const cropY = Math.max(0, (0 - pos.y) / scale);
    const cropW = Math.min(imgNatural.w - cropX, cw / scale);
    const cropH = Math.min(imgNatural.h - cropY, ch / scale);

    onCropComplete({
      x: Math.round(cropX),
      y: Math.round(cropY),
      width: Math.round(cropW),
      height: Math.round(cropH),
    });
  };

  // compute display size for the <img>
  let display = { w: 0, h: 0 };
  if (containerRef.current && imgNatural.w && imgNatural.h) {
    const rect = containerRef.current.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    const coverScale = Math.max(cw / imgNatural.w, ch / imgNatural.h);
    const scale = coverScale * (zoomPct / 100);
    display = { w: imgNatural.w * scale, h: imgNatural.h * scale };
  }

  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", gap: 14 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 800 }}>Customize banner art</div>
        <button type="button" className="btn ghost small" onClick={onCancel}>
          Cancel
        </button>
      </div>

      {/* Canvas (16:9) */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid var(--line, rgba(255,255,255,.08))",
          background: "rgba(0,0,0,.25)",
          userSelect: "none",
          touchAction: "none",
          cursor: drag.active ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* the image */}
        {!!imgNatural.w && (
          <img
            ref={imgRef}
            src={image}
            alt="Crop"
            draggable={false}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: display.w || "auto",
              height: display.h || "auto",
              pointerEvents: "none",
              filter: "saturate(1.02)",
            }}
          />
        )}

        {/* Guides */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* TV = whole canvas */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid rgba(255,255,255,.25)",
              borderRadius: 12,
            }}
          />
          {/* Desktop band (29.375% tall, centered) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "29.375%",
              top: "35.3125%",
              border: "2px solid rgba(79,140,255,.65)",
              borderRadius: 10,
            }}
          />
          {/* “All devices” safe area (60.39% width × same height) */}
          <div
            style={{
              position: "absolute",
              width: "60.39%",
              height: "29.375%",
              left: "19.805%",
              top: "35.3125%",
              border: "2px solid rgba(0,225,255,.9)",
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button type="button" className="btn ghost small" onClick={resetView}>
            Reset view
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, color: "var(--muted,#9aa6be)" }}>Zoom</span>
          <input
            type="range"
            min={minZoom}
            max={maxZoom}
            step={1}
            value={zoomPct}
            onChange={(e) => onZoomChange(e.target.value)}
          />
          <button type="button" className="btn brand small" onClick={handleDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
