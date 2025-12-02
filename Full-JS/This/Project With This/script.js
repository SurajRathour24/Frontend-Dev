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
        this.user.forEach(function(user){
            // Select the section container
  const container = document.querySelector('section[aria-label="Team members"]');

  // Create article card
  const article = document.createElement("article");
  article.className =
    "rounded-3xl bg-slate-900/95 border border-slate-700/60 shadow-xl px-6 py-7 flex flex-col items-center text-center";

  // Image wrapper
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "mb-4";

  // Image
  const img = document.createElement("img");
  img.src = user.profile
  img.alt = "John Doe";
  img.className =
    "h-20 w-20 rounded-full object-cover border border-slate-600";

  imgWrapper.appendChild(img);

  // Name
  const name = document.createElement("h2");
  name.className = "text-lg font-semibold text-slate-50";
  name.textContent = user.userName;

  // Role
  const role = document.createElement("p");
  role.className = "text-xs uppercase tracking-wide text-slate-400 mt-1";
  role.textContent = user.role;

  // Description
  const desc = document.createElement("p");
  desc.className = "mt-3 text-sm leading-relaxed text-slate-300";
  desc.textContent = user.bio;

  // Append children to article
  article.appendChild(imgWrapper);
  article.appendChild(name);
  article.appendChild(role);
  article.appendChild(desc);

  // Append article to the section container
  container.appendChild(article);
        })
    },
    removeUser : function(){},
}

userManagementBoard.init();