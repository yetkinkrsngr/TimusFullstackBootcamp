const { authService } = require("../services");

const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // email valid check with regex

  if (email && password) {
    const user = await authService.ByEmailAndPassword(email, password);

    if (user) {
      const accesToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      const refleshToken = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.cookie("refleshToken", refleshToken, {
        httpOnly: true,
        sameSite: "strict",
      });
      res.header("Authorization", accesToken).status(200);
    } else {
      res.status(404).json({ message: "Kullanıcı adı veya şifre hatalı" });
    }
  } else {
    res.status(401).json({ message: "Email ve password gerekli..." });
  }
};

exports.refleshToken = async (req, res) => {
  const { refleshToken } = req.cookies;

  if (refleshToken) {
    jwt.verify(refleshToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Reflesh token hatalı" });
      } else {
        const accesToken = jwt.sign(
          { user: decoded.user },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.header("Authorization", accesToken).status(200);
      }
    });
  } else {
    res.status(401).json({ message: "Reflesh token gerekli" });
  }
};

exports.logout = async (req, res) => {
  const { token } = req.params;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Token hatalı" });
      } else {
        res.status(200).json({ message: "Logout başarılı" });
      }
    });
  } else {
    res.status(401).json({ message: "Token gerekli" });
  }
};
