  //alert("Hello World!");

  console.log("Start");

  heh();

  console.log("End");

  function heh(){
      try{
          $.get("/rpgprj/rest/players", function( data ) {

            for(i=0;i<data.length;i++){
               console.log(data[i]);
               $( ".table1" ).append( "<tr> <td>"+data[i].id+"</td> <td>"+data[i].name+"</td> <td>"+data[i].title+"</td> <td>"+
               data[i].race+"</td> <td>"+data[i].profession+"</td> <td>"+data[i].level+"</td> <td>"+data[i].birthday+"</td> <td>"+
               data[i].banned+"</td> </tr>");
            }


            //$( ".table1" ).html( data );


            //var htmlString =  $( "div.demo-container" ).html();
            //console.log("taken content: ");
            //console.log(htmlString);

            //htmlString =  $( ".table1" ).html();
            //console.log("taken table: ");
            //console.log(htmlString);

            //$( "div.demo-container" ).html( "Next Step..." );

          });
      } catch (error){
        console.error(error);
      }
  }
