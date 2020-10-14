$(function(){

var AppRouter= Backbone.Router.extend({
	routes:{
		"":"homeRoute",
		"articles:id":"articleRoute"
	},
	homeRoute:function(){
		this.getAllArticles(database);
	},
	articleRoute:function(id){
		this.getArticleFromId(id);
	},
	getAllArticles:function(arr){
		var out = "<h3>Top news</h3>";
		var i;
		for(i = arr.length-1; i>=0; i--) {
		    out += '<h2><a id="'+arr[i].id+'" href="#articles'+arr[i].id+'" >' + arr[i].title + '</a><p id="dateDebut">('+arr[i].date+')</p></h2>';
		}
		document.getElementById("articles").innerHTML = out;
		//document.getElementById("leftMenu").style.height=document.getElementById('articles').clientHeight;

	},
	getArticleFromId:function(idArticle){
		 var id = idArticle;
		 console.log("on a id:",id);
		var out = "";
		    out += '<div id="boxArticle"><h1 style=\"font-size:4em;margin-top:-0.5em;\">'+database[id].title+'</h1>'+database[id].content+'</div>';
		document.getElementById("articles").innerHTML = out;
		document.getElementById('goBack').innerHTML= "back";
	}

})
var approuter = new AppRouter;
Backbone.history.start();
})
