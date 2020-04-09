export function isRegExp(regExp) {
  try {
    new RegExp(regExp);
  } catch (e) {
    return false;
  }
  return true;
}

export const StringToRegex = (pattern) => {
  if (!pattern) {
    return "";
  }

  const flags = pattern.toString().replace(/.*\/([gimy]*)$/, "$1");
  const expression = pattern
    .toString()
    .replace(new RegExp("^/(.*?)/" + flags + "$"), "$1");
  return new RegExp(expression, flags);
};
