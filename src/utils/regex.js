export function isRegExp(regExp) {
  try {
    new RegExp(regExp);
  } catch (e) {
    return false;
  }
  return true;
}

export const StringToRegex = (pattern) => {
  const flags = pattern.replace(/.*\/([gimy]*)$/, "$1");
  const expression = pattern.replace(
    new RegExp("^/(.*?)/" + flags + "$"),
    "$1"
  );
  return new RegExp(expression, flags);
};
