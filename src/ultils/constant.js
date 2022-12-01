export const currencyFormat = (num) => {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return '';
};
export const createFileName = (name, fileName) => {

  return (name + fileName.slice(fileName.lastIndexOf('.')));
}
export const coverString = (str) => str.split(' ').map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');
// export const renameKeys = (keysMap, object) =>
//   Object.keys(object).reduce(
//     (acc, key) => ({
//       ...acc,
//       ...{ [keysMap[key] || key]: object[key] },
//     }),
//     {}
//   );