   function submitInfo() {
        let infoUser = {};
        infoUser.firstname = document.getElementById('fname').value;
        infoUser.lastname = document.getElementById('lname').value;
        infoUser.username = document.getElementById('username').value;
        infoUser.email = document.getElementById('email').value;
        infoUser.number = document.getElementById('phone').value;
        infoUser.age = document.getElementById('age').value;
        infoUser.hobbies = document.getElementById('hobbies').value;
        infoUser.password = document.getElementById('password').value;
        infoUser.cpassword = document.getElementById('cpassword').value;
        infoUser.adress = document.getElementById('adress').value;
        infoUser.city = document.getElementById('city').value;
        infoUser.zip = document.getElementById('zip').value;
        infoUser.submit = document.getElementById('submit').value;

        console.log(infoUser);

    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var ps = document.getElementById('password');
    var cps = document.getElementById('cpassword');
    var passw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    

    var check = function() {
        if (ps.value == cps.value) {

          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'Password does match !';
          
        }else{

          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = "Password doesn't match !";
          
        }

        if (ps.value.match(passw) && cps.value.match(passw)) {
            document.getElementById('pscondition00').style.color = 'green';
            document.getElementById('pscondition00').innerHTML = 'This password is OK';
            document.getElementById('password').style.borderColor = 'green';
            document.getElementById('cpassword').style.borderColor = 'green';
            return true;
        }else {
            document.getElementById('pscondition00').innerHTML = ' <span id="pass"> Your password should <br> atleast have: </span> <br> 6 characters <br> one uppercase <br> one lowercase <br> one number' ;
            document.getElementById('pscondition00').style.color = 'blue';
            document.getElementById('password').style.borderColor = 'red';
            return false;
        }
      }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    var email = document.getElementById('email');
    var gmail00  = document.getElementById('gmail00');
    var gmail01  = document.getElementById('gmail01');
    
    var abc = RegExp (/^[a-zA-Z0-9_.+-]+@gmail\.com+$/);
    // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    var checkk = function(){
      if (email.value.match(abc)){
          gmail00.innerHTML = "This email is ok";
          gmail00.style.color = "green";
          email.style.borderColor = "green";
        return true;
      }else{
          gmail00.innerHTML = "Only gmail.com users <br> can registrate on this site.";
          gmail00.style.color = "red";   
          email.style.borderColor = "red"; 
        return false;
      }
    }
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var age = document.getElementById("age");
    var adress = document.getElementById("adress");
    var city = document.getElementById("city");
    var phone = document.getElementById("phone");
    var username = document.getElementById("username");
    

    var submitSuccess = function (){

      if 
      (ps.value.match(passw) 
      && cps.value.match(passw) 
      && email.value.match(abc) 
      && (fname.value != "")
      && (lname.value != "")
      && (age.value != "")
      && (adress.value != "")
      && (city.value != "")
      && (phone.value != "")
      && (username.value != ""))  {
        window.location.href = "success.html";
      }else{
        document.getElementById("popup").innerHTML = "Please fill everything in <br> to continue.";
        document.getElementById("popup").style.color = "red";
      }
  }

  // function validate() {
      
  //   if( document.main-form.form1.value == "" ) {
  //      alert( "Please provide your name!" );
  //      document.main-form.form1.focus() ;
  //      return false;
  //   }
    
 