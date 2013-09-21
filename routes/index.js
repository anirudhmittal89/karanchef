
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Karan the Chef' })
};

exports.info = function(req, res){
  res.render('info', { title: 'Karan the Chef' })
};

exports.me = function(req, res){
  res.render('me', { title: 'Karan the Chef' })
};

exports.recipes = function(req, res){
	var ob=[
	{ "src":"/images/food/13.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"snacks"},
	{ "src":"/images/food/2.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/3.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/4.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/5.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/6.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/7.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/8.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/9.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/10.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"main"},
	{ "src":"/images/food/11.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/12.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/13.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"},
	{ "src":"/images/food/14.jpg" , "caption":"Lorem ipsum dolor sit amet, con" ,"categ":"desert"}]

  res.render('recipes', {ob:ob})
};
