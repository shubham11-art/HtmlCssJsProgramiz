// const months = ["june", "aug", "nov"];

// UPDATE
// NEED TO FIND THE INDEX NO OF THE ELEMENT WHICH NEED TO BE UPDATED

// const indexOf = months.indexOf('aug');

// if(indexOf != -1){
//     const newMonths = months.splice(indexOf,1,'august');
//     console.log(newMonths);
//     console.log(months);

// }else{
//     console.log('No data found');
// }

// Why assigned to a variable newMonths because if we deleted something and wanted it to see on console the by consoling that variable we can see it.

// sagalech delete karayache astil after perticular value tar deleteCount la aapan 'infinity' or arrayName.length deu shakato.

//*// JWT Token - JWT vs Session

// Static Requests astat i.e http request keli, ji state less aahe i.e koi data maintained nahi hai bas request keli to server and data aa gaya.

// Dynamic Requests i.e Login and password takala jyasathi session maintain hoto, server tya request cha session id generate karto ani to id cookie madhe store hoto.

// Session ch kaam aahe common state maintain karnyasathi, karan internate var pages madhe state maintain nasate.

// JSON Web Token - Rather than using cookie it uses JWT for autherization.
// Used for Autharization and not for Authentication
// JWT banata hai with the help of header(algoritham, type - HS key), payload(body)(login, email, password) and signature(secret key created by the developer).
// Used to verify the User at the time og login
// It doesnot get saved in the session.

// Authentication
// It like login user in i.e Taking the username and password and checking whether it is correct or not.

// Autherization
// User which is sending the request to server, whether he is same user which has logged in or not. Thia is done with the help of session id.

//*// Difference - Session madhe user store kela jayacha on server but in JWT user save kela jaat nahi JWT key has all the information about the user. JWT helps to use same token for multiple servers.
// JWT madhe we store the user information as cookie on client side. Earlier we used to store it on server.
