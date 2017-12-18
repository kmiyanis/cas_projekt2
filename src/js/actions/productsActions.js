import axios from "axios";
import { database, snapshotToArray } from "../fire";

import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "./actionTypes";


export function fetchProducts() {
    return function (dispatch) {
        dispatch({type: FETCH_PRODUCTS});

        database.ref('products').once('value', snap => {
            const db = snap.val();
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: db })
        })
        .catch((err) => {
            dispatch({type: FETCH_PRODUCTS_FAILURE, error: err})
        })
    }
}

export function fetchProduct(slug) {
    return function (dispatch) {
        dispatch({type: FETCH_PRODUCT});

        fetch()
            .then((response) => {
                product = response.payload.find((product) => {
                    return product._id == slug;
                });
                dispatch({type: FETCH_PRODUCT_SUCCESS, payload: product})
            })
            .catch((err) => {
                dispatch({type: FETCH_PRODUCT_FAILURE, error: err})
            })
    }
}


export function addProduct(id, text) {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            id,
            text,
        },
    }
}

export function updateProduct(id, text) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: {
            id,
            text,
        },
    }
}

export function deleteProduct(id) {
    return {type: 'DELETE_PRODUCT', payload: id}
}

export function fetchStaticProducts() {
// export function fetchProducts() {
    return {
        payload: [
            {
                "_id": "gemmacha-mit-maccha_01",
                "featured": false,
                "home": true,
                "price": 67.93,
                "picture": "assets/img/tee/gemmacha-mit-maccha.jpg",
                "title": "Sind Sie Grüntee Anfängerin?",
                "lead":"Dann werde ich ihnen Gemmaicha mit Maccha Tee emphelen.",
                "text": "Gar nicht bitter und dank der gerösteter Volkornreiskörner sehr knussplig wie Popkorn. Mit Maccha verschwächen sie nicht Grüntee Geschmack. Der Teewasser ist ganz schöne Grun. Als ich kind war, habe ich nur diesen Tee gerne gehabt. .",
                "categoryId": 181
            },
            {
                "_id": "sencha_01",
                "featured": false,
                "home": true,
                "price": 67.93,
                "picture": "assets/img/tee/sencha.jpg",
                "title": "Für Sie muss Grüntee  ",
                "lead": "Dann werde ich ihnen \"Bio Sencha\" aus Shizuoka emphelen.",
                "text": "Der Grüntee ist sehr gut für das Gesundheit dank ihrer Katekin (Bitterstoff), Vitamin C. Sie möchten gerne für Ihre Gesundheit trinken und dabei sicher sein, der Tee Pestizide frei ist. Jawohl! Dieser Tee ist Bio Qualität und dazu noch sehr aromatisch und wundervoll. ",
                "categoryId": 182
            },
            {
                "_id": "maccha_01",
                "featured": false,
                "home": true,
                "price": 67.93,
                "picture": "assets/img/tee/maccha.jpg",
                "title": "Maccha ist jetzt hip und trendy? ",
                "lead": "Zuerst probieren Sie Koko no Shiro Nieveau",
                "text": "Es gibt 2 verschiedene Maccha Klasse. Erste ist Usucha (Dünne Tee in Teezeremonie), andere ist Koicha (Dicke Tee in Teezeremonie). Da diese unterschiedliche Konsistent sind, ist der Tee Karakter auch verschieden. Koicha Qualität ist weniger bitter und sehr aromatisch. Usucha Qualität ist frisch. ",
                "categoryId": 183
            },
            {
                "_id": "5a1af1425cef68a43eb9f6b3",
                "featured": true,
                "price": 67.93,
                "picture": "http://placehold.it/700x400",
                "title": "enim minim pariatur",
                "text": "Velit in in elit consectetur aute commodo consectetur. Eu nostrud amet id id culpa eu tempor et ad culpa.",
                "categoryId": 175
            },
            {
                "_id": "5a1af1425cef68a43eb9f6b9",
                "featured": true,
                "price": 67.93,
                "picture": "http://placehold.it/700x400",
                "title": "enim minim pariatur",
                "text": "Velit in in elit consectetur aute commodo consectetur. Eu nostrud amet id id culpa eu tempor et ad culpa.",
                "categoryId": 175
            },
            {
                "_id": "5a1af142be9fe80114b81bf6",
                "featured": false,
                "price": 88.75,
                "picture": "http://placehold.it/700x400",
                "title": "irure aute in",
                "text": "Enim anim adipisicing minim dolor exercitation dolor ea id labore magna nulla. Est elit voluptate non dolor minim reprehenderit.",
                "categoryId": 174
            },
            {
                "_id": "5a1af142c7e9fe836151dfa5",
                "featured": true,
                "price": 34.5,
                "picture": "http://placehold.it/700x400",
                "title": "magna aliquip deserunt",
                "text": "Qui est ut elit proident enim et minim ad ex dolore cupidatat. Qui do commodo commodo nisi sit occaecat reprehenderit velit proident ut.",
                "categoryId": 47
            },
            {
                "_id": "5a1af14267bfee0135779e25",
                "featured": false,
                "price": 24.68,
                "picture": "http://placehold.it/700x400",
                "title": "sit occaecat ex",
                "text": "Consequat excepteur cupidatat nostrud anim dolor irure proident mollit ipsum fugiat aute voluptate in. Adipisicing ea qui ipsum labore labore cupidatat.",
                "categoryId": 66
            },
            {
                "_id": "5a1af14284b9e22415fbbe5b",
                "featured": true,
                "price": 52.15,
                "picture": "http://placehold.it/700x400",
                "title": "quis ex occaecat",
                "text": "Sunt ex veniam quis quis ex labore eu. Deserunt velit et proident sit exercitation.",
                "categoryId": 51
            },
            {
                "_id": "5a1af142e2b5e6135bd0a4ca",
                "featured": true,
                "price": 29.12,
                "picture": "http://placehold.it/700x400",
                "title": "esse eu sint",
                "text": "Et magna consequat occaecat cupidatat sit incididunt sit dolore eiusmod veniam laboris aute in. Adipisicing non ullamco dolore dolore officia eiusmod ex excepteur est.",
                "categoryId": 89
            },
            {
                "_id": "5a1af142aa14bb562c0132b5",
                "featured": false,
                "price": 50.07,
                "picture": "http://placehold.it/700x400",
                "title": "id in aliquip",
                "text": "Sint duis consequat voluptate cupidatat est laboris laborum. Lorem et eu cupidatat esse nostrud culpa excepteur culpa.",
                "categoryId": 13
            },
            {
                "_id": "5a1af142e82ee18b875f55a8",
                "featured": true,
                "price": 65.02,
                "picture": "http://placehold.it/700x400",
                "title": "labore minim minim",
                "text": "Amet magna eiusmod laboris qui excepteur qui sunt veniam anim sit quis ea anim esse. Commodo proident mollit Lorem qui.",
                "categoryId": 39
            },
            {
                "_id": "5a1af1427fe54f5885d9a122",
                "featured": false,
                "price": 29.86,
                "picture": "http://placehold.it/700x400",
                "title": "id excepteur fugiat",
                "text": "Occaecat qui est do non in ad velit laboris laboris culpa duis sit. Non nostrud ad in sit do enim proident sit ipsum dolor sit do.",
                "categoryId": 45
            },
            {
                "_id": "5a1af142a977523f956ebb1e",
                "featured": false,
                "price": 80.97,
                "picture": "http://placehold.it/700x400",
                "title": "et labore qui",
                "text": "Dolore fugiat veniam ut laboris ex sit ad. Aute et ex labore qui enim incididunt ipsum nisi sunt esse consequat esse nostrud.",
                "categoryId": 70
            },
            {
                "_id": "5a1af142456b0071b337c39b",
                "featured": false,

                "price": 91.29,
                "picture": "http://placehold.it/700x400",
                "title": "id proident sint",
                "text": "Fugiat cupidatat laboris ut ex minim aliquip ullamco cillum quis. Ullamco officia aliquip aliquip duis in est adipisicing ad sunt est.",
                "categoryId": 4
            },
            {
                "_id": "5a1af142bcedd5a51a4573ff",
                "featured": true,
                "price": 95.54,
                "picture": "http://placehold.it/700x400",
                "title": "anim sint enim",
                "text": "Dolore ipsum culpa irure voluptate fugiat mollit laborum ad sint. Sit eiusmod esse elit cillum proident cillum dolor occaecat culpa.",
                "categoryId": 37
            },
            {
                "_id": "5a1af142e584603fe474954d",
                "featured": true,
                "price": 57.05,
                "picture": "http://placehold.it/700x400",
                "title": "laboris ipsum ut",
                "text": "Veniam non proident consectetur excepteur amet sit commodo commodo culpa. Consequat velit consequat anim tempor labore mollit proident aliquip nisi nisi amet eiusmod ex id.",
                "categoryId": 86
            }
        ]
    }
    // return function (dispatch) {
    //     dispatch({ type: "FETCH_PRODUCTS" });

    //     axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    //         .then((response) => {
    //             dispatch({ type: "FETCH_PRODUCTS_FULFILLED", payload: response.data })
    //         })
    //         .catch((err) => {
    //             dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: err })
    //         })
    // }
}