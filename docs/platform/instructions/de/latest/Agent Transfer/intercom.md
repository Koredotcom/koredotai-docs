---
title: Intercom

permalink: platform/instructions/es/latest/Agent Transfer/intercom

---
Kore.ai XO Platform ahora admite la integración con el sistema de agentes de Intercom para transferir las conversaciones sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Crear una aplicación**

1. Para configurar Intercom para recibir mensajes, primero deberá crear una aplicación en Intercom.

2. Puede configurar una nueva aplicación visitando https://app.intercom.com/a/apps/_/developer-hub.

</container>

<container>

**Paso 2: Obtener el token de acceso**

1. Una vez que haya creado la aplicación, haga clic en authentication y copie (o genere, si no está disponible) el token de acceso. Este token se utilizará para acceder a sus datos de Intercom a través de la API.

2. Copie este token de acceso, regrese a Kore.ai XO Platform y pegue el Access Token en el campo Access Token.

</container>

<container>

**Paso 3: Configurar un Webhook**

1. Para configurar el webhook, inicie sesión en su cuenta de Intercom.

2. Desde el menú principal a la izquierda, navegue a Settings > Webhooks.

3. Regrese a Kore.ai XO Platform, y

   i.   Para agregar un nuevo webhook, haga clic en el botón "Add Webhook".

   ii.  En el formulario "New Webhook", puede ingresar los detalles del nuevo webhook.

   iii. Copie la URL del webhook que aparece en Integrations → Agent Transfer → Intercom → Configuration.

    iv. Regrese a Intercom y pegue la URL del Webhook copiada en el campo de webhook.

4. En Webhook topics, navegue a 'Select a Topic' y seleccione los siguientes temas:

   i.   conversation.admin.closed

   ii.  conversation.admin.replied

   iii. conversation.admin.assigned

   iv.  conversation.admin.single.created

5. Haga clic en Save para guardar esta configuración.

6. Habilite Intercom haciendo clic en el botón 'Save' en Kore.ai XO Platform.

</container>
