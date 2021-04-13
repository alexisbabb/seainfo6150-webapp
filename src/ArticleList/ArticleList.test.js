import React from "react";
import ArticleList from "./ArticleList"; 

describe("ArticleLists tests", () => {
    it("renders correctly", () => {
        const articleList = [
            {
                "slug": "181122102925-statue-of-liberty-crown",
                "title": "The Statue of Liberty's torch heads to new museum",
                "shortText": "The Statue of Liberty's original torch is getting a new home",
                "text": "<p>The Statue of Liberty's original torch is getting a new home.</p>", 
                "pubDate": "Thu, 22 Nov 2018 15:12:24 GMT",
                "pubYear": "2018",
                "author": "Kate Farley",
                "authorEmail": "kate.farley@nytimes.com",
                "image": {
                    "_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg",
                    "_height": "619",
                    "_width": "1100"
                },
                "timeStamp": "2018-11-22T15:12:24.000Z",
                "displayDate": "November 22nd 2018, 7:12 am", 
            },
            {
                "slug": "170321135754-airport-security-line",
                "title": "You can take a pie on a plane",
                "shortText": "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
                "text": "<p>Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?</p>", 
                "pubDate": "Wed, 21 Nov 2018 22:57:55 GMT",
                "pubYear": "2018",
                "author": "Cathryn Lindsey",
                "authorEmail": "cathryn.lindsey@nytimes.com",
                "image": {
                    "_url": "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg",
                    "_height": "619",
                    "_width": "1100"
                },
                "timeStamp": "2018-11-21T22:57:55.000Z",
                "displayDate": "November 21st 2018, 2:57 pm"
            }
        ]; 
        const { container } = render(<ArticleList articles={articleList}/>);
        expect(container).toMatchSnapshot();
    });
});