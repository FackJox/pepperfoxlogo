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


void main() {

  gl_FragColor = vec4(vUv,0.0,1.);
    }