---
title: Zendesk

permalink: platform/instructions/es/latest/Agent Transfer/zendesk

---
La plataforma Kore.ai XO admite la integración con el sistema de agentes Zendesk para transferir conversaciones sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Crear una integración de Conversations en Zendesk**

1. Inicie sesión en su cuenta de Zendesk y navegue a **Admin Center → Apps and integrations → Integrations → Conversations integrations**.

 ![img](/koredotai-docs/images/zendesk_conversation_integrations.png)

2. Haga clic en **Create integration**.
3. Copie la **Webhook URL** de la página de configuración del canal Sunshine Conversations en Kore.ai y péguela en el campo **Webhook endpoint URL** en Zendesk.

 ![img](/koredotai-docs/images/zendesk_create_integration.png)

4. En **Webhook subscriptions**, seleccione los siguientes eventos:
    - **Switchboard pass control**
    - **Switchboard release control**
    - **Conversation message**

 ![img](/koredotai-docs/images/zendesk_subscriptions.png)

5. Haga clic en **Save** para crear la integración.

</container>

<container>

**Paso 2: Copiar el App ID**

1. Después de crear la integración, haga clic en el menú de tres puntos junto a la integración y seleccione **View details**.
2. Copie el **App ID** que se muestra en los detalles de la integración. Necesitará ingresar este ID en la configuración del canal Sunshine Conversations en Kore.ai.

 ![img](/koredotai-docs/images/zendesk_app_id.png)

</container>

<container>

**Paso 3: Establecer la integración como predeterminada**

1. Navegue a **Admin Center → AI → AI Agents → AI Agents → Marketplace Bots**.
2. Localice la integración que creó, haga clic en el menú de tres puntos y seleccione **Set as Default for All Channels**.

 ![img](/koredotai-docs/images/zendesk_marketplace.png)

</container>

<container>

**Paso 4: Ingresar el App ID y el subdominio de Zendesk**

1. En la configuración del canal Sunshine Conversations, ingrese el **App ID** copiado de Zendesk.
2. Copie la porción del subdominio de su URL de Zendesk y péguela en el campo **Subdomain** en la pestaña de configuración.

Ejemplo: Si su URL es `https://koreai-1234.zendesk.com`, su subdominio es `koreai-1234`.

 ![img](/koredotai-docs/images/zendesk_subdomain.png)

</container>

<container>

**Paso 5: Obtener la clave y el secreto de la API de Conversations (si aplica)**

1. Inicie sesión en su Zendesk Admin Center.
2. Navegue a **Admin → Apps and Integrations → APIs → Conversations API**, o acceda directamente en `https://{{subdomain}}.zendesk.com/admin/apps-integrations/apis/conversations-api`.
3. Genere o copie el **API Key ID** y el **API Secret**.
4. Pegue estos valores en los campos **API Key** y **API Secret** en la pestaña de configuración.

 ![img](/koredotai-docs/images/zendesk_conversation_integrations.png)

</container>

<container>

**Paso 6: Configurar Ignorar Eventos De (Opcional)**

Proporcione una lista de autores de BotKit cuyos mensajes deben excluirse del envío al agente de Zendesk. Ingrese los nombres de los autores en el campo **Ignore Events From**.

</container>

<container>

**Paso 7: Configurar IDs de campos de ticket para la vista del agente (Opcional)**

Los campos de ticket (etiquetas visibles para los agentes en la vista de agente de Zendesk) deben configurarse en la página de configuración de Zendesk. Estos IDs de campo determinan el nombre de la etiqueta que se muestra a los agentes durante las conversaciones. Para encontrar un ID de campo, navegue a **Admin Center → Objects and rules → Tickets → Fields**.

- **Zendesk Field ID for Conversation ID**
- **Zendesk Field ID for Conversation Summary**

 ![img](/koredotai-docs/images/zendesk_fields.png)
</container>

<container>

**Paso 8: Configurar eventos de integración de terceros (Opcional)**

1. Si está utilizando una URL de integración de terceros, copie la URL donde desea recibir los eventos enviados por Zendesk y péguela en el campo **Third-Party Integration URL**.
2. Navegue a la página de integraciones de Zendesk Conversations en `https://{{subdomain}}.zendesk.com/admin/apps-integrations/integrations/conversations-integrations/integrations`.
3. Seleccione los eventos a los que desea suscribirse y copie los nombres exactos de los eventos.
4. Proporcione estos nombres de eventos en el campo **Events to subscribe for third-party integration**.

**Nota:** Proporcionar nombres de eventos incorrectos impedirá que los eventos se entreguen a la URL configurada.

</container>

<container>

**Paso 9: Autorizar**

1. Haga clic en **Authorize**.
2. Ingrese su subdominio de Zendesk y haga clic en **Sign In**.

 ![img](/koredotai-docs/images/zendesk_subdomain.png)

3. Cuando se le solicite, haga clic en **Allow** para otorgar los permisos requeridos.

 ![img](/koredotai-docs/images/zendesk_confirmation.png)

</container>

<container>

**Paso 10: Seleccionar el tipo de conversación**

En el campo **Conversation Type**, elija una de las siguientes opciones:

- **Single Conversation**: Mantiene una relación uno a uno entre el usuario y un registro persistente único.
- **Multiple Conversations**: Cada sesión de chat individual genera un ID de Conversación único para seguimiento y reportes distintos.

Haga clic en **Save** para habilitar la integración de Zendesk en la plataforma Kore.ai XO.

</container>

<container>

**Detalles adicionales**

**Variables de contexto de la conversación**

Para pasar detalles específicos del usuario y la conversación durante la transferencia al agente, utilice las siguientes variables de contexto:

- **ID interno de usuario de Zendesk:** `context.session.BotUserSession.agentHandoffMeta.zendeskInternalUserId`
- **ID de conversación de Zendesk:** `context.session.BotUserSession.agentHandoffMeta.zendeskConversationId`

**Limitación de uso de cuenta**

- Una cuenta de Zendesk solo puede utilizarse con un bot a la vez.
- Para reutilizar la misma cuenta con un bot diferente, primero elimine la configuración de agente existente y luego configúrela con el nuevo bot.

**Impacto de la eliminación de configuración**

- Eliminar la configuración en modo Dev también afectará el modo Published y puede causar que la integración del agente de Zendesk deje de funcionar.
- Este comportamiento ocurre porque las integraciones de Zendesk no están basadas en estados.

</container>
