function calculateDifference() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    
    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById("result").innerText = "Please enter valid dates.";
        return;
    }

    // Check if end date is earlier than start date
    if (endDate < startDate) {
        document.getElementById("result").innerText = "End date must be after start date.";
        return;
    }

    const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = endDate.getMonth() - startDate.getMonth();
    const daysDifference = endDate.getDate() - startDate.getDate();

    // Adjust for negative values
    let totalYears = yearsDifference;
    let totalMonths = monthsDifference;
    let totalDays = daysDifference;

    if (totalDays < 0) {
        totalMonths--;
        totalDays += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    if (totalMonths < 0) {
        totalYears--;
        totalMonths += 12;
    }

    document.getElementById("result").innerText = 
        `Difference: ${totalYears} years, ${totalMonths} months, and ${totalDays} days.`;
}
