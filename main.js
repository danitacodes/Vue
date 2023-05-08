// var product = "Socks";

var app = new Vue ({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks.",
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        altText: 'A pair of socks',
        link: 'https://www.danitacodes.com',
        inventory: 0,
        inStok: false,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2234,
                variantColor: "blue",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ["small", "medium", "large", "extra-large"],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart +=1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        },
        removeFromCart: function () {
            this.cart -=1
        }
    }
})