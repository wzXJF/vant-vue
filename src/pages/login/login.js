import api from "@/api/index.js";
import { setToken } from "@/utils/auth.js";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  computed: {
    canClick() {
      return (
        this.loginForm.username.length > 0 && this.loginForm.password.length > 0
      );
    }
  },
  methods: {
    loginHandle(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // let postData = {
          //   appCode: "edurp",
          //   username: "13669235750",
          //   password: "123456"
          // };

          let postData = { appCode: "edurp", ...this.loginForm };
          console.log(postData);
          let data = await api.request("post", api.settings.login, postData);
          let token = data.body.tokenType + " " + data.body.token;
          setToken(token);
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
