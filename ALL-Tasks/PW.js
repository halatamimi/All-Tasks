function filterTasks(status) {
    const taskRows = document.querySelectorAll('#tasks table tr');
    
    taskRows.forEach(row => {
        if (status === 'all' || row.children[2].children[0].value === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}