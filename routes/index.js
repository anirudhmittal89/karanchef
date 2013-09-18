
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Karan the Chef' })
};

exports.aboutme = function(req, res){
	var ob=[{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" },
	{ "src":"http://cssdeck.com/uploads/media/items/2/2v3VhAp.png" , "caption":"Lorem ipsum dolor sit amet, con" } ]

  res.render('aboutme', {ob:ob})
};
