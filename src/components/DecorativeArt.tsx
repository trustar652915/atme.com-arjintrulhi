"use client";

import { useEffect } from "react";

export function DecorativeArt() {
  useEffect(() => {
    const s = document.getElementById("sun");
    if (s) {
      const P = (a: number, r: number) =>
        `${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`;
      let h =
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3dfaa"/><stop offset=".5" stop-color="#d8b673"/><stop offset="1" stop-color="#a07a3f"/></linearGradient><radialGradient id="gd" cx=".35" cy=".3"><stop offset="0" stop-color="#fbeec6"/><stop offset=".55" stop-color="#d8b673"/><stop offset="1" stop-color="#9a7236"/></radialGradient></defs>';
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * 2 * Math.PI;
        h += `<polygon points="${[P(a - 0.085, 52), P(a, 99), P(a + 0.085, 52)].join(" ")}" fill="url(#g)"/>`;
      }
      for (let i = 0; i < 16; i++) {
        const a = ((i + 0.5) / 16) * 2 * Math.PI;
        const L: string[] = [];
        const R: string[] = [];
        for (let k = 0; k <= 12; k++) {
          const t = k / 12;
          const r = 52 + t * 38;
          const w = 0.1 * (1 - t);
          const o = 0.07 * Math.sin(t * 9) * t;
          L.push(P(a + o - w, r));
          R.unshift(P(a + o + w, r));
        }
        h += `<polygon points="${L.concat(R).join(" ")}" fill="url(#g)"/>`;
      }
      h +=
        '<circle r="55" fill="none" stroke="url(#g)" stroke-width="1.6" stroke-dasharray="1 3.4"/><circle r="50" fill="url(#gd)"/><circle r="43" fill="none" stroke="#001c4c" stroke-width="1.2" opacity=".5"/><circle r="33" fill="none" stroke="#001c4c" stroke-width=".8" opacity=".35"/>';
      s.innerHTML = h;
    }

    document.querySelectorAll<SVGElement>("[data-m]").forEach((el) => {
      el.innerHTML =
        el.dataset.m === "navy"
          ? '<rect width="100%" height="100%" fill="#001c4c"/><rect width="100%" height="100%" filter="url(#lapis)" opacity=".75"/><rect width="100%" height="100%" filter="url(#vein)" opacity=".55"/>'
          : '<rect width="100%" height="100%" fill="#6a0302"/><rect width="100%" height="100%" filter="url(#silk)" opacity=".7"/>';
    });

    const seal = document.getElementById("seal");
    if (seal) {
      let d = "";
      for (let i = 0; i < 90; i++) {
        const a = (i / 90) * 2 * Math.PI;
        const r =
          41 + 2.6 * Math.sin(i * 1.9) + 1.8 * Math.sin(i * 4.3 + 1);
        d += `${i ? "L" : "M"}${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)}`;
      }
      seal.innerHTML = `<defs><radialGradient id="wax" cx=".35" cy=".3"><stop offset="0" stop-color="#b3201d"/><stop offset=".6" stop-color="#7a0403"/><stop offset="1" stop-color="#4a0201"/></radialGradient></defs><path d="${d}Z" fill="url(#wax)"/><circle r="30" fill="none" stroke="#3d0100" stroke-width="2" opacity=".6"/><circle r="27" fill="none" stroke="#d8b673" stroke-width=".6" opacity=".5"/><text y="12" text-anchor="middle" font-family="Bodoni Moda,Didot,serif" font-style="italic" font-weight="600" font-size="36" fill="#3d0100" opacity=".85">T</text>`;
    }
  }, []);

  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="lapis" x="0" y="0" width="1" height="1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".005 .011"
            numOctaves="5"
            seed="7"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 .05  0 0 0 0 .3  0 0 0 0 .75  2.4 0 0 0 -.85"
          />
        </filter>
        <filter id="vein" x="0" y="0" width="1" height="1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".007 .014"
            numOctaves="4"
            seed="11"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 .85  0 0 0 0 .7  0 0 0 0 .42  1 0 0 0 0"
          />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0 0 0 0 0 0 1 0 0 0 0 0 0 0" />
          </feComponentTransfer>
        </filter>
        <filter id="silk" x="0" y="0" width="1" height="1">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".003 .035"
            numOctaves="3"
            seed="3"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 .3  0 0 0 0 .25  1.8 0 0 0 -.75"
          />
        </filter>
        <g id="sc">
          <circle r="20" fill="#001c4c" stroke="#a07a3f" />
          <circle r="14" fill="none" stroke="#a07a3f" />
          <circle r="8" fill="none" stroke="#a07a3f" />
        </g>
        <pattern
          id="fan"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(.5)"
        >
          <use href="#sc" x="0" y="0" />
          <use href="#sc" x="40" y="0" />
          <use href="#sc" x="20" y="20" />
          <use href="#sc" x="0" y="40" />
          <use href="#sc" x="40" y="40" />
        </pattern>
      </defs>
    </svg>
  );
}

export function LinkifiedText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={part} rel="noopener">
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}
