---
title: ServiceNow

permalink: platform/instructions/en/latest/Agent Transfer/servicenow

---
The Kore.ai XO Platform now supports integration with the ServiceNow Agent System to hand over the conversations to the live agents without having to use the BotKit.The Platform supports Tokyo, Utah, and Vancouver versions of the ServiceNow.To enable this integration, the Bot Developer needs to log in to the Service Now Developer account.

The following instructions are relevant for Utah and Vancouver Instances of ServiceNow. To access instructions specific to the Tokyo instance, [please follow this link](https://developer.kore.ai/integrations/configuring-the-servicenow-agent/)


<base target="_blank">
<container>

**Step 1. Retrieve the Instance URL**

1. Once you log into your instance, look in the URL to find your Instance ID (for example, https://InstanceURL.service-now.com ).
   
2. Copy the InstanceURL from the URL and paste it into the Configurations tab of this page.
    
</container>

<container>

**Step 2. Capture the field values required according to the chosen Authorization type**

1.  When the “Basic Auth” Authorization option  is selected in the Configurations tab 

      a. Provide your ServiceNow account User Name under the User Name field in the Configurations tab of this page.
   
      b. Provide your ServiceNow account Password under the Password field in the Configurations tab of this page.

2. When the “OAuth with Refresh Token” Authorization option is selected in the configurations tab

   a. From the ServiceNow Instance Home Screen, Select “All” and navigate to System OAuth → Application Registry.

   b. Click on the New Button and navigate to the “What kind of OAuth Application” screen.

   c. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.

   d. Provide the name of the application and submit it, OAuth application will be created and the analyst will be navigated to the All Applications screen.

   e. Click on the oAuth Application created and navigate to the details screen.

   f. Copy the Client ID and paste it into the Configurations tab of this page.

   g. Unmask the Client Secret, and copy and paste it into the Configurations tab of this page.

   h. Generate the refresh token and provide it in the Configurations tab of this page. To generate the refresh token- [please refer to this link](https://docs.servicenow.com/bundle/tokyo-platform-security/page/administer/security/reference/r_OAuthAPIRequestParameters.html)

   i. Click on the Authorize button present in the Configurations tab of this page to authorize the Integration.

</container>

<container>

**Step 3. Install the required Plugins**

1. From the ServiceNow Instance Home Screen, Select “All” and navigate to System Definition → Plugins.
   
2. Copy the InstanceURL from the URL and paste it into the Configurations tab of this page.

3. Search for the “Advanced Work Assignment” plugin and install it.

4. Search for the “Customer Service Management” plugin and install it.

5. Search for the “Glide Virtual Agent” plugin and install it.

6. Search for the “Virtual Agent API” plugin and install it.
   
    
</container>

<container>
 
**Step 3.   Install the required Plugins**
 
1. From the ServiceNow Instance Home Screen, Select “All” and navigate to System Definition → Plugins.
2. Search for the “Omni-experience Standard Feature Set” plugin and install it.
3. Search for the “Advanced Work Assignment” plugin and install it.
4. Search for the “Customer Service Management” plugin and install it.
5. Search for the “Glide Virtual Agent” plugin and install it.
6. Search for the “Virtual Agent API” plugin and install it.
   
</container>

<container>
 
**Step 4: Assign Agent roles to the Consumer Service group**
 
1. From the ServiceNow Instance Home Screen, Select “All” and navigate to Advanced Work Assignment → Management→Groups.
2. Select the “Consumer Service Support” group and navigate to the group details screen.
3. Select the Roles tab and click on the Edit button to navigate to the roles screen.
4. In the Roles collection, Search for “awa_agent” and  “agent_workspace_user” roles, assign them to the Consumer Service support and save them.
5. Navigate back to the group details screen, select the “Group Members” tab, click on the edit button, and navigate to the “Edit Members” screen.
6. In the Users Collection, Search for the required user(for Ex: Abel Tuter), assign it to the Consumer Service support, and save it.
7. Navigate back to the group details screen and click on the Update button.

</container>

<container>
 
**Step 5. Update the Webhook Endpoint and enable the Integration**
 
1. From the ServiceNow Instance Home Screen, Select “All” and navigate to System Webservices→Outbound→REST messages.
2. Select “VABot to Bot” from the list and navigate to the “VABot to Bot” details screen.
3. Edit the details, Copy the Webhook URL from the configuration tab of this page, and paste it into the EndPoint field on the “VABot to Bot” edit details screen.
4. On the same screen, under the HTTP methods, update the same Webhook URL for the “postMessage” and click on update.
5. Enable the ServiceNow Agent Integration by clicking on the “Save” Button in the configurations tab of this page.

</container>

<container>
 
**Step 6. Impersonate the User and Set the Agent Status**
 
1. From the ServiceNow Instance Home Screen, Click on the Profile Icon and Select “Impersonate User”.
2. On the Impersonate User Screen, Select the user who has been assigned to the Consumer Service group.
3. From the ServiceNow Instance Home Screen, Select “All” and navigate to Workspace Experience→Workspcaces→Agent Workspace Home.
4. From the Agent Workspace Screen, Select “Inbox” and set the Status to “Available”.

</container>

