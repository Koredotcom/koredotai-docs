---
title: Service Now

permalink: platform/instructions/es/latest/Actions/serviceNow

---

<base target="_blank">
<container>

**Descripción general**

Conecte ServiceNow para gestionar tickets y solicitudes y realizar otras acciones diversas.

La plataforma Kore.ai XO le permite integrarse con Service Now, permitiéndole conectar fácilmente su instancia de Service Now. Esta integración le permite realizar acciones sobre tickets (incidentes) y solicitudes, incluyendo la creación, actualización y cierre de los mismos. Garantiza que pueda gestionar estos elementos de manera efectiva.

</container>

<container>

**Autorización**

Para conectarse a la cuenta de Service Now de un cliente, Kore.ai utiliza autenticación básica. El usuario puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el subdominio, nombre de usuario y contraseña para autorizar la integración.

2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de desarrollador de Service Now.

    i.    Para obtener los detalles requeridos, navegue a https://developer.servicenow.com/dev.do#!/home.

   ii.    Se mostrará una página con el botón Request Instance (si no se ha creado una instancia para usted).

   iii.   Haga clic en Request Instance.

    iv.   Copie la URL de la instancia aquí en el campo User Subdomain en la plataforma Kore.ai XO.

     v.   Copie el nombre de usuario y la contraseña en sus respectivos campos en la plataforma Kore.ai XO.

     vi.  Haga clic en Enable.

 ![gif](/koredotai-docs/images/Home%20_%20Loom%20-%2019%20December%202022.gif)

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione All Users to Authorize the Integration.

2. Haga clic en Select Authorization.

3. Seleccione Create New.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione Basic Auth.

   ii.  Proporcione un nombre para el perfil de autorización.

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Enable.

 </container>

 <container>

**¿Qué se puede lograr integrando Service Now con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de solicitudes y tickets de Service Now con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Incident   |Agregar un nuevo incidente al sistema|
|Update Incident   |Modificar un incidente existente|
|Find Incident     |Buscar un incidente utilizando criterios de búsqueda específicos|
|Delete Incident   |Eliminar un incidente del sistema|
|List All Incidents|Mostrar una lista de todos los incidentes en el sistema|
|Set Caller of Reported/Created Incident|Establecer el solicitante de un incidente que ha sido reportado o creado|
|Create Request    |Agregar una nueva solicitud al sistema|
|Update Request    |Modificar una solicitud existente|
|Find Request      |Buscar una solicitud utilizando criterios de búsqueda específicos|
|Delete Request    |Eliminar una solicitud del sistema|
|Find All Requests |Mostrar una lista de todas las solicitudes en el sistema|

</container>
