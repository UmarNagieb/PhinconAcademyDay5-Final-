function hitung() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const errorDay = document.getElementById('error-day');
    const errorMonth = document.getElementById('error-month');
    const errorYear = document.getElementById('error-year');
    
    errorDay.innerText = '';
    errorMonth.innerText = '';
    errorYear.innerText = '';

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        if (isNaN(day)) errorDay.innerText = 'Must be a valid date';
        if (isNaN(month)) errorMonth.innerText = 'Must be a valid date';
        if (isNaN(year)) errorYear.innerText = 'Must be a valid date';
        return;
    }

    if (day < 1 || day > 31) {
        errorDay.innerText = 'Must be a valid date';
        return;
    }

    if (month < 1 || month > 12) {
        errorMonth.innerText = 'Must be a valid date';
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        errorYear.innerText = 'Must be a valid date';
        return;
    }

    if (birthDate.getDate() !== day) {
        errorDay.innerText = 'Must be a valid date';
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').innerText = `${ageYears}`;
    document.getElementById('months').innerText = `${ageMonths}`;
    document.getElementById('days').innerText = `${ageDays}`;


    document.querySelector('.result').classList.add('animate');
    setTimeout(() => {
        document.querySelector('.result').classList.remove('animate');
    }, 1000);
}
