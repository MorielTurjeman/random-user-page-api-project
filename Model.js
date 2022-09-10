"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    constructor() { }
    getAllDataPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                mainUserInfo: yield MainUser.getMainUser(),
                friends: yield Friend.getFriends(),
                quote: yield Quote.getQuote(),
                pokemon: yield Pokemon.getPokemon(),
                aboutMe: yield AboutMe.getAboutMeText()
            };
            return userData;
        });
    }
}
class MainUser {
    constructor(first_name, last_name, city, state, picture) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.city = city;
        this.state = state;
        this.picture = picture;
        this.first_name = first_name;
        this.last_name = last_name;
        this.city = city;
        this.state = state;
        this.picture = picture;
    }
    static getMainUser() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hi');
            let usersInfo = yield $.get('https://randomuser.me/api/?format=JSON');
            console.log("here");
            const first_name = usersInfo.results[0].name.first;
            const last_name = usersInfo.results[0].name.last;
            const city = usersInfo.results[0].location.city;
            const state = usersInfo.results[0].location.state;
            const picture = usersInfo.results[0].picture.medium;
            const mainUser = new MainUser(first_name, last_name, city, state, picture);
            return mainUser;
        });
    }
}
class Friend {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    static getFriends() {
        return __awaiter(this, void 0, void 0, function* () {
            let friends = yield $.get('https://randomuser.me/api/?results=6');
            console.log(Array.isArray(friends));
            console.log(typeof friends);
            const friendsList = friends.results.map((f) => new Friend(f.name.first, f.name.last));
            return friendsList;
        });
    }
}
class Quote {
    constructor(favQuote) {
        this.favQuote = favQuote;
        this.favQuote = favQuote;
    }
    static getQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            let quote = yield $.get('https://api.kanye.rest');
            const favQuote = quote.quote;
            return (new Quote(favQuote));
        });
    }
}
class Pokemon {
    constructor(pokemonName, pokemonPic) {
        this.pokemonName = pokemonName;
        this.pokemonPic = pokemonPic;
        this.pokemonName = pokemonName;
        this.pokemonPic = pokemonPic;
    }
    static getPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokeId = Math.floor(Math.random() * 949);
            let pokemon = yield $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
            const pokemonName = pokemon.name;
            const pokemonPicture = pokemon.sprites.back_default;
            return (new Pokemon(pokemonName, pokemonPicture));
        });
    }
}
class AboutMe {
    constructor(aboutMe) {
        this.aboutMe = aboutMe;
        this.aboutMe = aboutMe;
    }
    static getAboutMeText() {
        return __awaiter(this, void 0, void 0, function* () {
            let text = yield $.get('https://baconipsum.com/api/?type=all-meat&paras=1');
            const aboutMe = text[0];
            return (new AboutMe(aboutMe));
        });
    }
}
// // Quote.getQuote()
// Pokemon.getPokemon()
// AboutMe.getAboutMeText()
// Friend.getFriends()
