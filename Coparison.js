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
 vpnlist["Exp"] = ['Express VPN',6 , 8,10];
 vpnlist["Nor"]=['Nord VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["CG"]=['CyberGhost',"security" , "Internet_speed","number of servers"];
 vpnlist["SU"]=['Surfsshark VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["PIA"]=[' Privateinternetaccess',"security" , "Internet_speed","number of servers"];
 vpnlist["IP"]=['Ipvanish VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["VY"]=['Vyper VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["STR"]=['Strong VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["TO"]=['Tourguard VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["PRO"]=['Proton VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["PRI"]=['Private VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["TB"]=['Tunel Bear',"security" , "Internet_speed","number of servers"];
 vpnlist["WI"]=['Windscribe VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["ZE"]=['Zenmate VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["BSM"]=['Bittium SafeMode Mobile VPN',"security" , "Internet_speed","number of servers"];
 vpnlist["RIPS"]=['Radio IP software',"security" , "Internet_speed","number of servers"];
 vpnlist["WIN"]=['Windscribe',"security" , "Internet_speed","number of servers"];
 vpnlist["P81"]=['Perimeter81',"security" , "Internet_speed","number of servers"];
 vpnlist["NL"]=['NordLayer',"security" , "Internet_speed","number of servers"];

function GetValue() {
var vpn1 = document.getElementById("list").value;
var vpn2 = document.getElementById("list2").value;
var data1 = vpnlist[vpn1];
var data2 = vpnlist[vpn2];

document.querySelector('.title_left').textContent = data1[0];
document.querySelector('.title_right').textContent = data2[0];

document.querySelector('.content_left .secutiry_fillment').style.width = data1[1] + '0%';
document.querySelector('.content_left .intspeed_fillment').style.width = data1[2] + '0%';
document.querySelector('.content_left .num_of_servers_fillment').style.width = data1[3] + '0%';
document.querySelector('.content_right .secutiry_fillment').style.width = data2[1] + '0%';
document.querySelector('.content_right .intspeed_fillment').style.width = data2[2] + '0%';
document.querySelector('.content_right .num_of_servers_fillment').style.width = data2[3] + '0%';
} 