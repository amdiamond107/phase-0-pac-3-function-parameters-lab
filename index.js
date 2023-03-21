function introduction(name) {
    return (`Hi, my name is ${name}.`)
}
introduction("Aki")// this is happening in index test js 
introduction("Samip")// this is happening in index test js

function introductionWithLanguage(name, language) {
    console.log(name, language)
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)

}

function introductionWithLanguageOptional (name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}