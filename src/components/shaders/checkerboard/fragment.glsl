uniform float uTime;
uniform float progress;
uniform sampler2D abstractTexture;
uniform vec4 resolution;
uniform vec3 lightPos;
uniform vec3 cameraPos;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal; 
varying vec3 FragPos;

float PI = 3.14159;

float rand(float n){return fract(sin(n) * 43758.5453123);}
float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(float p){
	float fl = floor(p);
  float fc = fract(p);
	return mix(rand(fl), rand(fl + 1.0), fc);
}
	
float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
  vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

  float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main() {

  float x = floor(vUv.x * 10.);
  float y = floor(vUv.y * 10.);
  float pattern = noise(vec2(x,y));



  float p0 = progress;
  float w = 0.4;

  p0 = map(p0, 0., 1., -w, 1.);
  p0 = smoothstep(p0,p0+w, vUv.x);

  float p0_ = 2.* p0 - pattern;


  gl_FragColor = vec4(vec3(p0_),1.);
    }