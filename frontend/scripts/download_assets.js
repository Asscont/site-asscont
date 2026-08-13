import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
let fetchImpl = globalThis.fetch;
if (!fetchImpl) {
  // Dynamically import node-fetch only if global fetch is unavailable
  try {
    const mod = await import('node-fetch');
    fetchImpl = mod.default ?? mod;
  } catch (e) {
    console.error('No global fetch and failed to import node-fetch. Please run `npm install` in frontend to install node-fetch.');
    process.exit(1);
  }
}
const fetch = fetchImpl;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const assets = {
  'imgTwitterIcon.svg': 'https://www.figma.com/api/mcp/asset/7140a571-d537-4226-a8c0-d654b93ca569.svg',
  'imgGroup14.svg': 'https://www.figma.com/api/mcp/asset/0c26a6e4-896d-4333-a656-3622d3bc396d.svg',
  'imgFacebookIcon.svg': 'https://www.figma.com/api/mcp/asset/06241149-d6c6-4388-b274-a310a534105f.svg',
  'imgSetaParaEnviarEmail.svg': 'https://www.figma.com/api/mcp/asset/af11d2ca-9786-46fe-8c14-7e5f3f039e4c.svg',
  'imgRectangle4549.png': 'https://www.figma.com/api/mcp/asset/529ad34c-69c0-4cca-af6a-f0808634ae4c.png',
  'imgCopiaDeApresencao.png': 'https://www.figma.com/api/mcp/asset/fc9e152d-69e9-49d8-826a-dd844be707ad.png',
  'imgFotoAdega.png': 'https://www.figma.com/api/mcp/asset/87e4c628-2be6-4240-a7ec-26ef20c54aec.png',
  'imgLogoAdega.png': 'https://www.figma.com/api/mcp/asset/a53723f8-1f1b-4aec-8e3d-79716b669e23.png',
  'imgFotoBlendpaper.png': 'https://www.figma.com/api/mcp/asset/3bce0ca0-a97c-4c17-9bdb-324e6e31424a.png',
  'imgBlendpaper1.png': 'https://www.figma.com/api/mcp/asset/d0917b28-27b2-4003-a3fc-6b007484fcd0.png',
  'imgRetanguloAzulDasCertificacoes.png': 'https://www.figma.com/api/mcp/asset/3db55c68-1e8a-43c4-8453-08c13bf8ef77.png',
  'img11.png': 'https://www.figma.com/api/mcp/asset/876c31d7-07eb-4983-ae71-98aa21fc1655.png',
  'img41.png': 'https://www.figma.com/api/mcp/asset/2e5af8f3-5cc1-450e-b295-2649b2ced268.png',
  'img31.png': 'https://www.figma.com/api/mcp/asset/9422f92e-e74f-41e5-b9a5-e468b60161e4.png',
  'img27.png': 'https://www.figma.com/api/mcp/asset/414438fa-dcf8-4b3d-a202-0d54898d8abb.png',
  'img51.png': 'https://www.figma.com/api/mcp/asset/edec4577-5d09-4a2d-8f1d-e72081803336.png',
  'imgVector22.png': 'https://www.figma.com/api/mcp/asset/9446b490-47c1-4679-8956-ec4817623230.png',
  'imgLogosParaOSite53.png': 'https://www.figma.com/api/mcp/asset/d6f97974-7ad2-4ad0-903a-b36b3acf93a1.png',
  'imgLogosParaOSite1.png': 'https://www.figma.com/api/mcp/asset/46eb6e7b-464e-43b7-87ba-f1e9aaf48277.png',
  'imgFotoDeOlhoNosOlhinhos.png': 'https://www.figma.com/api/mcp/asset/f2c91295-80d9-46ef-814e-ceaba63e4fb0.png',
  'imgLogoDeOlhoNosOlhinhos.png': 'https://www.figma.com/api/mcp/asset/4eedd62d-1eda-45b3-b144-007a2262a92f.png',
  'imgLogoBentoMuniz.png': 'https://www.figma.com/api/mcp/asset/364a6490-4c37-49ca-bcda-183162d639f4.png',
  'imgLogoHubcount.png': 'https://www.figma.com/api/mcp/asset/e06a5f23-2fe1-4a3d-85c0-9bce0541f7cc.png',
  'imgLogoOmie.png': 'https://www.figma.com/api/mcp/asset/11757643-8fc7-4f20-b81c-16495b0c42c8.png',
  'imgSciSistemasContabeisLgog.png': 'https://www.figma.com/api/mcp/asset/968e4729-6807-4107-ab7a-1d65a71cd2b1.png',
  'imgFundoBannerQuemSomos.png': 'https://www.figma.com/api/mcp/asset/407330fe-dc75-49ad-beaa-f7aea84eee42.png',
  'imgFundoParaLegal.svg': 'https://www.figma.com/api/mcp/asset/d6ea33c3-dd38-4aeb-84f3-8f1344e22399.svg',
  'imgRectangle4525.svg': 'https://www.figma.com/api/mcp/asset/99888ee3-e80d-48fd-add6-d2ba42fecdb7.svg',
  'imgIconeAlgunsNossosClientes.svg': 'https://www.figma.com/api/mcp/asset/52e11321-7338-4ab5-8502-d6e5b4d75325.svg',
  'imgVector20.svg': 'https://www.figma.com/api/mcp/asset/49773398-119c-452c-94a5-290e7c8b3391.svg',
  'imgVector21.svg': 'https://www.figma.com/api/mcp/asset/b7101a92-da6e-4708-acb8-6942f7b66bef.svg',
  'imgVector26.svg': 'https://www.figma.com/api/mcp/asset/0c7b9eee-3133-4021-b75b-4a6fda36f8f6.svg',
  'imgIconeAlgunsNossosClientes1.svg': 'https://www.figma.com/api/mcp/asset/62686b3c-8238-4f87-8cc8-2ed952a4d92d.svg',
  'imgFundoDeOlhoNosOlhinhos.svg': 'https://www.figma.com/api/mcp/asset/c81df316-9698-407c-bc8c-f1babb67109c.svg',
  'imgRectangle80.svg': 'https://www.figma.com/api/mcp/asset/a9905f0a-8512-4c8c-9817-71b88d65cf38.svg',
  'imgLinhaHorizontalLinha.svg': 'https://www.figma.com/api/mcp/asset/e009adba-7dc0-403b-ab26-982472a57554.svg',
  'imgFundoTextoBannerQuemSomos.svg': 'https://www.figma.com/api/mcp/asset/386ac9da-f9a3-4cfc-a926-bb0dd06fa35a.svg',
  'imgRetanguloQuemSomosBanner.svg': 'https://www.figma.com/api/mcp/asset/75add035-dd99-42be-a621-ddd8359e73f8.svg',
  'imgRectangleInicio.svg': 'https://www.figma.com/api/mcp/asset/2cff50ea-7310-4172-ae3c-5227a420ad42.svg'
};

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrayBuffer));
  console.log('Saved', dest);
}

async function main() {
  for (const [name, url] of Object.entries(assets)) {
    const dest = path.join(outDir, name);
    try {
      await download(url, dest);
    } catch (err) {
      console.error('Error downloading', url, err && err.message ? err.message : err);
    }
  }
  console.log('Done');
}

// run when executed as a script
if (process.argv[1] && process.argv[1].endsWith('download_assets.js')) {
  main().catch((e) => {
    console.error('Download failed', e && e.message ? e.message : e);
    process.exit(1);
  });
}
