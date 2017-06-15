(function(){

    let app = angular.module('store', []);

    let gem = {
        name: 'Dodecahedron',
        price: 295,
        description: 'lorem ipsum dolo',
        canPurchase: false,
        soldOut: true,
        images: [
            {
                full: '1.png',
                thumb: '1.png'
            }
        ]
    }

    let gems = [
        {
            name: 'Dodecahedron',
            price: 295,
            description: 'lorem ipsum dolo',
            canPurchase: false,
            soldOut: true,
            images: [
                {
                    full: 'gem-01.gif',
                    thumb: 'gem-01.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 365,
            description: 'laisdbasibdniausbdiuasbdbusa',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'gem-02.gif',
                    thumb: 'gem-02.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                }
            ]
        },
        {
            name: 'Prism Gem',
            price: 895,
            description: 'lorem ipsum dolo',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'gem-03.gif',
                    thumb: 'gem-03.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                }
            ]
        } 
    ]

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab; 
        }

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
    });

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html' 
        };
    });

})();
