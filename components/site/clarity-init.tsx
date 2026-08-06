"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_ID = "xugv7guajg";

export function ClarityInit() {
  useEffect(() => {
    Clarity.init(CLARITY_ID);
  }, []);

  return null;
}
