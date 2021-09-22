<h1>Install Document</h1>

<h2>Development</h2>
<ul>
<li>Github: https://github.com/</li> 
<li>VS Code: https://code.visualstudio.com/</li> 
 </ul>
  
<h2>DataBase</h2>  

<ul><li>Go to https://www.mongodb.com/cloud/atlas</li></ul>  

![Node Download](/Images/DataBase.PNG?raw=true "Node Download")

<ul>
<li>Press start free</li>  
<li>Set up an account</li>  
<li>Click build a cluster</li>  
<li>Go to Database Access</li>  
<li>Click add new database user</li> 
<ul><li>Create a new username and password</li></ul> </ul>
 
 ![Security Roles](/Images/NewUser.PNG?raw=true "Security Roles")

<ul> 
<li>Click add current EC2 ip address and confirm</li> 
<ul><li>See How to connect to EC2 Server </li></ul></ul>
  
  ![Security Roles](/Images/AddingIPadress.PNG?raw=true "Security Roles")
<ul>  
<li>Once cluster is deployed, click on connect.</li>  
<li>Click on connect your applicationand paste the link into your application</li> 
 </ul>
 
   ![Security Roles](/Images/Connecting%20Cluster.PNG?raw=true "Security Roles")
   
 <ul>
<li>Go to Sever/index</li> 
<ul><li>Paset the link in CONNECTION_URL</li>
  <li>Replace username and password with the user you made</li></ul>
</ul>

   ![Security Roles](/Images/ConnectionURL.PNG?raw=true "Security Roles")


<h2> How to connect to EC2 Server </h2>
 <ul><li>Go to: https://aws.amazon.com/education/awseducate/</li></ul>
 
   ![Security Roles](/Images/AWS.PNG?raw=true "Security Roles")

 <ul><li> Create free ubuntu EC2 server and download .pem file</li></ul>  

   ![Security Roles](/Images/UbuntuServer.PNG?raw=true "Security Roles")
   
   ![Security Roles](/Images/KeyVaule.PNG?raw=true "Security Roles")
   
<ul><li> Navigate to folder where .pem file is located</li> 
<li> Execute command ssh -i {.pem file name}.pem ubuntu@{Public_IPv4_Address} (you are now sshed into server)</li> 
<li> Clone repository</li> 
 <ul><li>See Get project</li> <li> Execute command cd {github_repo_name}</li> </ul>
<li> Install dependencies onto ~, server, and client folder </li> 
<ul><li>See Packages</li></ul>
<li> Add your database link and ec2 IPv4 address to credentials file </li> 
<li> Add security group inbound rules to instance:</li> </ul>

![Security Roles](/Images/EC2SecurityRoles.png?raw=true "Security Roles")

<ul><li>See Run to start application</li> </ul>


<h2>Get project</h2>  
<ul><li>git clone https://github.com/COSC481W-2021Fall/capstone-runtime-terror</li> </ul>


<h2>Packages</h2> 
<ul><li>Node https://nodejs.org/en/</li></ul> 

![Node Download](/Images/Node%20Download.PNG?raw=true "Node Download")

<ul>
  <li>Run (2 Terminals)</li> 
  <li>In first terminal: cd server</li> 
  <ul><li>npm install</li> 
  <li>npm install -g nodemon</li></ul>  
  <li>In second terminal: cd client</li> 
  <ul><li>npm install</li></ul>
</ul>

<h2>Run</h2> 
<ul>
  <li>server</li> 
  <ul><li>npm start</li> </ul>
  <li>client</li> 
  <ul><li>npm start</li></ul> 
</ul>

