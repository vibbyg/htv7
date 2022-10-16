import type { Recipe, Storage } from './storage';
import { Option, Type } from './storage';

export const collection = {
    ['Protein Pizza']: {
        calories: 953,
        nutrients: {
            ['Saturated Fat']: {
                value: 1.1,
                unit: 'g'
            },
            ['Sodium']: {
                value: 1952,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 8.3,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 3,
                unit: 'g'
            },
            ['Protein']: {
                value: 30.2,
                unit: 'g'
            },
            ['Calcium']: {
                value: 64,
                unit: 'mg'
            },
            ['Iron']: {
                value: 11,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 601,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/1.png',
        ingredients: {
            ['white rice flour']: {
                value: 50,
                unit: 'g'
            },
            ['Sodium']: {
                value: 1952,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 8.3,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 3,
                unit: 'g'
            },
            ['Protein']: {
                value: 30.2,
                unit: 'g'
            },
            ['Calcium']: {
                value: 64,
                unit: 'mg'
            },
            ['Iron']: {
                value: 11,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 601,
                unit: 'mg'
            }
        },
        steps: [
            'Add the flours, water, instant yeast, salt, and olive oil to the bowl',
            'Transfer the dough to a lightly oiled container about 3-4 times the size of the dough.',
            'Divide the dough into 5 equal pieces, 180 grams each. ',
            'Preheat the oven to 500°F about 1 hour into the proofing process.',
            'Once the dough is proofed, gently spread the dough into an oval shape about 11-12 inches long.  ',
            'Transfer the shaped pinsa into a pizza peel and then, add the toppings of your choice.',
            'Place the pinsa into the preheat oven and bake for 3-6 minutes or until crisp.',
            'Let the pinsa cool slightly before slicing.'
        ]
    },

    ['Ginger Chicken']: {
        calories: 724,
        nutrients: {
            ['Total Fat']: {
                value: 28.5,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 7.8,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 273,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 452,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 18.4,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 3.4,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 12.7,
                unit: 'g'
            },
            ['Protein']: {
                value: 93.7,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mg'
            },
            ['Calcium']: {
                value: 198,
                unit: 'mg'
            },
            ['Iron']: {
                value: 5,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1492,
                unit: 'mg'
            }
        },
        type: Type.Meal,
        src: '/public/assets/recipe_images/2.png',
        ingredients: {
            ['Vegetable Oil, divided']: {
                value: 1,
                unit: 'tbsp'
            },
            ['Saturated Fat']: {
                value: 7.8,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 273,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 452,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 18.4,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 3.4,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 12.7,
                unit: 'g'
            },
            ['Protein']: {
                value: 93.7,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mg'
            },
            ['Calcium']: {
                value: 198,
                unit: 'mg'
            },
            ['Iron']: {
                value: 5,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1492,
                unit: 'mg'
            }
        },
        steps: [
            'In large saucepan heat 2 tsp oil over medium heat. Add half of the chicken and cook 3 minutes until brown. Remove from pan and set aside. Repeat with remaining chicken.',
            'Add remaining oil to pan; add garlic, onion, and ginger. Reduce heat to medium and cook, stirring constantly for 5 minutes or until soft. Stir in cayenne, cumin, and turmeric; saute for 1 minute.',
            'Stir in stock, tomatoes, tomato paste, and sugar; return chicken to pan. Bring to boil; reduce heat and simmer 5 minutes.',
            'Stir in yogurt and simmer 2 minutes.'
        ]
    },

    ['Fried Rice']: {
        calories: 479,
        nutrients: {
            ['Total Fat']: {
                value: 7,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 2.4,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 60,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 686,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 87.9,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 2.6,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 1.2,
                unit: 'g'
            },
            ['Protein']: {
                value: 13.6,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 5,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 60,
                unit: 'mg'
            },
            ['Iron']: {
                value: 5,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 237,
                unit: 'mg'
            }
        },
        type: Type.Meal,
        src: '/public/assets/recipe_images/3.png',
        ingredients: {
            ['cooked and chilled white rice']: {
                value: 4.5,
                unit: 'cup'
            },
            ['Saturated Fat']: {
                value: 2.4,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 60,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 686,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 87.9,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 2.6,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 1.2,
                unit: 'g'
            },
            ['Protein']: {
                value: 13.6,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 5,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 60,
                unit: 'mg'
            },
            ['Iron']: {
                value: 5,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 237,
                unit: 'mg'
            }
        },
        steps: [
            'Start by bringing some water to a boil in a pot. ',
            'Preheat a wide non-stick pan over medium high heat and add some vegetable oil along with 2 beaten eggs. ',
            'Wipe out pan, add more oil, and then add the shrimp (or the protein of your choice). Once cooked, set aside in the bowl with the eggs.',
            'Add 2 cloves of crushed garlic and cook for about 30 seconds before adding 4 cups of cooked white rice. ',
            'Turn the heat to high and let the whole thing saute. Break up any big chunks of rice and cook for about 3-5 minutes.',
            'Add your eggs and protein back into the mix and top with some sesame oil and thinly sliced scallions. ',
            'Reduce the heat to low and add some sesame seeds. Mix to combine.',
            'Finish it off by adding 1 Tbsp of butter and mixing that to combine.'
        ]
    },

    ['Meat Loaf']: {
        calories: 463,
        nutrients: {
            ['Total Fat']: {
                value: 8.8,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 3.1,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 101,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 569,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 47.7,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 9.6,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 4.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 48.3,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium ']: {
                value: 103,
                unit: 'mg'
            },
            ['Iron']: {
                value: 25,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1448,
                unit: 'mg'
            }
        },
        type: Type.Meal,
        src: '/public/assets/recipe_images/4.png',
        ingredients: {
            ['Lean Ground Beef']: {
                value: 1,
                unit: 'lbs'
            },
            ['Saturated Fat']: {
                value: 3.1,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 101,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 569,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 47.7,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 9.6,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 4.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 48.3,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium ']: {
                value: 103,
                unit: 'mg'
            },
            ['Iron']: {
                value: 25,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1448,
                unit: 'mg'
            }
        },
        steps: [
            'In bowl, place all ingredients except spray and using 3/4 cup of the salsa - mix well.',
            'Spray a loaf pan (approx. 5"x9"), and add above mix.',
            'Bake for 50 to 60 minutes - sit 15 minutes.',
            'Top with last 1/4 cup of salsa.'
        ]
    },

    ['Ratatouille']: {
        calories: 138,
        nutrients: {
            ['Total Fat']: {
                value: 5.2,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 0.7,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 0,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 60,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 19.9,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 7.7,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 10.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 5.9,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 47,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium ']: {
                value: 715,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/5.png',
        ingredients: {
            ['Tomatoes']: {
                value: 1.5,
                unit: 'lbs'
            },
            ['Saturated Fat']: {
                value: 0.7,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 0,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 60,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 19.9,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 7.7,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 10.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 5.9,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 47,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium ']: {
                value: 715,
                unit: 'mg'
            }
        },
        steps: [
            'Peel and drain the tomatoes (don’t mind the seeds): cut out the stem cores',
            'Chop the onion and garlic. Clean the bell pepper, cut into small strips.',
            'In a large cooking pot with thick bottom, put in olive oil, onions, and chopped garlic. Add in the bell pepper. Cover to keep in the moisture.',
            'Add the tomatoes and Herbes de Provence. If you don’t have good garden tomatoes with flavour, add a small can of tomato paste. ',
            'Cut the eggplant into disks. Cut zucchini into disks.',
            'Add the eggplant and zucchini to the pot.',
            'Cook for about 30 minutes.'
        ]
    },

    ['Devil Fruit Cake']: {
        calories: 614,
        nutrients: {
            ['Total Fat']: {
                value: 7.1,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 1.4,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 105,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 129,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 132.5,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 0.5,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 77.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 5.8,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 9,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 24,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 59,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/6.png',
        ingredients: {
            ['cake flour ']: {
                value: 90,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 1.4,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 105,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 129,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 132.5,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 0.5,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 77.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 5.8,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 9,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 24,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 59,
                unit: 'mg'
            }
        },
        steps: [
            'Separate 3 eggs for whites, add 90g of sugar.',
            'Add flour for elegance, 30g milk, 25g sunflower oil, 1/4 tsp green tea extract.',
            'Mix in the cake thoroughly.',
            'Bake for 35 to 40 min at 150°C degrees',
            'Trim the cake, and cover with marshmallow fondant.'
        ]
    },

    ['Borscht Soup']: {
        calories: 263,
        nutrients: {
            ['Total Fat']: {
                value: 11.9,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 4.2,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 10,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 695,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 29.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 5.3,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 5.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 11.4,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 109,
                unit: 'mcg'
            },
            ['Iron']: {
                value: 3,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 986,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/7.png',
        ingredients: {
            ['red beetroots']: {
                value: 3,
                unit: 'u'
            },
            ['Saturated Fat']: {
                value: 4.2,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 10,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 695,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 29.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 5.3,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 5.8,
                unit: 'g'
            },
            ['Protein']: {
                value: 11.4,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 109,
                unit: 'mcg'
            },
            ['Iron']: {
                value: 3,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 986,
                unit: 'mg'
            }
        },
        steps: [
            'Peel, grate and/or slice all vegetables (keeping sliced potatoes in cold water to prevent browning until ready to use then drain).',
            'Heat a large soup pot (5 1/2 Qt or larger) over medium/high heat and add 2 Tbsp olive oil.',
            'Add grated beets and sauté 10 minutes, stirring occasionally until beets are softened.',
            'Add 8 cups broth and 2 cups water.',
            'Add sliced potatoes and sliced carrots then cook for 10-15 minutes or until easily pierced with a fork.',
            'While potatoes are cooking, place a large skillet over medium/high heat and add 2 Tbsp oil.',
            'Add chopped onion, celery and bell pepper. Saute stirring occasionally until softened and lightly golden (7-8 minutes).',
            'Add 4 Tbsp Ketchup and stir fry for 30 seconds then transfer to the soup pot to continue cooking with the potatoes.',
            'When potatoes and carrots reach desired softness, add optional ingredients from the list.',
            'Simmer for an additional 2-3 minutes and add more spices to taste.',
            'Serve with a dollop of sour cream on top.'
        ]
    },

    ['Beef Jerky']: {
        calories: 226,
        nutrients: {
            ['Total Fat']: {
                value: 7,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 2.7,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 101,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 858,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 3.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 0,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 3.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 34.7,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 7,
                unit: 'mcg'
            },
            ['Iron']: {
                value: 21,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 479,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/8.png',
        ingredients: {
            ['Salt']: {
                value: 0.75,
                unit: 'tsp'
            },
            ['Saturated Fat']: {
                value: 2.7,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 101,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 858,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 3.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 0,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 3.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 34.7,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 7,
                unit: 'mcg'
            },
            ['Iron']: {
                value: 21,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 479,
                unit: 'mg'
            }
        },
        steps: [
            'Mince or press garlic.',
            'Mix all ingredients except beef to make brine.',
            'Slice beef into ¼" (½ cm) thick strips. Small chunks, about ¾" (2 cm), of stewing beef may also be used. If possible, cut along the grain of the meat rather than across it. It may be easier to freeze the meat before attempting to cut it, as this will stop the meat pulling and deforming so easily.',
            'Marinate meat in overnight, or at least for an hour or two.',
            'Place meat on racks and dry in a food dehydrator at 145 °F (63 °C) for 6-8 hours. May be dried in a 150 °F (65 °C) oven with foil-covered racks. In oven, turn meat over 3-4 hours into drying time and reduce temperature to 130 °F (55 °C).',
            'Meat should bend but not break when properly dried.'
        ]
    },

    ['Red Lentil Curry']: {
        calories: 653,
        nutrients: {
            ['Total Fat']: {
                value: 12.8,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 1.3,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 0,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 841,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 101,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 44,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 12.7,
                unit: 'g'
            },
            ['Protein']: {
                value: 37,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 138,
                unit: 'mg'
            },
            ['Iron']: {
                value: 14,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1981,
                unit: 'mg'
            }
        },
        type: Type.Meal,
        src: '/public/assets/recipe_images/9.png',
        ingredients: {
            ['red lentils']: {
                value: 2,
                unit: 'cup'
            },
            ['Saturated Fat']: {
                value: 1.3,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 0,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 841,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 101,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 44,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 12.7,
                unit: 'g'
            },
            ['Protein']: {
                value: 37,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 138,
                unit: 'mg'
            },
            ['Iron']: {
                value: 14,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1981,
                unit: 'mg'
            }
        },
        steps: [
            'Wash lentils in cold water until water runs clear. ',
            'Put lentils in a pot with enough water to cover; bring to a boil and reduce heat to medium-low. Cover and simmer, adding water as needed to keep lentils covered, until tender, 15 to 20 minutes. Drain. ',
            'Heat vegetable oil in a large skillet over medium heat; cook and stir onions in hot oil until caramelized, about 20 minutes. ',
            'Mix together curry paste, curry powder, turmeric, cumin, chili powder, salt, sugar, garlic, and ginger in a large bowl; stir into onions. Increase heat to high and cook, stirring constantly, until fragrant, 1 to 2 minutes. ',
            'Stir in tomato puree and lentils; cook until warmed through. '
        ]
    },

    ['Fruit Smoothie']: {
        calories: 293,
        nutrients: {
            ['Total Fat']: {
                value: 3.1,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 1.9,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 11,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 136,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 51.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 3.7,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 51.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 13.4,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 341,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1201,
                unit: 'mg'
            }
        },
        type: Type.Beverage,
        src: '/public/assets/recipe_images/10.png',
        ingredients: {
            ['nonfat plain yogurt']: {
                value: 0.75,
                unit: 'cup'
            },
            ['Saturated Fat']: {
                value: 1.9,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 11,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 136,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 51.8,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 3.7,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 51.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 13.4,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 341,
                unit: 'mg'
            },
            ['Iron']: {
                value: 1,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 1201,
                unit: 'mg'
            }
        },
        steps: [
            'Puree yogurt with juice in a blender until smooth.',
            'With the motor running, add fruit through the hole in the lid and continue to puree until smooth.'
        ]
    },

    ['Greek Yogurt']: {
        calories: 300,
        nutrients: {
            ['Total Fat']: {
                value: 3.7,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 2.3,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 8,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 52,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 44.9,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 4.7,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 37.5,
                unit: 'g'
            },
            ['Protein']: {
                value: 16.6,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 0,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 175,
                unit: 'mg'
            },
            ['Iron']: {
                value: 2,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 497,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/11.png',
        ingredients: {
            ['PC Greek Yogurt']: {
                value: 0.75,
                unit: 'cup'
            },
            ['blueberries']: {
                value: 0.5,
                unit: 'cup'
            },
            ['chopped strawberries']: {
                value: 1,
                unit: 'cup'
            },
            ['honey']: {
                value: 1,
                unit: 'tbsp'
            }
        },
        steps: [
            'Place 3/4 cup of yogurt in a bowl.',
            'Wash and slice your berries, place on top of the yogurt.',
            'Drizzle honey over top.',
            'Enjoy as an amazing breakfast!'
        ]
    },

    ['Protein Shake']: {
        calories: 483,
        nutrients: {
            ['Total Fat']: {
                value: 21.2,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 3.8,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 0,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 299,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 60.2,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 9.5,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 36.6,
                unit: 'g'
            },
            ['Protein']: {
                value: 19.7,
                unit: 'g'
            },
            ['Vitamin D']: {
                value: 100,
                unit: 'mcg'
            },
            ['Calcium']: {
                value: 370,
                unit: 'mg'
            },
            ['Iron']: {
                value: 6,
                unit: 'mg'
            },
            ['Potassium']: {
                value: 692,
                unit: 'mg'
            }
        },
        type: Type.Snack,
        src: '/public/assets/recipe_images/12.png',
        ingredients: {
            ['Oat milk']: {
                value: 1,
                unit: 'cup'
            },
            ['banana']: {
                value: 1,
                unit: 'u'
            },
            ['creamy peanut butter']: {
                value: 2,
                unit: 'tbsp'
            },
            ['ground flax seeds']: {
                value: 1,
                unit: 'tbsp'
            },
            ['protein powder']: {
                value: 1,
                unit: 'scoop'
            },
            ['cinnamon']: {
                value: 0.5,
                unit: 'tsp'
            },
            ['ice cubes']: {
                value: 5,
                unit: 'cubes'
            }
        },
        steps: [
            'Add all ingredients to a blender. Add ice cubes, if using.',
            'Mix everything on high speed until you get an even silky texture.',
            'If the shake is too thick, add a little more liquid – milk or water. Blend again until everything is well combined.',
            'Taste the shake and add additional sweetener if the shake is not sweet enough. I recommend using 1-2 soaked dates, date syrup, raw honey or maple syrup, stevia, or any low-carb sweetener. This is totally based on your preference.',
            'Transfer the shake into a glass.',
            'Add toppings: Be creative here and add toppings you like.'
        ]
    },

    ['Chili Lime Shrimp']: {
        calories: 230,
        nutrients: {
            ['Total Fat']: {
                value: 13,
                unit: 'g'
            },
            ['Saturated Fat']: {
                value: 2,
                unit: 'g'
            },
            ['Cholesterol']: {
                value: 138,
                unit: 'mg'
            },
            ['Sodium']: {
                value: 315,
                unit: 'mg'
            },
            ['Total Carbohydrate']: {
                value: 10,
                unit: 'g'
            },
            ['Dietary Fiber']: {
                value: 2,
                unit: 'g'
            },
            ['Total Sugars']: {
                value: 1,
                unit: 'g'
            },
            ['Protein']: {
                value: 20,
                unit: 'g'
            }
        },
        type: Type.Meal,
        src: '/public/assets/recipe_images/13.png',
        ingredients: {
            ['uncooked shrimp']: {
                value: 2,
                unit: 'lbs'
            },
            ['garlic cloves, minced']: {
                value: 4,
                unit: 'u'
            },
            ['paprika']: {
                value: 1,
                unit: 'tsp'
            },
            ['ground ancho chile pepper']: {
                value: 1,
                unit: 'tsp'
            },
            ['ground cumin']: {
                value: 1,
                unit: 'tsp'
            },
            ['salt']: {
                value: 0.5,
                unit: 'tsp'
            },
            ['pepper']: {
                value: 0.25,
                unit: 'tsp'
            },
            ['medium lime']: {
                value: 1,
                unit: 'u'
            },
            ['crushed tortilla chips']: {
                value: 1,
                unit: 'cup'
            },
            ['chopped fresh cilantro']: {
                value: 0.25,
                unit: 'cup'
            },
            ['olive oil']: {
                value: 0.25,
                unit: 'cup'
            },
            ['cherry tomatoes']: {
                value: 1,
                unit: 'cup'
            },
            ['medium avocado, peeled and cubed']: {
                value: 1,
                unit: 'u'
            }
        },
        steps: [
            'Preheat oven to 425°. Place the first 7 ingredients in a greased 15x10x1-in. pan. Finely grate zest from lime. Cut lime crosswise in half; squeeze juice. Add zest and juice to shrimp mixture; toss to coat.',
            'In a small bowl, combine crushed chips, cilantro and oil; sprinkle over shrimp mixture. Bake until shrimp turn pink, 12-15 minutes. Top with tomatoes and avocado. If desired, serve with additional lime wedges and cilantro.'
        ]
    }
} as { [name: string]: Recipe };


/// default settings
const done = Object.assign(
    {},
    ...Object.entries(collection).slice(0, 4).map(([name, recipe]) => ({ [name]: recipe })),
    ...Object.entries(collection).filter(_ => (Math.random() * 5 | 0) === 0).map(
        ([name, recipe]) => ({ [name]: recipe })
    )
);
export const init = {
    option: Option.None,
    collection: done,
    progress: Object.assign(
        {}, ...Object.entries(collection).filter(([k, _]) => !done[k]).map(
            ([name, { ingredients }]) => ({
                [name]: Object.keys(ingredients).filter(
                    _ => (Math.random() * 5 | 0) == 0
                )
            })
        )
    ),
    currency: 420,
} as Storage;

function vegetables(keeping: any, sliced: any, arg2: boolean, water: any, to: any, prevent: any, browning: any, until: any, ready: any, to1: any, use: any, then: any, drain: any){
    throw new Error('Function not implemented.');
}
