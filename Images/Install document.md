<h1>Install Document</h1>

<h2>Development</h2>
<p>Github: https://github.com/</p> 
<p>VS Code: https://code.visualstudio.com/<p>
  
<h2>DataBase</h2>  


<p>Go to https://www.mongodb.com/cloud/atlas</p> 
<p>Press start free</p> 
<p>Set up an account</p> 
<p>Click build a cluster</p> 
<p>Wait for cluster to deploy</p> 
<p>Click on shared cluser</p> 
<p>Go to Database Access</p> 
<p>Click add new database user</p> 
<p>Create a username and password</p> 
<p>Go to Network Access</p> 
<p>Click add ip address</p> 
<p>Click add current ip address and confirm</p> 
<p>Once cluster is deployed, click on connect.</p> 
<p>Click on connect your applicationand paste the link into your application, replacing with the username and password you created</p> 


<h2>Server</h2>  


<h2>Get project</h2>  
<p>git clone https://github.com/COSC481W-2021Fall/capstone-runtime-terror</p>


<h2>Packages</h2> 
<p>Node https://nodejs.org/en/</p>
<p>npm install</p>
<p>npm install -g nodemon</p>

<h2>Packages</h2> 
<p>Run (2 Terminals)</p>
<p>In first terminal: cd client</p>
<p>npm start</p>
<p>In second terminal: cd server</p>
<p>npm start</p>

<h2> How to connect to EC2 Server </h2>
<p> Create free ubuntu EC2 server and download .pem file </p> 
<p> Navigate to folder where .pem file is located </p>
<p> Run command ssh -i <.pem file name>.pem ubuntu@<Public_IPv4_Address> (you are now sshed into server) </p>
<p> Clone repository </p>
<p> Execute command cd <github_repo_name> </p>
<p> Install dependencies onto ~, server, and client folder </p>
<p> Add your database link and ec2 IPv4 address to credentials file </p>
<p> Add security group inbound rules to instance: </p>
![Security Roles](/images/EC2SecurityRoles.png?raw=true "Security Roles")
<p> Can now run application </p>
