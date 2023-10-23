function phoneExtractor(input: string) {
    const regex = new RegExp(/[(]{1}[0-9]{1,3}[)]{1}[ ]{1}[0-9]{0,3}[-]{1}[0-9]{1,9}/g);
    var matches = input.match(regex);
    if (matches == null) {
        console.log(input + " => No match");
    } else {
        console.log(input + ":");
        matches.forEach(number => {
            console.log(number);
        });
    }  
}

const phoneSentences: string[] = [
    "My phone number is (039) 02-121212",
    "None of my 32 friends has a phone. One of them gave me the number 123-123123 but it isn't valid",
    "Phone numbers cannot have letters. Numbers like (800) STAR-121212 are not valid",
    "Every country has its own rules for phone numbers. Even a number like (1) 1-2 can be a valid phone number"
]
phoneSentences.forEach(element => {
    phoneExtractor(element);
});