"use client";
import dynamic from "next/dynamic";

const ToothCanvas = dynamic(
  () => import("./ToothCanvas"),
  { ssr: false }
);

export default ToothCanvas;
