import {scale} from '../utils/scale.utils';

const FontSize = Object.freeze({
  h1: scale(Math.round(28 * 0.8)),
  h2: scale(Math.round(24 * 0.8)),
  h3: scale(Math.round(18 * 0.8)),
  h4: scale(Math.round(16 * 0.8)),
  body: scale(Math.round(14 * 0.8)),
  small: scale(Math.round(13 * 0.8)),
  xSmall: scale(Math.round(12 * 0.8)),
  xxSmall: scale(Math.round(10 * 0.8)),
});

export default FontSize;
