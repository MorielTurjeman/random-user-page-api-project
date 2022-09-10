"use strict";
const mainUserSource = $("#user-template").html();
const aboutMeSource = $("#meat-template").html();
const quoteSource = $("#quote-template").html();
const pokemonSource = $("#pokemon-template").html();
const friendsSource = $("#friends-template").html();
function renderFriends(friend) {
    $(".friends-container").empty();
    const template = Handlebars.compile(friendsSource);
    const newHtml = template({ friend });
    $(".friends-container").append(newHtml);
}
function renderPokemon(pokemon) {
    $(".pokemon-container").empty();
    const template = Handlebars.compile(pokemonSource);
    const newHtml = template(pokemon);
    $(".pokemon-container").append(newHtml);
}
function renderQuote(quote) {
    $(".quote-container").empty();
    const template = Handlebars.compile(quoteSource);
    const newHtml = template(quote);
    $(".quote-container").append(newHtml);
}
function renderAboutMe(aboutMeText) {
    console.log(aboutMeText);
    $(".meat-container").empty();
    console.log(aboutMeSource);
    const template = Handlebars.compile(aboutMeSource);
    console.log(template);
    const newHtml = template(aboutMeText);
    console.log(newHtml);
    $(".meat-container").append(newHtml);
}
function renderMainUser(mainUser) {
    // console.log(mainUser)
    $(".user-container").empty();
    console.log(mainUserSource);
    const template = Handlebars.compile(mainUserSource);
    console.log(template);
    const newHtml = template(mainUser);
    console.log(newHtml);
    $(".user-container").append(newHtml);
}
function renderAll(userData) {
    renderFriends(userData.friends);
    renderAboutMe(userData.aboutMe);
    renderMainUser(userData.mainUserInfo);
    renderPokemon(userData.pokemon);
    renderQuote(userData.quote);
}
Handlebars.registerHelper('properCase', function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1);
});
