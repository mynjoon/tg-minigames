/* ==========================================================================
   자산 캐시버스터 (SETKORA stamp-assets 패턴 포크)
   HTML의 로컬 css/js/jsx 참조에 '내용 해시' ?v= 를 부착한다.
   파일이 바뀐 것만 해시가 바뀌어, 배포하면 사용자 브라우저가 자동으로 새 파일을 받는다.
   실행: 레포 루트에서 node tools/stamp-assets.mjs  (배포 전 필수 — DEPLOY.md)
   ========================================================================== */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const hash8 = (p) => createHash('sha256').update(readFileSync(p)).digest('hex').slice(0, 8);

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || ['node_modules', 'tools', 'docs', 'assets'].includes(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

let changed = 0;
for (const file of htmlFiles(ROOT)) {
  const src = readFileSync(file, 'utf8');
  const next = src.replace(
    /(?<=(?:href|src)=")([\w\-/.]+\.(?:css|js|jsx))(?:\?v=[\w]+)?(?=")/g,
    (m, path) => {
      if (path.startsWith('http')) return m;
      try { return `${path}?v=${hash8(join(ROOT, path))}`; } catch (_) { return m; }
    }
  );
  if (next !== src) { writeFileSync(file, next); changed++; console.log('stamped:', file.replace(ROOT + '/', '')); }
}
console.log(changed ? `done — ${changed} file(s) updated` : 'done — no changes');
