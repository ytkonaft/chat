const rules = {
  methods: {
    confirmPass(rule, value, callback) {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.formData.password) {
        callback(new Error("Two inputs doesn't match!"));
      } else {
        callback();
      }
    }
  },
  data() {
    return {
      rules: {
        username: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur"
          },
          {
            min: 3,
            message: "Length should be at least 3 letters",
            trigger: "blur"
          }
        ],
        usernameNotRequired: [
          {
            min: 3,
            message: "Length should be at least 3 letters",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please enter password",
            trigger: "blur"
          },
          {
            min: 5,
            max: 12,
            message: "Length should be 5 to 12",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        confirm: [
          {
            required: true,
            message: "Please confirm password",
            trigger: "blur"
          },
          { validator: this.confirmPass, trigger: "blur" }
        ]
      }
    };
  }
};
export default rules;
