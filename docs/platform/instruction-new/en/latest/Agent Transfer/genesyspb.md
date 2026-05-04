---
title: Genesys (prebuilt)

permalink: platform/instructions/en/latest/Agent Transfer/genesyspb

---

<container>

Kore.ai XO Platform supports integration with Genesys Agent System to hand over the conversations without having to use the BotKit.

Please visit Deploy → Channels → Genesys Chat → Configurations to manage Genesys.

After you have successfully established a connection with the Genesys chat, the XO platform moves the Genesys agent system into the configured state. 
To ensure that Agent transfers from the Virtual assistant are routed correctly, perform the following steps in the Genesys portal.

1. Navigate to Admin→ Architect→ Flows→Inbound Message and select the enabled flow.
2. Add the “Transfer to ACD” node under Talk to Agent→Send Response flow.
3. Select the “Transfer to ACD” node and select the Queue to handle the agent transfer.

</container>
