---
title: GoHighLevel

permalink: platform/instructions/es/latest/Actions/goHighLevel

---

<base target="_blank">
<container>

**Descripción general**

Conecte su cuenta de GoHighLevel con la plataforma Kore.ai XO para automatizar la gestión de contactos dentro de las conversaciones. Utilice OAuth personalizado para habilitar una integración segura y fluida para recuperar y actualizar datos de contactos.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de HighLevel, Kore.ai utiliza OAuth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final se autorice durante la conversación creando un perfil de autorización. [Más información](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview)

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       No       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       No       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Custom**

 Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de HighLevel de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Seleccionar autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2

   ii.  Navegue a **marketplace.gohighlevel.com** e inicie sesión

   iii.  Navegue a My Apps → seleccione la aplicación → seleccione Advanced Settings → Haga clic en Auth

   iv.  Copie el Client Id de HighLevel en el campo Client Id de la plataforma Kore.ai

    v.  Copie el Client secret de HighLevel en el campo Client Secret de la plataforma Kore.ai

   vi.  Copie la Authorization URL (https://marketplace.leadconnectorhq.com/oauth/chooselocation)

   vii. Copie la Token URL (https://services.leadconnectorhq.com/oauth/token)

   viii.  Agregue los siguientes alcances

         1. contacts.readonly

         2. contacts.write

    ix. Copie la Refresh Token URL (https://services.leadconnectorhq.com/oauth/token)

     x. Agregue campos de autorización con tipo de campo **Querystring** y **Payload**, clave de campo como **locationId** y el valor de locationId en el valor del campo (elimine el Querystring de locationId del campo de autorización al usar la acción 'Update Contact').

6. Guarde el **perfil de autorización**.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en **Autorizar**.

9. Lo redirigirá a la página de inicio de sesión de HighLevel **https://marketplace.leadconnectorhq.com/oauth/chooselocation**.

10. Proporcione sus credenciales para conectarse con su cuenta de HighLevel.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de HighLevel de Kore.ai para lo mismo.

11. Haga clic en **Habilitar**.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

 **OAuth - Custom**

 Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de HighLevel de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Seleccionar autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2

   ii.  Navegue a **marketplace.gohighlevel.com** e inicie sesión

   iii.  Navegue a My Apps → seleccione la aplicación → seleccione Advanced Settings → Haga clic en Auth

   iv.  Copie el Client Id de HighLevel en el campo Client Id de la plataforma Kore.ai

    v.  Copie el Client secret de HighLevel en el campo Client Secret de la plataforma Kore.ai

   vi.  Copie la Authorization URL (https://marketplace.leadconnectorhq.com/oauth/chooselocation)

   vii. Copie la Token URL (https://services.leadconnectorhq.com/oauth/token)

   viii.  Agregue los siguientes alcances

         1. contacts.readonly

         2. contacts.write

    ix. Copie la Refresh Token URL (https://services.leadconnectorhq.com/oauth/token)

     x. Agregue campos de autorización con tipo de campo **Querystring** y **Payload**, clave de campo como **locationId** y el valor de locationId en el valor del campo (elimine el Querystring de locationId del campo de autorización al usar la acción 'Update Contact').

6. Guarde el **perfil de autorización**.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en **Habilitar**.

</container>
