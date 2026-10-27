---
title: Zendesk

permalink: platform/instructions/es/latest/Actions/zendesk

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Zendesk con la plataforma Kore.ai XO para potenciar sus conversaciones y crear tickets/actualizar tickets y otras acciones.

La plataforma Kore.ai XO le permite integrarse con Zendesk utilizando Basic Auth, permitiéndole conectar su instancia de Zendesk fácilmente. Con esta integración, puede crear, actualizar y realizar más acciones dentro de Zendesk.

</container>

<container>

**Autorización**

Para conectarse a la cuenta de Zendesk de un cliente, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic | OAuth - System | OAuth - Custom |
 |----------------------------------------|-------|----------------|----------------|
 |Preautorizar la integración             |  Sí   |  Sí       |       Sí       |
 |Permitir a los usuarios autorizar la integración|  Sí   |  Sí       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el subdominio, el correo electrónico del usuario y el API Token para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Zendesk.

   a. Encontrará su dominio de Zendesk en la barra de direcciones de su navegador.

        i. Ejemplo: https://<domain>.zendesk.com

       ii. Copie la URL desde aquí al campo User Domain en la plataforma Kore.ai XO.

   b. Correo electrónico del usuario

        i. Utilice el correo electrónico que usa para iniciar sesión en la instancia de Zendesk

   c. API Token

        i. Copie el API Token disponible en el centro de administración en Apps & Integrations → Zendesk API → Settings en la plataforma Kore.ai XO.


 **OAuth - System**

 Habilite la integración utilizando la aplicación preconfigurada de Zendesk de Kore.ai.

1. Seleccione System.

2. Haga clic en Authorize.

3. Se le redirigirá a la página de inicio de sesión de Zendesk.

4. Proporcione su subdominio y credenciales para conectarse con su cuenta de Zendesk.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Enable.

**OAuth - Custom**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Zendesk de Kore.ai para la autorización.

1. Seleccione Custom.
2. Haga clic en Select Authorization.
3. Seleccione Create New.
4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.  Proporcione un nombre para su perfil de autorización.

   iii. Inicie sesión en la consola de administración de Zendesk, navegue a Apps & Integrations -> Zendesk API -> OAuth Clients

    iv. Agregue un nuevo OAuth Client y guarde.
        Verá el Client Secret generado.

     v. Copie el Client Name de Zendesk en el campo Client ID en la plataforma Kore.ai XO

    vi. Copie el Client Secret de Zendesk en el campo Client Secret en la plataforma Kore.ai.

   vii. Copie la Authorization URL (https://{subdomain}.zendesk.com/oauth/authorizations/new).
        Reemplace subdomain con el subdominio de su instancia de Zendesk.

   viii.Copie la Token URL (https://{subdomain}.zendesk.com/oauth/tokens).
        Reemplace subdomain con el subdominio de su instancia de Zendesk.

     ix.Alcances: Puede solicitar acceso de lectura, escritura o suplantación a todos los recursos o a recursos específicos.
        Consulte https://support.zendesk.com/hc/en-us/articles/4408845965210#topic_pbc_cdl_1l.

5. Guarde el perfil de autorización.
6. Seleccione el perfil de autorización creado para completar la integración.
7. Haga clic en Authorize.
8. Se le redirigirá a la página de inicio de sesión de Zendesk.
9. Proporcione sus credenciales para conectarse con su cuenta de Zendesk.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está usando la aplicación de Zendesk de Kore.ai para lo mismo.
10. Haga clic en Enable.

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

**OAuth - System**

 Habilite la integración utilizando la aplicación preconfigurada de Zendesk de Kore.ai.

1. Seleccione System.

2. Haga clic en Enable.

**OAuth - Custom**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin usar la aplicación de Zendesk de Kore.ai para la autorización.

1. Seleccione Custom.

2. Haga clic en Select Authorization.

3. Seleccione Create New.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione oAuth v2.

   ii.  Proporcione un nombre para su perfil de autorización.

   iii.  Inicie sesión en la consola de administración de Zendesk, navegue a Apps & Integrations -> Zendesk API -> OAuth Clients

   iv.  Agregue un nuevo OAuth Client y guarde. Verá el Client Secret generado.

   v.  Copie el Client Name de Zendesk en el campo Client ID en la plataforma Kore.ai XO

   vi.  Copie el Client Secret de Zendesk en el campo Client Secret en la plataforma Kore.ai.

   vii.  Copie la Authorization URL (https://{subdomain}.zendesk.com/oauth/authorizations/new).
         Reemplace subdomain con el subdominio de su instancia de Zendesk.

   viii.  Copie la Token URL (https://{subdomain}.zendesk.com/oauth/tokens).
          Reemplace subdomain con el subdominio de su instancia de Zendesk.

   ix.  Alcances: Puede solicitar acceso de lectura, escritura o suplantación a todos los recursos o a recursos específicos.
        Consulte [https://support.zendesk.com/hc/en-us/articles/4408845965210#topic_pbc_cdl_1l](https://support.zendesk.com/hc/en-us/articles/4408845965210#topic_pbc_cdl_1l)

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Enable.

</container>

<container>

**¿Qué se puede lograr integrando Zendesk con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de Zendesk con plantillas de diálogo predefinidas listas para usar. Haga clic en Explorar plantillas. Más información.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Crear ticket     |Crear un nuevo ticket ingresando el título, la descripción y la prioridad de su ticket.|
|Actualizar ticket     |Actualizar el estado, la prioridad, la descripción y el título de su ticket de Zendesk.|
|Ver ticket por ID |Ver uno o varios tickets ingresando el/los ID(s) de ticket.|
|Listar todos los tickets  |Muestra todos sus tickets.|
|Buscar ticket     |Busca todos los tickets que coincidan con su palabra clave.|
|Eliminar ticket     |Le permite eliminar un ticket.|

</container>
