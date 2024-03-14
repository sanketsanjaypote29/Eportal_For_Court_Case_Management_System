var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh","Assam" , "Bihar" , "Chandigarh", "Dadra & Nagar Haveli", "Daman & Diu" , "Delhi", "Goa" , "Gujarat", "Haryana","Himachal Pradesh","Jammu & Kashmir", "Jharkhand","Karnataka","Kerala" ,"Lakshadweep","Madhya Pradesh","Maharashtra", "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","Uttaranchal","West Bengal");






// var s_a = new Array();
// s_a[0]="";
// s_a[1]="alipur";
// s_a[2]="ko";
// s_a[3]="h";
// s_a[4]="f";
// s_a[5]="h";
// s_a[6]="g";
// s_a[7]="gg";
// s_a[8]="j";
// s_a[9]="j";
// s_a[10]="j";
// s_a[11]="j";
// s_a[12]="j";
// s_a[13]="j";
// s_a[14]="j";
// s_a[15]="j";
// s_a[16]="j";
// s_a[17]="j";
// s_a[18]="j";
// s_a[19]="j";
// s_a[20]="j";
// s_a[21]="j";
// s_a[22]="j";
// s_a[23]="j";
// s_a[24]="j";
// s_a[25]="j";
// s_a[26]="j";
// s_a[27]="j";
// s_a[28]="j";
// s_a[29]="j";
// s_a[30]="j";
// s_a[31]="j";
// s_a[32]="j";
// s_a[33]="j";
// s_a[34]="j";
// s_a[35]="j";

function print_state(state_id){
    var option_str = document.getElementById(state_id);
    option_str.length=0;
    option_str.options[0] = new Option('Select State' , '');
    option_str.selectedIndex = 0;
    for (var i =0; i<state_arr.length;i++){
        option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
    }
}
// function print_city(city_id , city_index){
//     var option_str = document.getElementById(city_id);
//     option_str.length=0;
//     option_str.options[0] = new Option('Select City' , '');
//     option_str.selectedIndex = 0;
//     var city_arr = s_a[city_index].split("|");
//     for(var i =0;i<city_arr.length;i++){
//         option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
//     }
// }