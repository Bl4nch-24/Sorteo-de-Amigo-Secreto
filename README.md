<h1 align="center"> Sorteo </h1>

![1](https://github.com/user-attachments/assets/364faef4-d854-42b4-95d4-1582294eb834)

## Descripción

Se desarrolla una aplicación que permite a los usuarios ingresar nombres de amigos en una lista para despues realizar un sorteo aleatorio y determinar quien es el "Amigo Secreto".


## Funcionalidades del proyecto

- `Agregar nombres`: Los usuarios describirán el nombre de un amigo en un campo de texto y lo agregarán en una lista visible al hacer clic en "Adicional".

- `Validar entrada`: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

- `Visualizar la lista`: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

- `Sorteo aleatorio`: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


![2](https://github.com/user-attachments/assets/2af4e0a9-d423-4438-92a8-173007d3e2c4)   

![6](https://github.com/user-attachments/assets/48a3b73b-7d72-43e8-a939-6f4712a57111)


## 📁 Acceso al código del proyecto

\## Crea una array para almacenar los nombres


![3](https://github.com/user-attachments/assets/a1bd465f-bfe0-4816-b182-990f118c8ce0)


\## Implementa una función para agregar amigos 

-`Captura el valor del campor de entrada`: Usa `document.getElementByID` o `document.querySelector`.

-`Valida la entrada`: Implementa una validación para asegurar que el campo no esté vacío, en caso lo esté mostrar el mensaje `"Por favor, inserte un nombre"`.

-`Actualiza la entrada de amigos`: Si el valor es válido, añadirlo al arreglo que almacena los nombres usando `.push()`.

-`Limpiar el campo de entrada`: Despues de añadir el nombre establece el campo del texto que este vacio.


![4](https://github.com/user-attachments/assets/e1068dd8-4463-4b92-99a8-a896c07cc81f)



\## Implementa una función para sortear amigos

- `Valida que haya amigos disponibles`: Antes de sortear, comprueba si el array `amigos` no está vacio.
  
- `Genera un índice aleatorio`: Usar `Math.random()` y `Math.floor()`para seleccionar un índice aleatorio.
  
- `Obtener el nombre sorteado`: Utiliza el índice aleatorio para acceder al nonbre correspondiente en el arreglo.
  
- `Mostrar el resultado`: Actualiza el contenido del elemento de resultado utilizando `document.getElementByID()` e `innerHTML` para mostrar el amigo sorteado.

![5](https://github.com/user-attachments/assets/a16dda64-ee77-4e85-9eeb-e352b15d3ece)


## Autores

|![8](https://github.com/user-attachments/assets/a6237c4a-6f03-4715-b781-7e7b3179df41)

<sub>Blanca Villanueva</sub>



