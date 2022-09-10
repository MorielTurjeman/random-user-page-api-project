interface UserData {
    mainUserInfo: MainUser;
    friends: Friend[];
    quote: Quote;
    pokemon: Pokemon;
    aboutMe: AboutMe;
}
class Model {
    constructor() { }

    async getAllDataPage() {
        const userData = {
            mainUserInfo: await MainUser.getMainUser(),
            friends: await Friend.getFriends(),
            quote: await Quote.getQuote(),
            pokemon: await Pokemon.getPokemon(),
            aboutMe: await AboutMe.getAboutMeText()
        }
        return userData;
    }

}

class MainUser {


    private constructor(readonly first_name: string, readonly last_name: string, readonly city: string, readonly state: string, readonly picture: string) {
        this.first_name = first_name
        this.last_name = last_name
        this.city = city
        this.state = state
        this.picture = picture
    }

    public static async getMainUser() {
        console.log('hi')
        let usersInfo = await $.get('https://randomuser.me/api/?format=JSON')
        console.log("here")
        const first_name = usersInfo.results[0].name.first
        const last_name = usersInfo.results[0].name.last
        const city = usersInfo.results[0].location.city
        const state = usersInfo.results[0].location.state
        const picture = usersInfo.results[0].picture.medium
        const mainUser = new MainUser(first_name, last_name, city, state, picture)

        return mainUser;


    }

}


class Friend {
    private constructor(readonly first_name: string, readonly last_name: string) {

        this.first_name = first_name
        this.last_name = last_name
    }

    public static async getFriends() {
        let friends = await $.get('https://randomuser.me/api/?results=6')
        console.log(Array.isArray(friends))
        console.log(typeof friends)
        const friendsList = friends.results.map((f: any) => new Friend(f.name.first, f.name.last))
        return friendsList
    }
}

class Quote {
    private constructor(readonly favQuote: string) {
        this.favQuote = favQuote
    }

    public static async getQuote() {
        let quote = await $.get('https://api.kanye.rest')
        const favQuote = quote.quote
        return (new Quote(favQuote))


    }

}

class Pokemon {
    private constructor(readonly pokemonName: string, readonly pokemonPic: string) {
        this.pokemonName = pokemonName
        this.pokemonPic = pokemonPic
    }
    public static async getPokemon() {
        let pokeId = Math.floor(Math.random() * 949)
        let pokemon = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        const pokemonName = pokemon.name
        const pokemonPicture = pokemon.sprites.back_default
        return (new Pokemon(pokemonName, pokemonPicture))
    }
}

class AboutMe {
    private constructor(readonly aboutMe: string[]) {
        this.aboutMe = aboutMe
    }
    public static async getAboutMeText() {
        let text = await $.get('https://baconipsum.com/api/?type=all-meat&paras=1')
        const aboutMe = text[0]
        return (new AboutMe(aboutMe))
    }
}


// // Quote.getQuote()
// Pokemon.getPokemon()
// AboutMe.getAboutMeText()
// Friend.getFriends()



