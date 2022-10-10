const login = {
  login: async (req, res, next) => {
    res.status(200).send(req.user);
  },
  logout: async (req, res, next) => {
    req.session.destroy(() => req.session);
    res.status(204).redirect("/");
  },
  afterPassport: async (req, res, next) => {
    res.redirect("/");
  },
};

module.exports = login;
