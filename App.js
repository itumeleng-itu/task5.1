const obj={
  "devID": "10",
  "username": "frontendFox",
  "yearsExperience": "2.1",
  "isActive": "True",
  "pictureUrl": "https://api.dicebear.com/9.x/adventurer/svg?seed=Jack",
  "email": "fox@example.com",
  "phone": "733-833-2289",
  "skills": "Vue; Sass; TypeScript",
  "bio": "A creative developer with just over 2 years of experience, frontendFox focuses on building beautiful and efficient user interfaces with Vue, Sass, and TypeScript."
}

document.body.style.backgroundColor;


const container =document.createElement("div");
container.id="contain"

//1st div
const imgDiv = document.createElement("div");
imgDiv.id="image"

const img = document.createElement("img");
img.src=obj.pictureUrl;
img.id="pic"
imgDiv.appendChild(img);

const bio = document.createElement("p");
bio.textContent=obj.bio;
imgDiv.appendChild(bio)

container.appendChild(imgDiv);

//2nd div
const contentDiv = document.createElement("div");
contentDiv.id="content";

//id of the object
const id=document.createElement("h1");
id.textContent="ID : "+ obj.devID;
contentDiv.appendChild(id);

const username=document.createElement("p");
username.textContent="USERNAME : "+obj.username;
contentDiv.appendChild(username);

const yrsExp = document.createElement("p");
yrsExp.textContent="YEARS EXPERIENCE : "+ obj.yearsExperience +" years";
contentDiv.appendChild(yrsExp)

const active = document.createElement("p");
active.textContent="ACTIVE : "+ obj.isActive;
contentDiv.appendChild(active);

const email = document.createElement("p");
email.textContent = "Email : "+ obj.email;
contentDiv.appendChild(email);

const phone = document.createElement("p");
phone.textContent="Phone : "+obj.phone
contentDiv.appendChild(phone);

const skillDiv = document.createElement("div");

const skillsHeading = document.createElement("p");
skillsHeading.textContent="SKILLS"

const skills = document.createElement("ul");
const skillsArray = obj.skills.split(";").map(skill => skill.trim());
for (let i = 0; i < skillsArray.length; i++) {
  const skillslist = document.createElement("li");
  skillslist.textContent = skillsArray[i];
  skills.appendChild(skillslist);
}

skillDiv.appendChild(skillsHeading)
skillDiv.appendChild(skills)
contentDiv.appendChild(skillDiv);

container.appendChild(contentDiv)

















document.body.append(container)