# Yumgreens — Etapa 15 (proporciones: Inicio en una sola pantalla, encabezados del Menú más bajos)

## Cambios de la Etapa 15 (sobre la Etapa 14)
- Inicio: el hero mide el alto visible de la pantalla (alto de la ventana menos la barra de navegación) y titular, texto, botones, "Pide también en" y el collage de fotos escalan con el alto y el ancho, así toda la sección se ve completa sin cortarse (probado en 1920×1000, 1440×800, 1280×680 y 390×844).
- Menú · cabecera de página ("Elige tu bowl"): ~35 % más baja (de ~690 px a ~450 px en 1440×800); abanico de fotos, título y botones de categoría más pequeños.
- Menú · encabezado de cada categoría (Bowls, Salad bowls, Make ur own, Acompañamientos, Bebidas y "Pide tu bowl"): ~40 % más bajo (de ~350 px a ~205 px); título y foto principal más pequeños, menos espacio arriba/abajo, así los productos aparecen casi de inmediato.
- Mismos colores, tipografías, imágenes y elementos decorativos. Solo cambian tamaños y espacios: bloque "Etapa 15" al final de css/styles.css.

# Yumgreens — Etapa 14 (secciones compactas, imágenes que sobresalen, hero rediseñado, menú de 2 en 2 en celular)

## Cambios de la Etapa 14 (sobre la Etapa 13)
- Secciones del Menú más compactas (menos relleno arriba/abajo, encabezados más bajos).
- Fotos decorativas de los encabezados más grandes y sobresaliendo por encima de la sección (Menú e Inicio › Bowls de la casa).
- Hero del Inicio rediseñado: título en 4 líneas con "BOWL" y "TODOS" resaltados, "HABLAN" en contorno, foto principal grande, polaroid, sello giratorio "Bowls · Salad bowls · Make ur own" y etiqueta "Desde GTQ 80". Mismos textos, botones y enlaces de pedido.
- Celular: los productos del Menú se muestran de 2 en 2 (tarjetas compactas con los mismos datos) para scrollear menos.
- Los estilos nuevos están al final de css/styles.css; el hero y `sh()` en js/view-inicio.js.

# Yumgreens — Etapa 13 (revisión responsive final)

## Cambios de la Etapa 13 (sobre la Etapa 12)
- Revisión automática en 1920, 1440, 1024, 820, 390, 360 y 320 px de Inicio, Menú, Ubicación y Contacto: sin desbordes horizontales, sin imágenes rotas, sin errores de consola.
- Textos mínimos más legibles: etiquetas Popular/Picante, etiquetas Base/Toppings/Salsa/Bebida, "GTQ" del precio, "Recomendado" y globos de la mascota (todos ≥ 13.5 px).
- Áreas táctiles de al menos 44 px en enlaces del Inicio ("Ver el menú", "Conócenos") y en los enlaces del footer.
- Estilos nuevos al final de css/styles.css.

# Yumgreens — Etapa 12 (encabezados, imágenes decorativas, categorías y textos del menú)

## Cambios de la Etapa 12 (sobre la Etapa 11)
- Encabezados de sección (`window.sh` en js/view-inicio.js): título mucho más grande, foto decorativa flotante más grande con forma propia, fondo de color, sticker giratorio y línea punteada inferior. En celular la foto va junto a la etiqueta y el título ocupa todo el ancho. Corrige además el espacio de "Bowls de la casa" (antes se leía "LACASA").
- Encabezados de página (Menú, Ubicación, Contacto): más altos, título y texto más grandes, abanico de fotos y collage más grandes, botones rápidos de categoría más grandes. En tablet/celular pasan a una columna.
- Barra de categorías (Todos, Bowls, Salad bowls, Make ur own, Acompañamientos, Bebidas): tipografía de marca más grande, botones grandes, contador de productos, estado activo marcado (lima con sombra naranja) y el botón activo se centra solo en celular.
- Tarjetas del menú: nombre más grande, descripciones y filas (Base, Toppings, Salsa, Bebida) más legibles, etiqueta de proteína y precio más grandes. Las fotos de producto NO se modificaron.
- Los estilos nuevos están al final de css/styles.css.

# Yumgreens — Etapa 11 (avance 1: "Bowls de la casa" en Inicio)

## Cambios de la Etapa 11
- Inicio › "Bowls de la casa": tarjetas más compactas (cuadrícula con ancho máximo, foto en proporción 5:4 sin deformar, textos y precio mejor repartidos). Escritorio y tablet: 3 columnas; celular: tarjetas horizontales (foto + texto) para que los bowls no dominen la sección. Botón "Ver todo el menú" centrado.
- Mismas fotos, textos, precios y botones. Solo cambian `js/view-inicio.js` (clase `fav` en la cuadrícula) y el final de `css/styles.css`.
- Pendiente de la Etapa 11: fotos, textos y categorías de la página Menú.

# Yumgreens — Etapa 10 (encabezados diseñados + fotos propias por sección)

## Cambios de la Etapa 10 (sobre la Etapa 9)
- Encabezados de sección rediseñados (`window.sh` en js/view-inicio.js): etiqueta naranja, título, subrayado ondulado, gota orgánica y foto con forma propia por categoría (círculo, arco, cuadrado redondeado, blob...).
- Cabeceras de Ubicación y Contacto: dos fotos inclinadas con sello, ola lima inferior, forma de fondo distinta en cada una y subrayado naranja en el título.
- Fotos propias en cada sección (carpeta `img/ambiente/`, tomadas del Word): local y letrero en "Nosotros", latas y póster en "Elige cómo pedir", abanico del Menú con fotos de ambiente, fotos por categoría en cada banda del Menú, local en Ubicación, póster y lata en Contacto.
- Menú: nueva franja final "Pide tu bowl" con WhatsApp, PedidosYa y Uber Eats.

