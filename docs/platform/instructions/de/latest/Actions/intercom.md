---
title: Intercom

permalink: platform/instructions/es/latest/Actions/intercom

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Intercom con la plataforma Kore.ai XO para automatizar tareas de Intercom dentro de su flujo de diálogo. Automatice la creación y recuperación de acciones de tickets dentro de las conversaciones con los usuarios.

La plataforma Kore.ai XO le permite conectarse con Intercom de forma rápida y sencilla utilizando OAuth2.


</container>

<container>

**Autorización**

Para conectar una cuenta de Intercom, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       No       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       No       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Sistema**

 Habilite la integración utilizando la aplicación preconfigurada de Intercom de Kore.ai.

1. Seleccione Sistema.

2. Haga clic en Autorizar.

3. Se le redirigirá a la página de inicio de sesión de Intercom.

4. Proporcione sus credenciales para conectarse con su cuenta de Intercom.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Habilitar.


**OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Intercom de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.  Navegue a https://app.intercom.com/a/apps/gv65iihh/developer-hub e inicie sesión.

   iii. Cree una aplicación navegando a la tienda de aplicaciones en la barra lateral izquierda, seleccione crear su propia aplicación. Luego haga clic en "Developer Hub" en el encabezado y haga clic en "New App".

   iv.  Copie el ClientId de la aplicación en la pestaña "Basic information" y péguelo en el campo ClientId de la plataforma Kore.ai.

   v.   Copie el Client secret de la aplicación en la pestaña "Basic information" y péguelo en el campo Client Secret de la plataforma Kore.ai.

   vi.  Navegue a la pestaña Authentication en la aplicación, haga clic en "Edit" en la esquina superior derecha. Habilite el modo OAuth marcando la casilla "Use OAuth".

   vii. Copie la URL de callback de la plataforma Kore.ai, agréguela y péguela en la Redirect URL de Intercom.

   viii. Todos los alcances se agregan de forma predeterminada. Luego guarde los detalles de autenticación en la esquina superior derecha de la página.

   ix. Copie la URL de autorización (https://app.intercom.com/oauth?client_id=****&state=****) y péguela en el campo Authorization URL de la plataforma Kore.ai.

   x. Asegúrese de insertar su client id y una frase aleatoria para el state [Ej: abc, xyz, etc....] en la Auth URL.

5. Copie la Token Request URL (https://api.intercom.io/auth/eagle/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

6. Guarde el perfil de autorización.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en Autorizar.

9. Se le redirigirá a la página de inicio de sesión de Intercom.

10. Proporcione sus credenciales para conectarse con su cuenta de Intercom.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Intercom de Kore.ai para lo mismo.

11. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - Sistema**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Intercom de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione Sistema.

2. Haga clic en Habilitar.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Intercom de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.   Seleccione oAuth v2.

   ii.  Navegue a https://app.intercom.com/a/apps/gv65iihh/developer-hub e inicie sesión.

   iii. Cree una aplicación navegando a la tienda de aplicaciones en la barra lateral izquierda, seleccione crear su propia aplicación. Luego haga clic en "Developer Hub" en el encabezado y haga clic en "New App".

   iv.  Copie el ClientId de la aplicación en la pestaña "Basic information" y péguelo en el campo ClientId de la plataforma Kore.ai.

   v.   Copie el Client secret de la aplicación en la pestaña "Basic information" y péguelo en el campo Client Secret de la plataforma Kore.ai.

   vi.  Navegue a la pestaña Authentication en la aplicación, haga clic en "Edit" en la esquina superior derecha. Habilite el modo OAuth marcando la casilla "Use OAuth".

   vii. Copie la URL de callback de la plataforma Kore.ai, agréguela y péguela en la Redirect URL de Intercom.

   viii. Todos los alcances se agregan de forma predeterminada. Luego guarde los detalles de autenticación en la esquina superior derecha de la página.

   ix. Copie la URL de autorización (https://app.intercom.com/oauth?client_id=****&state=****) y péguela en el campo Authorization URL de la plataforma Kore.ai.

   x. Asegúrese de insertar su client id y una frase aleatoria para el state [Ej: abc, xyz, etc....] en la Auth URL.

5. Copie la Token Request URL (https://api.intercom.io/auth/eagle/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

6. Guarde el perfil de autorización.

7. Seleccione el perfil de autorización creado para completar la integración.

8. Haga clic en Autorizar.

9. Se le redirigirá a la página de inicio de sesión de Intercom.

10. Proporcione sus credenciales para conectarse con su cuenta de Intercom.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Intercom de Kore.ai para lo mismo.

11. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Intercom con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite acciones comunes en objetos de Intercom con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

- Acciones de crear y recuperar tickets.
- Con las plantillas de diálogo 'Crear un ticket' y 'Listar todos los tickets', puede generar y gestionar tickets en formato conversacional y automatizar la creación y recuperación de tickets en Intercom.

</container>
