const User = require("../models/user/user.entity");

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    createInformation(req, res) {
        if (!req.headers.authorization)
            return res.status(401).json({ message: "Miss token" });
        else {
            console.log(req.body);
            const userInfor = req.body;
            return res.status(200).json({
                userInfor,
                message: "Create Information Successfully!",
            });
        }
    }

    createProfile(req, res) {
        if (!req.headers.authorization)
            return res.status(401).json({ message: "Miss token" });
        else {
            console.log(req.body);
            const userProfile = req.body;
            return res.status(200).json({
                userProfile,
                message: "Create Profile Successfully!",
            });
        }
    }

    async getUsers(req, res) {
        if (!req.headers.authorization)
            return res.status(401).json({ message: "Miss token" });
        else {
            try {
                return res.status(200).json(User);
            } catch (error) {
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }
        }
    }
}
export default new UserController();
