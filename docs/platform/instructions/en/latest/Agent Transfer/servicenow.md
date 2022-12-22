---
title: ServiceNow

permalink: platform/instructions/en/latest/Agent Transfer/servicenow

---
For XO Platform to integrate with ServiceNow, you’ll need to follow the steps below:

<container>

**Step 1 : Retrieve Host URL, User ID & Password**

Retrieve your ServiceNow Host URL, User ID & password and paste then under the respective fields in the configuration tab.

</container>

<container>

**Step 2 : Define Outbound REST Message Requests in ServiceNow**

1. Select ‘REST Messages’ under ‘Outbound’ from the left menu to configure the API details.
2. Click on New button to configure the new API.
3. Enter ‘Endpoint’ as a Callback URL from the instructions tab. This will be the endpoint through which ServiceNow will send Agent’s messages to the user.
4. Click on ‘HTTP Request’ tab and add the ‘HTTP Header’ as below:

   Name : Content-Type, Value : application/json, Method : POST
   
5. Click on ‘Submit’ button

</container>

<container>
 
**Step 3 : Define Outbound REST Business Rules in ServiceNow**
 
1. Select the ‘Business Rules’ under ‘System Definition’ from the left menu.
2. Click on ‘New button’ to configure the ‘Business Rule’.
3. Enter Name and ‘Select the live_message table’ from Table drop down.
4. Select Active and Advanced check boxes.
5. Click on When to run tab and select after from When drop down and select Insert checkbox.
6. Add Filter conditions to execute this Business rule if created by is not a chatbot_interface.
7. Click on the Advanced tab, add the code below and click on ‘Submit’. It executes the API configured in REST Message.

</container>

<container>
 
**Step 4: Create a New Queue**
 
Copy Queue ID in the Queue ID field

Save your settings by clicking on the ‘Done’ button.

</container>

