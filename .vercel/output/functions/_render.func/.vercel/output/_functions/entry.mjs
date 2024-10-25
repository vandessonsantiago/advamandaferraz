import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CPklrUy-.mjs';
import { manifest } from './manifest_DR9OSXta.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agradecimento-contacto.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/nacionalidade-portuguesa.astro.mjs');
const _page4 = () => import('./pages/politicas-e-privacidade.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agradecimento-contacto/index.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/nacionalidade-portuguesa/index.astro", _page3],
    ["src/pages/politicas-e-privacidade/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "45526e63-b8b2-42dd-a378-2c141dfd191e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
