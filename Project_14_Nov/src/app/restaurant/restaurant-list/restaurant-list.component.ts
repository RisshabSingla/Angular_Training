import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent {
  
  restaurantLists = [];
  
  constructor(){
    this.restaurantLists = [{
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceb9"
      },
      "restaurantName": "Thoughtworks",
      "address": "Suite 69",
      "cuisines": "IRSA Propiedades Comerciales S.A."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceba"
      },
      "restaurantName": "Divavu",
      "address": "Room 1027",
      "cuisines": "Q2 Holdings, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecebb"
      },
      "restaurantName": "Wikido",
      "address": "Room 768",
      "cuisines": "Orion Group Holdings, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecebc"
      },
      "restaurantName": "Myworks",
      "address": "Apt 1599",
      "cuisines": "PowerShares Golden Dragon China Portfolio"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecebd"
      },
      "restaurantName": "Thoughtmix",
      "address": "Suite 98",
      "cuisines": "Commercial Metals Company"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecebe"
      },
      "restaurantName": "Edgeblab",
      "address": "Suite 62",
      "cuisines": "Cavium, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecebf"
      },
      "restaurantName": "Kwideo",
      "address": "Room 927",
      "cuisines": "Virtus Investment Partners, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec0"
      },
      "restaurantName": "Voonder",
      "address": "Apt 490",
      "cuisines": "Sportsman's Warehouse Holdings, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec1"
      },
      "restaurantName": "Feedspan",
      "address": "17th Floor",
      "cuisines": "Eaton Vance Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec2"
      },
      "restaurantName": "Feedfire",
      "address": "Apt 509",
      "cuisines": "Triangle Capital Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec3"
      },
      "restaurantName": "Wikizz",
      "address": "Apt 880",
      "cuisines": "Umpqua Holdings Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec4"
      },
      "restaurantName": "Innotype",
      "address": "12th Floor",
      "cuisines": "AT&T Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec5"
      },
      "restaurantName": "Zoomlounge",
      "address": "17th Floor",
      "cuisines": "Comtech Telecommunications Corp."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec6"
      },
      "restaurantName": "Tagfeed",
      "address": "Apt 1372",
      "cuisines": "Independent Bank Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec7"
      },
      "restaurantName": "Jaxbean",
      "address": "Room 316",
      "cuisines": "MFS Intermediate Income Trust"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec8"
      },
      "restaurantName": "Myworks",
      "address": "Suite 53",
      "cuisines": "Regal Beloit Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecec9"
      },
      "restaurantName": "Wordtune",
      "address": "PO Box 3815",
      "cuisines": "JMU Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeececa"
      },
      "restaurantName": "Fiveclub",
      "address": "Apt 83",
      "cuisines": "Star Bulk Carriers Corp."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeececb"
      },
      "restaurantName": "Avaveo",
      "address": "Suite 59",
      "cuisines": "MetLife, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeececc"
      },
      "restaurantName": "Skinte",
      "address": "PO Box 87746",
      "cuisines": "Southern Company (The)"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeececd"
      },
      "restaurantName": "Tagchat",
      "address": "Room 314",
      "cuisines": "ASA Gold and Precious Metals Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecece"
      },
      "restaurantName": "Skiba",
      "address": "12th Floor",
      "cuisines": "Zion Oil & Gas Inc"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeececf"
      },
      "restaurantName": "Zazio",
      "address": "Suite 80",
      "cuisines": "Bright Scholar Education Holdings Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced0"
      },
      "restaurantName": "Oyondu",
      "address": "Suite 42",
      "cuisines": "Carter's, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced1"
      },
      "restaurantName": "Muxo",
      "address": "PO Box 21629",
      "cuisines": "Templeton Global Income Fund, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced2"
      },
      "restaurantName": "Shuffledrive",
      "address": "9th Floor",
      "cuisines": "MAM Software Group, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced3"
      },
      "restaurantName": "Skimia",
      "address": "Room 431",
      "cuisines": "ENDRA Life Sciences Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced4"
      },
      "restaurantName": "Centimia",
      "address": "PO Box 35159",
      "cuisines": "MFA Financial, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced5"
      },
      "restaurantName": "Rhyzio",
      "address": "Suite 15",
      "cuisines": "PartnerRe Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced6"
      },
      "restaurantName": "Thoughtbridge",
      "address": "Suite 60",
      "cuisines": "Qwest Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced7"
      },
      "restaurantName": "Livefish",
      "address": "Suite 99",
      "cuisines": "Saban Capital Acquisition Corp."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced8"
      },
      "restaurantName": "Brainverse",
      "address": "5th Floor",
      "cuisines": "Ryder System, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeced9"
      },
      "restaurantName": "Realpoint",
      "address": "Room 1150",
      "cuisines": "MSG Networks Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceda"
      },
      "restaurantName": "Plambee",
      "address": "19th Floor",
      "cuisines": "Allete, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecedb"
      },
      "restaurantName": "Rhyloo",
      "address": "19th Floor",
      "cuisines": "CSX Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecedc"
      },
      "restaurantName": "Twinder",
      "address": "PO Box 41174",
      "cuisines": "Electrum Special Acquisition Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecedd"
      },
      "restaurantName": "Kwimbee",
      "address": "Room 927",
      "cuisines": "LINE Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecede"
      },
      "restaurantName": "Kimia",
      "address": "PO Box 26030",
      "cuisines": "Archrock, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecedf"
      },
      "restaurantName": "Skidoo",
      "address": "Room 720",
      "cuisines": "Texas Capital Bancshares, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee0"
      },
      "restaurantName": "Zooxo",
      "address": "Suite 7",
      "cuisines": "Check-Cap Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee1"
      },
      "restaurantName": "Skyvu",
      "address": "Room 1729",
      "cuisines": "Builders FirstSource, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee2"
      },
      "restaurantName": "Voonder",
      "address": "Room 910",
      "cuisines": "Swift Transportation Company"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee3"
      },
      "restaurantName": "DabZ",
      "address": "Suite 34",
      "cuisines": "Equity Lifestyle Properties, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee4"
      },
      "restaurantName": "Tekfly",
      "address": "Apt 34",
      "cuisines": "Stone Harbor Emerging Markets Total Income Fund"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee5"
      },
      "restaurantName": "Dazzlesphere",
      "address": "Room 620",
      "cuisines": "First Trust South Korea AlphaDEX Fund"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee6"
      },
      "restaurantName": "Oyonder",
      "address": "Apt 765",
      "cuisines": "Banco Bradesco Sa"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee7"
      },
      "restaurantName": "Zooveo",
      "address": "Room 1868",
      "cuisines": "Kayne Anderson Acquisition Corp."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee8"
      },
      "restaurantName": "Zoomdog",
      "address": "Room 146",
      "cuisines": "Vaalco Energy Inc"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecee9"
      },
      "restaurantName": "Mynte",
      "address": "Suite 77",
      "cuisines": "ASV Holdings, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceea"
      },
      "restaurantName": "Omba",
      "address": "Room 691",
      "cuisines": "Mechel PAO"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceeb"
      },
      "restaurantName": "Wikido",
      "address": "PO Box 5576",
      "cuisines": "Assured Guaranty Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceec"
      },
      "restaurantName": "Aibox",
      "address": "Suite 96",
      "cuisines": "Roka Bioscience, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceed"
      },
      "restaurantName": "Babblestorm",
      "address": "Suite 100",
      "cuisines": "CYREN Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceee"
      },
      "restaurantName": "Camimbo",
      "address": "Room 45",
      "cuisines": "Black Hills Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceef"
      },
      "restaurantName": "Twitterlist",
      "address": "Room 1461",
      "cuisines": "PC-Tel, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef0"
      },
      "restaurantName": "Kimia",
      "address": "PO Box 16615",
      "cuisines": "Vedanta  Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef1"
      },
      "restaurantName": "Kazio",
      "address": "Apt 426",
      "cuisines": "Stewart Information Services Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef2"
      },
      "restaurantName": "Skinte",
      "address": "Room 148",
      "cuisines": "Colony NorthStar, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef3"
      },
      "restaurantName": "Thoughtbeat",
      "address": "14th Floor",
      "cuisines": "Internet Gold Golden Lines Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef4"
      },
      "restaurantName": "Geba",
      "address": "Room 894",
      "cuisines": "Barclays Inverse US Treasury Composite ETN"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef5"
      },
      "restaurantName": "Blognation",
      "address": "PO Box 56845",
      "cuisines": "Cushing Energy Income Fund (The)"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef6"
      },
      "restaurantName": "Kazio",
      "address": "Apt 1915",
      "cuisines": "Goldman Sachs Group, Inc. (The)"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef7"
      },
      "restaurantName": "Wikido",
      "address": "Room 1329",
      "cuisines": "Texas Capital Bancshares, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef8"
      },
      "restaurantName": "Twitterlist",
      "address": "PO Box 30059",
      "cuisines": "Cardtronics plc"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecef9"
      },
      "restaurantName": "Meevee",
      "address": "Room 1800",
      "cuisines": "Blackrock MuniYield Fund, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecefa"
      },
      "restaurantName": "Voonix",
      "address": "Suite 52",
      "cuisines": "Brocade Communications Systems, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecefb"
      },
      "restaurantName": "Janyx",
      "address": "13th Floor",
      "cuisines": "Navios Maritime Holdings Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecefc"
      },
      "restaurantName": "Yakijo",
      "address": "Apt 1848",
      "cuisines": "Cadence Design Systems, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecefd"
      },
      "restaurantName": "Avamba",
      "address": "7th Floor",
      "cuisines": "DTE Energy Company"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecefe"
      },
      "restaurantName": "Mydeo",
      "address": "PO Box 16554",
      "cuisines": "Callidus Software, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeeceff"
      },
      "restaurantName": "Voonte",
      "address": "PO Box 85974",
      "cuisines": "Lehman ABS Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf00"
      },
      "restaurantName": "Jabbersphere",
      "address": "PO Box 89525",
      "cuisines": "First Trust Germany AlphaDEX Fund"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf01"
      },
      "restaurantName": "Trilia",
      "address": "19th Floor",
      "cuisines": "Social Reality, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf02"
      },
      "restaurantName": "Topicshots",
      "address": "Room 1340",
      "cuisines": "Michael Kors Holdings Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf03"
      },
      "restaurantName": "Brainverse",
      "address": "11th Floor",
      "cuisines": "PICO Holdings Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf04"
      },
      "restaurantName": "Mydo",
      "address": "PO Box 87113",
      "cuisines": "Telefonica Brasil S.A."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf05"
      },
      "restaurantName": "Meemm",
      "address": "Room 283",
      "cuisines": "Mexico Fund, Inc. (The)"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf06"
      },
      "restaurantName": "Gabtune",
      "address": "Room 1862",
      "cuisines": "Blackrock MuniVest Fund II, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf07"
      },
      "restaurantName": "Pixonyx",
      "address": "PO Box 3644",
      "cuisines": "Nomad Foods Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf08"
      },
      "restaurantName": "Trupe",
      "address": "Apt 1296",
      "cuisines": "Consolidated Edison Inc"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf09"
      },
      "restaurantName": "Kayveo",
      "address": "Room 722",
      "cuisines": "Merus N.V."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0a"
      },
      "restaurantName": "Omba",
      "address": "Apt 309",
      "cuisines": "Imperva, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0b"
      },
      "restaurantName": "Viva",
      "address": "PO Box 11844",
      "cuisines": "Sapiens International Corporation N.V."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0c"
      },
      "restaurantName": "Meemm",
      "address": "Apt 74",
      "cuisines": "Marcus Corporation (The)"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0d"
      },
      "restaurantName": "Kimia",
      "address": "19th Floor",
      "cuisines": "PowerShares DWA Industrials Momentum Portfolio"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0e"
      },
      "restaurantName": "Riffpedia",
      "address": "Suite 94",
      "cuisines": "Highwoods Properties, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf0f"
      },
      "restaurantName": "Dablist",
      "address": "Apt 1441",
      "cuisines": "Allscripts Healthcare Solutions, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf10"
      },
      "restaurantName": "Bubbletube",
      "address": "Suite 1",
      "cuisines": "Recon Technology, Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf11"
      },
      "restaurantName": "Tagchat",
      "address": "Room 1584",
      "cuisines": "Renesola Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf12"
      },
      "restaurantName": "Muxo",
      "address": "PO Box 87940",
      "cuisines": "Louisiana-Pacific Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf13"
      },
      "restaurantName": "Demizz",
      "address": "Suite 12",
      "cuisines": "Federal Agricultural Mortgage Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf14"
      },
      "restaurantName": "Browsedrive",
      "address": "Suite 41",
      "cuisines": "Hormel Foods Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf15"
      },
      "restaurantName": "Skinix",
      "address": "Room 974",
      "cuisines": "Eclipse Resources Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf16"
      },
      "restaurantName": "Twitterlist",
      "address": "Room 1620",
      "cuisines": "CenterState Banks, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf17"
      },
      "restaurantName": "Yacero",
      "address": "Suite 1",
      "cuisines": "Canadian Natural Resources Limited"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf18"
      },
      "restaurantName": "Devbug",
      "address": "Room 286",
      "cuisines": "Tortoise Energy Independence Fund, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf19"
      },
      "restaurantName": "Gabcube",
      "address": "Suite 25",
      "cuisines": "Kyocera Corporation"
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf1a"
      },
      "restaurantName": "Youspan",
      "address": "5th Floor",
      "cuisines": "Willbros Group, Inc."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf1b"
      },
      "restaurantName": "Youbridge",
      "address": "Apt 984",
      "cuisines": "WAVE Life Sciences Ltd."
    }, {
      "id": {
        "$oid": "6736df1dfc13ae6dcaeecf1c"
      },
      "restaurantName": "Gabtune",
      "address": "Room 522",
      "cuisines": "Federated Premier Municipal Income Fund"
    }]
  }
}
