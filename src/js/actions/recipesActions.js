export function fetchRecipes() {
    return {
        type: "FETCH_RECIPES_FULFILLED",
        payload: [
            {
                name: "Maccha Vanille Eis",
                slug: "Maccha-Vanille-Eis",
                img: 'http://miya.ch/img/dringo.jpg',
                featured: true,
                steps: [
                    {
                        img: 'http://miya.ch/d/img_rezept/maccha_vanille_1.jpg',
                        'txt': 'Du kannst Maccha Tee zubereiten. <br />1 gestrichener Teelöffel Maccha + 40 –50 ml Wasser(80 – 90Grad)<br />Bambus-Besen hin und her schnell bewegen und schaumig schlagen'
                    },
                     {
                        img: 'http://miya.ch/d/img_rezept/maccha_vanille_2.jpg',
                        'txt': 'Dazu Vanille Eis oder sonst anderen Eis rein tun, <br />Frucht Sorbet ist keine gute Idee...<br />Schnell! Schmeckt!!'
                    } 
                ]
            },
            {
                name: "Maccha Eis",
                slug: "Maccha-Eis",
                img: 'http://miya.ch/img/maccha_eis.jpg',
								featured: false,
								steps: [
									{
										img: 'http://miya.ch/d/img_rezept/maccha_vanille_1.jpg',
										'txt': 'Du kannst Maccha Tee zubereiten. <br />1 gestrichener Teelöffel Maccha + 40 –50 ml Wasser(80 – 90Grad)<br />Bambus-Besen hin und her schnell bewegen und schaumig schlagen'
									},
									{
										img: 'http://miya.ch/d/img_rezept/maccha_vanille_2.jpg',
										'txt': 'Dazu Vanille Eis oder sonst anderen Eis rein tun, <br />Frucht Sorbet ist keine gute Idee...<br />Schnell! Schmeckt!!'
									}
								]
            },
            {
                name: "Maccha Financier",
                slug: "Maccha-Financier",
                img: 'http://miya.ch/img/financier.jpg',
								featured: true,
								steps: [
									{
										img: 'http://miya.ch/d/img_rezept/maccha_vanille_1.jpg',
										'txt': 'Du kannst Maccha Tee zubereiten. <br />1 gestrichener Teelöffel Maccha + 40 –50 ml Wasser(80 – 90Grad)<br />Bambus-Besen hin und her schnell bewegen und schaumig schlagen'
									},
									{
										img: 'http://miya.ch/d/img_rezept/maccha_vanille_2.jpg',
										'txt': 'Dazu Vanille Eis oder sonst anderen Eis rein tun, <br />Frucht Sorbet ist keine gute Idee...<br />Schnell! Schmeckt!!'
									}
								]
            },
        ],
    }
}

export function fetchFeaturedRecipes() {
    return {
        type: "FETCH_FEATURED_RECIPES_FULFILLED",
        payload: fetchRecipes().payload
            .filter((recipe) => {
                return recipe.featured;
            })
    }
}

export function fetchRecipe(slug) {
    return {
        type: "FETCH_RECIPE_FULFILLED",
        payload: fetchRecipes().payload
            .find((recipe) => {
                return recipe.slug == slug;
            })
    }
}

export function setRecipeName(name) {
    return {
        type: 'SET_RECIPE_NAME',
        payload: name,
    }
}

export function setRecipeAge(age) {
    return {
        type: 'SET_RECIPE_AGE',
        payload: age,
    }
}