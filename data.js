module.exports=function() {
    return{
        users:[
            {id:1, userName:"Fridge",password:"Fridge",email:"fridge@myfridge.com",imageUrl:'1.jpg' },
            {id:2, userName:"Abdullah",password:"Fridge",email:"abdullah@myfridge.com",imageUrl:'2.jpg' }
        ],
        fridge:[
            {id:1, userId:1,ingredientId:1},
            {id:2, userId:2,ingredientId:2}
        ],
        meal:[
            {id:1, name:"salad",mealTypeId:3,imageUrl:"salad.png"}
           
        ],
        mealType:[
          {id:1, mealType:"Soups"},
          {id:2, mealType:"Vegetables"},
          {id:3, mealType:"Salads"},
          {id:4, mealType:"Desserts"}

        ],
        ingredients:[
            {id:1 ,name:"cocumber",ingredientTypeId:2},
            {id:2 ,name:"tomato",ingredientTypeId:2},
            {id:3 ,name:"lettuce",ingredientTypeId:2},
            {id:4 ,name:"lemon",ingredientTypeId:2},
            {id:5 ,name:"bonito",ingredientTypeId:5}
        ],
        ingredientType:[
            {id:1, ingredientType:"Vegetables"},
            {id:2, ingredientType:"Furits"},
            {id:3, ingredientType:"Meats"},
            {id:4, ingredientType:"Fish"}
        ],
        mealfood:[
            {id:1 , mealId:1,ingredientId:1},
            {id:1 , mealId:1,ingredientId:2},
            {id:1 , mealId:1,ingredientId:3}
        ]
    }
}