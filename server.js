const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "나성민",
      birthday: "990201",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "전미도",
      birthday: "931222",
      gender: "여자",
      job: "배우",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "허영만",
      birthday: "640505",
      gender: "남자",
      job: "만화가",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
