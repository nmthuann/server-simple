class orderController {
    async getOrders(req, res) {
        try {
            return res.render("home", {
                data: JSON.stringify(orderData),
            });
        } catch (e) {
            console.log(e, "lỗi");
        }
    }
}

export default new orderController();
