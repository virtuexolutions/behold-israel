// export const baseUrl = "https://a014-103-125-71-24.ngrok-free.app";
export const baseUrl = "https://drpeter.ad-wize.net"; // live Url 
// export const baseUrl = "https://3274-103-125-71-45.ngrok-free.app"; 
// export const baseUrl = "https://businessup.fashionaddaoutlet.com";
// export const baseUrl = "https://4b54-113-203-241-1.in.ngrok.io";
export const imageUrl = `${baseUrl}/api/images/`;
export const profilePicUrl = `${baseUrl}/uploads`

export const apiDataLimit = 10;
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
