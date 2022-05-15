export const getOS = () => {
  if (navigator.userAgent.indexOf("Win") !== -1) return "Windows";
  if (navigator.userAgent.indexOf("Mac") !== -1) return "Mac";
  if (navigator.userAgent.indexOf("X11") !== -1) return "UNIX";
  if (navigator.userAgent.indexOf("Linux") !== -1) return "Linux";
  return "Unknown";
};
