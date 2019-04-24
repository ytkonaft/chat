import anime from "animejs";
const shake = {
  methods: {
    shake(el) {
      const xAmplitude = 16;
      return anime({
        targets: el,
        easing: "easeInOutSine",
        duration: 550,
        translateX: [
          {
            value: xAmplitude * -1
          },
          {
            value: xAmplitude
          },
          {
            value: xAmplitude / -2
          },
          {
            value: xAmplitude / 2
          },
          {
            value: 0
          }
        ],
        autoplay: false
      });
    }
  }
};
export default shake;
