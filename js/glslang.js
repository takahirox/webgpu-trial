export default async function() {
  const glslModule = await import('https://unpkg.com/@webgpu/glslang@0.0.12/dist/web-devel/glslang.js');
  return await glslModule.default();
}