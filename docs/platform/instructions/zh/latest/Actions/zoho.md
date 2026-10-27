---
title: Zoho CRM

permalink: platform/instructions/es/latest/Actions/zoho

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Zoho CRM con la plataforma Kore.ai XO para mejorar sus conversaciones y habilitar la creación de prospectos, oportunidades y otras funciones.

</container>

<container>

**Autorización**


Para conectarse a Zoho CRM, Kore.ai utiliza autenticación OAuth. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. [Más información](https://www.zoho.com/crm/developer/docs/api/v5/).



 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       No       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       No       |       Sí       |



**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Custom**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Zoho de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Select Authorization**.

3. Seleccione **Create New**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione OAuth v2

   ii.  Navegue a **api-console.zoho.com** e inicie sesión

   iii.  Navegue a Apps → seleccione la aplicación → Haga clic en Auth

   iv.  Copie el Client Id de Zoho en el Client Id de la plataforma Kore.ai

    v.  Copie el Client Secret de Zoho en el Client Secret de la plataforma Kore.ai

   vi.  Copie la Authorization URL (https://accounts.zoho.com/oauth/v2/auth)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para generar el token de acceso. A continuación se muestran los distintos dominios y sus URLs de cuentas correspondientes.

     - Para US: https://accounts.zoho.com
     - Para AU: https://accounts.zoho.com.au
     - Para EU: https://accounts.zoho.eu
     - Para IN: https://accounts.zoho.in
     - Para CN: https://accounts.zoho.com.cn
     - Para JP: https://accounts.zoho.jp
     - Para CA (Canadá): https://accounts.zohocloud.ca

   vii. Copie la Token URL (https://accounts.zoho.in/oauth/v2/token)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para generar el token de actualización. Consulte **vi**

    viii.  Agregue los siguientes alcances

         1. ZohoCRM.modules.leads.ALL

    ix. Copie la Refresh Token URL (https://accounts.zoho.in/oauth/v2/token)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para actualizar su token de acceso. Consulte **vi**

6. Guarde el **perfil de autorización**.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en **Authorize**.

9. Se le redirigirá a la página de inicio de sesión de Zoho **accounts.zoho.com**.

10. Proporcione sus credenciales para conectarse con su cuenta de Zoho.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está usando la aplicación de Zoho de Kore.ai para lo mismo.

11. Haga clic en **Enable**.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

 **OAuth - Custom**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Zoho de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Select Authorization**.

3. Seleccione **Create New**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione OAuth v2

   ii.  Navegue a **api-console.zoho.com** e inicie sesión

   iii.  Navegue a Apps → seleccione la aplicación → Haga clic en Auth

   iv.  Copie el Client Id de Zoho en el Client Id de la plataforma Kore.ai

    v.  Copie el Client Secret de Zoho en el Client Secret de la plataforma Kore.ai

    vi.  Copie la Authorization URL (https://accounts.zoho.com/oauth/v2/auth)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para generar el token de acceso. A continuación se muestran los distintos dominios y sus URLs de cuentas correspondientes.

     - Para US: https://accounts.zoho.com
     - Para AU: https://accounts.zoho.com.au
     - Para EU: https://accounts.zoho.eu
     - Para IN: https://accounts.zoho.in
     - Para CN: https://accounts.zoho.com.cn
     - Para JP: https://accounts.zoho.jp
     - Para CA (Canadá): https://accounts.zohocloud.ca

   vii. Copie la Token URL (https://accounts.zoho.in/oauth/v2/token)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para generar el token de actualización. Consulte **vi**

    viii.  Agregue los siguientes alcances

         1. ZohoCRM.modules.leads.ALL

    ix. Copie la Refresh Token URL (https://accounts.zoho.in/oauth/v2/token)

      Debe usar la URL de cuentas de Zoho específica de su dominio como se menciona para actualizar su token de acceso. Consulte **vi**

6. Guarde el **perfil de autorización**.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en **Enable**.


| Acción           | Descripción            |
|------------------|------------------------|
|Crear prospecto     |Agregar un nuevo prospecto a Zoho CRM|
|Actualizar prospecto     |Modificar un prospecto existente|
|Obtener todos los prospectos     |Mostrar una lista de todos los prospectos|
|Obtener prospecto por ID     |Recuperar un prospecto por su ID único|
|Obtener prospecto por teléfono o correo electrónico     |Recuperar un prospecto por su ID único|


</container>
