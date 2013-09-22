
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
    {
        "src": "/images/SAVOURY/AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE.jpg",
        "caption": "AMUSE BOUCHE - BEETROOT AND CHEVRE ROULADE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/AMUSE BOUCHE - PANAGAM.jpg",
        "caption": "AMUSE BOUCHE - PANAGAM.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY.jpg",
        "caption": "BAKHARKHANI BREAD WITH LAMB GALOUTI KEBAB AND MINT CHUTNEY.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BEEF WELLINGTON 1.jpg",
        "caption": "BEEF WELLINGTON 1.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BEEF WELLINGTON 2.jpg",
        "caption": "BEEF WELLINGTON 2.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BURGER BUN.jpg",
        "caption": "BURGER BUN.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/BUTTER CHICKEN.jpg",
        "caption": "BUTTER CHICKEN.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CAFREAL PRAWNS.jpg",
        "caption": "CAFREAL PRAWNS.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD CHICKEN AND STUFFED DOSA.jpg",
        "caption": "CHETTINAD CHICKEN AND STUFFED DOSA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD SPICED CORN VOL-AU-VENT.jpg",
        "caption": "CHETTINAD SPICED CORN VOL-AU-VENT.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHETTINAD SPICED STUFFED PANEER TIKKA.jpg",
        "caption": "CHETTINAD SPICED STUFFED PANEER TIKKA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHEVRE LOG WITH 5 TEXTURES OF BEETROOT.jpg",
        "caption": "CHEVRE LOG WITH 5 TEXTURES OF BEETROOT.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHICKEN DIMSUM.jpg",
        "caption": "CHICKEN DIMSUM.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHICKEN TIKKA CHAAT , PEPPER FRIED CHICKEN WITH MINT YOGHURT AND SALAD.jpg",
        "caption": "CHICKEN TIKKA CHAAT , PEPPER FRIED CHICKEN WITH MINT YOGHURT AND SALAD.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE.jpg",
        "caption": "CHLOROPHYLL RAVIOLI STUFFED WITH CHEESE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CIABATTA CRUST.mp4",
        "caption": "CIABATTA CRUST.mp4",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CIABATTA.jpg",
        "caption": "CIABATTA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY.jpg",
        "caption": "COCONUT AND MINT , COCONUT , ONION AND TOMATO , CAPSICUM , CORIANDER CHUTNEY.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CORN AND CURRY LEAF TIKKI.jpg",
        "caption": "CORN AND CURRY LEAF TIKKI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CROISSANT 1.jpg",
        "caption": "CROISSANT 1.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/CROISSANT 2.jpg",
        "caption": "CROISSANT 2.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/DAHI BHALLA.jpg",
        "caption": "DAHI BHALLA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/FARMER'S LOAF.jpg",
        "caption": "FARMER'S LOAF.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS.jpg",
        "caption": "FISH POLLICHATTU WITH SPIANCH AND LENTIL KHICHDI , PICKLED SHALLOTS.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS.jpg",
        "caption": "GRILLED BEEF STEAK WITH MUSHROOM AND PEPPER JUS.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED FISH OVER MASHED POTATOES.jpg",
        "caption": "GRILLED FISH OVER MASHED POTATOES.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE.jpg",
        "caption": "GRILLED SEA BASS WITH PICKLED ONION SALAD AND SAUCE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER.jpg",
        "caption": "HARIYALI MURGH TIKKA AND CHICKEN SHAMMI KEBAB PLATTER.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/HOME SMOKED PANEER TIKKA.jpg",
        "caption": "HOME SMOKED PANEER TIKKA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI PANEER 2.jpg",
        "caption": "KADHAI PANEER 2.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI PANEER.jpg",
        "caption": "KADHAI PANEER.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE.jpg",
        "caption": "KADHAI VEGETABLES , STUFFED PANEER , GRILLED UPMA AND MAKHANI SAUCE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/KUMBH MATAR.jpg",
        "caption": "KUMBH MATAR.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/LAMB CHOPS OVER DUM BIRYANI.jpg",
        "caption": "LAMB CHOPS OVER DUM BIRYANI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/LAVASH DISPLAY.jpg",
        "caption": "LAVASH DISPLAY.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER.jpg",
        "caption": "MASALA FRIED FISH AND CHETTINAD SPICED CRAB CAKE PLATTER.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD.jpg",
        "caption": "MASALA LAMB CHOPS WITH BURRANI RAITA AND OVEN DRIED TOMATO SALAD.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MULTIGRAIN CROISSANT.jpg",
        "caption": "MULTIGRAIN CROISSANT.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MUSHROOM GALOUTI KEBAB.jpg",
        "caption": "MUSHROOM GALOUTI KEBAB.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/MUSHROOM VOL-AU-VENT.jpg",
        "caption": "MUSHROOM VOL-AU-VENT.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/NILGIRI PANEER KORMA WITH RAGI DOSA.jpg",
        "caption": "NILGIRI PANEER KORMA WITH RAGI DOSA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PEPPER FRIED PRAWNS WITH ASSORTED CHUTNEYS.jpg",
        "caption": "PEPPER FRIED PRAWNS WITH ASSORTED CHUTNEYS.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PINDI CHHOLE.jpg",
        "caption": "PINDI CHHOLE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/PINEAPPLE RASAM WITH GRISSINI.jpg",
        "caption": "PINEAPPLE RASAM WITH GRISSINI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/QUICHE LORRAINE 2.jpg",
        "caption": "QUICHE LORRAINE 2.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/QUICHE LORRAINE.jpg",
        "caption": "QUICHE LORRAINE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/RAW MANGO , SHRIMP , LEMON PICKLE.jpg",
        "caption": "RAW MANGO , SHRIMP , LEMON PICKLE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL.jpg",
        "caption": "SEAFOOD APPETIZER - PEPPER FRIED PRAWNS , CHETTINAD SPICED CRAB CAKE , CRACKLING SPINACH , PINEAPLLE SALASA AND CHILLI OIL.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE.jpg",
        "caption": "SEMOLINA CRUSTED HARA BHARA KEBAB WITH KACHUMBER SALAD AND PAPAD TOUILLE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES.jpg",
        "caption": "SMOKED MASALA CHEESE BALLS OVER GRILLED UPMA AND GARLIC CHILLI SAUCE AND ROASTED PAPAD TRIANGLES.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SMOKED SALMON AND CREAM CHEESE CROSTINI.jpg",
        "caption": "SMOKED SALMON AND CREAM CHEESE CROSTINI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE.jpg",
        "caption": "SOUS VIDE CHETTINAD SPICED CHICKEN BREAST , MUTTAI PARATHA MILLE - FEUILLE , ONION RINGS AND CHETTINAD SAUCE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SPICED PUMPKIN SOUP WITH FLAVOURED.jpg",
        "caption": "SPICED PUMPKIN SOUP WITH FLAVOURED.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/SPINACH , PINE NUT AND RICOTTA CANNELONI.jpg",
        "caption": "SPINACH , PINE NUT AND RICOTTA CANNELONI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/STEAMED FISH AND JAPANESE RICE SUSHI.jpg",
        "caption": "STEAMED FISH AND JAPANESE RICE SUSHI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE.jpg",
        "caption": "THAI FISH CAKES WITH PICKLED CUCUMBER RELISH AND PLUM SAUCE.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/THALASSARI LAMB CUTLETS.jpg",
        "caption": "THALASSARI LAMB CUTLETS.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TIRAMISU.jpg",
        "caption": "TIRAMISU.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TOMATO RASAM WITH BASIL GRISSINI.jpg",
        "caption": "TOMATO RASAM WITH BASIL GRISSINI.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA.jpg",
        "caption": "TURMERIC CIABATTA AND PICKLED RAW MANGO FOCACCIA.jpg",
        "categ": "main"
    },
    {
        "src": "/images/SAVOURY/VEGETABLE DIMSUM.jpg",
        "caption": "VEGETABLE DIMSUM.jpg",
        "categ": "snacks"
    },
    {
        "src": "/images/SAVOURY/WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE.jpg",
        "caption": "WOOD FIRED QUESADILLAS WITH TOMATO SALSA , SOUR CREAM AND GUACAMOLE.jpg",
        "categ": "desert"
    }
]
  res.render('recipes', {ob:ob})
};
