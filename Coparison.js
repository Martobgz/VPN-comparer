  function Hide2() {
    var hide2 = document.getElementById("list2").selectedIndex;
    if (hide2 != '') {
      for (var i = 0; i < list.length; i++) {
        document.getElementById("list").options[i].disabled = false;
      }
      document.getElementById("list").options[hide2].disabled = true
    }
  }
  function Hide() {
    var hide = document.getElementById("list").selectedIndex;
    if (hide != '') {
      for (var i = 0; i < list.length; i++) {
        document.getElementById("list2").options[i].disabled = false;
      }
      document.getElementById("list2").options[hide].disabled = true
    }
  }
var vpnlist = [];
 vpnlist["Exp"] = ['Express VPN',6 , 9,8];
 vpnlist["Nor"]=['Nord VPN',10 ,8 ,9];
 vpnlist["CG"]=['CyberGhost',8 , 10,10];
 vpnlist["SU"]=['Surfsshark VPN',9 , 8,8];
 vpnlist["PIA"]=[' Privateinternetaccess',8 , 6,10];
 vpnlist["IP"]=['Ipvanish VPN',8 , 9,8];
 vpnlist["VY"]=['Vyper VPN',7 , 7,6];
 vpnlist["STR"]=['Strong VPN',6 , 10,6];
 vpnlist["TO"]=['Tourguard VPN',9 , 8,8];
 vpnlist["PRO"]=['Proton VPN',8 , 5,8];
 vpnlist["PRI"]=['Private VPN',8 , 3,4];
 vpnlist["TB"]=['Tunel Bear',7 , 2,8];
 vpnlist["WI"]=['Windscribe VPN',5 , 5,5];
 vpnlist["ZE"]=['Zenmate VPN',3 , 2,8];
 vpnlist["BSM"]=['Bittium SafeMode Mobile VPN',5 , 4,3];
 vpnlist["RIPS"]=['Radio IP software',3 , 3,2];
 vpnlist["P81"]=['Perimeter81',6 , 5,6];
 vpnlist["NL"]=['NordLayer',5 , 4,1];
function GetValue() {
var vpn1 = document.getElementById("list").value;
var vpn2 = document.getElementById("list2").value;
var data1 = vpnlist[vpn1];
var data2 = vpnlist[vpn2];


document.querySelector('.title_left').textContent = data1[0];
document.querySelector('.title_right').textContent = data2[0];

document.querySelector('.content_left .secutiry_fillment').style.width = data1[1] + '0%';
if (data1[1]<3) {document.querySelector('.content_left .secutiry_fillment').style.backgroundColor = "red";}
else {document.querySelector('.content_left .secutiry_fillment').style.backgroundColor = "green";}

document.querySelector('.content_left .intspeed_fillment').style.width = data1[2] + '0%';
if (data1[2]<3) {document.querySelector('.content_left .intspeed_fillment').style.backgroundColor = "red";console.log("red");}
else {document.querySelector('.content_left .intspeed_fillment').style.backgroundColor = "green";}

document.querySelector('.content_left .num_of_servers_fillment').style.width = data1[3] + '0%';
if (data1[3]<3) {document.querySelector('.content_left .num_of_servers_fillment').style.backgroundColor = "red";}
else {document.querySelector('.content_left .num_of_servers_fillment').style.backgroundColor = "green";}

document.querySelector('.content_right .secutiry_fillment').style.width = data2[1] + '0%';
if (data2[1]<3) {document.querySelector('.content_right .secutiry_fillment').style.backgroundColor = "red";}
else {document.querySelector('.content_right  .secutiry_fillment').style.backgroundColor = "green";}

document.querySelector('.content_right .intspeed_fillment').style.width = data2[2] + '0%';
if (data2[2]<3) {document.querySelector('.content_right  .intspeed_fillment').style.backgroundColor = "red";}
else {document.querySelector('.content_right  intspeed_fillment').style.backgroundColor = "green";}

document.querySelector('.content_right .num_of_servers_fillment').style.width = data2[3] + '0%';
if (data2[3]<3) {document.querySelector('.content_right  .num_of_servers_fillment').style.backgroundColor = "red";}
else {document.querySelector('.content_right  .num_of_servers_fillment').style.backgroundColor = "green";}
} 