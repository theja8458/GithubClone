const fs = require('fs').promises;
const path = require("path");


async function initRepo(){
   const repoPath = path.resolve(process.cwd(), ".myGit");
   const commitsPath = path.join(repoPath, "commits");
   
   try{
    await fs.mkdir(repoPath, {recursive: true});
    await fs.mkdir(commitsPath, {recursive: true});
    await fs.writeFile(
        path.join(repoPath,"conig.json"),
        JSON.stringify({bucekt: process.env.S3_BUCKET})
    );
    console.log("Repository initialised");
   }catch(err){
     console.error("Error initializing repository:", err);
   }
}

module.exports = {initRepo};