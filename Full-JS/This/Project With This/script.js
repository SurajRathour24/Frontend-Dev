let form = document.querySelector('form');
let profile = document.querySelector("#photo");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");



let userManagementBoard = {
    user: [],
    init: function(){
        form.addEventListener('submit', this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
       this.createUser();
    },
    createUser : function(){
         this.user.push({
            profile: profile.value,
            userName : userName.value,
            role : role.value,
            bio : bio.value
        });
        form.reset();
        this.renderUser();
    },
    renderUser : function(){

    },
    removeUser : function(){},
}

userManagementBoard.init();