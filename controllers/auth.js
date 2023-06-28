const loginLogOut = (req, res) => {
  res.send(
    req.oidc.isAuthenticated()
    ? `Logged in as ${req.oidc.user.name}`
    : 'Logged Out'
  );
};

module.exports = {loginLogOut};