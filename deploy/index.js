const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.Server(app);

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://' + process.env.BLOCKCHAINAPI ));

const leaseABI = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfProducts","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssigned","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deleteAllProducts","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_model","type":"string"},{"name":"_image","type":"string"},{"name":"_price","type":"uint256"}],"name":"addProduct","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProduct","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"assignLease","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_duration","type":"uint256"}],"name":"setDuration","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"}],"name":"Killed","type":"event"},{"anonymous":false,"inputs":[],"name":"DeletingAllProducts","type":"event"},{"anonymous":false,"inputs":[],"name":"AllProductsDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"string"},{"indexed":true,"name":"_model","type":"string"},{"indexed":true,"name":"_price","type":"uint256"},{"indexed":false,"name":"_index","type":"uint256"}],"name":"AddingProduct","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_index","type":"uint256"}],"name":"ProductAdded","type":"event"}];

 const leaseByteCode = '0x6060604052341561000f57600080fd5b5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548160ff0219169083151502179055506000600281905550600060048190555060006005819055505b5b610c41806100946000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806320965255146100a75780633ffd81fb146100d057806341c0e1b5146100f95780634fcd05ce1461010e5780636a14999a1461013b5780638165fed514610150578063ad2e8c9b1461023c578063b9db15b414610265578063dfcf78a0146103e3578063f6be71d1146103f8575b600080fd5b34156100b257600080fd5b6100ba61041b565b6040518082815260200191505060405180910390f35b34156100db57600080fd5b6100e3610426565b6040518082815260200191505060405180910390f35b341561010457600080fd5b61010c610431565b005b341561011957600080fd5b610121610547565b604051808215151515815260200191505060405180910390f35b341561014657600080fd5b61014e61055f565b005b341561015b57600080fd5b61023a600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091908035906020019091905050610628565b005b341561024757600080fd5b61024f610826565b6040518082815260200191505060405180910390f35b341561027057600080fd5b6102866004808035906020019091905050610831565b60405180806020018060200180602001858152602001848103845288818151815260200191508051906020019080838360005b838110156102d55780820151818401525b6020810190506102b9565b50505050905090810190601f1680156103025780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101561033c5780820151818401525b602081019050610320565b50505050905090810190601f1680156103695780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b838110156103a35780820151818401525b602081019050610387565b50505050905090810190601f1680156103d05780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b34156103ee57600080fd5b6103f6610aeb565b005b341561040357600080fd5b6104196004808035906020019091905050610b09565b005b600060055490505b90565b600060045490505b90565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610544577f4b0bc4f25f8d0b92d2e12b686ba96cd75e4e69325e6cf7b1f3119d14eaf2cbdf6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b6000600360009054906101000a900460ff1690505b90565b60007f8dd8d526887d0d01fc20c35a28f261ac750472847908960a8fd997a736d9302f60405160405180910390a1600090505b6004548110156105f85760016000828152602001908152602001600020600080820160006105c09190610b14565b6001820160006105d09190610b14565b6002820160006105e09190610b14565b600382016000905550505b8080600101915050610592565b7f5df1a7a15c53a53ae7d055893d87cb9d0d0b12334046706cbee33860e6957d8560405160405180910390a15b50565b80836040518082805190602001908083835b60208310151561066057805182525b60208201915060208101905060208303925061063a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020856040518082805190602001908083835b6020831015156106c457805182525b60208201915060208101905060208303925061069e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fddaa647cfc0b81dd3efc1813473a4b820e0d629b12e3676ca5dae197f7b5bd296004546040518082815260200191505060405180910390a4836001600060045481526020019081526020016000206000019080519060200190610756929190610b5c565b50826001600060045481526020019081526020016000206001019080519060200190610783929190610b5c565b508160016000600454815260200190815260200160002060020190805190602001906107b0929190610b5c565b508060016000600454815260200190815260200160002060030181905550600460008154809291906001019190505550806005600082825401925050819055506004547f4fc9d5acc453e78e01b205af5788a1c62f195c4b5cdc8eb8f1c670863b7e736a60405160405180910390a25b50505050565b600060025490505b90565b610839610bdc565b610841610bdc565b610849610bdc565b600080851015801561085c575060045485105b15610a9b576001600086815260200190815260200160002060000160016000878152602001908152602001600020600101600160008881526020019081526020016000206002016001600089815260200190815260200160002060030154838054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561094f5780601f106109245761010080835404028352916020019161094f565b820191906000526020600020905b81548152906001019060200180831161093257829003601f168201915b50505050509350828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109eb5780601f106109c0576101008083540402835291602001916109eb565b820191906000526020600020905b8154815290600101906020018083116109ce57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a875780601f10610a5c57610100808354040283529160200191610a87565b820191906000526020600020905b815481529060010190602001808311610a6a57829003601f168201915b505050505091509350935093509350610ae4565b60006020604051908101604052806000815250906020604051908101604052806000815250906020604051908101604052806000815250908090509350935093509350610ae4565b5b9193509193565b6001600360006101000a81548160ff0219169083151502179055505b565b806002819055505b50565b50805460018160011615610100020316600290046000825580601f10610b3a5750610b59565b601f016020900490600052602060002090810190610b589190610bf0565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b9d57805160ff1916838001178555610bcb565b82800160010185558215610bcb579182015b82811115610bca578251825591602001919060010190610baf565b5b509050610bd89190610bf0565b5090565b602060405190810160405280600081525090565b610c1291905b80821115610c0e576000816000905550600101610bf6565b5090565b905600a165627a7a72305820297b7e9d2639d7d99d98735c5c18b9494291d56aeb2cee7707587b6996e0f2040029';
app.set('assets',__dirname + "./assets");

app.use(express.static(__dirname));

app.get('/api/securities', function(req, res){
	res.jsonp({ data: [
    {   name: 'The First Security',
        leases: [
            {   product: {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
                duration: 48,
                assigned: true
            },
            {   product: {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
                duration: 48,
                assigned: true
            },
            {   product: {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
                duration: 48,
                assigned: true
            }
        ],
        owners: [
            {name: 'John S', share: 25},
            {name: 'Jane D', share: 25},
            {name: 'Rich R', share: 25},
            {name: 'Steve A', share: 25},
        ],
        completed: true
    },
    {name: 'Second Security',
        leases: [
            {product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true
            },
            {product: {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 48,
            assigned: true
            }
        ],
        owners: [
            {name: 'John S', share: 10},
            {name: 'Jane D', share: 70},
            {name: 'Rich R', share: 20}
        ],
        completed: true
    },
    {name: 'A New Security',
        leases: [
            {product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true
            },
            {product: { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
            duration: 48,
            assigned: true
            }
        ],
        owners: [],
        completed: false
    }
    ]});
});

app.get('/api/products', function(req, res){
	res.jsonp({data: [
     {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
     {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
     {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
     {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true}
    ]});
});

app.get('/api/leases', function(req, res){
	res.jsonp({data: [
        {   product: {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
            duration: 36,
            assigned: false
        },
        {   product: {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
            duration: 48,
            assigned: false
        },
        {   product: {name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 60,
            assigned: false
        },
        {   product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true},
        {   product: {name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 36,
            assigned: true
        }
    ]});
});

app.post('/api/leases/add', function(req, res) {
    console.log('Adding lease');
    const duration=req.body.duration;
    const lease = new web3.eth.Contract(leaseABI);
    web3.eth.personal.unlockAccount('0xbc006b353770becc7fdecfd11eff9633a3ea651f','password01');
    lease.deploy({data: leaseByteCode}).send({from: '0xbc006b353770becc7fdecfd11eff9633a3ea651f', gas: 4700000})
        .on('error', function(error){console.error(error);})
        .then(function(newContractInstance){
               console.log(newContractInstance.options.address);
                newContractInstance.methods.setDuration(duration).send({from: '0xbc006b353770becc7fdecfd11eff9633a3ea651f', gas: 4700000})
                .on('error', function(error){console.error(error);})
                .on('receipt',function(receipt){newContractInstance.methods.getDuration()
                        .call({from: '0xbc006b353770becc7fdecfd11eff9633a3ea651f'}).then(console.log);
                });
        });
    });

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT);
