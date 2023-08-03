let testStr1 = "380 44 364 83 65";
let testStr2 = "+380 44 364 83 65";
let testStr3 = "380-44-364-83-65";
let testStr4 = "+380-44-364--83-65";
let testStr5 = "+38 044 364 83 65";
let testStr6 = "+380 44+364 83 65";

function findPhoneNumberFromString(string) {
  const regEx = /^(?<countryCode>\+?38)0[ -](\d{2})[ -](\d{3})([ -]\d{2}){2}/g;

  if (regEx.exec(string) !== null) {
    let numWithoutCountryCode = string.replace(/\+?38/g, "");
    let finalNum = numWithoutCountryCode.replace(/[ -]/g, "");
    return finalNum;
  } else {
    return null;
  }
}

console.log(findPhoneNumberFromString(testStr2));