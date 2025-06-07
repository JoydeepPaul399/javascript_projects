const expenseForm= document.getElementById('expenseForm');
const expenseList= document.getElementById('expenseList');

expenseForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const description= document.getElementById('description').value;
    const category= document.getElementById('category').value;
    const amount= document.getElementById('amount').value;

    if(description && category && !isNaN(amount)){
        const newRow= document.createElement('tr');
        newRow.innerHTML= `<td> ${description} </td>
        <td>${category} </td>
        <td>${amount} </td>`;
        expenseList.appendChild(newRow);
        console.log(description.value)
        description.value='';
        category.value='';
        amount.value='';
    }

    else{
        alert("Please fill out all fields with valid data");
    }
})