



const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("numba");
let a = 1;

function add() {
    console.log('shush')
    a++;
    a = (a < 10) ? "0" + a : a;
    console.log(a)
    var list = document.getElementById('numba').innerHTML=a;
}

function neg() {
    if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        var list = document.getElementById('numba').innerHTML=a;
    }
}











function results() {

    var students= {
        
        ADILAABIDEEN : {
            address : '0xb2c6D9A7b92DAD22105F7bF7aDF9a475e937fa5D',
            age : '17',
            year : '13',
            first : 'Adil',
            second : 'Aabideen',
            house : 'red',
        },
        TIMOTHYBILL : {
            address : '0x5a70c08cE6DA6d04b2f5e95293B60622F1c866aB',
            age : '17',
            year : '13',
            first : 'Timothy',
            second : 'Bill',
            house : 'red',
        },
        SERGIOAGUERO : {
            address : '0x5a70c08cE6DA6d04b2f5e95293B60622F1c866aB',
            age : '16',
            year : '10',
            first : 'Sergio',
            second : 'Aguero',
            house : 'red',
        },

    
    }


    
    var studentname = document.getElementById('nameinp').value;
    var input = studentname.toUpperCase();
    var str = input.replace(/\s/g, '');
    var defenition = students[str];
    var output=document.getElementById('output')

    if (defenition==undefined) {
        console.log('erorr')
        console.log(str)
        document.getElementById('errormessage').classList.add('active')

    } else {

        var fullname = `Name : ${defenition.first} ${defenition.second}`
        var fullage = `Age : ${defenition.age}`
        var classyear = `Year ${defenition.year}`
        var housename = `House : ${defenition.house}`
        var wa = ` Wallet Address : ${defenition.address}`
        window.sender = `${defenition.address}`
        console.log(sender)

        console.log(fullage)
        console.log(fullname)
        console.log(classyear)
        console.log(housename)
        console.log(wa)

        document.getElementById('one').innerHTML = fullname
        document.getElementById('two').innerHTML = classyear
        document.getElementById('three').innerHTML = fullage
        document.getElementById('four').innerHTML = housename
        document.getElementById('six').innerHTML = wa

        


        console.log('success')
        document.getElementById('errormessage').classList.remove('active')
        document.getElementById('nameinput').classList.add('inactive')
        document.getElementById('popupinfo').classList.add('active2')

        console.log(str)


    }



}

function test() {
    document.getElementById('errormessage').classList.remove('active')
}

function back() {
    
        document.getElementById('nameinput').classList.remove('inactive')
        document.getElementById('popupinfo').classList.remove('active2')
}

function connect() {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts =>{
        account = accounts[0];
        console.log(account)
        document.getElementById('walletadd').innerHTML = account
        window.account = account
    })
}


function login() {
    var teachers = {


        ADILAABIDEEN : {
            address : '0x5a70c08cE6DA6d04b2f5e95293B60622F1c866aB',
            certificatepermissions : 'yes',
            first : 'Adil',
            second : 'Aabideen',
            house : 'red',
        },


    }

    var teachername = document.getElementById('staff').value ;
    var input2 = teachername.toUpperCase();
    var str2 = input2.replace(/\s/g, '');
    var defenition2 = teachers[str2];
    console.log(str2)

    if (defenition2==undefined) {
        console.log('erorr')
        document.getElementById('errorlogin').classList.add('erroractive')

    } else {
        document.getElementById('bg').classList.add('backgroundinactive')
        document.getElementById('login').classList.add('logininactive')
        document.getElementById('errorlogin').classList.remove('erroractive')


    }

}


ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

contractaddress = '0xCdFdd69434341E14e0b0C5688f77Bf93520B0EF6'
const web3 = new Web3(window.ethereum);
var contract =  new web3.eth.Contract(ABI, contractaddress);
console.log(contract)

function send() {
    console.log('working')
    

    var q = a*10**18
    console.log(q)
    
    senderadd = String(sender)
    accountadd = String(account)
    

    contract.methods.transfer(sender, 10).send({from:
        accountadd}, function(error, transactionHash){
            console.log(transactionHash)
    })

    

   


}