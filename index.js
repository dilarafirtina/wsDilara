const projects = [
    {
        "id": "1",
        "name": "website",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    },
    {
        "id": "2",
        "name": "project2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    },
    {
        "id": "3",
        "name": "project3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    },
    {
        "id": "4",
        "name": "project4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    },
    {
        "id": "5",
        "name": "project5",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    },
    {
        "id": "6",
        "name": "project6",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img": "https://picsum.photos/200?grayscale"
    }
]

document.getElementById("header").onmousemove = (event) => {
    //console.log(event.y);
}

const getSiblings = function (e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

const handleToggle = (idName) => {
    let block = document.getElementById(idName);
    let siblings = getSiblings(block);
    siblings.map(e => e.classList.toggle("d-none"));
    block.classList.toggle("col-lg-12");
    block.children[0].classList.toggle("titleDetail");
    block.children[1].classList.toggle("beVisible");

}

document.getElementById("aboutMe").onclick = () => {
    handleToggle("aboutMe");
}
document.getElementById("navAboutMe").onclick = () => {
    handleToggle("aboutMe");
}

document.getElementById("projects").onclick = () => {
    handleToggle("projects");
}
document.getElementById("navProjects").onclick = () => {
    handleToggle("projects");
}

document.getElementById("contact").onclick = () => {
    handleToggle("contact");
}
document.getElementById("navContact").onclick = () => {
    handleToggle("contact");
}



