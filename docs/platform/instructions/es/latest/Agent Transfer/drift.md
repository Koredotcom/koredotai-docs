---
title: Drift

permalink: platform/instructions/es/latest/Agent Transfer/drift

---
Kore.ai XO Platform ahora admite la integración con el sistema de agentes de Drift para transferir las conversaciones sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Configuración de una aplicación de Drift**

1. Para configurar Drift como sistema de agentes, primero deberá crear una integración externa en Drift. Para crear una aplicación, siga las instrucciones en https://devdocs.drift.com/docs/quick-start.

2. Una vez que haya creado la aplicación, vaya a la parte inferior de la página de OAuth & Permissions y otorgue a su aplicación los permisos de acceso que necesita. Deberá proporcionar acceso a los siguientes alcances:

    i.   new_message

    ii.  new_conversation

    iii. conversation_status_updated

    iv.  conversation_inactive

    v.   conversation_push

    vi.  chat_to_call para webhook

</container>

<container>

**Paso 2: Obtención del token de acceso**

1. Inicie sesión en su cuenta de Drift.

2. En la sección Activate Your App, instale su aplicación en su cuenta de Drift. Esto generará un token de acceso especial que no expira; este será su Access Token.

2. Deberá pegarlo en Kore.ai XO Platform Integrations → Agent Transfer → Drift → Configuration → Access Token

</container>

<container>

**Paso 3: Obtención del token de verificación**

1. Navegue a App Credentials en la aplicación de Drift que creó recientemente y verá un campo titulado Verification Token.

2. Cópielo y péguelo en Kore.ai XO Platform Integrations → Agent Transfer → Drift → Configuration → Verification Token

</container>

<container>

**Paso 4: Habilitación del Webhook de Kore**

1. Navegue a Kore.ai XO Platform y copie la URL del Webhook disponible en Integrations → Agent Transfer → Drift → Configuration → Webhook URL.

2. Navegue a la sección de Webhooks en la consola de Drift dentro de la aplicación que creó recientemente y pegue la URL del Webhook copiada en el paso anterior.

3. Haga clic en Save para guardar su progreso.

</container>

<container>

**Paso 5:**

1. Para Drift, el Email ID es obligatorio; asegúrese de capturar el emailId del usuario antes de realizar la transferencia al agente.

2. Puede hacer esto modificando la tarea connectToAgent en la plataforma de Asistente Virtual de Kore a continuación.

3. Habilite Drift haciendo clic en el botón 'Save' en Kore.ai XO Platform.

</container>
