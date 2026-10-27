---
title: Hubspot

permalink: platform/instructions/es/latest/Actions/hubspot

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Hubspot con la plataforma Kore.ai XO para potenciar sus conversaciones y crear/actualizar: negocios/contactos, y realizar otras acciones.

La plataforma Kore.ai XO le permite integrarse con Hubspot utilizando OAuth, lo que le permite conectar su instancia de Hubspot fácilmente. Con esta integración, puede crear negocios, actualizar contactos y realizar muchas más acciones dentro de Hubspot.


</container>

<container>

**Autorización**

Para conectarse a una cuenta de Hubspot, Kore.ai utiliza OAuth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final se autorice durante la conversación creando un perfil de autorización. Más información.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       Sí       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       Sí       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - System**

 Habilite la integración utilizando la aplicación preconfigurada de Hubspot de Kore.ai.

1. Seleccione **System**.

2. Haga clic en **Autorizar**.

3. Lo redirigirá a la página de inicio de sesión de Hubspot **app.hubspot.com**.

4. Proporcione sus credenciales para conectarse con su cuenta de Hubspot.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en **Habilitar**.


**OAuth - Custom**

 Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Hubspot de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Seleccionar autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2

   ii.  Navegue a **app.hubspot.com** e inicie sesión

   iii.  Navegue a Apps → seleccione la aplicación → Haga clic en Auth

   iv.  Copie el Client Id de Hubspot en el campo Client Id de la plataforma Kore.ai

    v.  Copie el Client secret de Hubspot en el campo Client Secret de la plataforma Kore.ai

   vi.  Copie la Authorization URL (https://app.hubspot.com/oauth/authorize)

   vii. Copie la Token URL (https://api.hubapi.com/oauth/v1/token)

   viii.  Agregue los siguientes alcances

         1. crm.objects.deals.read

         2. crm.objects.deals.write

         3. crm.objects.contacts.read

         4. Crm.objects.contacts.write

    ix. Copie la Refresh Token URL (https://api.hubapi.com/oauth/v1/token)

5. Guarde el **perfil de autorización**.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en **Autorizar**.

8. Lo redirigirá a la página de inicio de sesión de Hubspot **app.hubspot.com**.

9. Proporcione sus credenciales para conectarse con su cuenta de Hubspot.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Hubspot de Kore.ai para lo mismo.

10. Haga clic en **Habilitar**.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - System**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Hubspot de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione **System**.

2. Haga clic en **Habilitar**.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Custom**

 Puede crear su propio perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Hubspot de Kore.ai para la autorización.

1. Seleccione **Custom**.

2. Haga clic en **Seleccionar autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2

   ii.  Navegue a **app.hubspot.com** e inicie sesión

   iii.  Navegue a Apps → seleccione la aplicación → Haga clic en Auth

   iv.  Copie el Client Id de Hubspot en el campo Client Id de la plataforma Kore.ai

    v.  Copie el Client secret de Hubspot en el campo Client Secret de la plataforma Kore.ai

   vi.  Copie la Authorization URL (https://app.hubspot.com/oauth/authorize)

   vii. Copie la Token URL (https://api.hubapi.com/oauth/v1/token)

   viii.  Agregue los siguientes alcances

         1. crm.objects.deals.read

         2. crm.objects.deals.write

         3. crm.objects.contacts.read

         4. Crm.objects.contacts.write

    ix. Copie la Refresh Token URL (https://api.hubapi.com/oauth/v1/token)

5. Guarde el **perfil de autorización**.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en **Habilitar**.

</container>

<container>

**¿Qué se puede lograr integrando Hubspot CRM con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite todas las acciones comunes en Hubspot con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Deal|Agrega un nuevo acuerdo comercial|
|Get Deal By ID |Visualiza un acuerdo comercial específico por ID|
|List all Deals          |Muestra una lista de todos los acuerdos comerciales|
|Update Deal     |Edita un acuerdo comercial existente|
|Delete Deal       |Elimina un acuerdo comercial|
|Search Deal      |Encuentra un acuerdo comercial usando criterios específicos|
|Create Contact|Agrega una nueva persona o empresa a su lista de contactos|
|Get Contact By ID       |Visualiza un contacto específico|
|List all contacts      |Muestra una lista de todos los contactos|
|Update Contact |Edita un contacto existente|
|Search Contact       |Encuentra un contacto usando criterios específicos|
|Delete Contact  |Elimina un contacto de su lista|

</container>
