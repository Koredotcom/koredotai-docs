---
title: Bitly

permalink: platform/instructions/es/latest/Actions/bitly

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Bitly con la plataforma Kore.ai XO para mejorar sus conversaciones y habilitar la función de acortar URL.

</container>

<container>

**Autorización**

Para conectarse a Bitly, Kore.ai utiliza autenticación mediante API Key. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.

 |Tipo de autorización                    |API Key|
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando la API Key necesaria.

**Pasos para obtener la API Key**

1. Cree una cuenta en Bitly https://bitly.com/

2. Inicie sesión en Bitly y navegue a la página "Your Connections Platform".

3. Desde el menú de navegación izquierdo, seleccione "Settings" para navegar a la página "Your Settings".

4. Seleccione la opción "API" disponible en "Developer Settings" y navegue a la página de API.

5. Ingrese la contraseña de su cuenta de Bitly en el campo "Enter Password" que se muestra en la sección "Access Token" y haga clic en el botón "Generate Token".

6. Copie el token de acceso generado y proporciónelo en la pestaña de autorización de esta página.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

1. Seleccione Todos los usuarios para autorizar la integración.
2. Haga clic en Seleccionar autorización.
3. Seleccione Crear nuevo.
4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key.

   ii.  Proporcione un nombre para el perfil de autorización.

   iii.  Guarde el perfil de autorización.
 6.  Haga clic en Habilitar.

 </container>

 <container>

**¿Qué se puede lograr integrando Bitly con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Bitly con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Shorten URL     |Acorta cualquier URL larga y devuelve la versión corta de la misma|

</container>
