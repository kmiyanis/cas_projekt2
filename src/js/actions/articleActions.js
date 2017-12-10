import axios from "axios";

import {
    FETCH_ARTICLE,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE
} from "./actionTypes";

export const asyncFetchArticle = async () => fetchStaticArticle();

export function fetchArticle() {
    return function (dispatch) {
        dispatch({ type: FETCH_ARTICLE });

        asyncFetchArticle()
            .then((response) => {
                dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: response.payload })
            })
            .catch((err) => {
                dispatch({ type: FETCH_ARTICLE_FAILURE, error: err })
            })
    }
}

export function fetchStaticArticle() {
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
                "title": "Für Sie muss Grüntee \"Bio\" sein, aber muss er auch gut Schmecken? ",
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
        ]
    }
}
