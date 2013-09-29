
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

exports.info = function(req, res){
var src=req.query.src;
var caption=req.query.caption;

var data={
	"caption":caption,
	"src":src
};
  res.render('info', {data:data});


};

exports.recipes = function(req, res){
	var dessert=[
    {
        "src": "/images/DESSERTS/ALLUMETTES.jpg",
        "caption": "ALLUMETTES",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/APPLE PIE 1.jpg",
        "caption": "APPLE PIE ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/APPLE PIE.jpg",
        "caption": "APPLE PIE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/ASSORTED DOUGHNUTS.jpg",
        "caption": "ASSORTED DOUGHNUTS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/ASSORTED MACARONS.jpg",
        "caption": "ASSORTED MACARONS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BANANA AND JAGGERY STICKY CAKE WITH BAKED SHREEKHAND AND MANGO GRANITA.JPG",
        "caption": "BANANA AND JAGGERY STICKY CAKE WITH BAKED SHREEKHAND AND MANGO GRANITA",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BANOFEE PIE 2.jpg",
        "caption": "BANOFEE PIE ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BANOFEE PIE.jpg",
        "caption": "BANOFEE PIE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BEBINCA - 13 LAYERS.jpg",
        "caption": "BEBINCA - 13 LAYERS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BEBINCA WITH PEANUT AND JAGGERY ICE CREAM , ELANEER PAYASAM SHOOTER.jpg",
        "caption": "BEBINCA WITH PEANUT AND JAGGERY ICE CREAM , ELANEER PAYASAM SHOOTER",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BEIGNET A LA CREME.jpg",
        "caption": "BEIGNET A LA CREME",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BLUEBERRY COLD CHEESECAKE 1.jpg",
        "caption": "BLUEBERRY COLD CHEESECAKE ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BLUEBERRY COLD CHEESECAKE 2.jpg",
        "caption": "BLUEBERRY COLD CHEESECAKE ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BLUEBERRY CUPCAKES.jpg",
        "caption": "BLUEBERRY CUPCAKES",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BRANDY SNAP WITH BASIL MOUSSE.jpg",
        "caption": "BRANDY SNAP WITH BASIL MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/BROWNIE CHEESECAKE.jpg",
        "caption": "BROWNIE CHEESECAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCLATE AND WANUT BROWNIE  2.jpg",
        "caption": "CHOCLATE AND WANUT BROWNIE  ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE AND WALNUT BROWNIES 1.jpg",
        "caption": "CHOCOLATE AND WALNUT BROWNIES ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE CONES WITH CHOCOLATE MOUSSE.jpg",
        "caption": "CHOCOLATE CONES WITH CHOCOLATE MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE CROISSANT.jpg",
        "caption": "CHOCOLATE CROISSANT",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE CUPCAKES.jpg",
        "caption": "CHOCOLATE CUPCAKES",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE DOUGHNUTS.jpg",
        "caption": "CHOCOLATE DOUGHNUTS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE ECLAIRS.jpg",
        "caption": "CHOCOLATE ECLAIRS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE FUDGE CAKE WITH ORANGE MOUSSE.jpg",
        "caption": "CHOCOLATE FUDGE CAKE WITH ORANGE MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE MOUSSE OVER FLOURLESS CHOCOLATE AND MOCHA FUDGE CAKE.jpg",
        "caption": "CHOCOLATE MOUSSE OVER FLOURLESS CHOCOLATE AND MOCHA FUDGE CAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE MOUSSE.jpg",
        "caption": "CHOCOLATE MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE MUFFINS.jpg",
        "caption": "CHOCOLATE MUFFINS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE PASTRY.jpg",
        "caption": "CHOCOLATE PASTRY",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE PAVLOVA STUFFED WITH CHOCOLATE BUTTERCREAM.jpg",
        "caption": "CHOCOLATE PAVLOVA STUFFED WITH CHOCOLATE BUTTERCREAM",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOCOLATE TART.jpg",
        "caption": "CHOCOLATE TART",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CHOUX SWANS.jpg",
        "caption": "CHOUX SWANS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/COLD MANGO CHEESECAKE WITH CHOCOLATE COOKIE CRUMB , BASIL ICE CREAM.jpg",
        "caption": "COLD MANGO CHEESECAKE WITH CHOCOLATE COOKIE CRUMB , BASIL ICE CREAM",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CREME CARAMEL.jpg",
        "caption": "CREME CARAMEL",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/CROQUEMBOUCHE.jpg",
        "caption": "CROQUEMBOUCHE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/DANISH PASTRY 1.jpg",
        "caption": "DANISH PASTRY ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/DANISH PASTRY 2.jpg",
        "caption": "DANISH PASTRY ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/DANISH PASTRY 3.jpg",
        "caption": "DANISH PASTRY 3",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/EGGLESS AND SUGARFREE MUFFINS.jpg",
        "caption": "EGGLESS AND SUGARFREE MUFFINS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FIG AND MAPLE TART.jpg",
        "caption": "FIG AND MAPLE TART",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FIG AND SESAME TART.JPG",
        "caption": "FIG AND SESAME TART",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FLOATING ISLANDS.jpg",
        "caption": "FLOATING ISLANDS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FLOURLESS CHOCOLATE AND MOCHA FUDGE CAKE WITH BANANA AND CARAMEL ICE CREAM.jpg",
        "caption": "FLOURLESS CHOCOLATE AND MOCHA FUDGE CAKE WITH BANANA AND CARAMEL ICE CREAM",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FRESH MANGO TART , MANGO AND MINT SALSA , BERRY SORBET.jpg",
        "caption": "FRESH MANGO TART , MANGO AND MINT SALSA , BERRY SORBET",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FRESH STRAWBERRY TARTLETS.jpg",
        "caption": "FRESH STRAWBERRY TARTLETS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/FRIED BERLINERS.jpg",
        "caption": "FRIED BERLINERS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/GATEAUX PITHIVIER.jpg",
        "caption": "GATEAUX PITHIVIER",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/GATEAUX ST.HONORE.jpg",
        "caption": "GATEAUX ST.HONORE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/GUM PASTE DECORATION OVER CAKE.jpg",
        "caption": "GUM PASTE DECORATION OVER CAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/LEMON MERINGUE CUPCAKES.jpg",
        "caption": "LEMON MERINGUE CUPCAKES",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/LEMON MERINGUE TART.jpg",
        "caption": "LEMON MERINGUE TART",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/LINZER TORTE.jpg",
        "caption": "LINZER TORTE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/MANGO AND CHILLI MOUSSE.jpg",
        "caption": "MANGO AND CHILLI MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/MANGO AND PEPPERMINT PARFAIT.jpg",
        "caption": "MANGO AND PEPPERMINT PARFAIT",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/MANGO PHIRNI.jpg",
        "caption": "MANGO PHIRNI",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/ORANGE BREAD AND BANANA BREAD.jpg",
        "caption": "ORANGE BREAD AND BANANA BREAD",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/ORANGE CREME CARAMEL.jpg",
        "caption": "ORANGE CREME CARAMEL",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PAIN AU CHOCOLAT.jpg",
        "caption": "PAIN AU CHOCOLAT",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PAIN AU RAISIN.jpg",
        "caption": "PAIN AU RAISIN",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PAIN-AU-CHOCOLAT 2.jpg",
        "caption": "PAIN-AU-CHOCOLAT ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PALMIERS.jpg",
        "caption": "PALMIERS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PASTRY DISPLAY 2.jpg",
        "caption": "PASTRY DISPLAY ",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PASTRY DISPLAY.jpg",
        "caption": "PASTRY DISPLAY",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PEANUT BUTTER CUPS.jpg",
        "caption": "PEANUT BUTTER CUPS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PINEAPPLE TART- TATIN.jpg",
        "caption": "PINEAPPLE TART- TATIN",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/pineapple upside down.jpg",
        "caption": "pineapple upside down",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/PLATTER - CHOCOLATE CONES , CREME BRULEE , TIRAMISU TARTLET AND STRAWBERRY AND CREAM FILLED BRANDY SNAP.jpg",
        "caption": "PLATTER - CHOCOLATE CONES , CREME BRULEE , TIRAMISU TARTLET AND STRAWBERRY AND CREAM FILLED BRANDY SNAP",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/RASPBERRY CHIFFON PIE.jpg",
        "caption": "RASPBERRY CHIFFON PIE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/RASPBERRY SORBET.jpg",
        "caption": "RASPBERRY SORBET",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/RED VELEVET CAKE WITH CREAM CHEESE FROSTING.jpg",
        "caption": "RED VELEVET CAKE WITH CREAM CHEESE FROSTING",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/RED VELVET , PINA COLADA ,.jpg",
        "caption": "RED VELVET , PINA COLADA ,",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/RED VELVET CUPCAKES WITH CREAM CHEESE FROSTING.jpg",
        "caption": "RED VELVET CUPCAKES WITH CREAM CHEESE FROSTING",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/ROSE PAVLOVA STUFFED WITH BUTTERCREAM.jpg",
        "caption": "ROSE PAVLOVA STUFFED WITH BUTTERCREAM",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/SACHER TORTE.jpg",
        "caption": "SACHER TORTE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/SPAGHETTI POMODORO.jpg",
        "caption": "SPAGHETTI POMODORO",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/STRAWBERRY AND FRANGIPANE TART.jpg",
        "caption": "STRAWBERRY AND FRANGIPANE TART",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/strawberry gel, yogurt pannacotta, dehydrated meringue, oat meal crumble and basil icecream.JPG",
        "caption": "strawberry gel, yogurt pannacotta, dehydrated meringue, oat meal crumble and basil icecream",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/STRAWBERRY JELLY CHEESECAKE.jpg",
        "caption": "STRAWBERRY JELLY CHEESECAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/STRAWBERRY MOUSSE.jpg",
        "caption": "STRAWBERRY MOUSSE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/STRWBERRY BERLINER.jpg",
        "caption": "STRWBERRY BERLINER",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/SUGAR COATED DOUGHNUTS.jpg",
        "caption": "SUGAR COATED DOUGHNUTS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/SUMMER BERRY SOUP WITH FLOATING ISLAND AND FRESH FRUITS IN CARAMEL CUP.JPG",
        "caption": "SUMMER BERRY SOUP WITH FLOATING ISLAND AND FRESH FRUITS IN CARAMEL CUP",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/TIRAMISU PASTRY.jpg",
        "caption": "TIRAMISU PASTRY",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/TIRAMISU.jpg",
        "caption": "TIRAMISU",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/TREACLE TARTLETS.jpg",
        "caption": "TREACLE TARTLETS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/TRIPLE CHOCOLATE BAKED CHEESECAKE.jpg",
        "caption": "TRIPLE CHOCOLATE BAKED CHEESECAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/VANILLA BEAN CREME BRULEE.jpg",
        "caption": "VANILLA BEAN CREME BRULEE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/VANILLA MUFFINS.jpg",
        "caption": "VANILLA MUFFINS",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/VICTORIAN FOOD CAKE.jpg",
        "caption": "VICTORIAN FOOD CAKE",
        "categ": "DESSERTS"
    },
    {
        "src": "/images/DESSERTS/WILD BERRY PIE.jpg",
        "caption": "WILD BERRY PIE",
        "categ": "DESSERTS"
    }];

    var entree=[
    {
        "src": "/images/ENTREE/ALMOND CRUSTED PANEER TIKKI WITH FENUGREEK LAVASH AND  TAMARIND SUACE.jpg",
        "caption": "ALMOND CRUSTED PANEER TIKKI WITH FENUGREEK LAVASH AND  TAMARIND SUACE",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE.jpg",
        "caption": "AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/AMUSE BOUCHE - PANAGAM.jpg",
        "caption": "AMUSE BOUCHE - PANAGAM",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY.jpg",
        "caption": "BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/BURGER BUN.jpg",
        "caption": "BURGER BUN",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CAESAR SALAD.JPG",
        "caption": "CAESAR SALAD",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CAFREAL PRAWNS.jpg",
        "caption": "CAFREAL PRAWNS",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CHETTINAD SPICED CORN VOL-AU-VENT.jpg",
        "caption": "CHETTINAD SPICED CORN VOL-AU-VENT",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CHETTINAD SPICED STUFFED PANEER TIKKA.jpg",
        "caption": "CHETTINAD SPICED STUFFED PANEER TIKKA",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CHEVRE LOG WITH 5 TEXTURES OF BEETROOT.jpg",
        "caption": "CHEVRE LOG WITH 5 TEXTURES OF BEETROOT",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CHICKEN DIMSUM.jpg",
        "caption": "CHICKEN DIMSUM",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CHICKEN TIKKA CHAAT , PEPPER  CHICKEN WITH MINT YOGHURT AND SALAD.jpg",
        "caption": "CHICKEN TIKKA CHAAT , PEPPER  CHICKEN WITH MINT YOGHURT AND SALAD",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CIABATTA.jpg",
        "caption": "CIABATTA",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY.jpg",
        "caption": "COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/COCONUT CHUTNEY.JPG",
        "caption": "COCONUT CHUTNEY",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CORN AND CURRY LEAF TIKKI.jpg",
        "caption": "CORN AND CURRY LEAF TIKKI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CROISSANT 1.jpg",
        "caption": "CROISSANT ",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/CROISSANT 2.jpg",
        "caption": "CROISSANT ",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/DAHI BHALLA.jpg",
        "caption": "DAHI BHALLA",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/EGGS BENEDICT.JPG",
        "caption": "EGGS BENEDICT",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/FARMER'S LOAF.jpg",
        "caption": "FARMER'S LOAF",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/FISH VARUVAL WITH RAW MANGO AND CAPSICUM CHUTNEYS.JPG",
        "caption": "FISH VARUVAL WITH RAW MANGO AND CAPSICUM CHUTNEYS",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/FRIED ANCHOVIES.JPG",
        "caption": "FRIED ANCHOVIES",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/GILAFI LAMB SEEKH KEBAB.JPG",
        "caption": "GILAFI LAMB SEEKH KEBAB",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/GREEN PEA AND CORIANDER SOUP WITH SMOKED CHICKEN SKEWER AND MUSTARD CAVIAR.JPG",
        "caption": "GREEN PEA AND CORIANDER SOUP WITH SMOKED CHICKEN SKEWER AND MUSTARD CAVIAR",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/GRILLED VEGETABLE AND PESTO PANINI.JPG",
        "caption": "GRILLED VEGETABLE AND PESTO PANINI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER.jpg",
        "caption": "HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/HOME SMOKED PANEER TIKKA.jpg",
        "caption": "HOME SMOKED PANEER TIKKA",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/HUMMUS DIP.JPG",
        "caption": "HUMMUS DIP",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/KUZHI PANIYARAM.JPG",
        "caption": "KUZHI PANIYARAM",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/LAMB SHAMMI KEBAB.JPG",
        "caption": "LAMB SHAMMI KEBAB",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER.jpg",
        "caption": "MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD.jpg",
        "caption": "MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MEXICAN VEGETABLE FAJITAS.JPG",
        "caption": "MEXICAN VEGETABLE FAJITAS",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MINUTE STEAK SANDWICH WITH COLESLAW AND FRENCH FRIES.jpg",
        "caption": "MINUTE STEAK SANDWICH WITH COLESLAW AND FRENCH FRIES",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MULTIGRAIN CROISSANT.jpg",
        "caption": "MULTIGRAIN CROISSANT",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MUSHROOM GALOUTI KEBAB.jpg",
        "caption": "MUSHROOM GALOUTI KEBAB",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/MUSHROOM VOL-AU-VENT.jpg",
        "caption": "MUSHROOM VOL-AU-VENT",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/PEPPER FRIED PRAWNS.jpg",
        "caption": "PEPPER FRIED PRAWNS",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/PINEAPPLE RASAM WITH GRISSINI.jpg",
        "caption": "PINEAPPLE RASAM WITH GRISSINI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/PRAWN COCKTAIL SALAD.jpg",
        "caption": "PRAWN COCKTAIL SALAD",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/RAW MANGO , SHRIMP , LEMON PICKLE.jpg",
        "caption": "RAW MANGO , SHRIMP , LEMON PICKLE",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE.jpg",
        "caption": "SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES.jpg",
        "caption": "SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/SMOKED SALMON AND CREAM CHEESE CROSTINI.jpg",
        "caption": "SMOKED SALMON AND CREAM CHEESE CROSTINI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/SPICED PUMPKIN SOUP WITH FLAVOURED.jpg",
        "caption": "SPICED PUMPKIN SOUP WITH FLAVOURED",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/STEAMED FISH AND JAPANESE RICE SUSHI.jpg",
        "caption": "STEAMED FISH AND JAPANESE RICE SUSHI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE.jpg",
        "caption": "THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/THALASSARI LAMB CUTLETS.jpg",
        "caption": "THALASSARI LAMB CUTLETS",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/TOMATO RASAM WITH BASIL GRISSINI.jpg",
        "caption": "TOMATO RASAM WITH BASIL GRISSINI",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA.jpg",
        "caption": "TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/VEG APPETIZER - OATMEAL CRUSTED SMOKED MASALA CHEESE TIKKI , OLIVE AND JALAPENO PANIYARAM , SPINACH LEAVES TEMPURA , CHILLY GARLIC CHUTNEY.JPG",
        "caption": "VEG APPETIZER - OATMEAL CRUSTED SMOKED MASALA CHEESE TIKKI , OLIVE AND JALAPENO PANIYARAM , SPINACH LEAVES TEMPURA , CHILLY GARLIC CHUTNEY",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/VEGETABLE DIMSUM.jpg",
        "caption": "VEGETABLE DIMSUM",
        "categ": "ENTREE"
    },
    {
        "src": "/images/ENTREE/WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE.jpg",
        "caption": "WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE",
        "categ": "ENTREE"
    }];

    var main=[
        {
            "src": "/images/MAINS/ACHARI PANEER STEAK WITH KADHAI VEGETABLES , GRILLED UPMA AND MAKHNI SAUCE.JPG",
            "caption": "ACHARI PANEER STEAK WITH KADHAI VEGETABLES , GRILLED UPMA AND MAKHNI SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/AMRITSARI DUM ALOO.JPG",
            "caption": "AMRITSARI DUM ALOO",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/BAINGAN KA BHARTA.JPG",
            "caption": "BAINGAN KA BHARTA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/BEANS PORIYAL WITH APPAM.JPG",
            "caption": "BEANS PORIYAL WITH APPAM",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/BEEF WELLINGTON 1.jpg",
            "caption": "BEEF WELLINGTON ",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/BEEF WELLINGTON 2.jpg",
            "caption": "BEEF WELLINGTON ",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/BUTTER CHICKEN.jpg",
            "caption": "BUTTER CHICKEN",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/CHETTINAD CHICKEN AND STUFFED DOSA.jpg",
            "caption": "CHETTINAD CHICKEN AND STUFFED DOSA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/CHETTINAD SPICED WHOLE CRAB.jpg",
            "caption": "CHETTINAD SPICED WHOLE CRAB",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/CHICKEN CHTTINAD CURRY WITH APPAM.JPG",
            "caption": "CHICKEN CHTTINAD CURRY WITH APPAM",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE.jpg",
            "caption": "CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/CIABATTA CRUSTED FISH WITH CHORIZO CRUMBLE,CHAWANMUSHI AND ROASTED PEPPERS.JPG",
            "caption": "CIABATTA CRUSTED FISH WITH CHORIZO CRUMBLE,CHAWANMUSHI AND ROASTED PEPPERS",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/FETTUCCINE POMODORO.JPG",
            "caption": "FETTUCCINE POMODORO",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/FETTUCINE CARBONARA.JPG",
            "caption": "FETTUCINE CARBONARA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS.jpg",
            "caption": "FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GATTA CURRY.JPG",
            "caption": "GATTA CURRY",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GONGURA SPICED LAMB RACK WITH SAFFRON MASHED POTATOES AND ROASTED BABY AUBERGINES.jpg",
            "caption": "GONGURA SPICED LAMB RACK WITH SAFFRON MASHED POTATOES AND ROASTED BABY AUBERGINES",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GRILLED BEEF STEAK WITH MASHED POTATOES AND BUTTERED VEGETABLES.jpg",
            "caption": "GRILLED BEEF STEAK WITH MASHED POTATOES AND BUTTERED VEGETABLES",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS.jpg",
            "caption": "GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GRILLED FISH OVER MASHED POTATOES.jpg",
            "caption": "GRILLED FISH OVER MASHED POTATOES",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE.jpg",
            "caption": "GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/JEERA ALOO.JPG",
            "caption": "JEERA ALOO",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/KADHAI PANEER 2.jpg",
            "caption": "KADHAI PANEER ",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/KADHAI PANEER.jpg",
            "caption": "KADHAI PANEER",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE.jpg",
            "caption": "KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/KUMBH MATAR.jpg",
            "caption": "KUMBH MATAR",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/LAMB CHOPS OVER DUM BIRYANI.jpg",
            "caption": "LAMB CHOPS OVER DUM BIRYANI",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/LAMB KASHA MANGSHO WITH APPAM.JPG",
            "caption": "LAMB KASHA MANGSHO WITH APPAM",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/LAMB RILLETE ON FENUGREEK PAPDI , CHICKEN RECHADO SKEWERS , MASALA CHEESE CRUTED CHICKEN TIKKA AND CHILLI COCONUT PANACOTTA.JPG",
            "caption": "LAMB RILLETE ON FENUGREEK PAPDI , CHICKEN RECHADO SKEWERS , MASALA CHEESE CRUTED CHICKEN TIKKA AND CHILLI COCONUT PANACOTTA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/LAVASH DISPLAY.jpg",
            "caption": "LAVASH DISPLAY",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MADRAS LAMB CURRY WITH APPAM.JPG",
            "caption": "MADRAS LAMB CURRY WITH APPAM",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MADRAS LAMB NALLI KORMA.jpg",
            "caption": "MADRAS LAMB NALLI KORMA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MALABAR PARATHA.JPG",
            "caption": "MALABAR PARATHA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MALABAR PRAWN CURRY WITH APPAM.jpg",
            "caption": "MALABAR PRAWN CURRY WITH APPAM",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MEEN MOILEE - GRILLED FISH , STEAMED RICE HOPPERS , TEMPERED TOMATOES , BHINDI JAIPURI AND MOILEE SAUCE.JPG",
            "caption": "MEEN MOILEE - GRILLED FISH , STEAMED RICE HOPPERS , TEMPERED TOMATOES , BHINDI JAIPURI AND MOILEE SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MIRCHI KA SALAN.jpg",
            "caption": "MIRCHI KA SALAN",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/MUSHROOM STEAK WITH BAGHARE BAINGAN AND SMOKED CHILLI SAUCE.JPG",
            "caption": "MUSHROOM STEAK WITH BAGHARE BAINGAN AND SMOKED CHILLI SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/NILGIRI PANEER KORMA WITH RAGI DOSA.jpg",
            "caption": "NILGIRI PANEER KORMA WITH RAGI DOSA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/PINDI CHHOLE.jpg",
            "caption": "PINDI CHHOLE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/QUATTRO FROMAGGI RAVIOLI WITH BEURRE BLANC.jpg",
            "caption": "QUATTRO FROMAGGI RAVIOLI WITH BEURRE BLANC",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/QUICHE LORRAINE 2.jpg",
            "caption": "QUICHE LORRAINE ",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/QUICHE LORRAINE.jpg",
            "caption": "QUICHE LORRAINE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL.jpg",
            "caption": "SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SEAFOOD APPETIZER - PRAWN AND CORN POTLI , PEPPER FRIED SOFT SHELL CRAB AND PATRANI CRUSTED FISH.JPG",
            "caption": "SEAFOOD APPETIZER - PRAWN AND CORN POTLI , PEPPER FRIED SOFT SHELL CRAB AND PATRANI CRUSTED FISH",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE.jpg",
            "caption": "SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SPAGHETTI AGLIO OLIO.JPG",
            "caption": "SPAGHETTI AGLIO OLIO",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SPAGHETTI PRIMAVERA.JPG",
            "caption": "SPAGHETTI PRIMAVERA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/SPINACH , PINE NUT AND RICOTTA CANNELONI.jpg",
            "caption": "SPINACH , PINE NUT AND RICOTTA CANNELONI",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/STUFFED CHICKEN BALLONTINE WITH RED WINE JUS.JPG",
            "caption": "STUFFED CHICKEN BALLONTINE WITH RED WINE JUS",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/VEGETABLE ENCHILADAS.JPG",
            "caption": "VEGETABLE ENCHILADAS",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/VEGETABLE KOFTAS IN SPINACH GRAVY.JPG",
            "caption": "VEGETABLE KOFTAS IN SPINACH GRAVY",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/VEGETABLE LASAGNA.JPG",
            "caption": "VEGETABLE LASAGNA",
            "categ": "MAINS"
        },
        {
            "src": "/images/MAINS/WILD MUSHROOM RISOTTO.JPG",
            "caption": "WILD MUSHROOM RISOTTO",
            "categ": "MAINS"
        }
    
];
var ob=[];
var src=req.query.src;
var type=req.query.type;
console.log(type);
if(type=="main"){
	ob=main;
    title="Main Course Recipes";

}
if(type=="dessert"){
	ob=dessert;
    title="Dessert Recipes";
}
if(type=="entree"){
	ob=entree;
    title="Entree Recipes";
}
console.log(ob);
  res.render('recipes', {ob:ob,title:title,dessertMenu:true});
};
