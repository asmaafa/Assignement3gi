module.exports = function(app){


pages = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
];

app.get("/api/website/:wid/page", findAllPagesForWebsite);
app.get("/api/page/:pid", findPageById);
app.post("/api/website/:wid/page",createPage);
app.put('/api/page/:pid', updatePage);
app.delete('/api/page/:pid', deletePage);
   
  



function findAllPagesForWebsite(req, res){
    var wid = req.params['wid'];
    var result=[];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === wid) {  
       
        result.push(pages[i]); }
    }
       res.json(result) ;
  }

// find user by given ID

function selectPageById(pid){

for (let i = 0;i<pages.length;i++){
 if (pages[i]._id === pid) {
	return pages[i];
			}
		}
	
}

function findPageById(req, res){

	var pid = req.params["pid"]
	var page = selectPageById(pid);
	res.json(page);
	// for (let x = 0; x < users.length; x++) {
 //      if (users[x]._id === uid) {  
 //        res.json(users[x]);
 //          return; 
     
    }
 



function createPage (req, res){
  var page = req.body;
  page._id = Math.floor(Math.random()*Math.floor(10000)).toString();
    page.websiteId = req.params['wid'];
    pages.push(page);
    res.json(page);
}
   




function updatePage(req, res){
  var pid = req.params['pid'];
  var page = req.body;
  var oldPage = selectpagebyId(pid);
  var index = pages.indexOf(oldPage);
  
  pages[index].name = page.name;
  pages[index].description = page.description;
  
  res.json(page);

}
function deletepage(req, res){
    var pid = req.params["pid"];
	var oldpage = selectPagebyId(pid);
    var index = this.pages.indexOf(oldPage);
    this.pages.splice(index,1);
    res.json(pages);
}
	


}