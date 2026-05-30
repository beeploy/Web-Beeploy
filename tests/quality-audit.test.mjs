import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

function file(path) {
  return readFileSync(join(root, path), "utf8");
}

function sourceFiles(dir) {
  return readdirSync(join(root, dir)).flatMap((entry) => {
    const path = join(dir, entry);
    const fullPath = join(root, path);
    return statSync(fullPath).isDirectory() ? sourceFiles(path) : path;
  });
}

function luminance(hex) {
  const rgb = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((channel) => {
      const value = Number.parseInt(channel, 16) / 255;
      return value <= 0.03928
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    });

  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function contrast(a, b) {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

test("brand text colors meet WCAG contrast on their intended surfaces", () => {
  assert.ok(contrast("#1A1A1A", "#FFFFFF") >= 4.5);
  assert.ok(contrast("#4A4A4A", "#FFFFFF") >= 4.5);
  assert.ok(contrast("#1A1A1A", "#FFCC33") >= 4.5);
  assert.ok(contrast("#1A1A1A", "#E6B800") >= 4.5);
  assert.ok(contrast("#FFFFFF", "#1A1A1A") >= 4.5);
});

test("global CSS includes keyboard focus, skip link, and reduced motion support", () => {
  const css = file("app/globals.css");

  assert.match(css, /:focus-visible/);
  assert.match(css, /\.skip-link/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("SEO metadata and structured data are present on the landing", () => {
  const layout = file("app/layout.tsx");
  const page = file("app/page.tsx");

  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /robots/);
  assert.match(page, /application\/ld\+json/);
  assert.match(page, /Organization/);
});

test("performance keeps the first version server-rendered without client components", () => {
  const sources = ["app", "components"]
    .flatMap(sourceFiles)
    .filter((path) => path.endsWith(".tsx"))
    .map(file)
    .join("\n");

  assert.doesNotMatch(sources, /["']use client["']/);
});

test("visual direction avoids literal bee and honey imagery in the landing", () => {
  const landingSources = [
    "app/page.tsx",
    ...sourceFiles("components/sections"),
    "components/visuals/network-field.tsx",
  ]
    .map(file)
    .join("\n")
    .toLowerCase();

  for (const banned of ["panal", "miel", "tarro"]) {
    assert.doesNotMatch(landingSources, new RegExp(banned));
  }
});
