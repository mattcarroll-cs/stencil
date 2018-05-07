

export function ensureFeatures(window: Window, cb?: () => void) {
  if (window.customElements && window.customElements.define) {
    cb();

  } else {
    __import('./polyfills.esm.js').then((polyfills: any) => {
      polyfills.applyPolyfills(window);
      cb();
    });
  }
}

declare const __import: Function;
