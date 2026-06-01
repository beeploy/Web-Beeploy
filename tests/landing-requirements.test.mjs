import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

function file(path) {
  return readFileSync(join(root, path), "utf8");
}

test("tailwind config exposes Beeploy brand color tokens", () => {
  const source = file("tailwind.config.ts");

  for (const token of [
    String.raw`background:\s*["']#F8F9FA["']`,
    String.raw`surface:\s*["']#FFFFFF["']`,
    String.raw`["']text-main["']:\s*["']#1A1A1A["']`,
    String.raw`["']text-muted["']:\s*["']#4A4A4A["']`,
    String.raw`["']golden-pollen["']:\s*["']#FFCC33["']`,
    String.raw`["']golden-hover["']:\s*["']#E6B800["']`,
  ]) {
    assert.match(source, new RegExp(token));
  }
});

test("root layout configures Rubik and Inter with Spanish metadata", () => {
  const source = file("app/layout.tsx");

  assert.match(source, /import\s+\{\s*Inter,\s*Rubik\s*\}\s+from\s+["']next\/font\/google["']/);
  assert.match(source, /<html lang="es"/);
  assert.match(source, /title:/);
  assert.match(source, /Beeploy/);
  assert.match(source, /description:/);
});

test("landing page composes the approved modular sections", () => {
  const source = file("app/page.tsx");

  for (const component of [
    "Hero",
    "TrustBar",
    "ServicePillars",
    "MethodTimeline",
    "FitSignals",
    "PrinciplesSection",
    "PurposeBridge",
    "FinalCta",
  ]) {
    assert.match(source, new RegExp(`<${component}\\b`));
  }
});

test("landing sections carry commercial copy, services, and Cameyapp narrative", () => {
  const files = [
    "components/sections/hero.tsx",
    "components/sections/service-pillars.tsx",
    "components/sections/method-timeline.tsx",
    "components/sections/purpose-bridge.tsx",
  ].map(file).join("\n");

  for (const copy of [
    "Tecnología de élite para hacer crecer tu empresa",
    "Desarrollo a la Medida",
    "Ciberseguridad",
    "Datos e IA",
    "Creamos la App, Web o Sistema que tu negocio necesita",
    "Protegemos a tu empresa de hackeos y fugas de información",
    "Organizamos tu información para que tomes decisiones rentables",
    "Entendemos tu negocio",
    "Cameyapp",
    "/cameyapp",
  ]) {
    assert.match(files, new RegExp(copy));
  }
});

test("landing brings back honeycomb identity and Beeploy mascot placeholder", () => {
  const css = file("app/globals.css");
  const files = [
    "components/sections/hero.tsx",
    "components/sections/service-pillars.tsx",
    "components/sections/purpose-bridge.tsx",
    "components/visuals/beeploy-bee-placeholder.tsx",
  ].map(file).join("\n");

  assert.match(css, /clip-path:\s*polygon/);
  assert.match(css, /\.honeycomb-bg/);
  assert.match(files, /La Colmena Tech/);
  assert.match(files, /Abejita Beeploy/);
  assert.match(files, /Beeploy/);
});

test("Cameyapp coming soon page has the requested placeholder and home return", () => {
  const source = file("app/cameyapp/page.tsx");

  assert.match(source, /Nuestros arquitectos están construyendo el futuro del trabajo/);
  assert.match(source, /Abejita con casco/);
  assert.match(source, /href="\/"/);
});

test("base routes exist for servicios, nosotros, and cameyapp", () => {
  for (const route of ["servicios", "nosotros", "cameyapp"]) {
    assert.equal(existsSync(join(root, "app", route, "page.tsx")), true);
  }
});
