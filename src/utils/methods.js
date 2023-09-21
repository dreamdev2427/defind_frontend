/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */

/* eslint-disable no-param-reassign */
export function slideUp(element, duration = 500) {
  return new Promise((resolve, _reject) => {
    element.style.height = `${element.offsetHeight}px`;
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = `${duration}ms`;
    element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(() => {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
      resolve(false);
    }, duration);
  });
}

export function slideDown(element, duration = 500) {
  return new Promise((_resolve, _reject) => {
    element.style.removeProperty("display");
    let { display } = window.getComputedStyle(element);

    if (display === "none") display = "block";

    element.style.display = display;
    const height = element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight;
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = `${duration}ms`;
    element.style.height = `${height}px`;
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
    }, duration);
  });
}

export function slideToggle(element, duration = 500) {
  if (window.getComputedStyle(element).display === "none") {
    return slideDown(element, duration);
  }
  return slideUp(element, duration);
}

export const flatDeep = (arr, d = 1) =>
  d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function normalizedData(data, key = "section") {
  let allContetnt;

  data.forEach((item) => {
    const newObj = Object.entries(item).reduce((acc, cur) => {
      const [k, property] = cur;
      if (property === null) {
        return acc;
      }
      return {
        ...acc,
        [k]: property,
      };
    }, {});

    allContetnt = {
      ...allContetnt,
      [newObj[key]]: {
        ...newObj,
      },
    };
  });

  return allContetnt;
}

export const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export const getMonth = (date) => months[date.getMonth()];

export const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].slug === obj.slug) {
      return i;
    }
  }

  return -1;
};

export const shuffleArray = (array) => {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export const hasKey = (obj, key) =>
  !!Object.prototype.hasOwnProperty.call(obj, key);

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const isValidXRPAddress = (address) => {
  // Check if the address is a string and 34 characters long
  if (typeof address !== "string" || address.length !== 34) {
    return false;
  }

  // Check if the address starts with the letter "r"
  if (address[0] !== "r") {
    return false;
  }

  // Check if the address contains only valid characters (alphanumeric and "-")
  if (!/^[a-zA-Z0-9-]+$/.test(address)) {
    return false;
  }

  return true;
};

export const getShortAddress = (address) => {
  if (isEmpty(address)) return "";
  return (
    address.slice(0, 6) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
};

export const getMidAddress = (address) => {
  if (isEmpty(address)) return "";
  return (
    address.slice(0, 10) +
    "..." +
    address.slice(address.length - 10, address.length)
  );
};

export const getLongAddress = (address) => {
  if (isEmpty(address)) return "";
  return (
    address.slice(0, 25) +
    "..." +
    address.slice(address.length - 25, address.length)
  );
};

export const numberWithCommas = (x, digit = 3) => {
  if (isEmpty(x) || isNaN(x)) return "0";
  return Number(x).toLocaleString(undefined, {
    maximumFractionDigits: digit,
  });
};

export const getExtension = (filename) => {
  return filename.split(".").pop();
};
