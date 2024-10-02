"use client";
import { useEffect, useRef } from "react";

export function useEcommerceEvent() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  const sendEvent = (eventData) => {
    if (typeof window !== "undefined") {
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push(eventData);
    }
  };

  return { sendEvent };
}
