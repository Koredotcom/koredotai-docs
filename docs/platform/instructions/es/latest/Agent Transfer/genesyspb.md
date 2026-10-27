---
title: Genesys (prebuilt)

permalink: platform/instructions/es/latest/Agent Transfer/genesyspb

---

<container>

Kore.ai XO Platform admite la integración con el sistema de agentes de Genesys para transferir las conversaciones sin necesidad de utilizar el BotKit.

Visite Deploy → Channels → Genesys Chat → Configurations para administrar Genesys.

Después de haber establecido exitosamente una conexión con Genesys Chat, la plataforma XO mueve el sistema de agentes de Genesys al estado configurado.
Para asegurar que las transferencias de agente desde el asistente virtual se enruten correctamente, realice los siguientes pasos en el portal de Genesys.

1. Navegue a Admin→ Architect→ Flows→Inbound Message y seleccione el flujo habilitado.
2. Agregue el nodo "Transfer to ACD" en el flujo Talk to Agent→Send Response.
3. Seleccione el nodo "Transfer to ACD" y seleccione la cola para manejar la transferencia al agente.

</container>
