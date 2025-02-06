let user={name:"Alice",role:"admin",active:true}

let message = user.role==="admin"
 ? (user.active ? "Admin Access Granted!":"Admin Access Revoked")
 :user.role==="user"
 ? (user.active ? "user access Granted!":"user Access Revoked")
 : "Access Denied"
 console.log(message)