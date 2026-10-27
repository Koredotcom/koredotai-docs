---
title: Microsoft Graph

permalink: platform/instructions/es/latest/Actions/microsoftGraph

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Microsoft Graph con la plataforma Kore.ai XO para mejorar sus conversaciones y habilitar la creación de eventos y listas.


</container>

<container>

**Autorización**

Para conectarse a una cuenta de Microsoft Graph, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. Más información.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       Sí       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       Sí       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Sistema**

 Habilite la integración utilizando la aplicación preconfigurada de Microsoft Graph de Kore.ai.

1. Seleccione Sistema.

2. Haga clic en Autorizar.

3. Se le redirigirá a la página de inicio de sesión de Microsoft Graph.

4. Proporcione sus credenciales para conectarse con su cuenta de Microsoft Graph.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Habilitar.


**OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Microsoft Graph de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

    i.   Seleccione oAuth v2.

    ii.  Navegue a https://portal.azure.com e inicie sesión.

    iii. Navegue a Azure Directory → Manage → App Registrations → Select App.

    iv.  Copie el Client Id de Microsoft Graph en el campo Client Id de la plataforma Kore.ai.

     v.  Copie el Secret Id de Microsoft Graph en el campo Client Secret de la plataforma Kore.ai.

    vi.  Copie la Authorization URL (https://login.microsoftonline.com/common/oauth2/v2.0/authorize).

   vii.  Copie la Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).

   viii.  Agregue los siguientes alcances

       1. email

       2. Mail.ReadWrite

       3. Mail.Send

       4. offline_access

       5. openid

       6. profile

       7. User.Read

       8. Tasks.ReadWrite

       9. Calendars.ReadWrite

       10. MailboxSettings.Read

     ix.  Copie la Refresh Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Autorizar.

8. Se le redirigirá a la página de inicio de sesión de Microsoft Graph.

9. Proporcione sus credenciales para conectarse con su cuenta de Microsoft Graph.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Microsoft Graph de Kore.ai para lo mismo.

10. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - Sistema**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Microsoft Graph de Kore.ai acceda a un token de acceso en tiempo de ejecución.

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

    ii.  Navegue a https://portal.azure.com e inicie sesión.

    iii. Navegue a Azure Directory → Manage → App Registrations → Select App.

    iv.  Copie el Client Id de Microsoft Graph en el campo Client Id de la plataforma Kore.ai.

     v.  Copie el Secret Id de Microsoft Graph en el campo Client Secret de la plataforma Kore.ai.

    vi.  Copie la Authorization URL (https://login.microsoftonline.com/common/oauth2/v2.0/authorize).

   vii.  Copie la Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).

   viii.  Agregue los siguientes alcances

       1. email

       2. Mail.ReadWrite

       3. Mail.Send

       4. offline_access

       5. openid

       6. profile

       7. User.Read

       8. Tasks.ReadWrite

       9. Calendars.ReadWrite

       10. MailboxSettings.Read

     ix.  Copie la Refresh Token URL (https://login.microsoftonline.com/common/oauth2/v2.0/token).

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

6. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Microsoft Graph con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Microsoft Graph con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|List All Events   |Recupera una lista de todos los eventos del calendario de un usuario|
|List All To do Lists |Recupera una lista de todas las listas de tareas pendientes de la cuenta Microsoft To-Do de un usuario|
|Create a To do List  |Crea una nueva lista de tareas pendientes en la cuenta Microsoft To-Do de un usuario|
|Create an Event     |Crea un nuevo evento en el calendario de un usuario|
|Send a Mail       |Envía un correo electrónico desde la cuenta de un usuario|

</container>
