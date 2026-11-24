/* Menú real extraído del documento de referencia (yumgreens.docx). No inventar datos aquí. */
window.MENU_CATS=[['bowls','Bowls'],['salad','Salad bowls'],['myo','Make ur own'],['extras','Acompañamientos'],['bebidas','Bebidas']];
const P=(cat,slug,name,price,desc='',tags=[])=>({cat,name,price,desc,tags,img:`img/productos/${slug}.jpg`});
window.MENU=[
P('bowls','hulk','Bowl Hulk',85,'Pollo al jengibre. Base: Arroz al vapor. Toppings: Aguacate y elotitos. Salsa: Chipotle suave. Bebida: Agua Pura 500 ml.',['Popular','Picante']),
P('bowls','popeye','Bowl Popeye',85,'Pollo al cilantro. Base: Verduras salteadas. Toppings: Tomate cherry y garbanzos crunchy. Salsa: Cilantro. Bebida: Agua Pura 500 ml.'),
P('bowls','hercules','Bowl Hércules',85,'Chuleta a la miel. Base: Verduras salteadas. Toppings: Queso feta y elotitos. Salsa: Chipotle. Bebida: Agua Pura 500 ml.'),
P('bowls','la-roca','Bowl La Roca',94,'Tilapia al limón. Base: Ensalada Yumgreens. Toppings: Pepino y tomate cherry. Salsa: Cilantro. Bebida: Agua Pura 500 ml.'),
P('salad','popeye-salad','Popeye Salad Bowl',80,'Spring mix. Proteína: Popeye (pollo al cilantro). Toppings: Pico de gallo y elotitos. Crunchy: Pepitoria. Salsa: Vinagreta griega. Bebida: Agua Pura 500 ml.'),
P('salad','hercules-salad','Hércules Salad Bowl',80,'Lechuga mantequilla. Proteína: Hércules (chuleta a la miel). Toppings: Tomate ciruelo, cranberries y queso Parmesano. Crunchy: Manía. Salsa: Vinagreta balsámica. Bebida: Agua Pura 500 ml.'),
P('salad','rambo','Rambo Salad Bowl',89,'Arúgula. Proteína: Rambo (carne de res al chimichurri). Toppings: Queso feta y palmitos asados. Crunchy: Ajonjolí. Salsa: Vinagreta achiote. Bebida: Agua Pura 500 ml.'),
P('salad','maui','Maui Salad Bowl',100,'Acelga. Proteína: Maui (tuna tataki con costra de ajonjolí). Toppings: Aguacate y tomate cherry. Crunchy: Semillas de girasol. Salsa: Vinagreta sésamo. Bebida: Agua Pura 500 ml.'),
P('myo','myo-mediano','Bowl Make Ur Own Mediano',85,'Bowl personalizado: 1 proteína 150 gm. 1 base. 2 toppings. 1 salsa. 1 botella de agua Pura 500 ml.'),
P('myo','myo-grande','Bowl Make Ur Own Grande',99,'Bowl personalizado: 1 proteína 200 gm. 2 bases. 2 toppings. 1 salsa. 1 botella de agua Pura 500 ml.'),
P('extras','brocoli-teriyaki','Brócoli Teriyaki',25),
P('extras','camote-glaseado','Camote Glaseado',25),
P('extras','papas-salteadas','Papas Salteadas',25),
P('extras','elotes-locos','Elotes Locos Fit',25,'Producto de temporada.'),
P('bebidas','agua-500','Agua Pura 500 ml',10),
P('bebidas','agua-750','Agua Pura 750 ml',15),
P('bebidas','salutaris-naranja','Salutaris Naranja',12),
P('bebidas','salutaris-normal','Salutaris Normal',12),
P('bebidas','salutaris-toronja','Salutaris Toronja',12),
P('bebidas','hatsu-flor-cerezo','Hatsu Té Blanco - Flor de Cerezo',25),
P('bebidas','hatsu-granada-mora','Hatsu Té Blanco - Granada & Mora Azul',25),
P('bebidas','hatsu-frutos-rojos','Hatsu Té Rojo - Frutos Rojos',25),
P('bebidas','hatsu-yasu-manzanilla','Hatsu Té Verde - Yasu & Manzanilla',25),
P('bebidas','aloe-vera','Aloe Vera sin Azúcar',25),
P('bebidas','kombucha-sandia-menta','Kombucha Sandía Menta',35),
P('bebidas','kombucha-frutos-rojos','Kombucha Frutos Rojos',35),
P('bebidas','green-glow','Green Glow',20,'Agua fresca 100% natural de pepino, limón y espinaca.'),
P('bebidas','berry-boost','Berry Boost',20,'Agua fresca 100% natural de mora, limón y jengibre.'),
P('bebidas','tropical-refresh','Tropical Refresh',20,'Agua fresca 100% natural de maracuyá y sandía.')
];
