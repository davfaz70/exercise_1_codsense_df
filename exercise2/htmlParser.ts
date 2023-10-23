// See this
//https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454

function htmlExtractor(input: string) {
    const regex = new RegExp(/([<]{1}[\s\S]+[>]{1}){1}([\s\S]+){1}([<]{1}[\/]{1}[\s\S]+[>]{1})/);
    var arr: string[] | null = regex.exec(input);
    try {
        if (arr == null)
            console.log("No HTML tag with content found");
        else 
            console.log(arr[2]);
    } catch (error) {
        console.log(error);
    }   
}

const htmlStrings: string[] = [
    "<a href=\"https://example.com\">Visit Example</a>",
    "<p> paragraph </p>",
    "</br>"
]

htmlStrings.forEach(html => {
    htmlExtractor(html);
})
