document.getElementById("hello").addEventListener('click',function(){
    window.location.href='/blog.html'
})

function getInput(id){
    
        const inputValue = document.getElementById(id).value
        return inputValue
    
}


function gettext(id){
    const textValue = document.getElementById(id).innerText
    return textValue
}

function myBalance(my_balance){
    const currentMyBalance = document.getElementById(my_balance).innerText
    return currentMyBalance
}


function donation(btn_donation_id,donation_input_id,total_donation,my_balance,title_text){
    document.getElementById(btn_donation_id).addEventListener('click',function(){
        const donationValue = parseFloat(getInput(donation_input_id))
        const totalDonation = parseFloat(gettext(total_donation))
        const myCurrentBalance = parseFloat(myBalance(my_balance))

        const noakhaliText = document.getElementById('noakhali-text').innerText
        const feniText = document.getElementById('feni-text').innerText
        const quotaText = document.getElementById('quota-text').innerText
        
        
        if(myCurrentBalance <= 0){
           alert("You don't have enough money")
        }

        else if(!isNaN(donationValue) && donationValue !== '' && donationValue > 0 && donationValue < myCurrentBalance){
            const addedDonation = (totalDonation) + (donationValue)
            document.getElementById(total_donation).innerText = addedDonation
            
            
            
            const reduceBalance = myCurrentBalance - donationValue
            document.getElementById(my_balance).innerText = reduceBalance

            console.log(donation_input_id,donationValue,addedDonation);


            // Add history
            const div = document.createElement('div');
            const donationTime = new Date()
            div.classList.add('border','rounded-lg','my-8','px-8','py-5','space-y-3');
           
            
            div.innerHTML = `
                
                <h4 class='text-lg font-extrabold '>${donationValue} Taka is Donated for${gettext(title_text)}</h4>
                <p>Date: ${donationTime}</p>
        
            `
            

            document.getElementById('history-section').appendChild(div);


        }
        
       
        else{
            alert("Please enter valid input")
        }
       

        
        
    })
}

function showSection(id,btn_id){
    document.getElementById("donation-section").classList.add('hidden')
    document.getElementById("history-section").classList.add('hidden')
    
    document.getElementById('donation').classList.remove('bg-indigo-500');
    document.getElementById('history').classList.remove('bg-indigo-500');

    document.getElementById(id).classList.remove('hidden')
    document.getElementById(btn_id).classList.add('bg-indigo-500');
    // document.getElementById(btn_id).classList.add('bg-indigo-500')
}