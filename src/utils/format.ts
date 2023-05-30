export function formatText(s: string) {
  return s.replace(/,([^\s])/g, "$1");
}