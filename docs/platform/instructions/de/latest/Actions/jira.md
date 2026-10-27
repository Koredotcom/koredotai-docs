---
title: Jira

permalink: platform/instructions/es/latest/Actions/jira

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Jira con la plataforma Kore.ai XO para mejorar sus conversaciones y habilitar la creación, eliminación y actualización de incidencias y muchas más acciones.

La plataforma Kore.ai XO le permite integrarse con Jira usando OAuth, lo que le permite conectar fácilmente su instancia de Jira. Con esta integración, puede crear, actualizar y realizar más acciones en los diversos objetos dentro de Jira.


</container>

<container>

**Autorización**

Para conectarse a una cuenta de Jira, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. Más información.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       Sí       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       Sí       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Sistema**

 Habilite la integración utilizando la aplicación preconfigurada de Jira de Kore.ai.

1. Seleccione Sistema.

2. Haga clic en Autorizar.

3. Se le redirigirá a la página de inicio de sesión de Jira.

4. Proporcione sus credenciales para conectarse con su cuenta de Jira.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Habilitar.


**OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Jira de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.  Navegue a https://developer.atlassian.com/ e inicie sesión.

   iii. Cree una aplicación y navegue a la configuración de la aplicación.

   iv.  Copie el ClientId de la aplicación y péguelo en el campo ClientId de la plataforma Kore.ai.

   v.   Copie el Client secret de la aplicación y péguelo en el campo Client Secret de la plataforma Kore.ai.

   vi.  Navegue a la pestaña Authorization en la aplicación, haga clic en Configure, copie la URL de callback de la plataforma Kore.ai y péguela en la Callback URL de la aplicación
        JIRA.

   vii. Haga clic en "Add APIS" en su aplicación que se muestra en "Authorization URL generator" y navegue a la pantalla de permisos.

   viii. Agregue la "JIRA API" y haga clic en Configure "JIRA API" para navegar a la pantalla de alcances.

   ix. Haga clic en Edit Scopes para "Jira platform REST API", seleccione todos los alcances y guárdelo.

   x. Copie la Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com) y péguela en el campo Authorization URL de la plataforma Kore.ai.

   xi. Copie la Token URL (https://auth.atlassian.com/oauth/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

6. Guarde el perfil de autorización.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en Autorizar.

9. Se le redirigirá a la página de inicio de sesión de Jira.

10. Proporcione sus credenciales para conectarse con su cuenta de Jira.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Jira de Kore.ai para lo mismo.

11. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - Sistema**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Jira de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione Sistema.

2. Haga clic en Habilitar.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Salesforce de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.  Navegue a https://developer.atlassian.com/ e inicie sesión.

   iii. Cree una aplicación y navegue a la configuración de la aplicación.

   iv.  Copie el ClientId de la aplicación y péguelo en el campo ClientId de la plataforma Kore.ai.

   v.   Copie el Client secret de la aplicación y péguelo en el campo Client Secret de la plataforma Kore.ai.

   vi.  Navegue a la pestaña Authorization en la aplicación, haga clic en Configure, copie la URL de callback de la plataforma Kore.ai y péguela en la Callback URL de la aplicación
        JIRA.

   vii. Haga clic en "Add APIS" en su aplicación que se muestra en "Authorization URL generator" y navegue a la pantalla de permisos.

   viii. Agregue la "JIRA API" y haga clic en Configure "JIRA API" para navegar a la pantalla de alcances.

   ix. Haga clic en Edit Scopes para "Jira platform REST API", seleccione todos los alcances y guárdelo.

   x. Copie la Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com) y péguela en el campo Authorization URL de la plataforma Kore.ai.

   xi. Copie la Token URL (https://auth.atlassian.com/oauth/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

6. Guarde el perfil de autorización.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Jira con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Jira con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Crear incidencia        |Agregar una nueva incidencia al sistema|
|Actualizar incidencia       |Modificar una incidencia existente|
|Eliminar incidencia     |Eliminar una incidencia del sistema|
|Obtener todas las incidencias      |Mostrar una lista de todas las incidencias en el sistema|
|Obtener incidencia por clave       |Recuperar una incidencia usando su clave única|

</container>


