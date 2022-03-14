# Proyecto Final Curso React.JS - CoderHouse

Este es mi Proyecto Final para el curso de React JS de CoderHouse. Se trata de una tienda E-commerce de remeras de bandas de rock.

La navegavilidad de este sitio permite entrar a una página principal:
![screencapture-localhost-3000-2022-03-11-21_09_52](https://user-images.githubusercontent.com/84106998/157994457-b62dc865-91ee-4d18-a746-788f53c2d653.png)


Luego, se puede acceder a una opción de filtrado de prodcutos por categoría, eligiendo entre Men, Women y un filtro por artista (por ejemplo, si se selecciona la opción "Queen" son mostrarán las remreras de esa banda tanto para hombre como para mujer):
![screencapture-localhost-3000-artist-Queen-2022-03-11-21_16_35](https://user-images.githubusercontent.com/84106998/157994754-623c656d-4bee-486a-8b2d-bc679ec0b6d4.jpeg)

Una vez que accedemos a la vista de detalle, se puede elegir la cantidad por cada prodcuto (cada item tiene su stock individualizado). Ademas de elegir talle y color (esta no es una opción generada en la BBDD, sino que se asigna de manera genérica en el código, a los fines estéticos y funcionales del sitio):
![screencapture-localhost-3000-items-item-r8TgPgUKN1QdWHU52ztP-2022-03-11-21_20_21](https://user-images.githubusercontent.com/84106998/157994955-2950794f-343d-4a99-8d1f-a1c78b40c5cd.jpeg)

Finalmente, una vez confirmada la compra, se accede a un CheckOut, donde seleccionamos el medio de pago, podemos adicionar el gasto de envío (esto modifica el precio final en tiempo real) y, finalmente, accedemos al formulario de envío para obtener el código de compra:
![screencapture-localhost-3000-cart-2022-03-11-21_19_13](https://user-images.githubusercontent.com/84106998/157994887-95f06d97-f921-450c-9eb3-3e55c3a0aace.jpeg)

La BBDD esta alojada en Firestore. Además, se utilizaron librerias de codigo abierto para el desarrollo de esta aplicación como lo son Bootstrap y MUI Material. También se acude a SweetAlert2 para generar un determinado Alert.

El siguiente GIF ejemplifica rápidamente una simulación de compra:

![GIF_ProyectoFinal](https://user-images.githubusercontent.com/84106998/158276372-1ed071e7-93c6-4321-96bc-63efd6f30e25.gif)

