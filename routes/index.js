
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Karan the Chef' })
};

exports.info = function(req, res){
  res.render('info', { title: 'Karan the Chef' })
};

exports.recipes = function(req, res){
	var ob=[
	{ "src":"/images/food/13.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/2.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/3.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/4.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/5.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/6.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/7.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/8.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/9.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/10.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/11.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/12.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/13.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"/images/food/14.jpg" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" } ]

  res.render('recipes', {ob:ob})
};
