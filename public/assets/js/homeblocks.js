
const teamContainer = document.getElementById('team-number')
const clientContainer = document.getElementById('client-number')


async function getDashboardSummary(){
    const response = await fetch('/dashboard-summary')
    if(response.status === 200){
        const summary = await response.json();
        return summary
    }else{
        const summary = null
        return summary
    }
    
}


getDashboardSummary().then(summary =>{
    if(summary){
        teamContainer.innerrText = summary.clients
        clientsContainer.innerText = summary.team
    }else{
        teamContainer.innerText = "faled"
    }
})


// getWallet().then(walletdata =>{
//     if(walletdata.message == undefined){
//         walletObject = {
//             figure: walletdata.totalBalance,
//             words: walletdata.balanceWords
//         }
//         figureDiv.innerHTML = `<span class="amount">&#8358 ${walletObject.figure.toLocaleString()} 
//                             </span>`;
//         wordDiv.innerHTML = `<div class="amount capitalize" style="text-transform: capitalize;">${walletObject.words} <span class="currency currency-usd">Naira</span></div>`
        
//     }else{
//         figureDiv.innerHTML = `<span class="amount">${walletdata.message} 
//                             </span>`;
//         wordDiv.innerHTML = `<div class="amount capitalize" style="text-transform: capitalize;">${walletdata.message}  </div>`
//     }

// })