const mock = require("../mock"); // Önceki hata düzeltildi, 'mock' modülü yüklendi
exports.getUserByEmailAndPassword = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
