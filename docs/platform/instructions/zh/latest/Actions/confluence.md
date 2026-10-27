---
title: Confluence

permalink: platform/instructions/es/latest/Actions/confluence

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Confluence con la plataforma Kore.ai XO para mejorar sus conversaciones y recuperar todas las páginas de un espacio especificado en Confluence.

La plataforma Kore.ai XO le permite integrarse con Confluence usando OAuth, permitiéndole conectar fácilmente su instancia de Confluence. Con esta integración.
</container>

<container>

**Autorización**

Para conectarse a una cuenta de Confluence, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|-----------------|---------------|
 |Preautorizar la integración                  |  Sí        | Sí  |
 |Permitir a los usuarios autorizar la integración   |  Sí        | Sí  |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - System**

 Habilite la integración usando la aplicación de Confluence preconfigurada de Kore.ai.

1. Seleccione System.

2. Haga clic en Autorizar.

3. Será redirigido a la página de inicio de sesión de Confluence.

4. Proporcione sus credenciales para conectarse con su cuenta de Confluence. Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5.  Haga clic en Habilitar.

 **OAuth - Custom**

Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Confluence de Kore.ai para la autorización.

 1. Seleccione System.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.   Navegue a https://auth.atlassian.com/ e inicie sesión.

   iii.  Navegue a Settings

   iv.   Copie el Client Id de Confluence en el campo Client Id de la plataforma Kore.ai.

   v.   Copie el Client secret de Confluence en el campo Client Secret de la plataforma Kore.ai.

   vi.   Copie la Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com).

   vii.  Copie la Token URL (https://auth.atlassian.com/oauth/token).

   viii. Copie la Refresh Token URL (https://auth.atlassian.com/oauth/token).

5.  Guarde el perfil de autorización.

 6. Seleccione el perfil de autorización creado para completar la integración.

 7. Haga clic en Autorizar.
 8. Será redirigido a la página de inicio de sesión de Confluence.
 9. Proporcione sus credenciales para conectarse con su cuenta de Confluence. Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está usando la aplicación de Confluence de Kore.ai para lo mismo.
 10. Haga clic en Habilitar.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

**OAuth - System**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Confluence de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione System.

2. Haga clic en Habilitar.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Custom**

 Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Salesforce de Kore.ai para la autorización.

1. Seleccione Custom.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.   Navegue a https://auth.atlassian.com/ e inicie sesión.

   iii.  Navegue a Settings

   iv.   Copie el Client Id de Confluence en el campo Client Id de la plataforma Kore.ai.

    v.   Copie el Client secret de Confluence en el campo Client Secret de la plataforma Kore.ai.

   vi.   Copie la Authorization URL (https://auth.atlassian.com/authorize?audience=api.atlassian.com).

   vii.  Copie la Token URL (https://auth.atlassian.com/oauth/token).

   viii.   Copie la Refresh Token URL (https://auth.atlassian.com/oauth/token).

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Confluence con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Confluence con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Content    |Crea contenido en el espacio de Confluence.|

</container>
