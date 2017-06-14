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
            ]
        } 
    ]

    app.controller('StoreController', function(){
        this.products = gems;
    });

})();
