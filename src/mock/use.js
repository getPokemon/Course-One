import Mock from "mockjs";
Mock.mock("/api/user", "get", function() {
  const phonePrefix = ['132', '135', '189']
  const index = Math.floor(Math.random() * phonePrefix.length)
  var phone = phonePrefix[index] + Mock.mock(/\d{8}/)
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
          'phone|1-10': ['@phone'],
          "id|+100": 13983994809,
          url: phone,
          email: "@email",
          province:"@city",
          timer:"@date('yyyy-MM-dd')",
          address:"@csentence(7)"
        },
      ],
    },
  });
});




