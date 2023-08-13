import Community from "./community";

const community = new Community();
community.initialize().then(() =>{
    console.log(community.getUserByEmail('Chaim_McDermott@dana.io'));
});

