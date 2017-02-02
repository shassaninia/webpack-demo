const msg = "Hello, Webpack"; //const is ES2015 (we need a loader to transform this to javascrip
//the browser understands)

module.exports = msg; //When someone requires you, give them this string