---
title: Salesforce

permalink: platform/instructions/en/latest/Agent Transfer/salesforce

---
For XO Platform to integrate with Salesforce, you’ll need to follow the steps below:

<container>

**Step 1: Setup Live Agent**

1. Make sure you have a working setup of Live Agent within your Salesforce organization. Click [here](https://help.salesforce.com/s/articleView?language=en_US&id=live_agent_intro.htm) for detailed instructions on setting up Live Agent.
2. As the ‘administrator’, navigate to the Salesforce ‘Setup’ page (make sure you switch to Classic view, the Live Agent settings do not come up under the Lightning Experience view)
3. Find the Live Agent section under ‘Build > Customize > Chat > Chat Agent Configurations’.

</container>

<container>

**Step 2: Getting the Live Agent URL/API Endpoint**

Go to the Live Agent Settings page and look for the Live Agent API Endpoint text box.

</container>

<container>
 
**Step 3: Retrieving the Organization ID**
 
Go to the ‘Company Settings > Company Information’ page and look for the ‘Salesforce.com Organization ID’ field.

</container>

<container>
 
**Step 4:Retrieving the Deployment ID**
 
Go to the ‘Live Agent > Deployments’ page, click on the deployment which you would like to use for this integration. The Deployment ID is the string of characters after the last / in the URL. For example: https://meya-dev-ed.my.salesforce.com/5721I000000PLax

</container>

<container>
 
**Step 5: Retrieving the Button ID**
 
Go to the ‘Live Agent > Chat Buttons & Invitations’ page, click on the button which you would like to use for this integration. The Button ID is the string of characters after the last / in the URL. For example: https://meya-dev-ed.my.salesforce.com/5731I000000PL9G

Save your settings by clicking on the ‘Done’ button.

</container>


