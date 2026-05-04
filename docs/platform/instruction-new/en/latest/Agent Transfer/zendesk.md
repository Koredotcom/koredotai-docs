---
title: Zendesk

permalink: platform/instructions/en/latest/Agent Transfer/zendesk

---
Kore.ai XO Platform supports integration with Zendesk Agent System to hand over conversations without having to use the BotKit.

<base target="_blank">
<container>

**Step 1: Retrieve the Zendesk Subdomain**

1. Log in to your Zendesk Admin Center.
2. Navigate to **Admin → Account → Branding**.
3. Locate your Zendesk URL and copy the subdomain portion.

Example: If your URL is `https://koreai-1234.zendesk.com`, your subdomain is `koreai-1234`.

4. Paste this value under the **Subdomain** field in the configuration tab.

 ![img](/koredotai-docs/images/zendesk_subdomain.png)

</container>

<container>

**Step 2: Retrieve the Conversations API Key and Secret**

1. Log in to your Zendesk Admin Center.
2. Navigate to **Admin → Apps and Integrations → APIs → Conversations API**, or access it directly at `https://{{subdomain}}.zendesk.com/admin/apps-integrations/apis/conversations-api`.
3. Generate or copy the **API Key ID** and the **API Secret**.
4. Paste these values under the **API Key** and **API Secret** fields in the configuration tab.

 ![img](/koredotai-docs/images/zendesk_conversations_api.png)

</container>

<container>

**Step 3: Retrieve the Zendesk API Token and Email (Optional)**

1. Log in to your Zendesk Admin Center.
2. Navigate to **Admin → Apps and Integrations → APIs → API Tokens**, or access it directly at `https://{{subdomain}}.zendesk.com/admin/apps-integrations/apis/api-tokens`.
3. Generate or copy the **API Token** and the **Admin Email ID**.
4. Paste these values under the **Zendesk API Token** and **Zendesk Email** fields in the configuration tab.

 ![img](/koredotai-docs/images/zendesk_api_tokens.png)

</container>

<container>

**Step 4: Configure Authors to Skip (Optional)**

Provide a list of BotKit authors whose messages should be excluded from being sent to the Zendesk agent. Enter the author names under the **Authors to skip to Zendesk** field.

</container>

<container>

**Step 5: Configure Ticket Field Labels (Optional)**

Ticket field keys (labels visible to agents in the Zendesk Agent View) must be configured on the Zendesk configuration page. These fields determine the label name shown to agents during conversations:

- **Zendesk Label for Conversation ID** — e.g., `converzationId`
- **Zendesk Label for Conversation Summary** — e.g., `converzationSummary`

 ![img](/koredotai-docs/images/zendesk_ticket_fields.png)
</container>

<container>

**Step 6: Configure Third-Party Integration Events (Optional)**

1. Copy the URL where you want to receive events sent by Zendesk and paste it under the **Third-Party Integration URL** field.
2. Navigate to the Zendesk Conversations Integrations page at `https://{{subdomain}}.zendesk.com/admin/apps-integrations/integrations/conversations-integrations/integrations`.
3. Select the events you want to subscribe to and copy the exact event names.
4. Provide these event names under the **Events to subscribe for third-party integration** field.

**Note:** Providing incorrect event names will prevent events from being delivered to the configured URL.

 ![img](/koredotai-docs/images/zendesk_webhook_subscriptions.png)

</container>

<container>

**Step 7: Select Conversation Type**

Under the **Conversation Type** field, choose one of the following:

- **Single Conversation** — Maintains a one-to-one relationship between the user and a single persistent record.
- **Multiple Conversations** — Each individual chat session generates a unique Conversation ID for distinct tracking and reporting.

Click **Save** to enable the Zendesk integration on the Kore.ai XO Platform.

</container>

<container>

**Additional Details**

**Conversation Context Variables**

To pass specific user and conversation details during agent transfer, use the following context variables:

- **Zendesk Internal User ID:** `context.session.BotUserSession.agentHandoffMeta.zendeskInternalUserId`
- **Zendesk Conversation ID:** `context.session.BotUserSession.agentHandoffMeta.zendeskConversationId`

**Account Usage Limitation**

- A Zendesk account can be used with only one bot at a time.
- To reuse the same account with a different bot, remove the existing agent configuration first, then configure it with the new bot.

**Configuration Deletion Impact**

- Deleting the configuration in Dev mode will also impact the Published mode and may cause the Zendesk agent integration to stop working.
- This behavior occurs because Zendesk integrations are not state-based.

</container>
