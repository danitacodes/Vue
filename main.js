// var product = "Socks";
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText">
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>  
              <p v-if="inStock">In Stock</p>
              <!-- <p v-else-if="inventory<=10 && inventory>0">Almost out</p> -->
              <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
              <p>{{ sale }}</p>
              <p>User is premium: {{ premium }}</p>
              <p>Shipping: {{ shipping }}</p>

              <product-details :details="details"></product-details>

              <ul>
                <li v-for="size in sizes">{{ size }}</li>
              </ul>

              <div v-for="(variant, index) in variants" 
                   :key="variant.variantId"
                   class="color-box"
                   :style="{ backgroundColor: variant.variantColor}"
                   @mouseover="updateProduct(index)">
              </div>

              <button v-on:click="addToCart" 
                      :disabled="!inStock"
                      :class="{ disabledButton: !inStock }">Add to Cart</button>
              <button @click="removeFromCart">Remove from Cart</button>

              <div class="cart">
                <p>Cart({{cart}})</p>
              </div>

            </div>

            <div>
                <a :href="link" target="_blank">Creator</a>
            </div>
            
        </div>
    `,
    data() {
        return {
            brand: "Vue Mastery",
            product: "Socks",
            description: "A pair of warm, fuzzy socks.",
            selectedVariant: 0,
            altText: 'A pair of socks',
            link: 'https://www.danitacodes.com',
            // inventory: 100,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2234,
                variantColor: "blue",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
            sizes: ["small", "medium", "large", "extra-large"],
            cart: 0
        }
    },
        methods: {
            addToCart: function () {
                this.cart +=1
            },
            updateProduct: function (index) {
                this.selectedVariant = index
            },
            removeFromCart: function () {
                this.cart -=1
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock () {
                return this.variants[this.selectedVariant].variantQuantity
            },
            sale() {
                if (this.onSale) {
                    return this.brand + ' ' + this.product + ' are on sale!'
                }
                    return this.brand + ' ' + this.product + ' are not on sale'
            },
            shipping () {
                if (this.premium) {
                    return "Free"
                }
                    return 2.99
            }
        }
    }
)

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})
var app = new Vue ({
    el: '#app',
    data: {
        premium: false
    },
    
    
})