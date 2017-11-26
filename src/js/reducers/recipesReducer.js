export default function reducer(state = {
    recipes: [],
    recipe: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_RECIPES": {
            return { ...state, fetching: true }
        }
        case "FETCH_RECIPES_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_RECIPES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                recipes: action.payload,
            }
        }
        // FEATURED
        case "FETCH_FEATURED_RECIPES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                recipes: action.payload,
            }
        }

        // SINGLE RECIPE
        case "FETCH_RECIPE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                recipe: action.payload,
            }
        }
        // case "ADD_RECEPIE": {
        //     return {
        //         ...state,
        //         recipes: [...state.recipes, action.payload],
        //     }
        // }
        // case "UPDATE_RECEPIE": {
        //     const { id, text } = action.payload
        //     const newRecepies = [...state.recipes]
        //     const recepieToUpdate = newRecepies.findIndex(recepie => recepie.id === id)
        //     newrecipes[recepieToUpdate] = action.payload;

        //     return {
        //         ...state,
        //         recipes: newrecipes,
        //     }
        // }
        // case "DELETE_RECEPIE": {
        //     return {
        //         ...state,
        //         recipes: state.recipes.filter(recepie => recepie.id !== action.payload),
        //     }
        // }
    }

    return state
}
