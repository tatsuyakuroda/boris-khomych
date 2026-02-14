/**
 * Map display tech names (from project stack) to Simple Icons slugs.
 * Icons: https://cdn.simpleicons.org/<slug>
 */
const TECH_TO_SLUG: Record<string, string> = {
  "Next.js": "nextdotjs",
  Node: "nodedotjs",
  "Node.js": "nodedotjs",
  AWS: "amazonaws",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch",
  Docker: "docker",
  TypeScript: "typescript",
  React: "react",
  "Three.js": "threedotjs",
  PostgreSQL: "postgresql",
  Python: "python",
  FastAPI: "fastapi",
  GraphQL: "graphql",
  "Vue.js": "vuedotjs",
  MongoDB: "mongodb",
  Firebase: "firebase",
  Unity: "unity",
  "Unreal Engine": "unrealengine",
  Roblox: "roblox",
  Lua: "lua",
  JavaScript: "javascript",
  Rust: "rust",
  WebAssembly: "webassembly",
  Go: "go",
  gRPC: "grpc",
  Kubernetes: "kubernetes",
  Svelte: "svelte",
  Redis: "redis",
};

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

/** Local/custom icons (in public/tech-icons/) override CDN for these techs */
const LOCAL_ICONS: Record<string, string> = {
  AWS: "/tech-icons/aws.png",
  "AWS (Lambda, RDS, S3, CloudFront)": "/tech-icons/aws.png",
};

export function getTechIconUrl(tech: string): string | null {
  if (LOCAL_ICONS[tech]) return LOCAL_ICONS[tech];
  const slug = TECH_TO_SLUG[tech];
  if (!slug) return null;
  return `${SIMPLE_ICONS_CDN}/${slug}`;
}

export function hasTechIcon(tech: string): boolean {
  return tech in TECH_TO_SLUG;
}
