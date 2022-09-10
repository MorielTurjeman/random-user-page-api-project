"use strict";
class Controller {
    // savedUsers: UserData[]
    constructor() {
        // this.savedUsers = JSON.parse(localStorage.getItem("savesUsers") || "[]")
        this.model = new Model();
        this.model.getAllDataPage().then(user => {
            this.user = user;
            renderAll(user);
        });
        const saveUserData = document.querySelector("#saveUserPage");
        const loadUserData = document.querySelector("#loadUserPage");
        const generateUserBotton = document.querySelector("#generateUser");
        if (generateUserBotton) {
            generateUserBotton.addEventListener("click", (event) => {
                this.model.getAllDataPage().then(user => {
                    this.user = user;
                    renderAll(user);
                });
            });
        }
    }
    saveUserPage() {
        let currUserData = JSON.stringify(this.user);
        console.log(currUserData);
        localStorage.setItem("userData", currUserData);
    }
    loadUserPage() {
        let userData = localStorage.getItem("userData");
        if (userData) {
            let retrieveUser = JSON.parse(userData);
            renderAll(retrieveUser);
        }
    }
}
const controller = new Controller();
// saveMultiUsersPage() {
//     let currUserData = JSON.stringify(this.user)
//     if (this.user) {
//         this.savedUsers.push(this.user)
//         localStorage.setItem("userData", JSON.stringify(this.savedUsers));
//     }
// }
