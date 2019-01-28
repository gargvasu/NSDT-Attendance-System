// Storing the typing Pattern


var tdna=new TypingDNA();

var user={};

function recordStudent(){
var typingPattern = tdna.getTypingPattern({type:0, length:100});
user.name=document.getElementById("s_name").value;
user.pattern=typingPattern;
user.type="student";
user.email=document.getElementById("s_email").value;
user.regno=document.getElementById("s_regno").value;
console.log(user);

(async () => {
  const rawResponse = await fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  console.log(content);
})();

};


function recordFaculty(){

var typingPattern = tdna.getTypingPattern({type:0, length:100});
user.pattern=typingPattern;
user.name=document.getElementById("f_name").value;
user.email=document.getElementById("f_email").value;
console.log(user);
user.type="faculty";
(async () => {
  const rawResponse = await fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  console.log(content);
})();
};







