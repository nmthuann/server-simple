//const homeService = require("../Services/homeService")
// const db = require("../Models/index");

class homeController {
    async show(req, res) {
        try {
            return res.render("home", {
                data: JSON.stringify(data),
            });
        } catch (e) {
            console.log(e, "lỗi");
        }
    }
}

export default new homeController();
