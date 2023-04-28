---
title: Nice In Contact (UserHub)

permalink: platform/instructions/en/latest/Agent Transfer/niceincontactuserhub

---
Kore.ai XO Platform provides built-in integration with the NICE inContact (UserHub) Agent System to seamlessly handover the conversations from a virtual assistant to live agents.

<base target="_blank">
<container>

**Step 1: Retrieving Details from NiceInContact (UserHub)**

1. Generate AccessKeyId and AccessKeySecret from User Profile, to make a token request (generated in the CXone interface on the Employees Page for Userhub    and Users Page for Central). 
   Refer [here](https://help.nice-incontact.com/content/admin/security/manageaccesskeys.htm?tocpath=Admin%7CAdmin%7CRoles%20and%20Security%7C_____3) 
  
2. Register your application.
   
   a. Go to the Application Registration page on the developer portal for detailed instructions 
      [here](https://developer.niceincontact.com/Documentation/ApplicationRegistration?Length=13). Most of the terms in the registration form are self-   explanatory. However, please provide the following specific information:
   
      i.   Tenancy of the application: (Single Tenant)
   
      ii.  Authentication method: (client_secret_basic)
   
      iii. CXone ACD API scopes required: (PatronApi)
   
      iv.  Type of application being registered: (Back-end)
   
   b.  When you register your application, you will receive a client_id and client_secret.


3. Create Point of contact, using [here](https://help.nice-incontact.com/content/acd/channels/chat/setupchat.htm) 
  
</container>

<container>
 
**Step 2: Enter details in Kore.ai XO**
  
1. Navigate to Kore.ai XO Platform and onto Build → Integrations → Agent Transfer → Nice inContact (UserHub) → Configurations
2. Access Key Id: from User Profile (Ref in step 1).
3. Access Key Secret: from User Profile (Ref in step 1).
4. Client Id: from Application (Ref in step 2).
5. Client Secret: from Application (Ref in step 2).
6. Point of Contact: Enter the Point of Contact added in Step 3.

</container>

