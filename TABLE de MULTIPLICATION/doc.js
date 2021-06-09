
    
            
           
            
    
            function effacer(){
                document.getElementById("mult").innerHTML="";
                document.getElementById("valSaisie").innerHTML="";
            }
    
            function moin(){
                var dvaleur = (document.getElementById("valSaisie").value);
                dvaleur--;
                document.getElementById("valSaisie").value=dvaleur;
            }
            function plus(){
                var dvaleur =( document.getElementById("valSaisie").value);
                dvaleur++;
                document.getElementById("valSaisie").value=dvaleur;
            }
      
                    
                function getValue() {
                    
                        var valeur = document.getElementById("valSaisie").value;
                        let button = document.querySelector(".btncalc");
                        
                        if (valeur>0){
                            document.getElementById("mult").innerHTML="";
                            document.querySelector('.btncalc').disabled = false;
                            document.querySelector('.moin').disabled = false;
                            for(var i=1;i<=10;i++){
                            
                            document.getElementById("mult").innerHTML+=+valeur+" x "+i+" ="+valeur*i +'<br>';
                            
                        }
                        }else if (valeur<0){
                            document.querySelector('.btncalc').disabled = true;
                            document.querySelector('.moin').disabled = true;
                        } 
                    }
    
                
                     document.getElementById("mult").innerHTML="";
                         alert("Veuillez Saisir une valeur positive");
                            document.getElementById(btncalc).disabled=true;