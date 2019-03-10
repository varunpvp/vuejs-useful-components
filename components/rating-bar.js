Vue.component('rating-bar', {
    props: {
        value: {
            type: Number,
            required: true,
        },
        maxStars: {
            type: Number,
            default: 5,
        }
    },
    data() {
        return {
            starSize: 32,
        }
    },
    template: `
        <div @click="update" :style="ratingBgStyle" >
            <div :style="ratingBarStyle" ></div>
        </div>
        `,
    computed: {
        sizePx() {
            return `${this.starSize}px`
        },
        barSize() {
            return `${this.value * this.starSize}px`
        },
        maxBarSize() {
            return `${this.maxStars * this.starSize}px`
        },
        ratingBgStyle() {
            return {
                backgroundImage: "url('./assets/images/unstar.png')",
                backgroundSize: "contain",
                width: this.maxBarSize,
                height: this.sizePx,
            }
        },
        ratingBarStyle() {
            return {
                backgroundImage: "url('./assets/images/star.png')",
                backgroundSize: "auto 100%",
                width: this.barSize,
                height: this.sizePx,
            }
        },
    },
    methods: {
        update(event) {
            let newRating = event.offsetX / this.starSize
            this.$emit(
                'input',
                Math.ceil(newRating / 0.5) * 0.5
            )
        },
    },
});
