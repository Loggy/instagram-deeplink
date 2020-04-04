
const isIOS = (userAgent: string): boolean => {
  return !!/iPad|iPhone|iPod/.test(userAgent);
}

const deeplinkConverter = (path: string): string => {
  let splittedPath: string[] = path.split('/').filter(el => !!el);

  if (!splittedPath.length) return 'instagram://app';
  if (splittedPath[0] === 'explore') splittedPath = splittedPath.slice(1);

  switch (splittedPath[0]) {
    case 'p': {
      return `instagram://media?id=${splittedPath[1]}`;
    }
    case 'locations': {
      return `instagram://location?id=${splittedPath[1]}`;
    }
    case 'tags': {
      return `instagram://tag?name=${splittedPath[1]}`;
    }
    default: {
      return `instagram://user?username=${splittedPath[0]}`;
    }
  }
}

export { isIOS, deeplinkConverter };
