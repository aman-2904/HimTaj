"use client";
import React from "react";

export default function RingEmbed() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black z-70">
      <div className="sketchfab-embed-wrapper w-full h-full z-60">
        <iframe
          title="Ring GLB File"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/68ebe1e25544426fa8398a7e78ceb9fa/embed"
          className="w-full h-full"
        />
        <p className="text-xs text-gray-400 mt-2 text-center">
          <a
            href="https://sketchfab.com/3d-models/ring-glb-file-68ebe1e25544426fa8398a7e78ceb9fa"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-sky-500"
          >
            Ring GLB File
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/rajaroy52525"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-sky-500"
          >
            rajaroy52525
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-sky-500"
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
}
