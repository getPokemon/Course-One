import Mock from "mockjs";
Mock.mock("/api/user", "get", function() {
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 200,
      [`rows|6`]: [
        {
          id: "@guid",
          nickname: "@cname",
          createDate: Date.now(),
          phone:"@phone",
          "id|+1": 0,
          url: "@url",
          email: "@email",
          province:"@city",
          timer:"@date('yyyy-MM-dd')",
          address:"@csentence(7)"
          


        },
      ],
    },
  });
});