## Etapa 9 (anterior)
# Yumgreens — Etapa 9 (logo y favicon, enlaces reales de pedidos, navbar con más presencia, Inicio limpio, footer)

Sitio multipágina por pestañas (#inicio, #menu, #ubicacion, #contacto; #nosotros baja a esa sección dentro de Inicio), en HTML/CSS/JS sin dependencias.

## Cómo verlo
- Abrir `index.html` con la carpeta completa, o `dist/yumgreens-sitio.html` (un solo archivo autocontenido).
- Regenerar el archivo único: `python3 tools/build_single.py dist/yumgreens-sitio.html`

## Cambios de la Etapa 9
- Logo oficial en navbar (más grande) y footer. Favicon desde el mismo logo: `favicon.ico` + `img/icons/` (16, 32, 48, apple-touch 180, 192, 512, maskable) + `site.webmanifest`.
- Enlaces reales en `js/config.js` (única fuente): WhatsApp (wa.link), Waze, Uber Eats, PedidosYa, TikTok. Sin avisos de "pendiente".
- Botones con íconos: modal de pedidos (WhatsApp primero y destacado), navbar (botón WhatsApp + Ordenar), Inicio, Ubicación (Waze), Contacto, footer y WhatsApp flotante en móvil.
- Navbar más alta, con más espacio y menú móvil con botón hamburguesa animado.
- Inicio: eliminado el texto de "10,000 personas / GRACIAS"; imágenes del hero más pequeñas (ya no se amplían de más); fila "Pide también en".
- Bebidas: fotos más grandes; las Hatsu recortadas a la botella.
- Fuentes empaquetadas en `fonts/` (ya no dependen de Google Fonts).
- El modal se cierra al cambiar de página.

## Datos tomados de los materiales de marca (verificar)
- Dirección "Plaza Nogales, zona 16" y horario "8:00 am – 8:00 pm": del gráfico oficial "Estamos abiertos" del Word. No indica días de la semana, por eso no se escriben.

## Pendiente (Etapa 10)
- Encabezados rediseñados en todas las secciones, fotografías propias por sección (ambiente, local, latas) y revisión final.

---
## Historial (Etapa 8, anterior)
Sitio multipágina por pestañas (hash: #inicio, #menu, #ubicacion, #contacto; #nosotros baja a esa sección dentro de Inicio), en HTML/CSS/JS sin dependencias (no hay red en el entorno de trabajo, así que no se pudo instalar ni probar React/Vite).

## Cómo verlo
- Abrir `index.html` en el navegador (carpeta completa), o `dist/yumgreens-sitio.html` (un solo archivo autocontenido).
- Regenerar el archivo único: `python3 tools/build_single.py dist/yumgreens-sitio.html`

## Estructura
- css/styles.css            estilos (propuesta A + sistema multipágina)
- js/config.js              DATOS A COMPLETAR: WhatsApp, PedidosYa, Uber Eats, dirección, horarios, mapa (Instagram ya: yumgreens_gt)
- js/data.js                menú real del Word (precios, descripciones, categorías)
- js/view-inicio.js         vista Inicio
- js/app.js                 router, transición, vistas Menú/otras, filtros, selector de pedidos
- img/mascota/              ensaladita ORIGINAL (recorte fiel, sin rediseño)
- img/marca/ , img/productos/  logo y 29 fotos del Word (webp)
- propuesta/*.template.html propuestas A y B (histórico); docs/ texto del Word

## Pendiente
- Enlaces reales de WhatsApp / PedidosYa / Uber Eats (los botones muestran un aviso).
- Completar js/config.js (dirección, horarios, mapa y enlaces); mientras estén vacíos las páginas muestran "Por confirmar".
- Fotos de producto ahora en JPG (antes WebP).

## Notas de las Etapas 6-7
- Movimiento: cortina entre páginas, entrada escalonada, parallax con el cursor (solo escritorio), letras de fondo con parallax al scroll, barra de progreso, mascota que salta al tocarla, cinta que se pausa al pasar el cursor. Respeta "reducir movimiento" del sistema.
- Rendimiento móvil: se desactivan el grano y algunas animaciones por debajo de 700 px.
- Probado (Chrome headless) en 390, 768, 1280 y 1920 px: sin desbordes ni errores de consola; menú móvil, pestañas y selector de pedidos funcionan.

## Notas de la Etapa 8
- Bug corregido: los títulos "Bowls" y "Acompañamientos" eran lima sobre fondo lima (invisibles). Las letras gigantes de fondo ahora caben completas.
- Cabecera del Menú reducida al tamaño de la de Ubicación.
- Texto nítido: precios (25 GTQ) ya no van rotados, text-rendering geometricPrecision, mascota en SVG (antes PNG de 340 px).
- Mascota: img/mascota/ensaladita-original.svg (vectorizada fiel) + poses nuevas saludo, salto, señalar, cintura y camina. Mismo cuerpo, cara y zapatos trazados del original; los brazos/manos se dibujaron nuevos porque el original los traía recortados.
