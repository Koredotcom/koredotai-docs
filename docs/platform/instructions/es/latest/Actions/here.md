---
title: Here

permalink: platform/instructions/es/latest/Actions/here

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite integrarse con Here y mostrar detalles de ubicación.

</container>

<container>

**Autorización**

Para conectarse a Here, Kore.ai utiliza autenticación mediante API Key. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    |API Key|
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando la API Key necesaria.

**Pasos para obtener la API Key**

1. Cree una cuenta en el Portal de Desarrolladores de Here en https://developer.here.com/
2. Inicie sesión en el portal de desarrolladores de Here, navegue al menú Launcher y seleccione Access Manager.
3. En la página de Access Manager, seleccione la sección "Apps" para navegar a la página de aplicaciones.
4. Haga clic en Register New App para crear una nueva aplicación.
5. Proporcione el nombre de la aplicación y la descripción. Luego, elija el proyecto relevante del menú desplegable para el cual se necesita otorgar acceso y haga clic en Register.
6. Será redirigido a la pantalla de detalles de la aplicación tras el registro exitoso de la misma.
7. Navegue a la pestaña Credentials y seleccione la opción etiquetada "API keys". Desde allí, haga clic en "Create API Key".
8. Copie la API Key generada y proporciónela en la pestaña de autorización de esta página.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key

   ii.  Proporcione un nombre para el perfil de autorización.

   iii.  Guarde el perfil de autorización.

 5.  Haga clic en Habilitar.

 </container>

 <container>

**¿Qué se puede lograr integrando Here con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Here con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Get Location     |Obtiene la geolocalización actual mediante texto libre|

</container>
