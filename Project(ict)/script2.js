let button = document.getElementById('btn');
button.addEventListener('click', ()=>{
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('output');
    let height_status= false, weight_status=false;

    if(height ==='' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = 'Please provide valid height';
    }
    else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }
    if(weight ==='' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = 'Please provide valid weight';}
        else{
            document.getElementById('weight_error').innerHTML = '';
            weight_status = true;   
        }
        if(height_status && weight_status){
            const bmi = ( weight / (height * height)).toFixed(2);
            console.log(height, weight, bmi);
            if(bmi<18.5){
                result.innerHTML = 'Under weight : ' + bmi;
            }else if(bmi >=18.5 && bmi<24.9){
                result.innerHTML = 'Normal :  ' + bmi;
            }else{
                result.innerHTML = 'Over weight : ' + bmi;
            }
        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }
});