import React from "react";
import DynamicArticle from "./DynamicArticle"

describe("DynamicArticle tests", () => {
    it("renders correctly", () => {
        const article = {
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
            "displayDate": "November 22nd 2018, 7:12 am"
        }; 
        const { container } = render(<DynamicArticle article={article}/>);
        expect(container).toMatchSnapshot();
    });
});