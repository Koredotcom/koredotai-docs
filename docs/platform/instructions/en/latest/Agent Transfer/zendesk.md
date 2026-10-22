---
title: Zendesk

permalink: platform/instructions/en/latest/Agent Transfer/zendesk

---
Kore.ai XO Platform supports integration with Zendesk Agent System to hand over conversations without having to use the BotKit.

<base target="_blank">
<container>

**Step 1: Create a Conversations Integration in Zendesk**

1. Sign in to your Zendesk account and navigate to **Admin Center → Apps and integrations → Integrations → Conversations integrations**.

 ![img](/koredotai-docs/images/zendesk_conversation_integrations.png)

2. Click **Create integration**.
3. Copy the **Webhook URL** from the Sunshine Conversations channel configuration page in Kore.ai and paste it into the **Webhook endpoint URL** field in Zendesk.

 ![img](/koredotai-docs/images/zendesk_create_integration.png)

4. Under **Webhook subscriptions**, select the following events:
    - **Switchboard pass control**
    - **Switchboard release control**
    - **Conversation message**

 ![img](/koredotai-docs/images/zendesk_subscriptions.png)

5. Click **Save** to create the integration.

</container>

<container>

**Step 2: Copy the App ID**

1. After the integration is created, click the three-dot menu next to the integration and select **View details**.
2. Copy the **App ID** displayed in the integration details. You will need to enter this ID in the Sunshine Conversations channel configuration in Kore.ai.

 ![img](/koredotai-docs/images/zendesk_app_id.png)

</container>

<container>

**Step 3: Set the Integration as Default**

1. Navigate to **Admin Center → AI → AI Agents → AI Agents → Marketplace Bots**.
2. Locate the integration you created, click the three-dot menu, and select **Set as Default for All Channels**.

 ![img](/koredotai-docs/images/zendesk_marketplace.png)

</container>

<container>

**Step 4: Enter the App ID and Zendesk Subdomain**

1. In the Sunshine Conversations channel configuration, enter the **App ID** copied from Zendesk.
2. Copy the subdomain portion of your Zendesk URL and paste it under the **Subdomain** field in the configuration tab.

Example: If your URL is `https://koreai-1234.zendesk.com`, your subdomain is `koreai-1234`.

 ![img](/koredotai-docs/images/zendesk_subdomain.png)

</container>

<container>

**Step 5: Retrieve the Conversations API Key and Secret (If Applicable)**

1. Log in to your Zendesk Admin Center.
2. Navigate to **Admin → Apps and Integrations → APIs → Conversations API**, or access it directly at `https://{{subdomain}}.zendesk.com/admin/apps-integrations/apis/conversations-api`.
3. Generate or copy the **API Key ID** and the **API Secret**.
4. Paste these values under the **API Key** and **API Secret** fields in the configuration tab.

 ![img](/koredotai-docs/images/zendesk_conversation_integrations.png)

</container>

<container>

**Step 6: Configure Ignore Events From (Optional)**

Provide a list of BotKit authors whose messages should be excluded from being sent to the Zendesk agent. Enter the author names under the **Ignore Events From** field.

</container>

<container>

**Step 7: Configure Ticket Field IDs for Agent View (Optional)**

Ticket fields (labels visible to agents in the Zendesk Agent View) must be configured on the Zendesk configuration page. These field IDs determine the label name shown to agents during conversations. To find a field ID, navigate to **Admin Center → Objects and rules → Tickets → Fields**.

- **Zendesk Field ID for Conversation ID**
- **Zendesk Field ID for Conversation Summary**

 ![img](/koredotai-docs/images/zendesk_fields.png)
</container>

<container>

**Step 8: Configure Third-Party Integration Events (Optional)**

1. If you are using a third-party integration URL, copy the URL where you want to receive events sent by Zendesk and paste it under the **Third-Party Integration URL** field.
2. Navigate to the Zendesk Conversations Integrations page at `https://{{subdomain}}.zendesk.com/admin/apps-integrations/integrations/conversations-integrations/integrations`.
3. Select the events you want to subscribe to and copy the exact event names.
4. Provide these event names under the **Events to subscribe for third-party integration** field.

**Note:** Providing incorrect event names will prevent events from being delivered to the configured URL.

</container>

<container>

**Step 9: Authorize**

1. Click **Authorize**.
2. Enter your Zendesk subdomain and click **Sign In**.

 ![img](/koredotai-docs/images/zendesk_subdomain.png)

3. When prompted, click **Allow** to grant the required permissions.

 ![img](/koredotai-docs/images/zendesk_confirmation.png)

</container>

<container>

**Step 10: Select Conversation Type**

Under the **Conversation Type** field, choose one of the following:

- **Single Conversation**: Maintains a one-to-one relationship between the user and a single persistent record.
- **Multiple Conversations**: Each individual chat session generates a unique Conversation ID for distinct tracking and reporting.

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
