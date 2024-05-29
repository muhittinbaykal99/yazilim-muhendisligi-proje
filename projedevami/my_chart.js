const doughnutctx = document.getElementById('doughnutChart').getContext('2d');
const myDoughnutChart = new Chart(doughnutctx, {
    type: 'doughnut',
    data: {
        labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        datasets: [{
            label: 'Daily Scanned Websites',
            data: [9, 3, 2, 5, 12, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true,
    }
});

var barctx = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(barctx, {
    type: 'bar',
    data: {
        labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        datasets: [{
            label: 'Daily Scanned Websites',
            data: [9, 3, 2, 5, 12, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true,
    }
});