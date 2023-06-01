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
app.get("/api/user/get-users", (req, res, next) => {
    if (!req.headers.authorization)
        res.status(401).json({ message: "Miss token" });
    else {
        try {
            res.status(200).json(User);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
});

app.post("/api/user/create-information", (req, res, next) => {
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
});

app.post("/api/user/create-profile", (req, res, next) => {
    if (!req.headers.authorization)
        res.status(401).json({ message: "Miss token" });
    else {
        console.log(req.body);
        const userInfor = req.body;
        res.status(200).json({
            userInfor,
            message: "Create Profile Successfully!",
        });
    }
});

// Khởi chạy server
app.listen(port, () => {
    console.log(
        `App listening on port at  http://localhost:${port}/api/${version}/`
    );
});

const User = [
    {
        _id: {
            $oid: "64392fbd74d86f0fde2f1d4d",
        },
        email: "test.api2001@mail.com",
        first_name: "Rui",
        last_name: "Het Loi",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "harvard university",
        profileDetail: {
            mySkill: "Thành thạo Anh Văn",
            avatar: "Test.jpg",
            occupation: "CEOOOOO",
        },
        createdAt: {
            $date: "2023-04-14T10:49:33.824Z",
        },
        updatedAt: {
            $date: "2023-04-14T10:49:57.123Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6439305a74d86f0fde2f1d55",
        },
        email: "test.api2002@mail.com",
        first_name: "Tai",
        last_name: "Mai Anh",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "harvard university",
        profileDetail: {
            mySkill: "Cuộc đời màu gì - Màu Hồng",
            avatar: "Test.jpg",
            occupation: "CEOOOOO",
        },
        createdAt: {
            $date: "2023-04-14T10:52:10.218Z",
        },
        updatedAt: {
            $date: "2023-04-14T10:52:59.520Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "643f90151cff3aeca4b72312",
        },
        email: "ductrong@mail.com",
        first_name: "Trong",
        last_name: "Nguyen Duc",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            avatar: "Test.jpg",
            my_skill: "Cuộc đời màu gì - Màu Nhám",
            occupation: "CEOOOOO",
        },
        createdAt: {
            $date: "2023-04-19T06:54:14.079Z",
        },
        updatedAt: {
            $date: "2023-05-17T17:42:55.914Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "643fa663ffcb5a663c05e68a",
        },
        email: "test.final@mail.com",
        first_name: "Thái",
        last_name: "Thanh",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "harvard university",
        profileDetail: {
            avatar: "Test.jpg",
            my_skill: "Cuộc đời màu gì - Màu Nhám",
            occupation: "CEOOOOO",
        },
        createdAt: {
            $date: "2023-04-19T08:29:23.938Z",
        },
        updatedAt: {
            $date: "2023-04-19T08:32:33.328Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "643fa8590aea8095449c7845",
        },
        email: "minhthuan@mail.com",
        first_name: "Hung",
        last_name: "Manh",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "harvard university",
        profileDetail: {
            avatar: "Test.jpg",
            my_skill: "Cuộc đời màu gì - Màu Nhám",
            occupation: "CEOOOOO",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-04-19T08:37:45.242Z",
        },
        updatedAt: {
            $date: "2023-04-19T08:40:13.110Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6465123a4dc91c9709c84e40",
        },
        email: "for.example4@mail.com",
        first_name: "Trong",
        last_name: "Nguyen Duc",
        gender: "Nam",
        birthday: {
            $date: "2002-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            avatar: null,
            my_skill: null,
            occupation: null,
            level: null,
        },
        createdAt: {
            $date: "2023-05-17T17:43:22.852Z",
        },
        updatedAt: {
            $date: "2023-05-17T17:45:08.022Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "64665f772a7aee310b0cd5d4",
        },
        email: "test.register1@mail.com",
        first_name: "Test",
        last_name: "Information",
        gender: "Nu",
        birthday: {
            $date: "2001-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            avatar: "Test.jpg",
            level: "new seller",
            mySkill: "Lam Viec Nhom",
            occupation: "student",
        },
        createdAt: {
            $date: "2023-05-18T17:25:12.032Z",
        },
        updatedAt: {
            $date: "2023-05-18T17:26:19.953Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6466688fc1faa4a330cc6851",
        },
        email: "test.register2@mail.com",
        first_name: "Test",
        last_name: "Information",
        gender: "Nu",
        birthday: {
            $date: "2001-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            mySkill: "Lam Viec Nhom",
            avatar: "Test.jpg",
            occupation: "CEOOOOO",
            email: "test.register2@mail.com",
        },
        createdAt: {
            $date: "2023-05-18T18:03:59.523Z",
        },
        updatedAt: {
            $date: "2023-05-18T18:04:32.258Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "64666db808fadceb61fa0996",
        },
        email: "test.final.1@mail.com",
        first_name: "Test",
        last_name: "Information Final",
        gender: "Nu",
        birthday: {
            $date: "2001-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            mySkill: "Lam Viec Nhom",
            avatar: "Test.jpg",
            occupation: "CEOOOOO",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-18T18:26:00.223Z",
        },
        updatedAt: {
            $date: "2023-05-18T18:26:10.657Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6466ee04014aabd7e894710f",
        },
        email: "test.register3@mail.com",
        first_name: "Test11111",
        last_name: "Information Finala",
        gender: "Nu",
        birthday: {
            $date: "2001-01-01T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            avatar: "Test.jpg",
            my_skill: "Lam viec nhom, MasterAA",
            occupation: "teacherAA",
            level: "Expert",
        },
        createdAt: {
            $date: "2023-05-19T03:33:24.381Z",
        },
        updatedAt: {
            $date: "2023-05-30T17:52:41.597Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6475e1917768808b2c3e2d58",
        },
        email: "tay_giang@mail.com",
        first_name: "Tay",
        last_name: "GiangA",
        gender: "Nu",
        birthday: {
            $date: "2002-02-02T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "ABC university",
        profileDetail: {
            mySkill: "Cham Chi Hoc Tap",
            avatar: "Test.jpg",
            occupation: "Student",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-30T11:44:17.556Z",
        },
        updatedAt: {
            $date: "2023-05-31T09:08:40.548Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6476e1c7d5067e691a84e57e",
        },
        email: "manhtuan@mail.com",
        first_name: "Tuan",
        last_name: "Manh",
        gender: "Nam",
        birthday: {
            $date: "2003-03-03T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "DEF university",
        profileDetail: {
            mySkill: "Sieng nang",
            avatar: "test.jpg",
            occupation: "student",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-31T05:57:27.327Z",
        },
        updatedAt: {
            $date: "2023-05-31T05:59:48.372Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6476e552d5067e691a84e586",
        },
        email: "thanhthai@mail.com",
        first_name: "Thai",
        last_name: "Thanh",
        gender: "Nam",
        birthday: {
            $date: "2001-03-03T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "XYZ university",
        profileDetail: {
            mySkill: "Sieng nang Vui Ve",
            avatar: "test.jpg",
            occupation: "teacher",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-31T06:12:34.999Z",
        },
        updatedAt: {
            $date: "2023-05-31T06:13:05.611Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "6477076e4f2fb80d54402f33",
        },
        email: "xuantien@mail.com",
        first_name: "Tien",
        last_name: "Xuan",
        gender: "Nam",
        birthday: {
            $date: "2001-06-06T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "PTIT university",
        profileDetail: {
            mySkill: "Sieng nang Vui Ve",
            avatar: "test.jpg",
            occupation: "student",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-31T08:38:07.120Z",
        },
        updatedAt: {
            $date: "2023-05-31T08:38:30.791Z",
        },
        __v: 0,
    },
    {
        _id: {
            $oid: "64772590fc5de6d282189012",
        },
        email: "xuantien2@mail.com",
        first_name: "Tien",
        last_name: "Xuan",
        gender: "Nam",
        birthday: {
            $date: "2001-06-20T00:00:00.000Z",
        },
        address: "Hiep Phu, Quan 9, tp Ho Chi Minh",
        phone: "0123456789",
        education: "PTIT university",
        profileDetail: {
            mySkill: "Sieng nang Vui Ve",
            avatar: "test.jpg",
            occupation: "student",
            level: "new seller",
        },
        createdAt: {
            $date: "2023-05-31T10:46:40.197Z",
        },
        updatedAt: {
            $date: "2023-05-31T10:49:28.436Z",
        },
        __v: 0,
    },
];
