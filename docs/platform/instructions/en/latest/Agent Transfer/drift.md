---
title: Drift

permalink: platform/instructions/en/latest/Agent Transfer/drift

---
Kore.ai XO Platform now supports integration with Drift Agent System to handover the conversations without having to use the BotKit.

<base target="_blank">
<container>

**Step 1: Setting up a Drift Application**

1. To set up Drift as an Agent System, you will first need to create an External Integration in Drift. To create an app please follow the instructions on https://devdocs.drift.com/docs/quick-start.
  
2. Once you have created the App, go to the bottom of the OAuth & Permissions page, and give your application the scopes of access that it needs. You’ll need to provide access to the following scopes: 
  
    i.   new_message
  
    ii.  new_conversation
  
    iii. conversation_status_updated
  
    iv.  conversation_inactive
  
    v.   conversation_push
  
    vi.  chat_to_call for webhook

</container>

<container>

**Step 2: Retrieving the Access Token**

1. Login to your Drift account. 
  
2. Under the Activate Your App section, install your App to your Drift account. This will generate a special non-expiring access token, this will be your Access Token.
  
2. You will need to paste this on Kore.ai XO Platform Integrations → Agent Transfer → Drift → Configuration → Access Token
 
</container>

<container>
 
**Step 3: Retrieving Verification Token**
  
1. Navigate to the App Credentials in your recently created Drift app and you'll see a field titled Verification Token.
  
2. Copy and paste this on Kore.ai XO Platform Integrations → Agent Transfer → Drift → Configuration → Verification Token
  
</container>

<container>
 
**Step 4: Enabling the Kore Webhook**
  
1. Navigate to Kore.ai XO Platform and copy the Webhook URL available under Integrations → Agent Transfer → Drift → Configuration → Webhook URL.
  
2. Navigate to the Webhooks section in the Drift console under your recently created app and paste the Webhook URL copied in the previous step.
  
3. Click on Save to preserve your progress.

</container>

<container>
 
**Step 5:**
  
1. For Drift Email ID is mandatory please make sure you are capturing the emailId from the user before doing the agent transfer.
  
2. You can do this by modifying the connectToAgent task on the Kore Virtual Assistant platform below.

3. Enable Drift by clicking on the ‘Save’ button on Kore.ai XO Platform..

</container>
