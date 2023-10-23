function urlValidation(input: string) {
    //Questa regex controlla che sia un url composto
    // da una prima parte con il dominio di primo livello generico senza trattini e la seconda opzionale
    const regex = new RegExp(/^http[s]?:\/\/[\w---.]*[.][a-z]{2,50}([\/]+[\w---.-\/]*)?$/);

    const regexSemplice = new RegExp(/^http[s]?:\/\/[\w---.-\/]+$/);

    var test: boolean = regex.test(input);
    var testSemplice: boolean = regexSemplice.test(input);
    console.log(input + " => " + test);
    console.log(input + " => " + testSemplice);
    console.log("--------------")
}

const urls: string[] = ["http://condense.tech", "ftp://condense.tech", "http:condense.tech", "http//condense.tech", "http:/condense.tech", "http://asdadajksdad.1231239-asdasd", "http://asdasd   asdasdad", "http://cond,com"];
urls.forEach(element => {
    urlValidation(element);
});


/*
http://condense.tech # => OK 
ftp://condense.tech # => NO 
http:condense.tech # => NO 
http//condense.tech # => NO 
http:/condense.tech # => NO 
http://asdadajksdad.1231239-asdasd # => OK 
http://asdasd   asdasdad # => NO 
http://cond,com # => NO
*/