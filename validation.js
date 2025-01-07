// validation.js

export const isEmail = (value) => {
    const email = value || "";
    const [localPart, domain, ...etc] = email.split("@");
  
    if (!localPart || !domain || etc.length) {
      return false;
    } else if (email.includes(" ")) {
      return false;
    } else if (email[0] === "-") {
      return false;
    }
  
    for (const word of localPart.toLowerCase().split("")) {
      if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","+","_"].includes(word)) {
        return false;
      }
    }
  
    for (const word of domain.toLowerCase().split("")) {
      if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-", "."].includes(word)) {
        return false;
      }
    }
  
    return true;
  };



  // validation.js

  // 정규 표현식 예시

// export const isEmail = (value) => {
//     const email = value || "";
//     const [localPart, domain, ...etc] = email.split("@");
  
//     if (!localPart || !domain || etc.length) {
//       return false;
//     } else if (email.includes(" ")) {
//       return false;
//     } else if (email[0] === "-") {
//       return false;
//     } else if (!/^[a-z0-9+_-]+$/gi.test(localPart)) {
//       return false;
//     } else if (!/^[a-z0-9.-]+$/gi.test(domain)) {
//       return false;
//     }
  
//     return true;
//   };