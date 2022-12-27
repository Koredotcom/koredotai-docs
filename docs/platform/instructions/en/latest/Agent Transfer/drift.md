---
title: Drift

permalink: platform/instructions/en/latest/Agent Transfer/drift

---
For XO Platform to integrate with Drift, you’ll need to follow the steps below:

<container>

**Step 1: Setting up a Drift Application**

1. To set up Drift as a channel, you will first need to create an External Integration bot in Drift. To create an app please follow the instructions on https://devdocs.drift.com/docs/quick-start.
  
2. Once you have created the App, go to the bottom of the OAuth & Permissions page, and give your application the scopes of access that it needs to perform its purpose. You’ll need to provide access to the following scopes -
  
    i.   new_message
  
    ii.   new_conversation
  
    iii.   conversation_status_updated
  
    iv.   conversation_inactive
  
    v.   conversation_push
  
    vi.   chat_to_call for webhook

</container>

<container>

**Step 2: Retrieving the Access Token**

1. Under the Activate Your App section, install your App to your Drift account. This will generate a special non-expiring access token, this will be your Access Token.
  
2. You will need to paste this within SmartAssist at Outgoing Setup → Outgoing Chat Agent Transfer → Drift → Configuration
 
</container>

<container>
 
**Step 3: Enabling the Kore Webhook**
  
1. Navigate to SmartAssist and copy the Webhook URL available under Outgoing Setup → Outgoing Chat Agent Transfer → Drift → Configuration
  
2. Navigate to the Webhooks section under your recently created App and paste the Webhook URL copied in the previous step.
  
3. Click on Save to preserve your progress

</container>

<container>
 
**Step 4: Retrieving Verification Token**
  
1. Navigate to the App Credentials in your recently created Drift app and you'll see a field titled Verification Token
  
2. Copy and paste this token in the verification token field under Outgoing Setup → Outgoing Chat Agent Transfer → Drift → Configuration

</container>

<container>
 
**Step 5:**
  
For Drift Email ID is mandatory please make sure you are capturing the emailId from the user before doing the agent transfer.You can do this by modifying the connectToAgent task on the Kore Virtual Assistant platform below:

Save your settings by clicking on the ‘Done’ button

</container>
