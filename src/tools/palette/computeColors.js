import shadeColor from './shadeColor';

export default function computeColors(color) {
  // Return array of color objects.
  return [{
    hex: shadeColor(color, 0.9),
    name: '@H050'
  }, {
    hex: shadeColor(color, 0.7),
    name: '@H100'
  }, {
    hex: shadeColor(color, 0.5),
    name: '@H200'
  }, {
    hex: shadeColor(color, 0.333),
    name: '@H300'
  }, {
    hex: shadeColor(color, 0.166),
    name: '@H400'
  }, {
    hex: shadeColor(color, 0),
    name: '@H500'
  }, {
    hex: shadeColor(color, -0.125),
    name: '@H600'
  }, {
    hex: shadeColor(color, -0.25),
    name: '@H700'
  }, {
    hex: shadeColor(color, -0.375),
    name: '@H800'
  }, {
    hex: shadeColor(color, -0.5),
    name: '@H900'
  }];
}