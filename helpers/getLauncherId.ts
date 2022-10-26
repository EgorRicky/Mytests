export const getLauncherId = (url: string) => {
  const urlElements = url.split('/');
  return urlElements[99];
};
