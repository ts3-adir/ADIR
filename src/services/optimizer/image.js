import {PixelRatio} from 'react-native';

export const AUTO = {
  COMPRESS: 'compress',
}

export const FIT = {
  MAX: 'max',
  CROP: 'crop',
}

export const FORMAT = {
  JPEG: 'jpg',
}

export const MASK = {
  CORNERS: 'corners',
}

const getOptimizedUrl = (
  url,
  {
    auto = AUTO.COMPRESS,
    fit = FIT.MAX,
    width,
    height,
    dpr = PixelRatio.get(),
    mask,
    cornerRadius,
  } = {},
) => {
  let optimizedUrl = `${url}?auto=${auto}&fit=${fit}&fm=${
    FORMAT.JPEG
  }&w=${width}&h=${height}&dpr=${dpr}`;

  if (mask) {
    optimizedUrl += `&mask=${mask}&corner-radius=${cornerRadius}`;
  }

  return optimizedUrl;
}

export default getOptimizedUrl;
