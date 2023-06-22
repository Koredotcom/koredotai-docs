---
title: ServiceNow

permalink: platform/instructions/en/latest/Agent Transfer/servicenow

---
Kore.ai XO Platform now supports integration with ServiceNow Agent System to hand over the conversations without having to use the BotKit. To enable this integration, Bot Developer needs to log in to the Service Now Developer account.

<base target="_blank">
<container>

**Step 1. Retrieve the Host URL**

1. From the main menu on the left, navigate to System Web Services → Outbound → REST Messages.
   
2. On the REST Messages page, you will see a list of all the REST Messages that have been configured.
   
3. To retrieve the Host URL, click on the name of the REST Message that you want to use.
   
4. In the REST Message form, you will find the Host URL in the “Endpoint” field.
   
5. Copy the Host URL from the “Endpoint” field and paste it into the Configurations tab of this page.
   

</container>

<container>

**Step 2 : Capture the field values required according to the chosen Authorization type**

1.  When the “Basic Auth” Authorization option  is selected in the Configurations tab 

      a. Provide your Service Now account User Name under the User Name field in the Configurations tab of this page.
   
      b. Provide your Service Now account Password under the Password field in the Configurations tab of this page.

2. When the “OAuth with Refresh Token” Authorization option is selected in the configurations tab

   a. From the main menu on the left, navigate to System OAuth → Application Registry.

   b. Click on New Button and navigate to the “What kind of OAuth Application” screen.

   c. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.

   d. Provide the name of the application and submit it, OAuth application will be created and the analyst will be navigated to the All Applications screen.

   e. Click on the oAuth Application created and navigate to the details screen.

   f. Copy the Client ID and paste it into the Configurations tab of this page.

   g. Unmask the Client Secret, and copy and paste it into the Configurations tab of this page.

   h. Generate the refresh token and provide it in the Configurations tab of this page.

      i. To generate the refresh token- please refer to this link

            i. Click on the Authorize button present in the Configurations tab of this page. You will be redirected to the ServiceNow developer console to authorize the virtual assistant.

</container>

<container>
 
**Step 3 :  Define Outbound REST Message Requests in ServiceNow**
 
1. From the main menu on the left, navigate to System Web Services → Outbound  → REST Messages.
2. On the REST Messages page, you will see a list of all the REST Messages that have been configured.
3. To add a new REST Message, click on the “New” button.
4. In the “New REST Message” form, you can enter the API details, such as the name, endpoint URL as Callback URL from the configurations page, and HTTP method.
5. This will be the endpoint through which ServiceNow will send Agent’s messages to the user.
6. Click on the ‘HTTP Request’ tab and add the ‘HTTP Header’ as below:
7. Name: Content-Type, Value: application/json, Method: POST
8. Once you have entered the required details, click on the “Submit” button to save the REST Message.


</container>

<container>
 
**Step 4: Define Outbound REST Business Rules in ServiceNow**
 
1. Select ‘Business Rules’ under ‘System Definition’ from the left menu.
2. Click on the ‘New button’ to configure the ‘Business Rule’.
3. Enter Name and ‘Select the live_message table’ from the Table dropdown.
4. Select the Active and Advanced check boxes.
5. Click on the When to Run tab and select after from the When drop-down and select the Insert checkbox.
6. Add Filter conditions to execute this Business rule if created by is not a chatbot_interface.
7. Click on the Advanced tab, add the code below, and click on ‘Submit’. It executes the API configured in REST Message.

</container>

<container>
 
**Step 5. Create a New Queue**
 
1. From the main menu on the left, navigate to Queues → All Queues.
2. On the All Queues page, you will see a list of all the queues that have been configured.
3. Copy the Queue ID in the Queue ID field
4. Enable ServiceNow by clicking on the ‘Save’ button on the Kore.ai XO Platform.

</container>

