import UserRouter from "./user.routes";
import PostRouter from "./post.routes";
import OrderRouter from "./order.routes";

// định nghĩa route
export function router(app) {
    app.use("/user", UserRouter);
    app.use("/post", PostRouter);
    app.use("/order", OrderRouter);
}
// module.exports = { router };
