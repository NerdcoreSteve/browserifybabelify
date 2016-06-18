const mad_lib =
    (proper_name, adverb, verb, adjective, noun) =>
        `${proper_name} ${adverb} ${verb} their ${adjective} ${noun}`

console.log(
    mad_lib(
        'The Penguin',
        'studiously',
        'poured over',
        'impressive',
        'collection of etruscan snoods'))
