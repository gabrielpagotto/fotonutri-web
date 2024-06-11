export type Meal = { 
    id: string
    total_calories: number
    image_url: string
    foods: Food[]
}

export type Food = { 
    proteins: string
    calories: number
    sodium: string
    unit: string
    total_carbohydrates: string
    saturated_fat: string
    total_fat: string
    amount: string
    name: string
}