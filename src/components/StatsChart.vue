<template>
    <Chart type="radar" :data="chartData" :options="chartOptions" />
    <Chart type="bar" :data="stackedData" :options="stackedOptions" style="width: 100%;"/>
</template>

<script>
export default {
    data() {
        return {
            stackedData: {
                labels: ['19Fall', '20Spring', '20Fall', '21Spring'],
                datasets: [{
                    type: 'bar',
                    label: 'Reviews of John Doe',
                    backgroundColor: 'rgba(179,181,198,1)',
                    data: [50,25,12,48]
                }, {
                    type: 'bar',
                    label: 'Reviews of Amy Liu',
                    backgroundColor: 'rgba(255,99,132,1)',
                    data: [21,84,24,75]
                }]
            },
            stackedOptions: {
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
            chartData: {
                labels: ['Workload', 'Difficulty', 'Grading', 'Teaching', 'Office Hours'],
                datasets: [
                    {
                        label: 'John Doe',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 81, 56, 55]
                    },
                    {
                        label: 'Amy Liu',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [100, 48, 40, 96, 27]
                    },
                ]
            },
            chartOption: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        pointLabels: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                        angleLines: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        }
    }    
}
</script>