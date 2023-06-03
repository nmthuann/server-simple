import express from "express";
import cors from "cors";

const port = 3333;
const version = "v1";
const app = express();
app.use(
    cors({
        origin: "*",
    })
);

// router(app);
app.get("/api/post/get-posts", (req, res, next) => {
    // if (!req.headers.authorization)
    //     res.status(401).json({ message: "Miss token" });
    // else {
    try {
        res.status(200).json(Posts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    //}
});

app.get("/api/post/get-category-details", (req, res, next) => {
    // if (!req.headers.authorization)
    //     res.status(401).json({ message: "Miss token" });
    // else {
    try {
        res.status(200).json(CategoryDetails);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    // }
});

app.get("/api/post/get-categories", (req, res, next) => {
    // if (!req.headers.authorization)
    //     res.status(401).json({ message: "Miss token" });
    // else {
    try {
        res.status(200).json(Categories);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    // }
});

app.post("/api/post/create-post", (req, res, next) => {
    if (!req.headers.authorization)
        return res.status(401).json({ message: "Miss token" });
    else {
        console.log(req.body);
        const post = req.body;
        return res.status(200).json({
            post,
            message: "Create Post Successfully!",
        });
    }
});

app.post("/api/post/update-post/:id", (req, res, next) => {
    if (!req.headers.authorization)
        res.status(401).json({ message: "Miss token" });
    else {
        console.log(req.body);
        const updatedPost = req.body;
        res.status(200).json({
            updatedPost,
            message: "updatedPost Successfully!",
        });
    }
});

// Khởi chạy server
app.listen(port, () => {
    console.log(
        `App listening on port at  http://localhost:${port}/api/${version}/`
    );
});

const Posts = [
    {
        _id: {
            $oid: "644e05d9c26233d27aec0c72",
        },
        post_name: "Edit Logo Poster",
        category_detail_name: "Category Detail 1",
        vote: 0,
        post_detail: {
            profile_user: "test.register3@mail.com",
            description: "Decorator is a special kind of declaration",
            FAQ: "No refunds",
            packages: [
                {
                    package_id: 0,
                    package_name: "Basic",
                    package_detail: {
                        revision: "one",
                        delivery_day: "2023-05-05",
                        unit_price: 100,
                    },
                },
                {
                    package_id: 1,
                    package_name: "Standard",
                    package_detail: {
                        revision: "two",
                        delivery_day: "2023-05-03",
                        unit_price: 3500,
                    },
                },
                {
                    package_id: 2,
                    package_name: "Premium",
                    package_detail: {
                        revision: "unlimited",
                        delivery_day: "2023-05-02",
                        unit_price: 6000,
                    },
                },
            ],
        },
        post_id: 6,
        createdAt: {
            $date: "2023-04-30T06:08:25.765Z",
        },
        updatedAt: {
            $date: "2023-04-30T12:03:39.934Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "64666970dfb9bc649f11bd7b",
        },
        post_name: "Edit video AE",
        category_detail_name: "Category Detail 1",
        vote: 0,
        post_detail: {
            profile_user: "ductrong@mail.com",
            description: "a base entity is a TypeScript class",
            FAQ: "No refunds",
            packages: [
                {
                    package_id: 0,
                    package_name: "Basic",
                    package_detail: {
                        revision: "one",
                        delivery_day: "2023-05-05",
                        unit_price: 2000,
                    },
                },
                {
                    package_id: 1,
                    package_name: "Standard",
                    package_detail: {
                        revision: "two",
                        delivery_day: "2023-05-03",
                        unit_price: 3500,
                    },
                },
                {
                    package_id: 2,
                    package_name: "Premium",
                    package_detail: {
                        revision: "unlimited",
                        delivery_day: "2023-05-02",
                        unit_price: 6000,
                    },
                },
            ],
        },
        post_id: 8,
        createdAt: {
            $date: "2023-05-18T18:07:44.850Z",
        },
        updatedAt: {
            $date: "2023-05-18T18:07:44.850Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6466f4d8ff740ebfd282f649",
        },
        post_name: "Take Photo And Design",
        category_detail_name: "Category Detail 1",
        vote: 0,
        post_detail: {
            profile_user: "test.register3@mail.com",
            description: "a base entity is a TypeScript class",
            FAQ: "No refunds",
            packages: [
                {
                    package_id: 0,
                    package_name: "Basic",
                    package_detail: {
                        revision: "one",
                        delivery_day: "2023-05-05",
                        unit_price: 50,
                    },
                },
                {
                    package_id: 1,
                    package_name: "Standard",
                    package_detail: {
                        revision: "two",
                        delivery_day: "2023-05-03",
                        unit_price: 3500,
                    },
                },
                {
                    package_id: 2,
                    package_name: "Premium",
                    package_detail: {
                        revision: "unlimited",
                        delivery_day: "2023-05-02",
                        unit_price: 6000,
                    },
                },
            ],
        },
        post_id: 9,
        createdAt: {
            $date: "2023-05-19T04:02:32.840Z",
        },
        updatedAt: {
            $date: "2023-05-19T04:02:32.840Z",
        },
        __v: 0,
    },
];

const Categories = [
    {
        createdAt: "2023-04-27T18:38:56.202Z",
        updatedAt: "2023-05-23T08:49:34.284Z",
        deletedAt: null,
        category_id: 1,
        category_name: "Graphics & Design",
        description: "test create",
    },
    {
        createdAt: "2023-04-27T18:39:02.252Z",
        updatedAt: "2023-05-23T08:51:12.549Z",
        deletedAt: null,
        category_id: 2,
        category_name: "Digital Marketing",
        description: "test create",
    },
    {
        createdAt: "2023-04-27T18:39:09.943Z",
        updatedAt: "2023-05-23T08:51:46.062Z",
        deletedAt: null,
        category_id: 3,
        category_name: "Programming",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:53:02.812Z",
        updatedAt: "2023-05-23T08:53:02.812Z",
        deletedAt: null,
        category_id: 4,
        category_name: "Data",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:53:27.013Z",
        updatedAt: "2023-05-23T08:53:27.013Z",
        deletedAt: null,
        category_id: 5,
        category_name: "Writing Content",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:53:46.847Z",
        updatedAt: "2023-05-23T08:53:46.847Z",
        deletedAt: null,
        category_id: 6,
        category_name: "AI Support",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:54:06.754Z",
        updatedAt: "2023-05-23T08:54:06.754Z",
        deletedAt: null,
        category_id: 7,
        category_name: "Music Audio",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:54:28.063Z",
        updatedAt: "2023-05-23T08:54:28.063Z",
        deletedAt: null,
        category_id: 8,
        category_name: "Translation",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:54:54.665Z",
        updatedAt: "2023-05-23T08:54:54.665Z",
        deletedAt: null,
        category_id: 9,
        category_name: "Website Design",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T08:59:32.851Z",
        updatedAt: "2023-05-23T08:59:32.851Z",
        deletedAt: null,
        category_id: 10,
        category_name: "Social Media",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T09:00:08.576Z",
        updatedAt: "2023-05-23T09:00:08.576Z",
        deletedAt: null,
        category_id: 11,
        category_name: "Service Support",
        description: "test create",
    },
    {
        createdAt: "2023-05-23T09:00:51.257Z",
        updatedAt: "2023-05-23T09:00:51.257Z",
        deletedAt: null,
        category_id: 12,
        category_name: "Learn English",
        description: "test create",
    },
    {
        createdAt: "2023-05-27T16:10:09.362Z",
        updatedAt: "2023-05-27T16:10:09.362Z",
        deletedAt: null,
        category_id: 13,
        category_name: "React Web",
        description: "Java is my life",
    },
];

const CategoryDetails = [
    {
        createdAt: "2023-04-27T19:09:45.305Z",
        updatedAt: "2023-05-28T09:39:08.521Z",
        deletedAt: null,
        category_detail_id: 1,
        category_detail_name: "Photo Graphic",
    },
    {
        createdAt: "2023-04-27T19:10:00.826Z",
        updatedAt: "2023-05-28T09:39:25.944Z",
        deletedAt: null,
        category_detail_id: 2,
        category_detail_name: "Design Logo",
    },
    {
        createdAt: "2023-04-27T19:10:05.968Z",
        updatedAt: "2023-05-28T09:40:15.117Z",
        deletedAt: null,
        category_detail_id: 3,
        category_detail_name: "Game Art",
    },
    {
        createdAt: "2023-04-27T19:10:12.344Z",
        updatedAt: "2023-05-28T09:41:00.657Z",
        deletedAt: null,
        category_detail_id: 4,
        category_detail_name: "Social Media",
    },
    {
        createdAt: "2023-05-28T09:44:21.787Z",
        updatedAt: "2023-05-28T09:44:21.787Z",
        deletedAt: null,
        category_detail_id: 5,
        category_detail_name: "Design website",
    },
    {
        createdAt: "2023-05-28T09:44:38.080Z",
        updatedAt: "2023-05-28T09:44:38.080Z",
        deletedAt: null,
        category_detail_id: 6,
        category_detail_name: "Android Stdio",
    },
    {
        createdAt: "2023-05-28T09:45:03.481Z",
        updatedAt: "2023-05-28T09:45:03.481Z",
        deletedAt: null,
        category_detail_id: 7,
        category_detail_name: "Website Development",
    },
    {
        createdAt: "2023-05-28T09:45:25.758Z",
        updatedAt: "2023-05-28T09:45:25.758Z",
        deletedAt: null,
        category_detail_id: 8,
        category_detail_name: "WordPress",
    },
    {
        createdAt: "2023-05-28T09:46:15.320Z",
        updatedAt: "2023-05-28T09:46:15.320Z",
        deletedAt: null,
        category_detail_id: 9,
        category_detail_name: "Data Science",
    },
    {
        createdAt: "2023-05-28T09:46:34.506Z",
        updatedAt: "2023-05-28T09:46:34.506Z",
        deletedAt: null,
        category_detail_id: 10,
        category_detail_name: "Data Model",
    },
    {
        createdAt: "2023-05-28T09:46:51.014Z",
        updatedAt: "2023-05-28T09:46:51.014Z",
        deletedAt: null,
        category_detail_id: 11,
        category_detail_name: "AI Analytics",
    },
    {
        createdAt: "2023-05-28T09:47:32.553Z",
        updatedAt: "2023-05-28T09:47:32.553Z",
        deletedAt: null,
        category_detail_id: 12,
        category_detail_name: "Producers & Composers",
    },
    {
        createdAt: "2023-05-28T09:47:55.791Z",
        updatedAt: "2023-05-28T09:47:55.791Z",
        deletedAt: null,
        category_detail_id: 13,
        category_detail_name: "SongWriters",
    },
    {
        createdAt: "2023-05-28T10:10:12.736Z",
        updatedAt: "2023-05-28T10:10:12.736Z",
        deletedAt: null,
        category_detail_id: 14,
        category_detail_name: "Shopify",
    },
    {
        createdAt: "2023-05-28T10:10:25.633Z",
        updatedAt: "2023-05-28T10:10:25.633Z",
        deletedAt: null,
        category_detail_id: 15,
        category_detail_name: "Bussiness Website",
    },
    {
        createdAt: "2023-05-28T10:10:41.280Z",
        updatedAt: "2023-05-28T10:10:41.280Z",
        deletedAt: null,
        category_detail_id: 16,
        category_detail_name: "Blogs",
    },
    {
        createdAt: "2023-05-28T10:10:57.444Z",
        updatedAt: "2023-05-28T10:10:57.444Z",
        deletedAt: null,
        category_detail_id: 17,
        category_detail_name: "Mobile App",
    },
];
