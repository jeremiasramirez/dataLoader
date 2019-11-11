<?php

include "DATABASE.php";


class clients extends DATABASE{



//    get clients
    function get_clients(){

        $conection = parent::get_database();
        $table = "clientes";
        $registers = [];
        $iterator = 0;


        try{

            $sqlStatement = "SELECT * FROM $table";
            $querySql = $conection->query($sqlStatement);

            while($row = mysqli_fetch_array($querySql)){
                $registers[$iterator] = $row;
                $iterator ++;
            }

            echo json_encode(array(
                "clients" => $registers
            ));


        }catch(Exception $e){
            echo json_encode(array("err" => $e->getMessage()));
        }


    }

}
