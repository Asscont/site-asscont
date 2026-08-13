import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'assets');

const required = [
  'imgLogoBentoMuniz.png',
  'imgFundoBannerQuemSomos.png',
  'imgRetanguloAzulDasCertificacoes.png',
  'imgLogoOmie.png',
  'imgLogoHubcount.png',
  'imgSciSistemasContabeisLgog.png'
];

const present = [];
const missing = [];

for (const name of required) {
  const p = path.join(outDir, name);
  if (fs.existsSync(p)) present.push(name);
  else missing.push(name);
}

console.log('Assets folder:', outDir);
console.log('Present:', present);
console.log('Missing:', missing);

if (missing.length > 0) process.exit(2);