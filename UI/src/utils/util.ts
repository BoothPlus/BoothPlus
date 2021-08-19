export const getOpenGraphInfo = () => {
  const ogURL = document.querySelector('meta[property="og:url"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  return { ogURL, ogImage };
};
