module.exports = function(app){



widgets = [
  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}

];

app.get("/api/page/:pid/widget", findAllWidgetsForPage);
app.get("/api/page/:pid/:wgid", findWidgetById);
app.post("/api/page/:pid/widget",createWidget);
app.put('/api/widget/:wgid', updatePage);
app.delete('/api/widget/:wgid', deleteWidget);

function findAllWidgetsForPage(req, res){
    var pid = req.params['pid'];
    var result=[];
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pid) {  
       
        result.push(widgets[i]); }
    }
       res.json(result) ;
  }

// find user by given ID

function selectWidgetById(wgid){

for (let i = 0;i<widgets.length;i++){
 if (widgets[i]._id === widgetId) {
	return widgets[i];
			}
		}
	
}

function findWidgetById(req, res){

	var wgid = req.params["wgid"]
	var widget = selectWidgetById(wgid);
	res.json(widget);
	// for (let x = 0; x < users.length; x++) {
 //      if (users[x]._id === uid) {  
 //        res.json(users[x]);
 //          return; 
     
    }
 



function createPage (req, res){
  
  var pid = req.params['pid'];
  var widget = req.body;
  widget._id = Math.floor(Math.random()*Math.floor(10000)).toString();
    widget.pageId = pid;
    widgets.push(widget);
    res.json(widget);
}
   




function updateWidget(req, res){
  var wgid = req.params['wgid'];
  var widget = req.body;
  var oldWidget = selectpagebyId(wgid);
  var index = widgets.indexOf(oldWidget);
  
  widgets[index].size = widget.size;
  widgets[index].text = widget.text;
  widgets[index].width = widget.width;
  widgets[index].url = widget.url;
  res.json(widget);

}
function deleteWidget(req, res){
    var Widget = req.params["wgid"];
	var oldWidget = selectPagebyId(wgid);
    var index = this.widgets.indexOf(oldWidget);
    this.widgets.splice(index,1);
    res.json(widgets);
}
	


}

