"use strict";

console.log(actors);

const root = document.getElementById("root");

const divWrapper = document.createElement("div");
divWrapper.classList.add("wrapper");

const sectionContainer = document.createElement("section");
sectionContainer.classList.add("actors-container");
divWrapper.append(sectionContainer);

const h1 = document.createElement("h1");
h1.classList.add("actors-container");

sectionContainer.append(h1);

root.append(divWrapper);
