// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Write your description here, why the function is not working?
 * Pada baris num % 2 !== 0, digunakan untuk memeriksa apakah num adalah angka ganjil.
 * Sehingga untuk memastikan bahwa hanya angka genap yang akan ditempatkan dalam array hasil filter, gunakan kondisi num % 2 === 0.
 * Fungsi asli menggunakan metode toString(), yang mengonversi array yang telah difilter menjadi string.
 * Fungsi yang benar adalah langsung mengembalikan array yang telah difilter tanpa mengonversinya menjadi string.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};