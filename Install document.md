<h1>Install Document</h1>

<h2>Development</h2>
<li>Github: https://github.com/</li> 
<li>VS Code: https://code.visualstudio.com/</li> 
  
<h2>DataBase</h2>  

<li>Go to https://www.mongodb.com/cloud/atlas</li>  
<li>Press start free</li>  
<li>Set up an account</li>  
<li>Click build a cluster</li>  
<li>Wait for cluster to deploy</li>  
<li>Click on shared cluser</li>  
<li>Go to Database Access</li>  
<li>Click add new database user</li>  
<li>Create a username and password</li>  
<li>Go to Network Access</li>  
<li>Click add ip address</li> 
<li>Click add current ip address and confirm</li>  
<li>Once cluster is deployed, click on connect.</li>  
<li>Click on connect your applicationand paste the link into your application, replacing with the username and password you created</li>  



<h2>Get project</h2>  
<li>git clone https://github.com/COSC481W-2021Fall/capstone-runtime-terror</li> 


<h2>Packages</h2> 
<li>Node https://nodejs.org/en/</li> 
![Node Download](/Images/NodeDownload.PNG")
<li>npm install</li> 
<li>npm install -g nodemon</li> 
<li>Run (2 Terminals)</li> 
<li>In first terminal: cd client</li> 
<li>npm start</li> 
<li>In second terminal: cd server</li> 
<li>npm start</li> 

<h2> How to connect to EC2 Server </h2>
<li> Create free ubuntu EC2 server and download .pem file</li>  
<li> Navigate to folder where .pem file is located</li> 
<li> Execute command ssh -i {.pem file name}.pem ubuntu@{Public_IPv4_Address} (you are now sshed into server)</li> 
<li> Clone repository</li> 
<li> Execute command cd {github_repo_name}</li> 
<li> Install dependencies onto ~, server, and client folder </li> 
<li> Add your database link and ec2 IPv4 address to credentials file </li> 
<li> Add security group inbound rules to instance:</li> 

![Security Roles](/Images/EC2SecurityRoles.png?raw=true "Security Roles")

<li> Can now run application</li> 
