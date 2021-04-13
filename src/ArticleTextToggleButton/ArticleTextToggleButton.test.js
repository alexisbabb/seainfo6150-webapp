import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton"; 

describe("ArticleTextToggleButton tests", () => {

    let isTextShowing = false;

	function onClick() {
		setIsTextShowing(!isTextShowing);
	}

    it("renders correctly", () => {
        const buttonText = "Show More"; 
        const { container } = render(<ArticleTextToggleButton buttonText={buttonText} onClick={onClick}/>);
        expect(container).toMatchSnapshot();
    });
});