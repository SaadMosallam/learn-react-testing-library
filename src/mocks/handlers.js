import { rest } from 'msw';

export const handlers = [
    rest.get(
        // this url is missing the searchQuery parameter. But this ok as msw will pattern match the url so it doesn't have to be exact
        `https://www.thecocktaildb.com/api/json/v1/1/search.php`,
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    drinks: [
                        {
                            idDrink: '1',
                            strDrinkThumb: '../assets/thumbs-down.svg',
                            strDrink: 'test drink',
                            strInstructions: 'test instructions',
                            strIngredient1: 'test ingredient',
                        }
                    ]
                })
            )
        }
    )
];