type LogTypes = "log" | "info" | "error" | "warn" | "dir";
const availableLogTypes = ["log", "info", "error", "warn", "dir"];

export const nimLog =
  (title: string, ...args: any[]) =>
  (type?: LogTypes) => {
    if (type && availableLogTypes.some((t) => t === type)) {
      console[type](`${title}______________________________`);
      args.forEach((el) => console[type](el));
      return;
    }
    nimLog(title, ...args)("log");
  };

export function trimText(input: string, length: number) {
  if (input)
    return input.length > length ? `${input.substring(0, length)}...` : input;
  return "";
}

export const kebabCase = (str: string) =>
  str.replaceAll(/\s/g, "-").toLowerCase();

export const vw = function (v: number) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
};
