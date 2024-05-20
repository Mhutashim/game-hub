/* This function will make the cropped url from the original url. 
as the API supports image crop on the fly */

const getCroppedImageUrl = (url : string) => {

  if (!url) return null;
  const target = 'media/' //for readability
  //finding the target's index 
  const index = url.indexOf(target) + target.length ; //to get the index till media/ as "/" in comon in http

  //returning the new url
  return url.slice(0,index) + "crop/600/400/" + url.slice(index); // here url.slice(index) = the remaining url
};
export default getCroppedImageUrl;