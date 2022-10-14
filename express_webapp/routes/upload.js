var express = require("express");
var router = express.Router();
const User = require('../model/User');
var user_dao = require("../sport-track-db/sport-track-db").user_dao;
const Activity = require('../model/Activity');
var activity_dao = require("../sport-track-db/sport-track-db").activity_dao;
const Data = require('../model/Data');
var data_dao = require("../sport-track-db/sport-track-db").activity_entry_dao;
const fonc = require('../calc/fonction.js');
const obj = require('../calc/objet.js');
const objbis = require('../calc/objetbis.js');


router.get("/", function (req, res, next) {
    res.render("upload", { title: "Importer un fichier" });
});

// router.post("/", function (req, res, next) {
    // try{




        // if(isset($_FILES["activites"])){
        //     $FileData = file_get_contents($_FILES["activites"]["tmp_name"]);
        //     // Decode the JSON file
        //     $json_data = json_decode($FileData,true);

        //     //rentrer les données du json dans la bdd
        //     $act = new Activities();
        //     $this->initArray();
            
        //     foreach ($json_data as $key => $value) {      //$key = activité ou data $value = tableau des attributs
        //         if($key == "activity"){                  
        //             $date = $value["date"];                   //récupérer la date de l'activité
        //             $desc = $value["description"];            //récupérer la description de l'activité
                    
        //         }elseif ($key == "data"){     
        //             foreach($value as $k => $v){          //$k = une donnée $v = tableau des attribut pour chaque donnée
        //                 $time = $v["time"];               //récupérer l'heure de la donnée
        //                 $cFreq = $v["cardio_frequency"];  //récupérer la fréquence cardiaque de la donnée
        //                 $latitude = $v["latitude"];       //récupérer la latitude de la donnée
        //                 $longitude = $v["longitude"];     //récupérer la longitude de la donnée
        //                 $altitude = $v["altitude"];       //récupérer l'altitude de la donnée
                        
        //                 //sauvegarder les attributs dans un tableau annexe
        //                 $this->dataSauv($time,$cFreq,$latitude,$longitude,$altitude);  
        //             }   
        //         }else{
        //             $this->render('error',["Une erreur est survenue lors du parcours du fichier"]);
        //             }
        //         }                
                
        //         //récupérer l'heure de début et de fin de l'activité et calculer la différence en convertissant en int
        //         $sT = strtotime($this->dataArray[0]);
        //         $eT = strtotime($this->dataArray[count($this->dataArray) - 5]);
        //         $dur = $eT - $sT;
        //         $duration = date("H:i:s",$dur);     //reconvertir le résultat en string
                
        //         //calculer la distance du parcours de l'activité 
        //     $classCalc = new CalculDistanceImpl();
        //     $parcours = array();
        //     for ($i = 2; $i < count($this->dataArray); $i = $i + 5) {
        //         array_push($parcours,['latitude' => $this->dataArray[$i], 'longitude' => $this->dataArray[$i+1]]);
        //     }
        //     $distTotale = $classCalc->calculDistanceTrajet($parcours);

        //     //récupérer les différentes fréquences cardiaques
        //     $minVal = 0;
        //     $maxVal = 2147483647;
        //     $avgVal = 0;
        //     $count = 0;
        //     $add = 0;

        //     for ($i = 1; $i < count($this->dataArray); $i = $i + 5) {       //parcourir toutes les fréquences cardiaques
        //         if($this->dataArray[$i] < $maxVal){
        //             $maxVal = $this->dataArray[$i];
        //         }
        //         if($this->dataArray[$i] > $minVal){
        //             $minVal = $this->dataArray[$i];
        //         }
        //         $add = $add + $this->dataArray[$i];
        //         $count++;
        //     }
        //     $tmp = $minVal;
        //     $minVal = $maxVal;               //fréquence cardiaque minimum
        //     $maxVal = $tmp;                  //fréquence cardiaque maximum
        //     $avgVal = intval($add/$count);   //fréquence cardiaque moyenne
            
        //     //init activity
        //     $act->init(1, $desc, $date, $this->dataArray[0], $duration, $distTotale, $minVal, $avgVal, $maxVal, $_SESSION['idUser']);
        //     //insert activityDAO
        //     ActivityDAO::getInstance()->insert($act);
                            
        //     for($i = 0; $i < count($this->dataArray); $i = $i + 5){                
        //         //init data
        //         $data = new Data();
        //         $data->init(123,$this->dataArray[$i],$this->dataArray[$i+1], $this->dataArray[$i+3], $this->dataArray[$i+2], $this->dataArray[$i+4], $act->getIdAct());
            
        //         //insert activityEntryDAO
        //         ActivityEntryDAO::getInstance()->insert($data);
        //     }  

        //     $this->render('upload_valid',[]);
        //     }
        //     if(isset($_FILES["file"])){
        //     echo realpath($_FILES["file"]["tmp_name"]);
        //     }

    // }catch(error){
    //     res.render("error", {
    //         message: "Une erreur est survenue",
    //         error: { status: 500, stack: "Veuillez réessayer" },
    //     });
    // }
// });

// private function dataSauv($time,$cFreq,$latitude,$longitude,$altitude){
//     array_push($this->dataArray,$time,$cFreq,$latitude,$longitude,$altitude);
// }

// private function initArray(){
//     $this->dataArray = array();
// }

module.exports = router;