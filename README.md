# SEO CV

Modificación de fantastiCV para optimizarla de cara al SEO.


## Consideraciones

- El title se ha cambiado a el nombre del personaje, la etiqueta alternativa es otro nombre que puede tener el personaje.

- Se han juntado en un archivo los estilos y en otro los scripts.

- Para el menu de navegacion. Se unifica en uno para mobile y desktop, se utiliza la etiqueta `i` para diferenciar los iconos del texto descriptivo que está entre `span`.

- De forma general, cada una de las secciones contiene un `header`, donde se ubica el banner con nombre de cada sección, y un `div` con el contenido de la sección a efectos de manejar los estilos.

- Todas las etiquetas `div` que anteriormente envolvían a imágenes o vídeo se han cambiado por `figure`. Además en aquellas que no eran logos se les ha añadido un `figcaption`

- El footer ha pasado a listarse como 3 elementos `li` (imagen e iconos a enlaces externos).


Herramientas utilizadas:

- Herramienta de pruebas de datos estructurados de Google (https://search.google.com/structured-data/testing-tool)

- Plugin para chrome de headingsMap (https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)