const getCroppedImageUrl = (url: string) => {
  const targert = 'media/';
  const index = url.indexOf(targert) + targert.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
