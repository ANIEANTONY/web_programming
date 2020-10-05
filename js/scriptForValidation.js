function validateForm(){
   
         if( document.forms["myForm"]["name"].value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.name.focus() ;
            return false;
         }
         if( document.forms["myForm"]["dob"].value == ""  ) {
            alert( "Please provide your date of birth" );
            document.myForm.dob.focus() ;
            return false;
         }
         if( document.forms["myForm"]["no"].value == ""  ) {
            alert( "Please valid mobile number!" );
            document.myForm.no.focus() ;
            return false;
         }
         if( document.forms["myForm"]["mail"].value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.mail.focus() ;
            return false;
         }
         if( document.forms["myForm"]["mark"].value == "" ) {
            alert( "Please provide your mark!" );
            document.myForm.mark.focus() ;
            return false;
         }
         if( document.forms["myForm"]["gen"].value == "" ) {
            alert( "Please provide your gender!" );
            document.myForm.gen.focus() ;
            return false;
         }
         
         
         return( true );
   
}