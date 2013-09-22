
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
console.log(src);
console.log(caption);

var data={
	"caption":caption,
	"src":src
};
console.log(data);
  res.render('info', {data:data});


};

exports.recipes = function(req, res){
	var ob=[
    {
        "src": "/images/SAVOURY/AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE.jpg",
        "caption": "AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/AMUSE BOUCHE - PANAGAM.jpg",
        "caption": "AMUSE BOUCHE - PANAGAM",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY.jpg",
        "caption": "BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BEEF WELLINGTON 1.jpg",
        "caption": "BEEF WELLINGTON",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BEEF WELLINGTON 2.jpg",
        "caption": "BEEF WELLINGTON",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BURGER BUN.jpg",
        "caption": "BURGER BUN",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BUTTER CHICKEN.jpg",
        "caption": "BUTTER CHICKEN",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CAFREAL PRAWNS.jpg",
        "caption": "CAFREAL PRAWNS",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD CHICKEN AND STUFFED DOSA.jpg",
        "caption": "CHETTINAD CHICKEN AND STUFFED DOSA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD SPICED CORN VOL-AU-VENT.jpg",
        "caption": "CHETTINAD SPICED CORN VOL-AU-VENT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD SPICED STUFFED PANEER TIKKA.jpg",
        "caption": "CHETTINAD SPICED STUFFED PANEER TIKKA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHEVRE LOG WITH 5 TEXTURES OF BEETROOT.jpg",
        "caption": "CHEVRE LOG WITH 5 TEXTURES OF BEETROOT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHICKEN DIMSUM.jpg",
        "caption": "CHICKEN DIMSUM",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHICKEN TIKKA CHAAT , PEPPER FRIED CHICKEN WITH MINT YOGHURT AND SALAD.jpg",
        "caption": "CHICKEN TIKKA CHAAT , PEPPER FRIED CHICKEN WITH MINT YOGHURT AND SALAD",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE.jpg",
        "caption": "CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CIABATTA.jpg",
        "caption": "CIABATTA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY.jpg",
        "caption": "COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CORN AND CURRY LEAF TIKKI.jpg",
        "caption": "CORN AND CURRY LEAF TIKKI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CROISSANT 1.jpg",
        "caption": "CROISSANT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CROISSANT 2.jpg",
        "caption": "CROISSANT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/DAHI BHALLA.jpg",
        "caption": "DAHI BHALLA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/FARMER'S LOAF.jpg",
        "caption": "FARMER'S LOAF",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS.jpg",
        "caption": "FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS.jpg",
        "caption": "GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED FISH OVER MASHED POTATOES.jpg",
        "caption": "GRILLED FISH OVER MASHED POTATOES",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE.jpg",
        "caption": "GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER.jpg",
        "caption": "HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/HOME SMOKED PANEER TIKKA.jpg",
        "caption": "HOME SMOKED PANEER TIKKA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI PANEER 2.jpg",
        "caption": "KADHAI PANEER 2",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI PANEER.jpg",
        "caption": "KADHAI PANEER",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE.jpg",
        "caption": "KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KUMBH MATAR.jpg",
        "caption": "KUMBH MATAR",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/LAMB CHOPS OVER DUM BIRYANI.jpg",
        "caption": "LAMB CHOPS OVER DUM BIRYANI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/LAVASH DISPLAY.jpg",
        "caption": "LAVASH DISPLAY",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER.jpg",
        "caption": "MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD.jpg",
        "caption": "MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MULTIGRAIN CROISSANT.jpg",
        "caption": "MULTIGRAIN CROISSANT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MUSHROOM GALOUTI KEBAB.jpg",
        "caption": "MUSHROOM GALOUTI KEBAB",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MUSHROOM VOL-AU-VENT.jpg",
        "caption": "MUSHROOM VOL-AU-VENT",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/NILGIRI PANEER KORMA WITH RAGI DOSA.jpg",
        "caption": "NILGIRI PANEER KORMA WITH RAGI DOSA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PEPPER FRIED PRAWNS WITH ASSORTED CHUTNEYS.jpg",
        "caption": "PEPPER FRIED PRAWNS WITH ASSORTED CHUTNEYS",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PINDI CHHOLE.jpg",
        "caption": "PINDI CHHOLE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PINEAPPLE RASAM WITH GRISSINI.jpg",
        "caption": "PINEAPPLE RASAM WITH GRISSINI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/QUICHE LORRAINE 2.jpg",
        "caption": "QUICHE LORRAINE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/QUICHE LORRAINE.jpg",
        "caption": "QUICHE LORRAINE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/RAW MANGO , SHRIMP , LEMON PICKLE.jpg",
        "caption": "RAW MANGO , SHRIMP , LEMON PICKLE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL.jpg",
        "caption": "SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE.jpg",
        "caption": "SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES.jpg",
        "caption": "SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SMOKED SALMON AND CREAM CHEESE CROSTINI.jpg",
        "caption": "SMOKED SALMON AND CREAM CHEESE CROSTINI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE.jpg",
        "caption": "SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SPICED PUMPKIN SOUP WITH FLAVOURED.jpg",
        "caption": "SPICED PUMPKIN SOUP WITH FLAVOURED",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SPINACH , PINE NUT AND RICOTTA CANNELONI.jpg",
        "caption": "SPINACH , PINE NUT AND RICOTTA CANNELONI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/STEAMED FISH AND JAPANESE RICE SUSHI.jpg",
        "caption": "STEAMED FISH AND JAPANESE RICE SUSHI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE.jpg",
        "caption": "THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/THALASSARI LAMB CUTLETS.jpg",
        "caption": "THALASSARI LAMB CUTLETS",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TIRAMISU.jpg",
        "caption": "TIRAMISU",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TOMATO RASAM WITH BASIL GRISSINI.jpg",
        "caption": "TOMATO RASAM WITH BASIL GRISSINI",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA.jpg",
        "caption": "TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/VEGETABLE DIMSUM.jpg",
        "caption": "VEGETABLE DIMSUM",
        "categ": "snacks"
    },
    {
        "src": "/images/SAVOURY/WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE.jpg",
        "caption": "WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE",
        "categ": "desert"
    }
]
  res.render('recipes', {ob:ob})
};
