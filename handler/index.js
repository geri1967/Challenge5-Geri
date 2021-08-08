const path = require("path");
module.exports = {
    handleLogin: (req, res) => {
        res.render("login");
    },
    handleHomePage: (req, res) => {
        res.render("gambar", {email: 'aaaaa'});
        // res.sendFile('home.html', {root: path.join(__dirname, '../static')});
    },
    handleSuitPage: (req, res) => {
        // res.render("suit");
        
        res.sendFile('challenge4_geri.html', {
            root: path.join(__dirname, '../static')
        });
    },
};
